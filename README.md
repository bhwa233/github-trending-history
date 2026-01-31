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

**最后更新**: 2026-01-31 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [ThePrimeagen/99](https://github.com/ThePrimeagen/99) | Neovim AI agent done right... | Lua | 2.2k | 532 | ThePrimeagen/99 是一个实验性的 Neovim AI 代理项目，旨在为用户提供受控的 AI 辅助代码生成工作流。通过限制 AI 请求范围并简化交互方式，项目尝试优化编程体验。目前处于早期阶段，存在临时性提示和潜在问题，需配合 OpenCode 使用。 |
| 2 | [microsoft/BitNet](https://github.com/microsoft/BitNet) | Official inference framework for 1-bit LLMs... | Python | 27.2k | 136 | 微软推出的1-bit大语言模型推理框架，支持CPU/GPU加速，提供优化内核实现高速无损推理。ARM/x86架构下性能提升1.37x-6.17x，能耗降低55.4%-82.2%，可运行100B参数模型，适用于边缘设备本地化部署。 |
| 3 | [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | The absolute trainer to light up AI agents.... | Python | 12.6k | 515 | Agent Lightning 是一款用于训练AI代理的工具，支持零代码优化多框架AI代理（如LangChain、OpenAI、AutoGen等），集成强化学习、自动提示优化等算法，提升代理性能。 |
| 4 | [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | Turn any PDF or image document into structured dat... | Python | 69.6k | 177 | PaddleOCR是百度开源的OCR工具，支持100+语言文档解析，将图像/PDF转为JSON/Markdown结构化数据。内置0.9B多模态模型，精准识别文本、表格、公式等复杂元素，提供MCP服务器集成AI应用。 |
| 5 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Shell | 5.8k | 270 | Anthropic官方维护的Claude代码插件目录，包含内部开发和第三方高质量插件。提供插件安装、管理及开发规范，强调安全验证与质量标准，支持通过Claude Code系统直接调用。 |
| 6 | [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | Microsoft PowerToys is a collection of utilities t... | C# | 128.7k | 61 | Microsoft PowerToys 是一组25+实用工具，帮助用户自定义Windows系统并提升工作效率，涵盖剪贴板管理、窗口布局、快捷键定制等功能。 |
| 7 | [termux/termux-app](https://github.com/termux/termux-app) | Termux - a terminal emulator application for Andro... | Java | 49.5k | 41 | Termux-App 是 Android 终端模拟器应用，提供可扩展的 Linux 环境，支持通过包管理安装开发工具和命令行应用。核心功能包含终端模拟、插件支持及跨版本兼容性优化，适用于需要在安卓设备上运行完整 Linux 环境的场景。 |
| 8 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | Your own personal AI assistant. Any OS. Any Platfo... | TypeScript | 132.2k | 14.8k | OpenClaw是跨平台个人AI助手，支持多渠道消息交互（如WhatsApp、Telegram、Discord等），可在本地设备运行并实现语音交互与实时Canvas渲染。采用TypeScript开发，集成Anthropic和OpenAI模型，强调本地化、快速响应与始终在线体验。 |
| 9 | [pedroslopez/whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) | A WhatsApp client library for NodeJS that connects... | JavaScript | 21.0k | 138 | 基于Node.js的WhatsApp客户端库，通过Puppeteer控制浏览器实现与WhatsApp Web的交互，支持消息收发、群组管理、媒体传输等功能，但存在账号被封风险。 |
| 10 | [AlexanderGrooff/mermaid-ascii](https://github.com/AlexanderGrooff/mermaid-ascii) | Render Mermaid graphs inside your terminal... | Go | 830 | 74 | 在终端中渲染Mermaid图表的工具，支持命令行直接输出ASCII艺术图，可调整布局参数。提供二进制安装、源码构建和Nix三种部署方式，适用于开发者在终端环境直接查看Mermaid流程图结构。 |
| 11 | [reconurge/flowsint](https://github.com/reconurge/flowsint) | A modern platform for visual, flexible, and extens... | TypeScript | 2.1k | 120 | Flowsint是一个基于图的开源OSINT调查工具，支持域名、IP、ASN等多类实体的可视化关联分析，提供自动化增强功能，强调隐私保护和本地数据存储，适用于网络安全分析与取证场景。 |
| 12 | [cline/cline](https://github.com/cline/cline) | Autonomous coding agent right in your IDE, capable... | TypeScript | 57.4k | 47 | Cline是IDE中的自主编码代理，支持文件创建/编辑、终端命令执行及浏览器操作，所有步骤需用户授权。通过AI处理复杂开发任务，具备代码分析、错误修复、网页调试等功能，强调安全可控的开发体验。 |

[查看完整数据](api/github/2026-01-31.json)
<!-- END GITHUB TRENDING -->








