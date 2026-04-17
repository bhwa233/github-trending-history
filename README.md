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

**最后更新**: 2026-04-17 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 51.9k | 8.0k | 这是一个基于 Andrej Karpathy 关于 LLM 编码陷阱观察而创建的单一 CLAUDE.md 文件，旨在改善 Claude Code 的行为。它包含四个核心原则：编码前思考、简单优先、外科手术式修改和目标驱动执行，旨在解决模型假设错误、过度复杂化代码及意外修改等问题。 |
| 2 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 60.5k | 1.9k | 这是一个为 Claude Code 构建的持久化内存压缩插件。它利用 TypeScript 自动捕获 Claude 的工具使用记录，通过 AI 进行语义压缩，并将上下文注入未来会话。这解决了会话断开导致的上下文丢失问题，确保 Claude 能持续保持对项目的连贯认知。 |
| 3 | [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | Self-evolving agent: grows skill tree from 3.3K-li... | Python | 3.1k | 872 | GenericAgent 是一个极简的 Python 自我进化自主智能体框架。仅用约 3K 行核心代码，通过 9 个原子工具赋予 LLM 系统级控制能力。其核心机制是“自我进化”，能将新任务自动转化为技能并存储，形成个人技能树，支持多种大模型，且 Token 消耗极低。 |
| 4 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source voice synthesis studio... | TypeScript | 19.3k | 880 | Voicebox 是一个本地优先的开源语音合成工作室，提供免费且注重隐私的语音克隆功能。支持从少量音频克隆声音，生成23种语言的语音，内置5种TTS引擎，支持后期处理效果和多轨编辑。基于Tauri构建，性能优异，适合开发者和创作者在本地构建语音应用。 |
| 5 | [vercel-labs/open-agents](https://github.com/vercel-labs/open-agents) | An open source template for building cloud agents.... | TypeScript | 3.4k | 738 | 这是一个基于 Vercel 的开源模板，用于构建后台编码代理。采用三层架构（Web、代理工作流、沙箱 VM），将代理逻辑与执行环境分离。支持通过聊天驱动编码、文件操作、Git 集成及自动提交 PR，旨在让 AI 从提示词到代码变更无需人工干预。 |
| 6 | [google/magika](https://github.com/google/magika) | Fast and accurate AI powered file content types de... | Python | 15.0k | 854 | Magika 是 Google 开发的基于深度学习的文件类型检测工具。它使用轻量级模型，能在单 CPU 上实现毫秒级检测，准确率高达 99%。支持命令行、Python API 及多语言绑定，已集成至 Gmail、Drive 等服务，用于大规模安全扫描。 |
| 7 | [steipete/wacli](https://github.com/steipete/wacli) | WhatsApp CLI... | Go | 1.8k | 321 | 这是一个基于 Go 语言开发的 WhatsApp 命令行工具。它利用 whatsmeow 库，专注于本地消息历史同步、快速离线搜索以及发送消息和群组管理。支持通过 Homebrew 安装或本地编译，提供认证、同步、搜索、媒体下载及文件发送等功能，是 WhatsApp Web 协议的第三方实现。 |
| 8 | [topoteretes/cognee](https://github.com/topoteretes/cognee) | Knowledge Engine for AI Agent Memory in 6 lines of... | Python | 16.0k | 170 | Cognee 是一个开源知识引擎，旨在将数据转化为 AI Agent 的记忆。它结合向量搜索、图数据库和认知科学方法，支持多模态数据摄取。核心功能包括 remember（存储）、recall（检索）、forget（遗忘）和 improve（优化），帮助构建持久化、可学习和可信的 AI Agent。 |
| 9 | [z-lab/dflash](https://github.com/z-lab/dflash) | DFlash: Block Diffusion for Flash Speculative Deco... | Python | 1.7k | 195 | DFlash 是一个专为快速推测解码设计的轻量级块扩散模型。它通过并行草稿生成显著提升推理效率，支持 Qwen、Kimi、Llama 等多种主流大模型，并兼容 Transformers、SGLang 和 vLLM 等多种推理框架。 |
| 10 | [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) | 《动手学大模型Dive into LLMs》系列编程实践教程... | Jupyter Notebook | 31.1k | 1.4k | 这是一个由上海交通大学开发的公益大模型编程实践教程，基于 Jupyter Notebook。内容涵盖微调、提示学习、知识编辑、数学推理、越狱攻击、隐写术、多模态、GUI Agent、智能体安全及RLHF对齐等前沿主题。项目还联合华为昇腾推出了国产化大模型开发全流程课程，旨在帮助初学者快速入门大模型开发与学术研究。 |
| 11 | [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | A lightweight, powerful framework for multi-agent ... | Python | 21.4k | 172 | 这是一个轻量级且强大的 Python 框架，专为构建多智能体工作流设计。它支持 OpenAI 及 100+ 其他 LLM，提供智能体配置、工具集成、护栏机制、人工介入、会话管理和运行追踪等功能。特别支持沙盒智能体进行长时间任务处理，以及基于 gpt-realtime-1.5 的实时语音智能体，帮助开发者高效构建复杂的 AI 应用。 |
| 12 | [EvoMap/evolver](https://github.com/EvoMap/evolver) | The GEP-Powered Self-Evolution Engine for AI Agent... | JavaScript | 3.4k | 812 | 这是一个基于 GEP（基因表达编程）的 AI Agent 自进化引擎。它通过扫描运行日志和错误模式，自动选择最佳基因或胶囊，生成受协议约束的 GEP 提示来指导 Agent 进化。它将临时的提示调整转化为可审计、可重用的进化资产，支持离线运行和与 EvoMap 网络协作。 |
| 13 | [SimoneAvogadro/android-reverse-engineering-skill](https://github.com/SimoneAvogadro/android-reverse-engineering-skill) | Claude Code skill to support Android app's reverse... | Shell | 2.4k | 375 | 这是一个用于 Android 应用逆向工程的 Claude Code 技能。它利用 jadx 和 Fernflower 等工具反编译 APK、JAR 等文件，提取 HTTP API（如 Retrofit 端点、OkHttp 调用）及认证模式，并分析应用结构与调用流程，支持处理混淆代码。 |
| 14 | [BasedHardware/omi](https://github.com/BasedHardware/omi) | AI that sees your screen, listens to your conversa... | Dart | 9.4k | 378 | Omi 是一个跨平台的 AI “第二大脑”助手。它通过屏幕捕获、实时语音转录和对话分析，帮助用户生成摘要和行动项。支持桌面、手机和可穿戴设备，完全开源，旨在成为比用户自身更值得信赖的记忆系统。 |

[查看完整数据](api/github/2026-04-17.json)
<!-- END GITHUB TRENDING -->




