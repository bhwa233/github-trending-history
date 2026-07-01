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

**最后更新**: 2026-06-30 | **成功**: 19 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [hasaneyldrm/exercises-dataset](https://github.com/hasaneyldrm/exercises-dataset) | A comprehensive dataset of 433 fitness exercises. ... | HTML | 6.5k | 1.3k | 这是一个包含1,324个健身动作的结构化数据集，支持英语、西班牙语等6种语言。项目提供开发者设置向导和交互式浏览器，包含数据库架构和API代码模板，旨在帮助开发者快速构建健身应用后端。注意：媒体文件（图片和GIF）未包含在内，仅提供元数据和媒体ID引用。 |
| 2 | [usestrix/strix](https://github.com/usestrix/strix) | Open-source AI penetration testing tool to find an... | Python | 28.1k | 515 | Strix 是一款开源 AI 渗透测试工具，利用自主 AI 黑客代理动态运行代码，发现并验证漏洞。它提供全套渗透测试工具包、多智能体编排及真实 PoC 验证，支持 CI/CD 集成，旨在为开发者和安全团队提供快速、准确的自动化安全测试。 |
| 3 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 120.8k | 1.8k | 这是一个包含多个专业 AI 代理的集合，每个代理都有独特的个性和专业技能（如前端开发、Reddit 社区运营等）。项目提供桌面应用和命令行脚本，方便用户将这些代理一键安装到 Claude Code、Cursor 等开发工具中，提升开发效率。 |
| 4 | [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) | Fastest and only macOS Dictation app with on-devic... | Swift | 4.9k | 588 | FluidVoice 是一款专为 macOS 设计的极速语音转文字应用，支持本地语音识别（STT）和完全离线的 AI 增强模型。它提供零延迟的输入体验，具备智能格式化和上下文感知功能，且完全免费开源，保护用户隐私。 |
| 5 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | Never stop coding. Free AI gateway: one endpoint, ... | TypeScript | 8.5k | 387 | OmniRoute 是一个免费的 AI 网关，通过单一端点连接 231+ 个提供商（含 50+ 免费模型）。它支持 Claude Code、Copilot 等工具接入免费 Claude/GPT/Gemini。内置 RTK+Caveman 压缩技术节省 15-95% Token，并具备智能回退和聚合免费额度功能，旨在帮助开发者低成本使用各类 AI 服务。 |
| 6 | [browser-use/video-use](https://github.com/browser-use/video-use) | Edit videos with coding agents... | Python | 12.6k | 721 | 这是一个基于 Claude Code 的开源视频编辑工具，允许用户通过编程代理自动处理视频。它具备去除填充词、自动调色、音频淡入淡出、字幕生成及动画覆盖等功能，支持 FFmpeg 和 ElevenLabs API，适合需要自动化视频剪辑流程的用户。 |
| 7 | [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | AI 时代的伯克希尔：基于 Claude Code / Codex 的价值投资研究框架。巴菲特·芒格... | Python | 7.5k | 969 | 这是一个基于 Python 的价值投资研究框架，利用 Claude Code 和 Codex 模拟巴菲特、芒格、段永平、李录四位大师的投资逻辑。它通过多 Agent 并行对抗分析、强制输出结论、结构化反偏见机制以及金融数据精确校验，帮助用户进行深度投研。项目宣称实盘收益显著跑赢指数。 |
| 8 | [Mebus/cupp](https://github.com/Mebus/cupp) | Common User Passwords Profiler (CUPP)... | Python | 6.1k | 32 | CUPP (Common User Passwords Profiler) 是一款基于 Python 的密码分析工具，旨在帮助用户创建自定义字典。它通过交互式问答或解析现有词表，针对生日、昵称等个人信息生成弱密码列表，常用于法律渗透测试和取证调查。 |
| 9 | [ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev) | A list of SaaS, PaaS and IaaS offerings that have ... | HTML | 127.3k | 742 | 这是一个由社区维护的免费开发者服务列表，涵盖 SaaS、PaaS 和 IaaS。项目专注于基础设施开发者的需求，筛选出提供长期免费层级（非试用）且具备基本安全性的服务。内容分类详细，包括云服务、CI/CD、监控、DNS 等，帮助开发者快速找到适合的工具。 |
| 10 | [google/agents-cli](https://github.com/google/agents-cli) | The CLI and skills that turn any coding assistant ... | Python | 4.2k | 445 | 这是一个 Google Cloud 官方的 CLI 和技能包，旨在将任何编码助手（如 Claude、Codex）转变为构建、评估和部署企业级 AI 代理的专家。它提供了从项目脚手架、模型选择、代码编排到部署上线的全流程支持，帮助开发者简化 Google Cloud Agent Platform 的使用。 |
| 11 | [roboflow/supervision](https://github.com/roboflow/supervision) | We write your reusable computer vision tools. 💜... | Python | 45.9k | 309 | Roboflow Supervision 是一个 Python 计算机视觉工具包，旨在提供可复用的构建模块。它支持模型无关的架构，能够轻松集成 Ultralytics、Transformers 等主流库。项目提供丰富的标注器和可视化工具，帮助开发者从数据加载到实时区域计数，专注于应用层的开发。 |
| 12 | [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | agent multiplexer that lives in your terminal.... | Rust | 9.0k | 486 | Herdr 是一个用 Rust 编写的终端 Agent 多路复用器，旨在在一个窗口中管理和可视化多个 AI 编码 Agent。它提供真实的终端视图、状态指示（阻塞/工作/完成）以及类似 tmux 的窗格管理。支持 SSH、持久会话和脚本化 API，专为开发者优化。 |
| 13 | [simplex-chat/simplex-chat](https://github.com/simplex-chat/simplex-chat) | SimpleX - the first messaging network operating wi... | Haskell | 17.3k | 1.2k | SimpleX Chat 是一款基于 Haskell 开发的隐私优先通讯应用。它采用无用户标识符的设计，提供 100% 的端到端加密，保护消息内容和元数据。支持 iOS、Android 以及桌面端（Linux、macOS、Windows）的终端应用，旨在实现完全私密的即时通讯体验。 |
| 14 | [CoreBunch/Instatic](https://github.com/CoreBunch/Instatic) | Instatic is a modern self-hosted visual CMS - get ... | TypeScript | 1.5k | 351 | Instatic 是一个基于 Bun 服务器的现代自托管可视化 CMS。它集成了编辑器、内容引擎和发布功能，支持 SQLite 或 Postgres 数据库。其核心优势在于生成的页面是纯净的语义 HTML 和 CSS，无框架运行时，加载速度快。支持一键部署，适合快速搭建个人博客、作品集或小型商业网站。 |
| 15 | [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | 12 Weeks, 24 Lessons, AI for All!... | Jupyter Notebook | 49.3k | 252 | 这是一个由微软提供的面向初学者的 12 周 AI 入门课程，包含 24 节课。课程涵盖 AI 基础、机器学习、深度学习等内容，使用 Jupyter Notebook 进行实践。课程支持多语言翻译，包含测验和实验，旨在帮助初学者探索 AI 世界并掌握 TensorFlow 和 PyTorch 等工具。 |
| 16 | [facebook/astryx](https://github.com/facebook/astryx) | An open source design system that's fully customiz... | TypeScript | 1.7k | 364 | Meta 内部开源设计系统，基于 React 和 StyleX。提供 150+ 可访问组件及暗黑模式。核心优势在于“面向代理”，支持无构建插件集成，允许通过 CSS 变量自定义主题，且不锁定样式，方便人类和 AI 助手协作开发。 |
| 17 | [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | "Vibe-Trading: Your Personal Trading Agent"... | Python | 15.8k | 721 | Vibe-Trading 是一个基于 Python 的个人交易代理，旨在通过一条命令赋予代理全面的交易能力。它支持多种消息适配器（如 Telegram、Discord 等）进行 IM 交互，提供 CLI、REST API 和 Web UI 管理界面。项目集成了安全机制（如预交易咨询接口）和多个经纪商连接器（如 Trading 212），支持只读账户查看，旨在为用户提供安全、智能的自动化交易体验。 |
| 18 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 242.5k | 890 | Superpowers 是一个面向 AI 编码代理的软件开发方法论框架。它通过一套可组合的技能，引导代理从需求分析、规范拆解到自主子代理开发的全流程。强调 TDD、YAGNI 和 DRY 原则，旨在让 AI 代理具备自主编写高质量代码的能力。 |
| 19 | [Robbyant/lingbot-map](https://github.com/Robbyant/lingbot-map) | A feed-forward 3D foundation model for reconstruct... | Python | 8.9k | 189 | LingBot-Map 是一个用于流式 3D 重建的前馈 3D 基础模型。它通过几何上下文 Transformer 统一了坐标锚定、几何线索和漂移校正。该模型支持高效推理（约 20 FPS）和长序列处理（超 10,000 帧），在 KITTI 和 Oxford Spires 等基准测试中表现优于现有方法。 |

[查看完整数据](api/github/2026-06-30.json)
<!-- END GITHUB TRENDING -->




