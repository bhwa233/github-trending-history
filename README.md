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

**最后更新**: 2026-04-30 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [warpdotdev/warp](https://github.com/warpdotdev/warp) | Warp is an agentic development environment, born o... | Rust | 49.1k | 8.3k | Warp 是一个基于 Rust 的代理式开发环境，旨在增强终端体验。它集成了由 OpenAI 支持的内置编码代理，同时也支持外部 CLI 代理。项目采用 MIT 和 AGPL v3 双重许可，致力于构建现代化的开源终端工具，并欢迎社区贡献。 |
| 2 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 57.7k | 2.2k | TradingAgents 是一个基于多智能体 LLM 的金融交易框架，模拟真实交易公司运作。它部署基本面、情绪、技术分析师及交易员等角色，协作评估市场并动态讨论策略。支持多种大模型提供商及 LangGraph，旨在为金融研究提供自动化交易决策支持。 |
| 3 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 49.4k | 6.2k | 这是一套为 Claude Code 等编码代理提供的实用技能集，旨在解决 AI 代理常见的沟通偏差和执行问题。通过提供结构化工作流（如问题跟踪、文档管理）和交互命令（如 /grill-me），帮助工程师更高效地与 AI 协作，实现真正的工程化开发。 |
| 4 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 174.6k | 1.6k | Superpowers 是一个为编码代理设计的代理技能框架和软件开发方法论。它通过引导用户明确需求、分解规范、制定实施计划，并利用子代理驱动开发，强调 TDD、YAGNI 和 DRY 原则。该框架支持 Claude 代理在无需人工干预的情况下自主工作数小时，实现高效的自动化编程。 |
| 5 | [lukilabs/craft-agents-oss](https://github.com/lukilabs/craft-agents-oss) | ... | TypeScript | 5.6k | 314 | 这是一个由 Craft.do 开发的开源工具，旨在提供直观的 AI 代理协作体验。项目基于 TypeScript，结合 Claude 和 Pi SDK，支持无需配置文件即可连接各类 API 和 MCP 服务（包括本地和自定义）。它采用 Agent Native 原则，允许用户通过自然语言提示实现高度定制化，提供以文档为中心的流畅 UI。 |
| 6 | [public-apis/public-apis](https://github.com/public-apis/public-apis) | A collective list of free APIs... | Python | 429.5k | 307 | 这是一个由社区成员手动策划的免费公共 API 集合列表。它涵盖了从 Authentication 到 Finance 等众多领域的 API，旨在帮助开发者轻松找到并集成所需的接口。项目不仅包含分类索引，还展示了赞助商提供的优质 API 服务，是开发者寻找 API 资源的宝藏库。 |
| 7 | [1jehuang/jcode](https://github.com/1jehuang/jcode) | Coding Agent Harness... | Rust | 1.9k | 670 | 这是一个基于 Rust 的高性能 Coding Agent Harness，专为多会话工作流设计。它以极致的资源效率和性能著称，内存占用远低于 Cursor、Claude Code 等竞品，支持无限定制。 |
| 8 | [soxoj/maigret](https://github.com/soxoj/maigret) | 🕵️‍♂️ Collect a dossier on a person by username f... | Python | 20.8k | 723 | Maigret 是一款开源的 OSINT 工具，能够通过单一用户名在 3000+ 个网站收集个人档案。它支持自动提取信息、递归搜索、绕过封锁及 Tor/I2P 访问，并提供 Web UI 和多种报告格式，无需 API 密钥即可使用。 |
| 9 | [HunxByts/GhostTrack](https://github.com/HunxByts/GhostTrack) | Useful tool to track location or mobile number... | Python | 12.2k | 830 | GhostTrack 是一个基于 Python 的 OSINT 信息收集工具，支持 IP 追踪、手机号码查询及社交媒体用户名搜索。它提供了 Linux 和 Termux 环境下的安装指南，主要用于网络情报获取和目标信息收集。 |
| 10 | [iamgio/quarkdown](https://github.com/iamgio/quarkdown) | 🪐 Markdown with superpowers: from ideas to papers... | Kotlin | 13.1k | 350 | Quarkdown 是一个基于 Kotlin 的现代 Markdown 排版系统。它通过 Turing-complete 扩展，允许在 Markdown 中编写函数、逻辑和布局，将单一文档编译为书籍、论文、知识库或演示文稿。支持自定义函数和标准库，极大提升了 Markdown 的灵活性。 |
| 11 | [ghostty-org/ghostty](https://github.com/ghostty-org/ghostty) | 👻 Ghostty is a fast, feature-rich, and cross-plat... | Zig | 52.8k | 379 | Ghostty 是一个快速、功能丰富且跨平台的终端模拟器，采用原生 UI 和 GPU 加速。它提供主应用和零依赖的 libghostty 库，支持嵌入终端或构建新终端。项目已实现标准合规、高性能及丰富的窗口功能，目前处于稳定状态，被广泛使用。 |
| 12 | [ForrestKnight/open-source-cs](https://github.com/ForrestKnight/open-source-cs) | Video discussing this curriculum:... | - | 22.4k | 133 | 这是一个精选的免费课程列表，旨在满足计算机科学学士学位的要求。它涵盖了编程、数学和计算机科学理论，汇集了哈佛、MIT、斯坦福等名校资源，为自学者提供了结构化的学习路径。 |
| 13 | [browserbase/skills](https://github.com/browserbase/skills) | Claude Agent SDK with a web browsing tool... | JavaScript | 823 | 54 | 这是一个为 Claude Code 提供的 Browserbase 集成技能集，支持云端浏览器自动化、反机器人检测、CAPTCHA 解决及代理设置。包含调试、追踪、无服务器函数部署、Cookie 同步、静态抓取、AI UI 测试及成本分析等功能，旨在简化云端浏览器操作与测试流程。 |

[查看完整数据](api/github/2026-04-30.json)
<!-- END GITHUB TRENDING -->




