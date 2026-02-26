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

**最后更新**: 2026-02-26 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [clockworklabs/SpacetimeDB](https://github.com/clockworklabs/SpacetimeDB) | Development at the speed of light... | Rust | 20.8k | 469 | SpacetimeDB是一个将数据库与服务器整合的Rust项目，通过模块化存储过程实现客户端直接访问数据库执行应用逻辑，消除传统服务器架构，提升开发与运行效率。 |
| 2 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 63.3k | 1.5k | Superpowers 是一个基于可组合技能的智能代理软件开发框架，通过分阶段需求确认、测试驱动开发（TDD）和YAGNI原则，实现自动化编码流程。代理可自主规划开发任务并执行，支持多平台插件安装，适用于需提升开发效率的场景。 |
| 3 | [muratcankoylan/Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | A comprehensive collection of Agent Skills for con... | Python | 11.7k | 923 | 该项目提供AI代理系统的上下文工程技能集合，聚焦于优化模型上下文窗口管理。包含基础技能、退化模式识别、上下文压缩等核心内容，解决代理系统中的注意力机制瓶颈问题，适用于生产级智能体架构设计与调试。 |
| 4 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source SuperAgent harness that researches,... | TypeScript | 21.1k | 622 | DeerFlow 是一个开源的 SuperAgent 工具链，通过沙盒、记忆、工具和子代理协同处理复杂任务。支持技能扩展与多模型集成，适用于需要自动化流程的 AI 代理场景。 |
| 5 | [huggingface/skills](https://github.com/huggingface/skills) | ... | Python | 7.0k | 711 | Hugging Face Skills 提供标准化的AI/ML任务定义，支持多平台编码代理工具。通过自包含的技能包（含指令、脚本和资源）实现跨工具互操作，兼容Claude、Codex、Gemini等平台，简化任务部署与管理。 |
| 6 | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | A cross-platform desktop All-in-One assistant tool... | Rust | 20.6k | 456 | 跨平台桌面工具，整合Claude Code、Codex、Gemini CLI等AI代码服务，提供统一界面和高效操作，支持多模型切换与管理。 |
| 7 | [ruvnet/claude-flow](https://github.com/ruvnet/claude-flow) | 🌊 The leading agent orchestration platform for Cl... | TypeScript | 14.9k | 210 | ruvnet/claude-flow 是基于 Claude 的多智能体协作平台，支持60+专业化AI代理，提供自我学习、容错共识和企业级安全。集成RAG、分布式群智计算，实现自动化工作流与对话式AI系统构建。 |
| 8 | [ruvnet/ruvector](https://github.com/ruvnet/ruvector) | RuVector is a High Performance, Real-Time, Self-Le... | Rust | 1.6k | 438 | RuVector是用Rust开发的高性能实时向量图神经网络数据库，具备自学习能力，可本地运行LLM、实时图更新、分布式扩展及单文件部署，支持多种AI模型和复杂查询场景。 |
| 9 | [moonshine-ai/moonshine](https://github.com/moonshine-ai/moonshine) | Fast and accurate automatic speech recognition (AS... | C | 5.2k | 273 | Moonshine 是一个用 C 语言开发的高效语音识别工具包，专为边缘设备优化，提供低延迟、高精度的实时语音处理，支持多语言和跨平台部署，适用于本地化语音应用开发。 |

[查看完整数据](api/github/2026-02-26.json)
<!-- END GITHUB TRENDING -->








