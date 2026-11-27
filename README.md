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

**最后更新**: 2026-11-26 | **成功**: 15 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | A Claude Code skill bundle for bug hunting and ext... | Python | 24.9k | 1.6k | 这是一个专为 Claude Code 设计的漏洞挖掘与红队技能包。包含85个技能、16个斜杠命令及681个已披露漏洞模式，覆盖24个核心类别。它集成了企业身份与基础设施攻击矩阵，提供从 Web 应用狩猎、边界突破到报告交付的全流程自动化支持，帮助 Claude 从聊天机器人转变为资深漏洞研究员。 |
| 2 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 327.6k | 854 | Superpowers 是一个面向编码代理的技能框架与软件开发方法论。它通过自动触发技能，引导代理从需求分析、设计确认、实施计划制定到自主子代理开发的全流程。强调 TDD、YAGNI 和 DRY 原则，旨在让 AI 编码代理具备自主完成复杂软件工程任务的能力。 |
| 3 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 66.5k | 746 | 处理失败 |
| 4 | [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from... | Python | 71.8k | 702 | 这是一个极简轻量级大语言模型训练项目，旨在让个人用户以极低成本（约3元）和短时间（2小时）从零训练出64M参数模型。项目提供了完整的训练链路，包括预训练、SFT、LoRA、RLHF及模型蒸馏等全流程代码，且完全使用原生PyTorch实现，适合LLM入门学习与底层原理理解。 |
| 5 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 19.8k | 270 | 本项目是 Cursor 编辑器的官方插件规范与官方插件集合。包含教学、持续学习、团队协作、代码审查（如热核分支审查）、自动化工具及 SDK 开发等模块。旨在通过插件扩展 AI 辅助编程能力，支持开发者构建自动化脚本、优化团队工作流及提升开发效率。 |
| 6 | [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | Knowledge infrastructure to make your agents smart... | TypeScript | 211.1k | 1.0k | Firecrawl 是一个知识基础设施，旨在通过统一 API 为 AI 智能体提供搜索、抓取及访问 550+ 数据源的能力。它支持本地、云端和自托管三种模式，能将网站转换为 Markdown，集成 MCP 服务器，并处理 JavaScript 渲染和文档解析，帮助智能体获取更丰富的知识。 |
| 7 | [nginx/nginx](https://github.com/nginx/nginx) | The official NGINX Open Source repository.... | C | 33.5k | 150 | NGINX 是全球最流行的开源 Web 服务器、高性能负载均衡器、反向代理和内容缓存。该项目基于 C 语言开发，采用 BSD 风格许可证，支持静态和动态模块，提供了详细的安装、配置及源码构建指南。 |
| 8 | [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | OpenVINO™ is an open source toolkit for optimizing... | C++ | 12.8k | 176 | OpenVINO 是一个开源的 AI 推理优化与部署工具包。它支持 PyTorch、TensorFlow 等主流框架，能显著提升计算机视觉、NLP 及大模型推理性能。兼容 CPU、GPU 及 AI 加速器，适用于边缘到云端的多种平台部署。 |
| 9 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram design for Claude Code, Codex, G... | HTML | 74.0k | 955 | 这是一个为 AI 编程助手（如 Claude Code, Cursor）设计的图表生成技能。它支持 52 种图表类型，生成自包含的 HTML 和 SVG 文件，支持品牌定制。无需 Mermaid，专注于高质量的编辑类图表设计。 |
| 10 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 75.9k | 759 | 这是一个基于 Python 的 AI Agent 技能，旨在跨 Reddit、X、YouTube、HN、Polymarket 等平台进行全网调研。它通过点赞、观看量及真实资金（Polymarket）等用户参与度对信息进行评分，而非依赖编辑，最终由 AI 生成简明的综合摘要。支持 Claude Code、Cursor 等多种开发环境，提供零配置安装。 |
| 11 | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | A library of Agent Skills designed to work with th... | TypeScript | 13.3k | 309 | 这是一个为 Google Stitch 设计的 Agent Skills 库，基于 TypeScript 开发。它遵循 Agent Skills 开放标准，包含设计、构建和实用工具三类技能。该库兼容 Codex、Claude Code、Cursor 等多种编码代理，旨在通过插件化方式提升 AI 编码助手的能力。 |
| 12 | [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Avoid common App Store and Google Play rejections.... | Shell | 7.1k | 562 | 这是一个用于检查 iOS 和 Android 应用是否符合 App Store 和 Google Play 规则的 Shell 工具。它包含 125 种已记录的拒绝模式及修复方案，支持隐私清单检查，并跟踪多项法律截止日期。通过扫描项目代码，帮助开发者在提交前规避审核风险，特别适用于 AI 编码助手集成。 |
| 13 | [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | The open-source agent for CI/CD reliability.... | Python | 15.9k | 327 | OpenSRE 是一个开源的 CI/CD 可靠性代理，使用 Python 编写。它是一个 CLI 工具，能够自动分析失败的 CI 运行，追踪失败原因，并生成修复建议供人工审查。该项目支持自托管，允许用户使用自己的模型，旨在解决 CI 失败时无法快速定位和修复的问题，区分 CI 故障与代码故障。 |
| 14 | [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | There can be more than Notion and Miro. AFFiNE(pro... | TypeScript | 79.1k | 525 | AFFiNE 是一个开源的下一代知识库，融合了文档、画布和表格。它支持边缘画布、多模态 AI 和实时协作，强调本地优先和数据隐私。作为 Notion 和 Miro 的替代品，它允许用户自由组合构建块，适用于知识管理、演示和创意规划。 |
| 15 | [XiaoYouChR/Ghost-Downloader-3](https://github.com/XiaoYouChR/Ghost-Downloader-3) | The only downloader you need. 下载器的集大成者。... | Python | 19.3k | 889 | 这是一个功能强大的多合一下载器，支持 HTTP、BT、FTP、M3U8 等多种协议。它具备智能分块、带宽检测和浏览器 TLS 指纹伪装功能，能有效应对网络波动和反爬虫检测。支持 YouTube、Bilibili 等视频平台及 GitHub、HuggingFace 代码托管加速，提供嗅探和扩展功能，是下载需求的集大成者。 |
| 16 | [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | AutoClip｜The open-source OpusClip alternative — lo... | Python | 17.1k | 774 | AutoClip 是一个开源的本地优先 AI 视频剪辑工具，替代 OpusClip。它支持将长视频一键转换为适合抖音、TikTok 等平台的短视频，自动生成字幕、封面和文案。支持 OBS 直播回放、本地视频和链接，零订阅费，完全在本地运行。 |

[查看完整数据](api/github/2026-11-26.json)
<!-- END GITHUB TRENDING -->




