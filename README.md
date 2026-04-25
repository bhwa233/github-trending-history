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

**最后更新**: 2026-04-25 | **成功**: 12 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Use claude-code for free in the terminal, VSCode e... | Python | 11.4k | 4.0k | 这是一个轻量级代理项目，旨在免费使用 Claude Code。它通过路由 API 调用到 NVIDIA NIM、OpenRouter、DeepSeek、LM Studio 或 llama.cpp，实现零成本调用。支持 VSCode 扩展和 CLI，具备思考标记解析、工具调用优化及 Discord 机器人等高级功能，无需 Anthropic API Key。 |
| 2 | [mattpocock/skills](https://github.com/mattpocock/skills) | My personal directory of skills, straight from my ... | Shell | 19.9k | 857 | 处理失败 |
| 3 | [Z4nzu/hackingtool](https://github.com/Z4nzu/hackingtool) | ALL IN ONE Hacking Tool For Hackers... | Python | 63.8k | 1.2k | 这是一个基于 Python 的全能黑客工具箱，包含 185+ 种安全工具。支持搜索、标签过滤、批量安装和智能更新。涵盖信息收集、Web 攻击、无线攻击等 20 个类别，提供一键安装和 Docker 支持，旨在简化渗透测试流程。 |
| 4 | [PostHog/posthog](https://github.com/PostHog/posthog) | 🦔 PostHog is an all-in-one developer platform for... | Python | 33.5k | 469 | PostHog 是一个开源的全栈开发者平台，集成了产品分析、Web 分析、会话回放、错误追踪、功能标志、A/B 测试、调查、数据仓库及 AI 助手等功能。它帮助开发者在一个统一的技术栈中监控用户行为、调试代码并加速功能发布，提供免费层级。 |
| 5 | [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI tool for configuring and monitoring Claude Cod... | Python | 25.3k | 78 | 这是一个用于 Anthropic Claude Code 的 CLI 工具，旨在配置和监控 AI 开发工作流。它提供了一百多个预配置的组件，包括 AI Agents、自定义 Slash Commands、外部服务集成（MCPs）、Claude 设置、自动化 Hooks 以及可重用 Skills。用户可通过 Web 仪表板浏览并安装这些组件，快速提升开发效率。 |
| 6 | [deepseek-ai/DeepEP](https://github.com/deepseek-ai/DeepEP) | DeepEP: an efficient expert-parallel communication... | Cuda | 9.5k | 189 | DeepEP 是一个专为 MoE 和专家并行设计的高效通信库。它提供高吞吐量、低延迟的 all-to-all GPU 内核，支持 FP8 精度。针对 DeepSeek-V3 的受限组门控算法，优化了 NVLink 到 RDMA 的非对称带宽转发。此外，还包含纯 RDMA 低延迟内核用于推理解码，以及基于钩子的通信计算重叠技术。性能测试显示在 NVLink 下带宽可达 153GB/s，RDMA 下可达 58GB/s。 |
| 7 | [PowerShell/PowerShell](https://github.com/PowerShell/PowerShell) | PowerShell for every system!... | C# | 53.1k | 68 | PowerShell 是一个跨平台的自动化和配置工具框架，支持 Windows、Linux 和 macOS。它包含命令行 shell、脚本语言和 cmdlet 框架，专为处理结构化数据（如 JSON、XML）和 REST API 而设计。它是 Windows PowerShell 5.1 的开源演进版本，专注于现代开发体验。 |
| 8 | [RooCodeInc/Roo-Code](https://github.com/RooCodeInc/Roo-Code) | Roo Code gives you a whole dev team of AI agents i... | TypeScript | 23.5k | 55 | Roo Code 是一个在代码编辑器中提供 AI 代理团队的插件。它支持从自然语言生成代码、重构调试、编写文档等多种功能。提供 Code、Architect、Ask、Debug 和 Custom 等多种模式，适应不同开发场景。目前由社区团队维护，支持 GPT-5.5 和 Claude Opus 4.7 等模型，并集成了 MCP 服务器。 |
| 9 | [huggingface/ml-intern](https://github.com/huggingface/ml-intern) | 🤗 ml-intern: an open-source ML engineer that read... | Python | 6.2k | 1.2k | 这是一个基于 Hugging Face 生态系统的开源 AI 助手，旨在充当自主的 ML 工程师。它利用大语言模型（如 Claude 和 GPT）阅读论文、编写代码、训练模型并部署应用。支持交互式和 Headless 模式，能够自动处理从研究到交付的全流程。 |
| 10 | [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Master programming by recreating your favorite tec... | Markdown | 495.9k | 1.4k | 通过从头构建著名技术来掌握编程的教程合集。涵盖操作系统、数据库、区块链、3D 渲染器、AI 模型等众多领域。旨在帮助开发者深入理解底层原理与系统设计。 |
| 11 | [CJackHwang/ds2api](https://github.com/CJackHwang/ds2api) | Deepseek to API: A lightweight, high-performance f... | Go | 1.4k | 37 | 这是一个将 DeepSeek Web 对话能力转换为 OpenAI、Claude 和 Gemini 兼容 API 的轻量级高性能中间件。后端基于 Go 全量实现，支持多账号轮询、Docker 和 Vercel 部署，提供统一接口和 WebUI 管理台。 |
| 12 | [Universal-Commerce-Protocol/ucp](https://github.com/Universal-Commerce-Protocol/ucp) | Specification and documentation for the Universal ... | Python | 2.8k | 16 | UCP 是一个开放标准，旨在解决碎片化商业环境，促进平台、企业和支付服务商间的互操作性。它提供标准化的通用语言和组合式架构，支持动态发现与安全交互。专为支持 AI 代理的“代理商业”设计，通过模块化能力定义实现无缝、安全的电子商务集成。 |
| 13 | [ComposioHQ/awesome-codex-skills](https://github.com/ComposioHQ/awesome-codex-skills) | A curated list of practical Codex skills for autom... | Python | 1.5k | 174 | 该项目是一个精选的 Codex 技能库，旨在通过模块化指令包自动化工作流。支持跨 1000+ 应用操作，涵盖开发、生产力及沟通等领域。提供了 Python 安装脚本，方便用户快速集成技能，实现代码审查、自动化任务等高级功能。 |

[查看完整数据](api/github/2026-04-25.json)
<!-- END GITHUB TRENDING -->




