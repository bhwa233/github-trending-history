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

**最后更新**: 2026-02-16 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [alibaba/zvec](https://github.com/alibaba/zvec) | A lightweight, lightning-fast, in-process vector d... | C++ | 3.5k | 1.1k | Zvec是阿里巴巴开源的嵌入式向量数据库，基于Proxima引擎打造，支持稠密/稀疏向量混合搜索，提供毫秒级百亿级向量检索能力，无需服务器配置即可快速集成到应用中。 |
| 2 | [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) | A high-performance algorithmic trading platform an... | Rust | 19.8k | 545 | NautilusTrader 是一个用 Rust 开发的高性能算法交易平台，支持事件驱动的策略回测与实时交易部署。提供跨平台兼容性、多种资产类别支持及模块化接口，解决研究与生产环境一致性问题，适用于高频交易场景。 |
| 3 | [rowboatlabs/rowboat](https://github.com/rowboatlabs/rowboat) | Open-source AI coworker, with memory... | TypeScript | 7.3k | 701 | Rowboat是一款本地优先的开源AI协作工具，通过整合邮件、会议记录等数据构建知识图谱，支持生成文档、会议准备、知识图谱可视化编辑等功能，强调隐私和上下文记忆。 |
| 4 | [steipete/gogcli](https://github.com/steipete/gogcli) | Google Suite CLI: Gmail, GCal, GDrive, GContacts.... | Go | 3.5k | 636 | gogcli 是一个功能丰富的 Google Workspace 命令行工具，支持 Gmail、日历、Drive、联系人等核心服务的管理与自动化操作，提供 JSON 输出、多账户支持及最小权限认证，适用于脚本化处理 Google 服务场景。 |
| 5 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | Your own personal AI assistant. Any OS. Any Platfo... | TypeScript | 201.5k | 3.9k | OpenClaw是跨平台个人AI助手，支持多消息渠道集成与本地运行。可通过多种操作系统和应用（如WhatsApp、Slack、Discord等）交互，具备实时Canvas控制功能，强调快速、本地化和始终在线体验。 |
| 6 | [SynkraAI/aios-core](https://github.com/SynkraAI/aios-core) | Synkra AIOS: AI-Orchestrated System for Full Stack... | JavaScript | 978 | 205 | Synkra AIOS 是一个基于AI的全栈开发框架，支持自修改开发流程，整合多IDE/CLI工具，提供自动化上下文管理、守则审计及跨平台开发能力，适用于需要AI驱动的敏捷开发场景。 |
| 7 | [letta-ai/letta-code](https://github.com/letta-ai/letta-code) | The memory-first coding agent... | TypeScript | 1.4k | 51 | Letta Code 是基于 Letta API 的内存优先代码框架，支持跨模型持久化代理，实现长期记忆与学习能力，提升代码开发效率。 |
| 8 | [ruvnet/wifi-densepose](https://github.com/ruvnet/wifi-densepose) | Production-ready implementation of InvisPose - a r... | Python | 6.8k | 344 | 基于WiFi的实时人体姿态估计系统，通过CSI数据实现无摄像头隐私保护追踪，支持多人体检测与低延迟处理，适用于医疗、智能家居等场景。 |
| 9 | [seerr-team/seerr](https://github.com/seerr-team/seerr) | Open-source media request and discovery manager fo... | TypeScript | 9.1k | 200 | seerr 是一个开源媒体请求管理工具，支持 Jellyfin、Plex、Emby 平台，提供请求审批、库扫描、权限管理、通知推送等功能，兼容 Sonarr/Radarr 服务，适配多种数据库。 |
| 10 | [hummingbot/hummingbot](https://github.com/hummingbot/hummingbot) | Open source software that helps you create and dep... | Python | 16.5k | 315 | Hummingbot是一个开源框架，用于设计和部署加密货币高频交易机器人，支持多交易所自动化交易策略，具备社区驱动的代码贡献和知识共享机制，已实现超340亿美元交易量。 |

[查看完整数据](api/github/2026-02-16.json)
<!-- END GITHUB TRENDING -->








