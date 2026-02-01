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

**最后更新**: 2026-02-01 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | Your own personal AI assistant. Any OS. Any Platfo... | TypeScript | 141.3k | 11.1k | OpenClaw 是一个可本地部署的个人AI助手，支持多平台消息通道（如WhatsApp、Telegram、Slack等），提供跨操作系统（macOS/iOS/Android）的实时交互能力，强调本地化、快速响应和持续运行。 |
| 2 | [ThePrimeagen/99](https://github.com/ThePrimeagen/99) | Neovim AI agent done right... | Lua | 2.7k | 791 | ThePrimeagen/99 是一个基于 Lua 的 Neovim AI 代理项目，旨在为普通用户提供简化的人工智能工作流，通过限制 AI 请求范围和优化提示机制提升编辑效率。项目处于早期阶段，支持 Lua 和 TS 语言，需依赖 OpenCode 进行配置。 |
| 3 | [pedramamini/Maestro](https://github.com/pedramamini/Maestro) | Agent Orchestration Command Center... | TypeScript | 941 | 69 | Maestro是AI代理编排控制中心，支持多代理并行协作、自动化任务执行及跨平台管理。提供Git工作树隔离、剧本自动化、群组聊天协调和移动端远程控制，适用于高效处理复杂开发流程。 |
| 4 | [kovidgoyal/calibre](https://github.com/kovidgoyal/calibre) | The official source code repository for the calibr... | Python | 23.6k | 21 | calibre是跨平台电子书管理工具，支持格式转换、元数据编辑、设备同步及网络内容抓取，适用于Windows、Linux和macOS系统。 |
| 5 | [badlogic/pi-mono](https://github.com/badlogic/pi-mono) | AI agent toolkit: coding agent CLI, unified LLM AP... | TypeScript | 4.9k | 565 | pi-mono是AI代理开发工具包，包含CLI工具、统一LLM API、TUI/Web UI库、Slack机器人及vLLM部署模块，支持全栈式AI代理应用开发与管理。 |
| 6 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 16.3k | 171 | Claude Code插件，通过AI压缩并持久化存储编码会话上下文，支持跨会话自动注入历史信息，提升开发连续性。包含隐私控制、多级记忆检索和可视化界面。 |
| 7 | [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | The absolute trainer to light up AI agents.... | Python | 12.9k | 399 | Agent Lightning是微软推出的AI代理训练工具，支持多框架集成与零代码优化，提供强化学习、自动提示优化等算法，可提升多代理系统性能。 |
| 8 | [amantus-ai/vibetunnel](https://github.com/amantus-ai/vibetunnel) | Turn any browser into your terminal & command your... | TypeScript | 3.5k | 30 | VibeTunnel将浏览器转化为终端工具，支持跨平台远程控制与AI代理管理。通过Web界面实现终端会话共享和远程访问，提供macOS原生应用及npm安装方案，适用于移动办公与协作场景。 |
| 9 | [steipete/CodexBar](https://github.com/steipete/CodexBar) | Show usage stats for OpenAI Codex and Claude Code,... | Swift | 3.9k | 143 | CodexBar是一款macOS菜单栏工具，实时监控OpenAI Codex、Claude等多平台AI服务的使用统计（如会话/周配额），支持OAuth、cookies等方式免登录获取数据，动态显示配额重置时间 |
| 10 | [j178/prek](https://github.com/j178/prek) | ⚡ Better `pre-commit`, re-engineered in Rust... | Rust | 4.2k | 42 | prek是用Rust重写的新版pre-commit，提供更快的性能和无依赖的单二进制文件，兼容原配置，支持monorepos、Python等多语言工具链管理，并内置常见钩子实现。 |
| 11 | [vita-epfl/Stable-Video-Infinity](https://github.com/vita-epfl/Stable-Video-Infinity) | [ICLR 26] Stable Video Infinity: Infinite-Length V... | Python | 1.7k | 25 | Stable-Video-Infinity 是一项基于深度学习的无限长度视频生成技术，通过错误回收机制提升视频生成稳定性。支持多种模型版本，提供社区工作流与优化方案，适用于动态视频创作与扩展。 |

[查看完整数据](api/github/2026-02-01.json)
<!-- END GITHUB TRENDING -->








