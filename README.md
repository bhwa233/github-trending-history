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

**最后更新**: 2026-11-25 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | A Claude Code skill bundle for bug hunting and ext... | Python | 23.3k | 1.7k | 这是一个专为 Claude Code 设计的漏洞挖掘与红队技能包。包含85个技能、16个斜杠命令和681个已披露漏洞模式。它通过四层架构（思考、狩猎Web应用、击穿边界、交付）提供从检测到报告的全流程支持，涵盖企业身份、基础设施攻击及平台CVE链。旨在将 Claude Code 转变为资深红队研究员，支持 M365、Okta 等企业平台攻击。 |
| 2 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 326.8k | 903 | Superpowers 是一个为 AI 编码代理设计的技能框架和软件开发方法论。它通过一套可组合的技能和初始指令，引导代理从需求分析、设计评审到实施计划制定，最终实现自主的子代理驱动开发。该框架强调 TDD、YAGNI 和 DRY 原则，支持多种主流 AI 编码工具，旨在让代理具备专业工程师的自主工作能力。 |
| 3 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 65.8k | 1.1k | CLI-Anything 是一个旨在让所有软件具备代理原生能力的项目。它通过 CLI-Hub 注册表提供社区构建的命令行工具，使 AI 代理能够通过命令行界面与各类软件（如 CAD、笔记、3D 场景等）进行交互和自动化操作。 |
| 4 | [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from... | Python | 71.1k | 826 | 这是一个开源的轻量级大语言模型训练项目，旨在让用户以极低成本（约3元）和极短时间（2小时）从零训练出64M参数的MiniMind模型。项目完全使用原生PyTorch实现，不依赖高层抽象库，覆盖了从预训练、SFT、LoRA到RLHF（DPO/RLAIF）及模型蒸馏等全流程代码，适合LLM入门学习与底层原理探索。 |
| 5 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 19.6k | 416 | 该项目是 Cursor 编辑器的官方插件库与规范，提供 AI 辅助编程、团队协作、代码审查及持续学习等工具。包含教学、持续学习、团队套件、热核分支审查、插件脚手架、代理兼容性检查、CLI 设计模式、PR/文档可视化画布、SDK 以及任务编排等模块，旨在提升开发效率与代码质量。 |
| 6 | [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | Knowledge infrastructure to make your agents smart... | TypeScript | 210.2k | 1.1k | Firecrawl 是一个知识基础设施，旨在通过单一 API 让 AI 代理更智能。它提供三种使用方式：本地运行、云端托管和自托管。本地版本支持抓取、爬取和映射网页为 Markdown，支持 JS 渲染和文档解析，可作为 MCP 服务器接入 AI 代理。云端版本提供搜索和 550+ 数据提供商访问。自托管则允许部署完整的服务器架构。 |
| 7 | [nginx/nginx](https://github.com/nginx/nginx) | The official NGINX Open Source repository.... | C | 33.4k | 176 | NGINX 是世界上最流行的开源 Web 服务器、高性能负载均衡器、反向代理和内容缓存。它采用 C 语言编写，支持静态和动态模块化架构，提供跨平台支持，广泛应用于高并发 Web 服务、负载均衡及 API 网关场景。 |
| 8 | [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | OpenVINO™ is an open source toolkit for optimizing... | C++ | 12.7k | 191 | OpenVINO 是一个开源的 AI 推理优化与部署工具包，支持 PyTorch、TensorFlow 等多种框架模型。它能显著提升计算机视觉、NLP 及生成式 AI 的性能，兼容 CPU、GPU 和 NPU，适用于从边缘设备到云端的广泛平台。 |
| 9 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram design for Claude Code, Codex, G... | HTML | 73.2k | 1.1k | 这是一个专为 AI 编码助手设计的图表生成 Agent 技能。支持 52 种图表类型，生成自包含的 HTML + SVG 文件，支持品牌定制（颜色、字体），无需 Mermaid，适合快速生成架构图、象限图等。 |
| 10 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 75.2k | 945 | 这是一个基于 Python 的 AI agent 技能，能够跨 Reddit、X、YouTube、HN 和 Polymarket 等多个平台进行全网搜索。它通过聚合用户真实互动数据（如点赞、资金）而非编辑内容来评分，并利用 AI 代理综合生成基于事实的摘要，解决了单一 AI 无法访问所有平台的问题。 |
| 11 | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | A library of Agent Skills designed to work with th... | TypeScript | 13.0k | 355 | 这是一个为 Google Stitch 设计的 Agent Skills 库，使用 TypeScript 编写。它遵循 Agent Skills 开放标准，旨在与多种编码代理（如 Codex、Claude Code、Cursor 等）兼容。项目包含设计、构建和实用工具等插件，支持通过 CLI 或 UI 快速安装，帮助开发者提升 AI 编码效率。 |
| 12 | [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Avoid common App Store and Google Play rejections.... | Shell | 6.6k | 858 | 这是一个帮助开发者避免 iOS 和 Android 应用被 App Store 和 Google Play 拒绝的开源指南与自动化工具。它包含 124 种常见拒绝模式的修复方案、隐私清单检查及法规截止日期追踪。开发者可通过简单的 Shell 命令扫描项目，提前发现关键问题，提高审核通过率。 |
| 13 | [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | The open-source agent for CI/CD reliability.... | Python | 15.6k | 348 | OpenSRE 是一个开源的 CI/CD 可靠性代理，使用 Python 编写。它是一个 CLI 工具，能在 CI 构建失败时自动读取日志、追踪根本原因并生成修复建议。项目支持自托管，允许用户使用自己的模型，旨在解决 CI 红灯问题，帮助团队快速恢复构建，区分 CI 故障与代码故障。 |
| 14 | [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | There can be more than Notion and Miro. AFFiNE(pro... | TypeScript | 78.6k | 574 | AFFiNE 是一个开源的本地优先知识库，集成了文档、画布和表格。它支持无边框画布上的多模态 AI 功能和实时协作，是 Notion 和 Miro 的强大替代品。 |
| 15 | [XiaoYouChR/Ghost-Downloader-3](https://github.com/XiaoYouChR/Ghost-Downloader-3) | The only downloader you need. 下载器的集大成者。... | Python | 18.4k | 951 | 这是一个跨平台的多合一下载器，支持HTTP、BT、FTP、M3U8等多种协议。它集成了浏览器插件，能无缝接管网页下载，支持YouTube和Bilibili等主流视频网站。具备智能分块、TLS指纹伪装和aria2兼容性，拥有插件生态，在Windows、macOS、Linux和Android上提供原生体验。 |
| 16 | [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | AutoClip｜一个链接，一键出片。开源 AI 视频剪辑桌面工具，将播客、访谈、课程等长视频自动剪... | Python | 16.3k | 880 | AutoClip 是一款开源的本地优先 AI 视频剪辑桌面工具。它支持将播客、访谈、直播回放等长视频自动剪辑成短视频，内置智能重排、字幕生成、封面制作及文案生成功能。支持 OBS 直播捕获和多平台一键发布，完全在本地运行，无需订阅费用。 |

[查看完整数据](api/github/2026-11-25.json)
<!-- END GITHUB TRENDING -->




