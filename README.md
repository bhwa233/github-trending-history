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

**最后更新**: 2026-04-16 | **成功**: 10 | **失败**: 4

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 50.2k | 8.0k | 该项目提供一份基于Andrej Karpathy观察的Claude Code行为改进指南，聚焦四大原则：思考先行、简洁优先、精准修改、目标驱动执行，旨在帮助LLM在编写代码时避免误判、过度抽象、无意义改动，并提升代码质量与可维护性。 |
| 2 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 59.9k | 1.9k | Claude-Mem 是一个为 Claude Code 设计的持久化记忆压缩系统，能够自动捕获编码会话中的工具使用情况，通过 AI 压缩生成语义摘要，并在后续会话中注入相关上下文。该插件支持多语言界面，提供一键安装功能，可与 Claude Code、Gemini CLI 和 OpenCode 等多种开发工具集成，帮助开发者在不同会话间保持项目知识的连续性。 |
| 3 | [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | Self-evolving agent: grows skill tree from 3.3K-li... | Python | 2.8k | 872 | GenericAgent 是一种自适应代理，自适应技能树，高效轻量，适合自动化任务。 |
| 4 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source voice synthesis studio... | TypeScript | 19.1k | 880 | Voicebox 是本地化开源语音合成工作室，支持几秒音频克隆声纹，提供 5 引擎、23 语言的 TTS，支持音高、混响、延迟等后处理效果，提供多轨道时间线编辑，完整隐私保护，并提供 REST API 供集成使用。 |
| 5 | [vercel-labs/open-agents](https://github.com/vercel-labs/open-agents) | An open source template for building cloud agents.... | TypeScript | 3.2k | 738 | Open Agents 是一个基于 Vercel 的开源参考应用，提供 Web UI、持久化工作流、沙盒 VM 三层架构，支持聊天驱动的编码代理。代理与沙盒分离，代理通过工具与沙盒交互，沙盒可独立休眠/恢复。功能包括文件、搜索、shell、任务、技能、网页工具，支持多步持久化执行、流式输出、取消、自动提交 PR，支持语音输入。 |
| 6 | [google/magika](https://github.com/google/magika) | Fast and accurate AI powered file content types de... | Python | 14.8k | 854 | Magika是Google开源的AI驱动文件类型检测工具，基于深度学习模型实现毫秒级高精度文件识别。该模型仅几MB大小，在200+文件类型上达到约99%准确率，已在Gmail、Drive等Google产品中大规模部署，每周处理数千亿样本。 |
| 7 | [steipete/wacli](https://github.com/steipete/wacli) | WhatsApp CLI... | Go | 1.7k | 321 | WhatsApp CLI提供消息管理功能，支持同步、搜索和发送。 |
| 8 | [topoteretes/cognee](https://github.com/topoteretes/cognee) | Knowledge Engine for AI Agent Memory in 6 lines of... | Python | 15.8k | 170 | Cognee 是一个基于向量检索、图数据库和认知科学的开源知识引擎，提供持久化记忆、学习代理、跨代理知识共享及可插拔的 LLM 接口，支持快速上下文管理。 |
| 9 | [z-lab/dflash](https://github.com/z-lab/dflash) | DFlash: Block Diffusion for Flash Speculative Deco... | Python | 1.6k | 195 | DFlash 是一个专为投机采样（Speculative Decoding）设计的轻量级块扩散模型（Block Diffusion Model）。它通过高效的并行草稿生成技术，显著提升了大语言模型（LLM）的推理速度。该项目支持多种主流模型（如 Qwen、Llama、Kimi 等）的加速，并提供了针对 Transformers、SGLang、vLLM 及 Apple Silicon (MLX) 的集成支持，旨在实现高质量且低延迟的并行文 |
| 10 | [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) | 《动手学大模型Dive into LLMs》系列编程实践教程... | Jupyter Notebook | 30.8k | 1.4k | 项目聚焦大模型开发全流程，结合教程与公益教材，助力AI教育与研究。 |
| 11 | [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | A lightweight, powerful framework for multi-agent ... | Python | 21.3k | 172 | 处理失败 |
| 12 | [EvoMap/evolver](https://github.com/EvoMap/evolver) | The GEP-Powered Self-Evolution Engine for AI Agent... | JavaScript | 3.2k | 812 | 处理失败 |
| 13 | [SimoneAvogadro/android-reverse-engineering-skill](https://github.com/SimoneAvogadro/android-reverse-engineering-skill) | Claude Code skill to support Android app's reverse... | Shell | 2.3k | 375 | 处理失败 |
| 14 | [BasedHardware/omi](https://github.com/BasedHardware/omi) | AI that sees your screen, listens to your conversa... | Dart | 9.1k | 378 | 处理失败 |

[查看完整数据](api/github/2026-04-16.json)
<!-- END GITHUB TRENDING -->






