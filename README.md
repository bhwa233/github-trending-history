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

**最后更新**: 2026-06-01 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 138.3k | 3.0k | 微软开源的轻量级 Python 工具，用于将 PDF、Office 文档、图片、音频等多种格式转换为 Markdown。它专注于保留文档结构（标题、列表、表格等），专为 LLM 和文本分析管道设计，输出高效且结构化。 |
| 2 | [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | Hermes WebUI: The best way to use Hermes Agent fro... | Python | 11.3k | 945 | 这是一个为 Hermes Agent 提供的轻量级 Web 界面，支持通过浏览器或手机访问。它实现了与 CLI 完全一致的功能体验，采用 Python 和原生 JS 开发，无需构建步骤。用户可通过 SSH 隧道安全访问，无需额外配置，直接使用现有的代理和模型。 |
| 3 | [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | Memory engine and app that is extremely fast, scal... | TypeScript | 24.0k | 647 | Supermemory 是一个高性能的 AI 记忆引擎，旨在解决 AI 在对话间遗忘信息的问题。它支持从对话中提取事实、构建用户画像、混合搜索以及多模态数据（文档、代码、图片）处理。提供连接器自动同步外部数据，并支持通过 API 快速集成到 AI 产品中，充当 AI 的“大脑”。 |
| 4 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用AI大模型，一键生成高清短视频 Generate short videos with one c... | Python | 76.8k | 3.4k | 这是一个基于 Python 的 AI 视频生成工具，采用 MVC 架构。支持一键生成包含文案、素材、字幕和音乐的短视频，兼容竖屏与横屏。集成了多种主流大模型和语音合成技术，支持批量生成与自定义配置。提供 Web 界面与 API 接口，旨在实现全自动、高质量的视频内容生产。 |
| 5 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 🕷️ An adaptive Web Scraping framework that handle... | Python | 58.0k | 1.5k | Scrapling 是一个高性能的 Python 网络抓取框架，支持从单次请求到大规模爬取。其核心优势在于自适应解析，能自动适应网站结构变化；内置 StealthyFetcher 等工具可绕过 Cloudflare Turnstile 等反爬虫系统；Spider 模块支持并发、多会话及代理轮换，操作简便且功能强大。 |
| 6 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | JavaScript | 32.7k | 485 | 这是一个为 AI 设计助手提供标准化设计语言的 JavaScript 项目。它包含 7 个领域参考文件、23 个设计命令及反模式规则，旨在防止 AI 生成重复或糟糕的 UI。通过 CLI 和浏览器扩展，帮助开发者构建一致、高质量的前端界面。 |
| 7 | [p-e-w/heretic](https://github.com/p-e-w/heretic) | Fully automatic censorship removal for language mo... | Python | 23.0k | 249 | Heretic 是一个 Python 工具，用于自动移除语言模型的审查（安全对齐）。它结合了方向消融技术和 TPE 优化器，通过最小化拒绝率和 KL 散度来寻找最佳参数。该方法无需人工干预，能在保持模型原有智能的同时，有效降低有害提示的拒绝率，支持多种模型架构。 |
| 8 | [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | Official Compound Engineering plugin for Claude Co... | TypeScript | 19.1k | 417 | 这是一个为 Claude Code、Codex 和 Cursor 提供的官方 Compound Engineering 插件。它旨在通过 AI 技能和代理提高工程效率，遵循“80% 计划与审查，20% 执行”的哲学。核心功能包括策略制定、头脑风暴、代码审查及知识积累，旨在减少技术债务，让后续开发工作更轻松。 |
| 9 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 81.7k | 299 | TradingAgents 是一个基于多智能体 LLM 的金融交易框架，模拟真实交易公司运作。它集成了基本面、情感和技术分析师等角色，协同评估市场并决策。支持多模型（GPT-5.x, Claude 等）和 LangGraph，提供回测与风险管理功能，旨在构建影响深远的交易项目。 |
| 10 | [revfactory/harness](https://github.com/revfactory/harness) | A meta-skill that designs domain-specific agent te... | HTML | 5.1k | 524 | Harness 是 Claude Code 的团队架构工厂，利用 6 种预定义模式（如流水线、专家池等）将项目描述自动转化为专业的代理团队定义和技能文件。它位于 L3 元工厂层，帮助用户高效构建复杂的代理协作系统。 |
| 11 | [godotengine/godot](https://github.com/godotengine/godot) | Godot Engine – Multi-platform 2D and 3D game engin... | C++ | 111.6k | 77 | Godot Engine 是一个免费开源的跨平台 2D 和 3D 游戏引擎，采用 C++ 编写。它提供统一接口和丰富工具，支持一键导出至桌面、移动、Web 及主机平台。项目遵循 MIT 许可证，由社区驱动，允许用户自由使用和贡献。 |
| 12 | [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | ⌥ AI Coding agent for the terminal — hash-anchored... | TypeScript | 9.5k | 335 | 这是一个基于终端的 AI 编码代理，fork 自 Pi 项目。它集成了 40+ 提供商、32 个内置工具及 27k 行 Rust 核心。支持 LSP 和 DAP，通过哈希锚定编辑技术大幅提升代码修改成功率，旨在提供最强大的终端编码界面。 |
| 13 | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | VoxCPM2: Tokenizer-Free TTS for Multilingual Speec... | Python | 24.2k | 888 | VoxCPM2 是一个基于 Python 的 tokenizer-free 文本转语音系统，支持 30 种语言。它具备语音设计、可控克隆及终极克隆功能，能生成 48kHz 高质量音频。支持实时流式传输，基于 MiniCPM-4 骨干网络，完全开源。 |
| 14 | [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | A straightforward method for training your LLM, fr... | Jupyter Notebook | 3.7k | 861 | 本项目基于 PyTorch 从零实现 Transformer 架构，提供从数据准备（Pile 数据集）到模型训练及文本生成的完整教程。代码详细讲解了注意力机制、MLP 和 Transformer Block 等核心组件，适合深度学习初学者学习原理并尝试训练自己的语言模型。 |
| 15 | [stefan-jansen/machine-learning-for-trading](https://github.com/stefan-jansen/machine-learning-for-trading) | Code for Machine Learning for Algorithmic Trading,... | Jupyter Notebook | 17.8k | 93 | 本项目是《机器学习用于算法交易》第2版的配套代码库，包含150多个Jupyter Notebook。它展示了如何利用线性回归到深度强化学习等多种ML技术，处理市场与文本数据，构建、回测并评估交易策略，是学习金融量化与机器学习结合的实战指南。 |
| 16 | [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff) | The fastest and the most accurate file search tool... | Rust | 7.2k | 135 | 这是一个用 Rust 编写的极速文件搜索工具，专为 AI 代理和开发者设计。它提供抗拼写错误的路径/内容搜索、频率记忆和 Git 感知功能。通过 MCP 服务器，它能让 Claude Code、Cursor 等工具获得比内置搜索更快、更节省 token 的文件检索能力。 |
| 17 | [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Master programming by recreating your favorite tec... | Markdown | 510.4k | 1.2k | 这是一个通过从零开始重新创建流行技术来学习编程的指南集合。项目涵盖了操作系统、Web 浏览器、AI 模型、区块链等广泛领域，提供分步教程，帮助开发者深入理解底层原理。 |

[查看完整数据](api/github/2026-06-01.json)
<!-- END GITHUB TRENDING -->




