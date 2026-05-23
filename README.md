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

**最后更新**: 2026-05-22 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 24.9k | 2.5k | Anthropic 官方维护的 Claude Code 插件目录，包含内部及第三方高质量插件。提供标准插件结构规范、安装指南及安全警告，旨在帮助用户安全扩展 Claude Code 功能。 |
| 2 | [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | Pre-indexed code knowledge graph for Claude Code, ... | TypeScript | 16.5k | 3.7k | 这是一个为 Claude Code、Cursor 等智能体提供预索引代码知识图谱的工具。它通过构建符号关系和调用图，让 AI 代理在查询时直接检索知识而非扫描文件，从而大幅降低 Token 消耗、工具调用次数和成本，且完全本地运行。 |
| 3 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 64.0k | 978 | RuView 是一个基于 Rust 的 WiFi 感知平台，利用 ESP32 采集信道状态信息（CSI），将 WiFi 信号转化为实时空间智能。它支持穿墙检测人体存在、生命体征监测、活动识别及环境映射，无需摄像头或可穿戴设备，适合隐私保护监控和智能家居应用。 |
| 4 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 11.9k | 988 | 该项目是一个从零开始构建 AI 工程能力的开源课程，包含435个课程和20个阶段。课程涵盖Python、TypeScript、Rust和Julia，强调从原始数学出发构建算法（如反向传播、注意力机制），旨在培养学员从底层原理到实际应用的全栈AI工程能力。 |
| 5 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 41.0k | 501 | 这是一个允许 AI 编码代理控制 Chrome 浏览器的 MCP 服务器。它提供性能分析、高级调试（截图、网络请求、控制台）及自动化功能，支持 Claude、Cursor 等助手进行可靠的自动化和深度调试。 |
| 6 | [dotnet/skills](https://github.com/dotnet/skills) | Repository for skills to assist AI coding agents w... | C# | 2.5k | 389 | 这是一个由 .NET 团队维护的技能仓库，旨在辅助 AI 编码代理处理 .NET 和 C# 开发任务。它包含多个插件，涵盖核心 .NET 编码、数据访问、性能诊断、MSBuild 构建、NuGet 包管理、项目升级、MAUI 开发、AI/ML 集成、模板引擎、测试运行以及 ASP.NET Core Web 开发等领域，支持通过 Copilot CLI 或 Claude Code 安装使用。 |
| 7 | [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) | Graphs that teach > graphs that impress. Turn any ... | TypeScript | 18.5k | 1.4k | Understand Anything 是一款 Claude Code 插件，旨在将大型代码库或知识库转化为交互式知识图谱。它通过多智能体分析构建包含文件、函数及依赖关系的可视化结构，支持结构探索、业务逻辑映射及知识库分析，帮助开发者快速理解复杂项目，实现从盲目阅读到全局视野的转变。 |
| 8 | [odoo/odoo](https://github.com/odoo/odoo) | Odoo. Open Source Apps To Grow Your Business.... | Python | 51.1k | 79 | Odoo 是一套基于 Web 的开源商业应用套件，包含 CRM、电子商务、仓库管理、会计、POS、制造等模块。这些应用可独立使用或无缝集成，形成全功能的开源 ERP 系统，适用于企业业务管理。 |
| 9 | [byJoey/cfnew](https://github.com/byJoey/cfnew) | ... | - | 13.3k | 87 | 这是一个基于 Cloudflare Workers 的代理订阅管理与转换工具。支持 VLESS、Trojan、xhttp 等多协议，具备图形化管理、延迟测试、订阅转换及多客户端适配功能。通过 KV 存储配置，支持自定义优选 IP，优化了传输性能，适合在 Cloudflare 环境下部署使用。 |
| 10 | [trimstray/the-book-of-secret-knowledge](https://github.com/trimstray/the-book-of-secret-knowledge) | A collection of inspiring lists, manuals, cheatshe... | - | 223.2k | 969 | Trimstray 维护的‘秘密知识之书’，汇集了各类鼓舞人心的列表、手册、备忘单、黑客技巧及 CLI/网络工具。该项目旨在为开发者提供丰富的参考资料和灵感，涵盖开发、安全等多个领域。 |
| 11 | [Fincept-Corporation/FinceptTerminal](https://github.com/Fincept-Corporation/FinceptTerminal) | FinceptTerminal is a modern finance application of... | Python | 22.6k | 367 | FinceptTerminal 是一款基于 C++20 和 Qt6 的原生桌面金融终端。它集成了 Python 进行高级分析，支持 100+ 数据源和实时交易（16 个经纪商）。内置 AI 代理和量化实验室，提供 DCF 模型、投资组合优化及全球情报分析，适合专业投资者进行数据驱动决策。 |
| 12 | [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | ⌥ AI Coding agent for the terminal — hash-anchored... | TypeScript | 6.3k | 457 | 这是一个基于终端的强大 AI 编码代理，基于 Pi 分支开发。它集成了 LSP、Python 执行环境和浏览器支持，拥有 40+ 个提供商和 32 个内置工具。通过优化的工具调用和哈希锚定编辑技术，显著提升了代码修改的成功率和效率，支持复杂的代码重构和自动化任务。 |
| 13 | [yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp) | A feature-rich command-line audio/video downloader... | Python | 164.3k | 444 | yt-dlp 是一个功能丰富的命令行音频/视频下载器，支持数千个网站。作为 youtube-dl 的分支，它基于 youtube-dlc 开发，提供了高度可配置的下载选项，包括格式选择、字幕处理、元数据修改及插件扩展功能。 |
| 14 | [karpathy/nn-zero-to-hero](https://github.com/karpathy/nn-zero-to-hero) | Neural Networks: Zero to Hero... | Jupyter Notebook | 22.3k | 159 | 这是一个从零开始学习神经网络的完整课程，包含多个 Jupyter Notebook 教程。课程涵盖了反向传播、语言建模（如 GPT）、MLP 架构、激活函数、梯度及批归一化等核心概念，适合初学者通过视频和代码实践掌握深度学习基础。 |

[查看完整数据](api/github/2026-05-22.json)
<!-- END GITHUB TRENDING -->




