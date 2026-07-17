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

**最后更新**: 2026-07-17 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Master programming by recreating your favorite tec... | Markdown | 527.3k | 1.1k | 这是一个包含从操作系统、数据库到 AI 模型、3D 渲染器等众多热门技术实现教程的指南集合。项目通过“从零开始”的实践方式，帮助开发者深入理解底层原理，掌握核心编程技能。 |
| 2 | [PostHog/posthog](https://github.com/PostHog/posthog) | 🦔 PostHog is the leading platform for building se... | Python | 36.2k | 437 | PostHog 是一个全栈产品分析平台，提供自驱动模式、产品分析、会话回放、功能标志、实验、错误跟踪、日志、调查、数据仓库集成及 AI 可观测性等工具。它帮助开发者主动诊断问题、发现机会并修复缺陷，支持从 Slack、Web 或 MCP 进行管理。 |
| 3 | [HenryNdubuaku/maths-cs-ai-compendium](https://github.com/HenryNdubuaku/maths-cs-ai-compendium) | Become a cracked AI/ML Research Engineer... | TypeScript | 6.6k | 248 | 这是一个涵盖数学、计算和人工智能的开放教科书，旨在帮助从业者深入理解核心概念。项目包含 MCP 服务器，允许 Claude Code、Cursor 等 AI 助手将其作为知识库使用。内容从基础向量、矩阵到机器学习和计算语言学，适合准备 AI/ML 面试或深入研究的人员。 |
| 4 | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | Anti-AI-slop design skill for Claude Code, Cursor,... | CSS | 12.0k | 1.5k | 这是一个为 Claude Code、Cursor 和 Codex 设计的 AI 设计技能，旨在防止生成平庸的 AI 设计。它提供 20 种主题和四种操作模式（构建、审计、重构、研究），通过宏观结构选择和“slop-test”机制，确保每个生成的页面都独一无二，避免模板化，生成高质量的 HTML+CSS 代码。 |
| 5 | [github/copilot-sdk](https://github.com/github/copilot-sdk) | Multi-platform SDK for integrating GitHub Copilot ... | Java | 9.8k | 234 | 这是一个多平台 SDK，旨在将 GitHub Copilot Agent 集成到各类应用中。它暴露了 Copilot CLI 的引擎，允许开发者通过编程方式调用代理工作流，自动处理规划、工具调用和文件编辑等任务。支持 Java、Python、TypeScript、Go、.NET 和 Rust 等多种语言，需配合 Copilot 订阅使用。 |
| 6 | [anthropics/cwc-workshops](https://github.com/anthropics/cwc-workshops) | ... | TypeScript | 1.6k | 37 | Anthropic 运行的 Code with Claude 工作坊集合，包含多个 TypeScript 项目。这些材料教授如何使用 Claude Code、Managed Agents 和 MCP 构建多智能体系统、AI 辅助工作流及评估策略。虽然项目不再维护，但内容涵盖了从模型选择到部署的完整开发流程，适合学习 Claude 在编程和自动化中的应用。 |
| 7 | [PrismML-Eng/Bonsai-demo](https://github.com/PrismML-Eng/Bonsai-demo) | Bonsai Demo... | Shell | 1.7k | 279 | 这是一个用于在本地运行 Bonsai 语言模型的演示项目。支持 Mac (Metal)、Linux/Windows (CUDA, Vulkan, ROCm) 及 CPU。项目提供 Bonsai 27B 等多种模型，支持视觉语言、工具调用、推理和长上下文，且具有极小的内存占用。通过简单的 Shell 脚本即可快速启动本地聊天、视觉和工具服务。 |
| 8 | [protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf) | Protocol Buffers - Google's data interchange forma... | C++ | 71.5k | 18 | Protocol Buffers 是 Google 开发的语言中立、平台中立的数据序列化机制，用于高效存储和传输结构化数据。项目提供了源码构建指南，并集成了 Bazel 构建系统。 |
| 9 | [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | Local-first code intelligence graph for MCP and CL... | Python | 19.7k | 57 | 这是一个基于 Python 的本地优先代码智能图工具，利用 Tree-sitter 构建代码库结构。它通过 MCP 协议为 AI 编码工具提供精确的上下文，避免重复读取整个代码库，显著减少 token 消耗，提升代码审查效率。 |
| 10 | [docusealco/docuseal](https://github.com/docusealco/docuseal) | Open source DocuSign alternative. Create, fill, an... | Ruby | 17.8k | 131 | DocuSeal 是一个开源的 DocuSign 替代品，使用 Ruby 构建。它提供 PDF 表单构建、自动签名、多语言支持及 API 集成等功能。支持多种存储后端和部署方式，具备移动端优化和用户管理能力，适合需要数字化文档签署流程的企业或个人。 |
| 11 | [openinterpreter/openinterpreter](https://github.com/openinterpreter/openinterpreter) | A coding agent for open models like Kimi K3... | Rust | 66.3k | 431 | Open Interpreter 是一个用 Rust 编写的编码代理，专为低成本模型（如 Kimi K3）优化。它模拟了 OpenAI Codex 接口，支持多种模型 harness，具备沙箱运行命令、计算机使用（QA skill）以及 ACP 协议兼容等特性，允许模型在本地环境中执行代码和操作应用。 |
| 12 | [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | A vector index built on TurboQuant, written in Rus... | Python | 13.3k | 280 | turbovec 是一个基于 Rust 和 TurboQuant 算法的向量索引库，提供 Python 绑定。它通过数据无关量化技术实现极高的内存压缩率（10M 文档仅需 4GB），并利用 SIMD 内核提供比 FAISS 更快的搜索速度。支持在线摄取、搜索时过滤及纯本地部署，非常适合对隐私、内存或延迟敏感的 RAG 应用场景。 |
| 13 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | DeepTutor: Lifelong Personalized Tutoring. https:/... | Python | 27.3k | 528 | DeepTutor 是一个基于 Python 的终身个性化 AI 导师系统。项目利用 LlamaIndex、LightRAG 和 FAISS 构建 RAG 引擎，支持多模态文档解析、向量检索及智能问答。它提供 Web 界面，支持用户管理、测验评分及 Mattermost 集成，旨在通过 AI 实现高效的知识库问答与个性化学习。 |
| 14 | [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | The open-source CapCut alternative... | TypeScript | 74.8k | 1.1k | OpenCut 是一款免费开源的视频编辑器，致力于成为 CapCut 的替代品。项目正在重写，计划支持跨平台（Web、桌面、移动端）及插件架构。新版本将包含 Editor API、MCP 服务器（AI 代理支持）和 Headless 模式，旨在为创作者提供强大的自动化和扩展能力。 |

[查看完整数据](api/github/2026-07-17.json)
<!-- END GITHUB TRENDING -->




