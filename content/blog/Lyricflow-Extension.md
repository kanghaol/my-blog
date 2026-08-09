---
title: "Lyricflow bowser extension"
date: "2026-08-09"
tags: ["react", "extension", "lyric" , "typescript"]
description: "Chrome Extension that display lyrics as an overlay across all browser tabs."
thumbnail: "/lyricsflow.png"
---

## 🛠️ Tech Stack

* **Frontend UI:** React, TypeScript, Vite
* **Extension Platform:** Chrome Extension API (Manifest V3)
* **Styling & Isolation:** Web Components (Shadow DOM)
* **APIs & State:** LRCLIB REST API, Chrome Storage (`chrome.storage.local`), Background Service Workers

---

## ✨ Core Features

* 🎵 **Real-Time Synchronized Lyrics:** Fetches and highlights timed lyrics that stay in sync with live track progression.
* 📌 **Floating, Drag-and-Drop Overlay:** Injects a sleek UI across any web page, letting users move or pin lyrics while browsing.
* 🌐 **Cross-Tab State Synchronization:** Keeps playback state aligned regardless of which tab is active.
* 🛡️ **Zero Style Bleeding:** Uses Shadow DOM encapsulation to guarantee host web styles never break the extension UI (and vice versa).
* ⚡ **Performance Optimized:** Minimizes network requests using local caching and request debouncing.

---

##  Technical Architecture & Key Highlights

### 1. Style Encapsulation with Shadow DOM
One of the biggest hurdles in Chrome content scripts is CSS bleeding. If host site styles override standard, the extension UI looks broken. 

* **Solution:** Attached a **Shadow DOM** root to the host document before injecting React components. This created an isolated DOM tree where custom styles and utilities remain completely sandboxed.

### 2. Event-Driven Background Worker Architecture
asigned cross-tab orchestration to a background service worker. The worker manages API requests, persists cached track metadata in `chrome.storage.local`, and broadcasts real-time state updates down to active content scripts.

### 3. SPA DOM Tracking via `MutationObserver`
Because Spotify operates as a Single Page Application, traditional page load triggers fail when switching songs.

* **Solution:** Implemented a DOM `MutationObserver` within the Spotify content script to detect track changes and DOM state updates instantly, triggering immediate lyric fetches without requiring full page refreshes.

### 4. API Rate Limiting & Debouncing
To avoid spamming the LRCLIB API during rapid track scrubbing or fast skips:

* **Solution:** Introduced a **1.5-second debounce strategy** alongside in memory runtime cache and local caching via `chrome.storage.local`. If a lyric payload for a track ID already exists locally, network calls are bypassed completely.

---

## 🧠 Key Takeaways

Building LyricFlow provided deep insights into modern browser extensions:
1. **Manifest V3 Architecture:** Mastering ephemeral background scripts and declarative messaging between content scripts and background workers.
2. **Web Component Security & Styling:** Understanding the nuances of Shadow DOM boundaries when injecting React applications onto third-party domains.
3. **Optimizing Client-Side Overhead:** Balancing DOM mutation tracking with memory consumption for smooth 60fps performance across low- and high-spec machines.

---

## 🔗 Links & Resources

* 💻 **GitHub Repository:** [(https://github.com/kanghaol/lyricflow)]
* 🌐 **Chrome Web Store:** [Chrome Extension Link](https://chromewebstore.google.com/detail/lyricflow/onfinbognhiboggdmbpohjgfnddpnnen?authuser=0&hl=en)
* 🌐 **Edge Web Store:** [Edge Extension Link](https://microsoftedge.microsoft.com/addons/detail/lyricflow/jjoibnmdijpjkfndlbgboilkchncjkcb)