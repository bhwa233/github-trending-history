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

**最后更新**: 2026-11-22 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | A Claude Code skill bundle for bug hunting and ext... | Python | 18.1k | 1.7k | 这是一个专为 Claude Code 设计的漏洞挖掘与红队工作技能包，包含83个技能、15个斜杠命令及681个已披露漏洞模式。项目提供四层工作流（思考、Web应用狩猎、外围攻击、交付），覆盖企业级攻击矩阵，支持 Burp MCP 集成，旨在让 Claude 变身为资深安全研究员。 |
| 2 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 324.3k | 788 | Superpowers 是一个为编码代理设计的代理技能框架与软件开发方法论。它通过引导用户定义需求、拆分规格、制定实施计划（强调 TDD、YAGNI、DRY），并利用子代理自主执行开发任务，使 AI 编码工具具备“超能力”。支持多种主流 AI 编码工具，旨在实现高效、结构化的自动化软件开发。 |
| 3 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 62.9k | 699 | CLI-Anything 是一个致力于让所有软件具备“代理原生”能力的开源项目。它通过 CLI-Hub 注册中心，帮助用户浏览、安装和管理社区构建的命令行工具。该项目连接了 AI 代理与各类软件，使代理能够通过命令行自动化执行 CAD 建模、笔记管理、游戏开发等复杂任务。 |
| 4 | [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from... | Python | 68.8k | 473 | 这是一个极简的 LLM 训练项目，旨在让用户以极低成本（3元）和极短时间（2小时）从零训练出 64M 参数的小模型。项目完全使用 PyTorch 原生实现，覆盖从预训练、SFT 到 RLHF 的全流程代码，包含 MoE 结构，是面向 LLM 入门的优秀教程。 |
| 5 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 18.5k | 294 | 该项目是 Cursor AI 编程助手的官方插件集合与规范，包含教学、持续学习、团队协作、代码审查、文档渲染、CLI 设计模式、SDK 开发、Origin API 应用构建以及任务编排等多种工具。旨在提升 AI 辅助编程的效率与质量，支持开发者构建自动化工作流。 |
| 6 | [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | Knowledge infrastructure to make your agents smart... | TypeScript | 207.1k | 915 | Firecrawl 是一个知识基础设施，旨在提升 AI 代理能力。它提供本地运行、云端托管和自托管三种模式，支持将网站转换为 Markdown，集成 MCP 服务器，并提供访问 550+ 数据提供商的 API。支持抓取、爬取和映射网页，具备 JS 渲染和文档解析能力。 |
| 7 | [nginx/nginx](https://github.com/nginx/nginx) | The official NGINX Open Source repository.... | C | 32.9k | 163 | NGINX 是全球最流行的 Web 服务器、高性能负载均衡器、反向代理和内容缓存。它基于 C 语言开发，采用 BSD 风格开源协议。支持静态和动态模块，可配置性强，适用于高并发场景，提供 SSL/TLS 加密、负载均衡和速率限制等功能。 |
| 8 | [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | OpenVINO™ is an open source toolkit for optimizing... | C++ | 12.1k | 158 | OpenVINO 是一个开源的 AI 推理优化工具包，旨在提升深度学习性能。它支持多种主流框架（如 PyTorch、TensorFlow）的模型转换与部署，兼容 CPU、GPU 和 AI 加速器。项目提供丰富的教程和示例，帮助开发者高效地在边缘到云端的各类平台上部署大模型和通用 AI 任务。 |
| 9 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram design for Claude Code, Codex, G... | HTML | 70.4k | 518 | 该项目是一个 Agent 技能，用于生成自包含的 HTML + SVG 图表。支持 51 种图表类型，可适配 Claude Code、Cursor 等多种编辑器。用户通过自然语言指令即可生成符合品牌风格的架构图、象限图等，生成的文件独立且无 Mermaid 依赖。 |
| 10 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 72.8k | 668 | 这是一个基于 Python 的 AI Agent 技能，能够跨 Reddit、X、YouTube 等多个平台并行搜索信息。它通过点赞、投票和真实资金等真实用户参与度对内容进行评分，并由 AI 代理综合成摘要，旨在提供一种由用户而非编辑驱动的搜索体验。 |
| 11 | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | A library of Agent Skills designed to work with th... | TypeScript | 12.0k | 494 | 这是一个为 Google Stitch 设计的 Agent Skills 库，使用 TypeScript 编写。它遵循 Agent Skills 开放标准，旨在与 Claude Code、Cursor、Codex 等主流编码代理兼容。项目包含设计、构建和实用工具等插件，帮助 AI 代理更高效地完成开发任务。 |
| 12 | [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Avoid common App Store and Google Play rejections.... | Shell | 4.1k | 621 | 这是一个用于 iOS 和 Android 应用的合规性检查工具，使用 Shell 编写。它包含 124 种常见的 App Store 和 Google Play 拒绝模式及修复方案，支持隐私清单和数据安全检查，还能跟踪各种法规截止日期。开发者可以通过简单的命令扫描应用，提前发现并修复关键拒绝风险，避免被拒。 |
| 13 | [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | The open-source agent for CI/CD reliability.... | Python | 14.5k | 399 | OpenSRE 是一个开源的 CI/CD 可靠性代理，基于 Python 构建。它是一个 CLI 工具，能够自动读取失败的 CI 运行日志，分析失败原因并生成修复建议供开发者审查。项目支持自托管，允许用户使用自己的模型。目前处于公共 Alpha 阶段，旨在解决 CI 失败后难以排查和修复的问题，帮助团队更快恢复构建。 |
| 14 | [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | There can be more than Notion and Miro. AFFiNE(pro... | TypeScript | 76.9k | 542 | AFFiNE 是一个开源、隐私优先的下一代知识库，融合了文档、画布和表格。它支持在边缘画布上放置任意形式的块，并具备多模态 AI 能力。项目采用本地优先架构，支持实时协作与自托管，旨在成为 Notion 和 Miro 的强大替代品。 |
| 15 | [XiaoYouChR/Ghost-Downloader-3](https://github.com/XiaoYouChR/Ghost-Downloader-3) | The only downloader you need. 下载器的集大成者。... | Python | 15.3k | 701 | Ghost-Downloader-3 是一款全能型下载工具，支持 HTTP、BT、FTP、M3U8 等多种协议及流媒体平台。具备智能分块、浏览器扩展集成、跨平台支持及 RPC API 等特性，旨在提供无缝的下载体验。 |
| 16 | [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | AutoClip｜一个链接，一键出片。开源 AI 视频剪辑桌面工具，将播客、访谈、课程等长视频自动剪... | Python | 13.6k | 641 | AutoClip 是一款开源 AI 视频剪辑工具，支持一键将长视频（如播客、访谈）自动剪辑成适配抖音、TikTok 等平台的短视频。具备自动生成字幕、封面及发布文案功能，支持本地渲染与多种 AI 模型，适合内容创作者高效处理视频内容。 |

[查看完整数据](api/github/2026-11-22.json)
<!-- END GITHUB TRENDING -->




