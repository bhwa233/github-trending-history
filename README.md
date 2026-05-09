# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 默认通过 Cloudflare AI Gateway 调用 `workers-ai/@cf/zai-org/glm-4.7-flash` 生成中英文项目总结、技术栈和适用场景
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
  - `summary_en`: 英文项目核心功能总结
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景
  - `useCase_en`: 英文适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare AI Gateway（OpenAI 兼容接口）
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 默认：Cloudflare AI Gateway
export AI_API_KEY=your_cloudflare_ai_gateway_token
export AI_API_URL=https://gateway.ai.cloudflare.com/v1/5697c41d4efbabcbac78eafe2cdf036b/default/compat/chat/completions
export AI_MODEL=workers-ai/@cf/zai-org/glm-4.7-flash

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

**最后更新**: 2026-05-09 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anthropics/financial-services](https://github.com/anthropics/financial-services) | ... | Python | 17.4k | 3.1k | 该项目为金融服务行业提供了一套基于 Claude 的代理、技能和数据连接器，涵盖投资银行、股权研究、私募股权和财富管理。包含 Pitch Agent、Market Researcher 等端到端工作流代理，用于生成估值模型、市场研究和财务对账等分析师工作产品。支持通过插件或 API 部署，旨在辅助专业人员进行合规审查。 |
| 2 | [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | The Open-Source Multimodal AI Agent Stack: Connect... | TypeScript | 31.4k | 549 | 这是一个开源的多模态 AI Agent 堆栈，包含 Agent TARS 和 UI-TARS-desktop。它利用先进的视觉和多模态大模型，通过 CLI 和桌面应用提供类人任务完成能力。支持在终端、浏览器及本地/远程计算机上进行自动化操作，集成了 MCP 工具，旨在实现高效的 GUI 自动化与智能交互。 |
| 3 | [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | #1 Persistent memory for AI coding agents based on... | TypeScript | 3.4k | 518 | 这是一个为 AI 编码代理提供持久化内存的 TypeScript 项目。它基于 Karpathy 的 LLM Wiki 模式，增加了知识图谱和混合搜索。支持 Claude Code、Cursor 等多种工具，通过 MCP 或 REST API 共享记忆，让 AI 在多会话中记住上下文、偏好和代码结构，无需重复解释。 |
| 4 | [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 📚 《从零开始构建智能体》——从零开始的智能体原理与实践教程... | Python | 45.7k | 1.2k | Datawhale 社区发起的系统性智能体学习教程，旨在帮助开发者从零掌握 AI 原生智能体的构建。教程涵盖从基础理论、经典范式（如 ReAct）到高级技术（如记忆、RL）的全流程，包含 AutoGen、LangGraph 等框架实战，以及智能旅行助手、赛博小镇等综合案例，适合希望成为智能体系统构建者的开发者。 |
| 5 | [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 💻 vibe coding 2026 | Your first modern programmin... | JavaScript | 8.5k | 294 | 这是一个面向初学者的现代编程课程，专注于“Vibe Coding”理念。它教导用户通过描述需求，利用 AI 生成代码并构建真实产品。项目包含从需求验证、全栈开发到高级 AI Agent 集成的完整教程，涵盖 SaaS 副业项目、Stripe 支付及微信小程序开发，并提供英文文档支持。 |
| 6 | [rowboatlabs/rowboat](https://github.com/rowboatlabs/rowboat) | Open-source AI coworker, with memory... | TypeScript | 13.8k | 144 | Rowboat 是一个开源的本地优先 AI 同事，基于 TypeScript 构建。它能连接用户的邮件和会议笔记，构建长期的知识图谱，利用上下文辅助用户完成工作，如生成演示文稿、准备会议简报和记录语音备忘录。支持 Markdown 编辑和外部工具集成，确保数据在本地处理。 |
| 7 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 38.8k | 159 | 这是一个为 AI 编码助手提供 Chrome DevTools 访问权限的 MCP 服务器。基于 Puppeteer，它允许代理控制实时浏览器，支持性能分析、网络调试、截图及自动化操作，旨在提升 AI 在浏览器环境中的自动化与调试能力。 |
| 8 | [masterking32/MasterDnsVPN](https://github.com/masterking32/MasterDnsVPN) | Advanced DNS tunneling VPN for censorship bypass, ... | Go | 2.5k | 595 | MasterDnsVPN 是一个基于 Go 语言的高级 DNS 隧道 VPN 项目，旨在通过 DNS 查询传输 TCP 流量以绕过审查。它采用轻量级自定义协议，头部开销极低（5-7B），并集成了 ARQ 和多路径技术，实现了比同类项目（如 DNSTT、SlipStream）更高的速度（快 9 倍）和丢包稳定性。支持多解析器负载均衡、SOCKS5 及 Shadowsocks 间接支持，适合在恶劣网络环境下使用。 |
| 9 | [playcanvas/supersplat](https://github.com/playcanvas/supersplat) | 3D Gaussian Splat Editor... | TypeScript | 6.3k | 513 | SuperSplat Editor 是一个基于 Web 技术的免费开源工具，用于检查、编辑、优化和发布 3D Gaussian Splat。它无需安装即可在浏览器中运行，支持本地开发环境搭建和多语言本地化，旨在为 3D 内容创作者提供便捷的编辑体验。 |
| 10 | [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) | 《动手学大模型Dive into LLMs》系列编程实践教程... | Jupyter Notebook | 36.5k | 194 | 这是一个基于Jupyter Notebook的公益大模型编程实践教程，涵盖微调、提示学习、越狱攻击、隐写术、多模态及RLHF对齐等前沿主题。教程由上海交通大学开发，并联合华为昇腾推出了国产化开发全流程课程，适合初学者和研究者快速入门大模型开发。 |
| 11 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | Shell | 37.4k | 2.8k | 这是一个为 AI 编码代理提供生产级工程技能的项目。它将资深工程师的工作流程、质量门禁和最佳实践编码为技能，确保 AI 代理在开发过程中始终如一地遵循。包含 7 个斜杠命令，覆盖从定义到发布的全生命周期，并支持根据上下文自动激活特定技能。 |
| 12 | [decolua/9router](https://github.com/decolua/9router) | Unlimited FREE AI coding. Connect Claude Code, Cod... | JavaScript | 6.5k | 980 | 9Router 是一个免费的 AI 编程路由器，旨在通过智能回退机制（订阅→便宜→免费）和 RTK 代币压缩技术，帮助开发者节省 20-40% 的 Token 成本并避免 API 限制。它支持连接多种 AI 代码工具（如 Cursor、Copilot）到 40+ 提供商，实现零停机编码体验。 |
| 13 | [oracle-devrel/oracle-ai-developer-hub](https://github.com/oracle-devrel/oracle-ai-developer-hub) | Technical resources for AI developers to build app... | Jupyter Notebook | 789 | 153 | 这是一个面向 AI 开发者的技术资源库，旨在帮助开发者利用 Oracle AI Database 和 OCI 服务构建 AI 应用、智能体及系统。项目包含完整的参考实现（如健身平台、金融代理）和交互式 Jupyter 笔记本，涵盖模型开发、数据分析和代理编排等关键领域，提供生产级解决方案的架构模式与最佳实践。 |

[查看完整数据](api/github/2026-05-09.json)
<!-- END GITHUB TRENDING -->




