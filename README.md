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

**最后更新**: 2026-02-17 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [p-e-w/heretic](https://github.com/p-e-w/heretic) | Fully automatic censorship removal for language mo... | Python | 7.2k | 666 | Heretic是一款自动化语言模型审查移除工具，通过方向性消融与Optuna优化算法，在无需人工干预的情况下降低模型拒绝率并最小化对原始模型能力的损害，实现高效去审查化。 |
| 2 | [seerr-team/seerr](https://github.com/seerr-team/seerr) | Open-source media request and discovery manager fo... | TypeScript | 9.3k | 283 | seerr-team/seerr是开源媒体请求管理工具，支持Jellyfin、Plex、Emby，提供请求管理、库扫描、权限控制、通知推送及移动适配功能，集成Sonarr/Radarr并支持多数据库。 |
| 3 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 53.6k | 716 | Superpowers 是一个基于可组合技能的软件开发框架，通过智能代理实现自动化开发流程。强调TDD、YAGNI和DRY原则，支持需求确认、分块设计、自动规划与子代理协作开发，提升编码效率与质量。 |
| 4 | [steipete/gogcli](https://github.com/steipete/gogcli) | Google Suite CLI: Gmail, GCal, GDrive, GContacts.... | Go | 3.9k | 469 | gogcli 是一个用 Go 编写的多功能 Google 套件命令行工具，支持 Gmail、日历、驱动、联系人等核心功能。提供 JSON 输出、多账户管理及最小权限认证，适用于自动化脚本和云端服务管理。 |
| 5 | [alibaba/zvec](https://github.com/alibaba/zvec) | A lightweight, lightning-fast, in-process vector d... | C++ | 4.5k | 1.5k | Zvec是阿里巴巴开源的嵌入式向量数据库，以低延迟和高效率著称，支持稠密/稀疏向量混合搜索，无需服务器配置即可快速集成到应用中，适用于实时相似性检索场景。 |
| 6 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | Your own personal AI assistant. Any OS. Any Platfo... | TypeScript | 205.2k | 4.2k | OpenClaw是基于TypeScript的个人AI助手，支持多平台消息通道和设备交互，强调本地化部署与实时交互能力。提供跨平台消息推送、语音交互及Canvas渲染功能，适用于需要私有化部署的AI助手场景。 |
| 7 | [SynkraAI/aios-core](https://github.com/SynkraAI/aios-core) | Synkra AIOS: AI-Orchestrated System for Full Stack... | JavaScript | 1.2k | 194 | Synkra AIOS 是一个基于AI的全栈开发框架，通过代理实现自我修改和自动化。支持多种IDE/CLI集成，提供敏捷开发流程和跨领域应用能力，强调AI驱动的代码生成与系统编排。 |
| 8 | [ashishps1/awesome-system-design-resources](https://github.com/ashishps1/awesome-system-design-resources) | Learn System Design concepts and prepare for inter... | Java | 32.8k | 457 | 提供系统设计学习资源和面试准备材料的Java项目，包含设计文档、架构图和实现示例，帮助开发者掌握分布式系统设计核心概念。 |
| 9 | [steipete/summarize](https://github.com/steipete/summarize) | Point at any URL/YouTube/Podcast or file. Get the ... | TypeScript | 3.4k | 117 | 提供URL、媒体文件及播客的快速摘要工具，支持CLI命令行和Chrome/Firefox浏览器扩展，具备媒体内容识别、OCR文字提取、流式输出和多模型支持。 |
| 10 | [hummingbot/hummingbot](https://github.com/hummingbot/hummingbot) | Open source software that helps you create and dep... | Python | 17.0k | 565 | Hummingbot是基于Python的开源高频加密货币交易框架，支持多交易所自动化交易策略开发与部署，提供策略回测、实时交易和社区共享功能，已实现超340亿美元交易量。 |
| 11 | [anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts) | A collection of projects designed to help develope... | Python | 14.5k | 102 | 该项目提供多个基于Claude API的快速启动示例，涵盖客户支持、金融分析、计算机控制、浏览器自动化及自主编码场景，帮助开发者快速构建可部署应用。 |
| 12 | [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI tool for configuring and monitoring Claude Cod... | Python | 20.7k | 110 | 提供Claude Code的CLI配置工具，包含100+AI代理、命令、MCPs等模板，支持快速安装开发栈和交互式配置，提升开发效率。 |
| 13 | [OpenCTI-Platform/opencti](https://github.com/OpenCTI-Platform/opencti) | Open Cyber Threat Intelligence Platform... | TypeScript | 8.4k | 13 | OpenCTI是一个基于STIX2标准的开源网络威胁情报管理平台，支持结构化存储技术及非技术威胁信息，提供GraphQL API和前端界面，可集成MISP、TheHive、MITRE ATT&CK等工具，实现数据导入导出与关联分析。 |

[查看完整数据](api/github/2026-02-17.json)
<!-- END GITHUB TRENDING -->








