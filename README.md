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

**最后更新**: 2026-03-31 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | A visual, example-driven guide to Claude Code — fr... | Python | 12.9k | 2.4k | 提供结构化视觉教程与生产级模板，帮助开发者从零构建Claude Code应用，涵盖基础概念到高级代理系统，通过交互式学习路径快速掌握功能组合与实际应用场景。 |
| 2 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 33.1k | 3.9k | VibeVoice 是微软开源的语音AI框架，核心为VibeVoice-ASR语音识别模型，支持60分钟长音频单次处理，生成包含说话人、时间戳和内容的结构化转录，覆盖50+语言。提供实时TTS模型及多语言语音合成能力，基于Hugging Face Transformers集成，适用于语音助手、会议记录等场景。 |
| 3 | [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | Teams-first Multi-agent orchestration for Claude C... | TypeScript | 18.9k | 1.1k | 基于Claude Code的团队级多智能体编排工具，提供零学习曲线的自动化代码生成。通过深度访谈明确需求，支持团队协作流程管理与tmux CLI工作器调度，涵盖从需求分析到错误修复的全链路开发流程。 |
| 4 | [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | practice made claude perfect... | HTML | 28.5k | 2.4k | 该项目是Claude代码开发的最佳实践指南，包含代理系统、命令模板、技能配置、工作流编排及环境配置方案，提供上下文管理、插件扩展和AI工程实践方法。 |
| 5 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 20.3k | 1.9k | Hermes-Agent 是一个自我进化的AI代理系统，具备闭环学习能力，可跨平台部署并支持多模型切换。提供终端交互界面、会话记忆持久化、技能自动优化及分布式任务处理功能，适用于需要持续学习和跨平台协作的AI应用场景。 |
| 6 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 128.1k | 2.6k | Superpowers 是一个基于可组合技能的智能代理软件开发框架，通过自动化流程分解需求、生成设计、制定实施计划，并遵循TDD/YAGNI/DRY原则，实现子代理协作的自动化开发流程。 |
| 7 | [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | The absolute trainer to light up AI agents.... | Python | 16.2k | 160 | Agent-Lightning 是一个无需代码修改即可优化AI代理的训练框架，支持多代理系统选择性优化，兼容LangChain、OpenAI等主流框架，并集成强化学习、提示优化等算法，提升代理性能。 |
| 8 | [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | Turn any PDF or image document into structured dat... | Python | 74.1k | 440 | PaddlePaddle/PaddleOCR是轻量级OCR工具，支持100+语言，可将PDF/图像转为JSON/Markdown结构化数据。采用SOTA文档视觉语言模型PaddleOCR-VL-1.5和PP-StructureV3，精准解析复杂文档，适用于智能RAG和数据提取场景。 |
| 9 | [Dimillian/Skills](https://github.com/Dimillian/Skills) | My Codex Skills... | Shell | 2.8k | 173 | 提供Apple平台开发自动化技能集合，包含GitHub工作流、代码重构、调试工具、包管理等功能，通过Shell脚本实现开发任务的标准化和效率提升。 |
| 10 | [sherlock-project/sherlock](https://github.com/sherlock-project/sherlock) | Hunt down social media accounts by username across... | Python | 75.5k | 862 | Sherlock 是一个用于通过用户名在400+社交平台自动查找账户的工具，支持多用户搜索、结果输出及多种参数配置，适用于安全测试和身份验证场景。 |
| 11 | [neovim/neovim](https://github.com/neovim/neovim) | Vim-fork focused on extensibility and usability... | Vim Script | 97.9k | 95 | Neovim是Vim的现代化分支，专注于提升可扩展性与用户体验。支持多语言API、异步任务控制、共享数据及跨平台GUI，兼容大部分Vim插件，适用于需要高度定制化的开发环境。 |
| 12 | [vas3k/TaxHacker](https://github.com/vas3k/TaxHacker) | Self-hosted AI accounting app. LLM analyzer for re... | TypeScript | 3.7k | 325 | TaxHacker是一款自托管的AI会计应用，通过LLM自动解析收据、发票和交易数据，支持自定义提示与分类，实现费用和收入的自动化追踪与结构化存储，提供货币转换、多项目管理和智能分类功能。 |
| 13 | [OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev) | ChatDev 2.0: Dev All through LLM-powered Multi-Age... | Python | 32.4k | 117 | ChatDev 2.0 是基于LLM的零代码多智能体协作平台，通过配置即可构建自动化开发系统，支持软件开发全生命周期及数据可视化、3D生成等复杂场景。 |
| 14 | [jwasham/coding-interview-university](https://github.com/jwasham/coding-interview-university) | A complete computer science study plan to become a... | - | 339.6k | 874 | 该项目是一个全面的计算机科学学习计划，旨在帮助学习者准备软件工程师的技术面试，涵盖算法、数据结构、系统设计等内容，适合自学者系统性地提升编程能力。 |

[查看完整数据](api/github/2026-03-31.json)
<!-- END GITHUB TRENDING -->








