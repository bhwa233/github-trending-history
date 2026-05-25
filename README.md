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

**最后更新**: 2026-05-24 | **成功**: 15 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) | Graphs that teach > graphs that impress. Turn any ... | TypeScript | 25.7k | 4.0k | 这是一个 Claude Code 插件，能够将代码库、知识库或文档转化为交互式知识图谱。通过多智能体分析，它构建包含文件、函数及依赖关系的可视化结构，帮助开发者快速理解大型项目的架构与业务逻辑，支持探索、搜索和问答。 |
| 2 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 15.9k | 1.9k | 这是一个全面的 AI 工程自学课程，旨在弥合学生使用 AI 工具与专业准备之间的差距。项目包含 435 节课，覆盖 Python、TypeScript、Rust 和 Julia 四种语言。课程从数学基础开始，逐步构建从线性代数到自主代理的算法，强调“从零开始”和“动手实践”，每节课都会产出可复用的 AI 工件。 |
| 3 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 27.2k | 1.2k | Anthropic 官方维护的 Claude Code 插件目录，提供高质量插件资源。包含 Anthropic 内部插件及社区/合作伙伴提交的外部插件。支持通过 Claude Code 插件系统直接安装，遵循标准化的插件结构（含元数据、MCP 配置、命令等）。用户需自行评估插件安全性，Anthropic 不对外部插件提供担保。 |
| 4 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intend... | Python | 14.0k | 550 | 这是一个开源插件仓库，旨在将 Claude 转变为特定角色的专家。它包含生产力、销售、客户支持、产品管理等11种插件，支持与多种工具（如 Slack、Notion、Jira）集成。这些插件通过捆绑技能、连接器和斜杠命令，帮助知识工作者和团队自动化工作流程，提升协作效率和一致性。 |
| 5 | [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 152.0k | 2.6k | 这是一个基于 Andrej Karpathy 对 LLM 编码陷阱观察的单一 CLAUDE.md 文件，旨在提升 Claude Code 的行为质量。项目提出了四个核心原则：编码前思考、简单优先、外科手术式修改和目标驱动执行，以解决模型假设错误、过度复杂化代码及意外副作用等问题，帮助开发者编写更简洁、精准的代码。 |
| 6 | [earendil-works/pi](https://github.com/earendil-works/pi) | AI agent toolkit: coding agent CLI, unified LLM AP... | TypeScript | 53.9k | 456 | 这是一个名为 Pi 的 AI 代理工具包，包含交互式编码代理 CLI、统一多提供商 LLM API、代理运行时及终端 UI 库。项目支持 Slack 机器人和 vLLM pods，旨在通过开源会话数据提升 AI 编码能力，促进社区协作。 |
| 7 | [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Use claude-code for free in the terminal, VSCode e... | Python | 29.1k | 553 | 这是一个 Claude Code 的免费代理工具，支持终端、VSCode 和 Discord 集成。它充当中间层，将 API 请求路由至 17 种提供商（如 OpenRouter、DeepSeek 等）。支持流式传输、工具调用、语音转录及本地模型，允许用户自定义模型路由和配置。 |
| 8 | [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | Pre-indexed code knowledge graph for Claude Code, ... | TypeScript | 21.9k | 3.0k | CodeGraph 为 Claude Code、Cursor 等 AI 编程助手提供预索引的代码知识图谱。通过构建符号关系和调用图，它让 AI 代理直接查询图谱而非扫描文件，从而显著降低成本（约35%）、减少工具调用（约70%）并提升速度。支持本地运行，无需 Node.js，兼容多种主流 AI 编程助手。 |
| 9 | [multica-ai/multica](https://github.com/multica-ai/multica) | The open-source managed agents platform. Turn codi... | TypeScript | 32.5k | 585 | Multica 是一个开源的托管代理平台，旨在将编码 AI 代理转化为真正的团队成员。它允许用户像分配给同事一样分配任务，代理会自主编写代码、报告进度和解决问题。该平台支持多种 AI 模型，提供看板视图和技能积累功能，旨在构建 vendor-neutral、self-hosted 的人类与 AI 协作基础设施。 |
| 10 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 25.8k | 106 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融数据的高噪声特性设计。它采用两阶段框架，通过专用分词器将 OHLCV 数据量化为离散标记，再利用自回归 Transformer 进行预训练。该模型支持多种量化任务，已在 AAAI 2026 被接收，并提供了 mini、small、base 等不同参数量的模型版本。 |
| 11 | [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | Ghostty-based macOS terminal with vertical tabs an... | Swift | 19.0k | 696 | 这是一个基于 Ghostty 的 macOS 原生终端应用，专为 AI 编码代理设计。它支持垂直标签页、SSH 远程连接和浏览器集成，具备通知系统以提醒用户 AI 代理的需求。通过脚本化 API 和命令行工具，支持自动化操作和自定义命令，旨在提供流畅、高效的开发体验。 |
| 12 | [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | A Simple and Universal Swarm Intelligence Engine, ... | Python | 62.1k | 197 | MiroFish 是一个基于 Python 的多智能体群体智能引擎。它通过提取现实世界的种子信息，构建高保真数字世界，模拟智能体互动与演化。用户可上传数据或故事，通过自然语言描述需求，获得详细的预测报告和互动模拟，用于决策回放或创意探索。 |
| 13 | [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Master programming by recreating your favorite tec... | Markdown | 504.2k | 550 | 这是一个汇集了众多技术从头重建教程的开源项目。涵盖操作系统、数据库、Web浏览器、AI模型及3D渲染器等领域。通过跟随指南从零构建这些技术，开发者能深入理解底层原理，是提升编程能力的绝佳实践平台。 |
| 14 | [dotnet/skills](https://github.com/dotnet/skills) | Repository for skills to assist AI coding agents w... | C# | 3.0k | 183 | 这是一个由 .NET 团队维护的 AI 编码代理技能库，包含核心 .NET 开发、数据访问、性能诊断、构建优化、包管理、项目升级、MAUI 开发、AI/ML 集成、模板引擎、测试运行及 ASP.NET Core 等多种插件，旨在提升 AI 助手在 .NET 生态中的开发效率与准确性。 |
| 15 | [blakeblackshear/frigate](https://github.com/blakeblackshear/frigate) | NVR with realtime local object detection for IP ca... | TypeScript | 32.8k | 181 | Frigate 是一个专为 Home Assistant 设计的本地 NVR，利用 OpenCV 和 TensorFlow 进行实时 AI 对象检测。支持 GPU 加速，通过 MQTT 集成，提供 24/7 录制、低延迟 WebRTC 流媒体及智能视频保留功能，旨在最大化性能并最小化资源使用。 |
| 16 | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 754 structured cybersecurity skills for AI agents ... | Python | 8.3k | 930 | 处理失败 |

[查看完整数据](api/github/2026-05-24.json)
<!-- END GITHUB TRENDING -->




