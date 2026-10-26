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

**最后更新**: 2026-10-25 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [makecindy/cindy](https://github.com/makecindy/cindy) | Consider it done. The open-source AI agent that wo... | TypeScript | 4.9k | 675 | Cindy 是一个开源、开箱即用的 AI Agent，基于 TypeScript 开发。它支持本地运行，能整合多种模型和工具，驱动浏览器、电脑和手机完成实际工作。用户可自定义记忆、技能和自动化流程，通过 MCP 连接内部工具，实现高效的任务自动化和协作。 |
| 2 | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | Anti-AI-slop design skill for Claude Code, Cursor,... | CSS | 33.8k | 1.3k | 这是一个为 Claude Code、Cursor 和 Codex 设计的技能，旨在防止生成 AI 风格的网页。它提供 48 种独特的主题，确保设计符合人类审美，并通过对比度、事实核查等检查。它支持自定义页面、重定向和审计，帮助 AI 生成更自然、更专业的网页设计。 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 86.8k | 1.6k | VoiceStudio 是一个开源的本地化 ElevenLabs 替代品，支持语音克隆、视频配音、听写、转录和有声书制作，覆盖 646 种语言。它提供本地 API 和 MCP 支持，允许用户在本地硬件上运行工作流，保护隐私，并支持多种音频处理引擎。 |
| 4 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | Rust | 87.7k | 1.1k | Impeccable 是一个为 AI 编码代理提供设计指导的 Rust 工具。它包含 24 个命令、62 条确定性检测规则和实时浏览器迭代，旨在防止 AI 生成陈词滥调的设计，确保前端设计的一致性和高质量。 |
| 5 | [pollen-robotics/microduck](https://github.com/pollen-robotics/microduck) | A Tiny biped duck robot 🦆... | Rust | 11.7k | 647 | 这是一个基于 Rust 开发的 25cm 双足鸭子机器人，运行在 Rockchip RK3566 上。它利用强化学习策略控制 15 个舵机，实现了行走、滚动、抓取、站立及踢球等复杂动作。项目集成了完整的控制循环、蓝牙通信和 OTA 更新机制，支持从 MuJoCo/PPO 模拟环境导出的 ONNX 策略进行实时推理。 |
| 6 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 114.6k | 381 | 这是一个基于多智能体架构的 LLM 金融交易框架。它利用大语言模型（如 GPT-5.6、Claude 等）进行股票、加密货币的分析与决策，支持回测、情绪分析及 SEC 基本面数据读取。项目提供 CLI 工具，支持并行分析，旨在通过多智能体协作实现自动化量化交易。 |
| 7 | [Renhuai123/ziwei-doushu](https://github.com/Renhuai123/ziwei-doushu) | 紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据... | TypeScript | 7.6k | 199 | 基于倪海厦《天纪》体系的紫微斗数开源排盘引擎。提供完整排盘算法、四化系统及古籍数据，并发布包含67.5万张命盘的解读数据集。代码开源，数据集可下载，旨在通过技术手段普及传统命理学。 |
| 8 | [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | Vibe code with pi in a lightweight, real IDE that ... | TypeScript | 1.7k | 51 | ThinkRail 是一个基于 TypeScript 的智能 IDE，围绕 pi 编码代理构建。它通过隔离的 git worktree 工作区实现并行开发，支持 AI 自动生成代码、管理 PR 和审查。IDE 提供了 Monaco 编辑器、文件树和终端等完整功能，并能根据用户习惯自我定制，提升开发效率。 |
| 9 | [coollabsio/coolify](https://github.com/coollabsio/coolify) | An open-source, self-hostable PaaS alternative to ... | PHP | 64.4k | 152 | Coolify 是一个开源、自托管的 PaaS 平台，旨在替代 Vercel、Heroku 和 Netlify。它允许用户在自有服务器上轻松部署静态站点、全栈应用、数据库及超过 360 种一键服务。支持 Docker、Git 集成、自动化部署、反向代理和 HTTPS 管理，提供类似云平台的便捷性，同时保持对基础设施的完全控制。 |
| 10 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | A coding-agent skill for multi-phase security audi... | JavaScript | 46.9k | 2.9k | 这是一个由 Cloudflare 开发的编码代理技能，用于自动化多阶段安全审计。它通过六个阶段（侦察、狩猎、验证等）协调隔离代理，独立验证发现结果，并生成机器可读的报告。该技能支持增量审计，利用先前的发现来定位漏洞，确保发现结果的准确性和可追溯性。 |
| 11 | [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | Universal SEO skill for Claude Code. 26 sub-skills... | Python | 20.9k | 197 | 这是一个为 Claude Code 设计的开源 SEO 审计插件。它利用 19 个专业代理（如技术 SEO、内容编辑、Schema 工程师）在 10-15 分钟内对网站进行全面分析。涵盖技术 SEO、E-E-A-T、结构化数据、AI 搜索（GEO）及本地电商 SEO，提供可执行的行动计划，帮助提升 Google 排名和 AI 引用率。 |

[查看完整数据](api/github/2026-10-25.json)
<!-- END GITHUB TRENDING -->




