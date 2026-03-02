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

**最后更新**: 2026-03-02 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [ruvnet/wifi-densepose](https://github.com/ruvnet/wifi-densepose) | WiFi DensePose turns commodity WiFi signals into r... | Rust | 21.7k | 5.1k | WiFi DensePose通过分析WiFi信道状态信息（CSI），实现无视频的人体姿态估计、呼吸心跳监测及穿墙存在检测，采用物理模型与机器学习结合的实时信号处理方案。 |
| 2 | [moeru-ai/airi](https://github.com/moeru-ai/airi) | 💖🧸 Self hosted, you-owned Grok Companion, a cont... | TypeScript | 21.4k | 1.4k | A self-hosted AI virtual companion inspired by Neuro-sama, enabling users to create and interact with customizable digital entities for real-time voice chat, gaming (Minecraft/Factorio), and cross-pla |
| 3 | [anthropics/prompt-eng-interactive-tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) | Anthropic's Interactive Prompt Engineering Tutoria... | Jupyter Notebook | 31.5k | 683 | Anthropic提供的交互式提示工程教程，通过9个章节系统讲解如何构建高效提示词。包含实践练习、示例 Playground 和答案解析，覆盖基础结构、清晰指令、角色分配、输出格式化等主题，帮助用户提升与Claude模型的交互效果。 |
| 4 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The leading agent orchestration platform for Cl... | TypeScript | 18.0k | 821 | ruFLO 是面向 Claude 的智能代理协调平台，支持多代理系统部署、自主工作流编排及对话式 AI 构建，提供企业级架构、分布式群智、RAG 与 Claude 代码集成能力。 |
| 5 | [alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox) | OpenSandbox is a general-purpose sandbox platform ... | Python | 4.3k | 982 | OpenSandbox是阿里巴巴开源的AI应用通用沙盒平台，支持多语言SDK和统一API，集成Docker/Kubernetes运行时，提供代码解释器、浏览器自动化及桌面环境等场景支持，适用于AI代码执行、代理评估与强化学习训练。 |
| 6 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 89.6k | 646 | MarkItDown是微软开发的Python工具，可将PDF、Office文档、图片、音频等多种格式转换为Markdown，支持LLM集成和文本分析。具结构化内容保留能力，适用于文档预处理和自动化转换场景。 |
| 7 | [K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills) | A set of ready to use Agent Skills for research, s... | Python | 11.0k | 848 | 提供148+科学研发技能集，支持生物信息学、化学信息学、临床研究等多领域AI代理，集成金融/市场数据接口，提升科研工作流自动化能力 |
| 8 | [superset-sh/superset](https://github.com/superset-sh/superset) | IDE for the AI Agents Era - Run an army of Claude ... | TypeScript | 3.5k | 592 | Superset是面向AI代理时代的IDE，支持并行运行多个CLI编码代理（如Claude Code、Codex等）。通过工作树隔离实现任务独立，提供实时监控、内置差异查看器和快速上下文切换功能，提升开发效率。 |
| 9 | [servo/servo](https://github.com/servo/servo) | Servo aims to empower developers with a lightweigh... | Rust | 35.7k | 63 | Servo是一个用Rust编写的轻量级高性能浏览器引擎，旨在为应用程序提供高效的Web技术嵌入方案。项目聚焦于现代Web标准支持与跨平台兼容性，采用模块化架构设计。 |

[查看完整数据](api/github/2026-03-02.json)
<!-- END GITHUB TRENDING -->








