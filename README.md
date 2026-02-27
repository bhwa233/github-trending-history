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

**最后更新**: 2026-02-27 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [ruvnet/wifi-densepose](https://github.com/ruvnet/wifi-densepose) | Production-ready implementation of InvisPose - a r... | Python | 9.1k | 362 | 基于WiFi信号的实时人体姿态估计系统，通过CSI数据和机器学习实现非接触式全身追踪，支持多人员检测与隐私保护，适用于医疗、智能家居等领域。 |
| 2 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source SuperAgent harness that researches,... | TypeScript | 21.8k | 692 | DeerFlow 是一个开源的超级代理框架，通过子代理、记忆、沙箱和可扩展技能协同处理复杂任务，支持自动化研究、编码与创作，适用于需要深度分析和长期任务管理的场景。 |
| 3 | [moonshine-ai/moonshine](https://github.com/moonshine-ai/moonshine) | Fast and accurate automatic speech recognition (AS... | C | 5.8k | 587 | Moonshine-ai/moonshine 是一个用C语言开发的边缘设备语音识别工具包，提供低延迟、高精度的实时语音处理能力。支持多语言识别与跨平台部署，包含语音转录、说话人辨识等完整解决方案，无需云端服务即可本地化运行。 |
| 4 | [muratcankoylan/Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | A comprehensive collection of Agent Skills for con... | Python | 12.4k | 836 | 该项目提供AI代理系统的上下文工程技能集合，解决模型上下文窗口管理难题。包含基础技能、退化模式识别、上下文压缩等技术，优化代理系统在注意力机制下的表现，提升任务执行效果。 |
| 5 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 64.7k | 1.5k | Superpowers 是一个基于可组合技能的软件开发代理框架，通过自动化流程管理实现TDD、YAGNI和DRY原则。代理通过交互式需求分析生成分块设计，再由子代理执行开发任务，提升代码质量与开发效率。 |
| 6 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The leading agent orchestration platform for Cl... | TypeScript | 15.6k | 545 | Ruflo是基于Claude的多智能体编排平台，支持60+专业代理协作，具备自学习、容错共识和企业级安全，采用Rust/WASM构建分布式群智系统，集成RAG与代码生成能力。 |
| 7 | [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 📚 《从零开始构建智能体》——从零开始的智能体原理与实践教程... | Python | 23.0k | 312 | 《从零开始构建智能体》教程，涵盖智能体基础理论、经典范式、框架开发及高级技术，如记忆系统、上下文工程、Agentic-RL，并通过实战项目如智能旅行助手、赛博小镇等提升实际开发能力。 |
| 8 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 6.2k | 1.3k | GitNexus是基于浏览器的代码知识图谱工具，可本地化索引代码库生成依赖关系图谱，并通过CLI/MCP接口为AI代理提供深度代码分析能力，支持隐私保护的代码探索与智能交互。 |
| 9 | [moeru-ai/airi](https://github.com/moeru-ai/airi) | 💖🧸 Self hosted, you-owned Grok Companion, a cont... | TypeScript | 18.2k | 229 | Airi是一个自托管的AI虚拟角色项目，旨在复刻Neuro-sama功能，支持实时语音聊天、Minecraft/Factorio游戏，提供跨平台数字伴侣体验。采用TypeScript开发，集成RAG、内存系统和嵌入式数据库。 |
| 10 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Shell | 71.1k | 515 | Claude Code 是一个终端内使用的代理编码工具，通过自然语言命令执行代码任务、解释复杂代码并管理 Git 流程，支持插件扩展以提升开发效率。 |
| 11 | [ruvnet/ruvector](https://github.com/ruvnet/ruvector) | RuVector is a High Performance, Real-Time, Self-Le... | Rust | 1.9k | 411 | RuVector是一个用Rust开发的高性能实时自学习向量图神经网络数据库，支持本地AI推理和PostgreSQL集成。通过SONA引擎实现搜索结果自优化、工作负载自动调优，具备图查询、超边关系处理及跨领域迁移学习能力，适用于低功耗实时AI代理场景。 |
| 12 | [Wei-Shaw/claude-relay-service](https://github.com/Wei-Shaw/claude-relay-service) | CRS-自建Claude Code镜像，一站式开源中转服务，让 Claude、OpenAI、Gemi... | JavaScript | 8.5k | 74 | 自建Claude Code中转服务，支持多账户管理、拼车分摊成本、隐私保护及性能优化，提供监控面板和智能切换功能。 |
| 13 | [tukaani-project/xz](https://github.com/tukaani-project/xz) | XZ Utils... | C | 1.1k | 84 | XZ Utils是C语言编写的高效数据压缩库及工具，支持.xz和.lzma格式。采用LZMA2算法实现比gzip高30%的压缩率，提供类似zlib的API和gzip风格命令行，兼顾高压缩比与快速解压性能，适用于软件分发等场景。 |
| 14 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 🕷️ An adaptive Web Scraping framework that handle... | Python | 18.0k | 1.1k | Scrapling是Python自适应爬虫框架，支持自动处理网页结构变化、反反爬技术（如Cloudflare）、分布式爬取和代理旋转。提供异步获取器、CLI工具和可扩展爬虫架构，适用于复杂网页数据提取场景。 |
| 15 | [steipete/CodexBar](https://github.com/steipete/CodexBar) | Show usage stats for OpenAI Codex and Claude Code,... | Swift | 7.0k | 221 | CodexBar是一款macOS菜单栏应用，实时显示OpenAI Codex、Claude等AI平台的使用统计（如会话/周度配额、重置时间），支持多平台无需登录，提供简洁的系统托盘可视化监控。 |
| 16 | [alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox) | OpenSandbox is a general-purpose sandbox platform ... | Python | 1.5k | 107 | OpenSandbox是阿里巴巴开源的AI应用沙盒平台，支持多语言SDK和统一API，集成Docker/Kubernetes运行时，提供代码解释器、文件系统及浏览器自动化等功能，适用于AI代码执行、强化学习训练等场景。 |

[查看完整数据](api/github/2026-02-27.json)
<!-- END GITHUB TRENDING -->








