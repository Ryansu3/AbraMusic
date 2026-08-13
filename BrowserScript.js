// ==UserScript==
// @name         网易云/QQ音乐 → Apple Music 歌单导入
// @namespace    https://github.com/Ryansu3/AbraMusic
// @license  GNU General Public License v3.0
// @version      0.5.0
// @description  在 Apple Music 网页播放器里，复用其内置 MusicKit 实例，把网易云/QQ音乐歌单（或粘贴的"歌名-歌手"文本）搜索匹配后导入成 Apple Music 歌单。支持存疑歌曲人工确认、导入到已有歌单（自动去重）。
// @author       RyanZzz3
// @icon         data:image/png;base64,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
// @match        https://music.apple.com/*
// @run-at       document-idle
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @connect      music.163.com
// @connect      c.y.qq.com
// @connect      y.qq.com
// @connect      *
// @noframes
// ==/UserScript==

/* eslint-disable no-console */
(function () {
  'use strict';

  // 沙箱下 unsafeWindow 才是页面真实的 window；用它才能拿到页面里加载的 MusicKit
  const W = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;
  console.log('%c[AM导入] 脚本已加载 v0.4.6；页面 MusicKit 可用? ', 'color:#fa233b;font-weight:bold', typeof W.MusicKit !== 'undefined');

  // ============== 可调参数 ==============
  const STOREFRONT = 'cn';                 // Apple Music 区域，中国大陆 = cn
  const SEARCH_LIMIT = 8;                  // 每首歌搜索返回候选数
  const SEARCH_DELAY_MS = 300;             // 每次搜索间隔（避免 429）
  const ADD_BATCH_SIZE = 50;               // 单次加入歌单的歌曲数上限
  const EXISTING_PLAYLIST_LIMIT = 100;     // 拉取"已有歌单"列表时的上限
  const EXISTING_TRACKS_PAGE_SIZE = 100;   // 拉取"目标歌单现有曲目"（去重用）时每页大小
  const EXISTING_TRACKS_MAX_PAGES = 50;    // 安全上限：最多翻 50 页（约 5000 首）
  const QQ_PAGE_SIZE = 300;                // QQ 音乐歌单每页拉取数
  const QQ_MAX_PAGES = 34;                 // 安全上限：最多翻 34 页（约 1 万首）

  // 匹配分级阈值：自动匹配 / 存疑待选 / 未匹配
  const AUTO_MIN_SCORE = 0.80;             // 综合分达到此线才可能自动匹配
  const AUTO_HIGH_SCORE = 0.85;            // 综合分达到此线直接自动匹配，无需检查分差（处理同歌不同专辑）
  const AUTO_MIN_TITLE_SIM = 0.75;         // 标题相似度门槛（自动匹配）
  const AUTO_MIN_ARTIST_SCORE = 0.65;      // 歌手匹配门槛（自动匹配）
  const AUTO_MIN_GAP = 0.08;               // 第一/第二候选分差需≥此值，否则视为有歧义
  const AMBIGUOUS_MIN_SCORE = 0.40;        // 低于此线直接判未匹配，不打扰用户
  const CANDIDATE_COUNT = 5;               // 存疑弹窗里每首歌展示的候选数
  // 综合分权重（有时长）：标题主体 0.5 / 标题括号 0.1 / 歌手 0.25 / 时长 0.15
  // 综合分权重（无时长，如QQ音乐）：标题主体 0.6 / 标题括号 0.1 / 歌手 0.3
  // =====================================

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function getMK() {
    if (typeof W.MusicKit === 'undefined' || !W.MusicKit.getInstance) {
      throw new Error('MusicKit 未就绪，请等网页播放器完全加载后再点按钮（或确认脚本以 unsafeWindow 运行）');
    }
    return W.MusicKit.getInstance();
  }

  function formatDuration(ms) {
    if (!ms) return '';
    const s = Math.round(ms / 1000);
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }

  // =====================================================================
  // 匹配引擎
  // =====================================================================

  // 拆分标题：主体 + 括号部分
  function splitTitle(title) {
    const bracketRegex = /[（(【\[<《].*?[)）】\]>》]/g;
    const brackets = (title.match(bracketRegex) || []).join(' ');
    const main = title.replace(bracketRegex, ' ').trim();
    return { main, brackets };
  }

  // 归一化字符串（用于相似度计算）
  function norm(s) {
    return (s || '')
      .toLowerCase()
      .replace(/[''`]/g, '')
      .replace(/[^\p{L}\p{N}]/gu, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    let prev = new Array(n + 1);
    let curr = new Array(n + 1);
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
      curr[0] = i;
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
      }
      [prev, curr] = [curr, prev];
    }
    return prev[n];
  }

  function sim(a, b) {
    a = norm(a); b = norm(b);
    if (!a && !b) return 1;
    if (!a || !b) return 0;
    return 1 - levenshtein(a, b) / Math.max(a.length, b.length);
  }

  function artistScore(expected, actual) {
    const e = norm(expected), a = norm(actual);
    if (!e || !a) return 0;
    if (e.includes(a) || a.includes(e)) return 1;
    return sim(e, a);
  }

  function durScore(expectedMs, actualMs) {
    if (!expectedMs || !actualMs) return 0.5;
    const d = Math.abs(expectedMs - actualMs);
    if (d <= 3000) return 1;
    return Math.max(0, 1 - (d - 3000) / 30000);
  }

  // 对一首歌做搜索 + 打分，返回排序后的候选列表（不做取舍判断）
  async function searchCandidates(mk, title, artist, durationMs) {
    let res, attempt = 0;
    while (true) {
      try {
        res = await mk.api.music('/v1/catalog/' + STOREFRONT + '/search', {
          term: title + ' ' + (artist || ''),
          types: 'songs',
          limit: SEARCH_LIMIT,
        });
        break;
      } catch (e) {
        attempt++;
        if (attempt >= 4) throw e;
        await sleep(1500 * attempt); // 429 时退避
      }
    }
    const songs = (((res.data || {}).results || {}).songs || {}).data || [];

    // 拆分源标题
    const srcSplit = splitTitle(title);
    const hasDuration = durationMs != null;

    const scored = songs.map((s) => {
      const at = s.attributes;

      // 拆分目标标题
      const tgtSplit = splitTitle(at.name);

      // 计算标题主体相似度
      const mainSim = sim(srcSplit.main, tgtSplit.main);

      // 计算括号部分相似度
      let bracketSim = 1.0; // 默认满分
      if (srcSplit.brackets || tgtSplit.brackets) {
        // 有任一方有括号内容，则计算相似度
        bracketSim = sim(srcSplit.brackets, tgtSplit.brackets);
      }

      // 歌手相似度
      const a = artistScore(artist, at.artistName);

      // 时长相似度
      const d = durScore(durationMs, at.durationInMillis);

      // 综合分（根据是否有时长动态调权）
      let score;
      if (hasDuration) {
        // 有时长：主体 0.5 + 括号 0.1 + 歌手 0.25 + 时长 0.15
        score = mainSim * 0.5 + bracketSim * 0.1 + a * 0.25 + d * 0.15;
      } else {
        // 无时长（如QQ音乐）：主体 0.6 + 括号 0.1 + 歌手 0.3，时长固定给 1.0
        score = mainSim * 0.6 + bracketSim * 0.1 + a * 0.3;
      }

      return {
        id: s.id,
        score,
        titleSim: mainSim * 0.833 + bracketSim * 0.167, // 加权后的总标题相似度（用于判定）
        mainSim,
        bracketSim,
        artistSim: a,
        durSim: d,
        name: at.name,
        artistName: at.artistName,
        albumName: at.albumName,
        durationInMillis: at.durationInMillis,
      };
    });
    scored.sort((x, y) => y.score - x.score);
    return scored;
  }

  // 三级判定：auto（自动匹配） / ambiguous（存疑，需人工选） / none（未匹配）
  function classify(candidates) {
    if (!candidates.length) return { level: 'none' };
    const best = candidates[0];
    const second = candidates[1];
    const gap = second ? best.score - second.score : 1;

    // 高分直接匹配（处理同歌不同专辑的情况）
    if (best.score >= AUTO_HIGH_SCORE) {
      return { level: 'auto', best };
    }

    // 常规自动匹配判定
    const isAuto =
      best.score >= AUTO_MIN_SCORE &&
      best.titleSim >= AUTO_MIN_TITLE_SIM &&
      best.artistSim >= AUTO_MIN_ARTIST_SCORE &&
      gap >= AUTO_MIN_GAP;

    if (isAuto) return { level: 'auto', best };
    if (best.score >= AMBIGUOUS_MIN_SCORE) return { level: 'ambiguous', candidates: candidates.slice(0, CANDIDATE_COUNT) };
    return { level: 'none' };
  }

  async function matchOne(mk, track) {
    const candidates = await searchCandidates(mk, track.title, track.artist, track.durationMs);
    return classify(candidates);
  }

  // =====================================================================
  // Apple Music API 封装（api.music(url, queryParams, fetchOptions)）
  // =====================================================================

  async function listLibraryPlaylists(mk) {
    const res = await mk.api.music('/v1/me/library/playlists', { limit: EXISTING_PLAYLIST_LIMIT });
    const data = ((res.data || {}).data) || [];
    return data.map((p) => ({ id: p.id, name: (p.attributes && p.attributes.name) || '(未命名)' }));
  }

  async function createLibraryPlaylist(mk, name, firstBatch) {
    const res = await mk.api.music('/v1/me/library/playlists', {}, {
      method: 'POST',
      body: { attributes: { name }, relationships: { tracks: { data: firstBatch } } },
    });
    const id = (((res.data || {}).data || [])[0] || {}).id;
    if (!id) throw new Error('建歌单失败，响应: ' + JSON.stringify(res).slice(0, 500));
    return id;
  }

  async function addTracksToPlaylist(mk, playlistId, tracks) {
    let attempt = 0;
    const maxRetries = 3;
    while (attempt < maxRetries) {
      try {
        await mk.api.music('/v1/me/library/playlists/' + playlistId + '/tracks', {}, {
          method: 'POST',
          body: { data: tracks },
        });
        return; // 成功则返回
      } catch (e) {
        attempt++;
        // 如果是 JSON 解析错误，可能歌曲已经成功添加（API 返回空响应）
        if (e.message && e.message.includes('JSON')) {
          return; // 视为成功，继续
        }

        if (attempt >= maxRetries) {
          throw new Error(`添加歌曲到歌单失败（重试 ${maxRetries} 次后仍失败）: ${e.message}`);
        }
        console.warn(`[AM导入] 添加歌曲失败，${attempt}/${maxRetries} 次重试中...`, e.message);
        await sleep(1000 * attempt); // 指数退避：1秒、2秒、3秒
      }
    }
  }

  async function addAllTracks(mk, playlistId, allTracks, onProgress) {
    for (let i = 0; i < allTracks.length; i += ADD_BATCH_SIZE) {
      const batch = allTracks.slice(i, i + ADD_BATCH_SIZE);
      await addTracksToPlaylist(mk, playlistId, batch);
      if (onProgress) onProgress(Math.min(i + ADD_BATCH_SIZE, allTracks.length), allTracks.length);
      await sleep(SEARCH_DELAY_MS);
    }
  }

  // 去重：拉取目标歌单现有曲目，提取每首对应的"目录歌曲 ID"（catalog song id），
  // 用于和本次匹配到的目录歌曲 ID 比对。匹配结果都是 catalog 歌曲 ID，二者同构可直接比较。
  //
  // 实现要点：
  // - GET /v1/me/library/playlists/{id}/tracks 本身返回的是"资料库歌曲"(library-songs)，
  //   其 id 与 catalog 歌曲 id 不同；带 include=catalog 后，每首会附带 relationships.catalog，
  //   里面的 data[0].id 才是用于去重的 catalog 歌曲 id。
  // - 失败/无法解析时返回空集合（调用方据此跳过去重、照常导入），绝不阻断主流程。
  async function getExistingCatalogIds(mk, playlistId, onProgress) {
    const ids = new Set();
    let url = '/v1/me/library/playlists/' + playlistId + '/tracks?include=catalog&limit=' + EXISTING_TRACKS_PAGE_SIZE;
    let pages = 0;
    while (url && pages < EXISTING_TRACKS_MAX_PAGES) {
      try {
        const res = await mk.api.music(url);
        const data = ((res.data || {}).data) || [];
        for (const item of data) {
          const arr = (((item.relationships || {}).catalog || {}).data) || [];
          if (arr.length && arr[0].id) ids.add(String(arr[0].id));
        }
        pages++;
        if (onProgress) onProgress(ids.size, pages);
        // next 可能是完整 URL 或相对路径，统一剥掉 host 后再交给 api.music
        const nextRaw = (res.data || {}).next || null;
        url = nextRaw ? nextRaw.replace(/^https?:\/\/[^/]+/, '') : null;
      } catch (e) {
        // Apple Music API 异常（空响应、JSON 解析失败等），终止分页但返回已收集的 ID
        console.warn('[AM导入] 读取已有曲目第 ' + (pages + 1) + ' 页失败，终止分页:', e.message);
        break;
      }
    }
    return ids;
  }

  // =====================================================================
  // 源解析：网易云 / QQ 音乐公开歌单 / 手动粘贴文本
  // =====================================================================

  function gmFetch(url) {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: 'GET',
        url,
        headers: { Referer: 'https://music.163.com/', 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' },
        onload: (r) => {
          try { resolve(JSON.parse(r.responseText)); }
          catch (e) { reject(new Error('解析网易云响应失败: ' + r.responseText.slice(0, 200))); }
        },
        onerror: () => reject(new Error('请求网易云失败（网络/被挡）')),
        ontimeout: () => reject(new Error('请求网易云超时')),
        timeout: 20000,
      });
    });
  }

  // POST 版本，用于 song/detail 批量查询（body 形如 c=[{"id":1},...]）
  function gmFetchPost(url, body) {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: 'POST',
        url,
        headers: {
          Referer: 'https://music.163.com/',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: body,
        onload: (r) => {
          try { resolve(JSON.parse(r.responseText)); }
          catch (e) { reject(new Error('解析网易云响应失败: ' + r.responseText.slice(0, 200))); }
        },
        onerror: () => reject(new Error('请求网易云失败（网络/被挡）')),
        ontimeout: () => reject(new Error('请求网易云超时')),
        timeout: 20000,
      });
    });
  }

  function parseNeteaseId(input) {
    let m = input.match(/[?&]id=(\d+)/); if (m) return m[1];
    m = input.match(/playlist\/(\d+)/); if (m) return m[1];
    if (/^\d+$/.test(input.trim())) return input.trim();
    return null;
  }

  // 网易云歌单：两步法（参考 GoMusic logic/neteasy.go）
  // 关键：playlist/detail 的 tracks 字段会被截断（常只返回前 10~20 首），
  //       但 trackIds（纯 ID 列表）永远完整。因此分两步：
  //   第1步 playlist/detail 取 trackIds；
  //   第2步 song/detail 分块批量取每首歌详情（名/艺人/专辑/时长）。
  async function fetchNeteasePlaylist(input) {
    const id = parseNeteaseId(input);
    if (!id) throw new Error('无法从输入中解析网易云歌单 ID');

    // 第1步：取歌单元信息 + 完整 trackIds
    const data = await gmFetch('https://music.163.com/api/v6/playlist/detail?id=' + id + '&n=100000');
    if (data.code !== 200 || !data.playlist) throw new Error('网易云返回异常 code=' + data.code);
    const pl = data.playlist;
    const trackIds = (pl.trackIds || []).map((t) => t.id);
    console.log('[AM导入] 网易云歌单 "%s"：总数=%s，trackIds=%s，tracks预览=%s', pl.name, pl.trackCount, trackIds.length, (pl.tracks || []).length);

    // trackIds 缺失时回退到 tracks 预览（n=100000 命中的情况）
    if (!trackIds.length) {
      const tracks = (pl.tracks || []).map((t) => ({
        title: t.name,
        artist: (t.ar || []).map((a) => a.name).join('/'),
        album: (t.al || {}).name,
        durationMs: t.dt,
      }));
      return { name: pl.name, tracks };
    }

    // 第2步：分块批量取详情，保持原歌单顺序
    const tracks = await fetchNeteaseSongDetails(trackIds);
    return { name: pl.name, tracks };
  }

  // 分块调用 song/detail，按原 ID 顺序组装结果（查不到详情的已下架歌曲会被跳过）
  async function fetchNeteaseSongDetails(ids) {
    const CHUNK = 300;
    const map = new Map();
    for (let i = 0; i < ids.length; i += CHUNK) {
      const chunk = ids.slice(i, i + CHUNK);
      const c = JSON.stringify(chunk.map((id) => ({ id })));
      const data = await gmFetchPost('https://music.163.com/api/v3/song/detail', 'c=' + encodeURIComponent(c));
      if (data.code !== 200) throw new Error('网易云歌曲详情返回异常 code=' + data.code);
      for (const s of (data.songs || [])) {
        map.set(s.id, {
          title: s.name,
          artist: (s.ar || []).map((a) => a.name).join('/'),
          album: (s.al || {}).name,
          durationMs: s.dt,
        });
      }
      console.log('[AM导入] 网易云歌曲详情：%d/%d', Math.min(i + CHUNK, ids.length), ids.length);
    }
    if (map.size < ids.length) {
      console.warn('[AM导入] 网易云有 %d 首歌曲查不到详情（可能已下架/VIP），已跳过', ids.length - map.size);
    }
    return ids.map((id) => map.get(id)).filter(Boolean);
  }

  function parseText(input) {
    return input.split(/\r?\n/).map((line) => line.trim()).filter(Boolean).map((line) => {
      const parts = line.split(/\s*[-－—–]\s*/);
      return { title: (parts[0] || '').trim(), artist: (parts[1] || '').trim(), durationMs: null };
    });
  }

  function isNeteaseInput(input) {
    return /music\.163\.com|^\d+$/.test(input.trim());
  }

  // ---------- QQ 音乐公开歌单 ----------
  // 注意：QQ 的 disstid 是纯数字，与网易歌单 ID 格式重合，无法凭"纯数字"区分。
  // 因此 QQ 仅在输入含 y.qq.com / qq.com / disstid= 域名特征，或显式 "qq:" 前缀时识别；
  // 想用纯数字 ID 导 QQ 歌单，请写成 "qq:7223826498" 或贴完整 URL。

  // QQ 音乐签名算法（zzb 版本，来源：GoMusic misc/utils/qqmusic_sign.go）
  // ⚠️ 此算法可能随时失效（QQ 音乐已多次更新签名：zza→zzb→zzc）
  // 失效时参考 docs/QQ音乐签名算法逆向调研任务.md 更新
  function qqMusicSign(paramJSON) {
    // 1. MD5 计算
    function md5(str) {
      // 使用 crypto-js 的简化实现（避免引入外部库）
      // 这里直接用浏览器 SubtleCrypto API 的同步替代
      // 由于 SubtleCrypto 是异步的，我们用纯 JS 实现 MD5
      function rotateLeft(n, s) { return (n << s) | (n >>> (32 - s)); }
      function addUnsigned(x, y) {
        const lsw = (x & 0xFFFF) + (y & 0xFFFF);
        const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
      }
      function f(x, y, z) { return (x & y) | (~x & z); }
      function g(x, y, z) { return (x & z) | (y & ~z); }
      function h(x, y, z) { return x ^ y ^ z; }
      function i(x, y, z) { return y ^ (x | ~z); }
      function cmn(q, a, b, x, s, t) { return addUnsigned(rotateLeft(addUnsigned(addUnsigned(a, q), addUnsigned(x, t)), s), b); }
      function ff(a, b, c, d, x, s, t) { return cmn(f(b, c, d), a, b, x, s, t); }
      function gg(a, b, c, d, x, s, t) { return cmn(g(b, c, d), a, b, x, s, t); }
      function hh(a, b, c, d, x, s, t) { return cmn(h(b, c, d), a, b, x, s, t); }
      function ii(a, b, c, d, x, s, t) { return cmn(i(b, c, d), a, b, x, s, t); }

      const utf8Encode = (s) => unescape(encodeURIComponent(s));
      const strToWords = (s) => {
        const words = [];
        for (let i = 0; i < s.length * 8; i += 8) {
          words[i >> 5] |= (s.charCodeAt(i / 8) & 0xFF) << (i % 32);
        }
        return words;
      };

      str = utf8Encode(str);
      const x = strToWords(str);
      const len = str.length * 8;
      x[len >> 5] |= 0x80 << (len % 32);
      x[(((len + 64) >>> 9) << 4) + 14] = len;

      let a = 0x67452301, b = 0xEFCDAB89, c = 0x98BADCFE, d = 0x10325476;

      for (let k = 0; k < x.length; k += 16) {
        const aa = a, bb = b, cc = c, dd = d;
        a = ff(a, b, c, d, x[k+0],  7,  0xD76AA478); d = ff(d, a, b, c, x[k+1],  12, 0xE8C7B756);
        c = ff(c, d, a, b, x[k+2],  17, 0x242070DB); b = ff(b, c, d, a, x[k+3],  22, 0xC1BDCEEE);
        a = ff(a, b, c, d, x[k+4],  7,  0xF57C0FAF); d = ff(d, a, b, c, x[k+5],  12, 0x4787C62A);
        c = ff(c, d, a, b, x[k+6],  17, 0xA8304613); b = ff(b, c, d, a, x[k+7],  22, 0xFD469501);
        a = ff(a, b, c, d, x[k+8],  7,  0x698098D8); d = ff(d, a, b, c, x[k+9],  12, 0x8B44F7AF);
        c = ff(c, d, a, b, x[k+10], 17, 0xFFFF5BB1); b = ff(b, c, d, a, x[k+11], 22, 0x895CD7BE);
        a = ff(a, b, c, d, x[k+12], 7,  0x6B901122); d = ff(d, a, b, c, x[k+13], 12, 0xFD987193);
        c = ff(c, d, a, b, x[k+14], 17, 0xA679438E); b = ff(b, c, d, a, x[k+15], 22, 0x49B40821);

        a = gg(a, b, c, d, x[k+1],  5,  0xF61E2562); d = gg(d, a, b, c, x[k+6],  9,  0xC040B340);
        c = gg(c, d, a, b, x[k+11], 14, 0x265E5A51); b = gg(b, c, d, a, x[k+0],  20, 0xE9B6C7AA);
        a = gg(a, b, c, d, x[k+5],  5,  0xD62F105D); d = gg(d, a, b, c, x[k+10], 9,  0x02441453);
        c = gg(c, d, a, b, x[k+15], 14, 0xD8A1E681); b = gg(b, c, d, a, x[k+4],  20, 0xE7D3FBC8);
        a = gg(a, b, c, d, x[k+9],  5,  0x21E1CDE6); d = gg(d, a, b, c, x[k+14], 9,  0xC33707D6);
        c = gg(c, d, a, b, x[k+3],  14, 0xF4D50D87); b = gg(b, c, d, a, x[k+8],  20, 0x455A14ED);
        a = gg(a, b, c, d, x[k+13], 5,  0xA9E3E905); d = gg(d, a, b, c, x[k+2],  9,  0xFCEFA3F8);
        c = gg(c, d, a, b, x[k+7],  14, 0x676F02D9); b = gg(b, c, d, a, x[k+12], 20, 0x8D2A4C8A);

        a = hh(a, b, c, d, x[k+5],  4,  0xFFFA3942); d = hh(d, a, b, c, x[k+8],  11, 0x8771F681);
        c = hh(c, d, a, b, x[k+11], 16, 0x6D9D6122); b = hh(b, c, d, a, x[k+14], 23, 0xFDE5380C);
        a = hh(a, b, c, d, x[k+1],  4,  0xA4BEEA44); d = hh(d, a, b, c, x[k+4],  11, 0x4BDECFA9);
        c = hh(c, d, a, b, x[k+7],  16, 0xF6BB4B60); b = hh(b, c, d, a, x[k+10], 23, 0xBEBFBC70);
        a = hh(a, b, c, d, x[k+13], 4,  0x289B7EC6); d = hh(d, a, b, c, x[k+0],  11, 0xEAA127FA);
        c = hh(c, d, a, b, x[k+3],  16, 0xD4EF3085); b = hh(b, c, d, a, x[k+6],  23, 0x04881D05);
        a = hh(a, b, c, d, x[k+9],  4,  0xD9D4D039); d = hh(d, a, b, c, x[k+12], 11, 0xE6DB99E5);
        c = hh(c, d, a, b, x[k+15], 16, 0x1FA27CF8); b = hh(b, c, d, a, x[k+2],  23, 0xC4AC5665);

        a = ii(a, b, c, d, x[k+0],  6,  0xF4292244); d = ii(d, a, b, c, x[k+7],  10, 0x432AFF97);
        c = ii(c, d, a, b, x[k+14], 15, 0xAB9423A7); b = ii(b, c, d, a, x[k+5],  21, 0xFC93A039);
        a = ii(a, b, c, d, x[k+12], 6,  0x655B59C3); d = ii(d, a, b, c, x[k+3],  10, 0x8F0CCC92);
        c = ii(c, d, a, b, x[k+10], 15, 0xFFEFF47D); b = ii(b, c, d, a, x[k+1],  21, 0x85845DD1);
        a = ii(a, b, c, d, x[k+8],  6,  0x6FA87E4F); d = ii(d, a, b, c, x[k+15], 10, 0xFE2CE6E0);
        c = ii(c, d, a, b, x[k+6],  15, 0xA3014314); b = ii(b, c, d, a, x[k+13], 21, 0x4E0811A1);
        a = ii(a, b, c, d, x[k+4],  6,  0xF7537E82); d = ii(d, a, b, c, x[k+11], 10, 0xBD3AF235);
        c = ii(c, d, a, b, x[k+2],  15, 0x2AD7D2BB); b = ii(b, c, d, a, x[k+9],  21, 0xEB86D391);

        a = addUnsigned(a, aa); b = addUnsigned(b, bb);
        c = addUnsigned(c, cc); d = addUnsigned(d, dd);
      }

      const toHex = (n) => {
        let s = '';
        for (let i = 0; i < 4; i++) {
          s += ('0' + ((n >> (i * 8)) & 0xFF).toString(16)).slice(-2);
        }
        return s;
      };

      return (toHex(a) + toHex(b) + toHex(c) + toHex(d)).toUpperCase();
    }

    // 2. 核心签名算法（翻译自 GoMusic）
    const k1 = {
      '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
      'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15
    };
    const l1 = [212, 45, 80, 68, 195, 163, 163, 203, 157, 220, 254, 91, 204, 79, 104, 6];
    const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    const md5Str = md5(paramJSON);

    // 抽取特定位置字符
    const selectChars = (str, indices) => indices.map(i => str[i]).join('');
    const t1 = selectChars(md5Str, [21, 4, 9, 26, 16, 20, 27, 30]);
    const t3 = selectChars(md5Str, [18, 11, 3, 2, 1, 7, 6, 25]);

    // 构建 ls2
    const ls2 = [];
    for (let i = 0; i < 16; i++) {
      const x1 = k1[md5Str[i * 2]];
      const x2 = k1[md5Str[i * 2 + 1]];
      const x3 = (x1 * 16 ^ x2) ^ l1[i];
      ls2.push(x3);
    }

    // Base64 变换
    const ls3 = [];
    for (let i = 0; i < 6; i++) {
      if (i === 5) {
        ls3.push(t[ls2[ls2.length - 1] >> 2]);
        ls3.push(t[(ls2[ls2.length - 1] & 3) << 4]);
      } else {
        const x4 = ls2[i * 3] >> 2;
        const x5 = (ls2[i * 3 + 1] >> 4) ^ ((ls2[i * 3] & 3) << 4);
        const x6 = (ls2[i * 3 + 2] >> 6) ^ ((ls2[i * 3 + 1] & 15) << 2);
        const x7 = 63 & ls2[i * 3 + 2];
        ls3.push(t[x4] + t[x5] + t[x6] + t[x7]);
      }
    }

    const t2 = ls3.join('').replace(/[\\/+]/g, '');
    const sign = 'zzb' + (t1 + t2 + t3).toLowerCase();

    return sign;
  }

  function parseQQId(input) {
    let m = input.match(/\/playlist\/([A-Za-z0-9]+)/); if (m) return m[1];       // y.qq.com/n/ryqq/playlist/{id} 或 ryqq_v2/playlist/{id}
    m = input.match(/[?&]disstid=([A-Za-z0-9]+)/); if (m) return m[1];
    m = input.match(/^qq[:\s]+([A-Za-z0-9]+)/i); if (m) return m[1];              // 显式前缀，解决纯数字与网易歧义
    m = input.match(/[?&]id=([A-Za-z0-9]+)/); if (m) return m[1];                 // i.y.qq.com/...?id=xxx 兜底
    return null;
  }

  function isQQInput(input) {
    return /y\.qq\.com|c\.y\.qq\.com|qq\.com\/|disstid=|^qq[:\s]/i.test(input.trim());
  }

  async function fetchQQPlaylist(input) {
    const id = parseQQId(input);
    if (!id) throw new Error('无法从输入中解析 QQ 音乐歌单 ID（支持 https://y.qq.com/n/ryqq/playlist/xxx 或 qq:数字）');

    const tracks = [];
    let name = 'QQ音乐导入';

    // 尝试多个 platform 参数，直到获取有效响应
    const platforms = ['-1', 'android', 'iphone', 'h5', 'wxfshare', 'iphone_wx', 'windows'];
    let lastError = null;

    for (const platform of platforms) {
      try {
        // 构建请求参数
        const reqBody = {
          req_0: {
            module: 'music.srfDissInfo.aiDissInfo',
            method: 'uniform_get_Dissinfo',
            param: {
              disstid: parseInt(id),
              enc_host_uin: '',
              tag: 1,
              userinfo: 1,
              song_begin: 0,
              song_num: QQ_PAGE_SIZE
            }
          },
          comm: {
            g_tk: 5381,
            uin: 0,
            format: 'json',
            platform: platform
          }
        };

        const paramJSON = JSON.stringify(reqBody);
        const sign = qqMusicSign(paramJSON);
        const url = `https://u6.y.qq.com/cgi-bin/musics.fcg?sign=${sign}&_=${Date.now()}`;

        // 发送请求
        const data = await new Promise((resolve, reject) => {
          GM_xmlhttpRequest({
            method: 'POST',
            url: url,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Referer': 'https://y.qq.com/',
              'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
            },
            data: paramJSON,
            onload: (r) => {
              if (!r.responseText || r.responseText.length === 108) {
                // 108 字节 = 错误响应，尝试下一个 platform
                reject(new Error('platform_failed'));
                return;
              }
              try { resolve(JSON.parse(r.responseText)); }
              catch (e) { reject(new Error('解析 QQ 音乐响应失败: ' + r.responseText.slice(0, 200))); }
            },
            onerror: () => reject(new Error('请求 QQ 音乐失败（网络/被挡）')),
            ontimeout: () => reject(new Error('请求 QQ 音乐超时')),
            timeout: 20000,
          });
        });

        // 检查响应
        if (data.code !== 0 || !data.req_0 || data.req_0.code !== 0) {
          lastError = new Error(`QQ音乐返回异常 code=${data.code}, req_0.code=${data.req_0?.code}`);
          continue; // 尝试下一个 platform
        }

        // 成功获取第一页，记录歌单名和总数
        const dirinfo = data.req_0.data.dirinfo;
        const songlist = data.req_0.data.songlist || [];
        name = dirinfo.title || name;
        const totalSongs = dirinfo.songnum || songlist.length;

        // 添加第一页歌曲
        for (const s of songlist) {
          tracks.push({
            title: s.name,
            artist: (s.singer || []).map((a) => a.name).join('/'),
            album: s.albumname || '',
            durationMs: s.interval ? s.interval * 1000 : null
          });
        }

        // 如果歌曲总数超过第一页，分页获取剩余
        if (totalSongs > QQ_PAGE_SIZE) {
          const pageCount = Math.min(Math.ceil(totalSongs / QQ_PAGE_SIZE), QQ_MAX_PAGES);
          for (let page = 1; page < pageCount; page++) {
            const songBegin = page * QQ_PAGE_SIZE;
            const songNum = Math.min(QQ_PAGE_SIZE, totalSongs - songBegin);

            const pageReqBody = {
              req_0: {
                module: 'music.srfDissInfo.aiDissInfo',
                method: 'uniform_get_Dissinfo',
                param: {
                  disstid: parseInt(id),
                  enc_host_uin: '',
                  tag: 1,
                  userinfo: 1,
                  song_begin: songBegin,
                  song_num: songNum
                }
              },
              comm: {
                g_tk: 5381,
                uin: 0,
                format: 'json',
                platform: platform
              }
            };

            const pageParamJSON = JSON.stringify(pageReqBody);
            const pageSign = qqMusicSign(pageParamJSON);
            const pageUrl = `https://u6.y.qq.com/cgi-bin/musics.fcg?sign=${pageSign}&_=${Date.now()}`;

            try {
              const pageData = await new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                  method: 'POST',
                  url: pageUrl,
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Referer': 'https://y.qq.com/',
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
                  },
                  data: pageParamJSON,
                  onload: (r) => {
                    if (!r.responseText) { reject(new Error('empty')); return; }
                    try { resolve(JSON.parse(r.responseText)); }
                    catch (e) { reject(e); }
                  },
                  onerror: () => reject(new Error('network')),
                  ontimeout: () => reject(new Error('timeout')),
                  timeout: 20000,
                });
              });

              if (pageData.code === 0 && pageData.req_0 && pageData.req_0.code === 0) {
                const pageSonglist = pageData.req_0.data.songlist || [];
                for (const s of pageSonglist) {
                  tracks.push({
                    title: s.name,
                    artist: (s.singer || []).map((a) => a.name).join('/'),
                    album: s.albumname || '',
                    durationMs: s.interval ? s.interval * 1000 : null
                  });
                }
              }
            } catch (e) {
              console.warn(`[AM导入] QQ 音乐第 ${page + 1} 页获取失败:`, e.message);
              // 继续获取下一页
            }

            await sleep(SEARCH_DELAY_MS); // 限流
          }
        }

        // 成功获取，跳出 platform 循环
        return { name, tracks };

      } catch (e) {
        if (e.message === 'platform_failed') {
          lastError = new Error(`platform ${platform} 失效`);
          continue; // 尝试下一个 platform
        }
        throw e; // 其他错误直接抛出
      }
    }

    // 所有 platform 都失败
    throw new Error(`QQ 音乐返回空响应（尝试了 ${platforms.length} 个 platform 参数均失败）。可能原因：\n1. 歌单不存在或为私密歌单\n2. 签名算法已失效（当前版本：zzb）\n3. 被 QQ 音乐限流\n\n${lastError ? '最后一次错误：' + lastError.message : ''}`);
  }

  // =====================================================================
  // UI 组件：样式注入 + 通用 Modal
  // =====================================================================

  const CSS = `
  .ami-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.55); backdrop-filter: blur(4px);
    z-index: 2147483647; display: flex; align-items: center; justify-content: center; font-family: -apple-system,system-ui,'PingFang SC',sans-serif; }
  .ami-card { background: #1c1c1e; color: #f2f2f7; border-radius: 16px; width: 480px; max-width: 92vw;
    max-height: 86vh; display: flex; flex-direction: column; box-shadow: 0 20px 60px rgba(0,0,0,.5); overflow: hidden; }
  .ami-card--wide { width: 620px; }
  .ami-card__header { padding: 18px 20px 12px; font-size: 17px; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,.08); }
  .ami-card__body { padding: 16px 20px; overflow-y: auto; flex: 1; font-size: 13px; line-height: 1.6; }
  .ami-card__footer { padding: 14px 20px; display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid rgba(255,255,255,.08); }
  .ami-btn { border: none; border-radius: 9px; padding: 9px 16px; font-size: 13px; font-weight: 600; cursor: pointer; font-family: inherit; }
  .ami-btn--primary { background: #fa233b; color: #fff; }
  .ami-btn--primary:hover { background: #ff3b52; }
  .ami-btn--secondary { background: rgba(255,255,255,.1); color: #f2f2f7; }
  .ami-btn--secondary:hover { background: rgba(255,255,255,.16); }
  .ami-btn:disabled { opacity: .5; cursor: not-allowed; }
  .ami-textarea { width: 100%; box-sizing: border-box; min-height: 200px; max-height: 40vh; resize: vertical;
    background: #111113; color: #f2f2f7; border: 1px solid rgba(255,255,255,.14); border-radius: 10px;
    padding: 10px 12px; font: 13px/1.6 ui-monospace,'SF Mono',Menlo,monospace; }
  .ami-textarea::placeholder { color: rgba(255,255,255,.35); }
  .ami-field-label { display: block; font-size: 12px; color: rgba(255,255,255,.6); margin: 14px 0 6px; }
  .ami-field-label:first-child { margin-top: 0; }
  .ami-radio-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 13px; }
  .ami-select, .ami-input { width: 100%; box-sizing: border-box; background: #111113; color: #f2f2f7;
    border: 1px solid rgba(255,255,255,.14); border-radius: 8px; padding: 8px 10px; font-size: 13px; font-family: inherit; }
  .ami-select:disabled, .ami-input:disabled { opacity: .4; }
  .ami-track { display: flex; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,.06); gap: 10px; }
  .ami-track:last-child { border-bottom: none; }
  .ami-track__title { font-weight: 600; }
  .ami-track__sub { color: rgba(255,255,255,.55); font-size: 12px; }
  .ami-candidates { display: flex; flex-direction: column; gap: 6px; margin-top: 8px; }
  .ami-cand { display: flex; align-items: baseline; gap: 8px; padding: 8px 10px; border-radius: 8px;
    background: rgba(255,255,255,.05); cursor: pointer; border: 1px solid transparent; }
  .ami-cand:hover { background: rgba(255,255,255,.09); }
  .ami-cand.is-selected { border-color: #fa233b; background: rgba(250,35,59,.14); }
  .ami-cand input { margin: 0; accent-color: #fa233b; }
  .ami-cand__meta { color: rgba(255,255,255,.5); font-size: 11px; }
  .ami-score-pill { font-size: 10px; padding: 1px 6px; border-radius: 10px; background: rgba(255,255,255,.12); color: rgba(255,255,255,.7); }
  .ami-panel { position: fixed; right: 20px; bottom: 80px; z-index: 2147483647; width: 260px;
    background: #1c1c1e; color: #f2f2f7; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,.4);
    font-family: -apple-system,system-ui,sans-serif; font-size: 12px; overflow: hidden; display: none; }
  .ami-panel.is-visible { display: block; }
  .ami-panel__head { padding: 10px 12px; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,.08); }
  .ami-panel__body { padding: 10px 12px; }
  .ami-progressbar { height: 6px; border-radius: 3px; background: rgba(255,255,255,.12); overflow: hidden; margin: 8px 0; }
  .ami-progressbar__fill { height: 100%; background: #fa233b; width: 0%; transition: width .2s; }
  .ami-stat-row { display: flex; justify-content: space-between; margin-top: 4px; color: rgba(255,255,255,.7); }
  .ami-fab { position: fixed; right: 20px; bottom: 80px; z-index: 2147483647; padding: 11px 18px;
    font-size: 14px; font-weight: 700; cursor: pointer; background: linear-gradient(135deg,#fa233b,#ff5470);
    color: #fff; border: none; border-radius: 24px; box-shadow: 0 6px 18px rgba(250,35,59,.4);
    font-family: -apple-system,system-ui,sans-serif; display: flex; align-items: center; gap: 6px; }
  .ami-fab:hover { transform: translateY(-1px); box-shadow: 0 8px 22px rgba(250,35,59,.5); }
  .ami-empty { color: rgba(255,255,255,.45); text-align: center; padding: 24px 0; }
  `;

  function injectStyle() {
    if (document.getElementById('__ami_style')) return;
    const style = document.createElement('style');
    style.id = '__ami_style';
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  // 打开一个 Modal。builder(bodyEl, api) 负责填充内容；返回值决定 footer 按钮如何 resolve。
  // options: { title, wide, buttons: [{label, value, primary}], onMount(bodyEl, close) }
  function openModal({ title, wide, buttons, onMount }) {
    return new Promise((resolve) => {
      injectStyle();
      const overlay = document.createElement('div');
      overlay.className = 'ami-overlay';
      const card = document.createElement('div');
      card.className = 'ami-card' + (wide ? ' ami-card--wide' : '');
      const header = document.createElement('div');
      header.className = 'ami-card__header';
      header.textContent = title;
      const body = document.createElement('div');
      body.className = 'ami-card__body';
      const footer = document.createElement('div');
      footer.className = 'ami-card__footer';

      let settled = false;
      const close = (value) => {
        if (settled) return;
        settled = true;
        overlay.remove();
        document.removeEventListener('keydown', onKey);
        resolve(value);
      };
      const onKey = (e) => { if (e.key === 'Escape') close(undefined); };
      document.addEventListener('keydown', onKey);
      overlay.addEventListener('mousedown', (e) => { if (e.target === overlay) close(undefined); });

      (buttons || []).forEach((b) => {
        const btn = document.createElement('button');
        btn.className = 'ami-btn ' + (b.primary ? 'ami-btn--primary' : 'ami-btn--secondary');
        btn.textContent = b.label;
        btn.addEventListener('click', () => {
          if (b.getValue) close(b.getValue());
          else close(b.value);
        });
        footer.appendChild(btn);
      });

      card.appendChild(header);
      card.appendChild(body);
      if (buttons && buttons.length) card.appendChild(footer);
      overlay.appendChild(card);
      document.body.appendChild(overlay);

      if (onMount) onMount(body, close);
    });
  }

  function alertModal(title, message) {
    return openModal({
      title,
      buttons: [{ label: '好', value: true, primary: true }],
      onMount: (body) => { body.innerHTML = `<div style="white-space:pre-wrap">${escapeHtml(message)}</div>`; },
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  // =====================================================================
  // 输入弹窗：多行文本 + 目标歌单（新建 / 已有）
  // =====================================================================

  // existingPlaylistsPromise: Promise<Array<{id,name}>>，与授权并行预取，弹窗打开时若还没到就显示"加载中"
  function openInputModal(existingPlaylistsPromise) {
    return openModal({
      title: '导入歌单到 Apple Music',
      wide: true,
      buttons: [
        { label: '取消', value: null },
        { label: '下一步', primary: true, getValue: () => collect() },
      ],
      onMount: (body) => {
        body.innerHTML = `
          <label class="ami-field-label">歌单来源</label>
          <textarea id="ami_src" class="ami-textarea" placeholder="支持三种输入：\n1) 网易云歌单链接或 ID，例如 https://music.163.com/#/playlist?id=2819917002\n2) QQ音乐歌单链接，例如 https://y.qq.com/n/ryqq/playlist/7223826498（纯数字 ID 请写 qq:数字）\n3) 每行一首「歌名 - 歌手」，例如：\n晴天 - 周杰伦\n七里香 - 周杰伦"></textarea>

          <label class="ami-field-label">导入到</label>
          <div class="ami-radio-row">
            <input type="radio" name="ami_target" id="ami_target_new" value="new" checked>
            <label for="ami_target_new">新建歌单，命名为：</label>
            <input type="text" id="ami_new_name" class="ami-input" style="flex:1" placeholder="留空则自动使用来源歌单名">
          </div>
          <div class="ami-radio-row">
            <input type="radio" name="ami_target" id="ami_target_existing" value="existing">
            <label for="ami_target_existing">添加到已有歌单：</label>
            <select id="ami_existing_select" class="ami-select" style="flex:1" disabled>
              <option>加载中…</option>
            </select>
          </div>
        `;
        const select = body.querySelector('#ami_existing_select');
        const radioExisting = body.querySelector('#ami_target_existing');
        const radioNew = body.querySelector('#ami_target_new');
        existingPlaylistsPromise.then((list) => {
          select.innerHTML = '';
          if (!list.length) {
            select.innerHTML = '<option value="">（暂无已有歌单）</option>';
            return;
          }
          list.forEach((p) => {
            const opt = document.createElement('option');
            opt.value = p.id; opt.textContent = p.name;
            select.appendChild(opt);
          });
          select.disabled = !radioExisting.checked;
        }).catch(() => { select.innerHTML = '<option value="">（获取歌单列表失败）</option>'; });

        const syncEnabled = () => { select.disabled = !radioExisting.checked; };
        radioExisting.addEventListener('change', syncEnabled);
        radioNew.addEventListener('change', syncEnabled);
      },
    });

    function collect() {
      const src = document.getElementById('ami_src').value.trim();
      if (!src) return null;
      const target = document.querySelector('input[name="ami_target"]:checked').value;
      if (target === 'existing') {
        const id = document.getElementById('ami_existing_select').value;
        if (!id) { return null; }
        return { src, target: 'existing', playlistId: id, name: document.getElementById('ami_existing_select').selectedOptions[0].textContent };
      }
      const newName = document.getElementById('ami_new_name').value.trim();
      return { src, target: 'new', newName: newName || null };
    }
  }

  // =====================================================================
  // 存疑歌曲人工确认弹窗
  // =====================================================================

  // items: [{ track, result: {level:'ambiguous', candidates:[...]} }]
  // 返回: Map<index, candidateId|null>（null 表示用户选择不导入此曲）
  //
  // 注意：DOM 读取必须在 getValue() 里同步完成——getValue() 在按钮点击时、
  // 弹窗关闭（overlay.remove()）之前执行；一旦弹窗关闭，document.querySelector
  // 就再也找不到这些已从文档树摘除的单选框了。
  function openAmbiguousModal(items) {
    function collectChoices() {
      const choice = new Map();
      items.forEach((_, idx) => {
        const checked = document.querySelector(`input[name="ami_amb_${idx}"]:checked`);
        const val = checked ? checked.value : '__skip__';
        choice.set(idx, val === '__skip__' ? null : val);
      });
      return choice;
    }
    function skipAllChoices() {
      const choice = new Map();
      items.forEach((_, idx) => choice.set(idx, null));
      return choice;
    }
    return openModal({
      title: `${items.length} 首歌曲存在歧义，请选择正确版本`,
      wide: true,
      buttons: [
        { label: '全部跳过这些歌曲', getValue: skipAllChoices },
        { label: '确认', primary: true, getValue: collectChoices },
      ],
      onMount: (body) => {
        items.forEach((item, idx) => {
          const wrap = document.createElement('div');
          wrap.style.marginBottom = '18px';
          const head = document.createElement('div');
          head.innerHTML = `<div class="ami-track__title">${escapeHtml(item.track.title)}</div><div class="ami-track__sub">${escapeHtml(item.track.artist || '(未知歌手)')}${item.track.durationMs ? ' · 原时长 ' + formatDuration(item.track.durationMs) : ''}</div>`;
          wrap.appendChild(head);

          const list = document.createElement('div');
          list.className = 'ami-candidates';
          item.result.candidates.forEach((c, ci) => {
            const row = document.createElement('label');
            row.className = 'ami-cand';
            row.innerHTML = `
              <input type="radio" name="ami_amb_${idx}" value="${c.id}" ${ci === 0 ? 'checked' : ''}>
              <div style="flex:1">
                <div>${escapeHtml(c.name)} <span class="ami-score-pill">匹配度 ${(c.score * 100).toFixed(0)}%</span></div>
                <div class="ami-cand__meta">${escapeHtml(c.artistName)} · ${escapeHtml(c.albumName || '')} · ${formatDuration(c.durationInMillis)}</div>
              </div>`;
            row.addEventListener('click', () => {
              list.querySelectorAll('.ami-cand').forEach((el) => el.classList.remove('is-selected'));
              row.classList.add('is-selected');
            });
            if (ci === 0) row.classList.add('is-selected');
            list.appendChild(row);
          });
          const skipRow = document.createElement('label');
          skipRow.className = 'ami-cand';
          skipRow.innerHTML = `<input type="radio" name="ami_amb_${idx}" value="__skip__"><div>不导入此曲</div>`;
          skipRow.addEventListener('click', () => {
            list.querySelectorAll('.ami-cand').forEach((el) => el.classList.remove('is-selected'));
            skipRow.classList.add('is-selected');
          });
          list.appendChild(skipRow);

          wrap.appendChild(list);
          body.appendChild(wrap);
        });
      },
    }).then((choice) => choice || skipAllChoices()); // ESC/点遮罩关闭 → 视为全部跳过
  }

  // =====================================================================
  // 进度面板（右下角常驻，非阻塞）
  // =====================================================================

  function createProgressPanel() {
    injectStyle();
    const el = document.createElement('div');
    el.className = 'ami-panel';
    el.innerHTML = `
      <div class="ami-panel__head">正在导入歌单…</div>
      <div class="ami-panel__body">
        <div id="ami_panel_stage">准备中</div>
        <div class="ami-progressbar"><div class="ami-progressbar__fill" id="ami_panel_fill"></div></div>
        <div class="ami-stat-row"><span>自动匹配</span><span id="ami_panel_auto">0</span></div>
        <div class="ami-stat-row"><span>存疑</span><span id="ami_panel_amb">0</span></div>
        <div class="ami-stat-row"><span>未匹配</span><span id="ami_panel_none">0</span></div>
        <div style="margin-top:12px;text-align:center;">
          <button id="ami_panel_cancel" class="ami-btn ami-btn--secondary" style="font-size:11px;padding:6px 12px;">取消导入</button>
        </div>
      </div>`;
    document.body.appendChild(el);
    let cancelRequested = false;
    el.querySelector('#ami_panel_cancel').addEventListener('click', () => {
      cancelRequested = true;
      el.querySelector('#ami_panel_stage').textContent = '正在取消…';
      el.querySelector('#ami_panel_cancel').disabled = true;
    });
    return {
      show() { el.classList.add('is-visible'); },
      hide() { el.classList.remove('is-visible'); },
      update({ stage, done, total, auto, amb, none }) {
        if (stage !== undefined) el.querySelector('#ami_panel_stage').textContent = stage;
        if (total) el.querySelector('#ami_panel_fill').style.width = Math.round((done / total) * 100) + '%';
        if (auto !== undefined) el.querySelector('#ami_panel_auto').textContent = auto;
        if (amb !== undefined) el.querySelector('#ami_panel_amb').textContent = amb;
        if (none !== undefined) el.querySelector('#ami_panel_none').textContent = none;
      },
      isCancelled() { return cancelRequested; },
      destroy() { el.remove(); },
    };
  }

  // =====================================================================
  // 主流程
  // =====================================================================

  async function run() {
    let panel = null;
    try {
      const mk = getMK();

      if (!mk.musicUserToken) {
        try { await mk.authorize(); } catch (e) { /* 用户取消 */ }
      }
      if (!mk.musicUserToken) {
        await alertModal('未登录', '未获取到 Apple Music 用户授权。请先在页面右上角登录 Apple Music，再点导入按钮。');
        return;
      }

      // 与用户填表同时，后台预取已有歌单列表
      const existingPlaylistsPromise = listLibraryPlaylists(mk).catch(() => []);

      const form = await openInputModal(existingPlaylistsPromise);
      if (!form || !form.src) return;

      panel = createProgressPanel();
      panel.show();

      let sourceName, tracks;
      if (isQQInput(form.src)) {
        panel.update({ stage: '抓取 QQ 音乐歌单…' });
        try {
          const pl = await fetchQQPlaylist(form.src);
          if (panel.isCancelled()) {
            panel.hide();
            await alertModal('已取消', '抓取完成前取消，未创建歌单。');
            return;
          }
          sourceName = pl.name; tracks = pl.tracks;
        } catch (e) {
          panel.hide();
          await alertModal('抓取失败', `QQ 音乐歌单抓取失败：${e.message}\n\n请检查：\n1. 链接格式是否正确（需要 y.qq.com/n/ryqq/playlist/数字）\n2. 歌单是否为公开歌单\n3. 浏览器控制台是否有更多报错信息`);
          return;
        }
      } else if (isNeteaseInput(form.src)) {
        panel.update({ stage: '抓取网易云歌单…' });
        try {
          const pl = await fetchNeteasePlaylist(form.src);
          if (panel.isCancelled()) {
            panel.hide();
            await alertModal('已取消', '抓取完成前取消，未创建歌单。');
            return;
          }
          sourceName = pl.name; tracks = pl.tracks;
        } catch (e) {
          panel.hide();
          await alertModal('抓取失败', `网易云歌单抓取失败：${e.message}`);
          return;
        }
      } else {
        tracks = parseText(form.src);
        sourceName = '导入的歌单';
      }
      if (!tracks.length) { panel.hide(); await alertModal('提示', '没有解析到任何歌曲，请检查输入内容。'); return; }
      console.log('[AM导入] 共 ' + tracks.length + ' 首，来源: ' + sourceName, tracks);

      panel.update({ stage: '匹配中…', done: 0, total: tracks.length, auto: 0, amb: 0, none: 0 });

      const autoMatched = []; // {id,type}
      const ambiguousItems = []; // {track, result}
      const noneMatched = [];
      let autoCount = 0, ambCount = 0, noneCount = 0;
      let dupSkipped = 0; // 导入到已有歌单时，因重复而被跳过的数量

      for (let i = 0; i < tracks.length; i++) {
        if (panel.isCancelled()) {
          panel.hide();
          await alertModal('已取消', `已匹配 ${autoCount} 首后取消，未创建歌单。`);
          return;
        }
        const tr = tracks[i];
        panel.update({ stage: `匹配中 ${i + 1}/${tracks.length}：${tr.title}`, done: i, total: tracks.length });
        try {
          const result = await matchOne(mk, tr);
          if (result.level === 'auto') {
            autoMatched.push({ id: result.best.id, type: 'songs' });
            autoCount++;
            console.log(`  ✓ 自动匹配 "${tr.title} - ${tr.artist}" → ${result.best.name} / ${result.best.artistName} (score ${result.best.score.toFixed(2)})`);
          } else if (result.level === 'ambiguous') {
            ambiguousItems.push({ track: tr, result });
            ambCount++;
            console.warn(`  ? 存疑 "${tr.title} - ${tr.artist}"，候选 ${result.candidates.length} 个`);
          } else {
            noneMatched.push(tr);
            noneCount++;
            console.warn(`  ✗ 未匹配 "${tr.title} - ${tr.artist}"`);
          }
        } catch (e) {
          noneMatched.push(tr);
          noneCount++;
          console.error(`  ✗ 出错 "${tr.title} - ${tr.artist}":`, e.message);
        }
        panel.update({ done: i + 1, total: tracks.length, auto: autoCount, amb: ambCount, none: noneCount });
        if (i < tracks.length - 1) await sleep(SEARCH_DELAY_MS);
      }

      panel.hide();

      // 存疑歌曲：交给用户批量确认
      let userSkippedFromAmbiguous = 0;
      if (ambiguousItems.length) {
        const choice = await openAmbiguousModal(ambiguousItems);
        ambiguousItems.forEach((item, idx) => {
          const pickedId = choice.get(idx);
          if (pickedId) {
            autoMatched.push({ id: pickedId, type: 'songs' });
          } else {
            userSkippedFromAmbiguous++;
            noneMatched.push(item.track);
          }
        });
      }

      if (!autoMatched.length) {
        await alertModal('未能导入', '没有任何歌曲被匹配，无法创建/更新歌单。请查看控制台日志确认原因。');
        return;
      }

      panel.show();
      let playlistId, finalName;
      if (form.target === 'existing') {
        playlistId = form.playlistId;
        finalName = form.name;

        // 去重：拉取目标歌单已有曲目（按 catalog 歌曲 ID），过滤掉本次匹配里已存在的
        panel.update({ stage: `检查「${finalName}」已有曲目（去重）…`, done: 0, total: 1 });
        let existingIds = new Set();
        try {
          existingIds = await getExistingCatalogIds(mk, playlistId, (n) => {
            if (panel.isCancelled()) throw new Error('USER_CANCELLED');
            panel.update({ stage: `读取已有曲目 ${n} 首…` });
          });
        } catch (e) {
          if (e.message === 'USER_CANCELLED') {
            panel.hide();
            await alertModal('已取消', '读取已有曲目时取消，未导入任何歌曲。');
            return;
          }
          console.warn('[AM导入] 获取已有曲目失败，跳过去重:', e.message);
        }
        const beforeDedup = autoMatched.length;
        if (existingIds.size) {
          for (let i = autoMatched.length - 1; i >= 0; i--) {
            if (existingIds.has(String(autoMatched[i].id))) {
              autoMatched.splice(i, 1);
              dupSkipped++;
            }
          }
        }
        if (dupSkipped) console.log(`[AM导入] 去重：跳过 ${dupSkipped} 首已存在歌曲`);

        if (!autoMatched.length) {
          panel.hide();
          await alertModal('无需导入', `「${finalName}」中已包含全部 ${beforeDedup} 首待导入歌曲，没有新歌可加。`);
          return;
        }

        panel.update({ stage: `加入到「${finalName}」…`, done: 0, total: autoMatched.length });
        await addAllTracks(mk, playlistId, autoMatched, (done, total) => {
          panel.update({ stage: `加入中 ${done}/${total}`, done, total });
        });
      } else {
        finalName = form.newName || sourceName;
        panel.update({ stage: `创建歌单「${finalName}」…`, done: 0, total: autoMatched.length });
        const firstBatch = autoMatched.slice(0, ADD_BATCH_SIZE);
        playlistId = await createLibraryPlaylist(mk, finalName, firstBatch);
        if (autoMatched.length > ADD_BATCH_SIZE) {
          await addAllTracks(mk, playlistId, autoMatched.slice(ADD_BATCH_SIZE), (done, total) => {
            panel.update({ stage: `加入中 ${done + ADD_BATCH_SIZE}/${autoMatched.length}`, done, total });
          });
        }
      }
      panel.hide();

      console.log('[AM导入] 完成，未匹配列表：', noneMatched);
      const summary =
        `歌单：${finalName}\n` +
        `共 ${tracks.length} 首 → 成功导入 ${autoMatched.length} 首\n` +
        (dupSkipped ? `重复已跳过 ${dupSkipped} 首\n` : '') +
        `未匹配 ${noneMatched.length} 首${userSkippedFromAmbiguous ? `（含手动跳过 ${userSkippedFromAmbiguous} 首）` : ''}` +
        (noneMatched.length ? '\n\n未匹配列表：\n' + noneMatched.map((t) => '· ' + t.title + (t.artist ? ' - ' + t.artist : '')).join('\n') : '');
      await alertModal('导入完成', summary);
    } catch (e) {
      console.error('[AM导入] 失败:', e);
      await alertModal('失败', e.message || String(e));
    } finally {
      if (panel) panel.destroy();
    }
  }

  // =====================================================================
  // 入口按钮
  // =====================================================================

  function injectUI() {
    if (document.getElementById('__ami_fab')) return;
    injectStyle();
    const btn = document.createElement('button');
    btn.id = '__ami_fab';
    btn.className = 'ami-fab';
    btn.innerHTML = '🎵 导入歌单';
    btn.addEventListener('click', run);
    document.body.appendChild(btn);
  }

  const t = setInterval(() => {
    if (document.body) { injectUI(); clearInterval(t); }
  }, 1000);
})();
