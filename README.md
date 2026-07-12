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

**最后更新**: 2026-07-11 | **成功**: 22 | **失败**: 2

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [catchorg/Catch2](https://github.com/catchorg/Catch2) | A modern, C++-native, test framework for unit-test... | C++ | 21.0k | 113 | Catch2 是一个现代的 C++ 原生单元测试框架，支持 C++14/17/20。它不仅提供测试功能，还包含微基准测试和 BDD 支持。其语法简单自然，支持测试名称、断言和局部设置/拆卸。v3 版本已发布，将库结构从单头文件改为标准库结构。 |
| 2 | [abseil/abseil-cpp](https://github.com/abseil/abseil-cpp) | Abseil Common Libraries (C++)... | C++ | 17.8k | 118 | Abseil 是一个开源的 C++ 库集合，旨在增强 C++ 标准库。它源自 Google 内部代码，经过生产环境验证，提供标准库缺失或替代的实用工具。支持 Bazel 和 CMake 构建，包含 base 等核心组件。 |
| 3 | [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI tool for configuring and monitoring Claude Cod... | Python | 29.0k | 232 | 处理失败 |
| 4 | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | A library of Agent Skills designed to work with th... | TypeScript | 7.0k | 340 | 这是一个基于 TypeScript 的 Agent Skills 库，专为 Google Stitch MCP 服务器设计。它遵循 Agent Skills 开放标准，兼容 Claude Code、Cursor、Codex 等主流编码代理。项目提供 stitch-design、stitch-build 和 stitch-utilities 等分类技能，支持全局或项目级安装，旨在提升 AI 辅助编程的效率与质量。 |
| 5 | [hashicorp/terraform](https://github.com/hashicorp/terraform) | Terraform enables you to safely and predictably cr... | Go | 49.4k | 229 | Terraform 是一个基础设施即代码工具，使用 Go 语言编写。它通过声明性配置文件安全、可预测地创建、更改和版本化基础设施。支持执行计划、资源图和并行化，能够自动化复杂的基础设施变更，避免人为错误，适用于管理各种云服务和本地资源。 |
| 6 | [zeux/meshoptimizer](https://github.com/zeux/meshoptimizer) | Mesh optimization library that makes meshes smalle... | C++ | 8.1k | 110 | 这是一个用于优化网格的 C++ 库，旨在减小网格体积并提高渲染速度。它提供算法处理 GPU 管道数据，支持 C/C++ 接口及 FFI。项目还包含用于 glTF 文件和 LOD 的配套工具。 |
| 7 | [openai/plugins](https://github.com/openai/plugins) | OpenAI Plugins... | JavaScript | 4.4k | 29 | 该项目是一个包含 OpenAI Codex 插件示例的精选集合。每个插件包含必要的清单文件及配套文件（如技能、MCP、命令等），展示了如何扩展 AI 能力。示例涵盖 Figma、Notion、iOS/macOS/Web 应用构建、Expo 以及 Netlify 等工具，展示了丰富的应用场景。 |
| 8 | [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) | This is MCP server for Claude that gives it termin... | TypeScript | 7.8k | 909 | 这是一个基于 TypeScript 的 MCP 服务器，旨在为 Claude 和其他 AI 客户端提供强大的桌面控制能力。它支持终端命令执行、文件系统搜索与编辑、实时文件预览（包括 Markdown 和 Excel）、内存中代码运行以及数据分析。用户可以通过此工具实现远程 AI 控制，自动化开发任务，无需 API Token 成本。 |
| 9 | [chriskohlhoff/asio](https://github.com/chriskohlhoff/asio) | Asio C++ Library... | C++ | 6.1k | 76 | Asio 是一个用于网络和底层 I/O 的 C++ 库。它提供了可移植的异步 I/O，支持 TCP、UDP、串口通信和定时器等功能。它是许多现代 C++ 网络应用的基础，支持事件循环和回调机制。 |
| 10 | [oven-sh/bun](https://github.com/oven-sh/bun) | Incredibly fast JavaScript runtime, bundler, test ... | Rust | 94.6k | 658 | Bun 是一个用 Rust 编写的极速 JavaScript 运行时、打包器、测试运行器和包管理器。它旨在替代 Node.js，提供更快的性能和更简单的开发体验，集成了文件系统、网络和进程管理等功能。 |
| 11 | [actions/checkout](https://github.com/actions/checkout) | Action for checking out a repo... | TypeScript | 8.5k | 8 | 这是一个 GitHub Actions，用于将仓库代码检出至工作空间。主要更新包括迁移至 ESM，更新依赖项，以及显著增强安全性。v6 版本改进了凭证安全，不再直接写入 .git/config，并默认拒绝检出 fork PR 代码以防止漏洞。v5 升级至 Node 24 运行时。 |
| 12 | [home-assistant/core](https://github.com/home-assistant/core) | 🏡 Open source home automation that puts local con... | Python | 88.7k | 80 | Home Assistant 是一个开源的家庭自动化系统，优先考虑本地控制和隐私。它由全球DIY爱好者社区驱动，支持模块化架构，易于扩展。系统可以在树莓派或本地服务器上运行，提供丰富的设备集成和自定义组件功能，是智能家居的理想选择。 |
| 13 | [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | Microsoft PowerToys is a collection of utilities t... | C | 136.4k | 39 | 处理失败 |
| 14 | [cypress-io/cypress](https://github.com/cypress-io/cypress) | Fast, easy and reliable testing for anything that ... | TypeScript | 50.6k | 19 | Cypress 是一个快速、简单且可靠的浏览器端自动化测试框架。它支持 Mac、Linux 和 Windows，提供直观的开发体验，旨在解决现代 Web 应用测试的挑战。 |
| 15 | [vercel/next.js](https://github.com/vercel/next.js) | The React Framework... | JavaScript | 140.9k | 334 | Next.js 是一个用于构建全栈 Web 应用的 React 框架。它扩展了 React 的最新特性，并集成了基于 Rust 的 JavaScript 工具以实现快速构建。被全球大型公司使用，适合需要高性能和全栈能力的现代 Web 开发。 |
| 16 | [DayuanJiang/next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io) | A next.js web application that integrates AI capab... | TypeScript | 33.3k | 81 | 这是一个基于 Next.js 和 TypeScript 的 AI 图表生成工具，集成了 draw.io。用户可通过自然语言命令创建、修改图表，支持上传图片或 PDF 文件进行智能复制与生成。项目支持多模型配置及 MCP 服务器，旨在简化复杂图表的绘制流程。 |
| 17 | [malisper/pgrust](https://github.com/malisper/pgrust) | Postgres rewritten in Rust, now passing 100% of th... | Rust | 2.0k | 774 | 这是一个用 Rust 重写的 PostgreSQL 项目，旨在保持与 PG 18.3 的完全兼容性。它采用线程模型，在事务和分析负载上分别快 50% 和 300 倍。项目利用 Rust 和 AI 辅助探索数据库内部修改，目前非生产就绪。 |
| 18 | [dotnet/aspnetcore](https://github.com/dotnet/aspnetcore) | ASP.NET Core is a cross-platform .NET framework fo... | C# | 38.3k | 4 | ASP.NET Core 是一个开源、跨平台的现代 Web 应用程序开发框架，基于 .NET 运行时。它专为构建云原生、互联网连接的应用程序（如 Web、IoT 和移动后端）而设计，支持 Windows、Mac 和 Linux。框架采用模块化组件，提供最小开销，支持云或本地部署。 |
| 19 | [prisma/prisma](https://github.com/prisma/prisma) | Next-generation ORM for Node.js & TypeScript | Pos... | TypeScript | 47.2k | 37 | Prisma 是一个为 Node.js 和 TypeScript 设计的下一代 ORM。它提供类型安全的查询构建器、声明式数据建模和迁移系统。支持多种数据库，如 PostgreSQL、MySQL、MongoDB 等。通过 Prisma Studio 提供可视化界面，简化数据库操作。 |
| 20 | [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | A collection of notebooks/recipes showcasing some ... | Jupyter Notebook | 47.9k | 219 | Anthropic 官方提供的 Claude API 实战指南集合，包含大量 Jupyter Notebook 格式的代码示例。项目涵盖了文本分类、检索增强生成（RAG）、文本摘要、工具调用、多模态视觉等多种应用场景，旨在帮助开发者快速掌握并集成 Claude 的能力。 |
| 21 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 252.4k | 740 | Superpowers 是一个基于 Shell 的代理技能框架与软件开发方法论。它通过可组合技能和初始指令，指导编码代理（如 Claude Code、Cursor 等）从需求分析、规格拆解、实现计划制定到自主子代理开发的全流程。系统强调 TDD、YAGNI 和 DRY 原则，支持代理长时间自主工作，旨在提升 AI 编码效率。 |
| 22 | [nasa/fprime](https://github.com/nasa/fprime) | F´ - A flight software and embedded systems framew... | C++ | 11.5k | 22 | F´ 是由喷气推进实验室开发的组件驱动型 C++ 飞行软件框架，专为太空和嵌入式系统设计。它提供消息队列、线程等核心能力，包含建模工具和测试工具，支持 CubeSats 等小型航天器应用，旨在实现快速开发和部署。 |
| 23 | [ansible/ansible](https://github.com/ansible/ansible) | Ansible is a radically simple IT automation platfo... | Python | 69.6k | 24 | Ansible 是一个简单、激进的 IT 自动化平台，使用 Python 编写。它通过 SSH 无需代理即可管理配置、应用部署、云 provisioning 和网络自动化。它支持并行处理、人类可读的 YAML 语言以及多节点编排，旨在简化 IT 运维，降低学习曲线。 |
| 24 | [nuxt/nuxt](https://github.com/nuxt/nuxt) | the full-stack Vue framework... | TypeScript | 60.7k | 16 | Nuxt 是一个基于 Vue.js 的全栈框架，提供服务端渲染、静态站点生成和边缘渲染等功能。它支持自动路由、代码拆分、SEO 优化和零配置 TypeScript。通过模块系统，Nuxt 允许开发者快速构建高性能、类型安全且可扩展的生产级 Web 应用。 |

[查看完整数据](api/github/2026-07-11.json)
<!-- END GITHUB TRENDING -->




