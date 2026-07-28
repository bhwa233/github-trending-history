# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 默认通过 Cloudflare AI Gateway 调用 `workers-ai/@cf/zai-org/glm-4.7-flash` 生成中英文项目总结、技术栈和适用场景
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
  - `summary_en`: 英文项目核心功能总结
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景
  - `useCase_en`: 英文适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare AI Gateway（OpenAI 兼容接口）
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 默认：Cloudflare AI Gateway
export AI_API_KEY=your_cloudflare_ai_gateway_token
export AI_API_URL=https://gateway.ai.cloudflare.com/v1/5697c41d4efbabcbac78eafe2cdf036b/default/compat/chat/completions
export AI_MODEL=workers-ai/@cf/zai-org/glm-4.7-flash

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

**最后更新**: 2026-07-27 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [permissionlesstech/bitchat](https://github.com/permissionlesstech/bitchat) | bluetooth mesh chat, IRC vibes... | Swift | 32.2k | 2.3k | BitChat 是一个去中心化的点对点消息应用，采用蓝牙 Mesh 和 Nostr 协议双传输架构。它支持离线本地通信和全球在线消息，无需账户或服务器。具备基于地理位置的频道、端到端加密和 IRC 风格界面，专注于隐私保护。 |
| 2 | [amnezia-vpn/amnezia-client](https://github.com/amnezia-vpn/amnezia-client) | Amnezia VPN Client (Desktop+Mobile)... | C++ | 13.8k | 515 | Amnezia 是一款开源的跨平台 VPN 客户端，支持自托管 VPN 服务器。它集成了 OpenVPN、WireGuard、IKEv2 等多种协议，并具备流量伪装功能。用户只需输入服务器信息，即可自动部署 Docker 容器。支持 Windows、macOS、Linux、Android 和 iOS，并提供分流隧道功能，允许仅对特定网站或应用开启 VPN。 |
| 3 | [moeru-ai/airi](https://github.com/moeru-ai/airi) | 💖🧸 Self hosted, you-owned Grok Companion, a cont... | TypeScript | 44.0k | 572 | AIRI 是一个自托管的 AI 伴侣项目，灵感来源于 Neuro-sama。它旨在将虚拟角色带入现实世界，支持实时语音聊天、Minecraft 和 Factorio 等游戏游玩。项目基于 TypeScript 开发，支持 Web、macOS 和 Windows 平台，具备 RAG、记忆系统和 Live2D 等功能，致力于打造高度智能的数字伴侣。 |
| 4 | [opengeos/GeoLibre](https://github.com/opengeos/GeoLibre) | A lightweight, cloud-native GIS platform for visua... | TypeScript | 2.7k | 420 | GeoLibre 是一个免费开源的轻量级云原生 GIS 平台，支持在浏览器、桌面、移动端及 Jupyter 笔记本中运行。它集成了 Tauri v2、React 和 MapLibre GL 等技术，专注于本地数据处理。功能强大，支持 3D Tiles 可视化、行星地图（如月球、火星）以及时间滑块动画，适合跨平台地理空间数据探索与分析。 |
| 5 | [yorukot/superfile](https://github.com/yorukot/superfile) | Pretty fancy and modern terminal file manager... | Go | 20.9k | 600 | superfile 是一个用 Go 语言编写的现代化、美观的终端文件管理器。它支持 macOS、Linux 和 Windows，提供丰富的插件、主题和热键配置功能。项目内置自动更新机制，安装便捷，旨在为用户提供高效且视觉愉悦的命令行文件操作体验。 |
| 6 | [NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) | 小红书笔记 | 评论爬虫、抖音视频 | 评论爬虫、快手视频 | 评论爬虫、B 站视频 ｜ 评论爬虫、... | Python | 58.2k | 362 | MediaCrawler 是一个功能强大的多平台自媒体数据采集工具，支持小红书、抖音、B站等主流平台。基于 Playwright 浏览器自动化，利用登录态获取数据，无需复杂逆向。支持搜索、评论、主页采集及代理池，适合学习爬虫架构与数据采集。 |
| 7 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | JavaScript | 51.5k | 847 | Impeccable 是一个为 AI 编码代理提供设计指导的开源项目。它包含 23 个命令、60 条确定性检测规则和实时浏览器迭代功能。通过 /impeccable init 初始化项目，生成设计上下文文档，帮助 AI 生成独特、高质量的前端设计，避免重复模板化风格。 |
| 8 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 34.6k | 441 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融市场的高噪声数据设计。它采用两阶段框架，通过专用分词器量化 OHLCV 数据，并利用自回归 Transformer 进行预训练。项目提供多种规模的模型，支持量化任务预测，已获 AAAI 2026 录用。 |
| 9 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Open-source & free — Battle-tested at Alibaba's sc... | Go | 14.8k | 979 | OpenCodeReview 是源自阿里巴巴的开源 AI 代码审查 CLI 工具。它采用混合架构（确定性管道 + LLM Agent），提供精确的逐行注释和内置微调规则集。相比通用代理，它在 Precision 和 F1 指标上表现更优，且 Token 消耗更少、速度更快，适合大规模代码库的自动化安全与质量审查。 |
| 10 | [jenkinsci/jenkins](https://github.com/jenkinsci/jenkins) | Jenkins automation server... | Java | 25.9k | 180 | Jenkins 是领先的基于 Java 的开源自动化服务器，提供超过 2000 个插件以支持自动化几乎所有任务。它主要用于自动化开发工作流，包括项目构建、测试执行、静态代码分析和部署，帮助开发者执行重复性任务，节省时间并优化流程。 |
| 11 | [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | Give Claude the ability to watch any video. /watch... | Python | 11.0k | 434 | 这是一个为 Claude AI 提供视频观看能力的 Python 项目。它通过下载视频、提取帧和转录音频，让 Claude 能够理解视频内容。支持 YouTube 链接和本地文件，自动处理字幕和关键帧，无需复杂配置即可分析视频内容或诊断 Bug。 |
| 12 | [vudovn/ag-kit](https://github.com/vudovn/ag-kit) | ... | TypeScript | 8.0k | 14 | 这是一个基于 Google Antigravity 运行时的智能体工程套件。它集成了规则、技能、专家路由、持久化记忆、MCP 指导、编排及原生安全钩子等功能。项目提供完整的开发工具链、验证机制和安全控制，旨在帮助开发者构建生产级的智能体系统。 |
| 13 | [apache/cassandra](https://github.com/apache/cassandra) | Open source transactional distributed database. Li... | Java | 10.0k | 11 | Apache Cassandra 是一个开源的事务性分布式数据库，使用 Java 编写。它采用分区行存储架构，支持线性可扩展性和经过验证的容错能力，能在普通硬件或云基础设施上运行。它提供类 SQL 的 CQL 语言，能够透明地将数据分布到多台机器上，并自动重新分区。 |
| 14 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 54.2k | 240 | 这是一个基于 Python 的 AI Agent 技能，通过并行搜索 Reddit、X、YouTube、HN、Polymarket 等多个平台，聚合真实用户数据（如点赞、投票、资金），并利用 AI 生成基于事实的总结。它打破了平台围墙，提供由用户行为而非编辑评分的搜索结果。 |
| 15 | [ocornut/imgui](https://github.com/ocornut/imgui) | Dear ImGui: Bloat-free Graphical User interface fo... | C++ | 75.2k | 51 | Dear ImGui 是一个轻量级、无外部依赖的 C++ 图形用户界面库。它输出优化的顶点缓冲区，专为快速迭代和创建内容创作工具、可视化及调试工具而设计。支持游戏引擎和实时 3D 应用集成，但缺乏国际化等高级功能。 |

[查看完整数据](api/github/2026-07-27.json)
<!-- END GITHUB TRENDING -->




