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

**最后更新**: 2026-03-01 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [moeru-ai/airi](https://github.com/moeru-ai/airi) | 💖🧸 Self hosted, you-owned Grok Companion, a cont... | TypeScript | 20.2k | 738 | Airi 是一个自托管的AI虚拟伴侣项目，旨在复刻Neuro-sama功能，支持实时语音聊天、Minecraft/Factorio游戏互动，跨平台（Web/macOS/Windows）运行。基于TypeScript开发，整合RAG、内存系统等技术，提供可私有化部署的数字生命体解决方案。 |
| 2 | [ruvnet/wifi-densepose](https://github.com/ruvnet/wifi-densepose) | WiFi DensePose turns commodity WiFi signals into r... | Rust | 17.1k | 5.5k | WiFi DensePose利用WiFi信号实现无接触人体姿态估计、生命体征监测与存在检测，通过分析CSI数据实时重构人体位置、呼吸及心跳，支持穿墙检测，适用于安防与健康监护场景。 |
| 3 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The leading agent orchestration platform for Cl... | TypeScript | 17.3k | 766 | ruvnet/ruflo是一个基于TypeScript的智能代理编排平台，支持部署多智能体群和协调自主工作流，集成RAG和Claude Code/Codex，适用于企业级对话式AI系统开发。 |
| 4 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 89.0k | 798 | MarkItDown是微软开发的Python工具，支持将PDF、PPT、Word、Excel等20+格式文档转换为Markdown，适用于LLM文本分析场景。提供流式处理和MCP服务器接口，注重保留文档结构而非人眼可读性。 |
| 5 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source SuperAgent harness that researches,... | Python | 22.9k | 352 | DeerFlow 是一个开源的超级代理框架，通过子代理、记忆、沙盒和技能协作处理复杂任务。支持上下文工程、长期记忆存储和多模型配置，适用于自动化研究、任务编排及复杂问题解决。 |
| 6 | [alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox) | OpenSandbox is a general-purpose sandbox platform ... | Python | 3.3k | 1.2k | OpenSandbox是阿里巴巴开源的AI应用沙盒平台，支持多语言SDK和统一API，集成Docker/Kubernetes运行时，提供代码解释器、浏览器自动化及桌面环境模拟，适用于AI代码执行、代理评估与强化学习场景。 |
| 7 | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Collection of awesome LLM apps with AI Agents and ... | Python | 98.7k | 475 | 该项目是一个聚焦LLM应用的集合库，涵盖AI代理、RAG、多代理协作等技术，整合OpenAI、Anthropic、Gemini及开源模型如Llama/Qwen，提供从基础到高级的AI应用案例，助力开发者探索LLM在医疗、金融、创作等领域的实践。 |
| 8 | [K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills) | A set of ready to use Agent Skills for research, s... | Python | 10.2k | 184 | 提供148+跨学科的AI代理技能，支持科研、医疗、金融等领域，涵盖生物信息学、化学信息学、临床研究、医疗影像等，提升AI代理执行复杂工作流的能力。 |
| 9 | [basecamp/omarchy](https://github.com/basecamp/omarchy) | Beautiful, Modern & Opinionated Linux... | Shell | 20.7k | 94 | omarchy 是一个基于 Shell 脚本的 Linux 系统配置与管理工具，旨在提供现代化、简化的系统操作体验。项目可能包含自动化脚本，用于系统优化、环境配置或工作流管理，适合开发者或系统管理员提升 Linux 使用效率。 |
| 10 | [X-PLUG/MobileAgent](https://github.com/X-PLUG/MobileAgent) | Mobile-Agent: The Powerful GUI Agent Family... | Python | 7.7k | 192 | MobileAgent是多平台GUI自动化代理系统，融合强化学习与多智能体协作技术，支持复杂任务自主执行与错误诊断，包含半在线学习、预操作检测等方法。 |
| 11 | [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 📚 《从零开始构建智能体》——从零开始的智能体原理与实践教程... | Python | 23.8k | 206 | 《从零开始构建智能体》系统性教程，涵盖智能体原理、框架开发、高级技术（记忆、上下文工程、Agentic-RL）及实战案例，理论与实践结合。 |
| 12 | [superset-sh/superset](https://github.com/superset-sh/superset) | IDE for the AI Agents Era - Run an army of Claude ... | TypeScript | 2.8k | 391 | Superset 是面向AI代理时代的集成开发环境，支持同时运行多个CLI代码代理（如Claude Code、Codex等），提供任务隔离、状态监控、差异查看及快速上下文切换功能，提升开发效率。 |
| 13 | [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | Memory for 24/7 proactive agents like openclaw (mo... | Python | 12.0k | 338 | memU是面向24/7主动代理的内存框架，通过结构化文件系统管理长期记忆，降低LLM令牌成本，支持主动感知用户意图并执行任务。 |

[查看完整数据](api/github/2026-03-01.json)
<!-- END GITHUB TRENDING -->








