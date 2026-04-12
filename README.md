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

**最后更新**: 2026-04-12 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 66.1k | 7.5k | Hermes-Agent 是一个由 Nous Research 开发的自我改进型 AI 代理，具备闭环学习能力，可跨平台运行并支持多模型接入。它通过持续优化技能、记忆持久化、多终端交互及自动化任务处理，实现用户个性化服务与高效协作。 |
| 2 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 15.7k | 2.0k | Kronos是首个针对金融K线数据的开源基础模型，通过两阶段框架处理高噪声金融数据。采用分词器将OHLCV数据转为离散令牌，并基于Transformer架构实现多任务预测，支持加密货币和股票市场分析。 |
| 3 | [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 16.6k | 2.4k | 该项目通过四个核心原则优化Claude代码生成效果，解决LLM常见问题。包含Think Before Coding（显式化假设与权衡）、Simplicity First（最小化代码实现）、Surgical Changes（精准代码修改）和Goal-Driven Execution（测试驱动开发）原则，提升代码质量与准确性。 |
| 4 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 104.5k | 2.5k | MarkItDown 是微软开发的Python工具，支持将PDF、Office、图片、音频等多种文件转换为Markdown格式，适用于LLM和文本分析pipeline。强调保留文档结构，但输出主要用于机器处理而非人类阅读。 |
| 5 | [multica-ai/multica](https://github.com/multica-ai/multica) | The open-source managed agents platform. Turn codi... | TypeScript | 9.3k | 1.6k | Multica是一个开源的AI代理管理平台，支持将编码代理作为团队成员进行任务分配、进度跟踪和技能复用。通过自主执行任务、实时进度监控和跨团队协作，提升开发效率。兼容多种AI模型，支持自托管与云部署，实现人机协同开发。 |
| 6 | [coleam00/Archon](https://github.com/coleam00/Archon) | The first open-source harness builder for AI codin... | TypeScript | 17.0k | 612 | Archon是首个开源AI编码工装构建器，通过YAML定义可重复的AI编码工作流，实现开发流程的标准化与自动化，支持计划、实现、验证、代码审查等环节的确定性执行。 |
| 7 | [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | practice made claude perfect... | HTML | 38.9k | 1.5k | 该项目是基于Claude的AI开发实践框架，提供代理系统、命令模板、技能模块及工作流编排功能，通过配置文件和Markdown文档实现上下文工程与自动化开发流程。 |
| 8 | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | VoxCPM2: Tokenizer-Free TTS for Multilingual Speec... | Python | 11.2k | 1.3k | VoxCPM2是基于Python的无需分词器文本到语音系统，采用端到端扩散自回归架构，支持30种语言，提供语音设计、可控语音克隆和48kHz高质量音频输出，适用于多语言TTS应用及语音合成场景。 |
| 9 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 49.9k | 814 | Claude Code插件，通过AI压缩技术自动捕获并持久化编码会话上下文，实现跨会话的知识连续性，提升开发效率。 |
| 10 | [ahujasid/blender-mcp](https://github.com/ahujasid/blender-mcp) | ... | Python | 19.1k | 228 | BlenderMCP通过Model Context Protocol（MCP）将Blender与Claude AI连接，实现AI对Blender的双向控制。支持3D对象操作、材质控制、场景检查及Python代码执行，提供远程运行和多模型资源支持。 |
| 11 | [rustfs/rustfs](https://github.com/rustfs/rustfs) | 🚀2.3x faster than MinIO for 4KB object payloads. ... | Rust | 25.2k | 253 | RustFS是用Rust开发的高性能S3兼容对象存储系统，相比MinIO提升2.3倍性能。支持分布式架构、数据湖优化及多平台共存，采用Apache 2.0开源协议，适用于大数据与AI场景。 |
| 12 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 52.2k | 696 | 该项目是一个AI驱动的对冲基金模拟系统，整合了多位投资大师的策略，通过估值、情绪、基本面、技术分析和风险管理模块生成交易信号，旨在教育场景下探索AI在量化交易中的应用。 |
| 13 | [snarktank/ralph](https://github.com/snarktank/ralph) | Ralph is an autonomous AI agent loop that runs rep... | TypeScript | 15.9k | 519 | Ralph是基于AI的自主代理循环系统，通过集成Amp/Claude Code等工具自动处理产品需求文档（PRD）。通过git历史和文本文件持久化记忆，支持迭代式代码生成与PRD转化，提升开发自动化水平。 |
| 14 | [TapXWorld/ChinaTextbook](https://github.com/TapXWorld/ChinaTextbook) | 所有小初高、大学PDF教材。... | Roff | 68.2k | 450 | 该项目是一个开源的中国中小学及大学数学教材合集，旨在促进义务教育普及和消除教育贫困。通过整合免费资源并提供文件合并工具，帮助用户获取和管理大体积PDF教材。 |

[查看完整数据](api/github/2026-04-12.json)
<!-- END GITHUB TRENDING -->








