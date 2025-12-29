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

**最后更新**: 2025-12-29 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [QuantConnect/Lean](https://github.com/QuantConnect/Lean) | Lean Algorithmic Trading Engine by QuantConnect (P... | C# | 14.8k | 390 | QuantConnect/Lean是开源算法交易引擎，支持C#和Python，提供回测、优化、实时交易功能。模块化设计可自定义组件，集成替代数据源，适用于多市场策略开发与验证。 |
| 2 | [RustPython/RustPython](https://github.com/RustPython/RustPython) | A Python Interpreter written in Rust... | Rust | 21.3k | 221 | RustPython 是用 Rust 编写的 Python 解释器，兼容 CPython 3.13.0 及以上版本，支持 WebAssembly 运行环境，提供交互式 shell 和脚本执行功能，旨在实现高性能的 Python 语言支持。 |
| 3 | [Flowseal/zapret-discord-youtube](https://github.com/Flowseal/zapret-discord-youtube) | ... | Batchfile | 20.3k | 238 | 该项目使用Batchfile脚本结合WinDivert工具实现网络流量拦截与过滤功能，提供DNS安全配置及手动策略执行方案，适用于Windows系统网络策略控制。 |
| 4 | [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | Get 10X more out of Claude Code, Codex or any codi... | Rust | 8.0k | 825 | Vibe Kanban是一款用于高效管理AI编码代理的工具，支持多代理任务编排、状态跟踪、配置集中管理及远程项目访问，提升代码生成与协作效率。 |
| 5 | [gitroomhq/postiz-app](https://github.com/gitroomhq/postiz-app) | 📨 The ultimate social media scheduling tool, with... | TypeScript | 25.4k | 124 | Postiz 是一款AI驱动的社交媒体调度工具，支持多平台内容规划、团队协作与数据分析，提供自动化集成及自托管方案，旨在提升社交运营效率。 |
| 6 | [sansan0/TrendRadar](https://github.com/sansan0/TrendRadar) | 🎯 告别信息过载，AI 助你看懂新闻资讯热点，支持 RSS 订阅，简单的舆情监控分析 - 多平台热... | Python | 41.3k | 299 | TrendRadar是一款基于AI的多平台舆情监控工具，支持35个平台热点聚合与智能分析，提供趋势追踪、情感分析、相似检索等功能。可通过RSS订阅、Docker部署快速启动，支持企业微信、钉钉等多端通知，无需编程即可实现自动化新闻监控与分析。 |
| 7 | [sinelaw/fresh](https://github.com/sinelaw/fresh) | Text editor for your terminal: easy, powerful and ... | Rust | 4.1k | 392 | Rust编写的终端文本编辑器，提供类GUI操作体验，支持大文件高效处理、鼠标操作和插件扩展，注重低延迟与低内存占用。 |
| 8 | [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | FULL Augment Code, Claude Code, Cluely, CodeBuddy,... | - | 103.3k | 376 | 该项目收集了多个AI工具的系统提示、内部工具和AI模型，涵盖30,000+行代码分析，提供AI系统安全提示及开源资源，帮助开发者研究和优化AI工具结构。 |
| 9 | [Stirling-Tools/Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) | #1 PDF Application on GitHub that lets you edit PD... | Java | 72.0k | 132 | Stirling-PDF是开源跨平台PDF编辑工具，支持桌面、浏览器及自托管部署，提供50+PDF处理功能（编辑/签名/转换/OCR等），具备自动化工作流、企业级安全及多语言界面，通过REST API实现系统集成。 |
| 10 | [resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox) | SoTA open-source TTS... | Python | 19.2k | 640 | Chatterbox是Resemble AI开源的SOTA文本转语音模型家族，包含Turbo（高效低延迟）、多语言及通用版。支持音素标签增强真实感，适用于语音代理、多语言导航及创意内容生成。 |
| 11 | [antiwork/gumroad](https://github.com/antiwork/gumroad) | Sell stuff and see what sticks... | Ruby | 7.9k | 62 | Gumroad是一个面向创作者的电商平台，允许其直接向消费者销售数字或实体产品。项目提供完整的电商功能，包含商品管理、支付集成及销售数据分析，采用模块化架构便于扩展。 |
| 12 | [TheAlgorithms/Python](https://github.com/TheAlgorithms/Python) | All Algorithms implemented in Python... | Python | 216.1k | 335 | TheAlgorithms/Python项目提供了所有算法的Python实现，旨在用于教育和学习目的。代码可用于理解算法原理，但可能效率低于标准库，需谨慎使用。 |
| 13 | [vanilla-wiiu/vanilla](https://github.com/vanilla-wiiu/vanilla) | ... | C | 1.5k | 111 | vanilla-wiiu/vanilla 是一个开源的Wii U游戏手柄软件克隆项目，支持多平台使用。通过模拟手柄功能，用户可在不同设备上实现类似Wii U的体感操作，需配合特定Wi-Fi适配器及硬件驱动。项目提供键盘快捷键控制，适用于游戏开发与兼容性测试场景。 |
| 14 | [jellyfin/jellyfin](https://github.com/jellyfin/jellyfin) | The Free Software Media System - Server Backend & ... | C# | 47.1k | 67 | Jellyfin是一个开源免费的媒体管理系统，提供替代Emby/Plex的跨平台解决方案。支持多设备媒体流传输，基于.NET平台开发，强调用户自主控制与社区协作，无付费功能或隐藏条款。 |

[查看完整数据](api/github/2025-12-29.json)
<!-- END GITHUB TRENDING -->








