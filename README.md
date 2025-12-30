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

**最后更新**: 2025-12-30 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | Get 10X more out of Claude Code, Codex or any codi... | Rust | 9.0k | 580 | Vibe Kanban是一款提升AI代码代理使用效率的开发工具，支持多代理切换、任务编排、状态跟踪及远程项目管理，优化代码协作流程。 |
| 2 | [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | FULL Augment Code, Claude Code, Cluely, CodeBuddy,... | - | 104.1k | 658 | 该项目收集了30+ AI开发工具的系统提示、内部工具及模型配置，涵盖代码辅助、AI代理等场景，提供超过3万行技术洞察，支持开发者研究优化AI应用。包含安全预警与开源资源，适用于AI模型分析与安全防护研究。 |
| 3 | [QuantConnect/Lean](https://github.com/QuantConnect/Lean) | Lean Algorithmic Trading Engine by QuantConnect (P... | C# | 15.2k | 437 | QuantConnect/Lean是开源算法交易引擎，支持C#和Python，提供模块化架构、替代数据接入及实时交易功能。内置CLI工具实现策略回测、优化与部署，适用于多市场量化交易开发。 |
| 4 | [jrouwe/JoltPhysics](https://github.com/jrouwe/JoltPhysics) | A multi core friendly rigid body physics and colli... | C++ | 9.0k | 15 | JoltPhysics是基于C++的多线程刚体物理引擎，支持游戏与VR场景。采用无锁设计实现后台加载/卸载物理体，碰撞查询与模拟并行处理，避免意外唤醒物体导致的性能问题，确保模拟确定性。 |
| 5 | [timescale/pg-aiguide](https://github.com/timescale/pg-aiguide) | MCP server and Claude plugin for Postgres skills a... | Python | 778 | 382 | pg-aiguide是面向PostgreSQL的AI编码优化工具，提供版本化手册语义搜索、最佳实践技能库及扩展文档，提升AI生成代码的质量与性能。支持作为MCP服务器或Claude插件使用，解决代码过时、约束缺失等问题。 |
| 6 | [resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox) | SoTA open-source TTS... | Python | 19.6k | 600 | Chatterbox是Resemble AI开发的开源文本转语音（TTS）项目，包含三种模型：Turbo（高效低延迟）、多语言版（支持23+语言）和通用版（支持零样本克隆）。支持情感标签如[laugh]，适用于语音代理、多语言应用及创意工作流。 |
| 7 | [RustPython/RustPython](https://github.com/RustPython/RustPython) | A Python Interpreter written in Rust... | Rust | 21.5k | 193 | RustPython是用Rust编写的Python解释器，兼容CPython 3.13.0及以上版本，支持WebAssembly运行，提供交互式Shell和脚本执行功能，旨在结合Rust的性能与Python的生态优势。 |
| 8 | [sinelaw/fresh](https://github.com/sinelaw/fresh) | Text editor for your terminal: easy, powerful and ... | Rust | 4.3k | 262 | Rust编写的终端文本编辑器，提供类GUI交互体验，支持大文件高效处理、低延迟响应及现代插件扩展。内置菜单、命令面板和鼠标支持，兼顾性能与易用性。 |
| 9 | [alexta69/metube](https://github.com/alexta69/metube) | Self-hosted YouTube downloader (web UI for youtube... | Python | 11.5k | 67 | MeTube是基于Python的自托管YouTube下载工具，提供Web界面支持多平台视频下载及播放列表管理。通过Docker部署，支持多种下载模式配置，可灵活控制并发数量与下载策略。 |
| 10 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 30.2k | 974 | 该项目是Anthropic为Claude代理提供的技能示例仓库，包含动态加载的指令、脚本和资源，用于提升特定任务性能，涵盖创意应用、技术任务及企业工作流，提供可自定义的技能模板和实现参考。 |
| 11 | [cjpais/Handy](https://github.com/cjpais/Handy) | A free, open source, and extensible speech-to-text... | TypeScript | 9.4k | 144 | Handy是一款完全离线的开源语音转文本工具，采用Tauri框架开发，支持跨平台使用。通过本地化处理保障隐私，集成Whisper和Parakeet模型实现高精度语音识别，支持键盘快捷键控制与文本直接粘贴。 |
| 12 | [sst/opencode](https://github.com/sst/opencode) | The open source coding agent.... | TypeScript | 44.4k | 558 | 开源AI编码代理工具，支持代码生成、分析及开发协作。提供CLI和桌面应用，兼容多平台安装，内置build/plan双模式，适用于代码探索与多步骤任务处理。 |
| 13 | [louislam/uptime-kuma](https://github.com/louislam/uptime-kuma) | A fancy self-hosted monitoring tool... | JavaScript | 80.5k | 56 | Uptime Kuma 是一款功能丰富的自托管监控工具，支持HTTP(s)/TCP/DNS等多协议监控，提供实时通知、多语言界面、状态页面管理及20秒高频检测，适用于本地化部署的IT服务监控需求。 |

[查看完整数据](api/github/2025-12-30.json)
<!-- END GITHUB TRENDING -->








