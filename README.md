# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 使用 Cloudflare Workers AI 生成项目核心功能总结、技术栈和适用场景
4. **数据归档**: 将数据按日期归档到 `api/github/` 目录
5. **数据可视化**: [在线查看](https://github-trending-history.vercel.app/)每日 GitHub Trending 数据

## 数据结构

每个项目包含以下信息：
- `fullName`: 仓库全名（owner/repo）
- `description`: 项目描述
- `language`: 主要编程语言
- `stars`: 总 Star 数
- `forks`: Fork 数
- `todayStars`: 今日新增 Star 数
- `url`: 项目链接
- `aiSummary`: AI 生成的总结
  - `summary`: 项目核心功能总结
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct)
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 配置环境变量
export CLOUDFLARE_ACCOUNT_ID=your_account_id
export CLOUDFLARE_API_KEY=your_api_key

# 运行抓取
pnpm start
```

## 数据访问

原始数据存储在 `api/github/YYYY-MM-DD.json`，可以直接通过以下方式访问：

```
https://raw.githubusercontent.com/lxw15337674/github-trending-history/master/api/github/2025-12-15.json
```

## License

MIT

---

<!-- BEGIN GITHUB TRENDING -->
## 📊 GitHub Trending

**最后更新**: 2026-01-03 | **成功**: 8 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [usememos/memos](https://github.com/usememos/memos) | An open-source, self-hosted note-taking service. Y... | Go | 50.0k | 841 | Memos是开源自托管笔记服务，强调隐私安全与数据所有权，支持Markdown格式，提供快速性能和开发者友好API，无需订阅费用。 |
| 2 | [ourongxing/newsnow](https://github.com/ourongxing/newsnow) | Elegant reading of real-time and hottest news... | TypeScript | 16.3k | 314 | NewsNow是一个实时新闻聚合应用，提供简洁界面与GitHub OAuth登录，支持自适应抓取策略和缓存管理，可扩展MCP服务器架构。 |
| 3 | [pathwaycom/pathway](https://github.com/pathwaycom/pathway) | Python ETL framework for stream processing, real-t... | Python | 55.9k | 976 | Pathway是一个Python ETL框架，支持流处理、实时分析、LLM管道和RAG。基于Rust引擎的增量计算，提供统一API处理批处理与流数据，兼容Python机器学习库，可部署于Docker/Kubernetes。 |
| 4 | [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Financial data platform for analysts, quants and A... | Python | 56.4k | 335 | OpenBB-finance/OpenBB 是一个开源金融数据平台，支持数据工程师整合多源数据并分发至AI代理、分析工具和研究仪表板。提供Python接口、REST API及与OpenBB Workspace的集成，实现'连接一次，随处消费'的数据管理方案。 |
| 5 | [HQarroum/docker-android](https://github.com/HQarroum/docker-android) | 🤖 A minimal and customizable Docker image running... | Shell | 2.1k | 525 | 提供最小化可定制的Android模拟器Docker镜像，支持KVM加速、端口转发和无头模式，适用于CI/CD环境。内置Java 11和QEMU，可灵活配置Android版本与设备类型，兼容scrcpy远程控制。 |
| 6 | [beancount/beancount](https://github.com/beancount/beancount) | Beancount: Double-Entry Accounting from Text Files... | Python | 5.0k | 111 | Beancount是一个基于文本文件的双-entry会计系统，允许用户通过文本定义财务交易，读取后生成多种报告并提供Web界面。支持Python编程语言，适用于个人及小型企业的财务管理。 |
| 7 | [maplibre/maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js) | MapLibre GL JS - Interactive vector tile maps in t... | TypeScript | 9.1k | 88 | MapLibre GL JS 是一个开源地图库，支持浏览器端高性能矢量瓦片地图渲染，采用GPU加速技术。作为 Mapbox GL JS 的开源分支，提供交互式地图功能，适用于Web和WebView应用开发。 |
| 8 | [nukeop/nuclear](https://github.com/nukeop/nuclear) | Streaming music player that finds free music for y... | TypeScript | 16.8k | 95 | Nuclear是一款基于TypeScript的桌面音乐播放器，支持从YouTube、SoundCloud等免费平台流式传输音乐。提供播放列表管理、实时歌词、跨平台播放控制及Scrobbling功能，注重开源与免付费体验。 |

[查看完整数据](api/github/2026-01-03.json)
<!-- END GITHUB TRENDING -->








