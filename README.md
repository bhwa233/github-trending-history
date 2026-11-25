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
| 1 | [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | A Claude Code skill bundle for bug hunting and ext... | Python | 21.7k | 1.8k | 这是一个专为 Claude Code 设计的漏洞挖掘与红队工作技能包，包含84个技能、15个斜杠命令及681个已披露报告模式。项目通过四层架构（思考、Web应用狩猎、外围攻击、交付）自动触发，覆盖24个核心漏洞类别及企业攻击矩阵，旨在将 Claude Code 转变为资深漏洞挖掘研究员。 |
| 2 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 326.0k | 1.0k | Superpowers 是一个为编码代理构建的代理技能框架与软件开发方法论。它通过一套可组合的技能，引导代理在编码前进行需求分析和设计审查。系统强调 TDD、YAGNI 和 DRY 原则，支持子代理驱动开发，实现代理自主、高效地完成复杂工程任务。 |
| 3 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 65.0k | 1.1k | CLI-Anything 是一个旨在让所有软件具备代理原生能力的开源项目。它通过 CLI-Hub 注册表，连接 AI 代理与各类桌面及服务器软件，提供统一的命令行接口。用户可以安装社区构建的 CLI 工具，实现 CAD、3D 场景、笔记等软件的自动化操作，支持 Cursor、Claude Code 等多种 AI 代理。 |
| 4 | [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from... | Python | 70.4k | 727 | 这是一个旨在让个人从零开始训练 64M 参数大模型的开源项目。它使用原生 PyTorch 实现，无需第三方高层抽象，覆盖了从数据清洗、预训练、SFT 到 RLHF 的完整训练链路。项目极轻量，仅需约 3 美元成本和 2 小时即可完成训练，旨在降低 LLM 学习门槛，提供可复现的入门教程。 |
| 5 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 19.3k | 360 | 本项目是 Cursor 编辑器的官方插件规范与插件集合。包含教学、持续学习、团队协作、代码审查、自动化工具及 SDK 等多种插件。主要功能涵盖 AI 代理管理、CI/CD 流程优化、文档与 PR 可视化，旨在提升开发效率与代码质量。 |
| 6 | [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | Knowledge infrastructure to make your agents smart... | TypeScript | 209.1k | 991 | Firecrawl 是一个知识基础设施，旨在增强 AI 代理能力。它提供本地、云端和自托管三种模式，通过单一 API 实现网页抓取、搜索及访问 550+ 数据提供商。支持将网站转为 Markdown，处理 JS 渲染与文档解析，可作为 MCP 服务器无缝集成至 AI 代理中。 |
| 7 | [nginx/nginx](https://github.com/nginx/nginx) | The official NGINX Open Source repository.... | C | 33.3k | 158 | NGINX 是一款高性能的开源 Web 服务器、负载均衡器、反向代理和内容缓存。它使用 C 语言编写，采用模块化架构，支持静态和动态模块扩展。遵循简化的 BSD 风格许可证，提供企业级支持，广泛应用于高并发网络服务场景。 |
| 8 | [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | OpenVINO™ is an open source toolkit for optimizing... | C++ | 12.5k | 185 | OpenVINO 是一个开源的 AI 推理优化和部署工具包。它支持多种深度学习框架（如 PyTorch、TensorFlow、ONNX 等）的模型转换与加速，兼容 CPU、GPU 和 AI 加速器。旨在提升计算机视觉、语音识别、自然语言处理等任务的推理性能，广泛应用于边缘到云端的部署场景。 |
| 9 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram design for Claude Code, Codex, G... | HTML | 72.2k | 802 | 这是一个专为 Claude Code、Cursor 等 AI 编程助手设计的图表生成代理技能。它支持 52 种图表类型，能生成自包含的 HTML + SVG 文件，支持品牌字体和调色板定制，无需依赖 Mermaid，适合快速绘制架构图、流程图等。 |
| 10 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 74.4k | 703 | 这是一个 AI agent 技能，用于跨 Reddit、X、YouTube、HN、Polymarket 和网络研究任何话题。它通过用户参与度（点赞、投票、金钱）而非编辑来评分结果，提供 Google 等搜索引擎无法获取的独特、综合摘要。支持零配置安装，可聚合各平台真实用户数据。 |
| 11 | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | A library of Agent Skills designed to work with th... | TypeScript | 12.7k | 403 | 这是一个为 Google Stitch 设计的 Agent Skills 库，基于 TypeScript 开发。它遵循 Agent Skills 开放标准，旨在为编码代理提供设计、构建和实用工具技能。该库兼容 Codex、Claude Code、Cursor 等多种主流编码代理工具，支持通过 CLI 或 UI 进行插件安装，帮助开发者提升 AI 编码效率。 |
| 12 | [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Avoid common App Store and Google Play rejections.... | Shell | 6.0k | 928 | 这是一个用于避免 App Store 和 Google Play 拒绝的自动化工具。它包含 124 种已记录的拒绝模式及修复方案，提供隐私清单和数据安全检查，并跟踪 112 个相关截止日期。开发者可以通过简单的命令行脚本扫描应用，快速识别关键拒绝风险，确保应用合规提交。 |
| 13 | [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | The open-source agent for CI/CD reliability.... | Python | 15.3k | 398 | OpenSRE 是一个开源的 CI/CD 可靠性代理，旨在解决 CI 失败时“不知道为什么”和“不知道怎么修”的问题。它通过读取失败日志、追踪原因并生成修复建议，帮助团队快速恢复构建。项目支持自托管模型，目前处于公共 Alpha 阶段。 |
| 14 | [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | There can be more than Notion and Miro. AFFiNE(pro... | TypeScript | 78.1k | 584 | AFFiNE 是一款开源、本地优先且隐私友好的 Notion 和 Miro 替代品。它将文档、画布和表格融合为统一平台，支持边缘画布、多种块类型及多模态 AI 集成。具备实时协作与自托管能力，适合创意头脑风暴、知识管理与演示制作。 |
| 15 | [XiaoYouChR/Ghost-Downloader-3](https://github.com/XiaoYouChR/Ghost-Downloader-3) | The only downloader you need. 下载器的集大成者。... | Python | 17.6k | 1.1k | Ghost-Downloader-3 是一款跨平台（Windows/macOS/Linux/Android）的多合一下载工具，集成了 HTTP、BT、FTP、流媒体等多种协议。它支持 YouTube、Bilibili 等主流网站，具备浏览器扩展集成、智能分块下载及 aria2 RPC API 等功能，旨在提供无缝的下载体验。 |
| 16 | [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | AutoClip｜一个链接，一键出片。开源 AI 视频剪辑桌面工具，将播客、访谈、课程等长视频自动剪... | Python | 15.6k | 980 | AutoClip 是一款开源的本地优先 AI 视频剪辑桌面工具，支持将播客、访谈等长视频自动剪辑成适合抖音、TikTok 等平台的短视频。它具备智能重排、字幕生成、封面制作及文案撰写功能，支持 OBS 直播回放捕获，完全离线运行，无订阅费用。 |

[查看完整数据](api/github/2026-11-25.json)
<!-- END GITHUB TRENDING -->




