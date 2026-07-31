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

**最后更新**: 2026-07-30 | **成功**: 13 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | Build local voice agents with open-source models... | Python | 8.8k | 628 | 这是一个低延迟、全模块化的语音代理管道，包含 VAD、STT、LLM 和 TTS 四个组件。它通过 OpenAI Realtime 兼容的 WebSocket API 暴露，支持本地和云端模型。所有组件均可替换，适合构建本地语音助手及机器人对话后端。 |
| 2 | [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | 12 Weeks, 24 Lessons, AI for All!... | Jupyter Notebook | 53.9k | 155 | 这是一个由微软提供的面向初学者的 AI 课程，包含 12 周 24 课的 Jupyter Notebook 教程。课程涵盖 TensorFlow 和 PyTorch 等工具，包含实践练习、测验和伦理讨论，支持多语言，旨在帮助初学者探索 AI 世界。 |
| 3 | [paperswithbacktest/awesome-systematic-trading](https://github.com/paperswithbacktest/awesome-systematic-trading) | A curated list of awesome libraries, packages, str... | Python | 11.0k | 621 | 这是一个关于系统化交易（量化交易）的精选资源列表。项目收录了97个用于研究和实盘交易的库与包，涵盖回测、实盘交易、数据分析、机器学习等领域。此外，还整理了40多种策略、55本相关书籍、23个视频以及博客课程，适合量化交易开发者与研究员寻找工具和参考资料。 |
| 4 | [different-ai/openwork](https://github.com/different-ai/openwork) | The open-source alternative to Claude Cowork (powe... | TypeScript | 18.7k | 915 | OpenWork 是一款开源的桌面应用，旨在替代 Claude Cowork，用于共享 AI 工作流。它通过 MCP 协议，允许用户在 Codex、Claude Code、Cursor 等多个 AI 工具间共享技能、MCP 连接和连接服务。支持跨团队、跨机器协作，提供桌面应用和远程 MCP 服务器两种使用方式。 |
| 5 | [WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys) | Socket-based TS/JavaScript API for WhatsApp Web... | JavaScript | 10.4k | 19 | Baileys 是一个基于 WebSockets 的 TypeScript/JavaScript 库，用于与 WhatsApp Web API 交互。项目已升级至 7.0.0 版本，引入了重大变更，用户需查阅迁移指南。该库提供社区支持和商业级付费支持，但明确声明与 WhatsApp 无官方关联，并提醒用户遵守服务条款。 |
| 6 | [pascalorg/editor](https://github.com/pascalorg/editor) | Create and share 3D architectural projects.... | TypeScript | 20.1k | 625 | Pascal Editor 是一个基于 React Three Fiber 和 WebGPU 构建的 3D 建筑编辑器。它采用 Turborepo Monorepo 架构，将核心逻辑、渲染器、编辑工具和节点定义分离为独立包。项目利用 Zustand 管理场景状态，支持创建和分享 3D 建筑项目，提供交互式编辑与渲染功能。 |
| 7 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 55.5k | 378 | 这是一个 AI Agent 技能，用于跨 Reddit、X、YouTube、HN、Polymarket 等平台搜索并综合生成基于事实的摘要。它通过点赞、金钱等真实参与度评分，而非编辑筛选，聚合了 Google 等搜索引擎无法触及的“围墙花园”数据。 |
| 8 | [dotnet/aspnetcore](https://github.com/dotnet/aspnetcore) | ASP.NET Core is a cross-platform .NET framework fo... | C# | 38.3k | 7 | ASP.NET Core 是一个开源的、跨平台的 C# 框架，用于构建现代云原生 Web 应用、IoT 应用和移动后端。它专为云和本地部署优化，具有模块化组件和最小开销，支持在 Windows、Mac 和 Linux 上运行。 |
| 9 | [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | Microsoft PowerToys is a collection of utilities t... | C | 137.1k | 70 | 处理失败 |
| 10 | [ansible/ansible](https://github.com/ansible/ansible) | Ansible is a radically simple IT automation platfo... | Python | 69.9k | 29 | Ansible 是一个简单且激进的 IT 自动化平台，使用 Python 编写。它支持配置管理、应用部署、云管理和网络自动化等功能。其核心优势在于无代理架构，仅通过 SSH 即可远程管理，且使用接近英语的 YAML 语言，降低了学习门槛，适合大规模 IT 运维和自动化任务。 |
| 11 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 48.0k | 80 | 这是一个基于 TypeScript 的 MCP 服务器，允许 AI 编码代理（如 Claude 或 Cursor）控制并检查实时 Chrome 浏览器。它集成了 Puppeteer，提供性能分析、网络调试、截图和控制台检查功能，旨在实现可靠的浏览器自动化和深度调试。 |
| 12 | [jenkinsci/jenkins](https://github.com/jenkinsci/jenkins) | Jenkins automation server... | Java | 26.3k | 25 | Jenkins 是领先的开源自动化服务器，使用 Java 构建。它提供超过 2000 个插件，支持构建、测试、部署等开发流程，帮助用户自动化重复性任务，专注于核心工作。支持 WAR、Docker 等多种分发方式。 |
| 13 | [agavra/tuicr](https://github.com/agavra/tuicr) | a code review TUI with vim keybindings... | Rust | 1.8k | 190 | 这是一个基于 Rust 的终端代码审查工具，支持 Vim 键位绑定。它提供 GitHub 风格的连续差异视图，支持在行、范围、文件及审查级别添加评论。支持审查 git、jj 和 mercurial 的未提交更改、提交范围或 PR/MR，并能将评论导出到 GitHub、GitLab 或剪贴板。 |
| 14 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 236.2k | 804 | ECC 是一个针对 AI 代理的性能优化系统，旨在为 Claude Code、Codex 等提供协调的工程工具箱。它通过计划、测试、审查等流程，优化上下文窗口，提升开发效率。项目包含 67 个专业代理、281 个技能及安全扫描功能，支持多种编程环境，采用 MIT 开源协议。 |

[查看完整数据](api/github/2026-07-30.json)
<!-- END GITHUB TRENDING -->




