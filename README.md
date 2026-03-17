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

**最后更新**: 2026-03-17 | **成功**: 6 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 92.2k | 3.0k | Superpowers 是一个基于可组合技能的软件开发框架，通过代理驱动的工作流优化编码过程。它强调TDD、YAGNI和DRY原则，自动触发技能并分阶段完成需求分析、设计验证和代码实现，支持子代理协作开发。 |
| 2 | [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Master programming by recreating your favorite tec... | Markdown | 479.7k | 2.0k | 通过分步教程重构热门技术，涵盖3D渲染、AI模型、区块链等20+领域，以实践方式深化编程理解。 |
| 3 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 16.7k | 1.1k | GitNexus 是一个浏览器端代码知识图谱工具，通过本地解析GitHub仓库或ZIP文件生成交互式代码关系图谱，并集成Graph RAG代理实现深度代码分析。支持CLI与Web UI双模式，提供依赖关系、调用链等结构化数据，增强AI代码代理的准确性与可靠性。 |
| 4 | [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | Agent harness built with LangChain and LangGraph. ... | Python | 14.1k | 1.4k | 基于LangChain和LangGraph的AI代理框架，提供任务规划、文件系统操作、子代理生成和上下文管理功能，支持快速构建复杂代理任务系统。 |
| 5 | [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | A Claude Code plugin that shows what's happening -... | JavaScript | 5.6k | 454 | Claude HUD是用于Claude Code的实时状态监控插件，展示上下文使用、工具活动、代理状态及待办进度，提升开发过程可见性。支持项目路径、上下文健康度、文件操作追踪等功能，通过终端直接显示无需额外窗口。 |
| 6 | [cloudflare/workerd](https://github.com/cloudflare/workerd) | The JavaScript / Wasm runtime that powers Cloudfla... | C++ | 7.8k | 21 | workerd是Cloudflare Workers的JavaScript/Wasm运行时，支持自托管应用、本地开发和HTTP代理。基于Web标准，采用纳米服务架构实现高效解耦部署，具备向后兼容性，但需注意安全性配置。 |

[查看完整数据](api/github/2026-03-17.json)
<!-- END GITHUB TRENDING -->








