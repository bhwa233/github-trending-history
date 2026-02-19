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

**最后更新**: 2026-02-19 | **成功**: 8 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 55.3k | 886 | Superpowers是一个基于可组合技能的软件开发框架，通过代理自动化流程提升编码效率。它强调TDD、YAGNI和DRY原则，支持从需求分析到代码实现的全流程自动化，减少人工干预。 |
| 2 | [RichardAtCT/claude-code-telegram](https://github.com/RichardAtCT/claude-code-telegram) | A powerful Telegram bot that provides remote acces... | Python | 923 | 174 | 该项目是一个Telegram机器人，将Claude Code集成到Telegram中，支持开发者通过自然语言交互实现代码分析、编辑和项目管理，具备会话持久化、安全认证及跨平台远程访问功能。 |
| 3 | [open-mercato/open-mercato](https://github.com/open-mercato/open-mercato) | AI‑supportive CRM / ERP foundation framework — bui... | TypeScript | 692 | 56 | Open Mercato 是基于 TypeScript 的企业级 CRM/ERP 开发框架，提供模块化架构和可扩展性，支持 AI 驱动的客户管理、订单处理、生产协调等核心功能。内置多租户、动态表单和权限控制，适用于需要高度定制化的 SaaS 应用和业务系统开发。 |
| 4 | [harvard-edge/cs249r_book](https://github.com/harvard-edge/cs249r_book) | Introduction to Machine Learning Systems... | JavaScript | 20.2k | 660 | 该项目是AI系统工程的开源学习资源，包含教材、TinyTorch框架、硬件套件和实验模块，旨在教授如何构建高效、可靠的智能系统。通过理论结合实践，覆盖从模型开发到边缘设备部署的全流程。 |
| 5 | [HailToDodongo/pyrite64](https://github.com/HailToDodongo/pyrite64) | N64 Game-Engine and Editor using libdragon & tiny3... | C++ | 1.7k | 605 | 基于Libdragon和tiny3d的N64游戏引擎与编辑器，支持3D模型导入、HDR+Bloom/大纹理渲染、节点图脚本等功能，专注于真实硬件兼容性。 |
| 6 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | Your own personal AI assistant. Any OS. Any Platfo... | TypeScript | 211.8k | 3.4k | OpenClaw是可在本地设备运行的个人AI助手，支持多平台消息通道（如WhatsApp、Slack、Discord等）及跨系统控制。提供自定义工作流、模型集成与实时Canvas渲染，强调本地化、快速响应和持续运行。 |
| 7 | [freemocap/freemocap](https://github.com/freemocap/freemocap) | Free Motion Capture for Everyone 💀✨... | Python | 5.2k | 141 | FreeMoCap是一个开源、低成本的动作捕捉系统，支持科研、教育和培训场景。通过Python实现，提供GUI界面和详细文档，可灵活部署于不同硬件平台。 |
| 8 | [p-e-w/heretic](https://github.com/p-e-w/heretic) | Fully automatic censorship removal for language mo... | Python | 8.5k | 657 | Heretic是一个自动去除语言模型审查机制的工具，通过方向性消融和TPE参数优化，在无需人工干预的情况下降低模型的拒绝率并最小化对原始模型性能的影响。 |

[查看完整数据](api/github/2026-02-19.json)
<!-- END GITHUB TRENDING -->








