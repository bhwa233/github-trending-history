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

**最后更新**: 2026-10-19 | **成功**: 11 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | The job search that runs on your machine. AI job a... | Python | 57.4k | 3.9k | 这是一个基于 Claude Code 的本地 AI 求职应用框架。它通过结构化工作流，帮助用户自动评估职位、定制简历、撰写求职信并准备面试。项目支持自我画像和匹配评估，虽然针对丹麦市场优化，但设计模式可移植。作者亲测有效，成功帮助求职者获得 AI 工程师职位。 |
| 2 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | The open source coding agent.... | TypeScript | 217.9k | 1.3k | OpenCode 是一个开源的 AI 编码代理，使用 TypeScript 编写。它提供命令行工具和桌面应用，支持多平台。内置两个代理：build（默认，全权限，用于开发）和 plan（只读，用于分析）。 |
| 3 | [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | Solution for long term memory for agent coding CLI... | Rust | 11.4k | 666 | 这是一个为 AI 编码代理提供长期记忆的 Rust 项目。它允许用户在多个不同的 AI 编码工具（如 Claude Code、Codex、Cursor 等）之间无缝切换，共享记忆和上下文。项目支持跨项目、跨机器的持久化存储，解决了不同工具之间上下文丢失和交接困难的问题，让 AI 助手能记住之前的架构、失败尝试和未解决的问题。 |
| 4 | [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | The most powerful and modular diffusion model GUI,... | Python | 139.8k | 1.0k | ComfyUI 是一个基于 Python 的强大且模块化的扩散模型 GUI 和后端，采用节点图界面。它以本地高性能推理引擎著称，支持图像、视频、3D 等多模态生成，并优化了显存管理，可在低配置硬件上运行，提供 API 和桌面应用。 |
| 5 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The original agent harness. Deploy intelligent ... | TypeScript | 77.2k | 564 | Ruflo 是一个专为 Claude Code 和 Codex 设计的智能代理元框架。它为 AI 模型提供工具、记忆、循环和控制，支持部署 100+ 专用代理、协调多代理蜂群、自学习记忆及跨机器联邦通信。通过集成向量 RAG 和安全护栏，它实现了代理的自主协作与智能执行。 |
| 6 | [stablyai/orca](https://github.com/stablyai/orca) | Orca is the place for working with a fleet of agen... | TypeScript | 98.3k | 1.6k | Orca 是一个 AI 编排器，允许用户并行运行多个编码代理（如 Codex、Claude Code）。它支持移动端伴侣、并行工作树、终端拆分、设计模式以及 SSH 远程执行等功能，帮助开发者高效管理 AI 代理，提升编码效率。 |
| 7 | [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Compress tool outputs, logs, files, and RAG chunks... | Python | 76.3k | 310 | Headroom 是一个本地运行的 AI 数据压缩工具，旨在减少 LLM 的 token 消耗。它支持库、代理和 MCP 服务器等多种集成方式，能压缩代码、JSON 和文本，在保持答案一致性的同时显著降低成本。 |
| 8 | [withmarbleapp/os-taxonomy](https://github.com/withmarbleapp/os-taxonomy) | ... | JavaScript | 6.1k | 284 | 这是一个由 Marble 开发的开放教育数据集，包含小学阶段 1,591 个微主题和 3,225 个先决条件依赖关系。它将学习内容分解为可教授的概念，并与 NGSS、Common Core 等国家标准对齐，包含教学研究记录和领域聚类，旨在构建一个连接的学习图谱。 |
| 9 | [Kruk2/jasna](https://github.com/Kruk2/jasna) | Video restoration tool... | Python | 2.9k | 498 | 处理失败 |
| 10 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 55.3k | 606 | CLI-Anything 致力于让所有软件具备‘代理原生’特性。通过 CLI-Hub 平台，用户可安装和管理社区构建的命令行工具，使 AI 代理（如 Claude Code、Cursor）能通过简单指令与软件交互，实现 CAD 建模、笔记管理等自动化任务。 |
| 11 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | TypeScript | 152.7k | 167 | Claude Code 是一个运行在终端的智能编码助手，基于 TypeScript 开发。它通过自然语言命令理解代码库，执行常规任务、解释复杂代码及处理 Git 工作流，支持插件扩展，旨在提升开发效率。 |
| 12 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 41.7k | 363 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融市场的“语言”设计。它采用两阶段框架，利用专门的 Tokenizer 将 OHLCV 数据量化，并通过自回归 Transformer 进行预训练。该项目支持多种模型规模，可用于金融预测和量化任务。 |

[查看完整数据](api/github/2026-10-19.json)
<!-- END GITHUB TRENDING -->




