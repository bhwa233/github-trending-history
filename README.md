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

**最后更新**: 2026-08-14 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 29 editorial diagram types for Claude Code. Self-c... | HTML | 17.2k | 3.7k | 这是一个专为 Claude Code 设计的 27 种编辑类图表库。提供自包含的 HTML 和 SVG，支持架构、流程图、状态机等多种图表类型。默认静态输出，支持重绘 draw.io/Mermaid 源码，强调高对比度和极简主义设计，无需 Figma 即可快速生成符合品牌风格的图表。 |
| 2 | [cactus-compute/needle](https://github.com/cactus-compute/needle) | 14MB foundation model for tiny devices; phones, we... | Python | 5.6k | 661 | Needle 2 是一个专为小型设备设计的 45M 参数模型，仅 14MB，运行时约 28MB RAM。它支持工具调用、设备使用和结构化提取。该模型基于 Simple Attention Network 和 Cactus Quants 压缩技术，提供自包含、JSON 输出、置信度门控和有界内存等特性，非常适合手机、可穿戴设备和机器人等边缘设备。 |
| 3 | [megadose/holehe](https://github.com/megadose/holehe) | holehe allows you to check if the mail is used on ... | Python | 12.8k | 427 | Holehe 是一款开源情报（OSINT）工具，用于检查指定电子邮件是否在超过120个网站（如Twitter、Instagram）上注册。它通过模拟“忘记密码”流程来验证账户存在性，并尝试获取部分关联信息（如手机号、恢复邮箱），支持命令行和Python库集成。 |
| 4 | [macro-inc/macro](https://github.com/macro-inc/macro) | Macro is a unified workspace for teams: email, cha... | Rust | 3.0k | 435 | Macro 是一个为团队打造的统一工作空间，集成了邮件、消息、文档、任务、CRM 等功能。它采用模块化“块”设计，基于 Rust 和 SolidJS 构建，利用 CRDT 和双向图实现跨功能的无缝链接与协作。旨在成为团队的工作操作系统，提升效率。 |
| 5 | [smicallef/spiderfoot](https://github.com/smicallef/spiderfoot) | SpiderFoot automates OSINT for threat intelligence... | Python | 20.9k | 292 | SpiderFoot 是一个开源的 OSINT 自动化工具，专注于威胁情报收集和攻击面映射。它通过集成数百个数据源（如恶意 IP 数据库、社交媒体、云存储等），自动收集目标域名、IP、账号及相关资产信息，辅助安全人员进行风险评估和情报分析。 |
| 6 | [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | The fastest browser for AI agents to run browser a... | JavaScript | 10.3k | 153 | ego-lite 是一个专为 AI 代理设计的浏览器，允许它们在独立空间运行自动化任务，而不干扰用户的实际浏览器。它支持零配置共享登录状态（cookies、扩展），通过技能机制集成到 Claude Code 等工具中，实现用户与 AI 并行浏览，提升效率。 |
| 7 | [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | Open-source All in One AI agent workspace. Run any... | TypeScript | 7.3k | 769 | holaOS 是一个开源的本地优先 AI 代理工作空间。它允许用户在一个界面中运行 Claude Code、Codex 等多个代理，并共享内存、工具和上下文。支持 100+ 集成和 MCP 协议，内置多种前沿模型或支持 BYOK，提供无锁定的统一开发体验。 |
| 8 | [github/spec-kit](https://github.com/github/spec-kit) | 💫 Toolkit to help you get started with Spec-Drive... | Python | 128.5k | 1.1k | Spec-Kit 是一个开源工具包，旨在帮助开发者使用 AI 编程代理进行规范驱动开发。它允许用户在编写代码前定义规范，并通过 CLI 工具与各种 AI 代理（如 Copilot）集成，实现从规范到可执行代码的自动化生成，提升软件构建质量。 |
| 9 | [lightningpixel/modly](https://github.com/lightningpixel/modly) | Desktop app to generate 3D models from images or p... | TypeScript | 5.9k | 580 | Modly 是一款基于本地 GPU 的桌面应用，利用开源 AI 模型将图片或文本提示转换为 3D 网格模型。支持 Windows、Linux 和 Apple Silicon macOS，具备扩展系统，允许用户导入并优化 3D 模型。 |
| 10 | [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | RAGFlow is a leading open-source Retrieval-Augment... | Go | 88.4k | 474 | RAGFlow 是一个开源的检索增强生成引擎，融合了 RAG 与 Agent 能力，为 LLMs 提供优越上下文层。它支持多模态文档解析、多渠道集成及智能体工作流，具备记忆和代码执行功能，旨在帮助企业高效构建生产级 AI 系统。 |
| 11 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 2.8k | 69 | 该项目包含 Cursor 的官方插件及规范，提供团队工作流、代码审查、安全审计和文档可视化等工具。包含用于创建插件、管理代理兼容性以及构建自动化应用的 SDK。旨在增强 AI 编码助手的功能，支持并行任务编排与高质量代码生成。 |
| 12 | [deepseek-ai/awesome-deepseek-agent](https://github.com/deepseek-ai/awesome-deepseek-agent) | ... | - | 5.7k | 203 | 这是一个关于 DeepSeek 代理的精选资源列表。收录了多种 AI 代理工具，涵盖终端编码助手、跨平台桌面客户端、聊天机器人及通用智能体。项目展示了丰富的 Agent 技术栈与生态应用。 |
| 13 | [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | Graph-Native Infrastructure for Context and Accoun... | Python | 7.5k | 1.2k | Semantica 是一个开源的原生图基础设施，旨在为 AI 系统提供上下文和可问责性。它位于 LLM 和向量存储之下，构建知识图谱并支持确定性推理与因果分析。该平台确保决策的可追溯性和可解释性，专为金融、医疗等高风险受监管领域设计，解决 AI Agent 缺乏审计追踪的问题。 |
| 14 | [rustdesk/rustdesk](https://github.com/rustdesk/rustdesk) | An open-source remote desktop application designed... | Rust | 120.6k | 182 | RustDesk 是一个用 Rust 编写的开源远程桌面应用，旨在替代 TeamViewer。它支持自托管，允许用户完全控制数据，无需配置即可开箱即用。用户可以选择使用官方服务器或搭建自己的中继/协调服务器，确保数据安全与隐私。 |
| 15 | [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | The open-source CapCut alternative... | TypeScript | 83.1k | 238 | OpenCut 是一款开源的视频编辑器，支持 Web、桌面及移动端。项目正在重写，采用 Rust 核心和多平台架构，支持插件系统、MCP 服务器及 Headless 模式，致力于成为 CapCut 的开源替代品。 |
| 16 | [unslothai/unsloth](https://github.com/unslothai/unsloth) | Local UI to run and train LLMs and diffusion model... | Python | 71.5k | 502 | Unsloth 是一款本地桌面应用，旨在运行和训练各类 AI 模型。它支持 LLMs、扩散模型及音频模型，兼容多种硬件。核心优势在于训练速度提升 2 倍且显存占用降低 70%，支持 LoRA、RL、DPO 等多种微调技术。此外，它提供 OpenAI 兼容 API，支持远程访问，方便用户在本地构建和部署私有化 AI 解决方案。 |
| 17 | [ToolJet/ToolJet](https://github.com/ToolJet/ToolJet) | ToolJet is the open-source foundation of ToolJet A... | JavaScript | 39.1k | 302 | ToolJet 是一个开源的低代码平台，用于构建内部工具、工作流和 AI 代理。它提供可视化构建器、60+ 响应式组件、内置数据库及 80+ 数据源。支持 Docker 部署和代码扩展。企业版集成了 AI 功能，如应用生成和智能调试，适合快速开发企业级应用。 |

[查看完整数据](api/github/2026-08-14.json)
<!-- END GITHUB TRENDING -->




