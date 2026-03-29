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

**最后更新**: 2026-03-29 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | A visual, example-driven guide to Claude Code — fr... | Python | 6.5k | 1.1k | 提供Claude Code的结构化学习路径，包含视觉教程、Mermaid图表和可直接使用的代码模板，帮助用户从基础到高级掌握代理、钩子、技能等核心功能，解决官方文档示例不足的问题。 |
| 2 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 27.1k | 1.2k | VibeVoice 是微软开源的前沿语音AI项目，核心为VibeVoice-ASR语音识别模型，支持60分钟长音频单次处理，生成包含说话人、时间戳和内容的结构化转录，覆盖50+语言。集成Hugging Face Transformers，支持多语言及用户自定义上下文，适用于实时语音转写与长音频处理场景。 |
| 3 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 16.6k | 997 | Hermes-Agent 是一个自我改进的AI代理，支持跨平台对话、闭环学习与技能优化，可部署于多种基础设施。具备多模型兼容、终端交互、定时任务及并行处理能力，适用于需要持续进化和跨场景协作的智能应用。 |
| 4 | [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Financial data platform for analysts, quants and A... | Python | 64.0k | 113 | OpenBB-finance/OpenBB 是一个金融数据平台，提供开源工具集整合多源数据至AI代理、分析仪表板等场景，支持历史数据获取与可视化，实现‘连接一次，随处消费’的数据架构。 |
| 5 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 122.8k | 2.2k | Superpowers 是一个基于可组合技能的软件开发代理框架，通过自动化工作流提升编码效率。它通过需求确认、分块设计、TDD实施及子代理协作，实现无需人工干预的全流程开发，支持YAGNI和DRY原则。 |
| 6 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 42.5k | 464 | Claude-Mem 是一个为 Claude Code 设计的持久化记忆压缩插件，通过自动捕获编码会话中的工具使用记录，生成语义摘要并注入后续会话，实现跨会话的知识连续性保持。 |
| 7 | [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) | real time face swap and one-click video deepfake w... | Python | 85.2k | 1.1k | 该项目提供实时人脸交换和一键视频深度伪造功能，仅需单张图像即可生成深度伪造内容。采用Python开发，内置内容过滤机制以确保伦理合规，适用于艺术创作、动画设计及服装展示等场景。 |
| 8 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 15.3k | 1.2k | 该Python项目是一个AI代理技能，可跨Reddit、X、YouTube等平台抓取过去30天的最新内容，通过社区投票、分享和讨论生成结构化摘要，支持对比分析、配置管理及多平台数据整合。 |
| 9 | [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Bash is all you need - A nano claude code–like 「ag... | TypeScript | 42.6k | 908 | 该项目是一个用TypeScript构建的纳米级Claude代码代理框架，旨在从零开始实现AI代理系统。通过神经网络训练，使模型具备环境感知、目标推理和行动执行能力，参考了DeepMind、OpenAI等公司的代理技术理念。 |
| 10 | [fastfetch-cli/fastfetch](https://github.com/fastfetch-cli/fastfetch) | A maintained, feature-rich and performance oriente... | C | 21.1k | 28 | FastFetch 是用 C 语言开发的高性能系统信息工具，功能类似 Neofetch，支持多平台（Linux/macOS/Windows/Android 等），可展示系统详细信息并提供高度可定制化配置，专注于性能优化和跨平台兼容性。 |
| 11 | [moeru-ai/airi](https://github.com/moeru-ai/airi) | 💖🧸 Self hosted, you-owned Grok Companion, a cont... | TypeScript | 36.3k | 213 | A self-hosted AI virtual companion inspired by Neuro-sama, supporting real-time voice chat, Minecraft/Factorio gameplay, and cross-platform deployment. Features RAG, memory systems, and multi-language |
| 12 | [twentyhq/twenty](https://github.com/twentyhq/twenty) | Building a modern alternative to Salesforce, power... | TypeScript | 42.9k | 451 | Twenty 是一个开源客户关系管理（CRM）平台，旨在替代 Salesforce。它提供自定义数据模型、工作流自动化、权限管理、多视图布局以及邮件、日历等集成功能，强调开源社区协作与低成本替代方案。 |

[查看完整数据](api/github/2026-03-29.json)
<!-- END GITHUB TRENDING -->








