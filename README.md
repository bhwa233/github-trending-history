# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 默认通过 Cloudflare AI Gateway 调用 `gpt-5.4` 生成中英文项目总结、技术栈和适用场景
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
- **AI 服务**: Cloudflare AI Gateway（OpenAI 兼容接口），保留 OpenRouter 兼容配置
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 默认：Cloudflare AI Gateway
export AI_API_KEY=your_cloudflare_ai_gateway_token
export AI_API_URL=https://gateway.ai.cloudflare.com/v1/5697c41d4efbabcbac78eafe2cdf036b/default/custom-right/codex/v1/chat/completions
export AI_MODEL=gpt-5.4
export AI_AUTH_HEADER=cf-aig-authorization
export AI_AUTH_PREFIX=Bearer

# 兼容：OpenRouter
# export OPENROUTER_API_KEY=your_openrouter_api_key
# export OPENROUTER_MODEL=openrouter/free

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
| 1 | [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 51.7k | 8.0k | 该项目提供单一的 CLAUDE.md 指南文件，用于优化 Claude Code 在编码中的行为。其内容基于 Andrej Karpathy 对大模型编码常见问题的观察，围绕“先思考后编码、简洁优先、外科式修改、目标驱动执行”四项原则，帮助模型减少误判、避免过度设计、控制无关改动，并以测试和可验证目标提升代码交付质量。 |
| 2 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 60.5k | 1.9k | claude-mem 是一个面向 Claude Code 的持久化记忆插件，可自动捕获编码会话中的工具使用与操作上下文，借助 AI 生成压缩语义摘要，并在后续会话中注入相关背景信息，帮助跨会话延续项目认知。支持 Claude Code、Gemini CLI、OpenCode 及 OpenClaw 网关，强调便捷安装与自动化上下文恢复。 |
| 3 | [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | Self-evolving agent: grows skill tree from 3.3K-li... | Python | 3.0k | 872 | GenericAgent 是一个极简的 Python 自进化智能体框架，约 3K 行核心代码配合 9 个原子工具和简短 Agent Loop，即可控制浏览器、终端、文件系统、键鼠、屏幕与 ADB 设备。其特点是把完成过的任务自动沉淀为可复用技能，持续生长个人技能树，并以较低上下文与更少 Token 成本实现跨模型、本地系统级自动化。 |
| 4 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source voice synthesis studio... | TypeScript | 19.3k | 880 | Voicebox 是一个开源、本地优先的语音合成与声音克隆工作室，可在本机完成声音克隆、23种语言语音生成、后期音效处理及多角色时间线编辑。项目支持 5 种 TTS 引擎，提供 REST API，基于 Tauri 构建，强调隐私保护、跨平台运行与原生性能，适合替代在线语音合成服务。 |
| 5 | [vercel-labs/open-agents](https://github.com/vercel-labs/open-agents) | An open source template for building cloud agents.... | TypeScript | 3.4k | 738 | Open Agents 是一个用于在 Vercel 上构建云端后台编程代理的开源参考模板，包含 Web UI、持久化代理工作流、Sandbox VM 编排和 GitHub 集成。其核心设计是将代理运行与沙箱执行环境解耦，支持聊天驱动编码、文件/搜索/Shell 工具调用、多步可恢复执行、仓库克隆分支开发、自动提交与 PR 创建，适合二次开发定制。 |
| 6 | [google/magika](https://github.com/google/magika) | Fast and accurate AI powered file content types de... | Python | 15.0k | 854 | Magika 是 Google 开源的 AI 文件类型识别工具，基于轻量深度学习模型，可在单 CPU 上以毫秒级速度检测 200+ 二进制与文本内容类型，平均精度与召回约 99%。项目提供 Python API、命令行工具及多语言绑定，适合大规模文件扫描与安全内容分流。 |
| 7 | [steipete/wacli](https://github.com/steipete/wacli) | WhatsApp CLI... | Go | 1.8k | 321 | wacli 是基于 Go 与 whatsmeow 的第三方 WhatsApp 命令行工具，支持扫码认证、本地消息同步与持续抓取、离线搜索、发送文本/文件、联系人与群组管理、历史回填及媒体下载。项目核心功能已具备，适合通过 CLI 高效管理和检索 WhatsApp 数据。 |
| 8 | [topoteretes/cognee](https://github.com/topoteretes/cognee) | Knowledge Engine for AI Agent Memory in 6 lines of... | Python | 16.0k | 170 | Cognee 是面向 AI Agent 的开源知识引擎，基于 Python，支持以少量代码完成数据摄取、记忆、召回、遗忘与持续优化。项目融合向量检索、图数据库与认知科学方法，提供统一知识基础设施、持久化记忆、反馈学习、跨代理知识共享，以及可追踪、隔离和审计的可信能力，适合构建具备长期记忆的智能体系统。 |
| 9 | [z-lab/dflash](https://github.com/z-lab/dflash) | DFlash: Block Diffusion for Flash Speculative Deco... | Python | 1.7k | 195 | DFlash 是一个面向大语言模型推理加速的轻量级块扩散推测解码项目，核心目标是在保证生成质量的同时实现高效并行 draft。项目基于 Python，支持 Transformers、SGLang、vLLM 与 MLX，已适配多种 Qwen、Llama、gpt-oss、Kimi 模型，并提供快速部署方式，适合用于高吞吐低时延的 LLM 服务优化。 |
| 10 | [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) | 《动手学大模型Dive into LLMs》系列编程实践教程... | Jupyter Notebook | 31.0k | 1.4k | 这是一个面向大模型入门与实践的公益教程项目，基于课程讲义扩展，提供课件、教程与脚本。内容覆盖微调部署、提示学习、知识编辑、数学推理、水印、越狱攻击、隐写、多模态、GUI智能体、智能体安全与RLHF对齐，并新增基于昇腾社区的国产化全流程开发教程。 |
| 11 | [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | A lightweight, powerful framework for multi-agent ... | Python | 21.4k | 172 | openai-agents-python 是一个面向多智能体工作流的 Python 轻量级框架，支持 OpenAI Responses/Chat Completions 及 100+ 模型提供商。核心能力包括 Agents、Sandbox Agents、工具调用、任务移交、护栏校验、人工介入、会话管理、运行追踪与实时语音代理，适合快速构建可观测、可扩展的智能体应用。 |
| 12 | [EvoMap/evolver](https://github.com/EvoMap/evolver) | The GEP-Powered Self-Evolution Engine for AI Agent... | JavaScript | 3.4k | 812 | Evolver 是基于 GEP（Genome Evolution Protocol）的 AI 代理自进化引擎，核心作用是扫描运行日志与错误信号，从预置 Gene/Capsule 资产中选择合适策略，生成受协议约束的演化提示词，并结合 Git 提供回滚、影响范围计算与审计追踪。它不直接改代码，更适合将零散 prompt 调优沉淀为可复用、可治理的进化资产。 |
| 13 | [SimoneAvogadro/android-reverse-engineering-skill](https://github.com/SimoneAvogadro/android-reverse-engineering-skill) | Claude Code skill to support Android app's reverse... | Shell | 2.4k | 375 | 该项目是面向 Claude Code 的 Android 逆向分析技能插件，支持对 APK/XAPK/JAR/AAR 进行反编译，结合 jadx、Vineflower/Fernflower 提取 Retrofit、OkHttp、硬编码 URL、鉴权头等 HTTP API 信息，并追踪从界面层到网络请求的调用链，适合在无源码情况下分析应用结构与接口实现。 |
| 14 | [BasedHardware/omi](https://github.com/BasedHardware/omi) | AI that sees your screen, listens to your conversa... | Dart | 9.3k | 378 | Omi 是一个开源“第二大脑”项目，可在桌面、手机与可穿戴设备上采集屏幕内容和对话音频，进行实时转录、总结与行动项生成，并提供具备长期记忆的 AI 聊天能力。项目支持快速体验与完整本地开发，整体架构涵盖 Flutter 移动端、Swift/Rust 桌面端，以及 Python 后端服务。 |

[查看完整数据](api/github/2026-04-17.json)
<!-- END GITHUB TRENDING -->






