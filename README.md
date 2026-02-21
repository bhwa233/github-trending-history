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

**最后更新**: 2026-02-21 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | ✨ Fully autonomous AI Agents system capable of per... | Go | 5.5k | 2.1k | PentAGI是基于AI的自动化渗透测试系统，支持20+专业安全工具集成，具备自主执行渗透测试、知识图谱分析、多搜索API联动和实时监控能力，采用Docker沙盒确保安全性。 |
| 2 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 1.0k | 133 | GitNexus 是一个浏览器端代码知识图谱工具，通过本地索引GitHub仓库或ZIP文件生成交互式知识图谱，并集成Graph RAG代理实现深度代码分析。支持CLI和Web UI两种使用方式，提供依赖关系追踪、调用链分析等功能，增强AI代码编辑器的上下文感知能力。 |
| 3 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 57.0k | 769 | Superpowers 是一个基于可组合技能的软件开发框架，通过代理驱动开发实现自动化流程。强调测试驱动开发（TDD）、YAGNI 和 DRY 原则，支持编码代理自主执行任务，减少人工干预，提升开发效率。 |
| 4 | [huggingface/skills](https://github.com/huggingface/skills) | ... | Python | 1.7k | 246 | Hugging Face Skills 提供标准化的AI/ML任务技能定义，支持多平台编码代理工具。通过自包含文件夹封装任务指令、脚本和资源，兼容Claude Code、Codex、Gemini等工具，简化AI代理的技能调用与扩展。 |
| 5 | [PowerShell/PowerShell](https://github.com/PowerShell/PowerShell) | PowerShell for every system!... | C# | 51.5k | 60 | PowerShell 是跨平台自动化与配置工具，支持 Windows、Linux 和 macOS。基于 C# 开发，提供命令行外壳、脚本语言及 Cmdlet 框架，擅长处理结构化数据、REST API 和对象模型，适用于系统管理与自动化任务。 |
| 6 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Shell | 68.4k | 219 | Claude Code是集成在终端的代理编程工具，通过自然语言指令执行代码任务、解释代码逻辑及管理Git流程，支持多平台安装并提供插件扩展功能，旨在提升开发效率。 |
| 7 | [stan-smith/FossFLOW](https://github.com/stan-smith/FossFLOW) | Make beautiful isometric infrastructure diagrams... | TypeScript | 17.8k | 101 | FossFLOW 是基于 React 和 TypeScript 的开源等轴测图工具，支持离线使用和 Docker 部署。提供可视化界面创建网络基础设施 diagram，集成 Isoflow 库，具备 PWA 特性与本地存储功能。 |
| 8 | [ggml-org/ggml](https://github.com/ggml-org/ggml) | Tensor library for machine learning... | C++ | 14.1k | 43 | ggml是一个高性能的机器学习张量库，提供跨平台的低级实现，支持整数量化、自动微分和多种优化器，无第三方依赖且运行时零内存分配，适用于高效模型部署。 |
| 9 | [Stremio/stremio-web](https://github.com/Stremio/stremio-web) | Stremio - Freedom to Stream... | JavaScript | 9.4k | 292 | Stremio-web 是一个开源媒体中心应用，允许用户通过插件集成多平台视频资源，实现视频内容的发现、播放与管理。基于JavaScript构建，支持模块化扩展，提供统一的观影体验。 |
| 10 | [HandsOnLLM/Hands-On-Large-Language-Models](https://github.com/HandsOnLLM/Hands-On-Large-Language-Models) | Official code repo for the O'Reilly Book - "Hands-... | Jupyter Notebook | 22.5k | 341 | 该项目是O'Reilly书籍《Hands-On Large Language Models》的配套代码库，包含12章内容，涵盖语言模型基础、Transformer结构、文本生成、微调技术、多模态模型等，通过Jupyter Notebook提供可运行的代码示例。 |
| 11 | [RichardAtCT/claude-code-telegram](https://github.com/RichardAtCT/claude-code-telegram) | A powerful Telegram bot that provides remote acces... | Python | 1.4k | 109 | 该项目是一个Telegram机器人，允许用户通过自然语言与Claude Code进行交互，实现远程代码分析、编辑和测试，支持会话持久化和多设备访问，提升开发效率。 |
| 12 | [cloudflare/agents](https://github.com/cloudflare/agents) | Build and deploy AI Agents on Cloudflare... | TypeScript | 3.4k | 56 | Cloudflare Agents 提供基于 Durable Objects 的持久化 AI 代理框架，支持状态管理、实时通信与分布式部署，适用于需要高并发会话管理的场景。 |
| 13 | [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | Multi-platform auto-proxy client, supporting Sing-... | Dart | 26.4k | 121 | Hiddify App是一款多平台开源代理客户端，支持自动节点选择、TUN模式和多种协议（如Sing-box、Vless、Hysteria等），提供安全隐私保护及无广告体验，适配Windows、macOS、Linux、Android和iOS系统。 |

[查看完整数据](api/github/2026-02-21.json)
<!-- END GITHUB TRENDING -->








