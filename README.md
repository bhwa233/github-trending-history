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

**最后更新**: 2026-01-11 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | The open source coding agent.... | TypeScript | 61.6k | 2.1k | 开源AI编码代理，提供开发模式（build）与分析模式（plan）切换，支持多平台安装及桌面应用，适用于代码生成、分析与规划场景。 |
| 2 | [obra/superpowers](https://github.com/obra/superpowers) | Claude Code superpowers: core skills library... | Shell | 16.9k | 702 | Superpowers为Claude Code编码代理提供自动化软件开发工作流，通过可组合技能库实现需求分析、设计拆解、TDD驱动开发及子代理协作，支持高效工程化开发流程。 |
| 3 | [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | Autonomous AI development loop for Claude Code wit... | Shell | 1.5k | 357 | Ralph for Claude Code 实现了自主AI开发循环，支持智能退出检测、速率限制和错误防护，具备会话连续性与tmux集成，适用于自动化代码迭代与持续集成场景。 |
| 4 | [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI tool for configuring and monitoring Claude Cod... | Python | 15.6k | 131 | 提供Claude Code的CLI配置工具，支持快速部署AI开发模板，集成MCP外部服务、自定义命令与自动化钩子，提升开发效率。 |
| 5 | [makeplane/plane](https://github.com/makeplane/plane) | 🔥🔥🔥 Open-source Jira, Linear, Monday, and Click... | TypeScript | 43.5k | 317 | Plane是一款开源项目管理平台，提供任务管理、冲刺周期跟踪、模块划分、自定义视图、AI辅助页面和实时分析功能，支持自托管和云部署，旨在替代Jira等商业工具。 |
| 6 | [twitter/twemoji](https://github.com/twitter/twemoji) | Emoji for everyone. https://twemoji.twitter.com/... | HTML | 17.4k | 55 | Twemoji是Twitter提供的Unicode表情库，支持跨平台标准Emoji显示。提供CDN接入和DOM解析API，遵循Unicode规范，适用于需要统一表情显示的网页场景。 |
| 7 | [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | The Open-Source Multimodal AI Agent Stack: Connect... | TypeScript | 22.7k | 471 | UI-TARS-desktop是字节跳动开源的多模态AI代理桌面应用，支持GUI代理与视觉交互，整合终端、浏览器及实际工具，实现类人任务处理。提供本地与远程计算机操作功能，基于TypeScript开发。 |
| 8 | [twentyhq/twenty](https://github.com/twentyhq/twenty) | Building a modern alternative to Salesforce, power... | TypeScript | 38.6k | 343 | twentyhq/twenty 是一个开源CRM项目，旨在提供成本更低、可自定义的Salesforce替代方案。支持布局自定义、工作流自动化、权限管理及多数据类型管理，强调社区驱动和开放生态，解决传统CRM价格高昂和数据锁定问题。 |
| 9 | [home-assistant/home-assistant.io](https://github.com/home-assistant/home-assistant.io) | 📘 Home Assistant User documentation... | HTML | 7.9k | 148 | Home Assistant官方文档站点，提供用户指南、开发文档及多环境访问链接（生产/测试/开发）。包含本地预览搭建、PR预览部署及优化网站生成速度的工具链。 |
| 10 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Shell | 55.2k | 602 | Claude Code 是一款终端集成的代理编程工具，支持通过自然语言命令执行代码任务、解释复杂代码并管理 Git 流程，提升开发效率。提供插件扩展功能，兼容多平台安装。 |
| 11 | [C4illin/ConvertX](https://github.com/C4illin/ConvertX) | 💾 Self-hosted online file converter. Supports 100... | TypeScript | 14.6k | 312 | ConvertX 是一个自托管的在线文件转换工具，支持1000+种格式转换，提供多文件处理、密码保护和多账户管理功能。基于TypeScript开发，采用Bun和Elysia框架，可部署于本地或HTTPS环境。 |
| 12 | [simstudioai/sim](https://github.com/simstudioai/sim) | Open-source platform to build and deploy AI agent ... | TypeScript | 25.4k | 145 | 开源AI代理工作流构建平台，支持可视化流程设计、向量数据库集成和本地模型部署，提供云托管与自托管方案，可通过自然语言生成节点并优化工作流。 |
| 13 | [gyoridavid/ai_agents_az](https://github.com/gyoridavid/ai_agents_az) | ... | Python | 2.4k | 340 | 该项目似乎是一个AI代理相关项目，但项目描述和README内容不完整，缺乏具体功能说明。可能与GitHub工具集成有关，但未明确技术细节。 |

[查看完整数据](api/github/2026-01-11.json)
<!-- END GITHUB TRENDING -->








