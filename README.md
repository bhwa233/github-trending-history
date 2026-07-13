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

**最后更新**: 2026-07-12 | **成功**: 16 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard) | The Destructive Command Guard (dcg) is for blockin... | Rust | 2.8k | 444 | DCG 是一个用 Rust 编写的高性能钩子，用于阻止 AI 编码代理执行危险的 git 和 shell 命令。它支持 Claude Code、Copilot、Cursor 等多种工具，保护用户工作免受意外删除，提供跨平台（Linux/macOS/Windows）的自动安装和配置。 |
| 2 | [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) | This is MCP server for Claude that gives it termin... | TypeScript | 8.0k | 207 | 这是一个基于 TypeScript 的 MCP 服务器，旨在为 Claude 等大模型提供终端控制、文件系统搜索和 diff 编辑能力。它支持远程 AI 控制、文件预览 UI、内存中代码执行及数据分析，让 AI 能够自动化桌面任务和开发流程。 |
| 3 | [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | "Vibe-Trading: Your Personal Trading Agent"... | Python | 20.5k | 776 | Vibe-Trading 是一个基于 Python 的个人交易代理，旨在通过一条命令赋予用户全面的交易能力。它集成了策略开发管理器，能将学术论文和经纪商研究转化为可注册的策略，并具备持久化存储和自动监控 IC/夏普比率衰减的功能。项目支持多市场回测、基本面因子分析及计划研究，提供端到端的量化交易解决方案。 |
| 4 | [PrefectHQ/prefect](https://github.com/PrefectHQ/prefect) | Prefect is a workflow orchestration framework for ... | Python | 23.1k | 55 | Prefect 是一个基于 Python 的工作流编排框架，用于构建弹性数据管道。它允许开发者通过简单的装饰器将脚本转化为生产级工作流，支持调度、缓存、重试和事件驱动自动化。提供自托管服务器或 Prefect Cloud 进行监控，帮助数据团队高效自动化数据流程。 |
| 5 | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 100+ AI Agent & RAG apps you can actually run — cl... | Python | 118.5k | 450 | 该项目汇集了100多个经过测试的AI Agent和RAG应用模板，提供完整的源代码和快速启动指南。支持多种大模型提供商，开发者无需从零构建基础架构，即可通过简单的命令快速定制并部署生产级LLM应用。 |
| 6 | [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | A collection of notebooks/recipes showcasing some ... | Jupyter Notebook | 48.4k | 464 | 这是一个由 Anthropic 提供的 Jupyter Notebook 项目，旨在帮助开发者构建 Claude 应用。它包含大量可复用的代码片段和教程，涵盖了分类、RAG、总结、工具调用、多模态视觉等核心能力，以及与第三方工具（如 Pinecone、SQL）的集成示例。 |
| 7 | [home-assistant/core](https://github.com/home-assistant/core) | 🏡 Open source home automation that puts local con... | Python | 89.0k | 404 | Home Assistant 是一个开源家庭自动化平台，优先保障本地控制与隐私安全。它由全球社区驱动，支持在树莓派或本地服务器上运行。系统采用模块化架构，易于扩展和集成新设备，允许用户创建自定义组件，非常适合 DIY 爱好者。 |
| 8 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | Project N.O.M.A.D, is a self-contained, offline su... | TypeScript | 33.8k | 122 | Project N.O.M.A.D. 是一个基于 Docker 的自包含离线生存服务器，集成了关键工具、知识和 AI。它通过浏览器访问，无需桌面环境，旨在帮助用户在任何时间、任何地点保持信息获取和生存能力。 |
| 9 | [ColeMurray/background-agents](https://github.com/ColeMurray/background-agents) | An open-source background agents coding system... | TypeScript | 2.3k | 9 | 这是一个开源的背景代理编码系统，灵感来自 Ramp 的 Inspect。它允许用户在后台处理任务，支持 Node.js、Python 等全功能开发环境，并能通过 Web UI、Slack 等多种方式连接。系统支持多人实时协作、并行子任务、定时任务及多种 AI 模型（如 Claude、OpenAI）。基于 GitHub App 进行 Git 操作，确保 PR 创建时的用户归属。 |
| 10 | [k1tbyte/Wand-Enhancer](https://github.com/k1tbyte/Wand-Enhancer) | Advanced UX and interoperability extension for Wan... | C# | 6.9k | 603 | Wand-Enhancer 是一个 C# 开源工具，旨在扩展 Wand (WeMod) 的 UX 和互操作性。它提供本地配置管理、自动兼容性调整、高级主题定制及 AI 功能。内置远程 Web 面板支持手机控制，且完全本地运行，零网络请求，安全可靠。 |
| 11 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | ... | TypeScript | 13.7k | 79 | T3 Code 是一个极简的 Web 界面，旨在统一管理 Codex、Claude、Cursor 和 OpenCode 等编码代理。它支持通过 CLI 或桌面应用运行，为开发者提供了一个集中式的代码生成与交互平台。目前项目处于早期阶段，暂不接受外部贡献。 |
| 12 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 61.4k | 109 | 这是一个基于 Python 的 AI 对冲基金概念验证项目。旨在探索 AI 在交易决策中的应用。项目正在重构为全天候系统，集成了多位知名投资大师（如巴菲特、格雷厄姆、伍德等）的策略代理及技术分析代理。目前仅供教育研究，不用于真实交易。 |
| 13 | [chen08209/FlClash](https://github.com/chen08209/FlClash) | A multi-platform proxy client based on ClashMeta,s... | Dart | 45.2k | 151 | FlClash 是一个基于 ClashMeta 的开源、无广告多平台代理客户端。支持 Android、Windows、macOS 和 Linux。采用 Material You 设计风格，提供自适应界面、多主题、暗黑模式及 WebDAV 数据同步功能，旨在提供简单易用的代理体验。 |
| 14 | [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI tool for configuring and monitoring Claude Cod... | Python | 29.2k | 274 | 处理失败 |
| 15 | [par274/sharpemu](https://github.com/par274/sharpemu) | An experimental PlayStation 5 emulator project.... | C# | 1.2k | 349 | 这是一个使用 C# 从零开始开发的实验性 PlayStation 5 模拟器。目前处于早期阶段，主要针对 Windows 平台。它具备加载 eboot.bin、执行 CPU 指令、处理部分内核功能以及读取元数据的能力。Demon's Souls 等游戏已能运行至视频循环阶段。项目专注于系统架构研究和教育，旨在实现高精度模拟。 |
| 16 | [malisper/pgrust](https://github.com/malisper/pgrust) | Postgres rewritten in Rust, now passing 100% of th... | Rust | 2.4k | 518 | 这是一个使用 Rust 重写的 PostgreSQL 数据库，旨在保持与 PostgreSQL 18.3 的兼容性，目前已通过 100% 的回归测试。它采用每连接一个线程的模型，在事务和分析工作负载上分别比原生 Postgres 快 50% 和 300%。项目利用 Rust 和 AI 辅助编程简化内部修改，但尚未达到生产就绪状态，部分扩展尚不支持。 |
| 17 | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | Anti-AI-slop design skill for Claude Code, Cursor,... | CSS | 4.2k | 210 | 这是一个专为 Claude Code、Cursor 和 Codex 设计的 AI 技能，旨在拒绝生成平庸的“AI 垃圾”设计。它提供 20 种主题和宏观结构选择，通过 57 项“垃圾测试”确保每个项目都有独特的 DNA。支持 UI 构建、代码审计、重构及设计研究。 |

[查看完整数据](api/github/2026-07-12.json)
<!-- END GITHUB TRENDING -->




