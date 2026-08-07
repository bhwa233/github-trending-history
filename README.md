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

**最后更新**: 2026-08-07 | **成功**: 15 | **失败**: 2

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | A self-improving RLM agent for coding workflows an... | TypeScript | 6.4k | 2.3k | Prime Agent 是一个开源的编码与研究代理，专注于长期自主任务。它基于递归语言模型（RLM）和持续 Harness 架构，将上下文视为变量，工具视为函数调用。支持持久化 REPL、后台运行、子代理并行工作以及通过证据驱动的更新进行自我改进。所有操作均通过代码实现，适合构建复杂的自动化工作流。 |
| 2 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 83.9k | 1.1k | 该项目为 AI 编码代理提供生产级工程技能，通过 8 个斜杠命令（如 /spec, /build, /test）封装了从需求定义到生产发布的完整开发流程。它确保 AI 代理遵循最佳实践，自动激活特定领域的工程能力，支持 Claude Code、Cursor 等主流 AI 编辑器，旨在提升 AI 编码的质量和一致性。 |
| 3 | [cloudflare/computer](https://github.com/cloudflare/computer) | Give your agent a computer 👾... | TypeScript | 5.7k | 894 | Cloudflare Computer 是一个运行在 Durable Object 内的虚拟文件系统，使用 SQLite 存储权威状态。它提供三种后端：容器（真实 Linux 环境）、Isolate shell（bash）和 Isolate JavaScript（ES 模块）。通过 `workspace.runtime.exec` 提供可插拔的执行表面，目前处于预览阶段，适合实验和原型开发。 |
| 4 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 208.8k | 2.2k | 这是一个为真实工程师设计的 AI 技能集合，旨在帮助开发者构建真正的应用程序，而非仅仅依赖 AI 工具。它包含一系列小型、可组合且易于适应的 Shell 脚本技能，支持 Claude Code 和其他编码代理。用户可以选择安装方式，既可以是订阅的只读插件，也可以是可编辑的本地文件，以便根据个人需求进行修改和定制。 |
| 5 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 268.7k | 794 | Superpowers 是一个面向 AI 编码代理的软件开发方法论框架。它通过一套可组合的技能，在开发初期引导用户明确需求，生成可读的设计规范和实施计划。随后，它启动子代理驱动的开发流程，支持 TDD、YAGNI 和 DRY 原则，使 AI 能够自主执行代码编写、审查和测试，显著提升开发效率。 |
| 6 | [goauthentik/authentik](https://github.com/goauthentik/authentik) | The authentication glue you need.... | Python | 23.6k | 544 | authentik 是一个开源的身份提供商，支持 SAML、OAuth2/OIDC、LDAP 和 RADIUS 等协议。它专为现代 SSO 设计，支持从小型实验室到大型生产集群的自托管。它旨在作为企业级身份管理的强大替代方案，可替换 Okta 等现有 IdP。 |
| 7 | [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | Graph-Native Infrastructure for Context and Accoun... | Python | 2.3k | 118 | Semantica 是一个开源的原生图基础设施，旨在为 AI 系统提供可问责的上下文与决策可追溯性。它允许企业数据构建知识图谱，进行因果推理，支持 RDF 和 LPG，无需 LLM 即可运行，确保可审计性和可解释性，适用于金融、医疗等高风险监管领域。 |
| 8 | [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | A Simple and Universal Swarm Intelligence Engine, ... | Python | 70.5k | 126 | MiroFish 是一个基于多智能体技术的下一代 AI 预测引擎。它通过提取现实世界的种子信息，构建高保真的平行数字世界，让数千个智能体在其中互动演化。用户可从上帝视角注入变量，模拟未来趋势，适用于宏观决策测试和微观创意沙盒，旨在实现“预测万物”。 |
| 9 | [chenyme/grok2api](https://github.com/chenyme/grok2api) | Multi-account API gateway for Grok Build, Grok Web... | Go | 7.1k | 62 | 这是一个基于 Go 语言开发的 Grok 多账户 API 网关，旨在为 Grok Build、Web 和 Console 提供统一接口。项目主要用于技术研究和学习，支持多账号管理。 |
| 10 | [jdx/mise](https://github.com/jdx/mise) | dev tools, env vars, task runner... | Rust | 32.1k | 130 | mise 是一个用 Rust 编写的开发环境管理工具。它通过 mise.toml 统一管理项目工具版本、环境变量和自定义任务，确保不同 shell、代码检出和 CI 环境的一致性。 |
| 11 | [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | AutoGPT is the vision of accessible AI for everyon... | Python | 186.3k | 363 | 处理失败 |
| 12 | [google/guava](https://github.com/google/guava) | Google core libraries for Java... | Java | 51.8k | 156 | Guava 是 Google 为 Java 提供的核心库集合。它包含新的集合类型（如 Multimap 和 Multiset）、不可变集合、图库，以及用于并发、I/O、哈希、原语和字符串的工具。它支持 JDK 1.8+ 和 Android，是 Google 内部和许多其他公司广泛使用的标准库。 |
| 13 | [unclebob/swarm-forge](https://github.com/unclebob/swarm-forge) | A simple tool for coordinating several AI agents.... | Clojure | 1.8k | 85 | SwarmForge 是一个基于 tmux 的 AI 代理编排平台，使用 Clojure 构建。它通过 git 工作树和 tmux 会话协调多个 AI 代理协作开发软件，支持不同工作流分支（如 two-pack 和 four-pack），旨在将 AI 代理群转变为可靠的软件工程师。 |
| 14 | [denoland/celld](https://github.com/denoland/celld) | self-hosted, distributed Durable Objects... | Rust | 2.2k | 546 | celld 是一个用 Rust 编写的自托管分布式 Durable Objects 守护进程。它允许在本地机器上运行 Cloudflare Workers 和 Durable Objects。每个对象都是一个独立的 SQLite 数据库，存储在用户拥有的 S3 兼容桶中。节点通过 S3 协调，无需控制平面或共识。这种设计天然实现了分片，消除了共享数据库的争用和故障影响，且空闲时资源占用极低。 |
| 15 | [K2SOsint/Legendary_OSINT](https://github.com/K2SOsint/Legendary_OSINT) | A list of OSINT tools & resources for (fraud-)inve... | - | 1.4k | 64 | 处理失败 |
| 16 | [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | Why is this running? Trace any process, port, cont... | Go | 19.7k | 308 | Witr 是一个用 Go 编写的命令行工具，旨在回答“为什么这个在运行？”。它通过追踪进程、端口、容器或文件，揭示其背后的启动链。支持 CLI、JSON 和 TUI 模式，帮助用户直观理解系统服务的因果关系。 |
| 17 | [google/skills](https://github.com/google/skills) | Agent Skills for Google products and technologies... | Python | 16.2k | 305 | 该项目为 Google 产品和技术提供 Agent Skills，包含 Google Cloud 等产品的插件。它处于活跃开发中，捆绑了 Skills 和 MCP 服务器，支持通过 npx 安装，遵循 Apache 2.0 许可证。 |

[查看完整数据](api/github/2026-08-07.json)
<!-- END GITHUB TRENDING -->




