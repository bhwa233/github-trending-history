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

**最后更新**: 2026-06-06 | **成功**: 18 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 28.8k | 439 | 这是一个基于 Python 的 AI agent 技能，跨 Reddit、X、YouTube、HN、Polymarket 等平台搜索并综合信息。它通过真实互动（点赞、金钱）而非编辑来评分，聚合分散的“围墙花园”数据，由 AI agent 生成 grounded summary。解决了单一 AI 无法访问所有平台的问题，提供基于真实用户参与度的搜索体验。 |
| 2 | [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | The Frontend Stack for Agents & Generative UI. Rea... | TypeScript | 33.2k | 631 | CopilotKit 是一个全栈 SDK，用于构建智能体应用和生成式 UI。它支持 React、Angular、Vue、React Native 和 Slack 等多平台，允许同一智能体逻辑驱动不同前端。核心功能包括聊天 UI、动态 UI 生成、共享状态和人机协同，基于 AG-UI 协议工作。 |
| 3 | [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | The best-benchmarked open-source AI memory system.... | Python | 54.3k | 446 | MemPalace 是一个本地优先的开源 AI 记忆系统。它逐字存储对话历史，利用语义搜索进行检索，不进行总结或提取。系统采用结构化索引（人/项目为翼，话题为室），支持可插拔后端（默认 ChromaDB），确保数据不出本地，提供高检索准确率（R@5）。 |
| 4 | [danielmiessler/Personal_AI_Infrastructure](https://github.com/danielmiessler/Personal_AI_Infrastructure) | Agentic AI Infrastructure for magnifying HUMAN cap... | TypeScript | 15.0k | 70 | PAI 是一个旨在放大人类能力的代理 AI 基础设施，现升级为 v5.0.0 'Life Operating System'。它包含 Pulse（生活仪表盘）、DA（数字助手）和 Algorithm（算法），帮助用户管理目标、记忆和技能。该系统以人为本，旨在通过 AI 协助个人实现理想状态，同时也适用于团队。 |
| 5 | [openai/plugins](https://github.com/openai/plugins) | OpenAI Plugins... | JavaScript | 1.8k | 213 | 该项目是 OpenAI 插件的代码库，包含精选的 Codex 插件示例。每个插件位于独立目录下，包含必要的 manifest 文件及可选的技能、代理等组件。示例涵盖 Figma、Notion、iOS/macOS/Web 应用构建、Expo、Netlify 等多种场景，展示了如何通过插件扩展 AI 的开发与协作能力。 |
| 6 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet... | Python | 22.3k | 683 | 这是一个开源的 Python 项目，旨在为 AI Agent 提供访问互联网的能力。它通过 CLI 工具集成了 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书等多个主流平台，支持一键安装和更新。项目完全免费且注重隐私安全，兼容 Claude Code、Cursor 等所有命令行 Agent，解决了 Agent 无法直接读取网页和社交媒体内容的痛点。 |
| 7 | [sveltejs/svelte](https://github.com/sveltejs/svelte) | web development for the rest of us... | JavaScript | 87.0k | 25 | Svelte 是一个革命性的 Web 开发框架，它通过编译器将声明式组件转化为高效的 JavaScript 代码，实现 DOM 的精准更新。它旨在简化开发流程，提供类似 React/Vue 的响应式能力，同时避免运行时开销，非常适合构建高性能的单页应用。 |
| 8 | [nginx/nginx](https://github.com/nginx/nginx) | The official NGINX Open Source repository.... | C | 30.7k | 20 | NGINX 是世界上最流行的 Web 服务器、高性能负载均衡器、反向代理和内容缓存。它采用 C 语言编写，基于 BSD 风格许可证开源。NGINX 模块化架构允许通过静态或动态模块扩展功能，支持 SSL/TLS、负载均衡和速率限制等特性，广泛应用于高并发场景。 |
| 9 | [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | Find vulnerabilities, misconfigurations, secrets, ... | Go | 36.0k | 159 | Trivy 是一个用 Go 语言编写的多功能安全扫描器。它支持扫描容器、文件系统、Git 仓库、虚拟机和 Kubernetes，能够检测 OS 包漏洞、CVE、IaC 配置错误、敏感信息及许可证。Trivy 集成了多种平台和工具，提供全面的软件供应链安全检查。 |
| 10 | [golang/go](https://github.com/golang/go) | The Go programming language... | Go | 134.5k | 30 | Go 是一种开源编程语言，旨在让构建简单、可靠且高效的软件变得容易。该项目是 Go 语言的核心代码仓库，提供了官方的二进制分发版和源代码安装指南。它使用 BSD 风格许可证，支持全球数千名贡献者共同维护，是构建现代后端服务和云原生应用的基础语言。 |
| 11 | [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | An Open Source implementation of Notebook LM with ... | TypeScript | 26.6k | 794 | 这是一个完全本地运行的开源 Notebook 替代品，注重数据隐私。支持 18+ 种 AI 模型，可处理 PDF、视频、音频等多模态内容，具备专业播客生成功能，并提供多语言界面，相比 Google Notebook LM 具有更强的灵活性和成本控制能力。 |
| 12 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 219.6k | 700 | Superpowers 是一个为 AI 编码代理设计的全流程软件开发框架。它通过规范确认、设计审查和实施计划制定，引导代理遵循 TDD、YAGNI 和 DRY 原则。支持 Claude、Codex 等多种工具，实现子代理驱动的自主开发，自动化软件工程流程。 |
| 13 | [santifer/career-ops](https://github.com/santifer/career-ops) | AI-powered job search system built on Claude Code.... | JavaScript | 49.3k | 193 | 基于 Claude Code 的 AI 求职系统，将 CLI 转换为求职中心。通过结构化评分系统评估职位，生成 ATS 优化的 PDF CV，并自动扫描招聘门户。强调质量而非数量，帮助用户从数百个机会中筛选出高价值职位，并支持批量处理。 |
| 14 | [openai/whisper](https://github.com/openai/whisper) | Robust Speech Recognition via Large-Scale Weak Sup... | Python | 101.9k | 150 | 这是一个基于 Transformer 架构的通用语音识别模型，通过大规模弱监督数据进行训练。它支持多语言识别、语音翻译和语言识别等任务，能够替代传统语音处理流程中的多个阶段。项目兼容 Python 3.8-3.11 和 PyTorch，依赖 ffmpeg 工具。 |
| 15 | [vitejs/vite](https://github.com/vitejs/vite) | Next generation frontend tooling. It's fast!... | TypeScript | 81.2k | 25 | Vite 是下一代前端构建工具，旨在提供更快速、更轻量的开发体验。它包含一个基于原生 ES Modules 的开发服务器，提供极快的 HMR（热模块替换）和即时服务器启动。构建命令使用 Rolldown 打包代码，输出高度优化的静态资源。它具有丰富的功能、完全类型化的 API 和强大的插件系统，高度可扩展。 |
| 16 | [microsoft/mxc](https://github.com/microsoft/mxc) | Policy-driven, layered isolation and containment... | Rust | 573 | 64 | Microsoft eXecution Container (MXC) 是一个基于 Rust 开发的跨平台沙盒化代码执行系统，旨在安全运行不受信任代码。它支持 Windows、Linux 和 macOS，提供统一的 JSON 配置和 TypeScript SDK，支持多种隔离后端（如进程容器、虚拟机等），并具备基于策略的文件系统、网络和 UI 访问控制功能。 |
| 17 | [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | Turn any PDF or image document into structured dat... | Python | 81.0k | 433 | PaddleOCR 是一款领先的开源 OCR 工具，支持 100+ 种语言。项目包含 PaddleOCR-VL-1.6 和 PP-StructureV3 等先进模型，能将 PDF 和图像转换为结构化的 LLM 就绪数据（JSON/Markdown）。它以高精度、轻量级和高效著称，适用于复杂的文档解析和场景文本识别，是构建 RAG 和智能应用的核心组件。 |
| 18 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 48.5k | 216 | VibeVoice 是微软开源的前沿语音 AI 框架，包含 ASR 和 TTS 模型。ASR 模型支持 60 分钟长音频转录，具备多语言（50+）和结构化输出能力，现已集成 Hugging Face Transformers。TTS 模型支持长文本和实时流式合成，支持多说话人。项目支持 vLLM 加速推理，旨在推动语音社区协作。 |

[查看完整数据](api/github/2026-06-06.json)
<!-- END GITHUB TRENDING -->




