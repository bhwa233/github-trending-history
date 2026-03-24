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

**最后更新**: 2026-03-24 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [pascalorg/editor](https://github.com/pascalorg/editor) | ... | TypeScript | 5.1k | 1.5k | 基于React Three Fiber和WebGPU的3D建筑编辑器，采用Turborepo架构分离渲染、状态管理和编辑功能，支持场景节点操作与交互式编辑。 |
| 2 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source SuperAgent harness that researches,... | Python | 43.1k | 4.3k | DeerFlow 是字节跳动开源的 SuperAgent 框架，通过子代理、记忆模块、沙盒环境和技能工具协同处理复杂任务。支持长期记忆、上下文工程与多模型集成，适用于需要自动化研究和高效任务处理的场景。 |
| 3 | [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | Memory engine and app that is extremely fast, scal... | TypeScript | 18.5k | 407 | Supermemory 是面向AI的高性能记忆引擎与应用，支持自动对话学习、事实提取、用户画像构建、知识更新管理及多模态数据处理，整合RAG与实时连接器实现上下文持久化。 |
| 4 | [FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2) | Automate the process of making money online.... | Python | 24.8k | 2.9k | MoneyPrinter V2 是一个自动化在线赚钱工具，支持Twitter机器人、YouTube Shorts自动运营、联盟营销及本地企业冷营销等功能，采用模块化设计并基于Python 3.12开发。 |
| 5 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用AI大模型，一键生成高清短视频 Generate short videos with one c... | Python | 52.6k | 695 | 基于AI大模型的一键短视频生成工具，支持文案、素材、字幕、音乐自动生成与合成，提供Web/API界面，兼容多语言、多种视频尺寸及主流AI模型接入，适用于快速制作高质量短视频。 |
| 6 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | Project N.O.M.A.D, is a self-contained, offline su... | TypeScript | 15.3k | 2.5k | Project N.O.M.A.D 是一个离线知识管理服务器，集成AI聊天、文档检索和容器化工具，通过Docker部署，支持终端安装和浏览器访问，适用于无网络环境下的信息获取与处理。 |
| 7 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 40.8k | 1.7k | TradingAgents 是一个基于多智能体的金融交易框架，利用LLM驱动的分工协作机制，整合基本面分析、情感分析和技术分析，动态讨论并优化交易策略，适用于金融研究与算法交易开发。 |
| 8 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 5.5k | 208 | AI代理技能，整合Reddit、X、YouTube等平台近30天数据，生成带引用的实时摘要。支持多平台爬取、比较分析模式及自动保存功能，适用于热点追踪与深度研究。 |
| 9 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The leading agent orchestration platform for Cl... | TypeScript | 25.1k | 1.4k | ruvnet/ruflo 是一个面向 Claude 的智能代理编排平台，支持多智能体群部署、自主工作流协调及对话式 AI 系统构建，具备企业级架构、分布式群智、RAG 集成和 Claude 代码/CodeX 集成等特性。 |
| 10 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 12.5k | 1.3k | Hermes-Agent 是一个自我进化的AI代理，具备内置学习循环，可跨会话持续优化技能、检索历史对话并构建用户模型。支持多平台交互与多种大模型接入，提供终端界面、自动化任务、并行子代理等功能，适用于灵活部署于云服务器或本地环境。 |
| 11 | [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | A curated list of awesome skills, hooks, slash-com... | Python | 31.8k | 993 | 该仓库是Anthropic Claude Code的扩展工具集合，包含代理技能、安全扫描、命令自动批准、会话管理及调试工具，旨在提升代码开发效率与安全性。涵盖科学计算、权限管理、终端集成等多种功能。 |
| 12 | [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | 基于多智能体LLM的中文金融交易框架 - TradingAgents中文增强版... | Python | 20.9k | 559 | 基于多智能体LLM的中文金融分析框架，支持A股/港股/美股研究，提供多模型配置、实时数据同步、模拟交易及专业报告导出，适用于AI金融学习与策略实验。 |
| 13 | [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | Find vulnerabilities, misconfigurations, secrets, ... | Go | 34.0k | 103 | Trivy是用于扫描容器、Kubernetes、代码仓库等的全面安全工具，支持检测漏洞、配置错误、敏感信息及SBOM。基于Go语言开发，提供多平台集成与实时扫描能力。 |
| 14 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView: WiFi DensePose turns commodity WiFi sign... | Rust | 41.2k | 1.0k | RuView是一款基于Rust的边缘AI系统，通过分析WiFi信号中的信道状态信息（CSI）实现无接触的人体姿态估计、生命体征监测及存在检测，具备实时性与本地化自学习能力。 |

[查看完整数据](api/github/2026-03-24.json)
<!-- END GITHUB TRENDING -->








