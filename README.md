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

**最后更新**: 2026-03-12 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [microsoft/BitNet](https://github.com/microsoft/BitNet) | Official inference framework for 1-bit LLMs... | Python | 32.2k | 2.1k | Microsoft的BitNet项目提供1-bit大语言模型的高效推理框架，支持CPU/GPU加速。通过优化内核实现1.37x-6.17x性能提升及55.4%-82.2%能效优化，可本地部署超大规模模型，适用于边缘计算与低功耗场景。 |
| 2 | [fishaudio/fish-speech](https://github.com/fishaudio/fish-speech) | SOTA Open Source TTS... | Python | 26.3k | 630 | Fish Audio S2是领先的开源文本到语音系统，采用强化学习对齐和双自回归架构，支持多语言、情感控制及多说话人生成，提供高精度语音合成，模型变体如S2-Pro（4B参数）在HuggingFace可用。 |
| 3 | [langflow-ai/openrag](https://github.com/langflow-ai/openrag) | OpenRAG is a comprehensive, single package Retriev... | Python | 1.5k | 491 | OpenRAG是一个基于Langflow、Docling和Opensearch的RAG平台，支持智能文档搜索与AI对话。用户可通过聊天界面上传处理文档，利用大语言模型和语义搜索进行知识查询，提供可视化工作流构建和企业级扩展能力。 |
| 4 | [InsForge/InsForge](https://github.com/InsForge/InsForge) | Give agents everything they need to ship fullstack... | TypeScript | 3.1k | 260 | InsForge为AI编码代理和编辑器提供全栈后端开发平台，通过语义层抽象数据库、认证、存储等后端原语，支持代理直接配置、操作和监控后端系统，简化AI驱动的全栈应用开发流程。 |
| 5 | [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Hindsight: Agent Memory That Learns... | Python | 3.0k | 300 | Hindsight 是一种基于 Python 的智能代理记忆系统，通过创新算法实现长期记忆学习，超越传统 RAG 和知识图谱技术。在 LongMemEval 基准测试中表现优异，支持快速集成与灵活控制，适用于需要持续学习的 AI 代理场景。 |
| 6 | [alibaba/page-agent](https://github.com/alibaba/page-agent) | JavaScript in-page GUI agent. Control web interfac... | TypeScript | 5.9k | 1.2k | 基于TypeScript的网页JavaScript GUI代理工具，通过自然语言控制网页界面。支持无需扩展的直接集成，文本化DOM操作，可接入自定义大模型，提供人性化交互界面和多页面任务扩展。 |
| 7 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 79.9k | 1.7k | Superpowers 是一个基于代理技能框架的软件开发方法论，通过可组合的技能和自动化流程管理开发任务。它强调测试驱动开发（TDD）、YAGNI 和 DRY 原则，支持编码代理自主执行开发任务，减少人工干预。 |
| 8 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 6.1k | 1.2k | Hermes-Agent 是一个由 Nous Research 开发的自我改进型 AI 代理，具备内置学习循环，可自主创建和优化技能、跨会话记忆存储、多平台消息集成及任务自动化。支持多种大模型接口，可部署于云端或本地，适用于需要持续学习与跨平台协作的智能代理场景。 |
| 9 | [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | A Simple and Universal Swarm Intelligence Engine, ... | Python | 19.0k | 1.8k | MiroFish是一个基于多智能体技术的群体智能预测引擎，通过构建数字世界模拟现实事件发展。用户上传种子材料后，系统生成预测报告及可交互的虚拟场景，支持政策模拟、舆情推演、文学结局预测等功能。 |
| 10 | [google-ai-edge/LiteRT](https://github.com/google-ai-edge/LiteRT) | LiteRT, successor to TensorFlow Lite. is Google's ... | C++ | 1.7k | 6 | LiteRT是Google推出的边缘设备AI推理框架，支持跨平台部署。提供GPU/NPU加速、异步执行、自动加速器选择等特性，优化ML与生成式AI性能，兼容Android/iOS/Linux等多系统。 |
| 11 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 34.6k | 4.1k | 提供多种AI代理工具，涵盖前端开发、社区运营、创意注入等场景，每个代理具备专业技能和个性化交互方式，支持多工具集成实现自动化任务处理。 |
| 12 | [google/A2UI](https://github.com/google/A2UI) | ... | TypeScript | 12.6k | 220 | A2UI是谷歌开源的代理到用户界面框架，通过声明式JSON格式实现安全、跨平台的UI生成与渲染。支持增量更新和多客户端渲染，确保代理生成的UI安全可控，适用于需要动态交互界面的AI系统。 |
| 13 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 10.2k | 144 | 官方Claude代码插件目录，提供内部及第三方高质量插件，支持安装、开发与贡献。包含插件结构规范和安全使用指南。 |

[查看完整数据](api/github/2026-03-12.json)
<!-- END GITHUB TRENDING -->








