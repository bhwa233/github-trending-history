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

**最后更新**: 2026-03-14 | **成功**: 9 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | OpenViking is an open-source context database desi... | Python | 10.5k | 1.6k | OpenViking是面向AI代理的开源上下文数据库，通过文件系统范式统一管理记忆、资源与技能，解决上下文碎片化、检索效率低和不可观测性问题，支持分层加载与可视化检索轨迹。 |
| 2 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 11.3k | 411 | 处理失败 |
| 3 | [dimensionalOS/dimos](https://github.com/dimensionalOS/dimos) | The Dimensional Framework... | Python | 842 | 64 | DimensionalOS/dimos 是面向物理空间的代理操作系统，支持人形、四足、无人机等机器人，无需ROS即可用Python开发。集成导航、SLAM、动态避障、空间记忆及多代理控制，实现感知、决策与控制一体化。 |
| 4 | [p-e-w/heretic](https://github.com/p-e-w/heretic) | Fully automatic censorship removal for language mo... | Python | 13.7k | 661 | Heretic是全自动语言模型去审查工具，结合方向性消融与Optuna优化，降低拒绝率并最小化模型性能损失，适用于自动化去除AI审查机制的场景。 |
| 5 | [langflow-ai/openrag](https://github.com/langflow-ai/openrag) | OpenRAG is a comprehensive, single package Retriev... | Python | 2.7k | 568 | OpenRAG是一个基于Langflow、Docling和Opensearch的RAG平台，提供文档智能搜索与AI对话功能。支持文档上传处理、语义检索、可视化工作流构建，集成大语言模型实现智能问答，适用于企业级知识管理与个性化服务场景。 |
| 6 | [lightpanda-io/browser](https://github.com/lightpanda-io/browser) | Lightpanda: the headless browser designed for AI a... | Zig | 17.0k | 2.1k | Lightpanda是用Zig语言开发的无头浏览器，支持JavaScript执行和部分Web API，兼容Puppeteer等工具。具有低内存占用、高速执行和快速启动特性，适用于AI自动化、网页抓取及测试场景。 |
| 7 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 43.6k | 4.3k | 提供多种AI代理角色的Shell脚本项目，每个代理具备专业技能、个性化沟通和可交付成果，支持多工具集成实现自动化任务处理与协作。 |
| 8 | [fishaudio/fish-speech](https://github.com/fishaudio/fish-speech) | SOTA Open Source TTS... | Python | 27.2k | 377 | Fish Audio S2 是开源文本到语音系统，支持50+语言，采用强化学习与双自回归架构生成自然语音。支持情感标签控制、多说话人及多轮对话生成，模型在多项基准测试中表现优异。 |
| 9 | [InsForge/InsForge](https://github.com/InsForge/InsForge) | Give agents everything they need to ship fullstack... | TypeScript | 4.1k | 477 | InsForge为AI编码代理和编辑器提供后端开发平台，通过语义层抽象数据库、认证、存储等后端原语，支持代理理解和操作全栈功能，实现上下文工程和系统状态可视化。 |
| 10 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 83.4k | 1.5k | Superpowers 是一个基于可组合技能的软件开发框架，通过代理自动化任务分解、设计确认和代码实现。支持TDD、YAGNI和DRY原则，通过子代理协作完成工程任务，提升开发效率。 |

[查看完整数据](api/github/2026-03-14.json)
<!-- END GITHUB TRENDING -->








