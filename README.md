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

**最后更新**: 2026-05-21 | **成功**: 19 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 22.4k | 682 | Anthropic 官方维护的 Claude Code 插件目录，提供高质量插件资源。包含 Anthropic 内部开发及合作伙伴/社区提交的外部插件。用户可通过 Claude Code 插件系统直接安装。插件遵循标准结构，支持元数据、MCP 配置及自定义命令/代理/技能。安装前请务必信任插件来源。 |
| 2 | [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | Pre-indexed code knowledge graph for Claude Code, ... | TypeScript | 13.4k | 4.3k | CodeGraph 是一个为 Claude Code、Cursor、Codex 等智能体提供预索引代码知识图谱的工具。它通过构建符号关系和调用图，让智能体无需扫描文件即可快速查询代码结构。该工具 100% 本地运行，能显著降低 Token 消耗和工具调用次数，提升代码分析效率。 |
| 3 | [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 143.1k | 2.6k | 该项目提供了一套基于 Andrej Karpathy 观察的 Claude Code 指令集，包含四个核心原则：思考先于编码、简单优先、外科手术式修改和目标驱动执行。旨在解决 LLM 假设错误、过度复杂化代码及无关更改等问题，提升代码质量与执行效率。 |
| 4 | [dotnet/skills](https://github.com/dotnet/skills) | Repository for skills to assist AI coding agents w... | C# | 2.2k | 129 | 该项目由 .NET 团队维护，旨在为 AI 编码代理提供 .NET 和 C# 的核心技能及自定义代理。包含 dotnet、数据访问、性能诊断、构建、包管理、升级、MAUI、AI/ML、模板、测试、ASP.NET Core 和 .NET 11 等多领域插件。开发者可通过 Copilot CLI 或 Claude Code 安装，以提升 AI 辅助编程的准确性和效率。 |
| 5 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 201.5k | 1.6k | Superpowers 是一个为 AI 编码代理设计的软件开发生命周期框架。它通过技能和指令引导代理在编码前与用户确认需求、展示设计并制定计划。系统强调 TDD、YAGNI 和 DRY 原则，支持子代理驱动的自主开发，兼容 Claude Code、Cursor 等多种主流 AI 编码工具。 |
| 6 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 39.1k | 656 | CLI-Anything 致力于让所有软件具备 AI 代理原生能力。通过 CLI-Hub 提供统一的命令行接口注册表，允许 AI 代理（如 Claude、Cursor）直接调用各类软件（如 CAD、3D、游戏等）的功能。项目支持社区贡献，旨在连接 AI 与全球软件生态，实现自动化操作。 |
| 7 | [rmyndharis/OpenWA](https://github.com/rmyndharis/OpenWA) | Free, Open Source, Self-Hosted WhatsApp API Gatewa... | TypeScript | 5.4k | 730 | OpenWA 是一个免费开源的 WhatsApp API 网关，基于 TypeScript 构建。它支持多会话并发、插件化架构（可更换数据库和存储）以及 Docker 部署。提供 REST API、Webhook 和 React 管理仪表板，支持文本、媒体消息及群组管理，适合开发者自建消息基础设施。 |
| 8 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 40.5k | 151 | 该项目为 AI 编码代理提供 Chrome DevTools 能力，通过 MCP 协议控制实时浏览器。支持性能分析、网络调试、截图及 Puppeteer 自动化，帮助代理实现可靠的网页操作与深度调试。 |
| 9 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 10.7k | 1.3k | 这是一个从零开始构建 AI 工程技能的全面课程，包含 435 个课程和 20 个阶段。项目涵盖 Python、TypeScript、Rust 和 Julia，从数学基础到生产环境，教授如何从底层构建模型、代理和 MCP 服务器。强调“动手实践”，旨在弥合学生使用 AI 工具与专业应用之间的差距。 |
| 10 | [teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py) | Unofficial Python API and agentic skill for Google... | Python | 14.4k | 186 | 这是一个非官方的 NotebookLM Python API 库，提供对 NotebookLM 功能的完全程序化访问。支持通过 Python、CLI 和 AI 代理（如 Claude Code）使用。主要功能包括研究自动化（批量导入、查询）、内容生成（音频、幻灯片、测验）以及批量下载导出，适合构建 AI 代理工具和研究流程。 |
| 11 | [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | ⌥ AI Coding agent for the terminal — hash-anchored... | TypeScript | 5.8k | 500 | 这是一个基于终端的 AI 编码代理，专注于提供高准确率的代码编辑能力。它集成了 LSP 和 DAP，支持多种大模型，拥有优化的工具框架和哈希锚定编辑功能。内置 40+ 提供商和 32+ 工具，能够实现高效的代码修改、执行与搜索，适合需要自动化代码开发的开发者。 |
| 12 | [antoinezambelli/forge](https://github.com/antoinezambelli/forge) | A Python framework for self-hosted LLM tool-callin... | Python | 1.5k | 398 | 这是一个用于自托管 LLM 的 Python 框架，专注于工具调用和多步骤代理工作流。它通过防护栏（如解析救援、重试 nudges）和上下文管理（VRAM 预算）提升模型可靠性。支持 WorkflowRunner、中间件和代理服务器三种使用方式，兼容 Ollama、llama-server 等后端，旨在让本地小模型在复杂任务中表现优异。 |
| 13 | [multica-ai/multica](https://github.com/multica-ai/multica) | The open-source managed agents platform. Turn codi... | Go | 30.7k | 534 | Multica 是一个开源的托管代理平台，旨在将编码 AI 代理转化为真正的团队成员。它支持分配任务、跟踪进度和积累技能，无需手动复制粘贴提示词。平台兼容多种主流 AI 模型，提供看板视图和任务生命周期管理，专为人类与 AI 协作设计，支持自托管。 |
| 14 | [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | Academic Research Skills for Claude Code: research... | Python | 18.1k | 2.6k | 这是一个为 Claude Code 设计的学术研究技能套件，覆盖从文献调研、论文写作到审查修订的全流程。它通过 Socratic 对话辅助构建结构，处理引用、数据验证及逻辑检查，并具备风格校准与质量检测功能。项目强调‘人在回路’机制，旨在提升写作效率与原创性，避免 AI 幻觉。 |
| 15 | [trimstray/the-book-of-secret-knowledge](https://github.com/trimstray/the-book-of-secret-knowledge) | A collection of inspiring lists, manuals, cheatshe... | - | 222.4k | 756 | 该项目是一个汇集了鼓舞人心的列表、手册、速查表、黑客技巧、单行代码、CLI/网络工具等资源的知识库。它旨在为开发者和学习者提供丰富的参考资料和灵感来源，涵盖多个技术领域。 |
| 16 | [truelockmc/streambert](https://github.com/truelockmc/streambert) | A cross-platform Electron Desktop App to stream an... | JavaScript | 4.0k | 1.1k | 这是一个基于 Electron 的跨平台桌面应用，支持全球电影、电视剧和动漫的流媒体播放与下载。它集成了 TMDB 和 AniList 数据源，提供无广告、无追踪的纯净体验，支持多线程下载、字幕管理及本地媒体库功能，适合追求隐私和高速下载的用户。 |
| 17 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 103.7k | 1.0k | 这是一个包含多种专业AI代理个性的集合，旨在模拟专业团队协作。每个代理都有独特的性格、工作流程和交付成果，支持Claude Code、GitHub Copilot等多种工具。项目提供安装脚本，帮助用户快速配置这些生产就绪的AI专家，提升开发效率。 |
| 18 | [alireza0/s-ui](https://github.com/alireza0/s-ui) | An advanced Web Panel • Built for SagerNet/Sing-Bo... | Go | 8.9k | 27 | 这是一个基于 Go 语言开发的 SagerNet/Sing-Box 先进 Web 面板。支持多协议、多语言、多客户端及高级流量路由，提供订阅管理、系统监控和 API 接口。支持 Linux、Windows 和 macOS。注意：仅供个人学习交流，不可用于生产环境。 |
| 19 | [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) | Graphs that teach > graphs that impress. Turn any ... | TypeScript | 16.6k | 666 | 这是一个 Claude Code 插件，旨在将代码库、知识库或文档转化为交互式知识图谱。通过多智能体分析，它能构建文件、函数及依赖关系的可视化模型，帮助开发者快速理解大型项目的结构、业务逻辑及隐含关系，支持搜索与引导式探索。 |

[查看完整数据](api/github/2026-05-21.json)
<!-- END GITHUB TRENDING -->




