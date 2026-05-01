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

**最后更新**: 2026-05-01 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 59.8k | 2.1k | TradingAgents 是一个基于 Python 的多智能体 LLM 金融交易框架。它模拟现实交易公司，通过基本面、技术、情绪分析专家及交易员、风控团队等智能体协作，动态评估市场并制定交易策略。支持多种大模型和 LangGraph，主要用于金融交易研究。 |
| 2 | [soxoj/maigret](https://github.com/soxoj/maigret) | 🕵️‍♂️ Collect a dossier on a person by username f... | Python | 21.6k | 535 | Maigret 是一个强大的开源情报（OSINT）工具，通过用户名在 3000+ 网站上收集个人档案。它支持递归搜索、自动更新数据库、绕过封锁，并提供 Web 界面和多种报告格式。无需 API 密钥，可嵌入 Python 项目使用。 |
| 3 | [warpdotdev/warp](https://github.com/warpdotdev/warp) | Warp is an agentic development environment, born o... | Rust | 51.4k | 3.4k | Warp 是一个基于 Rust 的智能开发环境，旨在增强终端体验。它集成了内置的 AI 编码代理，支持 Claude Code 等 CLI 工具，并提供 Web 端仪表盘监控开发流程。项目采用 MIT 和 AGPL v3 双重许可证，欢迎社区贡献。 |
| 4 | [1jehuang/jcode](https://github.com/1jehuang/jcode) | Coding Agent Harness... | Rust | 2.3k | 404 | jcode 是一个用 Rust 编写的下一代编码代理框架。它专注于多会话工作流、无限自定义和极致性能。项目强调资源效率，相比 Copilot CLI 和 Claude Code 等竞品，其内存占用显著更低，旨在提升编码能力上限。 |
| 5 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 52.5k | 3.6k | 这是一套为 Claude Code 等编程代理设计的 Shell 技能集合，旨在解决 AI 编程中的沟通鸿沟。它提供可组合的命令（如 /grill-me 和 /triage），帮助工程师通过详细提问和配置来规范工作流，确保 AI 理解需求并生成高质量代码。 |
| 6 | [browserbase/skills](https://github.com/browserbase/skills) | Claude Agent SDK with a web browsing tool... | JavaScript | 1.2k | 334 | 这是一个为 Claude Code 提供的 Browserbase SDK，包含多种自动化技能。支持浏览器交互、无服务器函数部署、网站调试、Cookie 同步、静态抓取及 AI UI 测试。通过 CLI 命令简化与 Browserbase 云平台的交互，提供反机器人、代理及全链路调试能力，提升开发效率。 |
| 7 | [simstudioai/sim](https://github.com/simstudioai/sim) | Build, deploy, and orchestrate AI agents. Sim is t... | TypeScript | 28.1k | 38 | Sim 是一个开源的 AI 代理构建与编排平台。它提供可视化画布来设计代理工作流，支持连接 1000+ 集成和 LLM。内置 Copilot 可通过自然语言辅助开发，并支持向量数据库以实现基于特定内容的问答。支持云端和多种自托管方式。 |
| 8 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 175.6k | 1.1k | Superpowers 是一个面向编码代理的软件开发生命周期框架。它通过一套可组合的技能，引导代理从需求分析、设计确认到实施计划制定，并利用子代理进行自主开发。强调 TDD、YAGNI 和 DRY 原则，旨在让 Claude 等代理能够独立高效地完成复杂编码任务。 |
| 9 | [Flowseal/zapret-discord-youtube](https://github.com/Flowseal/zapret-discord-youtube) | ... | Batchfile | 27.0k | 165 | 该项目旨在绕过针对 Discord 和 YouTube 的网络封锁。它使用 Batchfile 编写，依赖 WinDivert 驱动进行流量拦截与过滤。作者提醒 WinDivert 可能会被杀毒软件误报，需添加排除项。使用前需启用 Secure DNS。 |

[查看完整数据](api/github/2026-05-01.json)
<!-- END GITHUB TRENDING -->




