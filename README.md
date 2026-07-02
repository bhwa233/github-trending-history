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

**最后更新**: 2026-07-01 | **成功**: 20 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 123.3k | 2.1k | 这是一个提供多种专业 AI 代理的集合，旨在提升工作流效率。它包含前端开发、社区管理等不同领域的专家代理，具有独特的个性和流程。用户可以通过桌面应用或命令行脚本将这些代理安装到 Claude Code、Cursor 等开发工具中，实现自动化和专业化协作。 |
| 2 | [usestrix/strix](https://github.com/usestrix/strix) | Open-source AI penetration testing tool to find an... | Python | 29.7k | 1.2k | Strix 是一个开源的 AI 渗透测试工具，利用自主 AI 黑客动态运行代码以发现并验证漏洞。它提供真实的 PoC 而非误报，支持多智能体编排和 CI/CD 集成，能自动生成修复补丁和合规报告，帮助开发团队快速提升应用安全性。 |
| 3 | [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | "Vibe-Trading: Your Personal Trading Agent"... | Python | 16.5k | 694 | Vibe-Trading 是一个基于 Python 的个人交易代理，旨在通过一条命令赋予代理全面的交易能力。它支持 16 种内置消息适配器（如 Telegram, Discord, WhatsApp 等），集成了 Trading 212 等券商的只读连接器，提供预交易咨询、订单管理和审计追踪功能。项目包含 Web UI、CLI 和 SDK，支持安全加固和跨平台运行，适合需要自动化交易和智能投顾的用户。 |
| 4 | [hasaneyldrm/exercises-dataset](https://github.com/hasaneyldrm/exercises-dataset) | A comprehensive dataset of 433 fitness exercises. ... | HTML | 8.4k | 2.5k | 这是一个包含433个健身动作的结构化数据集，支持英语、西班牙语等6种语言。项目包含交互式浏览器和开发者设置向导，提供数据库架构和API代码，旨在帮助开发者快速搭建健身应用后端。注意：媒体文件（图片和GIF）不包含在内，仅提供引用ID。 |
| 5 | [facebook/astryx](https://github.com/facebook/astryx) | An open source design system that's fully customiz... | TypeScript | 2.6k | 708 | Astryx 是由 Meta 开发的开源设计系统，基于 React 和 StyleX 构建。它提供 150+ 可访问组件、暗黑模式和 CLI。其核心优势在于“人机协作”友好，支持无构建插件集成，允许通过 CSS 变量自定义主题，且不锁定样式，可与 Tailwind 等工具混用，适合需要高度定制化和 AI 辅助开发的团队。 |
| 6 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | Never stop coding. Free AI gateway: one endpoint, ... | TypeScript | 9.5k | 1.0k | OmniRoute 是一个免费 AI 网关，通过单一端点聚合 236+ 个提供商（含 50+ 免费）。支持 Claude Code、Copilot 等工具连接免费模型，利用 RTK+Caveman 压缩技术节省 15-95% Token，并提供智能回退和多模态支持。 |
| 7 | [allenai/olmocr](https://github.com/allenai/olmocr) | Toolkit for linearizing PDFs for LLM datasets/trai... | Python | 18.3k | 334 | 这是一个用于将 PDF 和图像文档转换为 Markdown 的 Python 工具包。它支持公式、表格、手写和复杂布局，能自动移除页眉页脚并保持自然阅读顺序。基于 7B 参数 VLM，成本低于 200 美元/百万页，适合构建 LLM 数据集。 |
| 8 | [logto-io/logto](https://github.com/logto-io/logto) | 🧑‍🚀 Authentication and authorization infrastruct... | TypeScript | 13.3k | 113 | Logto 是一个现代化的开源身份认证与授权基础设施，专为 SaaS 和 AI 应用设计。它基于 OIDC 和 OAuth 2.1 构建，提供开箱即用的多租户、企业级 SSO 和 RBAC 支持。项目提供 30+ 框架的 SDK，简化了协议集成，并支持 MCP 和代理架构。 |
| 9 | [togatoga/karukan](https://github.com/togatoga/karukan) | Japanese Input Method System for Linux, macOS, Neu... | Rust | 574 | 42 | 这是一个基于 Rust 的 Linux/macOS 日本语输入法系统。核心采用 llama.cpp 推理 GPT-2 模型实现神经 Kana-Kanji 转换。支持实时转换、上下文感知、用户学习记忆以及 Mozic 风格的候补重写和 Emoji 输入。 |
| 10 | [Mebus/cupp](https://github.com/Mebus/cupp) | Common User Passwords Profiler (CUPP)... | Python | 6.2k | 184 | CUPP 是一个用于生成自定义密码字典的 Python 工具。它通过交互式问答或分析现有字典，帮助用户创建针对特定目标的弱密码猜测列表。主要用于合法的渗透测试和取证调查，以评估密码强度。 |
| 11 | [Unclecheng-li/VulnClaw](https://github.com/Unclecheng-li/VulnClaw) | 基于 AI Agent + MCP 工具链 + 渗透 Skill 编排， 配合大语言模型， 自然语言... | Python | 1.6k | 132 | VulnClaw 是一个基于 AI Agent 和 MCP 工具链的自动化渗透测试框架。它通过自然语言驱动，利用目标驱动求解引擎和黑板图状态空间搜索，自动完成信息收集、漏洞发现、利用及报告生成。支持多模型切换、MCP 服务对接及 Web UI，旨在解决弱模型下的死循环问题，提供证据级反幻觉的安全测试能力。 |
| 12 | [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | 12 Weeks, 24 Lessons, AI for All!... | Jupyter Notebook | 50.4k | 1.1k | 这是一个由微软提供的为期12周、24课时的AI入门课程，使用Jupyter Notebook编写。课程内容涵盖AI基础、TensorFlow和PyTorch工具以及AI伦理，支持50多种语言。它包含实践课程、测验和实验，旨在帮助初学者探索人工智能世界，适合零基础学习者。 |
| 13 | [refactoringhq/tolaria](https://github.com/refactoringhq/tolaria) | Desktop app to manage markdown knowledge bases... | TypeScript | 18.0k | 150 | Tolaria 是一款跨平台的桌面应用，用于管理 Markdown 知识库。它采用文件优先和 Git 优先的设计理念，支持离线使用和 AI 集成。用户可以用它构建第二大脑、管理公司文档或存储 AI 上下文。数据完全属于用户，无云依赖。 |
| 14 | [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | agent multiplexer that lives in your terminal.... | Rust | 9.6k | 609 | Herdr 是一个用 Rust 编写的终端 Agent 多路复用器，允许用户在一个窗口中运行和管理多个 AI 编码 Agent。它提供真实的终端视图、状态可视化（阻塞/工作/完成/空闲）以及类似 tmux 的分屏功能。支持持久化会话和 SSH 重新连接，是一个轻量级、无 GUI 依赖的二进制工具。 |
| 15 | [0xNyk/council-of-high-intelligence](https://github.com/0xNyk/council-of-high-intelligence) | 18 AI personas deliberate your hardest decisions a... | Shell | 2.6k | 161 | 该项目利用18个不同AI人格（如亚里士多德、费曼等）通过多轮结构化辩论来辅助解决复杂决策。它支持跨多个LLM提供商（Claude、OpenAI等）进行辩论，通过异议配额和问题重述机制防止群体思维，为用户提供多角度、高质量的决策建议。 |
| 16 | [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) | Fastest and only macOS Dictation app with on-devic... | Swift | 5.5k | 572 | FluidVoice 是一款专为 macOS 设计的极速语音转文字应用。它支持本地离线语音识别（STT）和完全本地的 AI 增强模型，无需云端服务，保护用户隐私。项目基于 Swift 开发，提供极低延迟的输入体验，并计划支持 Windows、iOS 和 Linux。开源免费，适合追求高效、隐私保护的语音输入用户。 |
| 17 | [CoreBunch/Instatic](https://github.com/CoreBunch/Instatic) | Instatic is a modern self-hosted visual CMS - get ... | TypeScript | 2.0k | 508 | Instatic 是一个基于 Bun 的现代自托管视觉 CMS，集成了可视化编辑器、内容引擎和发布器。它将所有功能运行在一个服务器上，输出纯净的语义 HTML 和 CSS，无框架运行时。支持 SQLite 和 Postgres，提供 Railway 一键部署，适合快速搭建静态网站。 |
| 18 | [TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox) | Instant, Concurrent, Secure & Lightweight Sandbox ... | Rust | 6.8k | 79 | CubeSandbox 是一个基于 RustVMM 和 KVM 的高性能安全沙箱服务，专为 AI 智能体设计。它提供硬件级隔离，支持秒级启动（<60ms）和低内存开销（<5MB），兼容 E2B SDK。具备 Web 控制台、凭证 vault、出站控制及快照克隆功能，确保运行 LLM 生成代码的安全性与合规性。 |
| 19 | [browser-use/video-use](https://github.com/browser-use/video-use) | Edit videos with coding agents... | Python | 13.2k | 693 | 这是一个基于 Python 的开源项目，允许用户通过 Claude Code 等编码代理自动编辑视频。它支持自动剪辑填充词、自动调色、音频淡入淡出、字幕生成及动画叠加。项目依赖 ffmpeg 和 ElevenLabs API，旨在通过编程方式简化视频制作流程，无需预设或菜单。 |
| 20 | [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | Let's use AI to Earn!... | TypeScript | 22.5k | 116 | AiToEarn 是一个基于 TypeScript 的 AI Agent 一站式平台，旨在帮助创作者、品牌及 OPC 通过自动化内容生成与分发，在全球主流社交媒体上变现。它支持多平台发布（如抖音、TikTok、YouTube等），提供 CPS/CPE/CPM 结算模式，并集成了创作、发布、互动及变现全链路功能。 |

[查看完整数据](api/github/2026-07-01.json)
<!-- END GITHUB TRENDING -->




