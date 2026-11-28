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

**最后更新**: 2026-11-27 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | A Claude Code skill bundle for bug hunting and ext... | Python | 26.3k | 1.6k | 这是一个专为漏洞赏金和红队工作设计的 Claude Code 技能包，包含 85 个技能、16 个斜杠命令及 681 个披露报告模式。它覆盖 24 个核心漏洞类别，提供企业级攻击矩阵和报告工具，旨在让 Claude 自动化执行漏洞检测、利用和报告，提升安全测试效率。 |
| 2 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 328.4k | 922 | Superpowers 是一个面向编码代理的技能框架与软件开发方法论。它通过自动触发技能，引导代理从需求分析、规范确认、制定实施计划到子代理驱动的开发全过程。强调 TDD、YAGNI 和 DRY 原则，支持多种主流 AI 编码工具，旨在让代理具备自主完成复杂工程任务的能力。 |
| 3 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 67.1k | 666 | CLI-Anything 旨在让所有软件具备 Agent 原生能力。它通过 CLI-Hub 平台，提供浏览、安装和管理社区构建的命令行工具的功能。该项目支持 AI Agent（如 Claude Code、Cursor）直接调用各类软件（如 CAD、3D 场景、笔记软件），实现自动化操作和生成真实工件，降低 Agent 与复杂软件交互的门槛。 |
| 4 | [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from... | Python | 72.3k | 660 | 这是一个开源的轻量级大语言模型训练项目，旨在让用户以极低成本（约3元）和极短时间（2小时）从零训练出64M参数的模型。项目使用原生PyTorch实现，覆盖了从预训练、SFT到RLHF、工具调用等全流程代码，包含Dense和MoE结构，适合LLM入门学习与底层原理复现。 |
| 5 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 20.0k | 243 | 该项目是 Cursor 编辑器的官方插件集合，包含教学、持续学习、团队工作流、代码审查、文档渲染、代理兼容性及 SDK 等多种工具。旨在提升 AI 辅助编程效率，支持团队协作与自动化任务处理。 |
| 6 | [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | Knowledge infrastructure to make your agents smart... | TypeScript | 211.8k | 822 | Firecrawl 是一个知识基础设施，旨在提升 AI 代理的智能水平。它提供本地、云端和自托管三种部署方式，核心功能包括网页抓取、爬取及将网页转换为 Markdown。项目支持与 AI 代理集成（MCP 服务器），并提供 Alexandria 数据库访问 550+ 数据提供商，通过单一 API 统一管理数据。 |
| 7 | [nginx/nginx](https://github.com/nginx/nginx) | The official NGINX Open Source repository.... | C | 33.7k | 146 | NGINX 是全球最流行的 Web 服务器、负载均衡器、反向代理及内容缓存。采用 C 语言开发，遵循 BSD 风格开源协议。支持模块化架构，可通过静态或动态模块扩展功能，提供高性能、高并发的网络服务解决方案。 |
| 8 | [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | OpenVINO™ is an open source toolkit for optimizing... | C++ | 13.0k | 151 | OpenVINO 是一个开源的 AI 推理优化工具包，支持将 PyTorch、TensorFlow 等多种框架训练的模型转换为统一格式，并在 CPU、GPU 和 NPU 上高效部署。它旨在通过模型优化提升计算机视觉、自然语言处理等任务的推理性能，适用于从边缘设备到云端的广泛场景。 |
| 9 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram design for Claude Code, Codex, G... | HTML | 74.5k | 725 | 这是一个专为 AI 编码助手（如 Claude Code, Cursor）设计的图表生成技能。它支持 52 种图表类型，生成自包含的 HTML/SVG 文件。用户可自定义品牌风格（颜色、字体），无需依赖 Mermaid，生成的文件可直接在浏览器中打开查看。 |
| 10 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 76.4k | 675 | 这是一个基于 Python 的 AI 智能体技能，能够跨 Reddit、X、YouTube、HN、Polymarket 等多个平台并行搜索特定主题。它利用真实用户互动（点赞、金钱）进行评分，并合成一个基于事实的摘要。它解决了主流搜索引擎无法访问所有社交平台数据的问题，提供零配置的深度研究能力。 |
| 11 | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | A library of Agent Skills designed to work with th... | TypeScript | 13.6k | 311 | 这是一个为 Google Stitch 设计的 Agent Skills 库，基于 TypeScript 开发。它遵循 Agent Skills 开放标准，旨在与 Codex、Claude Code、Cursor 等主流编码代理兼容。项目包含设计、构建和实用工具三类技能，支持通过 CLI 或 npx 快速安装，提升开发效率。 |
| 12 | [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Avoid common App Store and Google Play rejections.... | Shell | 8.0k | 530 | 这是一个针对 iOS 和 Android 应用的预提交合规检查工具，旨在避免 App Store 和 Google Play 的常见拒绝。项目包含 125 种已记录的拒绝模式和修复方案，支持隐私清单与数据安全检查，并集成了 AI 编码代理。通过 Shell 脚本扫描应用，帮助开发者识别关键问题，确保应用符合最新法规。 |
| 13 | [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | The open-source agent for CI/CD reliability.... | Python | 16.2k | 328 | OpenSRE 是一个开源的 CI/CD 可靠性代理。它是一个 CLI 工具，当 CI 构建失败时，能自动读取日志、分析原因并生成修复建议供审查。项目支持自托管，旨在解决 CI 红色构建难以排查的问题，帮助团队快速恢复构建。 |
| 14 | [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | There can be more than Notion and Miro. AFFiNE(pro... | TypeScript | 79.5k | 474 | AFFiNE 是一个开源的下一代知识库，旨在成为 Notion 和 Miro 的替代品。它将文档、画布和表格融合在一起，支持在无边框画布上放置任何形式的块。项目强调隐私优先和本地优先，支持实时协作和 AI 辅助创作，用户可自由自托管。 |
| 15 | [XiaoYouChR/Ghost-Downloader-3](https://github.com/XiaoYouChR/Ghost-Downloader-3) | The only downloader you need. 下载器的集大成者。... | Python | 20.0k | 836 | Ghost-Downloader-3 是一款集成了多种协议（HTTP、BT、FTP等）的全能下载工具。它支持YouTube、Bilibili及GitHub等主流平台，具备智能分块、真实浏览器TLS指纹及自动带宽检测功能，能有效绕过反爬虫检测，并提供浏览器扩展实现一键嗅探下载。 |
| 16 | [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | AutoClip｜The open-source OpusClip alternative — lo... | Python | 17.7k | 718 | 这是一个开源的本地优先 AI 视频剪辑工具，类似于 OpusClip。它支持将长视频（播客、访谈、直播）一键剪辑成适合 TikTok、抖音等平台的短视频。具备智能重排、字幕生成、封面制作及文案撰写功能。完全在本地运行，支持 OBS 集成与多语言，零订阅费用。 |

[查看完整数据](api/github/2026-11-27.json)
<!-- END GITHUB TRENDING -->




