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

**最后更新**: 2026-07-26 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [permissionlesstech/bitchat](https://github.com/permissionlesstech/bitchat) | bluetooth mesh chat, IRC vibes... | Swift | 30.3k | 1.2k | 这是一个去中心化的点对点消息应用，采用蓝牙 Mesh 和 Nostr 协议的双重传输架构。支持离线通信与全球覆盖，无需账号或服务器。具备基于地理位置的频道、端到端加密（Noise 协议）及类 IRC 命令界面，支持 iOS 和 macOS。 |
| 2 | [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | The fastest browser for AI agents to run web autom... | JavaScript | 4.5k | 900 | ego-lite 是一个专为 AI 代理设计的浏览器，支持用户与代理并行工作。它允许代理在独立空间运行自动化任务，同时无缝共享用户的登录状态、Cookie 和扩展，无需额外配置。该项目解决了现有工具中登录状态不共享和资源冲突的问题，是目前 macOS 上 AI 浏览自动化的快速解决方案。 |
| 3 | [block/buzz](https://github.com/block/buzz) | A hive mind communication platform... | Rust | 13.2k | 1.7k | Buzz 是一个基于 Rust 的自托管工作区，允许人类和 AI 代理在同一房间协作。它采用 Nostr 中继架构，将所有消息、代码审查和事件记录为审计日志。代理拥有独立的密钥和权限，可以执行代码操作、运行工作流和进行语音通话，提供类似人类队友的体验。 |
| 4 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | ... | TypeScript | 15.0k | 149 | T3 Code 是一个为 Codex、Claude、Cursor 和 OpenCode 等编码代理提供的极简 Web GUI。用户可通过浏览器或桌面应用统一管理这些 AI 编码工具，提供便捷的交互体验。项目目前处于早期阶段。 |
| 5 | [CoreBunch/Instatic](https://github.com/CoreBunch/Instatic) | The open-source alternative to Webflow, Framer and... | TypeScript | 5.6k | 888 | Instatic 是一个基于 TypeScript 和 Bun 的自托管视觉 CMS，旨在替代 Webflow 和 WordPress。它集成了编辑器、内容引擎和发布器，输出纯净的静态 HTML 和 CSS，不包含框架运行时。支持 SQLite 或 Postgres 数据库，提供一键部署功能，适合需要完全掌控网站构建和部署的用户。 |
| 6 | [yorukot/superfile](https://github.com/yorukot/superfile) | Pretty fancy and modern terminal file manager... | Go | 20.2k | 131 | superfile 是一款由 Go 语言开发的现代化终端文件管理器，界面美观且功能丰富。支持跨平台（Linux、macOS、Windows），提供插件、主题、热键配置及自动更新功能，旨在为用户提供高效、美观的命令行文件管理体验。 |
| 7 | [nodejs/node](https://github.com/nodejs/node) | Node.js JavaScript runtime ✨🐢🚀✨... | JavaScript | 118.5k | 36 | Node.js 是一个开源的、跨平台的 JavaScript 运行时环境，由 OpenJS Foundation 支持。项目采用开放治理模式，提供 Current、LTS 和 Nightly 三种发布类型，遵循语义化版本控制，专注于稳定性和安全性。 |
| 8 | [OtterMind/Chat2DB](https://github.com/OtterMind/Chat2DB) | 🔥🔥🔥 AI-driven database tool and SQL client, The... | Java | 27.1k | 398 | Chat2DB 是一款跨平台的 AI 驱动数据库客户端，支持 MySQL、Oracle 等 30+ 种数据库。它集成了全功能 SQL 工作区和 AI 助手，允许用户连接自定义模型生成、解释和优化 SQL。此外，它还提供数据管理、导入导出、图表仪表板等功能，适合开发者和数据团队使用。 |
| 9 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | JavaScript | 50.6k | 413 | 这是一个为 AI 编码代理提供设计指导的开源项目。它包含 23 个命令和 60 条确定性检测规则，帮助 AI 生成高质量、符合品牌规范的前端设计。通过初始化上下文，AI 可以使用 craft、shape 等命令进行设计规划和构建，避免设计同质化。 |
| 10 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 34.2k | 321 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融数据的高噪声特性设计。它采用两阶段框架，先通过专用分词器量化 OHLCV 数据，再利用自回归 Transformer 进行预训练。该模型支持多种量化任务，已在 AAAI 2026 接收，并提供了不同规模的预训练模型。 |
| 11 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Open-source & free — Battle-tested at Alibaba's sc... | Go | 13.8k | 832 | 阿里巴巴开源的 AI 代码审查 CLI 工具，基于 Go 开发。采用确定性管道与 LLM Agent 混合架构，能生成精确的行级评论。内置针对 NPE、线程安全等常见漏洞的规则集，支持 OCR 全量扫描。相比通用 Agent，它在精度和 F1 分数上表现优异，且 Token 消耗更低，适合大规模团队提升代码质量。 |
| 12 | [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | Simple, unified interface to multiple Generative A... | Python | 15.4k | 187 | aisuite 是一个轻量级 Python 库，旨在为多个生成式 AI 提供商提供统一的接口。它包含两层：统一的 Chat Completions API 和支持工具、工具包及 MCP 的 Agents API。该库支持 OpenAI、Anthropic、Google 等多种模型。 |
| 13 | [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | A collection of notebooks/recipes showcasing some ... | Jupyter Notebook | 50.2k | 379 | 这是一个由 Anthropic 官方提供的 Jupyter Notebook 集合，旨在帮助开发者掌握 Claude API 的使用。项目包含大量可复制的代码示例，涵盖文本分类、检索增强生成（RAG）、工具集成、多模态处理等场景，是学习和构建 Claude 应用的实用资源。 |
| 14 | [Pumpkin-MC/Pumpkin](https://github.com/Pumpkin-MC/Pumpkin) | Empowering everyone to host fast and efficient Min... | Rust | 10.0k | 338 | Pumpkin 是一个完全使用 Rust 编写的 Minecraft 服务器，旨在提供极致的性能和安全性。它支持 Java 和 Bedrock 版本（W.I.P），具备多线程处理、插件系统、RCON、查询等功能，并兼容 Bungeecord 和 Velocity 代理，致力于打造高效、可定制的游戏体验。 |
| 15 | [permissionlesstech/bitchat-android](https://github.com/permissionlesstech/bitchat-android) | bluetooth mesh chat, IRC vibes... | Kotlin | 6.7k | 260 | 这是一个基于 Kotlin 开发的 Android 版安全去中心化即时通讯应用。它利用蓝牙 Mesh 网络实现无需互联网、无服务器的点对端到端加密通信。支持 IRC 风格命令和地理哈希频道，强调隐私保护，适合离线环境下的安全通讯。 |
| 16 | [jenkinsci/jenkins](https://github.com/jenkinsci/jenkins) | Jenkins automation server... | Java | 25.7k | 18 | Jenkins 是领先的基于 Java 的开源自动化服务器，提供超过 2000 个插件以支持自动化几乎所有任务。它主要用于构建、测试、部署和执行重复性任务，帮助开发者优化开发流程。支持 WAR、Docker 等多种分发方式，拥有 Weekly 和 LTS 两个发布线。 |
| 17 | [amnezia-vpn/amnezia-client](https://github.com/amnezia-vpn/amnezia-client) | Amnezia VPN Client (Desktop+Mobile)... | C++ | 13.3k | 35 | Amnezia 是一款开源的多平台 VPN 客户端，支持 Windows、macOS、Linux、Android 和 iOS。它最大的特点是能够自动在服务器上部署 VPN 服务，支持 OpenVPN、WireGuard、IKEv2 等多种协议，并具备流量伪装和分流隧道功能，适合自建 VPN 服务的用户使用。 |

[查看完整数据](api/github/2026-07-26.json)
<!-- END GITHUB TRENDING -->




