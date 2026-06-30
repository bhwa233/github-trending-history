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

**最后更新**: 2026-06-29 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [simplex-chat/simplex-chat](https://github.com/simplex-chat/simplex-chat) | SimpleX - the first messaging network operating wi... | Haskell | 16.5k | 1.6k | SimpleX Chat 是一个基于 Haskell 开发的即时通讯网络，主打零用户标识符设计，确保 100% 的通信隐私。它采用双重 ratchet 端到端加密技术，支持 iOS、Android 及桌面终端应用，旨在提供无需注册、无元数据追踪的私密聊天体验。 |
| 2 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 118.8k | 1.4k | 这是一个提供多种专业AI代理的集合，旨在提升开发工作流。每个代理都具备独特的个性和专业技能。项目提供原生桌面应用和Shell脚本，支持一键安装到Claude Code、Cursor等IDE中，无需编写复杂脚本，即开即用。 |
| 3 | [cupy/cupy](https://github.com/cupy/cupy) | NumPy & SciPy for GPU... | Python | 11.8k | 352 | CuPy 是一个用于 GPU 加速计算的 Python 数组库，兼容 NumPy 和 SciPy。它作为现有代码的即插即用替代品，可在 NVIDIA CUDA 和 AMD ROCm 平台上运行。此外，它还提供对低级 CUDA 特性的访问。 |
| 4 | [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) | FluidVoice - Fastest macOS Offline Dictation app -... | Swift | 4.4k | 830 | FluidVoice 是一款基于 Swift 开发的 macOS 语音转文字应用，主打极速与离线体验。它集成了本地 AI 模型（Fluid Intelligence），提供零延迟的语音识别和智能格式化功能，无需云端服务，保护用户隐私。支持 Homebrew 安装，开源免费，旨在为用户提供高效、私密的语音输入方案。 |
| 5 | [soxoj/maigret](https://github.com/soxoj/maigret) | 🕵️‍♂️ Collect a dossier on a person by username f... | Python | 34.4k | 224 | Maigret 是一款 Python 工具，通过单一用户名在 3000+ 个网站上收集个人档案。它无需 API 密钥，支持递归搜索、信息提取及绕过封锁，并能嵌入 Python 项目中。 |
| 6 | [commaai/openpilot](https://github.com/commaai/openpilot) | openpilot is an operating system for robotics. Cur... | Python | 62.8k | 458 | openpilot 是一个开源的驾驶员辅助系统（ADAS）升级软件，支持 300 多款车型。它基于 Python 开发，旨在通过硬件（如 comma four）和软件结合，提升驾驶安全性。项目遵循 ISO26262 安全标准，拥有活跃的开发社区和完善的测试流程。 |
| 7 | [ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev) | A list of SaaS, PaaS and IaaS offerings that have ... | HTML | 126.7k | 1.9k | 这是一个由社区维护的免费开发者服务列表，涵盖 SaaS、PaaS 和 IaaS。项目严格筛选真正提供免费层级而非试用期的服务，专注于基础设施开发人员的需求。列表分类清晰，由 1600+ 人共同维护，旨在帮助开发者快速做出技术选型决策。 |
| 8 | [logto-io/logto](https://github.com/logto-io/logto) | 🧑‍🚀 Authentication and authorization infrastruct... | TypeScript | 12.6k | 158 | Logto 是一个现代开源的身份验证和授权基础设施，专为 SaaS 和 AI 应用设计。它基于 OIDC 和 OAuth 2.1 构建，提供多租户、企业级 SSO 和 RBAC 功能。项目提供 30 多种框架的 SDK，支持 MCP 和代理架构，旨在简化安全认证流程，帮助团队快速构建生产就绪的应用。 |
| 9 | [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | AI 时代的伯克希尔：基于 Claude Code / Codex 的价值投资研究框架。巴菲特·芒格... | Python | 6.6k | 1.4k | 这是一个基于 Python 的价值投资研究框架，利用 Claude Code 和 Codex 模拟巴菲特、芒格等大师的投资逻辑。通过多 Agent 并行对抗分析，强制输出明确结论，并内置反偏见机制和金融数据精确校验，旨在提升投资决策的深度与纪律性。 |
| 10 | [browser-use/video-use](https://github.com/browser-use/video-use) | Edit videos with coding agents... | Python | 11.9k | 967 | 这是一个开源项目，允许用户通过 Claude Code 等编码代理自动编辑视频。它支持自动剪辑填充词、自动调色、添加字幕和生成动画。用户只需将原始素材放入文件夹，代理即可处理转录、剪辑和渲染，生成最终视频。项目支持自我评估和会话记忆，适用于各种视频内容。 |
| 11 | [Unclecheng-li/VulnClaw](https://github.com/Unclecheng-li/VulnClaw) | 基于 AI Agent + MCP 工具链 + 渗透 Skill 编排， 配合大语言模型， 自然语言... | Python | 1.1k | 129 | VulnClaw 是一个基于 Python 的 AI 驱动渗透测试 CLI 工具。它利用 LLM Agent、MCP 工具链和渗透 Skill 编排，通过自然语言输入自动执行从信息收集到漏洞利用的全流程。项目采用目标驱动求解引擎和黑板图状态空间搜索，有效防止幻觉，支持多种大模型，并能生成结构化报告和 PoC 脚本。 |
| 12 | [0xNyk/council-of-high-intelligence](https://github.com/0xNyk/council-of-high-intelligence) | 18 AI personas deliberate your hardest decisions a... | Shell | 1.9k | 331 | 该项目通过18个不同AI人设（如亚里士多德、费曼等）在多个LLM提供商间进行多轮辩论，帮助用户做出艰难决策。它通过问题重述、分歧配额等协议防止单一模型的偏见和幻觉，提供结构化的不同视角。 |
| 13 | [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | "Vibe-Trading: Your Personal Trading Agent"... | Python | 15.1k | 839 | Vibe-Trading 是一个基于 Python 的个人交易代理，旨在通过一个命令赋予 AI 代理全面的交易能力。它支持跨平台运行，集成了 Trading 212 等券商接口，提供影子账户功能以模拟交易，并具备内容过滤韧性和审计追踪等安全机制，适合需要自动化交易策略的用户。 |
| 14 | [refactoringhq/tolaria](https://github.com/refactoringhq/tolaria) | Desktop app to manage markdown knowledge bases... | TypeScript | 17.5k | 280 | Tolaria 是一款跨平台桌面应用，用于管理 Markdown 知识库。它采用文件优先和 Git 优先原则，确保数据完全本地化、可移植且版本可控。应用支持离线使用，无云锁定，并专为 AI 代理优化，适合构建个人第二大脑或管理 AI 上下文。 |
| 15 | [veracrypt/VeraCrypt](https://github.com/veracrypt/VeraCrypt) | Disk encryption with strong security based on True... | C | 10.5k | 186 | VeraCrypt 是一款基于 TrueCrypt 7.1a 开发的磁盘加密软件，提供了比原版更强的安全性。它支持 Windows、Linux、macOS、FreeBSD 和 OpenBSD 等多平台。项目包含源代码，需遵守特定的开源许可协议，且官方二进制文件经过数字签名以确保在 64 位系统上运行。 |

[查看完整数据](api/github/2026-06-29.json)
<!-- END GITHUB TRENDING -->




