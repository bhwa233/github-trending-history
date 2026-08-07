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

**最后更新**: 2026-08-06 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TencentDB Agent Memory is a team-level memory hub ... | TypeScript | 16.4k | 1.1k | 这是一个团队级的 AI Agent 内存中心，旨在减少重复工作。它将对话、文档和代码转化为四种可复用资产（聊天记忆、技能、LLM-Wiki、代码图），支持跨代理共享与治理，帮助团队积累经验，实现工作流的高效复用与稳定产出。 |
| 2 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 83.0k | 593 | 该项目为 AI 编码代理提供生产级工程技能，包含 8 个覆盖开发全生命周期的斜杠命令。通过标准化工作流、质量门控和最佳实践，帮助 AI 代理遵循资深工程师标准，提升代码质量与开发效率，支持 Claude Code、Cursor 等主流工具。 |
| 3 | [cloudflare/computer](https://github.com/cloudflare/computer) | Give your agent a computer 👾... | TypeScript | 4.8k | 2.8k | Cloudflare Computer 是一个运行在 Durable Object 中的虚拟文件系统，使用 SQLite 存储状态。它提供可插拔的执行表面，支持三种后端：Container（完整 Linux 环境）、Isolate shell 和 Isolate JavaScript。它旨在为代理或工作区提供计算能力，目前处于预览阶段，适合实验和原型开发。 |
| 4 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 207.1k | 1.9k | 这是一个面向真实工程师的 AI 代理技能集，旨在提供实用的工程实践而非“氛围编码”。它包含一系列小巧、可组合的 Shell 脚本，支持 Claude Code 和其他 AI 代理。用户可以选择托管安装或本地可编辑安装，通过运行特定命令来配置项目，帮助开发者提升工程效率。 |
| 5 | [goauthentik/authentik](https://github.com/goauthentik/authentik) | The authentication glue you need.... | Python | 23.1k | 138 | authentik 是一个开源的身份提供商，旨在为现代 SSO 提供支持。它支持 SAML、OAuth2/OIDC、LDAP、RADIUS 等多种协议，适合从个人实验室到大型生产集群的自托管部署。它可以帮助企业安全地替换现有的身份提供商，如 Okta 或 Auth0，提供强大的身份管理功能。 |
| 6 | [huangruiteng/loopx](https://github.com/huangruiteng/loopx) | Lightweight loop engineering state kernel for long... | Python | 2.9k | 847 | LoopX 是一个用于长期 AI Agent 工作的轻量级状态内核和本地控制平面。它独立于具体的 Agent 运行时（如 Codex、Claude Code），通过持久化管理目标、门控、待办事项和证据，实现多日任务的复盘、重启和交接。它将 Agent 工作流比作看板，确保长期工作的可管理性和可持续性。 |
| 7 | [google/guava](https://github.com/google/guava) | Google core libraries for Java... | Java | 51.6k | 13 | Guava 是 Google 的核心 Java 库，包含新集合类型（如 Multimap）、不可变集合、图库及并发、I/O 等实用工具。支持 JDK 1.8+ 和 Android 两个版本，通过 Maven 和 Gradle 引入，是 Java 开发中广泛使用的工具集。 |
| 8 | [TapXWorld/ChinaTextbook](https://github.com/TapXWorld/ChinaTextbook) | 所有小初高、大学PDF教材。... | Roff | 77.1k | 134 | 该项目汇集了中国小学至大学数学教材的PDF资源，旨在促进义务教育普及并帮助海外华人。针对GitHub文件大小限制，项目提供了合并工具以处理被拆分的PDF文件，并提供多种下载方式及社区支持。 |
| 9 | [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | AutoGPT is the vision of accessible AI for everyon... | Python | 186.0k | 37 | AutoGPT 是一个开源的 AI 代理平台，允许用户通过自然语言描述目标，自动构建并执行复杂工作流。它提供托管服务和自托管选项，支持多种 AI 模型，旨在帮助用户自动化任务，提升效率。 |
| 10 | [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | Local-first code intelligence graph for MCP and CL... | Python | 29.0k | 237 | 这是一个本地优先的代码智能图项目，利用 Python 和 Tree-sitter 构建代码库结构。它通过 MCP 协议为 AI 编码工具提供精确上下文，显著减少 token 消耗。支持多种平台，通过增量跟踪确保 AI 仅读取相关代码，提升代码审查和大仓库工作流的效率。 |
| 11 | [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | DeepSeek-native AI coding agent for your terminal.... | Go | 32.4k | 888 | 这是一个基于 Go 语言开发的 DeepSeek 原生 AI 编码代理，专为终端设计。它是一个单静态二进制文件，通过配置和插件驱动，专注于 DeepSeek 的前缀缓存稳定性以降低 Token 成本。支持多模型、MCP 插件和扩展协议，提供零摩擦的跨平台分发体验。 |
| 12 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 268.1k | 858 | Superpowers 是一个面向 AI 编码代理的技能框架与软件开发方法论。它通过引导用户定义需求、分解设计并生成实施计划，辅助代理自主完成软件开发。支持多种主流 AI 工具，强调 TDD、YAGNI 和 DRY 原则，实现代理的自主工作流。 |
| 13 | [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Fast Rust library for PDF inspection, classificati... | Rust | 12.5k | 1.2k | 这是一个用 Rust 编写的快速 PDF 检查库。它能智能检测 PDF 类型（文本/扫描/混合），提取位置感知文本并转换为 Markdown。支持多列布局、表格检测及 CID 字体解码，无需 OCR 即可处理大多数 PDF，性能极快（<200ms）。支持 Python、Node.js 及 WebAssembly。 |

[查看完整数据](api/github/2026-08-06.json)
<!-- END GITHUB TRENDING -->




