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

**最后更新**: 2026-02-20 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | ✨ Fully autonomous AI Agents system capable of per... | Go | 3.8k | 1.3k | PentAGI是一个基于AI的全自动渗透测试系统，采用Go语言开发。通过沙盒化Docker环境实现安全测试，集成20+专业工具与知识图谱，支持自主决策、信息搜集、漏洞分析及报告生成，适用于复杂网络安全评估场景。 |
| 2 | [blackboardsh/electrobun](https://github.com/blackboardsh/electrobun) | Build ultra fast, tiny, and cross-platform desktop... | C++ | 6.0k | 435 | Electrobun 是一个用 C++ 和 Zig 构建的跨平台桌面应用开发工具，支持通过 TypeScript 编写主进程和网页视图。它提供进程隔离、高效的 RPC 通信，生成体积小巧的自解压应用包（约 12MB），并支持超小增量更新（14KB）。集成 Bun 运行时和 WebKit 渲染引擎，适合快速开发轻量级桌面应用。 |
| 3 | [HailToDodongo/pyrite64](https://github.com/HailToDodongo/pyrite64) | N64 Game-Engine and Editor using libdragon & tiny3... | C++ | 2.1k | 440 | Pyrite64是基于C++的N64游戏引擎与编辑器，采用libdragon和tiny3d开发，支持3D模型导入、HDR+Bloom渲染、大纹理处理及节点图脚本。专注于真实硬件兼容，需通过Ares等模拟器测试，适用于独立开发者创建N64 3D游戏。 |
| 4 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 56.2k | 980 | Superpowers 是一个基于可组合技能的代码代理框架，通过自动化工作流管理提升开发效率。核心流程包括需求拆解、设计确认、TDD实现和子代理协作，强调YAGNI、DRY原则，支持编码代理自主执行复杂任务。 |
| 5 | [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | Find vulnerabilities, misconfigurations, secrets, ... | Go | 32.1k | 37 | Trivy是用Go编写的全面安全扫描工具，支持容器、文件系统、Git仓库、Kubernetes等目标，可检测漏洞、配置错误、敏感信息及SBOM。具备多平台集成能力，提供快速安全检测方案。 |
| 6 | [PostHog/posthog](https://github.com/PostHog/posthog) | 🦔 PostHog is an all-in-one developer platform for... | Python | 31.5k | 61 | PostHog是一个全栈开源产品分析平台，提供数据分析、会话回放、错误跟踪、特征管理、实验测试等功能，支持自托管和云服务，帮助团队优化产品性能和用户体验。 |
| 7 | [eslint/eslint](https://github.com/eslint/eslint) | Find and fix problems in your JavaScript code.... | JavaScript | 27.1k | 30 | ESLint是用于JavaScript/ECMAScript代码的静态分析工具，可识别并报告代码中的问题。基于AST解析，支持可插拔规则系统，提供代码规范校验、错误检测及自动修复功能，兼容ES6+语法。 |
| 8 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 7.9k | 64 | Anthropics官方维护的Claude代码插件目录，提供内部及第三方高质量插件。支持通过CLI和界面安装，包含标准化插件结构与安全规范，强调插件信任与质量验证。 |
| 9 | [Effect-TS/effect-smol](https://github.com/Effect-TS/effect-smol) | Core libraries and experimental work for Effect v4... | TypeScript | 372 | 11 | Effect-TS/effect-smol 是 Effect v4 的核心库和实验性工作，提供类型安全的并发编程能力，基于 TypeScript 构建，专注于函数式编程范式与轻量级运行时设计。 |
| 10 | [google-research/timesfm](https://github.com/google-research/timesfm) | TimesFM (Time Series Foundation Model) is a pretra... | Python | 8.8k | 438 | TimesFM是Google Research开发的预训练时间序列基础模型，采用Transformer架构，支持高精度时序预测。版本2.5优化参数量至2亿，扩展上下文长度至16k，新增连续分位数预测功能，适用于复杂时序建模与多场景预测需求。 |
| 11 | [roboflow/trackers](https://github.com/roboflow/trackers) | Trackers gives you clean, modular re-implementatio... | Python | 2.7k | 127 | roboflow/trackers 是一个模块化多目标跟踪库，提供主流跟踪算法的清洁实现，支持与任意检测模型无缝集成。通过CLI或Python API实现视频/实时流跟踪，内置轨迹可视化与MOT指标评估功能，适用于需要高效目标追踪的视觉系统。 |
| 12 | [huggingface/skills](https://github.com/huggingface/skills) | ... | Python | 1.4k | 22 | Hugging Face Skills 提供标准化的AI/ML任务技能定义，支持多平台编码代理工具。通过自包含文件夹封装任务指令、脚本和资源，兼容Claude Code、Codex、Gemini等工具，提升跨平台开发效率。 |
| 13 | [databricks-solutions/ai-dev-kit](https://github.com/databricks-solutions/ai-dev-kit) | Databricks Toolkit for Coding Agents provided by F... | Python | 535 | 35 | Databricks AI开发工具包，提升AI编码助手在Databricks平台的开发效率。支持构建Spark流水线、ML模型服务、数据仪表板等，提供多种集成方式和最佳实践指导。 |
| 14 | [freemocap/freemocap](https://github.com/freemocap/freemocap) | Free Motion Capture for Everyone 💀✨... | Python | 5.6k | 503 | FreeMoCap是一个免费开源的动作捕捉系统，支持跨平台和硬件无关，提供低成本的研究级运动捕捉解决方案，适用于学术研究、教育和培训场景。 |
| 15 | [ComposioHQ/composio](https://github.com/ComposioHQ/composio) | Composio powers 1000+ toolkits, tool search, conte... | TypeScript | 27.0k | 74 | Composio提供AI代理开发工具链，支持1000+工具包集成、上下文管理、认证及沙盒环境，简化AI代理构建流程。提供TypeScript和Python SDK，可无缝对接OpenAI等框架，适用于需要复杂工具调用的智能应用开发。 |

[查看完整数据](api/github/2026-02-20.json)
<!-- END GITHUB TRENDING -->








