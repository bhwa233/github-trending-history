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

**最后更新**: 2026-08-11 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 143.1k | 971 | 这是一个提供完整 AI 代理机构的 GitHub 项目，包含前端开发、社区运营等各领域的专家级 AI 代理。项目提供原生桌面应用和脚本，支持一键安装到 Claude Code、Cursor 等主流 AI 编码工具中。每个代理都具备独特个性、专业流程和可交付成果，旨在提升开发者的工作效率。 |
| 2 | [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | Graph-Native Infrastructure for Context and Accoun... | Python | 4.8k | 884 | Semantica 是一个开源的原生图基础设施，旨在为 AI 代理提供可解释、可审计的决策智能。它通过构建上下文图和知识图谱，支持确定性推理和全链路可追溯性，无需依赖 LLM 即可完成图构建与推理。该平台支持 RDF 和 LPG 存储，专为金融、医疗等高利害受监管领域设计，确保数据主权与合规性。 |
| 3 | [nvm-sh/nvm](https://github.com/nvm-sh/nvm) | Node Version Manager - POSIX-compliant bash script... | Shell | 94.5k | 18 | nvm 是一个 POSIX 兼容的 bash 脚本，用于管理多个活动的 Node.js 版本。它允许用户在命令行中快速安装、切换和卸载不同版本的 Node.js，支持 bash、zsh 等多种 shell 环境。该工具非常适合需要在多个 Node.js 版本间切换的开发者，以确保项目兼容性和开发效率。 |
| 4 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 86.2k | 571 | 该项目为 AI 编码代理提供生产级工程技能，将资深工程师的工作流程、质量门禁和最佳实践封装为 8 个斜杠命令（如 /spec, /build, /ship），覆盖开发全生命周期。支持自动激活技能，可集成至 Claude Code、Cursor 等多种代理工具中，提升代码质量和开发效率。 |
| 5 | [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 ... | Python | 62.1k | 317 | 这是一个基于大语言模型（LLM）的多市场股票智能分析系统，支持A股、港股、美股等全球主要市场。它通过聚合多源行情、新闻和公告，生成包含评分、趋势和操作建议的AI决策报告，并自动推送至企业微信、飞书等平台。支持零成本部署，适合个人投资者进行自动化选股与决策辅助。 |
| 6 | [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) | The ultimate RAG for your monorepo. Query, underst... | Python | 3.8k | 339 | 这是一个基于 Python 的多语言代码库 RAG 系统。它利用 Tree-sitter 和 Memgraph 构建代码知识图谱，支持自然语言查询、基于 AST 的编辑和优化。具备结构化搜索、数据流追踪及死代码检测功能，适用于大型 monorepo 的代码理解和维护。 |
| 7 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 168.1k | 468 | 这是 Anthropic 官方维护的 Claude Agent Skills 公共仓库。项目包含一系列用于提升 Claude 特定任务性能的技能，涵盖创意、技术及企业工作流。每个技能以独立文件夹和 SKILL.md 文件形式存在，展示了如何通过指令和脚本动态增强 AI 能力，供开发者参考和学习。 |
| 8 | [3b1b/manim](https://github.com/3b1b/manim) | Animation engine for explanatory math videos... | Python | 90.2k | 246 | Manim 是由 3Blue1Brown 作者创建的精确程序化动画引擎，专为制作解释性数学视频设计。该仓库为 ManimGL 版本，基于 Python 开发，依赖 FFmpeg、OpenGL 和 LaTeX，用于生成高质量的数学可视化动画。 |
| 9 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | DeepTutor: Lifelong Personalized Tutoring. https:/... | Python | 34.7k | 829 | DeepTutor 是一个终身个性化辅导系统，集成了多种大语言模型（如 OpenAI、Gemini）和知识库，支持 RAG 检索增强生成。项目包含 101 个 CLI 应用，支持 MCP 协议，具备长期记忆功能，提供主题化和移动端支持，旨在为用户提供智能、个性化的学习体验。 |
| 10 | [stablyai/orca](https://github.com/stablyai/orca) | Orca is the ADE for working with a fleet of parall... | TypeScript | 42.7k | 881 | Orca 是一款面向高产开发者的 AI 编排工具，支持并行运行 Codex、ClaudeCode 等多个编码代理。它提供移动伴侣、终端分割、设计模式、Git 工作树管理及 GitHub/Linear 集成，帮助用户在隔离环境中对比和合并代理结果，提升开发效率。 |
| 11 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | The open-source app everyone uses to manage agents... | TypeScript | 77.1k | 743 | Paperclip 是一个开源的 AI 代理团队编排平台，基于 Node.js 和 React 构建。它允许用户定义业务目标，雇佣并协调多个 AI 代理（如 Claude、Codex）完成工作，同时提供预算管理、工作审计和进度监控功能。它将 AI 代理管理转化为类似任务管理器的体验，适合希望构建自主 AI 公司或高效管理多代理协作的用户。 |
| 12 | [huggingface/transformers](https://github.com/huggingface/transformers) | 🤗 Transformers: the model-definition framework fo... | Python | 163.8k | 69 | 这是一个由 Hugging Face 开发的最先进机器学习模型定义框架，支持文本、视觉、音频、视频及多模态模型。它统一了模型定义，兼容 PyTorch、DeepSpeed 等多种训练框架和 vLLM 等推理引擎。项目提供了超过百万个预训练模型检查点，通过 Pipeline API 简化推理流程，旨在民主化 AI 模型的使用。 |
| 13 | [harveyai/harvey-labs](https://github.com/harveyai/harvey-labs) | A benchmark built to evaluate and improve agent ca... | Python | 1.1k | 24 | Harvey LAB 是一个开源的法律智能体基准测试项目。它包含真实法律任务的数据集和执行框架，旨在评估 LLM 智能体在并购等法律工作中的能力。项目提供端到端的评估流程，包括任务设置、运行、评分和报告生成，支持持续更新和贡献。 |
| 14 | [jaywcjlove/awesome-mac](https://github.com/jaywcjlove/awesome-mac) |  This project is dedicated to collecting high-qua... | Swift | 110.5k | 334 | 这是一个专注于 macOS 软件的精选列表，按类别系统化组织，旨在帮助用户发现和获取高质量的应用程序。项目维护活跃，拥有庞大的社区支持。 |
| 15 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 47.3k | 436 | 这是一个开源的代理驱动视频制作系统，旨在将 AI 编码助手转变为完整的视频制作工作室。它包含 12 条生产管线和 700+ 代理技能文件，能通过自然语言描述自动完成研究、脚本编写、资产生成、剪辑及合成。其独特之处在于不仅能制作基于图像的视频，还能通过代理从免费素材库检索真实运动片段并渲染成片，实现低成本高质量的视频创作。 |
| 16 | [practical-tutorials/project-based-learning](https://github.com/practical-tutorials/project-based-learning) | Curated list of project-based tutorials... | Python | 278.4k | 394 | 该项目汇集了精选的项目导向教程，旨在帮助开发者从零开始构建应用程序。教程涵盖多种编程语言，内容涉及操作系统、编译器、解释器、数据库及游戏开发等复杂项目，是提升实战能力的优质资源库。 |
| 17 | [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | A self-improving RLM agent for coding workflows an... | TypeScript | 14.1k | 1.1k | Prime Agent 是一个基于递归语言模型（RLM）的开源编码与研究代理。它通过持久化的 REPL 和 Harness 状态，支持程序化工具调用、子代理并行工作及自我改进。结合 Python 环境，它能处理长期任务、后台运行和代理间通信，适合复杂且持续迭代的开发与研究场景。 |

[查看完整数据](api/github/2026-08-11.json)
<!-- END GITHUB TRENDING -->




