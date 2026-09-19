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

**最后更新**: 2026-09-18 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | A coding-agent skill for multi-phase security audi... | JavaScript | 13.7k | 3.0k | 这是一个将编码代理转化为安全审计员的技能，用于执行多阶段安全审计。它通过侦察、狩猎、验证等六个阶段，自动生成机器可读的发现结果，并支持独立验证和累加式报告，是 Cloudflare 漏洞发现工具的起点。 |
| 2 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | TypeScript | 146.3k | 444 | Claude Code 是 Anthropic 推出的终端智能编码助手，基于 TypeScript 开发。它能够理解代码库，通过自然语言命令执行常规任务、解释复杂代码及处理 Git 工作流，旨在帮助开发者提升编码效率。 |
| 3 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Secure, fast, efficient, battle-tested at Alibaba'... | Go | 36.7k | 2.7k | OpenCodeReview 是阿里巴巴开源的 AI 代码审查 CLI 工具，采用混合架构（确定性管道+LLM Agent），提供行级精确评论。内置多语言规则集，支持 OpenAI/Anthropic 模型。相比通用 Agent，它在 Precision 和 F1 上表现更优，且 Token 消耗更低，适合大规模团队提升代码质量。 |
| 4 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 262.1k | 958 | ECC 是一个代理运行时性能优化系统，旨在为 Claude Code、Cursor 等 AI 编程助手提供协调的工程系统。它通过“计划-测试-实现-审查-验证-记忆-改进”的闭环工作流，优化上下文窗口，提供记忆持久化、安全防护及丰富的技能库，提升 AI 编程效率与质量。 |
| 5 | [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | Let AI agents use your real, logged-in browser wit... | TypeScript | 5.3k | 1.3k | BrowserSkill 是一款允许 AI 代理（如 Cursor、Claude Code）通过 CLI 和浏览器扩展安全控制已登录浏览器的工具。它支持借用标签页、重用登录状态，确保用户工作不被中断，并内置人机循环处理验证码等任务。支持跨平台及多种 AI 框架，旨在为任何 shell-capable 代理提供无缝的浏览器自动化能力。 |
| 6 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 96.4k | 675 | 该项目为 AI 编码代理提供生产级工程技能，通过 9 个斜杠命令封装了从定义到发布的全流程最佳实践。它支持自动技能激活和自主执行，确保 AI 代理遵循一致的高质量标准，提升开发效率。 |
| 7 | [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | A smarter, self-hosted AI assistant — multi-user, ... | Python | 4.0k | 569 | Octop 是一个自托管的 AI 助手，采用多智能体架构，支持多用户协作。它运行在本地，保护隐私，提供 Web、IM 等多种接入方式，具备专家库、知识库和插件生态，适合团队和个人构建私有化智能环境。 |
| 8 | [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | Spec-driven development (SDD) for AI coding assist... | TypeScript | 69.4k | 296 | OpenSpec 是一个面向 AI 编码助手的规范驱动开发 (SDD) 框架。它支持流畅、迭代的开发流程，利用纯 Markdown 编写规范，从想法提议到任务实施全程由 AI 协助。该框架旨在简化复杂度，适用于从个人项目到企业级应用的各种场景。 |
| 9 | [ankitects/anki](https://github.com/ankitects/anki) | Anki is a smart spaced repetition flashcard progra... | Rust | 31.2k | 174 | Anki 是一款基于间隔重复算法的智能抽认卡学习软件。该项目使用 Rust 重构并维护其计算机版本，旨在帮助用户高效记忆大量信息。它支持自定义卡片内容，并提供开发构建版本和贡献指南，是一个开源的、专注于记忆效率的学习工具。 |
| 10 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intend... | Python | 24.9k | 299 | 这是一个为 Claude Cowork 设计的开源插件仓库，旨在将 Claude 转变为特定角色专家。它包含 11 个预构建插件，涵盖生产力、销售、客户支持等领域。插件集成了各种工具（如 Slack、Jira），允许用户自定义工作流程和斜杠命令，从而提升团队协作效率和一致性。 |
| 11 | [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | Memory and context engine + app that is extremely ... | TypeScript | 30.3k | 140 | Supermemory 是一个高性能的 AI 记忆和上下文引擎，旨在解决 AI 在对话间遗忘信息的问题。它支持本地部署，具备自动提取事实、构建用户画像、混合搜索以及多模态文件处理能力。支持通过插件或 MCP 服务器为各类 AI 工具（如 Cursor、Claude）提供持久化记忆，也适合开发者通过 API 快速集成记忆、RAG 和连接器功能，无需复杂的向量数据库配置。 |
| 12 | [tradesdontlie/tradingview-mcp](https://github.com/tradesdontlie/tradingview-mcp) | AI-assisted TradingView chart analysis — connect C... | JavaScript | 6.5k | 79 | 这是一个通过 Chrome DevTools Protocol 将 Claude Code 连接到本地 TradingView Desktop 的工具。它利用 AI 辅助进行图表分析、Pine Script 开发及工作流自动化。数据完全本地处理，不绕过付费墙，仅支持图表交互。 |
| 13 | [rustfs/rustfs](https://github.com/rustfs/rustfs) | RustFS is an open-source, S3-compatible high-perfo... | Rust | 33.2k | 267 | RustFS 是一个基于 Rust 的高性能分布式对象存储系统，提供广泛的 S3 API 兼容性，支持 OpenStack Swift 协议及 Keystone 认证。它专为数据湖、AI 和大数据工作负载优化，具备高吞吐量和容错能力，且采用 Apache 2.0 开源协议。 |
| 14 | [supabase/supabase](https://github.com/supabase/supabase) | The Postgres development platform. Supabase gives ... | TypeScript | 110.2k | 120 | Supabase 是基于 PostgreSQL 的 Firebase 开源替代品。它提供托管数据库、身份验证、自动生成的 REST/GraphQL API、实时订阅、文件存储、数据库函数以及 AI 向量工具，旨在帮助企业构建 Web、移动和 AI 应用。 |
| 15 | [coder/coder](https://github.com/coder/coder) | Secure environments for developers and their agent... | Go | 15.3k | 478 | Coder 是一个自托管的云开发环境和 AI 编码代理平台。它利用 Terraform 定义工作区，通过 Wireguard® 安全连接，并支持闲置自动关机以降低成本。项目允许在基础设施上运行 AI 代理，无需在本地工作区存储 API 密钥，确保安全合规。 |
| 16 | [ahmedkhaleel2004/gitdiagram](https://github.com/ahmedkhaleel2004/gitdiagram) | Free, simple, fast interactive diagrams for any Gi... | TypeScript | 16.5k | 152 | 这是一个基于 TypeScript 的开源工具，利用 AI 将 GitHub 仓库（支持公开和私有）快速转换为交互式架构图。它专注于系统级结构分析，支持流式生成、源码跳转及 Mermaid 导出，帮助开发者直观理解代码库架构。 |
| 17 | [asciimoo/hister](https://github.com/asciimoo/hister) | Your own search engine... | Go | 5.0k | 889 | Hister 是一个用 Go 编写的私有搜索引擎，专注于本地化运行。它通过浏览器扩展或爬虫索引网页和文件的全文内容，支持 Web、终端及 AI 助手（MCP）搜索。项目强调隐私保护，无需云端服务，并提供语义搜索和多用户支持，适合个人构建本地知识库。 |

[查看完整数据](api/github/2026-09-18.json)
<!-- END GITHUB TRENDING -->




