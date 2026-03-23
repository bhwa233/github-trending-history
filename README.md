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

**最后更新**: 2026-03-23 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2) | Automate the process of making money online.... | Python | 22.8k | 2.9k | MoneyPrinterV2 是一款自动化在线赚钱工具，支持Twitter机器人、YouTube Shorts自动化、联盟营销及本地企业冷触达等功能。采用模块化设计，集成CRON任务调度，提供多语言版本支持，旨在通过自动化脚本提升网络营销效率。 |
| 2 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source SuperAgent harness that researches,... | Python | 39.2k | 3.6k | DeerFlow 是字节跳动开源的超级代理框架，通过子代理、沙盒、记忆和工具协同处理复杂任务。支持多模型集成与智能搜索，适用于自动化研究、高效任务流水线构建。 |
| 3 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | Project N.O.M.A.D, is a self-contained, offline su... | TypeScript | 13.3k | 4.1k | Project N.O.M.A.D. 是一个离线优先的知识管理服务器，提供本地AI聊天、文档检索和信息库功能。基于Docker容器化部署，支持终端安装和浏览器访问，适用于无网络环境下的知识存取与AI工具使用。 |
| 4 | [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | Fully autonomous AI Agents system capable of perfo... | Go | 13.0k | 1.3k | PentAGI是基于AI的自动化渗透测试系统，支持20+专业安全工具集成，采用Docker沙盒隔离环境，具备智能任务规划、知识图谱分析和多搜索引擎联动功能，可自主完成复杂安全测试任务。 |
| 5 | [browser-use/browser-use](https://github.com/browser-use/browser-use) | 🌐 Make websites accessible for AI agents. Automat... | Python | 83.6k | 1.2k | 项目提供浏览器自动化工具，使AI代理能便捷执行在线任务。支持云服务与开源版本，集成LLM进行网站交互，具备隐身模式、代理轮换和验证码解决能力，适用于复杂自动化场景。 |
| 6 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 39.2k | 2.5k | TradingAgents 是一个基于大语言模型的多智能体金融交易框架，模拟真实交易公司运作。通过分工协作的LLM智能体（如基本面分析、情绪分析、技术分析等）共同评估市场并制定交易策略，支持多模型接入与动态策略优化，适用于金融研究与策略验证。 |
| 7 | [tinygrad/tinygrad](https://github.com/tinygrad/tinygrad) | You like pytorch? You like micrograd? You love tin... | Python | 31.9k | 58 | tinygrad是一个轻量级深度学习框架，整合张量库、自动求导、IR编译器和JIT执行，支持神经网络训练与优化。其设计融合PyTorch的易用性、JAX的IR自动微分和TVM的编译优化，强调可读性与可定制性，适合需要底层控制的深度学习开发场景。 |
| 8 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | The agent harness performance optimization system.... | JavaScript | 101.8k | 4.5k | 面向AI代理的性能优化系统，支持技能管理、记忆持久化、持续学习、安全扫描及多平台集成，提升代码生成与自动化效率。 |
| 9 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 11.5k | 874 | Hermes-Agent 是一个自我改进的AI代理，具备学习循环机制，可跨会话持续优化技能并构建用户模型。支持多平台交互、定时任务、并行处理及多种大模型接入，适用于需要智能自动化与持续优化的场景。 |
| 10 | [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 🚀🚀 「大模型」2小时完全从0训练26M的小参数GPT！🌏 Train a 26M-param... | Python | 42.5k | 478 | 开源项目MiniMind旨在低成本（3元/2小时）训练26M参数GPT模型，提供从零开始的完整训练流程，包含MoE、LoRA、DPO等技术，支持多模态扩展及主流框架兼容。 |
| 11 | [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | 基于多智能体LLM的中文金融交易框架 - TradingAgents中文增强版... | Python | 20.3k | 672 | 基于多智能体LLM的中文金融交易框架，支持A股/港股/美股分析与教学，提供智能模型选择、实时数据处理、报告导出及容器化部署，适用于合规的策略研究与学习场景。 |
| 12 | [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | Agent skills for Obsidian. Teach your agent to use... | - | 16.3k | 453 | 提供Obsidian代理技能集，支持Markdown、Bases、JSON Canvas编辑及Obsidian CLI操作，包含Defuddle网页内容清理工具，提升知识管理自动化能力。 |
| 13 | [czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | A MCP for Claude Desktop / Claude Code / Windsurf ... | TypeScript | 16.0k | 136 | n8n-MCP是一个为Claude等AI模型提供n8n工作流节点深度访问的协议服务器，支持1239个核心及社区节点的文档、属性、操作查询，包含265个AI工具变体和2709个工作流模板，可通过托管服务或自托管快速部署。 |
| 14 | [iptv-org/iptv](https://github.com/iptv-org/iptv) | Collection of publicly available IPTV channels fro... | TypeScript | 113.6k | 125 | iptv-org/iptv 是一个全球IPTV频道资源集合项目，提供多国直播频道的M3U播放列表，用户可通过支持流媒体的播放器直接访问。项目包含频道数据库、EPG电子节目指南及API接口，涵盖资源整理、法律声明和贡献指南。 |
| 15 | [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | A curated list of awesome skills, hooks, slash-com... | Python | 30.9k | 413 | 该项目是一个针对Anthropic Claude Code的增强工具集合，包含代理技能、安全扫描、命令自动批准、会话管理及IDE集成等工具，旨在提升开发效率与安全性。 |

[查看完整数据](api/github/2026-03-23.json)
<!-- END GITHUB TRENDING -->








