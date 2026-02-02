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

**最后更新**: 2026-02-02 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 18.0k | 1.5k | Claude-Mem是用于Claude Code的插件，通过AI压缩自动捕获编码会话内容，实现跨会话的上下文持久化存储与智能检索，支持隐私控制、多语言界面及可视化界面，提升代码开发连续性。 |
| 2 | [ThePrimeagen/99](https://github.com/ThePrimeagen/99) | Neovim AI agent done right... | Lua | 3.0k | 298 | ThePrimeagen/99 是一个基于Neovim的AI代理项目，旨在为用户提供简洁的AI工作流体验。通过限制AI请求范围并优化交互方式，该项目简化了常规编程任务的处理流程，同时依赖OpenCode进行功能扩展。 |
| 3 | [termux/termux-app](https://github.com/termux/termux-app) | Termux - a terminal emulator application for Andro... | Java | 49.9k | 97 | Termux 是 Android 终端模拟器及 Linux 环境应用，支持通过包扩展功能。提供命令行工具和开发环境，适用于 Android 7+ 设备，部分功能依赖 Linux 工具链。 |
| 4 | [pedramamini/Maestro](https://github.com/pedramamini/Maestro) | Agent Orchestration Command Center... | TypeScript | 1.3k | 334 | Maestro是一款AI代理编排控制中心，支持多AI工具并行协作、自动化任务执行、Git分支隔离开发及移动端远程控制，提供代码生成、文档编写和跨项目协同功能。 |
| 5 | [netbirdio/netbird](https://github.com/netbirdio/netbird) | Connect your devices into a secure WireGuard®-base... | Go | 22.0k | 368 | NetBird基于WireGuard构建安全的点对点私有网络，集成SSO/MFA和细粒度访问控制，支持跨平台自动连接与集中化管理，简化远程访问与网络配置。 |
| 6 | [OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev) | ChatDev 2.0: Dev All through LLM-powered Multi-Age... | Python | 29.4k | 75 | ChatDev 2.0 是一个零代码多智能体协作平台，支持通过配置快速构建复杂场景应用。基于LLM实现智能体协同，涵盖数据可视化、3D生成、深度研究等场景，提供可扩展的多智能体工作流编排能力。 |
| 7 | [autobrr/qui](https://github.com/autobrr/qui) | A fast, single-binary qBittorrent web UI: manage m... | Go | 2.8k | 41 | qui是一个用Go编写的快速单二进制qBittorrent网页界面，支持多实例管理、跨跟踪器种子、自动化流程及反向代理，提升torrent管理效率。 |
| 8 | [badlogic/pi-mono](https://github.com/badlogic/pi-mono) | AI agent toolkit: coding agent CLI, unified LLM AP... | TypeScript | 5.6k | 881 | AI代理工具包，提供CLI、统一LLM API、TUI/Web UI库、Slack机器人及vLLM部署模块，支持代码生成与多端交互管理。 |
| 9 | [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 📑 PageIndex: Document Index for Vectorless, Reaso... | Python | 12.5k | 818 | PageIndex是一款无需向量数据库的推理型RAG系统，通过构建文档分层树索引并利用LLM进行推理检索，解决传统向量检索的准确性问题。支持长文档的结构化分析与人类专家级的上下文感知检索。 |
| 10 | [karpathy/nanochat](https://github.com/karpathy/nanochat) | The best ChatGPT that $100 can buy.... | Python | 41.6k | 261 | nanochat是一个轻量级LLM训练框架，支持单GPU节点训练，涵盖从预训练到聊天UI的全流程。通过优化算法和架构，可在3小时内以约$73成本训练出GPT-2级别的模型，适合研究和低成本部署对话系统。 |
| 11 | [kovidgoyal/calibre](https://github.com/kovidgoyal/calibre) | The official source code repository for the calibr... | Python | 23.8k | 183 | calibre是跨平台电子书管理工具，支持多种格式的电子书查看、转换、编辑及元数据管理，可连接电子阅读设备并自动获取书籍信息，适用于电子书整理与格式转换场景。 |
| 12 | [langchain-ai/rag-from-scratch](https://github.com/langchain-ai/rag-from-scratch) | ... | Jupyter Notebook | 6.9k | 94 | 该项目通过Jupyter Notebook教程讲解从零构建RAG系统，涵盖索引、检索和生成三大核心模块，帮助开发者掌握利用外部数据增强大语言模型能力的方法。 |

[查看完整数据](api/github/2026-02-02.json)
<!-- END GITHUB TRENDING -->








