# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 使用 Cloudflare Workers AI 生成项目核心功能总结、技术栈和适用场景
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
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct)
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 配置环境变量
export CLOUDFLARE_ACCOUNT_ID=your_account_id
export CLOUDFLARE_API_KEY=your_api_key

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

**最后更新**: 2026-02-10 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [google/langextract](https://github.com/google/langextract) | A Python library for extracting structured informa... | Python | 28.3k | 2.1k | LangExtract是一个Python库，利用大语言模型从非结构化文本中提取结构化信息，支持精确来源定位、交互式可视化和多模型接入，适用于医疗文档等长文本的高效信息提取。 |
| 2 | [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | Free, local, open-source 24/7 Cowork and OpenClaw ... | TypeScript | 14.4k | 629 | AionUi为多种AI命令行工具提供统一图形界面，支持本地部署与24/7访问，具备多模型兼容、本地数据存储、跨平台会话管理及WebUI/聊天平台集成，提升AI工具使用便捷性与安全性。 |
| 3 | [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | Fully autonomous AI hacker to find actual exploits... | TypeScript | 19.7k | 3.6k | Shannon是基于AI的全自动渗透测试工具，可自主检测Web应用漏洞并执行真实攻击验证风险，解决持续集成中的安全测试滞后问题，支持源码级漏洞挖掘与合规验证。 |
| 4 | [github/gh-aw](https://github.com/github/gh-aw) | GitHub Agentic Workflows... | Go | 1.3k | 499 | GitHub Agentic Workflows允许用户通过自然语言Markdown编写代理工作流，并在GitHub Actions中安全运行。项目强调安全机制，如默认只读权限、沙箱执行、输入消毒和网络隔离，确保AI代理在受控环境中操作，适用于自动化代码审查、持续集成等场景。 |
| 5 | [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | Official Claude Code compound engineering plugin... | TypeScript | 8.2k | 406 | 提供Claude Code工程插件市场及工具转换方案，支持将插件转为OpenCode/Codex格式，实现工程工作流自动化与配置同步。 |
| 6 | [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | 基于多智能体LLM的中文金融交易框架 - TradingAgents中文增强版... | Python | 16.7k | 499 | 基于多智能体LLM的中文金融交易框架，支持A股/港股/美股分析，提供技术指标计算、基本面分析、模拟交易及多模型配置管理，适用于AI金融教学与策略研究。 |
| 7 | [gitbutlerapp/gitbutler](https://github.com/gitbutlerapp/gitbutler) | The GitButler version control client, backed by Gi... | Rust | 19.0k | 260 | GitButler是一款基于Git的现代版本控制客户端，提供GUI和CLI工具。核心功能包括堆叠分支、并行分支管理、可视化提交操作、撤销时间线及AI辅助工作流，提升Git操作效率与易用性。 |
| 8 | [carlvellotti/claude-code-pm-course](https://github.com/carlvellotti/claude-code-pm-course) | Interactive course teaching Product Managers how t... | MDX | 793 | 46 | 交互式课程，帮助产品经理掌握Claude Code工具链，涵盖基础操作、高级场景及AI协作流程，包含模块化教学与实战练习 |
| 9 | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Collection of awesome LLM apps with AI Agents and ... | Python | 93.6k | 450 | 该项目收集了基于LLM的多种AI应用，涵盖RAG、AI代理、多代理团队等技术，整合OpenAI、Anthropic、Gemini及开源模型，适用于数据分析、医疗影像、金融、内容生成等领域。 |
| 10 | [drawdb-io/drawdb](https://github.com/drawdb-io/drawdb) | Free, simple, and intuitive online database diagra... | JavaScript | 36.3k | 166 | drawDB 是一个免费的在线数据库设计工具，提供直观的图形化界面用于创建数据库模式图并自动生成SQL代码，支持实时协作与跨平台访问。 |
| 11 | [pydantic/monty](https://github.com/pydantic/monty) | A minimal, secure Python interpreter written in Ru... | Rust | 4.5k | 848 | Monty是用Rust开发的小型安全Python解释器，专为AI设计，支持快速执行LLM生成代码。具备环境隔离、资源控制、类型检查及异步执行功能，适用于需要高效安全运行Python代码的场景。 |
| 12 | [cheahjs/free-llm-api-resources](https://github.com/cheahjs/free-llm-api-resources) | A list of free LLM inference resources accessible ... | Python | 8.7k | 108 | 该项目整理了多个提供免费LLM推理API的服务资源，涵盖模型调用限额、试用额度及合规使用说明，便于开发者获取低成本或免费的AI模型调用渠道。 |
| 13 | [Jeffallan/claude-skills](https://github.com/Jeffallan/claude-skills) | 65 Specialized Skills for Full-Stack Developers. T... | Python | 740 | 33 | 提供66个全栈开发技能与9个工作流，支持Claude代码助手实现上下文感知的自动技能激活和多技能协作，覆盖开发、测试、安全、DevOps等场景，通过工作流管理项目生命周期并集成Atlassian工具。 |
| 14 | [virattt/dexter](https://github.com/virattt/dexter) | An autonomous agent for deep financial research... | TypeScript | 14.1k | 735 | Dexter是一个基于TypeScript的自主财务研究代理，通过任务规划、自我反思和实时市场数据进行深度金融分析。支持智能任务分解、自动数据获取、结果验证及多API集成，适用于复杂金融问题的自动化研究与决策支持。 |

[查看完整数据](api/github/2026-02-10.json)
<!-- END GITHUB TRENDING -->








