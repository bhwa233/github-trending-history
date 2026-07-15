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

**最后更新**: 2026-07-14 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | 👩🏿‍💻👨🏾‍💻👩🏼‍💻👨🏽‍💻👩🏻‍💻中国独立开发者项目列表 -- ... | Python | 53.4k | 1.2k | 这是一个收集中国独立开发者项目的列表，旨在分享大家都在做什么。项目汇集了众多独立开发者的作品，涵盖不同领域，为开发者提供灵感和交流平台。 |
| 2 | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 100+ AI Agent & RAG apps you can actually run — cl... | Python | 120.7k | 1.1k | 该项目汇集了100+个可实际运行的AI Agent和RAG应用，涵盖博客转播客、数据分析、医疗诊断等多种场景。支持GPT、Claude、Llama等主流大模型，提供Agent Skills和Starter AI Agents两种使用方式，旨在帮助开发者快速克隆、定制并部署AI应用。 |
| 3 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 170.2k | 1.9k | 这是一个为 Claude 等编码代理设计的工程技能集，旨在提供真实的工程实践而非“氛围编码”。它包含一系列可组合的 Shell 脚本，支持通过 npx 或 Claude Code 插件安装。安装后可配置 issue tracker（如 GitHub、Linear）和标签系统，帮助开发者高效管理开发流程和文档。 |
| 4 | [Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard) | The Destructive Command Guard (dcg) is for blockin... | Rust | 4.4k | 481 | 这是一个用 Rust 编写的高性能钩子工具，旨在阻止 AI 编码代理（如 Claude、Copilot 等）执行危险的 git 和 shell 命令，防止意外删除文件，保护开发环境安全。 |
| 5 | [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | The open-source CapCut alternative... | TypeScript | 69.1k | 4.3k | OpenCut 是一款免费开源的视频编辑器，支持 Web、桌面和移动端。目前正在进行从零开始的架构重写，旨在提供插件优先架构、跨平台 Rust 核心以及 AI 代理支持。新版本将包含编辑器 API、无头模式和脚本标签等高级功能。 |
| 6 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 61.9k | 156 | 这是一个基于Python的AI对冲基金概念验证项目，旨在探索AI在交易决策中的应用。项目正在重构为持久、全天候运行的系统，包含多个模拟著名投资大师（如巴菲特、格雷厄姆等）的代理，以及估值、情绪、基本面和技术面分析代理，共同协作生成交易信号。该项目仅供教育研究，不用于实盘交易。 |
| 7 | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | Anti-AI-slop design skill for Claude Code, Cursor,... | CSS | 6.1k | 1.0k | 这是一个专为 Claude Code、Cursor 和 Codex 设计的 AI 设计技能，旨在防止生成平庸的 AI 风格代码。它提供 20 种主题和 57 个“垃圾测试关卡”，通过宏观结构选择和自我批评确保设计独特。支持构建新 UI、审计现有代码、重新设计以及分析设计 DNA，生成自包含的 HTML + CSS 文件。 |
| 8 | [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | "Vibe-Trading: Your Personal Trading Agent"... | Python | 22.8k | 1.3k | Vibe-Trading 是一个基于 Python 的个人交易代理，旨在通过一条命令赋予 AI 全面的交易能力。项目集成了 Longbridge 和 Tushare 等市场数据源，支持 MCP 协议，提供回测功能，并具备完善的安全加固措施。它支持 Web 和 CLI 界面，帮助用户进行量化交易策略的开发与执行。 |
| 9 | [Raphire/Win11Debloat](https://github.com/Raphire/Win11Debloat) | A simple, lightweight PowerShell script that allow... | PowerShell | 51.6k | 779 | 这是一个轻量级 PowerShell 脚本，专为 Windows 10 和 11 设计，旨在通过移除预装应用、禁用遥测及清理界面来优化系统体验。它支持命令行参数、审计模式及设置导入导出，适合系统管理员和高级用户进行系统定制。 |
| 10 | [hasaneyldrm/exercises-dataset](https://github.com/hasaneyldrm/exercises-dataset) | 1,324-exercise fitness dataset — animation GIFs, 1... | HTML | 13.5k | 864 | 这是一个包含1,324个健身动作的综合数据集，涵盖动画GIF、缩略图、肌肉群及器材数据，并提供9种语言的分步说明。它为LogPress应用提供支持，也可用于构建健身应用、机器学习项目或健康研究。 |
| 11 | [penpot/penpot](https://github.com/penpot/penpot) | Penpot: The open-source design platform for Produc... | Clojure | 56.1k | 264 | Penpot 是一款开源的跨平台设计平台，专为需要可扩展协作的产品团队打造。它支持自托管，确保设计基础设施的完全掌控，符合合规要求。通过实时协作、设计令牌和 MCP 服务器，它实现了设计与代码的无缝双向流转，利用 CSS Grid 和 Flex 布局支持响应式设计，是构建全栈设计系统的理想选择。 |
| 12 | [AIEraDev/Clypra](https://github.com/AIEraDev/Clypra) | A modern video editor built with Tauri, React, and... | TypeScript | 2.6k | 66 | Clypra 是一个基于 Tauri v2、React 19 和 Rust 的现代开源视频编辑器。它提供专业级功能，如多轨道时间轴、硬件加速和音频同步，核心功能永久免费。支持桌面和移动平台，并可选 AI 增强功能。 |
| 13 | [par274/sharpemu](https://github.com/par274/sharpemu) | An experimental PlayStation 5 emulator project.... | C# | 2.1k | 448 | 这是一个用C#编写的实验性PlayStation 5模拟器，目前处于早期开发阶段。项目支持加载eboot.bin和.elf文件，执行CPU指令，读取元数据及部分内核功能。目前主要针对Windows平台，Demon's Souls已实现视频循环。项目旨在研究系统架构和逆向工程，暂无商业目标。 |
| 14 | [chenyme/grok2api](https://github.com/chenyme/grok2api) | 面向 Grok Build、Grok Web 与 Grok Console 的多账号 API 网关... | Go | 5.8k | 179 | 这是一个基于 Go 语言开发的 Grok API 网关，支持 Build、Web 和 Console 三种服务。项目实现了多账号池管理、负载均衡及故障切换，提供 OpenAI 和 Anthropic 兼容接口。包含图片/视频生成、代理池及基于 Web 的管理后台，适合需要统一接入 Grok 服务的开发者。 |
| 15 | [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | AI coding assistant skill (Claude Code, Codex, Ope... | Python | 86.3k | 1.9k | 这是一个将代码库、文档和媒体转换为可查询知识图谱的 AI 编程助手技能。它利用 tree-sitter 进行本地代码解析，结合 LLM 进行语义理解，生成 HTML、Markdown 和 JSON 文件。用户可通过图遍历而非文件搜索来查询项目结构、依赖关系和概念。 |
| 16 | [HenryNdubuaku/maths-cs-ai-compendium](https://github.com/HenryNdubuaku/maths-cs-ai-compendium) | Become a cracked AI/ML Research Engineer... | TypeScript | 5.2k | 69 | 这是一个涵盖数学、计算和人工智能的开放教科书，旨在帮助从业者深入理解 AI/ML 知识。项目包含一个 MCP Server，允许 Claude Code、Cursor 等 AI 助手将其作为本地知识库使用。内容涵盖向量、矩阵、微积分、统计、概率、机器学习和计算语言学，适合 AI/ML 研究工程师面试准备和深度学习。 |

[查看完整数据](api/github/2026-07-14.json)
<!-- END GITHUB TRENDING -->




