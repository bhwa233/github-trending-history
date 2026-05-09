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

**最后更新**: 2026-05-08 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anthropics/financial-services](https://github.com/anthropics/financial-services) | ... | Python | 15.1k | 3.7k | Anthropic 提供的金融服务业参考实现，包含针对投资银行、股票研究等领域的代理和技能。项目提供 Pitch Agent、Market Researcher 等端到端工作流，支持作为 Claude Cowork 插件或 API 部署。包含估值、收益分析等垂直插件，旨在辅助分析师起草工作产品，需人工审核。 |
| 2 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | Shell | 35.3k | 1.8k | 该项目为 AI 编码代理提供了一套生产级工程技能和工作流。它包含 7 个斜杠命令，覆盖从需求定义到代码审查和部署的完整开发生命周期。旨在确保 AI 代理遵循资深工程师的最佳实践和质量标准，提升代码质量和开发效率。 |
| 3 | [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) | Coding agent for DeepSeek models that runs in your... | Rust | 21.7k | 3.8k | 这是一个基于 Rust 开发的终端编码代理，专为 DeepSeek V4 模型设计。它支持流式传输推理过程，允许用户通过键盘驱动的 TUI 界面编辑本地代码、运行 Shell 命令和管理 Git。具备自动模式可智能选择模型和思考级别，并包含批准门控以安全地修改工作区。 |
| 4 | [z-lab/dflash](https://github.com/z-lab/dflash) | DFlash: Block Diffusion for Flash Speculative Deco... | Python | 3.8k | 388 | DFlash 是一种专为快速推测解码设计的轻量级块扩散模型。它通过并行起草机制，实现了高效且高质量的推理加速。项目支持 Gemma、Qwen 等多种主流大模型，并提供了针对 vLLM、SGLang 等框架的安装方案，旨在提升大语言模型的生成速度。 |
| 5 | [decolua/9router](https://github.com/decolua/9router) | Unlimited FREE AI coding. Connect Claude Code, Cod... | JavaScript | 5.5k | 1.0k | 9Router 是一个免费的 AI 路由器，旨在通过 40+ 提供商连接 AI 编码工具。它利用 RTK 技术节省 20-40% 的 Token，并具备自动回退机制（订阅→便宜→免费），确保零停机时间和成本优化。 |
| 6 | [CloakHQ/CloakBrowser](https://github.com/CloakHQ/CloakBrowser) | Stealth Chromium that passes every bot detection t... | Python | 2.9k | 482 | CloakBrowser 是一个通过 C++ 源级补丁修改指纹的隐身 Chromium 浏览器，旨在绕过所有反机器人检测。它作为 Playwright 和 Puppeteer 的零代码更改替代品，支持 Python 和 Node.js，并通过 Cloudflare Turnstile 和 reCAPTCHA v3 等测试，提供“humanize”模式模拟人类行为。 |
| 7 | [awslabs/aidlc-workflows](https://github.com/awslabs/aidlc-workflows) | AI-Driven Life Cycle (AI-DLC) adaptive workflow st... | Python | 1.7k | 92 | 这是一个由 AWS 实验室开发的 AI-Driven Development Life Cycle (AI-DLC) 工作流规则集。它为 AI 编码代理提供自适应的引导规则，旨在智能管理软件开发流程，确保代码质量并保持开发者对过程的控制。 |
| 8 | [HKUDS/AI-Trader](https://github.com/HKUDS/AI-Trader) | "AI-Trader: 100% Fully-Automated Agent-Native Trad... | Python | 14.6k | 189 | AI-Trader 是一个面向 AI 代理的自动化交易平台，支持 OpenClaw、Claude Code 等主流代理协作。平台提供跨平台信号同步、一键跟单及多市场交易功能，旨在通过集体智能提升交易效率。最近版本优化了生产稳定性与代码架构。 |
| 9 | [LearningCircuit/local-deep-research](https://github.com/LearningCircuit/local-deep-research) | ~95% on SimpleQA (e.g. Qwen3.6-27B on a 3090). Sup... | Python | 6.7k | 572 | 这是一个专注于隐私保护的本地 AI 研究助手。它支持接入多种本地和云端大模型，能利用 arXiv、PubMed 等搜索引擎及私有文档进行自动研究。项目提供 Docker 快速部署方案，内置 SQLCipher 加密，适合需要自主掌控数据并进行深度学术或知识分析的用户。 |
| 10 | [lobehub/lobehub](https://github.com/lobehub/lobehub) | The ultimate space for work and life — to find, bu... | TypeScript | 76.5k | 74 | LobeHub 是一个专注于 AI Agent 的协作平台，旨在通过多智能体协作、思维链和插件系统，打造人类与智能体共同进化的工作空间。支持本地/云端模型、多模态交互（语音、图像）及 MCP 插件市场，提供桌面端应用，支持自托管，致力于构建开放透明的 AIGC 生态系统。 |
| 11 | [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 📚 《从零开始构建智能体》——从零开始的智能体原理与实践教程... | Python | 44.5k | 645 | Datawhale 社区发起的系统性智能体学习教程，专注于 AI 原生智能体的构建。内容涵盖从基础理论、经典范式（如 ReAct）到高级技术（记忆、上下文工程、Agentic RL）的完整知识体系，包含低代码平台使用及多智能体实战项目，旨在帮助开发者从 LLM 使用者蜕变为智能体系统构建者。 |
| 12 | [flutter/skills](https://github.com/flutter/skills) | ... | Dart | 1.7k | 168 | Flutter 团队维护的 Agent Skills 项目，提供一系列定制指令和工作流，辅助 AI 代理进行 Flutter 开发。它作为 MCP 的补充，教会代理如何使用工具完成特定任务（如集成测试、小部件预览等），旨在减少错误并确保遵循最佳实践。 |

[查看完整数据](api/github/2026-05-08.json)
<!-- END GITHUB TRENDING -->




