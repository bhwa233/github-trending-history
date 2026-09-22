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

**最后更新**: 2026-09-21 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [BuilderIO/agent-native](https://github.com/BuilderIO/agent-native) | A framework for building agentic apps... | TypeScript | 5.9k | 607 | Agent-Native 是一个 TypeScript 框架，用于构建将自主智能体与专用 UI 配对的智能体应用。它通过“共享操作”概念，允许开发者定义一次能力，智能体将其作为工具，UI 从代码中调用。框架支持共享数据和应用状态，确保智能体和 UI 之间的无缝交互，无需智能体模拟 UI 点击。 |
| 2 | [trycua/cua](https://github.com/trycua/cua) | Scale computer-use 2.0 with open-source drivers, c... | HTML | 25.7k | 609 | Cua 是一个开源的计算机使用 2.0 平台，旨在为 AI 代理提供桌面自动化能力。它提供隔离的云桌面、本地 macOS 虚拟机以及基准测试工具，支持训练、评估和生成数据。用户可以部署 Fleets 运行命令、截图，或使用 Cua Driver 操作原生应用，帮助开发者构建和测试计算机使用代理。 |
| 3 | [Open-Dev-Society/OpenStock](https://github.com/Open-Dev-Society/OpenStock) | OpenStock is an open-source alternative to expensi... | TypeScript | 17.8k | 844 | OpenStock 是一个开源的股票市场追踪应用，旨在替代昂贵的付费平台。它支持实时价格追踪、个性化提醒和公司洞察，完全免费且社区驱动。项目使用 Next.js 等现代技术栈构建，致力于打破知识付费壁垒，为用户提供透明、无门槛的金融工具。 |
| 4 | [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | Solution for long term memory for agent coding CLI... | Rust | 7.7k | 167 | 这是一个为 AI 编码代理提供长期记忆的 Rust 项目。它允许用户在不同 AI 工具（如 Claude、Codex）之间无缝切换，共享项目进度和上下文。记忆存储在基于 Git 的 Markdown 文件中，支持跨机器和团队协作，确保数据可审计、可编辑且隐私安全。 |
| 5 | [coder/coder](https://github.com/coder/coder) | Secure environments for developers and their agent... | Go | 16.4k | 460 | Coder 是一个自托管的云开发环境平台，使用 Go 语言编写。它允许开发者通过 Terraform 定义工作区，并通过 Wireguard® 安全隧道连接。项目支持 AI 编码代理，可在基础设施上运行，无需在工作区中存储 API 密钥。它支持自动关闭空闲资源以节省成本，并集成了多种大语言模型。 |
| 6 | [anthropics/financial-services](https://github.com/anthropics/financial-services) | ... | Python | 35.8k | 424 | 该项目为金融服务行业（投资银行、股权研究等）提供参考代理、技能和数据连接器。包含Pitch Agent、Market Researcher等端到端工作流代理，用于生成分析模型和备忘录。支持通过Claude Cowork插件或托管代理API部署。注意：仅用于起草工作产品，不构成投资建议。 |
| 7 | [cloudflare/quiche](https://github.com/cloudflare/quiche) | 🥧 Savoury implementation of the QUIC transport pr... | Rust | 12.4k | 32 | quiche 是用 Rust 实现的 QUIC 传输协议和 HTTP/3 的开源库。它提供了处理数据包和连接状态的低级 API，支持流量控制和拥塞控制等特性。该库被 Cloudflare、Android 和 curl 等广泛使用，为现代网络应用提供高性能的 HTTP/3 支持。 |
| 8 | [mvt-project/mvt](https://github.com/mvt-project/mvt) | MVT (Mobile Verification Toolkit) helps with condu... | Python | 13.6k | 169 | MVT (Mobile Verification Toolkit) 是由 Amnesty International 开发的开源移动取证工具，旨在自动化收集 Android 和 iOS 设备的取证痕迹，以识别潜在的间谍软件感染。它支持使用公开的指标（IOCs）进行扫描，主要用于技术专家和调查员进行数字取证和威胁分析。 |
| 9 | [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | AutoClip : AI-powered video clipping and highlight... | Python | 8.3k | 250 | AutoClip 是一款基于 Python 的 AI 视频剪辑工具，支持导入本地视频、YouTube 和 B 站链接。它能利用 AI 分析字幕或语音转写，自动提取高光片段、生成标题和合集，并支持导出至抖音、小红书等平台。支持多种大模型（如通义千问、Ollama）和桌面、Web、CLI 三种部署方式。 |
| 10 | [ruanyf/weekly](https://github.com/ruanyf/weekly) | 科技爱好者周刊，每周五发布... | - | 104.0k | 182 | 这是一个由阮一峰维护的科技爱好者周刊项目，每周五发布。内容汇总了互联网上值得分享的科技文章、软件、资源及程序员招聘信息，涵盖AI、编程、创业等领域，旨在帮助读者快速了解科技前沿动态。 |
| 11 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | Project NOMAD is an offline-first knowledge and ed... | TypeScript | 37.9k | 394 | Project NOMAD 是一个离线优先的知识和教育服务器，旨在提供无需互联网的全面学习环境。它集成了维基百科、书籍、课程、地图和本地 AI，通过 Docker 容器化部署，提供统一的 Command Center 管理界面，适合在个人硬件上构建私有知识库和离线学习中心。 |
| 12 | [yynxxxxx/Codex-X](https://github.com/yynxxxxx/Codex-X) | OpenAI Codex 桌面端/CLI 的可视化管理工具，具有Provider/API 切换、会话... | Rust | 3.7k | 50 | Codex-X 是一款基于 Rust 的跨平台桌面工具，用于可视化管理 OpenAI Codex 桌面端和 CLI。它集成了提示词注入、多供应商 API 切换、会话同步、Skills/MCP 管理及 TOML 配置功能。支持内置模板、GitHub 同步、Token 用量统计及离线使用，旨在简化 Codex 的配置与操作流程。 |

[查看完整数据](api/github/2026-09-21.json)
<!-- END GITHUB TRENDING -->




