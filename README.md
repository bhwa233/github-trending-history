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

**最后更新**: 2026-06-20 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | macOS video editor built for AI... | Swift | 3.3k | 902 | Palmier Pro 是一款基于 Swift 的 macOS 视频编辑器，对标 Premiere Pro。它集成了生成式 AI 模型，允许用户在时间轴上直接生成和编辑视频。项目开源了编辑器核心、MCP 服务器及代理聊天功能，生成式 AI 处理部分需订阅。支持通过 MCP 协议与 Claude、Cursor 等工具集成，实现人机协作。 |
| 2 | [penpot/penpot](https://github.com/penpot/penpot) | Penpot: The open-source design tool for design and... | Clojure | 51.4k | 420 | Penpot 是一个开源的跨平台设计平台，专为规模化团队打造。它支持自托管，确保设计基础设施的完全控制。核心优势在于设计与代码的无缝协作，支持 SVG、CSS、HTML 等开放标准。通过实时协作、设计令牌和 MCP 服务器，它实现了从设计到开发的自动化流程，帮助团队构建可扩展的设计系统。 |
| 3 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 7.0k | 677 | OpenMontage 是世界首个开源的代理式视频制作系统。它包含12条流水线和52个工具，能将AI编码助手转化为全功能视频工作室。用户只需用自然语言描述需求，系统即可自动完成研究、脚本编写、素材生成、剪辑及合成。它不仅能制作基于图像的视频，还能通过检索真实运动素材制作高质量视频，支持多种AI模型。 |
| 4 | [tursodatabase/turso](https://github.com/tursodatabase/turso) | Turso is an in-process SQL database, compatible wi... | Rust | 20.3k | 801 | Turso 是一个用 Rust 编写的进程内 SQL 数据库，完全兼容 SQLite。它支持 MVCC、变更数据捕获 (CDC)、向量搜索和多语言接口。具备异步 I/O 和跨平台能力，旨在提供高性能的本地数据存储解决方案。 |
| 5 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | High-performance code intelligence MCP server. Ind... | C | 9.3k | 1.3k | 这是一个高性能的代码智能 MCP 服务器，使用 C 语言编写。它能将代码库索引到持久化知识图谱中，支持 158 种语言，平均仓库毫秒级索引，Linux 内核 3 分钟完成。具备亚毫秒级查询能力，令牌消耗减少 99%。提供单静态二进制文件，零依赖，内置 3D 可视化，专为 AI 编码代理设计，支持本地安全处理。 |
| 6 | [google-research/timesfm](https://github.com/google-research/timesfm) | TimesFM (Time Series Foundation Model) is a pretra... | Python | 24.5k | 433 | TimesFM 是 Google Research 开发的预训练时间序列基础模型，基于解码器架构。支持长上下文（16k）和协变量，提供连续分位数预测。支持微调（LoRA）和 Flax 推理，已集成至 BigQuery ML 等产品中。 |
| 7 | [twentyhq/twenty](https://github.com/twentyhq/twenty) | The open alternative to Salesforce, designed for A... | TypeScript | 50.9k | 140 | twenty 是 Salesforce 的开源替代品，专为 AI 设计。它允许技术团队通过代码定义对象、字段和视图，像构建其他应用一样构建、发布和版本控制 CRM。支持云端和自托管，提供对象、视图、工作流和代理等现代 CRM 构建模块。 |
| 8 | [Kong/insomnia](https://github.com/Kong/insomnia) | The open-source, cross-platform API client for Gra... | TypeScript | 39.3k | 329 | Insomnia 是一款开源跨平台 API 客户端，支持 GraphQL、REST、WebSockets、SSE 和 gRPC 等多种协议。它集成了 API 设计、调试、测试、模拟以及 CI/CD 集成功能，支持本地、Git 和云端多种存储方式，方便团队协作与安全存储。 |
| 9 | [tw93/Pake](https://github.com/tw93/Pake) | 🤱🏻 Turn any webpage into a desktop app with one ... | Rust | 54.7k | 2.5k | Pake 是一个基于 Rust 的开源工具，旨在将任意网页一键打包为轻量级桌面应用。利用 Tauri 框架，它体积小（约5M）、启动快且内存占用低，支持 macOS、Windows 和 Linux。提供丰富的自定义功能，如快捷键、窗口样式及广告移除，适合将 Web 应用转化为原生体验。 |
| 10 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | Compress tool outputs, logs, files, and RAG chunks... | Python | 41.8k | 3.8k | Headroom 是一个 AI 代理的上下文压缩层，旨在减少 60-95% 的 token。它通过压缩工具输出、日志、RAG 块等数据，在 LLM 接收前进行处理，保持答案准确。支持库、代理、MCP 服务器等多种形式，具备可逆压缩和跨代理记忆功能。 |
| 11 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source AI voice studio. Clone, dictate, c... | TypeScript | 31.0k | 145 | Voicebox 是一个本地优先的 AI 语音工作室，开源替代 ElevenLabs 和 WisprFlow。支持零样本声音克隆、23 种语言的语音生成及全局语音输入。所有模型和数据均在本地运行，保护隐私，提供丰富的语音效果和编辑功能。 |
| 12 | [Kilo-Org/kilocode](https://github.com/Kilo-Org/kilocode) | Kilo is the all-in-one agentic engineering platfor... | TypeScript | 23.3k | 513 | Kilo Code 是一个开源的 AI 编程代理平台，支持 VS Code、JetBrains 和 CLI。它提供 500+ 种模型选择，支持任务中途切换，采用零加价的开放定价模式，无需 API 密钥即可开始使用，旨在帮助开发者更快地构建和迭代代码。 |
| 13 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 138.2k | 1.4k | 这是一个面向 AI 编程助手的技能集合，旨在帮助工程师进行“真正的工程”而非“氛围编码”。它包含一系列 Shell 脚本，通过 `/grill-me` 等命令解决 AI 与用户需求不一致的常见问题。项目强调技能的小巧、可组合性和易用性，支持自定义配置，帮助开发者建立标准化的开发工作流。 |
| 14 | [withastro/flue](https://github.com/withastro/flue) | The sandbox agent framework.... | TypeScript | 6.1k | 316 | Flue 是一个用于构建自主 AI 代理和强大工作流的沙盒代理框架。它提供内置的 TypeScript 工具，支持会话、工具、技能、文件系统访问和安全沙盒，使模型能够安全地执行复杂任务。开发者可通过 CLI 本地运行或部署代理。 |
| 15 | [owainlewis/awesome-artificial-intelligence](https://github.com/owainlewis/awesome-artificial-intelligence) | A curated list of Artificial Intelligence (AI) cou... | - | 14.8k | 48 | 这是一个精选的人工智能资源库，专注于AI工程（RAG、代理、部署）及最佳书籍、论文和工具。内容涵盖从基础理论到现代大模型应用，包含Chip Huyen等专家撰写的书籍及Google、Stanford等机构的课程，适合希望构建和部署AI系统的开发者。 |
| 16 | [pppscn/SmsForwarder](https://github.com/pppscn/SmsForwarder) | 短信转发器——监控Android手机短信、来电、APP通知，并根据指定规则转发到其他手机：钉钉群自定... | Kotlin | 26.5k | 104 | 这是一个基于Kotlin开发的Android短信转发器，支持监控短信、来电和APP通知，并转发至钉钉、企业微信、飞书、邮箱等多种平台。具备远程控制功能，可查询短信、通话记录等。支持Android 4.4至13.0，适合需要多设备消息同步的用户。 |
| 17 | [1jehuang/jcode](https://github.com/1jehuang/jcode) | Coding Agent Harness... | Rust | 7.4k | 87 | jcode 是一个用 Rust 构建的下一代编码代理框架，专为多会话工作流设计。它以极致的性能和资源效率著称，内存占用远低于同类竞品，支持高度自定义，旨在提升开发者的技能上限。 |

[查看完整数据](api/github/2026-06-20.json)
<!-- END GITHUB TRENDING -->




