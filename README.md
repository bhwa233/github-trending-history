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

**最后更新**: 2026-08-25 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | Prompt as Code | GPT-Image2 工业级提示词引擎与模板库，530+ 个案例逆... | JavaScript | 17.6k | 1.7k | 这是一个基于 GPT-Image2 的工业级提示词引擎与模板库，包含 500+ 逆向工程案例和 20+ 工业级模板。项目提供可视化网站浏览、社区交流及 API 集成功能，支持 Prompt as Code，旨在帮助用户高效生成高质量 AI 图像。 |
| 2 | [anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community) | Community plugin marketplace for Claude Cowork and... | Python | 1.7k | 350 | 这是一个Anthropic官方维护的社区插件市场只读镜像，用于托管Claude Cowork和Claude Code的第三方插件。项目包含marketplace.json文件，每晚同步经过安全扫描的插件列表。用户可通过特定命令安装这些插件，所有提交必须通过官方渠道进行。 |
| 3 | [apache/maka](https://github.com/apache/maka) | Apache Maka (Incubating) is a local-first AI agent... | TypeScript | 3.3k | 538 | Apache Maka 是一个本地优先的 AI 代理工作空间，专注于数据隐私与可追溯性。它通过单一 Runtime Host 运行代理，将模型消息、工具调用及结果记录为追加日志，支持云端或本地模型接入。项目提供桌面与终端界面，处于 Apache 孵化阶段，旨在为真实工作流提供安全、可恢复的执行环境。 |
| 4 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 100.2k | 191 | TradingAgents 是一个基于 Python 的多智能体 LLM 金融交易框架。它利用 LangGraph 构建结构化智能体（研究经理、交易员、投资组合经理），支持多种大模型（GPT-5, Claude 4 等）和数据源。项目提供回测、情绪分析和代理间协作功能，旨在通过 AI 实现自动化金融决策。 |
| 5 | [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Self-organizing AI second brain for Obsidian + Cla... | Python | 12.7k | 810 | 这是一个基于 Claude Code 和 Obsidian 的本地优先知识管理系统。它利用 AI 将各种源材料转化为链接的 Markdown 笔记，构建个人知识图谱。项目强调数据所有权，所有文件均以纯 Markdown 格式存储，支持可视化探索，旨在打造一个自组织的、可重用的第二大脑。 |
| 6 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 48.9k | 572 | 这是一个全面的 AI 工程自学课程，包含 511 个课程和 20 个阶段，总计约 329 小时。项目涵盖 Python、TypeScript、Rust 和 Julia，强调“动手构建”而非仅理论学习。学生将学习构建生产级 LLM 应用、智能体及 MCP 服务器，并提供多语言支持。 |
| 7 | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Your Personal AI super intelligence. A brain that ... | Rust | 37.7k | 541 | OpenHuman 是一个基于 Rust 的本地优先个人 AI 超级智能。它具备强大的记忆系统（基于 SQLite 和 Obsidian），能构建持久化的个人知识库；同时作为编排器和研究员，能管理代理舰队、执行复杂工作流并进行深度网络研究。项目强调隐私和本地化，通过 TokenJuice 技术优化成本。 |
| 8 | [basecamp/omarchy](https://github.com/basecamp/omarchy) | Beautiful, Modern & Opinionated Linux... | Shell | 31.2k | 1.1k | 这是一个基于 Shell 的现代化 Linux 发行版或配置管理工具，强调美观与特定设计理念。项目集成了安装脚本、配置管理、主题定制以及 AI 代理支持，旨在为用户提供开箱即用且高度可定制的 Linux 体验。 |
| 9 | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 100+ AI Agents, Agent Skills and RAG Apps - Free a... | Python | 134.2k | 161 | 该项目汇集了100+个开源AI代理、技能及RAG应用模板，支持Claude、GPT等多种大模型。提供即插即用的Agent Skills（如“项目墓地”）和单文件Starter Agents，帮助开发者快速构建、测试和部署AI应用。代码经过安全测试，遵循Apache-2.0协议，适合个人或商业使用。 |
| 10 | [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 207.2k | 828 | 这是一个基于 Andrej Karpathy 关于 LLM 编码陷阱的见解，旨在提高 Claude Code 效率的单一 CLAUDE.md 文件。它强调四个核心原则：思考前先编码、简单优先、外科手术式修改和目标驱动执行，旨在防止错误假设、过度复杂化代码及意外更改无关代码，从而提升 AI 编码质量。 |
| 11 | [openai/codex](https://github.com/openai/codex) | Lightweight coding agent that runs in your termina... | Rust | 118.1k | 1.2k | Codex CLI 是 OpenAI 推出的轻量级本地编码代理，使用 Rust 编写。它支持在终端运行，提供 CLI、IDE 插件和桌面应用。用户可以通过 npm、Homebrew 或官方脚本安装，支持 macOS 和 Linux，并与 ChatGPT 账户集成以进行代码生成和辅助。 |
| 12 | [marin-community/marin](https://github.com/marin-community/marin) | Open-source framework for the research and develop... | Python | 2.1k | 277 | Marin 是一个开源的基础模型研究框架与社区，专注于大型语言模型的训练全流程。它强调开放开发，记录从数据到模型的完整过程及实验决策。项目支持音频、DNA等模型构建，致力于大规模混合专家模型的前沿研究。 |
| 13 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 111.0k | 944 | Ponytail 是一个让 AI 代理像懒惰的高级开发人员一样思考的技能。它通过鼓励编写最少的代码（YAGNI 原则）来显著减少代码行数、成本和时间。实测显示，相比无技能基准，它能减少 54% 的代码量、20% 的成本并提升 27% 的速度，同时保持 100% 的安全性。它适用于需要高效、简洁代码生成的场景。 |
| 14 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 34.1k | 47 | Anthropic 官方维护的 Claude Code 插件目录，托管高质量插件。项目包含内部插件和外部插件，提供标准化的插件结构规范和安装方式。用户可安全安装插件以扩展 Claude Code 功能，开发者可提交符合标准的插件。 |
| 15 | [asciimoo/hister](https://github.com/asciimoo/hister) | Your own search engine... | Go | 2.8k | 166 | Hister 是一个基于 Go 的私有搜索引擎，专注于本地运行与隐私保护。它支持全文索引网页内容和本地文件，提供 Web、终端及 MCP 客户端接口。用户可通过浏览器扩展自动抓取历史，利用强大的查询语法或可选语义搜索快速定位信息，适合个人知识库管理及 AI 助手集成。 |

[查看完整数据](api/github/2026-08-25.json)
<!-- END GITHUB TRENDING -->




