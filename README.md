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

**最后更新**: 2026-05-25 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) | Graphs that teach > graphs that impress. Turn any ... | TypeScript | 31.0k | 5.6k | 这是一个 TypeScript 开发的 Claude Code 插件，旨在将代码库、知识库或文档转化为交互式知识图谱。它通过多智能体管道分析项目结构，构建包含文件、函数、类和依赖关系的可视化图谱。用户可以通过交互式仪表板进行探索、搜索和提问，帮助开发者快速理解复杂的代码库和业务逻辑，实现从“盲目阅读代码”到“直观理解全貌”的转变。 |
| 2 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intend... | Python | 15.4k | 1.4k | 这是一个为 Claude Cowork 和 Claude Code 设计的开源插件库，旨在将 Claude 转变为特定角色（如销售、产品管理等）的专家。它提供了预构建的插件，包含技能、连接器和斜杠命令，帮助知识工作者自动化任务、管理数据流并提高团队协作效率。用户还可以根据公司特定工具和流程进行自定义。 |
| 3 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 18.5k | 3.2k | 这是一个全栈AI工程实战课程，包含435课和20个阶段，涵盖Python、TypeScript、Rust、Julia四种语言。课程从数学基础出发，逐步构建算法与代理，强调从零开始开发并产出可复用工件，旨在培养具备底层原理理解与工程落地能力的AI工程师。 |
| 4 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 192.3k | 2.0k | ECC 是一个跨多个 AI 代理工具（如 Claude、Cursor）的性能优化系统。它提供技能、直觉、记忆持久化、安全扫描和持续学习功能，旨在提升代理的开发效率和代码质量。作为 Anthropic Hackathon 获奖项目，它支持生产环境部署，包含 Token 优化、并行化和子代理编排等高级特性。 |
| 5 | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 754 structured cybersecurity skills for AI agents ... | Python | 9.2k | 1.0k | 这是一个为 AI 代理提供 754 个结构化网络安全技能的开源库。它遵循 agentskills.io 标准，将技能映射到 MITRE ATT&CK、NIST CSF 2.0、MITRE ATLAS、D3FEND 和 NIST AI RMF 五大框架。旨在帮助 AI 代理像资深分析师一样处理安全调查，支持多种主流 AI 编程助手平台。 |
| 6 | [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | Pre-indexed code knowledge graph for Claude Code, ... | TypeScript | 24.9k | 3.2k | CodeGraph 是一个为 Claude Code、Cursor 等 AI 编程助手提供预索引代码知识图谱的工具。它通过构建符号关系和调用图，让 AI 代理无需扫描文件即可快速查询代码结构，从而降低 Token 消耗和工具调用次数，提升开发效率，且完全本地运行。 |
| 7 | [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | Ghostty-based macOS terminal with vertical tabs an... | Swift | 19.5k | 603 | 这是一个基于 Ghostty 的 macOS 终端应用，专为 AI 编码代理设计。它提供垂直标签页、通知系统及内置浏览器，支持 SSH 远程连接和 Claude Code Teams。应用采用原生 Swift 开发，性能高效，支持脚本化操作。 |
| 8 | [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 154.9k | 2.7k | 该项目是一个基于 Andrej Karpathy 关于 LLM 编码观察的单一 CLAUDE.md 配置文件。它旨在通过四个核心原则（思考前编码、简单优先、外科手术式更改、目标驱动执行）来改善 Claude Code 的行为，解决模型假设错误、代码过度复杂化和破坏性更改等问题。 |
| 9 | [Fincept-Corporation/FinceptTerminal](https://github.com/Fincept-Corporation/FinceptTerminal) | FinceptTerminal is a modern finance application of... | Python | 23.9k | 317 | FinceptTerminal 是一款基于 C++20 和 Qt6 的专业桌面金融终端。它利用嵌入式 Python 进行高级量化分析，集成了 37 个 AI 交易代理、100+ 数据源及实时交易功能。支持多资产分析、算法交易和量化实验室，旨在为用户提供数据驱动的投资决策环境。 |
| 10 | [paperless-ngx/paperless-ngx](https://github.com/paperless-ngx/paperless-ngx) | A community-supported supercharged document manage... | Python | 41.3k | 176 | Paperless-ngx 是一个基于 Python 的社区支持文档管理系统，旨在将物理文档转化为可搜索的在线档案。它支持扫描、索引和归档，提供 Docker 部署方案，并允许从旧版本轻松迁移。项目强调社区协作，适合需要数字化管理大量纸质文件的用户。 |
| 11 | [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | A collection of notebooks/recipes showcasing some ... | Jupyter Notebook | 44.0k | 141 | 这是一个由 Anthropic 提供的 Claude API 使用指南集合，包含 Jupyter Notebook 格式的代码示例。项目涵盖了分类、RAG、总结、工具使用、第三方集成及多模态等核心能力，旨在帮助开发者快速集成 Claude API 构建应用。 |
| 12 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Taste-Skill - gives your AI good taste. stops the ... | Shell | 19.7k | 264 | Taste-Skill 是一个为 AI 代理设计的“反垃圾”前端框架，旨在提升 AI 生成的界面设计质量。它提供可移植的技能包，包含代码和图像生成技能，帮助 AI 构建更美观的布局、排版和动画，避免通用的样板 UI。用户可与图像生成工具配合，生成设计参考图，再由代码编辑器实现代码。 |
| 13 | [moeru-ai/airi](https://github.com/moeru-ai/airi) | 💖🧸 Self hosted, you-owned Grok Companion, a cont... | TypeScript | 39.7k | 62 | 这是一个自托管的 AI 虚拟伴侣项目，灵感来源于 Neuro-sama。它旨在将虚拟角色带入现实，支持实时语音聊天、游戏游玩（如 Minecraft 和 Factorio）以及代码查看。项目基于 TypeScript 开发，支持 Web、macOS 和 Windows 平台，致力于打造一个能与用户互动的赛博生命体。 |
| 14 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 26.0k | 245 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理高噪声金融数据设计。它采用两阶段框架，利用专用分词器量化 OHLCV 数据，并通过自回归 Transformer 进行预训练。项目提供多版本模型，支持 BTC 等交易对的预测，已获 AAAI 2026 接收。 |
| 15 | [Axorax/awesome-free-apps](https://github.com/Axorax/awesome-free-apps) | Curated list of the best free apps for PC and mobi... | JavaScript | 4.5k | 192 | 这是一个精选的免费 PC 和移动端应用列表，按类别（如音频、开发工具、视频等）组织。项目包含各类实用软件的推荐，并标注了操作系统兼容性和开源状态，旨在帮助用户发现优质免费工具。 |
| 16 | [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop) | A skill file for removing AI tells from prose... | - | 4.4k | 345 | 这是一个用于 Claude 和其他 LLM 的技能文件，旨在移除 AI 写作中的“AI 痕迹”。它包含指令、参考短语、结构和示例，帮助 AI 生成更自然、直接且具有人类风格的文本，避免陈词滥调、被动语态和模糊的过渡。 |
| 17 | [garrytan/gstack](https://github.com/garrytan/gstack) | Use Garry Tan's exact Claude Code setup: 23 opinio... | TypeScript | 102.5k | 640 | gstack 是一个基于 TypeScript 的项目，旨在将 Claude Code 转化为一个虚拟工程团队。它包含 23 个观点鲜明的工具，模拟 CEO、设计师、工程经理、发布经理、文档工程师和 QA 的角色。通过这套工具，开发者可以大幅提升个人生产力，实现单人团队的高效交付。 |

[查看完整数据](api/github/2026-05-25.json)
<!-- END GITHUB TRENDING -->




