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

**最后更新**: 2026-10-18 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | The job search that runs on your machine. AI job a... | Python | 53.2k | 2.2k | 这是一个基于 Python 和 Claude Code 的本地 AI 求职框架。它帮助用户自动化评估职位、定制简历、撰写求职信并准备面试。作者利用该工具成功找到了 AI 工程师的工作。项目支持自定义工作流，适用于需要批量申请职位或提高求职效率的用户。 |
| 2 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 42.7k | 1.2k | Anthropic 官方维护的 Claude Code 插件目录，提供高质量插件市场。包含 Anthropic 内部插件及第三方社区插件，用户可通过该目录安装插件以扩展 Claude Code 的功能。项目规定了插件的标准结构，并强调安全注意事项。 |
| 3 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | The open source coding agent.... | TypeScript | 216.6k | 1.4k | OpenCode 是一个开源的 AI 编码代理，提供命令行和桌面应用支持。内置两个代理：默认的 build 代理用于开发，plan 代理用于只读分析。支持多平台安装。 |
| 4 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 12.7k | 350 | 该项目包含 Cursor 官方插件规范及多种实用工具插件。涵盖代码审查、持续学习、团队协作、文档渲染、代理兼容性检查、CLI 设计模式、SDK 开发以及任务编排等功能，旨在提升 AI 编程助手的工作流效率与智能化水平。 |
| 5 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The original agent harness. Deploy intelligent ... | TypeScript | 76.5k | 513 | Ruflo 是一个专为 Claude Code 和 Codex 设计的智能代理元框架。它通过提供工具、记忆、循环和安全护栏，赋予模型协作能力。支持多代理群组、自适应记忆、联邦通信和向量 RAG，能够部署智能多玩家群组并协调自主工作流。 |
| 6 | [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | Solution for long term memory for agent coding CLI... | Rust | 10.5k | 512 | 该项目为 AI 编码 Agent 提供跨平台长期记忆解决方案。支持在 Claude、Codex 等多种工具间无缝切换，共享上下文、工作流配置及会话状态，打破单机与单一 Agent 的限制，实现高效协作。 |
| 7 | [stablyai/orca](https://github.com/stablyai/orca) | Orca is the place for working with a fleet of agen... | TypeScript | 96.7k | 1.1k | Orca 是一个 AI 编排平台，允许用户同时运行多个 AI 编码代理（如 Claude、Codex）。它支持并行工作树、SSH 远程运行、移动端监控以及与 GitHub/Linear 的深度集成。通过提供终端拆分、设计模式和 CLI 工具，Orca 旨在提高开发者的效率，实现多代理协作和代码审查。 |
| 8 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 54.6k | 589 | CLI-Anything 旨在让所有软件具备 AI 代理原生能力。通过 CLI-Hub，它提供社区构建的命令行工具，允许 AI 代理（如 Cursor、Claude Code）通过单一命令行与各类软件和服务交互，实现自动化操作。 |
| 9 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 75.4k | 2.1k | VoiceStudio 是一个开源的本地化 ElevenLabs 替代品，支持语音克隆、语音设计、视频配音、听写和转录等功能。它支持 646 种语言，提供本地 API 和 MCP 支持，允许用户在本地硬件上运行，无需依赖远程服务。支持 NVIDIA GPU、Apple Silicon 和 CPU 加速。 |
| 10 | [android/skills](https://github.com/android/skills) | ... | Kotlin | 8.8k | 375 | 这是一个针对 Android 开发的 AI 技能库，旨在帮助 LLM 更好地理解并执行 Android 开发最佳实践。它包含模块化的 SKILL.md 文件，专注于 LLM 表现不佳的复杂工作流，可作为 Android CLI 工具或 Claude Code 等代理的插件使用。 |
| 11 | [mlabonne/llm-course](https://github.com/mlabonne/llm-course) | Course to get into Large Language Models (LLMs) wi... | - | 84.0k | 81 | 这是一个免费的 LLM 入门到进阶课程，分为基础、科学家和工程师三个阶段。包含数学、Python及神经网络基础，以及模型微调、合并、量化、评估等实战教程和 Colab 笔记本，旨在帮助用户掌握构建和部署 LLM 应用的全流程技能。 |
| 12 | [Kruk2/jasna](https://github.com/Kruk2/jasna) | Video restoration tool... | Python | 2.4k | 115 | Jasna 是一个基于 Python 的视频和图像马赛克修复工具。它提供免费的基础模型和付费的高级 LTX 模型，支持 GPU 加速，可在 Windows 和 Linux 上运行。支持 VR180 视频，具备实时预览和命令行功能。 |
| 13 | [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | The most powerful and modular diffusion model GUI,... | Python | 138.6k | 154 | ComfyUI 是一个强大的本地扩散模型 GUI 和推理引擎，采用节点图界面。它针对本地硬件进行了极致优化，支持最新开源模型，能在低显存下快速运行。提供 API、App Mode 和跨平台支持，适用于图像、视频及 3D 模型的专业创作。 |

[查看完整数据](api/github/2026-10-18.json)
<!-- END GITHUB TRENDING -->




