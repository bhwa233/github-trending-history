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

**最后更新**: 2026-08-29 | **成功**: 19 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tt-a1i/archify](https://github.com/tt-a1i/archify) | Agent skill for beautiful, verifiable architecture... | JavaScript | 31.1k | 3.9k | Archify 是一个专为 AI 代理设计的架构可视化系统，可将代码库或系统描述转换为精美的交互式 HTML/SVG 图表。支持架构、工作流等多种图表类型，具备深色/浅色主题、动画效果及导出功能，并能比较架构变更，帮助开发者直观展示和审查系统设计。 |
| 2 | [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | A spy satellite simulator in your browser, except ... | JavaScript | 12.6k | 1.9k | 这是一个基于浏览器的间谍卫星模拟器，利用真实开源数据（飞机、船只、卫星等）在照片级逼真的3D地球上进行实时可视化。项目支持语音控制，将公开信号转化为可视化的空间情报，无需特殊权限即可追踪全球动态。 |
| 3 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Turn any AI agent into an AI Scientist. The #1 Age... | Python | 38.0k | 1.6k | 这是一个开源的 AI 科学家技能库，旨在将任何支持 Agent Skills 标准的 AI 代理转化为科研助手。包含 163 个验证过的科学技能及 100+ 数据库，支持本地运行（BYOK）和云端扩展，覆盖生物、化学、医学等领域，助力科研自动化。 |
| 4 | [tailscale/tailcat](https://github.com/tailscale/tailcat) | like netcat, but over Tailscale's data plane, with... | Go | 3.5k | 789 | Tailcat 是一个基于 Go 的工具，类似于 netcat，但运行在 Tailscale 的数据平面上。它无需 Tailscale 控制平面、管理员权限或修改系统路由，利用 WireGuard 实现端到端加密。支持 DERP 中继和 NAT 穿透，提供 CLI 工具和 Go 库，用于在两台机器间安全传输数据。 |
| 5 | [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | Open Multi-Agent Interactive Classroom — Get an im... | TypeScript | 22.3k | 907 | OpenMAIC 是一个基于 TypeScript 的开源多智能体交互式课堂项目。v1.0.0 版本引入了代理工作台，允许用户通过聊天与 AI 代理协作规划、构建和修改课程。支持持久化会话、多种素材上传及丰富的课程工具（如幻灯片、测验、PBL），且设计中立，支持自定义模型和存储后端。 |
| 6 | [p-e-w/heretic](https://github.com/p-e-w/heretic) | Fully automatic censorship removal for language mo... | Python | 28.7k | 150 | Heretic 是一个全自动的语言模型审查移除工具。它结合了方向性消融与基于 Optuna 的 TPE 优化，通过最小化拒绝次数和 KL 散度来解密模型。该工具支持多种模型架构，无需深入了解 Transformer 内部原理，且生成的模型在移除审查的同时保留了更多原始能力。 |
| 7 | [bigskysoftware/htmx](https://github.com/bigskysoftware/htmx) | </> htmx - high power tools for HTML... | JavaScript | 49.1k | 32 | htmx 是一个轻量级、无依赖的 JavaScript 库，旨在通过 HTML 属性扩展 HTML 的功能。它允许开发者直接在 HTML 中使用 AJAX、CSS Transitions、WebSockets 和 Server Sent Events，无需编写复杂的 JavaScript 代码。htmx 消除了传统 Web 开发中对表单和链接的约束，支持更多 HTTP 方法和部分页面替换，是构建现代用户界面的强大工具。 |
| 8 | [JetBrains/go-modern-guidelines](https://github.com/JetBrains/go-modern-guidelines) | Help AI coding agents write modern Go... | Go | 2.9k | 303 | 该项目为 AI 编码代理提供 Go 代码风格指南，旨在解决模型训练数据滞后和频率偏差问题。它覆盖 Go 1.0 到 1.27 的特性，帮助代理生成符合现代 Go 习惯的代码，并支持自动检测项目 Go 版本以应用相应的语言特性。 |
| 9 | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | A curated list of awesome Claude Skills, resources... | Python | 73.9k | 73 | 这是一个精选的 Claude Skills 列表，包含 1000+ 个生产就绪的插件和工具。项目通过 Composio MCP Gateway 赋予 Claude 执行真实操作的能力（如发送邮件、自动化办公），支持多种 AI 代理平台，旨在提升 AI 工作流的自动化与生产力。 |
| 10 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 54.1k | 806 | OpenMontage 是全球首个开源代理驱动视频制作系统，包含12个生产管道和700+技能文件。它将AI编程助手转化为全能视频工作室，支持从研究、脚本、资产生成到剪辑合成的全流程。不仅能制作基于图像的视频，还能利用免费素材库生成包含真实运动片段的“真视频”。 |
| 11 | [every-app/open-seo](https://github.com/every-app/open-seo) | Open source alternative to Semrush and Ahrefs... | TypeScript | 14.7k | 517 | OpenSEO 是一款开源的 SEO 工具，旨在替代 Semrush 和 Ahrefs。它支持关键词研究、排名跟踪、竞争对手分析及网站审计等功能。采用按量付费模式，无需订阅，并集成了 MCP 服务器供 AI 代理使用。支持 Docker 和 Cloudflare 自托管。 |
| 12 | [Osmantic/ODS](https://github.com/Osmantic/ODS) | Turn your PC, Mac, or Linux box into an AI server.... | Python | 4.9k | 35 | ODS 是一个将 PC、Mac 或 Linux 转换为本地 AI 服务器的部署系统。它集成了 LLM 推理、聊天 UI、语音交互、智能体、工作流、RAG 及图像生成功能。该系统无需云订阅，确保数据隐私，并自动配置 Ollama、Open WebUI、n8n 和 ComfyUI 等工具，简化了本地 AI 环境的搭建。 |
| 13 | [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code) | Drop in a screenshot and convert it to clean code ... | Python | 76.0k | 550 | 这是一个基于 Python 的 AI 工具，支持将截图、Figma 设计或屏幕录制转换为 HTML/Tailwind/React/Vue 等前端代码。项目支持多种 AI 模型，提供本地部署和托管服务，适合快速将设计稿转化为可用的前端代码。 |
| 14 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 35.4k | 358 | Anthropic 官方维护的 Claude Code 插件目录，包含内部及第三方高质量插件。提供插件安装、管理和贡献指南，支持通过标准结构定义插件功能，并确保插件名称不可变。 |
| 15 | [google/googletest](https://github.com/google/googletest) | GoogleTest - Google Testing and Mocking Framework... | C++ | 39.3k | 128 | GoogleTest 是 Google 开发的 C++ 测试和模拟框架。它基于 xUnit 架构，支持自动测试发现、丰富的断言库（包括相等性、异常等）以及用户自定义断言。项目还支持死亡测试、致命/非致命失败处理以及值/类型参数化测试，旨在简化单元测试编写，是 C++ 生态中广泛使用的测试工具。 |
| 16 | [actions/checkout](https://github.com/actions/checkout) | Action for checking out a repo... | TypeScript | 8.8k | 5 | GitHub 官方提供的代码检出 Action，用于将仓库代码下载至工作区。最新版本迁移至 ESM 并使用 Node 24 运行时。主要特性包括安全加固，默认拒绝检出 Fork PR 代码，并将凭证存储在独立文件中而非 .git/config，支持配置拉取深度。 |
| 17 | [kaifcodec/user-scanner](https://github.com/kaifcodec/user-scanner) | 🕵️‍♂️ (2-in-1) Email & Username OSINT suite for d... | Python | 3.6k | 39 | 这是一个强大的 2合1 OSINT 套件，用于从单个邮箱或用户名提取深度数据。支持 455+ 个平台的扫描，具备元数据抓取、交叉扫描引擎、MCP AI 集成、高并发处理及多格式报告导出功能，适用于安全研究、调查及数字足迹分析。 |
| 18 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 90.7k | 196 | 该项目为 AI 编码代理提供生产级工程技能，通过 9 个斜杠命令将开发生命周期（定义、计划、构建、验证、审查、发布）编码为标准化技能。它确保 AI 遵循最佳实践（如测试驱动开发），支持自动技能激活和自主执行，旨在提升软件构建的质量与效率。 |
| 19 | [workweave/router](https://github.com/workweave/router) | Model router for agentic systems. Routes every pro... | Go | 2.7k | 284 | 这是一个专为代理系统设计的 Go 语言模型路由器。它能在 50ms 内将每个请求路由到最佳模型，通过单一端点统一管理 Anthropic、OpenAI 和 Gemini。利用嵌入模型而非提示词选择模型，可节省 40-70% 成本。支持流式传输、工具调用、视觉及 OSS 模型，默认 BYOK 并提供可观测性。 |

[查看完整数据](api/github/2026-08-29.json)
<!-- END GITHUB TRENDING -->




