# AbraMusic · 网易云 / QQ音乐 → Apple Music 歌单导入
<p align="center">
	<a href="https://github.com/Ryansu3/AbraMusic">
	  <img src="assets/logo.png" width="200" alt="AbraMusic" />
	</a>
</p>

> 一个 Tampermonkey 用户脚本，在 Apple Music 网页播放器中复用其内置 MusicKit 实例，将网易云 / QQ音乐歌单（或文本清单）搜索匹配后导入为 Apple Music 歌单。

当前版本：**v0.4.6**

---

## 工作原理

脚本注入 `https://music.apple.com/*`，通过 `unsafeWindow.MusicKit.getInstance()` 获取**页面自身已初始化的 MusicKit 实例**，复用 Apple 为网页播放器预签发的 developer token（JWT）。因此所有 Apple Music API 调用均以「网页版合法会话」身份发起，规避了个人开发者鉴权成本。

外部源（网易云 / QQ音乐）的歌单抓取，拿到 `{title, artist, durationMs}` 三元组后进入本地匹配引擎，与 Apple Music 曲库逐一匹配，最终批量写入目标歌单。

---

## 功能特性

- **多来源输入**：网易云歌单（链接）、QQ音乐歌单（链接）、纯文本「歌名 - 歌手」清单
- **智能匹配**：Levenshtein 编辑距离 + 标题拆分（主体 / 括号）+ 动态权重 + 时长校验
- **三级匹配决策**：自动匹配 / 存疑待选 / 未匹配，存疑歌曲交由用户在候选列表中人工确认，避免导错版本
- **导入到已有歌单自动去重**：基于 catalog 歌曲 ID 比对，跳过已存在曲目
- **可中断**：抓取 / 匹配 / 去重各阶段均支持取消

---

## 安装

1. 浏览器安装 [Tampermonkey](https://www.tampermonkey.net/)（或同类用户脚本管理器）
2. 在 GreasyFork 搜索关键词 `网易云/QQ音乐 → Apple Music 歌单导入` 安装；或直接复制本仓库 `.user.js` 文件内容粘贴至新建脚本

> 脚本仅在 `music.apple.com` 下运行，`@grant` 仅声明 `GM_xmlhttpRequest` 与 `unsafeWindow`，无其他权限。

---

## 使用

1. 打开并登录 [music.apple.com](https://music.apple.com)（中国大陆区账号）
2. 点击页面右下角浮动按钮 **🎵 导入歌单**
3. 在弹窗中粘贴来源，选择「新建歌单」或「添加到已有歌单」
4. 等待匹配；如有存疑歌曲，在候选列表中逐首确认
5. 完成后查看导入统计与未匹配列表

### 输入格式

| 类型          | 示例                                               |
| ----------- | ------------------------------------------------ |
| 网易云链接 / ID  | `https://music.163.com/#/playlist?id=2819917002` |
| QQ音乐链接 / ID | `https://y.qq.com/n/ryqq/playlist/7223826498`    |
| 文本清单        | 每行一首 `歌名 - 歌手`                                   |

---

## 匹配算法

**候选搜索**：调用 `GET /v1/catalog/{storefront}/search?term={title+artist}&types=songs&limit=N`

**相似度**：对归一化后的字符串计算 Levenshtein 编辑距离，转换为 `sim ∈ [0,1]`。

**标题拆分**：正则提取括号部分（`（）【】[]<《》`），主体与括号分别打分，正确区分「晴天」与「晴天 (Live)」。

**综合分动态权重**：

| 条件        | 标题主体 | 标题括号 | 歌手   | 时长   |
| --------- | ---- | ---- | ---- | ---- |
| 有时长       | 0.5  | 0.1  | 0.25 | 0.15 |
| 无时长（如 QQ） | 0.6  | 0.1  | 0.3  | —    |

**三级决策阈值**：

| 级别   | 条件                                                    |
| ---- | ----------------------------------------------------- |
| 自动匹配 | 综合分 ≥ 0.80 且标题相似度 ≥ 0.75 且歌手分 ≥ 0.65；或综合分 ≥ 0.85 直接命中 |
| 存疑待选 | 综合分 0.40 ~ 0.80，或第一/第二候选分差 < 0.08                     |
| 未匹配  | 综合分 < 0.40                                            |

---

## 关键可调参数

```js
const STOREFRONT            = 'cn';   // Apple Music 区域
const SEARCH_LIMIT          = 8;      // 每首搜索候选数
const SEARCH_DELAY_MS       = 300;    // 搜索间隔（规避 429）
const ADD_BATCH_SIZE        = 50;     // 单次写入歌单上限
const AUTO_MIN_SCORE        = 0.80;   // 自动匹配综合分门槛
const AUTO_HIGH_SCORE       = 0.85;   // 高分直匹配门槛
const AMBIGUOUS_MIN_SCORE   = 0.40;   // 存疑下限
```

---

## 已知限制

- 仅适配**中国大陆区** Apple Music 账号（`storefront=cn`）
- 极冷门或 Apple Music 未收录曲目无法匹配，将列入未匹配清单
- 大批量导入受 Apple 接口限流约束，速度约 3 首/秒
- QQ音乐抓取依赖 `zzb` 签名算法，签名失效时需重新逆向

---

## 技术栈

原生 JavaScript（IIFE），无任何构建步骤与运行时依赖；运行于 Tampermonkey 沙箱，通过 `unsafeWindow` 桥接页面 MusicKit。

---

## 反馈

使用问题或功能建议欢迎提 Issue / PR，或在 GreasyFork 留言。

参考了项目关于qq音乐歌单解析的逻辑，感谢分享： https://github.com/Bistutu/GoMusic 
