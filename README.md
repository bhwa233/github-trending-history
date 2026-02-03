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

**最后更新**: 2026-02-03 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 20.1k | 1.7k | Claude Code插件，通过AI压缩并持久化存储编码会话上下文，支持跨会话知识延续与智能检索，提供隐私控制和可视化界面。 |
| 2 | [masoncl/review-prompts](https://github.com/masoncl/review-prompts) | AI review prompts... | Python | 316 | 42 | 提供针对Linux内核和systemd的AI辅助代码审查提示，支持自动上下文加载和快捷命令操作，提升代码审查效率。 |
| 3 | [openai/skills](https://github.com/openai/skills) | Skills Catalog for Codex... | Python | 3.0k | 307 | 该项目是Codex的技能目录，提供可重复使用的AI代理技能包。通过标准化的指令、脚本和资源，支持开发者创建、安装和管理任务执行技能，包含自动安装机制和自定义技能开发功能。 |
| 4 | [automazeio/ccpm](https://github.com/automazeio/ccpm) | Project management system for Claude Code using Gi... | Shell | 6.7k | 248 | 基于GitHub Issues与Git工作树的并行化项目管理系统，通过规范驱动开发实现需求到代码的全流程追踪，支持多AI代理并行执行与任务分解。 |
| 5 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 43.5k | 866 | Superpowers 是一个基于代理的软件开发框架，通过可组合的技能和自动化工作流提升开发效率。它强调TDD、YAGNI和DRY原则，支持代码代理自动生成设计文档、实施计划并驱动子代理协作开发，减少人工干预。 |
| 6 | [virattt/dexter](https://github.com/virattt/dexter) | An autonomous agent for deep financial research... | TypeScript | 10.1k | 219 | Dexter是用于深度金融研究的自主代理，具备任务规划、实时数据分析和自我验证能力，可分解复杂金融问题并生成数据驱动的解决方案。 |
| 7 | [karpathy/nanochat](https://github.com/karpathy/nanochat) | The best ChatGPT that $100 can buy.... | Python | 42.0k | 443 | nanochat是一个简化的大语言模型训练框架，可在单GPU节点运行，涵盖分词、预训练、微调、评估、推理及聊天UI。通过优化，训练GPT-2级模型成本降至约73美元，适合研究和低成本部署。 |
| 8 | [kovidgoyal/calibre](https://github.com/kovidgoyal/calibre) | The official source code repository for the calibr... | Python | 23.9k | 140 | calibre是一款跨平台电子书管理工具，支持格式转换、元数据编辑、设备同步及报纸下载等功能，采用Python开发，提供图形化界面和丰富的管理功能。 |
| 9 | [OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev) | ChatDev 2.0: Dev All through LLM-powered Multi-Age... | Python | 29.8k | 475 | ChatDev 2.0 是基于大语言模型的零代码多智能体协作平台，支持用户通过配置构建定制化多智能体系统，无需编程即可实现数据可视化、3D生成和深度研究等复杂场景。ChatDev 1.0 作为遗留版本，专注于软件开发全生命周期自动化。 |
| 10 | [pedramamini/Maestro](https://github.com/pedramamini/Maestro) | Agent Orchestration Command Center... | TypeScript | 1.5k | 265 | Maestro是一款AI代理编排控制中心，支持跨平台桌面操作，提供多AI工具并行执行、Git工作树隔离、自动化任务流水线及移动远程控制功能，提升高效开发与项目管理效率。 |
| 11 | [vm0-ai/vm0](https://github.com/vm0-ai/vm0) | the easiest way to run natural language-described ... | TypeScript | 683 | 56 | vm0-ai/vm0 是一个基于TypeScript的自然语言工作流自动化工具，允许用户通过自然语言描述直接生成和执行工作流程，集成AI能力实现代码自动创建与执行。 |

[查看完整数据](api/github/2026-02-03.json)
<!-- END GITHUB TRENDING -->








