# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 使用 OpenRouter 免费模型生成中英文项目总结、技术栈和适用场景
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
- **AI 服务**: OpenRouter Chat Completions API（可配置免费模型）
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 配置环境变量
export OPENROUTER_API_KEY=your_openrouter_api_key
# 可选：使用万能免费路由（自动分配当前可用免费模型）
export OPENROUTER_MODEL=openrouter/free

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

**最后更新**: 2026-04-14 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 33.4k | 9.2k | 该项目通过四个核心原则优化Claude代码行为，解决LLM常见编码问题。包含Think Before Coding（显式推理）、Simplicity First（代码精简）、Surgical Changes（精准修改）和Goal-Driven Execution（目标导向）策略，提升代码质量与可维护性。 |
| 2 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 55.7k | 3.0k | Claude-Mem 是一个用于 Claude Code 的插件，通过自动捕获编码会话内容、AI 语义压缩和上下文注入，实现跨会话的持久化记忆保存，提升代码开发连续性。 |
| 3 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source voice synthesis studio... | TypeScript | 17.3k | 1.2k | Voicebox是一个本地化的开源语音合成工作室，支持多语言语音生成、声音克隆、后期效果处理及多轨道编辑，采用Tauri框架实现高性能本地运行。 |
| 4 | [pascalorg/editor](https://github.com/pascalorg/editor) | Create and share 3D architectural projects.... | TypeScript | 11.6k | 769 | 基于React Three Fiber和WebGPU的3D建筑编辑器，支持实时协作与复杂场景管理，采用Monorepo架构分离渲染、状态与UI逻辑。 |
| 5 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 108.4k | 1.7k | MarkItDown是微软开发的Python工具，支持PDF、PPT、Word等多格式文档转Markdown，保留结构化内容如标题、表格，适用于LLM文本分析流程，不追求高保真人类阅读。 |
| 6 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 152.2k | 1.9k | Superpowers 是一个基于可组合技能的软件开发框架，通过分阶段需求确认、TDD测试驱动开发和自动化子代理协作，提升代码代理的开发效率与质量。支持多平台插件安装，强调YAGNI和DRY原则。 |
| 7 | [chrislgarry/Apollo-11](https://github.com/chrislgarry/Apollo-11) | Original Apollo 11 Guidance Computer (AGC) source ... | Assembly | 66.3k | 559 | 该项目保存了阿波罗11号登月舱和指令舱的原始AGC导航计算机源代码，包含Comanche055和Luminary099两个版本。代码由MIT博物馆数字化，支持历史航天软件研究与代码还原。 |
| 8 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 54.1k | 1.0k | 该项目是一个AI驱动的对冲基金概念验证，整合多个投资策略代理（如价值投资、成长投资、风险分析等），通过AI模拟交易决策流程，旨在教育用途而非实际交易。 |
| 9 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 17.8k | 965 | Kronos是首个开源金融K线基础模型，针对金融市场数据设计，采用双阶段框架，先量化K线数据为离散标记，再用Transformer进行预训练，支持多种量化任务，如预测和分析。 |
| 10 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 84.1k | 8.3k | Hermes-Agent 是一个自我改进的AI代理，具备学习循环机制，可跨会话持续优化技能、记忆用户模型，并支持多平台通信与无服务器部署。提供全功能TUI界面，兼容多种大模型接口，适用于自动化任务和个性化服务场景。 |
| 11 | [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | A collection of notebooks/recipes showcasing some ... | Jupyter Notebook | 40.2k | 922 | 该项目是Anthropic官方提供的Claude大模型实践教程合集，包含20+个Jupyter Notebook示例，涵盖文本分类、检索增强生成、多模态处理等核心功能，提供可直接使用的代码模板和集成方案。 |
| 12 | [tw93/Mole](https://github.com/tw93/Mole) | 🐹 Deep clean and optimize your Mac.... | Shell | 47.1k | 269 | Mole是Mac系统优化工具，整合CleanMyMac等工具功能，提供深度清理、智能卸载、磁盘分析、实时监控等特性，支持通过命令行管理垃圾文件、系统缓存和应用残留物，提升系统性能。 |
| 13 | [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | from vibe coding to agentic engineering - practice... | HTML | 43.7k | 2.6k | 该项目是Claude代码开发的最佳实践指南，聚焦于代理工程（Agentic Engineering）和上下文管理。通过Subagents、Commands、Skills等模块化设计，实现自动化代码生成、工作流编排及上下文感知的AI开发流程，支持插件扩展与多模态交互。 |

[查看完整数据](api/github/2026-04-14.json)
<!-- END GITHUB TRENDING -->








