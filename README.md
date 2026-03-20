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

**最后更新**: 2026-03-20 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | A Claude Code plugin that shows what's happening -... | JavaScript | 9.5k | 1.1k | Claude HUD是用于Claude Code的实时状态监控插件，展示上下文使用、工具活动、代理状态及待办进度，提升开发可视化管理效率。 |
| 2 | [langchain-ai/open-swe](https://github.com/langchain-ai/open-swe) | An Open-Source Asynchronous Coding Agent... | Python | 7.6k | 640 | 开源异步编码代理框架，提供云沙盒、工具调用及自动PR创建功能，支持Slack/Linear集成与子代理编排，适用于企业内部自动化代码管理与系统集成。 |
| 3 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 101.5k | 2.9k | Superpowers 是一个基于可组合技能的代码代理框架，通过 TDD、YAGNI 和 DRY 原则实现自动化软件开发流程。它通过分步确认需求、生成实施计划并驱动子代理协作，使编码代理能自主完成任务而无需人工干预。 |
| 4 | [opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf) | PDF Parser for AI-ready data. Automate PDF accessi... | Java | 7.0k | 1.8k | PDF解析器，支持AI数据提取与可访问性自动化，提供Markdown/JSON/HTML结构化输出，内置OCR及复杂表格公式识别，符合无障碍标准。 |
| 5 | [louis-e/arnis](https://github.com/louis-e/arnis) | Generate any location from the real world in Minec... | Rust | 11.6k | 1.1k | Arnis项目通过处理OpenStreetMap和高程数据，在Minecraft中生成高精度的现实世界地理环境，支持城市、自然景观及建筑的定制化生成，具备模块化设计和跨平台特性。 |
| 6 | [newton-physics/newton](https://github.com/newton-physics/newton) | An open-source, GPU-accelerated physics simulation... | Python | 3.5k | 267 | Newton是基于NVIDIA Warp的开源GPU加速物理引擎，支持机器人学与模拟研究，提供OpenUSD集成、可微分计算及用户扩展功能，适用于高效可扩展的机器人仿真。 |
| 7 | [vas3k/TaxHacker](https://github.com/vas3k/TaxHacker) | Self-hosted AI accounting app. LLM analyzer for re... | TypeScript | 1.9k | 136 | TaxHacker 是一款自托管AI会计应用，通过LLM自动解析收据、发票和交易数据，支持自定义提示与分类。可提取产品名称、金额、日期等结构化信息并存储至数据库，提供货币转换、多项目管理及报表生成功能，简化税务处理流程。 |
| 8 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 34.0k | 579 | TradingAgents 是一个基于多智能体的金融交易框架，整合LLM模型进行市场分析与决策。通过分解交易任务为角色协作，支持多模型覆盖与动态策略优化，适用于金融研究与策略模拟。 |
| 9 | [openrocket/openrocket](https://github.com/openrocket/openrocket) | Model-rocketry aerodynamics and trajectory simulat... | Java | 2.2k | 132 | OpenRocket是一款基于Java的模型火箭空气动力学与轨迹模拟软件，提供火箭设计、3D可视化、六自由度飞行仿真及数据优化功能。支持实时飞行参数显示、多阶段模拟、文件导出（OBJ/SVG/ RockSim）及跨平台运行，适用于火箭设计验证与教学分析。 |

[查看完整数据](api/github/2026-03-20.json)
<!-- END GITHUB TRENDING -->








