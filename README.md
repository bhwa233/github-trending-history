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

**最后更新**: 2026-11-04 | **成功**: 15 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | Auto Ontology is a Python framework for building s... | Python | 5.3k | 2.0k | NVIDIA Auto Ontology 是一个 Python 框架，用于在数据之上构建语义图推理层。它从元数据生成企业本体，支持自然语言转 SQL 查询，并提供 RBAC 和血缘验证。通过 MCP、CLI 和 API 暴露上下文，帮助代理可靠地访问数据，确保业务指标准确。 |
| 2 | [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | Worktrunk is a CLI for Git worktree management, de... | Rust | 11.1k | 531 | Worktrunk 是一个用 Rust 编写的 CLI 工具，旨在简化 Git worktree 管理。它提供核心命令（如切换、创建和清理）来替代繁琐的 Git 命令，特别为并行 AI agent 工作流设计。它包含钩子和写时复制构建缓存等生活质量功能，以提升多任务处理效率。 |
| 3 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 313.5k | 1.4k | 这是一个为 AI 编程代理（如 Claude、Copilot、Codex）提供实用工程技能的集合。旨在帮助开发者进行真实的工程工作，而非简单的氛围编码。这些技能小巧、可组合且易于定制，通过插件安装到各种 IDE 和 CLI 工具中，提升 AI 的编程能力和效率。 |
| 4 | [floci-io/floci](https://github.com/floci-io/floci) | Light, fluffy, and always free - The AWS Local Emu... | Java | 29.7k | 1.1k | Floci 是一个免费、开源的本地 AWS 模拟器，专为开发、测试和 CI 设计。它允许用户在本地运行 AWS 服务，无需云账户或认证令牌。支持 AWS SDK、CLI、Terraform 和 CDK，是 LocalStack 的直接替代品，可通过 Docker Compose 或 CLI 快速启动。 |
| 5 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | TypeScript | 113.0k | 1.2k | 该项目是一个为 Claude Code 设计的持久化记忆压缩系统。它自动捕获会话中的工具使用记录，利用 AI 进行语义压缩，并将相关上下文注入未来会话，确保 AI 代理保持项目知识的连续性。 |
| 6 | [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | Computer use CLI for AI agents... | Rust | 15.4k | 2.5k | 这是一个用 Rust 编写的 CLI 工具，旨在为 AI 代理提供计算机使用能力。它通过读取操作系统的可访问性树来查看和操作桌面应用，无需截图或像素匹配。它返回 JSON 格式的 UI 结构，支持点击和输入操作，适用于构建自动化 AI 代理。 |
| 7 | [github/spec-kit](https://github.com/github/spec-kit) | 💫 Toolkit to help you get started with SDD or any... | Python | 147.4k | 808 | Spec Kit 是一个 Python 开发的开源工具包，旨在为 AI 编码代理提供结构化流程、可重用模板和文档化成果。它支持 Spec-Driven Development (SDD)、Bug 修复和 Idea 评估等场景，允许用户通过扩展、钩子和工作流自定义流程，以提升开发效率和标准化。 |
| 8 | [The-PR-Agent/pr-agent](https://github.com/The-PR-Agent/pr-agent) | 🚀 PR Agent: The Original Open-Source PR Reviewer.... | Python | 14.8k | 280 | PR-Agent 是一个开源的 AI 驱动代码审查代理，基于 Python 开发。它支持 GitHub、GitLab 等平台，通过 GitHub Actions 或 CLI 实现自动化 PR 审查，帮助开发者提升代码质量。 |
| 9 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD sho... | Python | 139.1k | 617 | 这是一个基于 Python 的一站式 AI 短视频生成工具。用户只需输入主题或关键词，系统即可自动生成视频脚本、匹配素材、添加字幕和背景音乐，并最终合成高清短视频。项目集成了多种大模型 API，实现了从文案到成片的自动化全流程。 |
| 10 | [garrytan/gstack](https://github.com/garrytan/gstack) | Use Garry Tan's exact Claude Code setup: 23 opinio... | TypeScript | 139.4k | 290 | gstack 是一个开源软件工厂，利用 Claude Code 模拟虚拟工程团队。它包含 23 个工具，分别扮演 CEO、设计、工程经理、QA、安全官和发布工程师等角色。通过自动化设计文档、代码审查、QA 测试和安全审计，帮助开发者高效构建产品，支持从规划到发布的全流程自动化。 |
| 11 | [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | A 2.78-trillion-parameter Kimi K3 running inferenc... | C | 10.4k | 351 | 这是一个在 C 语言中实现的 Kimi K3 大语言模型推理引擎。它能够在单个 CPU 上运行，仅占用 8.24GB 内存，无需 BLAS、框架或 GPU 支持，完全基于 C99 标准编写，具有极高的可移植性。 |
| 12 | [JiaFeiMiao-K-Cat/DiscImageStudio](https://github.com/JiaFeiMiao-K-Cat/DiscImageStudio) | ... | C# | 6.7k | 1.8k | DiscImageStudio 是一款基于 C# 和 .NET 10 开发的开源工具，可将图片转换为符合 CD/DVD/BD 物理约束的数据，刻录后盘面呈现图案。支持图层排版、影调调整及辅助标定，可导出 ISO、RAW 或 WAV+CUE，并具备实验性的即时刻录功能。 |
| 13 | [MichaelCade/90DaysOfDevOps](https://github.com/MichaelCade/90DaysOfDevOps) | This repository started out as a learning in publi... | Shell | 30.5k | 97 | 这是一个始于2022年的90天DevOps学习公开项目，现已演变为社区结构化的学习地图。项目涵盖DevOps原则、流程、工具及用例，包含DevSecOps安全专题和社区版YouTube会议。内容非商业用途，旨在帮助开发者建立DevOps基础，鼓励社区贡献与讨论。 |
| 14 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 🕷️ The BEST Web Scraping framework that handles e... | Python | 96.7k | 2.0k | Scrapling 是一个功能强大的 Python 网络爬虫框架，集成了快速 HTTP 请求、隐身浏览器、JavaScript 渲染和并发爬取能力。它支持静态与动态页面抓取、API 数据提取，具备代理轮换、自动重试、会话管理及多种数据导出功能。此外，它还提供 MCP 服务器支持 AI 代理集成，适用于从简单单页抓取到大规模网站数据采集的完整工作流。 |
| 15 | [Thysrael/Horizon](https://github.com/Thysrael/Horizon) | 📡 Your own AI-powered news radar. Generates daily... | Python | 12.6k | 121 | Horizon 是一个基于 Python 的 AI 驱动新闻雷达，用于收集和过滤来自 RSS、社交媒体和论坛的分散信息。它允许用户定义“配置文件”来定制评分标准和输出格式（如摘要、背景或解决方案），支持中英文双语，并通过邮件、飞书或微信等多种方式分发个性化简报。 |
| 16 | [scenario-labs/skills](https://github.com/scenario-labs/skills) | Get production-ready images, video, audio, and 3D ... | Python | 2.5k | 224 | 处理失败 |

[查看完整数据](api/github/2026-11-04.json)
<!-- END GITHUB TRENDING -->




