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

**最后更新**: 2026-11-19 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | A Claude Code skill bundle for bug hunting and ext... | Python | 12.7k | 1.3k | 这是一个专为 Claude Code 设计的漏洞挖掘与红队工作技能包，包含 83 个技能、15 个命令及 681 个漏洞模式。它提供了一套完整的 5 阶段工作流程，涵盖 Web 应用检测、企业平台攻击链及报告生成，旨在将 Claude 转化为资深安全研究员。 |
| 2 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 322.2k | 2.0k | Superpowers 是一个为 AI 编码代理构建的完整软件开发方法论框架。它通过一套可组合的技能，引导代理从理解用户意图开始，制定详细的实施计划，并强调 TDD、YAGNI 和 DRY 原则。代理可以自主执行子任务，实现长时间的无缝开发。 |
| 3 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 60.7k | 898 | CLI-Anything 旨在让所有软件对 AI 代理具备“原生”能力。它提供了一个 CLI-Hub 注册表，允许用户浏览、安装和管理社区构建的命令行工具。通过一个命令，AI 代理即可调用这些工具来操作软件，生成 CAD、3D 场景等。项目鼓励社区贡献，致力于连接 AI 代理与现有软件生态。 |
| 4 | [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from... | Python | 67.0k | 238 | 这是一个旨在让个人从零开始训练 64M 超小语言模型的开源项目。它提供了完整的训练链路，包括预训练、SFT、LoRA、RLHF 等。项目核心算法完全使用 PyTorch 原生实现，不依赖高层抽象，旨在降低 LLM 学习门槛，帮助开发者理解模型内部运作机制。 |
| 5 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 17.6k | 384 | 该项目是 Cursor 编辑器的官方插件集合，包含教学、持续学习、代码审查、文档渲染及代理编排等工具。它提供了插件开发规范、TypeScript SDK 以及用于构建 AI 驱动开发工作流的实用技能。 |
| 6 | [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | Knowledge infrastructure to make your agents smart... | TypeScript | 204.4k | 825 | Firecrawl 是一个为 AI 智能体提供知识基础设施的项目，支持通过单一 API 进行网页抓取、搜索及连接 550+ 数据提供商。它提供本地、云端和自托管三种部署方式，能将网站转换为 Markdown 并作为 MCP 服务器接入智能体。 |
| 7 | [nginx/nginx](https://github.com/nginx/nginx) | The official NGINX Open Source repository.... | C | 32.4k | 73 | NGINX 是全球最流行的开源 Web 服务器，支持高性能负载均衡、反向代理和内容缓存。它采用 C 语言编写，基于模块化架构，支持静态和动态模块扩展。提供跨平台支持，广泛应用于高并发 Web 服务场景。 |
| 8 | [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | OpenVINO™ is an open source toolkit for optimizing... | C++ | 11.6k | 246 | OpenVINO 是 Intel 开发的开源 AI 推理优化工具包，支持 PyTorch、TensorFlow 等多种框架模型。它旨在加速计算机视觉、NLP 及生成式 AI 任务，兼容 CPU、GPU 和 NPU 等多种硬件平台，便于边缘到云端的部署。 |
| 9 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram design for Claude Code, Codex, G... | HTML | 68.7k | 271 | 这是一个用于生成自包含 HTML + SVG 图表的 AI 代理技能。支持 45+ 种图表类型（如架构、象限、序列图），允许用户自定义品牌颜色和字体。生成的文件可直接在浏览器中打开，适用于 Claude Code、Cursor 等多种 AI 编程环境。 |
| 10 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 70.9k | 954 | 这是一个基于 Python 的 AI agent skill，能在 Reddit、X、YouTube 等多个平台并行搜索特定主题。它通过点赞、真实资金等指标对结果进行评分，并由 AI 综合成简明摘要，旨在聚合真实人群的反馈而非编辑内容。 |
| 11 | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | A library of Agent Skills designed to work with th... | TypeScript | 10.8k | 302 | 这是一个为 Google Stitch 设计的 Agent Skills 库，使用 TypeScript 编写。它遵循 Agent Skills 开放标准，兼容 Codex、Claude Code、Cursor 等多种编码代理。项目包含设计、构建和实用工具三类技能，支持通过 CLI 或 npx 快速安装，旨在提升 AI 编码助手的能力。 |
| 12 | [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Avoid common App Store and Google Play rejections.... | Shell | 2.0k | 377 | 这是一个用于检查 iOS 和 Android 应用是否准备好提交到 App Store 和 Google Play 的 Shell 脚本项目。它包含 117 个已记录的拒绝模式修复、隐私清单检查以及 95 个法规截止日期跟踪。开发者通过运行脚本可快速发现代码中的关键拒绝风险，确保应用符合 GDPR、COPPA 等法律要求，避免审核被拒。 |
| 13 | [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | The open-source agent for CI/CD reliability.... | Python | 13.2k | 38 | OpenSRE 是一个开源的 CI/CD 可靠性代理，旨在解决 CI 失败后难以定位原因的问题。它是一个 CLI 工具，能自动读取失败日志、分析原因并推送修复建议。项目支持自托管，允许用户使用自己的模型，帮助团队快速恢复构建，区分 CI 故障与代码故障。 |
| 14 | [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | There can be more than Notion and Miro. AFFiNE(pro... | TypeScript | 75.3k | 182 | AFFiNE 是一个开源的下一代知识库，融合了文档、画布和表格。它支持边缘画布、多模态 AI 集成、本地优先数据存储和实时协作。作为 Notion 和 Miro 的替代品，它允许用户自由托管和自定义，适合创意工作、知识管理和项目规划。 |
| 15 | [XiaoYouChR/Ghost-Downloader-3](https://github.com/XiaoYouChR/Ghost-Downloader-3) | The only downloader you need. 下载器的集大成者。... | Python | 12.9k | 341 | 这是一个功能强大的多合一下载器，支持HTTP、BT、FTP、M3U8等多种协议，特别针对YouTube和Bilibili进行了优化。它具备智能分块、真实浏览器TLS指纹等特性，能有效绕过反爬虫检测。支持Windows、macOS、Linux和Android四大平台，并提供浏览器扩展集成，同时兼容aria2 RPC API，适合各类网络资源下载。 |
| 16 | [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | AutoClip｜一个链接，一键出片。开源 AI 视频剪辑桌面工具，将播客、访谈、课程等长视频自动剪... | Python | 11.4k | 126 | AutoClip 是一个开源的 AI 视频剪辑桌面工具，支持将长视频（如播客、访谈）一键转换为适合抖音、TikTok 等平台的短视频。它具备自动生成字幕、封面、文案及适配不同画幅的功能，支持桌面版、CLI 和 MCP 模式，所有处理均在本地完成，保护隐私。 |

[查看完整数据](api/github/2026-11-19.json)
<!-- END GITHUB TRENDING -->




