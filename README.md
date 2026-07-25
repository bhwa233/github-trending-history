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

**最后更新**: 2026-07-24 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [block/buzz](https://github.com/block/buzz) | A hive mind communication platform... | Rust | 9.9k | 3.3k | Buzz 是一个基于 Rust 的自托管协作平台，允许人类和 AI 代理在共享的 Nostr 中继房间中共同工作。它通过事件日志记录所有交互，代理拥有独立的身份、密钥和审计跟踪，能够执行代码审查、运行工作流等操作，提供类似人类队友的协作体验。 |
| 2 | [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | Real-time global intelligence dashboard. AI-powere... | TypeScript | 73.2k | 2.2k | 这是一个基于 TypeScript 的实时全球情报仪表盘，利用 AI 聚合新闻并监控地缘政治。支持 3D 地球与 2D 地图可视化，提供国家不稳定指数（CII）评分及金融雷达。内置本地 AI（Ollama）引擎，支持多站点变体与跨平台桌面应用（Tauri 2），界面支持 25 种语言。 |
| 3 | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | A curated list of awesome Claude Skills, resources... | Python | 70.0k | 663 | 这是一个精选的 Claude Skills 列表，包含 1000+ 生产就绪的插件和工具。项目集成了 Composio MCP Gateway，允许 Claude 通过单一端点安全访问 1000+ 应用（如 Slack、邮件），执行真实操作而非仅生成文本。它支持 Claude.ai、Claude Code 及多种编码代理，旨在提升 AI 工作流的生产力和实用性。 |
| 4 | [Pumpkin-MC/Pumpkin](https://github.com/Pumpkin-MC/Pumpkin) | Empowering everyone to host fast and efficient Min... | Rust | 9.3k | 473 | Pumpkin 是一个用 Rust 编写的 Minecraft 服务器，旨在提供高性能和高效的游戏体验。它利用多线程技术优化性能，支持 Java 和 Bedrock 版本，并具备插件系统、世界管理、实体交互等核心功能。项目致力于在保持 Vanilla 游戏机制的同时，提供安全、灵活且可扩展的服务器解决方案。 |
| 5 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 33.5k | 499 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融数据的高噪声特性设计。它采用两阶段框架，首先将 OHLCV 数据量化为离散标记，再通过自回归 Transformer 进行预训练。项目提供多个模型版本，支持 BTC/USDT 等交易对预测。 |
| 6 | [Automattic/harper](https://github.com/Automattic/harper) | Offline, privacy-first grammar checker. Fast, open... | Rust | 13.0k | 876 | Harper 是一个由 Rust 编写的离线、隐私优先的英语语法检查器。它旨在解决 Grammarly 的隐私问题和 LanguageTool 的性能瓶颈。Harper 速度快（毫秒级）、内存占用极低，且支持 WebAssembly，目前主要支持英语，可扩展至其他语言。 |
| 7 | [likec4/likec4](https://github.com/likec4/likec4) | Visualize, collaborate, and evolve the software ar... | TypeScript | 5.0k | 337 | LikeC4 是一个基于 TypeScript 的建模语言和工具，灵感源自 C4 模型。它允许用户从代码生成实时、最新的架构图表，支持自定义元素类型和层级，旨在帮助团队协作和演进软件架构。 |
| 8 | [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | The fastest browser for AI agents to run web autom... | JavaScript | 2.5k | 880 | 这是一个专为 AI 代理设计的浏览器，旨在实现人类用户与 AI 并行工作。它允许 AI 代理在独立的“Space”中运行自动化任务，同时保持用户的标签页和登录状态不变。项目解决了现有自动化工具中登录状态不共享和标签页冲突的问题，支持零配置安装，目前主要支持 macOS。 |
| 9 | [yorukot/superfile](https://github.com/yorukot/superfile) | Pretty fancy and modern terminal file manager... | Go | 19.6k | 338 | superfile 是一个用 Go 语言编写的现代化、漂亮的终端文件管理器。它支持 Linux、macOS 和 Windows，提供直观的界面、丰富的插件系统、主题定制以及 Vim 风格的热键操作，旨在提升终端下的文件管理效率。 |
| 10 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 85.9k | 1.0k | RuView 是一个基于 Rust 的 WiFi 信号感知平台，利用无线电波实现无视频的墙壁透视、生命体征监测和存在检测。它支持 Home Assistant、Apple HomeKit、Google Home 和 Amazon Alexa 等主流智能家居生态，通过 ESP32 传感器采集 CSI 数据，提供房间活动、睡眠质量及环境映射等智能服务。 |
| 11 | [CoreBunch/Instatic](https://github.com/CoreBunch/Instatic) | The open-source alternative to Webflow, Framer and... | TypeScript | 4.3k | 201 | Instatic 是一个自托管的可视化 CMS，旨在替代 Webflow 和 WordPress。它使用 Bun 服务器和 SQLite/Postgres 数据库，集成了视觉编辑器、内容引擎和发布功能。其独特之处在于输出纯净的静态 HTML 和 CSS，无需框架运行时，非常适合快速部署和自托管。 |
| 12 | [chrislgarry/Apollo-11](https://github.com/chrislgarry/Apollo-11) | Original Apollo 11 Guidance Computer (AGC) source ... | Assembly | 71.4k | 409 | 包含阿波罗11号指令舱和登月舱原始源代码的开源项目，使用汇编语言编写。代码由MIT博物馆数字化，分为Comanche055和Luminary099两个部分。作为公共领域资源，旨在保存历史并欢迎社区贡献修正转录错误。 |
| 13 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 186.7k | 2.3k | 这是一个为工程师设计的 AI 技能集合，基于 Shell 语言编写。它旨在提供可组合、可定制的工作流，帮助用户在编码代理中高效管理任务（如问题跟踪、标签和文档）。支持通过 npx 安装或作为 Claude Code 插件使用，强调“真实工程”而非“氛围编码”。 |
| 14 | [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) | 《动手学大模型Dive into LLMs》系列编程实践教程... | Jupyter Notebook | 45.0k | 328 | 这是一个由上海交通大学开发的公益大模型编程实践教程，使用Jupyter Notebook编写。内容涵盖微调、提示学习、知识编辑、数学推理、越狱攻击、隐写术、多模态、GUI智能体及RLHF对齐等前沿主题。近期新增了基于华为昇腾的国产化大模型开发全流程教程，适合初学者快速入门大模型开发与学术研究。 |
| 15 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | Never stop coding. Free MIT AI gateway: one endpoi... | TypeScript | 28.8k | 1.8k | OmniRoute 是一个免费的 MIT AI 网关，聚合了 290+ 提供商和 500+ 模型。它支持自动回退、RTK+Caveman 压缩（节省 15-95% tokens），无需配置即可开箱即用。适合需要统一访问多个 AI 模型并节省 API 成本的开发者。 |
| 16 | [OtterMind/Chat2DB](https://github.com/OtterMind/Chat2DB) | 🔥🔥🔥 AI-driven database tool and SQL client, The... | Java | 26.3k | 82 | Chat2DB 是一款跨平台的 AI 驱动数据库客户端，支持 30+ 种主流数据库。它集成了强大的 SQL 工作区和 AI 助手，允许用户通过自然语言生成、解释和优化 SQL。此外，它还提供数据管理、ER 图、仪表板和导入导出功能，适合开发者和数据团队使用。 |

[查看完整数据](api/github/2026-07-24.json)
<!-- END GITHUB TRENDING -->




