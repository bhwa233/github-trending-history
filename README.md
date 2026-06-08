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

**最后更新**: 2026-06-07 | **成功**: 14 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 30.9k | 1.1k | 这是一个基于 Python 的 AI Agent 技能，能够跨 Reddit、X、YouTube、HN、Polymarket 和网络进行并行搜索。它通过点赞、观看量和真实资金（Polymarket）来评分内容，而非依赖编辑。AI Agent 将这些分散平台的数据综合成一份简明的摘要，为用户提供独特的、基于真实用户互动的搜索体验。 |
| 2 | [opencv/opencv](https://github.com/opencv/opencv) | Open Source Computer Vision Library... | C++ | 88.1k | 65 | OpenCV 是一个开源的计算机视觉库，包含超过 500 个优化算法，用于实时图像处理、视频分析和机器学习。它支持广泛的平台，拥有庞大的社区支持，是计算机视觉领域的行业标准。 |
| 3 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Taste-Skill - gives your AI good taste. stops the ... | Shell | 36.6k | 1.1k | Taste-Skill 是一个专为 AI 代理设计的“反垃圾”前端框架。它提供可移植的技能包，帮助 AI 构建具有强排版、布局和动画的界面，避免生成平庸的 UI。项目还包含图像生成技能，可与 ChatGPT Images、Codex 等工具配合，用于参考板设计。 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 185.9k | 1.1k | 这是一个由 Nous Research 构建的自我改进 AI 代理，具备内置学习循环。它能从经验中创建技能，跨会话记忆用户信息，并支持 Telegram、Discord 等多平台。它允许用户使用多种模型，并通过 TUI 和自动化功能提供强大的终端交互体验。 |
| 5 | [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | An Open Source implementation of Notebook LM with ... | TypeScript | 27.2k | 554 | Open Notebook 是 Notebook LM 的开源替代品，支持本地私有部署和多模型 AI（如 OpenAI、Ollama）。它允许用户上传 PDF、视频等多模态内容，具备智能搜索、上下文对话及专业播客生成功能，强调数据隐私和成本控制。 |
| 6 | [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | Let's use AI to Earn!... | TypeScript | 18.7k | 183 | AiToEarn 是一个基于 TypeScript 的一站式 AI 内容变现平台。它通过四大 Agent 能力（Monetize、Publish、Engage、Create）帮助创作者自动化内容生成、分发与互动。支持全球主流社交媒体，提供 CPS/CPE/CPM 结算模式，适合 OPC、品牌及企业进行全球化内容营销与变现。 |
| 7 | [aaif-goose/goose](https://github.com/aaif-goose/goose) | an open source, extensible AI agent that goes beyo... | Rust | 47.5k | 322 | 处理失败 |
| 8 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | Project N.O.M.A.D, is a self-contained, offline su... | TypeScript | 29.7k | 309 | Project N.O.M.A.D. 是一个基于 TypeScript 的离线优先知识服务器。它通过 Docker 容器化工具和资源，提供管理界面和 API。用户可在任何 Debian 系统上安装，无需桌面环境即可通过浏览器访问，确保关键信息和工具在断网状态下依然可用。 |
| 9 | [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | LLM inference in C/C++... | C++ | 115.3k | 158 | llama.cpp 是一个用纯 C/C++ 实现的高性能大语言模型推理库。它支持多种硬件平台，包括 Apple Silicon 和 WebGPU，无需依赖即可运行。项目提供了 OpenAI 兼容的 API 服务器，支持多模态模型，并优化了 GGUF 格式，旨在实现低门槛、高效率的本地和云端 LLM 推理。 |
| 10 | [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | A vector index built on TurboQuant, written in Rus... | Python | 7.1k | 1.6k | turbovec 是一个基于 Rust 和 Python 的向量索引库，利用 Google Research 的 TurboQuant 算法实现极致压缩。它能在极低内存占用下高效处理大规模向量，搜索速度超越 FAISS。支持在线增量索引、搜索时过滤以及纯本地部署，非常适合对隐私、内存或延迟敏感的 RAG 场景。 |
| 11 | [TapXWorld/ChinaTextbook](https://github.com/TapXWorld/ChinaTextbook) | 所有小初高、大学PDF教材。... | Roff | 72.4k | 350 | 这是一个开源的中国中小学及大学数学教材PDF资源库。项目旨在促进义务教育普及，帮助海外华人获取教育资源。由于GitHub文件大小限制，超过50MB的教材被拆分为多个35MB的文件，并提供合并工具供用户下载后自动合并。 |
| 12 | [openai/plugins](https://github.com/openai/plugins) | OpenAI Plugins... | JavaScript | 2.0k | 262 | 该项目是一个 OpenAI Codex 插件的精选示例集合。它展示了如何构建包含特定清单文件（如 plugin.json）和辅助文件（如 skills、agents）的插件。示例涵盖了 Figma、Notion、iOS/macOS、Web、Expo 等多种开发场景，旨在为开发者提供插件开发的参考模板和最佳实践。 |
| 13 | [refactoringhq/tolaria](https://github.com/refactoringhq/tolaria) | Desktop app to manage markdown knowledge bases... | TypeScript | 12.9k | 245 | Tolaria 是一款跨平台桌面应用，专为管理 Markdown 知识库设计。它采用“文件优先”和“Git 优先”原则，确保数据完全离线、开源且无锁定。支持 AI 集成，可作为个人第二大脑或 AI 上下文存储，适合追求数据自主权和高效知识管理的用户。 |
| 14 | [HunxByts/GhostTrack](https://github.com/HunxByts/GhostTrack) | Useful tool to track location or mobile number... | Python | 13.7k | 28 | GhostTrack 是一款基于 Python 的 OSINT 信息收集工具，主要功能包括 IP 地址追踪、手机号码查询以及社交媒体用户名搜索。该工具支持在 Linux 和 Termux 环境下安装，旨在帮助用户获取目标的相关信息。 |
| 15 | [microsoft/pg_durable](https://github.com/microsoft/pg_durable) | PostgreSQL in-database durable execution... | Rust | 1.4k | 316 | 微软开发的 Rust 项目，为 PostgreSQL 提供内置的持久化执行能力。它允许在 SQL 中定义长期运行、容错的工作流，无需外部服务。通过检查点机制实现崩溃恢复，适用于向量嵌入、数据管道等场景。 |

[查看完整数据](api/github/2026-06-07.json)
<!-- END GITHUB TRENDING -->




