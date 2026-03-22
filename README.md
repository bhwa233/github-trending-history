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

**最后更新**: 2026-03-22 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2) | Automate the process of making money online.... | Python | 19.6k | 1.8k | MoneyPrinterV2 是一个自动化在线赚钱工具，支持Twitter机器人、YouTube Shorts自动化、联盟营销及本地企业冷拓客功能，采用模块化设计并需Python 3.12运行。 |
| 2 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 37.0k | 1.1k | TradingAgents是一个多智能体金融交易框架，采用LLM技术模拟真实交易公司运作。通过基本面分析、情绪分析、技术分析等专业角色协同决策，支持多模型接入与动态策略优化，适用于金融交易策略研究与模拟。 |
| 3 | [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | Fully autonomous AI Agents system capable of perfo... | Go | 11.9k | 1.0k | PentAGI是一个基于AI的自动化渗透测试系统，采用Go语言开发。通过Docker隔离环境实现安全测试，集成20+专业工具与知识图谱，支持智能任务规划、网络信息收集及多搜索API整合，提升安全测试效率与深度。 |
| 4 | [jamwithai/production-agentic-rag-course](https://github.com/jamwithai/production-agentic-rag-course) | ... | Python | 4.7k | 235 | 该项目是面向生产级RAG系统的实战课程，通过构建arXiv论文智能检索系统，系统性教学从基础搜索到混合检索的完整技术栈，涵盖数据管道、BM25搜索、语义向量化、Agentic RAG架构等核心模块。 |
| 5 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | The agent harness performance optimization system.... | JavaScript | 97.8k | 3.7k | 面向AI代理的性能优化系统，支持技能管理、记忆持久化、持续学习与多模型协同。包含令牌优化、并行化处理及子代理编排功能，适用于跨平台AI开发与生产级代理构建。 |
| 6 | [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | A Claude Code plugin that shows what's happening -... | JavaScript | 11.1k | 832 | Claude HUD是用于Claude Code的实时状态监控插件，展示上下文使用、工具活动、代理状态及待办进度，提升开发可视化管理效率。 |
| 7 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | Project N.O.M.A.D, is a self-contained, offline su... | TypeScript | 9.8k | 2.3k | Project N.O.M.A.D 是一个离线知识服务器，集成AI聊天、文档检索和信息库管理，通过Docker容器化部署，支持终端安装和浏览器访问，适用于无网络环境下的知识存取与教育场景。 |
| 8 | [systemd/systemd](https://github.com/systemd/systemd) | The systemd System and Service Manager... | C | 16.0k | 313 | systemd是Linux系统的系统和服务管理器，负责进程管理、服务启动、系统配置及资源控制，提供高效的系统初始化和自动化管理功能。 |
| 9 | [browser-use/browser-use](https://github.com/browser-use/browser-use) | 🌐 Make websites accessible for AI agents. Automat... | Python | 82.5k | 405 | 提供Python库实现AI代理自动化网页操作，支持云服务和多种大模型，可执行表单填写、购物、信息检索等任务。 |
| 10 | [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | [EMNLP2025] "LightRAG: Simple and Fast Retrieval-A... | Python | 30.0k | 203 | LightRAG是一个高效检索增强生成框架，支持多模态数据处理（文本/图像/表格/视频），集成OpenSearch/MongoDB存储，提供文档删除、知识图谱再生、引用追踪等功能，适用于大规模知识库构建与精准问答场景。 |
| 11 | [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | 基于多智能体LLM的中文金融交易框架 - TradingAgents中文增强版... | Python | 19.7k | 215 | 基于多智能体LLM的中文金融交易学习框架，支持A股/港股/美股分析，提供Docker部署、多LLM厂商集成及可视化报告导出，专注教学研究用途。 |
| 12 | [louis-e/arnis](https://github.com/louis-e/arnis) | Generate any location from the real world in Minec... | Rust | 12.7k | 583 | Arnis是一款基于Rust开发的开源工具，可将真实世界地理数据（如OpenStreetMap和高程数据）转化为高精度的Minecraft世界，支持Java版和Bedrock版。用户可通过可视化界面选择区域并自定义生成参数，生成城市、地形等场景。 |
| 13 | [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | Find vulnerabilities, misconfigurations, secrets, ... | Go | 33.6k | 249 | Trivy是用Go编写的多功能安全扫描工具，支持容器镜像、文件系统、Git仓库、虚拟机和Kubernetes的漏洞检测、配置错误识别、密钥发现及SBOM生成。提供多语言和平台支持，适用于云原生环境的安全防护。 |
| 14 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source SuperAgent harness that researches,... | Python | 35.2k | 1.5k | DeerFlow 是字节跳动开源的超级代理框架，通过协调子代理、记忆、沙盒等模块，实现复杂任务的自动化处理。支持多模型集成与工具扩展，适用于研究、编码及高复杂度任务流程管理。 |
| 15 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用AI大模型，一键生成高清短视频 Generate short videos with one c... | Python | 50.9k | 169 | MoneyPrinterTurbo 是一个基于AI大模型的短视频生成工具，支持通过关键词自动生成视频文案、素材、字幕及背景音乐，并合成高清视频。提供Web和API界面，支持多语言、多种视频尺寸及批量生成，集成OpenAI、通义千问等多模型接口，适用于营销、教育等快速生成短视频的场景。 |

[查看完整数据](api/github/2026-03-22.json)
<!-- END GITHUB TRENDING -->








