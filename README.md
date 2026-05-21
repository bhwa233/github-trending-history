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

**最后更新**: 2026-05-20 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | Pre-indexed code knowledge graph for Claude Code, ... | TypeScript | 9.5k | 2.1k | 这是一个为 Claude Code、Cursor、Codex 和 OpenCode 提供预索引代码知识图谱的工具。它通过构建符号关系、调用图和代码结构，让 AI 代理直接查询图谱而非扫描文件。基准测试显示，它能显著降低成本、减少 token 消耗并提高速度，特别适合大型代码库。 |
| 2 | [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | Academic Research Skills for Claude Code: research... | Python | 16.1k | 1.7k | 这是一个为 Claude Code 设计的学术研究技能套件，涵盖从研究到定稿的全流程。它通过 Socratic 对话辅助规划论文结构，并处理文献查找、引用格式化、数据验证等繁琐工作。核心在于“人类在环”，利用 AI 辅助而非替代人类，通过风格校准和质量检查提升写作质量，避免 AI 幻觉和逻辑错误。 |
| 3 | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Your Personal AI super intelligence. Private, Simp... | Rust | 23.6k | 3.4k | OpenHuman 是一个基于 Rust 的个人 AI 超级智能桌面助手。它提供简洁的 UI 和桌面吉祥物，支持与 Google Meet 等工具集成。项目拥有 118+ 第三方集成（如 Gmail, GitHub），具备自动数据获取和记忆能力，无需复杂配置即可在后台持续思考，旨在成为用户日常生活中的智能伙伴。 |
| 4 | [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 140.8k | 2.7k | 这是一个基于 Andrej Karpathy 观察的 Claude Code 指南，旨在解决 LLM 编码中的假设错误、过度复杂化和破坏性更改等问题。项目包含四个核心原则：思考先于编码、简单优先、外科手术式修改和目标驱动执行，通过单一 CLAUDE.md 文件提升 AI 代码行为质量。 |
| 5 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 9.5k | 765 | 这是一个从零开始构建 AI 工程能力的实战课程，包含20个阶段和435节课。课程从基础数学出发，逐步构建算法（如反向传播、注意力机制），并使用Python、TypeScript、Rust和Julia四种语言进行实践。旨在通过动手构建可重用的AI工件，帮助学习者掌握AI工程的核心原理。 |
| 6 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 38.5k | 890 | CLI-Anything 是一个旨在让所有软件具备 Agent 原生能力的开源项目。它通过 CLI-Hub 平台提供统一的命令行接口，帮助 AI Agents（如 Claude Code、Cursor）直接调用各种软件工具。项目支持社区贡献，已集成 Rekordbox、Calibre、UEAtelier 等多种软件的 CLI，实现了从 CAD 建模到游戏开发的自动化工作流。 |
| 7 | [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | ⌥ AI Coding agent for the terminal — hash-anchored... | TypeScript | 5.4k | 270 | 这是一个基于终端的 AI 编码代理，是 Pi 项目的强力 Fork。它集成了 LSP 和 DAP，拥有 40+ 提供商和 32 个内置工具。通过 Rust 核心优化，支持 Python 和 Bun 环境，旨在提供高成功率的代码编辑和 IDE 级别的智能辅助。 |
| 8 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 200.0k | 1.7k | Superpowers 是一个面向编码代理的技能框架与软件开发方法论。它通过结构化工作流（需求分析、设计确认、实施计划）和子代理驱动开发，提升 AI 编码助手（如 Claude Code、Cursor）的自主性与效率，强调 TDD、YAGNI 和 DRY 原则。 |
| 9 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 20.8k | 674 | 这是一个由 Anthropic 官方维护的 Claude Code 插件目录，旨在托管高质量插件。它包含内部开发和第三方合作伙伴的插件，支持通过命令行直接安装。项目定义了标准化的插件结构，并提供了贡献指南和安全警告，帮助用户安全地扩展 Claude Code 的功能。 |
| 10 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 102.8k | 1.6k | 该项目提供了一套完整的AI代理集合，模拟专业代理机构。每个代理拥有独特个性、流程和交付成果，涵盖前端开发、社区运营等多个领域。通过Shell脚本，用户可轻松将其集成至Claude Code、Copilot等工具，构建全天候工作的理想团队。 |
| 11 | [rmyndharis/OpenWA](https://github.com/rmyndharis/OpenWA) | Free, Open Source, Self-Hosted WhatsApp API Gatewa... | TypeScript | 4.8k | 741 | OpenWA 是一个免费开源的 WhatsApp API 网关，基于 TypeScript 构建。它采用可插拔架构，支持多会话并发、Docker 部署及 React 管理仪表板。提供完整的 REST API、Webhook 和媒体消息支持，支持多数据库和存储后端切换，适合开发者自建消息基础设施。 |
| 12 | [truelockmc/streambert](https://github.com/truelockmc/streambert) | A cross-platform Electron Desktop App to stream an... | JavaScript | 3.0k | 582 | 这是一个基于 Electron 的跨平台桌面应用，支持全球电影、电视剧和动漫的流媒体播放与下载。它集成了 TMDB 和 AniList 数据源，提供零广告、零追踪的隐私体验，具备字幕管理、自定义界面、播放库追踪及多线程下载功能，需配置 TMDB API Key 和 ffmpeg。 |
| 13 | [opentoonz/opentoonz](https://github.com/opentoonz/opentoonz) | OpenToonz - An open-source full-featured 2D animat... | C++ | 6.3k | 236 | OpenToonz 是一款由 DWANGO 发布的开源全功能 2D 动画创作软件。它基于 Toonz Studio Ghibli 版本开发，最初由 Digital Video, Inc. 和 Studio Ghibli 定制。项目采用 Modified BSD 许可证，允许自由用于商业或个人用途。 |
| 14 | [zakirullin/files.md](https://github.com/zakirullin/files.md) | 🌱 Private, quiet space for thinking. A simple app... | Go | 2.2k | 429 | 这是一个本地优先的 Markdown 笔记应用，完全运行在浏览器中，无需安装。它将所有数据存储在本地文件中，确保隐私安全，不发送数据到服务器。支持离线使用，并提供可选的云同步或自托管服务器方案。代码简单，易于被 LLM 扩展，适合个人知识管理和深度思考。 |
| 15 | [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | #1 Persistent memory for AI coding agents based on... | TypeScript | 15.1k | 1.1k | 这是一个为 AI 编码代理提供持久化记忆的开源项目。基于 iii 引擎构建，支持 Claude Code、Cursor、Gemini CLI 等多种主流 AI 编码工具。通过知识图谱、混合搜索等技术，解决代理遗忘上下文的问题，实现跨会话的记忆共享。 |
| 16 | [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | LLM inference in C/C++... | C++ | 111.8k | 309 | llama.cpp 是一个高性能的本地大语言模型推理库，采用纯 C/C++ 实现。它支持 Apple Silicon 和 x86 (AVX/AVX2/AVX512/AMX) 等多种硬件架构，提供命令行工具、API 服务器及丰富的插件生态，旨在实现零依赖、低延迟的 LLM 运行。 |
| 17 | [HKUDS/ViMax](https://github.com/HKUDS/ViMax) | "ViMax: Agentic Video Generation (Director, Screen... | Python | 6.0k | 674 | ViMax 是一个基于 Python 的 AI 视频生成项目，旨在解决现有工具仅关注视觉、缺乏叙事和一致性的问题。它集成了导演、编剧、制片人和生成器功能，提供 Idea2Video、Novel2Video、Script2Video 和 AutoCameo 等核心功能，能够将原始想法、小说或剧本自动转化为完整的视频故事，实现从创意到成片的端到端自动化。 |

[查看完整数据](api/github/2026-05-20.json)
<!-- END GITHUB TRENDING -->




