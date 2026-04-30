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

**最后更新**: 2026-04-29 | **成功**: 15 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [warpdotdev/warp](https://github.com/warpdotdev/warp) | Warp is an agentic development environment, born o... | Rust | 43.6k | 12.0k | Warp 是一个基于 Rust 的智能终端开发环境，集成了 OpenAI 支持的编码代理。它支持内置及外部 CLI 代理，提供 Web 界面监控开发活动，旨在通过 AI 增强 Terminal 体验，简化开发流程。 |
| 2 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 44.4k | 7.4k | 专为 Claude Code 等编码代理设计的实用技能库，旨在解决 AI 与用户之间的沟通错位。提供快速安装脚本和一系列交互式命令（如 /grill-me、/triage），帮助工程师高效管理问题跟踪、文档生成及代码审查，强调小而美、可组合的工程实践。 |
| 3 | [HunxByts/GhostTrack](https://github.com/HunxByts/GhostTrack) | Useful tool to track location or mobile number... | Python | 11.6k | 1.0k | GhostTrack 是一个基于 Python 的 OSINT 信息收集工具，主要用于追踪 IP 地址、手机号码以及社交媒体用户名。它支持在 Linux 和 Termux 环境下运行，通过菜单界面提供 IP 追踪、手机号码查询和用户名搜索等功能，帮助用户获取目标对象的公开信息。 |
| 4 | [ComposioHQ/awesome-codex-skills](https://github.com/ComposioHQ/awesome-codex-skills) | A curated list of practical Codex skills for autom... | Python | 4.8k | 1.2k | 这是一个由 ComposioHQ 维护的 Codex 技能精选列表，旨在通过模块化指令包自动化工作流。项目提供 Python 安装脚本，支持将技能安装至 Codex CLI，涵盖开发、生产力、沟通等领域，让 Codex 能执行邮件、Slack 等跨应用操作。 |
| 5 | [1jehuang/jcode](https://github.com/1jehuang/jcode) | Coding Agent Harness... | Rust | 1.3k | 386 | jcode 是一个用 Rust 编写的下一代编码代理框架。它专注于多会话工作流、无限可定制性和极致性能。项目以极低的资源占用（内存和启动速度）著称，相比同类工具具有显著优势，适合大规模并发场景。 |
| 6 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 33.3k | 777 | GitNexus 是一个纯客户端的代码智能引擎，利用 Tree-sitter 将代码库索引为交互式知识图谱。它内置 Graph RAG Agent，支持 CLI 和 Web UI 模式，可与 Cursor、Claude Code 等 AI 工具集成。项目强调隐私保护，通过本地解析提供深度的代码架构视图，帮助 AI 代理准确理解代码依赖和执行流程。 |
| 7 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 45.7k | 1.7k | VibeVoice 是微软开源的前沿语音 AI 框架，包含 ASR 和 TTS 模型。ASR 模型支持 60 分钟长音频转录，输出结构化信息，支持 50+ 语言；TTS 模型支持流式输入和多说话人长音频生成。项目已集成到 Transformers 库，支持 vLLM 推理加速。 |
| 8 | [CJackHwang/ds2api](https://github.com/CJackHwang/ds2api) | Deepseek to API: A lightweight, high-performance f... | Go | 2.7k | 461 | 这是一个将 DeepSeek Web 对话能力转换为 OpenAI、Claude 和 Gemini 兼容 API 的全栈中间件。后端采用 Go 实现，支持多账户轮换、Docker 和 Vercel 部署，并提供 React 管理后台。它实现了 Prompt 兼容内核、并发控制和工具调用适配，旨在为开发者提供统一的 API 接口。 |
| 9 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 173.1k | 1.7k | Superpowers 是一个面向编码代理的技能框架与软件开发方法论。它通过引导用户明确需求、拆解设计、制定 TDD 实施计划，并利用子代理进行自主开发，实现高效的 AI 辅助编程，无需特殊配置即可自动触发技能。 |
| 10 | [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | LLM驱动的 A/H/美股智能分析器：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推... | Python | 32.7k | 358 | 这是一个基于 Python 的 LLM 驱动股票智能分析系统，支持 A/H/美股市场。整合多数据源行情、实时新闻与 AI 模型，生成决策仪表盘（含评分、买卖点、风险警报）。支持企业微信、飞书等多渠道推送，可通过 GitHub Actions 零成本定时运行，具备回测、复盘及策略问答功能。 |
| 11 | [lukilabs/craft-agents-oss](https://github.com/lukilabs/craft-agents-oss) | ... | TypeScript | 5.3k | 432 | Craft Agents 是一个开源的 AI 代理协作工具，旨在通过直观的 UI 实现多任务处理和文档中心的工作流。它支持无配置连接各种 API 和 MCP 服务，基于 Claude 和 Pi SDK 构建，高度可定制，允许用户通过自然语言提示进行配置和扩展，无需编写代码。 |
| 12 | [EbookFoundation/free-programming-books](https://github.com/EbookFoundation/free-programming-books) | 📚 Freely available programming books... | Python | 387.2k | 609 | 处理失败 |
| 13 | [soxoj/maigret](https://github.com/soxoj/maigret) | 🕵️‍♂️ Collect a dossier on a person by username f... | Python | 20.2k | 31 | Maigret 是一款强大的开源情报（OSINT）工具，支持通过用户名在 3000 多个网站上收集个人档案。它无需 API 密钥，支持递归搜索、绕过封锁，并可直接嵌入 Python 项目。项目提供 Web UI 和多种报告格式，适合专业社交媒体分析和隐私调查。 |
| 14 | [iv-org/invidious](https://github.com/iv-org/invidious) | Invidious is an alternative front-end to YouTube... | Crystal | 19.4k | 243 | Invidious 是一个开源的 YouTube 替代前端，使用 Crystal 语言编写。它提供无广告、无追踪、无需 JavaScript 的纯净浏览体验。支持订阅管理、音频模式、多语言及数据导入导出，并拥有开发者 API。用户可选择公共实例或自托管，旨在保护用户隐私并绕过 Google 限制。 |
| 15 | [gorhill/uBlock](https://github.com/gorhill/uBlock) | uBlock Origin - An efficient blocker for Chromium ... | JavaScript | 64.0k | 315 | uBlock Origin 是一款高效、轻量级的跨浏览器广告拦截扩展，支持 Firefox 和 Chromium。它默认拦截广告、跟踪器及恶意内容，保护用户隐私。支持多种过滤列表和自定义规则，资源占用低，是保护上网隐私的强大工具。 |
| 16 | [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | Microsoft PowerToys is a collection of utilities t... | C# | 132.4k | 79 | Microsoft PowerToys 是微软官方推出的一套 Windows 系统实用工具集合，旨在提升用户的生产力和系统自定义能力。它包含超过 30 个实用工具，如 FancyZones（窗口分区）、PowerToys Run（快速启动）、PowerRename（批量重命名）等，帮助用户优化 Windows 体验，简化日常任务。 |

[查看完整数据](api/github/2026-04-29.json)
<!-- END GITHUB TRENDING -->




