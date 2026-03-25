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

**最后更新**: 2026-03-25 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 7.6k | 1.3k | 该项目是Python编写的AI工具，可跨Reddit、X、YouTube等平台抓取最近30天的社区讨论数据，生成结构化摘要并支持多平台对比分析，适用于实时追踪网络热点与技术趋势。 |
| 2 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source SuperAgent harness that researches,... | Python | 46.1k | 3.8k | DeerFlow是字节跳动开源的超级代理框架，通过子代理、记忆、沙盒等技术协同处理复杂任务，支持扩展技能和工具，适用于自动化研究、开发及多步骤任务处理。 |
| 3 | [BerriAI/litellm](https://github.com/BerriAI/litellm) | Python SDK, Proxy Server (AI Gateway) to call 100+... | Python | 40.6k | 289 | BerriAI/litellm 是一个支持100+大语言模型的Python SDK与AI网关代理，提供统一OpenAI格式接口，具备成本追踪、防护机制、负载均衡及日志功能，简化多模型API集成与管理。 |
| 4 | [pascalorg/editor](https://github.com/pascalorg/editor) | Create and share 3D architectural projects.... | TypeScript | 6.8k | 2.4k | 基于React Three Fiber和WebGPU的3D建筑编辑器，支持场景状态管理、实时渲染和交互式设计，采用Zustand进行跨模块状态共享。 |
| 5 | [letta-ai/claude-subconscious](https://github.com/letta-ai/claude-subconscious) | Give Claude Code a subconscious... | TypeScript | 1.4k | 71 | 该项目为Claude Code开发了一个后台代理，通过Letta的内存系统和工具访问能力，实现跨会话记忆、文件分析和上下文引导，增强代码开发的持续性与智能性。 |
| 6 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The leading agent orchestration platform for Cl... | TypeScript | 26.2k | 1.2k | ruvnet/ruflo 是一个基于TypeScript的Claude代理编排平台，支持多智能体协作与自主工作流管理，提供RAG集成和Claude Code/Codex原生支持，适用于企业级对话式AI系统开发。 |
| 7 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | Project N.O.M.A.D, is a self-contained, offline su... | TypeScript | 16.6k | 1.7k | Project N.O.M.A.D. 是一个自包含的离线知识服务器，集成工具、AI和知识库，通过浏览器访问。基于Docker容器化管理，支持终端安装和浏览器交互，适用于无网络环境下的信息获取与操作。 |
| 8 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView: WiFi DensePose turns commodity WiFi sign... | Rust | 42.2k | 1.1k | RuView利用WiFi信号实现无摄像头的实时人体姿态估计、生命体征监测和存在检测，通过分析CSI扰动结合边缘计算与机器学习，无需云端支持即可在低成本硬件上运行。 |
| 9 | [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | Memory engine and app that is extremely fast, scal... | TypeScript | 19.2k | 809 | Supermemory是面向AI的高性能内存与上下文引擎，支持自动对话记忆提取、用户画像构建、知识更新处理及多模态文件解析，集成RAG和实时连接器实现持久化记忆管理。 |
| 10 | [FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2) | Automate the process of making money online.... | Python | 25.6k | 1.1k | MoneyPrinterV2 是一个自动化在线赚钱工具，支持Twitter/YouTube自动化、联盟营销及本地企业冷拓客功能。采用模块化设计，集成CRON任务调度，提供多语言版本支持，适用于互联网营销场景。 |
| 11 | [usestrix/strix](https://github.com/usestrix/strix) | Open-source AI hackers to find and fix your app’s ... | Python | 21.7k | 215 | Strix是一个开源AI安全工具，通过动态分析和PoC验证自动检测应用漏洞并提供修复方案，支持CI/CD集成与多LLM平台对接，提升安全测试效率。 |
| 12 | [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | 基于多智能体LLM的中文金融交易框架 - TradingAgents中文增强版... | Python | 21.3k | 449 | 基于多智能体LLM的中文金融分析框架，支持A股/港股/美股研究，提供技术指标计算、智能模型选择、实时数据推送及多格式报告导出，适用于合规的股票策略实验与教学。 |

[查看完整数据](api/github/2026-03-25.json)
<!-- END GITHUB TRENDING -->








