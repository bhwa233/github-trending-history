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

**最后更新**: 2026-06-24 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 19.3k | 3.7k | 这是一个开源的代理驱动视频制作系统，拥有12条流水线和500+代理技能。它将AI编程助手转化为全功能视频工作室，能自动处理研究、脚本、资产生成、剪辑和合成。不仅能制作基于图像的视频，还能利用免费素材制作真实视频。 |
| 2 | [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 ... | Python | 48.5k | 1.5k | 这是一个基于 Python 的 LLM 驱动多市场股票智能分析系统。支持 A股、港股、美股等数据聚合，提供 AI 决策报告、实时新闻分析及决策看板。支持通过 GitHub Actions 零成本部署，并能自动推送分析结果到企业微信、飞书等主流平台，辅助用户进行自动化投资决策。 |
| 3 | [apple/container](https://github.com/apple/container) | A tool for creating and running Linux containers u... | Swift | 42.2k | 1.8k | 这是一个用 Swift 编写的工具，用于在 Mac 上通过轻量级虚拟机创建和运行 Linux 容器。它针对 Apple Silicon 进行了优化，支持 OCI 兼容的容器镜像，允许用户从标准注册表拉取和推送镜像。它依赖于 Containerization Swift 包进行底层管理。 |
| 4 | [interviewstreet/hiring-agent](https://github.com/interviewstreet/hiring-agent) | AI agent to evaluate and score resumes.... | Python | 2.1k | 203 | 这是一个基于 Python 的 AI 简历评估 Agent。它通过 PyMuPDF 解析 PDF 简历，利用 LLM（支持 Ollama 或 Gemini）提取结构化数据，并结合 GitHub 账号信号进行增强。最终输出包含分数、证据和加减分的客观评估报告，旨在实现公平透明的招聘筛选。 |
| 5 | [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | Clone any website with one command using AI coding... | TypeScript | 19.3k | 692 | 这是一个基于 TypeScript 的 Next.js 模板，旨在通过 AI 编码代理一键克隆任何网站。用户只需指定 URL 并运行命令，AI 代理即可自动分析网站设计、提取资源并生成现代化的前端代码。推荐使用 Claude Code，但也支持其他代理工具。 |
| 6 | [revfactory/harness](https://github.com/revfactory/harness) | A meta-skill that designs domain-specific agent te... | HTML | 7.7k | 277 | Harness 是一个为 Claude Code 设计的团队架构工厂。它利用 Claude Code 的代理团队系统，将复杂的域描述自动分解为协调的代理团队。它支持 6 种预定义的团队架构模式（如流水线、专家池等），并自动生成专门的代理定义和技能，帮助用户快速构建专业的 AI 代理团队。 |
| 7 | [flutter/flutter](https://github.com/flutter/flutter) | Flutter makes it easy and fast to build beautiful ... | Dart | 177.3k | 73 | Flutter 是 Google 的开源 UI 工具包，使用 Dart 语言。它允许开发者使用单一代码库构建高性能、美观的移动、Web 和桌面应用。其硬件加速渲染和丰富的组件库使其成为跨平台开发的理想选择。 |
| 8 | [andreknieriem/headunit-revived](https://github.com/andreknieriem/headunit-revived) | Headunit App for displaying Android Auto... | Kotlin | 1.4k | 41 | 这是一个将 Android 平板或手机转换为 Android Auto 接收器的应用。项目支持有线及无线连接（含 Helper 模式），允许用户在车载屏幕上使用 Android Auto。基于 Kotlin 开发，旨在为车载系统提供原生的 Android Auto 体验。 |
| 9 | [stablyai/orca](https://github.com/stablyai/orca) | Orca is the ADE for working with a fleet of parall... | TypeScript | 6.8k | 331 | Orca 是一个 AI 编排器，旨在帮助开发者高效管理多个 AI 编码代理。它支持并行工作树，允许同时运行 Codex、Claude 等多个代理进行代码生成和对比。此外，它提供移动端伴侣、终端分割、GitHub/Linear 集成以及 SSH 支持，旨在通过统一界面提升开发者的生产力。 |
| 10 | [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | A format specification for describing a visual ide... | TypeScript | 17.3k | 619 | 这是一个为编码代理定义的视觉身份格式规范，旨在提供持久、结构化的设计系统理解。它结合了机器可读的 YAML 令牌与人类可读的 Markdown 理由。Google 提供了 lint 工具来验证设计文件、检查 WCAG 对比度，确保 AI 代理能准确生成符合设计意图的 UI。 |
| 11 | [Flowseal/zapret-discord-youtube](https://github.com/Flowseal/zapret-discord-youtube) | ... | Batchfile | 30.0k | 61 | 这是一个基于 Batchfile 的 Windows 工具，旨在绕过网络审查（如 Discord 和 YouTube 的封锁）。它利用 WinDivert 驱动程序拦截和过滤网络流量。项目提醒用户注意杀毒软件可能将其误报为病毒，并提供了启用 Secure DNS 的配置指南。 |
| 12 | [kunchenguid/no-mistakes](https://github.com/kunchenguid/no-mistakes) | git push no-mistakes... | Go | 2.1k | 110 | 这是一个 Go 语言编写的本地 git 代理工具。它拦截 git push 操作，在隔离的工作树中运行 AI 驱动的验证管道（包括代码审查、测试、文档、Lint 等）。只有所有检查通过后，才会将代码推送到真实远程仓库并自动打开 PR。它支持多种 AI 代理，提供非阻塞的代码质量保障。 |
| 13 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 202.0k | 1.2k | Hermes Agent 是一个具备自我改进能力的 AI 代理，内置学习循环，能从经验中创建和优化技能，并建立跨会话的用户模型。支持多平台（Telegram、Discord 等）接入，提供全功能 TUI 界面及自动化调度，适合需要长期记忆和复杂任务处理的用户。 |

[查看完整数据](api/github/2026-06-24.json)
<!-- END GITHUB TRENDING -->




