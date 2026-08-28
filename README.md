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

**最后更新**: 2026-08-28 | **成功**: 19 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | A spy satellite simulator in your browser, except ... | JavaScript | 9.2k | 2.0k | 这是一个基于浏览器的间谍卫星模拟器，利用照片级真实感的 3D 地球展示实时开源情报（OSINT）。项目整合了飞机、船只、卫星、地震及摄像头等实时数据，支持语音控制，将公共信号转化为可视化交互地图，无需特殊许可即可监控全球动态。 |
| 2 | [zedeus/nitter](https://github.com/zedeus/nitter) | Alternative Twitter front-end... | Nim | 14.0k | 71 | 这是一个基于 Nim 语言开发的 Twitter 替代前端，专注于隐私和性能。它不使用 JavaScript 和广告，所有请求通过后端转发，防止 Twitter 追踪用户 IP 和浏览器指纹。支持 RSS、移动端响应式设计，且代码轻量。目前因收到停止侵权信面临下架风险。 |
| 3 | [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | Prompt as Code | GPT-Image2 工业级提示词引擎与模板库，530+ 个案例逆... | JavaScript | 23.6k | 2.1k | 这是一个 GPT-Image2 工业级提示词引擎与模板库，包含 530+ 个逆向工程案例和 20+ 套工业级模板。项目采用 Prompt as Code 模式，提炼出 Skills，持续更新，旨在帮助用户高效生成高质量图像。 |
| 4 | [tt-a1i/archify](https://github.com/tt-a1i/archify) | Agent skill for beautiful, verifiable architecture... | JavaScript | 24.7k | 4.2k | Archify 是一个将代码库或系统描述转化为精美交互式系统图的 Node.js 工具。它为 AI 代理生成类型化 JSON IR，并编译为 HTML/SVG。支持多种图表类型、版本对比、搜索追踪及多格式导出，帮助开发者直观展示和验证架构设计。 |
| 5 | [JetBrains/go-modern-guidelines](https://github.com/JetBrains/go-modern-guidelines) | Help AI coding agents write modern Go... | Go | 2.3k | 300 | 该项目为 AI 编码代理提供现代 Go 编码指南，旨在解决 AI 生成过时代码的问题。它涵盖了 Go 1.0 到 1.27 的特性，推荐使用 `max`、`slices.Contains` 等现代惯用语，而非旧模式。项目与 Go 团队的 `modernize` analyzer 目标一致，帮助 IDE 插件在生成代码时自动应用最新的语言特性和最佳实践。 |
| 6 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 34.8k | 292 | Anthropic 官方维护的 Claude Code 插件市场，包含内部及第三方高质量插件。提供标准插件结构规范，支持直接安装，并强调用户需自行评估插件安全性。 |
| 7 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Turn any AI agent into an AI Scientist. The #1 Age... | Python | 35.5k | 498 | 这是一个将任何 AI 代理转化为 AI 科学家的技能库，包含 163 个经过验证的科学技能和 100+ 数据库。支持本地运行（BYOK）和多种 AI 模型，覆盖生物、化学、医学等领域，旨在帮助科学家进行高效的研究工作。 |
| 8 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 114.5k | 1.6k | Ponytail 是一个 JavaScript 工具，旨在让 AI 代理像懒惰的资深开发者一样思考。它通过提示工程鼓励使用原生 HTML 元素和最简方案，避免过度构建。实测显示，它能显著减少代码行数、令牌消耗、成本和时间，同时保持 100% 安全性。适用于追求高效、低成本代码生成的场景。 |
| 9 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 52.7k | 1.3k | OpenMontage 是首个开源的代理驱动视频制作系统，将 AI 编码助手升级为全能视频工作室。它拥有 12 条生产流水线、100+ 工具及 700+ 技能文件，支持从脚本、素材生成到剪辑合成的全流程自动化，并能利用开源素材库制作真实运动视频。 |
| 10 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 50.3k | 552 | 这是一个全面的 AI 工程开源课程，包含 511 个课程和 20 个阶段，涵盖 Python、TypeScript、Rust 和 Julia。项目强调“学、建、发布”，学生通过构建可重用的工件（如提示词、代理、MCP 服务器）来学习，旨在弥合 AI 工具使用与专业准备之间的差距。 |
| 11 | [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | ConardLi's open-source Skills collection, featurin... | CSS | 11.4k | 415 | 这是一个为 AI 编码代理（如 Claude Code、Cursor）提供生产就绪技能的集合。包含 Web 视频演示工程（将脚本转为可点击视频）和 Web 设计工程师等技能。支持多种安装方式，具备主题切换、TTS 合成等功能，旨在提升 AI 辅助开发的效率和质量。 |
| 12 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | JavaScript | 92.4k | 143 | Claude-Mem 是一个为 Claude Code 等代理设计的持久化上下文系统。它自动捕获会话活动，利用 AI 压缩语义信息，并将其注入未来会话。这确保了 AI 在会话中断或重启后，仍能保持对项目的连贯性知识，无需重复输入背景信息。 |
| 13 | [google/googletest](https://github.com/google/googletest) | GoogleTest - Google Testing and Mocking Framework... | C++ | 39.1k | 9 | GoogleTest 是 Google 的 C++ 测试与模拟框架，基于 xUnit 架构。它提供自动测试发现、丰富的断言（含异常与死亡测试）、致命/非致命失败处理，以及值参数化和类型参数化测试等功能。该框架合并了 GoogleTest 与 GoogleMock，是 C++ 单元测试的行业标准工具。 |
| 14 | [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Self-organizing AI second brain for Obsidian + Cla... | Python | 14.2k | 634 | claude-obsidian 是一个本地优先的 AI 知识系统，专为 Claude Code 设计。它将源材料转化为带有引用的 Obsidian 页面，保留源文件所有权，支持连接笔记、可视化地图和基于证据的检索，是开源的 Notion 替代品。 |
| 15 | [marin-community/marin](https://github.com/marin-community/marin) | Open-source framework for the research and develop... | Python | 2.7k | 255 | Marin 是一个专注于大型语言模型研发的开源框架，强调开放开发，记录从数据到模型的完整流程。它致力于构建大规模混合专家模型，并提供了 Delphi 扩展套件用于研究模型缩放规律。 |
| 16 | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | A curated list of awesome Claude Skills, resources... | Python | 73.7k | 130 | 这是一个精选的 Claude Skills 列表，包含 1000+ 生产就绪的技能和插件。它支持 Claude.ai、Claude Code 及多种编码代理。通过 Composio MCP Gateway，Claude 可以执行真实操作（如发送邮件、创建问题等），覆盖文档处理、开发、数据分析等多个领域，旨在提升 AI 工作流的生产力。 |
| 17 | [actions/checkout](https://github.com/actions/checkout) | Action for checking out a repo... | TypeScript | 8.8k | 8 | 这是一个 GitHub Actions，用于将仓库代码检出到工作区。支持获取指定提交或完整历史，处理 Git 凭证（可持久化或清除）。最新版本迁移至 ESM，支持 Node 24 运行时，并增强了安全策略以防止 Fork PR 漏洞。 |
| 18 | [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | The open-source CapCut alternative... | TypeScript | 87.6k | 478 | OpenCut 是一款免费开源的视频编辑器，支持 Web、桌面和移动端。项目正在进行底层重写，采用 Rust 核心和插件优先架构。新版本将提供 Editor API、MCP 服务器（AI 代理）、Headless 模式及脚本功能，致力于成为 CapCut 的开源替代品，支持跨平台开发与自动化。 |
| 19 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 101.4k | 229 | TradingAgents 是一个基于多智能体 LLM 的金融交易框架。它集成了研究、交易和投资组合管理功能，支持多种大语言模型（如 GPT-5.x, Claude 4.x）和数据源。项目具备回测、情绪分析及持久化决策日志能力，支持 Docker 部署，旨在构建智能化的自动化交易系统。 |

[查看完整数据](api/github/2026-08-28.json)
<!-- END GITHUB TRENDING -->




