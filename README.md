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

**最后更新**: 2026-02-15 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) | A high-performance algorithmic trading platform an... | Rust | 19.3k | 221 | NautilusTrader 是一个用 Rust 开发的高性能算法交易平台，支持事件驱动的策略回测与实时交易部署。提供多资产类别（外汇、加密货币、股票等）交易支持，强调 Python 原生环境一致性，具备高吞吐低延迟特性，适用于高频交易场景。 |
| 2 | [steipete/gogcli](https://github.com/steipete/gogcli) | Google Suite CLI: Gmail, GCal, GDrive, GContacts.... | Go | 2.9k | 639 | gogcli 是一个功能丰富的Google Workspace命令行工具，支持Gmail、日历、Drive、联系人等核心服务。提供JSON输出、多账户管理、最小权限认证及邮件跟踪功能，适用于自动化脚本和云端服务管理。 |
| 3 | [rowboatlabs/rowboat](https://github.com/rowboatlabs/rowboat) | Open-source AI coworker, with memory... | TypeScript | 6.8k | 819 | Rowboat是一款本地优先的开源AI协作工具，通过连接邮件和会议记录构建长期知识图谱，支持生成文档、会议准备、知识图谱可视化编辑等功能，所有操作均在本地完成确保隐私。 |
| 4 | [github/gh-aw](https://github.com/github/gh-aw) | GitHub Agentic Workflows... | Go | 2.7k | 213 | GitHub Agentic Workflows允许用户通过自然语言Markdown编写代理工作流，并在GitHub Actions中安全运行。提供沙箱执行、输入消毒、只读权限等安全机制，适用于自动化仓库任务及敏感操作管控。 |
| 5 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 25.4k | 353 | ChromeDevTools-MCP 是面向AI编码助手的浏览器控制工具，通过Chrome DevTools实现实时浏览器调试、性能分析与自动化操作，支持网络请求分析、截图、控制台监控及基于Puppeteer的可靠自动化流程。 |
| 6 | [alibaba/zvec](https://github.com/alibaba/zvec) | A lightweight, lightning-fast, in-process vector d... | C++ | 2.3k | 729 | Zvec是阿里巴巴开源的嵌入式向量数据库，支持高速向量搜索和混合查询。具备低延迟、易部署特性，可直接嵌入应用中，兼容稠密/稀疏向量及多类型查询，适用于需要实时相似性搜索的场景。 |
| 7 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | Your own personal AI assistant. Any OS. Any Platfo... | TypeScript | 197.0k | 2.5k | OpenClaw是自托管的个人AI助手，支持多平台消息渠道（如WhatsApp、Telegram、Discord等）和跨设备语音交互，提供本地化、实时的AI服务。通过CLI工具快速部署，兼容多种模型和认证方式。 |
| 8 | [moonshine-ai/moonshine](https://github.com/moonshine-ai/moonshine) | Fast and accurate automatic speech recognition (AS... | C | 3.8k | 160 | Moonshine-ai/moonshine 是一个面向边缘设备的高精度自动语音识别（ASR）工具包，支持本地化实时语音处理，具备低延迟、隐私保护和多平台集成能力。提供从26MB轻量模型到高精度大模型的多版本选择，覆盖多种语言及语音任务如语音转录、说话人识别和指令识别。 |
| 9 | [brave/brave-browser](https://github.com/brave/brave-browser) | Brave browser for Android, iOS, Linux, macOS, Wind... | - | 21.5k | 23 | Brave浏览器多平台源代码仓库，基于Chromium开发，包含广告拦截引擎和跨平台构建工具，支持Windows、macOS、Linux、Android及iOS系统。 |
| 10 | [SynkraAI/aios-core](https://github.com/SynkraAI/aios-core) | Synkra AIOS: AI-Orchestrated System for Full Stack... | JavaScript | 780 | 168 | Synkra AIOS 是一个基于AI的全栈开发框架，采用CLI优先架构，通过代理协作实现自动化开发流程。核心功能包括智能规划、上下文感知的开发转换及实时可观测性监控，支持软件开发全流程的AI协同与自动化。 |
| 11 | [ruvnet/wifi-densepose](https://github.com/ruvnet/wifi-densepose) | Production-ready implementation of InvisPose - a r... | Python | 6.5k | 351 | 基于WiFi的隐私保护人体姿态估计系统，通过CSI数据实现非接触式实时全身追踪，支持多人检测与跨场景应用，提供高精度低延迟的无摄像头人体状态感知解决方案。 |

[查看完整数据](api/github/2026-02-15.json)
<!-- END GITHUB TRENDING -->








