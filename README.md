# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 默认通过 Cloudflare AI Gateway 调用 `workers-ai/@cf/zai-org/glm-4.7-flash` 生成中英文项目总结、技术栈和适用场景
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
  - `summary_en`: 英文项目核心功能总结
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景
  - `useCase_en`: 英文适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare AI Gateway（OpenAI 兼容接口）
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 默认：Cloudflare AI Gateway
export AI_API_KEY=your_cloudflare_ai_gateway_token
export AI_API_URL=https://gateway.ai.cloudflare.com/v1/5697c41d4efbabcbac78eafe2cdf036b/default/compat/chat/completions
export AI_MODEL=workers-ai/@cf/zai-org/glm-4.7-flash

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

**最后更新**: 2026-05-03 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The leading agent orchestration platform for Cl... | TypeScript | 38.9k | 1.8k | Ruflo 是专为 Claude Code 设计的多代理 AI 编排平台。它支持部署 100+ 专业代理，协调自主工作流，并具备自学习记忆、联邦通信和企业级安全特性。通过插件系统，它能将 Claude Code 转化为具备集群智能的自主系统，适合需要复杂 AI 协作的开发场景。 |
| 2 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 65.2k | 3.3k | TradingAgents 是一个基于 Python 的多智能体 LLM 金融交易框架，模拟真实交易公司运作。它集成了基本面、情绪、技术分析师及交易员等角色，通过 LLM 协作评估市场并制定交易策略。支持多种大模型（如 GPT-5.4、Claude 4.6 等），具备回测、持久化日志及 Docker 部署功能，专为金融研究设计。 |
| 3 | [soxoj/maigret](https://github.com/soxoj/maigret) | 🕵️‍♂️ Collect a dossier on a person by username f... | Python | 23.8k | 1.1k | Maigret 是一款强大的开源 OSINT 工具，通过用户名在 3000+ 网站上收集个人档案。支持递归搜索、绕过封锁及 Web UI，无需 API 密钥，可嵌入 Python 项目，适用于社交媒体分析和数字足迹调查。 |
| 4 | [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) | Coding agent for DeepSeek models that runs in your... | Rust | 2.1k | 389 | 这是一个基于 Rust 开发的终端原生编码代理，专为 DeepSeek V4 模型设计。它支持 1M token 上下文和思考模式流式输出，提供文件操作、Shell 执行、Git 管理等全功能工具集。支持会话保存、回滚及多种交互模式，无需额外运行时即可直接运行。 |
| 5 | [AIDC-AI/Pixelle-Video](https://github.com/AIDC-AI/Pixelle-Video) | 🚀 AI 全自动短视频引擎 | AI Fully Automated Short Video En... | Python | 9.9k | 478 | 这是一个基于 Python 的 AI 全自动短视频生成引擎。它提供 Web 界面，支持利用 LLM 生成文案，通过 ComfyUI 或云端 API 生成配图，并集成了多种 TTS 引擎进行语音合成。支持本地一键整合包和源码部署，适合快速制作解说类短视频。 |
| 6 | [browserbase/skills](https://github.com/browserbase/skills) | Claude Agent SDK with a web browsing tool... | JavaScript | 1.8k | 322 | 这是一个为 Claude Code 提供的浏览器自动化技能集，旨在通过 Browserbase 平台实现强大的 Web 爬取、自动化测试和调试功能。它包含多种技能，如远程浏览器会话管理、无服务器函数部署、站点调试、Cookie 同步以及 AI 驱动的对抗性 UI 测试，支持反机器人检测和代理设置，极大增强了 Claude Agent 处理复杂 Web 任务的能力。 |
| 7 | [czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | A MCP for Claude Desktop / Claude Code / Windsurf ... | TypeScript | 19.5k | 264 | 这是一个 TypeScript 编写的 MCP 服务器，为 Claude、Cursor 等 AI 助手提供对 n8n 节点文档、属性和操作的全面访问。它支持 1,650 个节点，覆盖 99% 的属性和 63.6% 的操作，允许 AI 帮助构建自动化工作流，并提供云端快速体验。 |
| 8 | [1jehuang/jcode](https://github.com/1jehuang/jcode) | Coding Agent Harness... | Rust | 3.4k | 587 | 这是一个用 Rust 编写的下一代编码代理框架，专注于多会话工作流、无限自定义和高性能。项目在资源效率方面表现优异，内存占用显著低于同类竞品，适合需要高效运行多个 AI 编码会话的开发者。 |
| 9 | [openwrt/openwrt](https://github.com/openwrt/openwrt) | This repository is a mirror of https://git.openwrt... | C | 26.6k | 14 | OpenWrt 是一个面向嵌入式设备的 Linux 操作系统，提供完全可写的文件系统和包管理。它允许用户摆脱厂商限制，通过安装各种软件包对设备进行深度定制，适用于 WiFi 路由器等场景。开发者也可将其作为构建应用的框架。 |

[查看完整数据](api/github/2026-05-03.json)
<!-- END GITHUB TRENDING -->




