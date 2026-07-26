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

**最后更新**: 2026-07-25 | **成功**: 18 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [block/buzz](https://github.com/block/buzz) | A hive mind communication platform... | Rust | 11.9k | 2.5k | Buzz 是一个基于 Rust 的自托管工作区，允许人类和 AI 代理在共享的 Nostr 中继房间中协作。它将所有活动（包括代码审查、Git 事件和工作流）记录为经过签名的日志事件。代理拥有独立的身份和权限，可以执行如打开仓库、发送补丁和审查代码等操作，提供类似人类队友的协作体验。 |
| 2 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Open-source & free — Battle-tested at Alibaba's sc... | Go | 12.9k | 431 | 这是阿里巴巴开源的 AI 代码审查 CLI 工具，基于 Go 开发。采用混合架构（确定性管道 + LLM Agent），提供精确的逐行代码审查，内置针对 NPE、线程安全等漏洞的微调规则集。相比通用 Agent，它在相同模型下精度更高、Token 消耗更低（约 1/9），适合企业级代码质量保障。 |
| 3 | [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | The fastest browser for AI agents to run web autom... | JavaScript | 3.6k | 986 | ego-lite 是一个专为 AI 代理设计的浏览器，旨在与人类用户并行工作。它允许 AI 代理在独立空间运行自动化任务，无需干扰用户的标签页。通过零配置和共享登录状态，它实现了无缝协作，让 Codex 或 Claude Code 等代理能够高效执行网页操作。 |
| 4 | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | A curated list of awesome Claude Skills, resources... | Python | 70.6k | 577 | 这是一个精选的 1000+ 生产就绪的 Claude Skills 和 Plugins 列表，旨在增强跨 Claude.ai、Claude Code 及各类编码代理（如 Cursor、Codex）的生产力。项目集成了 Composio MCP Gateway，允许 Claude 执行真实操作（如发送邮件、创建问题），并提供文档处理、开发工具、数据分析等分类资源。 |
| 5 | [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | A collection of notebooks/recipes showcasing some ... | Jupyter Notebook | 49.9k | 132 | 这是一个展示如何使用 Claude 的 Jupyter Notebook 集合。它提供了分类、RAG、总结等能力的代码示例，涵盖工具使用、第三方集成和多模态视觉。开发者可以通过这些可复制的代码片段快速构建应用。 |
| 6 | [Automattic/harper](https://github.com/Automattic/harper) | Offline, privacy-first grammar checker. Fast, open... | Rust | 13.4k | 503 | Harper 是一个用 Rust 编写的开源英语语法检查器。它专注于离线使用和隐私保护，速度极快且内存占用极低（比 LanguageTool 小得多）。目前仅支持英语，但核心架构可扩展，适合追求高效、安全写作体验的用户。 |
| 7 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 33.8k | 319 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融数据的高噪声特性设计。它采用独特的两阶段框架，将 OHLCV 数据量化为离散标记，并通过自回归 Transformer 进行预训练。该模型支持多种量化任务，已在 AAAI 2026 录用，提供 mini、small、base 等不同规模的预训练模型。 |
| 8 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 261.1k | 479 | Superpowers 是一个面向 AI 编码代理的软件开发方法论框架。它通过提供可组合的技能和初始指令，使代理能够自主工作。流程包括询问用户目标、分解规范、制定实现计划（强调 TDD/YAGNI/DRY）以及执行子代理驱动的开发。它支持多种主流 AI 编码工具，旨在让代理在没有人工干预的情况下进行自主开发。 |
| 9 | [Pumpkin-MC/Pumpkin](https://github.com/Pumpkin-MC/Pumpkin) | Empowering everyone to host fast and efficient Min... | Rust | 9.7k | 358 | Pumpkin 是一个使用 Rust 编写的 Minecraft 服务器，旨在提供高性能、低延迟且高度可定制的游戏体验。它支持 Java 和 Bedrock 版本，具备多线程优化、安全防护及插件开发支持。项目涵盖了世界管理、实体AI、玩家交互及代理功能等核心模块，目前处于开发阶段。 |
| 10 | [permissionlesstech/bitchat](https://github.com/permissionlesstech/bitchat) | bluetooth mesh chat, IRC vibes... | Swift | 28.7k | 1.7k | BitChat 是一款去中心化的点对点消息应用，采用蓝牙 Mesh 和 Nostr 协议的双传输架构。它支持本地离线通信和全球互联网连接，无需账户或服务器。具备位置频道、端到端加密及 IRC 风格命令，强调隐私与抗审查能力。 |
| 11 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 188.2k | 1.7k | 这是一个专为 AI 编码代理设计的实用技能集合，旨在帮助开发者进行真实的工程实践而非“氛围编码”。它包含了一系列可组合的小型脚本和工作流，支持通过 Shell 命令或 Claude Code 插件安装。项目提供了一套标准化的开发流程，包括问题跟踪、标签管理和文档生成，旨在赋予开发者对开发过程的控制权。 |
| 12 | [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | macOS video editor built for AI... | Swift | 12.2k | 412 | Palmier Pro 是一款基于 Swift 的 macOS 原生视频编辑器，主打 AI 驱动的工作流。它支持与 Claude、Codex 等代理协作，利用 SOTA 模型在时间轴上生成和编辑视频。项目开源了编辑器和 MCP 服务器，基础功能免费，生成式 AI 功能需订阅。 |
| 13 | [CoreBunch/Instatic](https://github.com/CoreBunch/Instatic) | The open-source alternative to Webflow, Framer and... | TypeScript | 5.1k | 426 | Instatic 是一个自托管的视觉 CMS，旨在替代 Webflow 和 WordPress。它使用 Bun 运行时和 TypeScript 构建，将编辑器、内容引擎和发布器集成在单个服务器中。它输出干净的静态 HTML 和 CSS，没有框架开销。支持 SQLite 和 Postgres，提供一键部署。 |
| 14 | [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) | 《动手学大模型Dive into LLMs》系列编程实践教程... | Jupyter Notebook | 45.3k | 408 | 这是一个由上海交通大学开发的公益大模型编程实践教程，基于 Jupyter Notebook。内容涵盖微调、提示学习、知识编辑、数学推理、隐写术、多模态、智能体安全等多个前沿主题。近期新增了与华为昇腾合作的国产化全流程开发课程，包含PPT、手册和视频，旨在帮助初学者快速入门大模型开发与学术研究。 |
| 15 | [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | A vector index built on TurboQuant, written in Rus... | Python | 14.3k | 86 | turbovec 是一个基于 Rust 和 TurboQuant 算法的向量索引库，提供 Python 绑定。它利用 SIMD 优化实现极高的压缩率（10M 文档仅需 4GB），支持在线增量索引和搜索时过滤。相比 FAISS，它在 ARM 和 x86 上均表现优异，特别适合对内存占用敏感或需要完全本地化部署的 RAG 应用场景。 |
| 16 | [OtterMind/Chat2DB](https://github.com/OtterMind/Chat2DB) | 🔥🔥🔥 AI-driven database tool and SQL client, The... | Java | 26.7k | 360 | Chat2DB 是一款跨平台的 AI 驱动数据库工具，支持 30+ 种主流数据库。它集成了强大的 SQL 工作区和本地 AI 助手，支持自然语言生成 SQL、数据管理、图表展示及导入导出，适合开发者和数据团队使用。 |
| 17 | [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | Simple, unified interface to multiple Generative A... | Python | 15.2k | 77 | aisuite 是一个轻量级 Python 库，提供统一的 Chat Completions API，支持 OpenAI、Anthropic、Google 等多个大模型提供商。它还包含 Agents API，允许构建具有工具和工具包的智能体，是桌面 AI 同事 OpenWorker 的核心引擎。 |
| 18 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 233.3k | 377 | ECC 是一个跨 AI 代理框架（如 Cursor、Claude Code 等）的性能优化系统。它提供了一套完整的工具，包括技能、直觉、记忆优化、安全扫描和持续学习功能，旨在提升 AI 编码代理的工作效率和生产力，支持多语言生态系统。 |

[查看完整数据](api/github/2026-07-25.json)
<!-- END GITHUB TRENDING -->




