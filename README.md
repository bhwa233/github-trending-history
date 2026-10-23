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

**最后更新**: 2026-10-22 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [php/php-src](https://github.com/php/php-src) | The PHP Interpreter... | C | 41.2k | 287 | PHP 的官方源代码仓库，使用 C 语言编写。这是一个功能强大的通用脚本语言解释器，特别适合 Web 开发。项目提供了详细的构建指南，包括依赖安装、配置选项、编译及测试流程，支持从源码构建用于开发或生产环境。 |
| 2 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intend... | Python | 31.6k | 303 | 这是一个开源插件库，旨在将 Claude 转变为特定角色的专家。它包含生产力、销售、客户支持等11种插件，支持与 Slack、Notion、Jira 等多种工具集成。用户可自定义这些插件以适应公司流程，从而提高团队协作效率和产出质量。 |
| 3 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 173.5k | 1.9k | Ponytail 是一个让 AI 代理像“懒惰资深开发”一样思考的工具。它通过优化代码，只保留必要的逻辑，剔除冗余，从而生成更简洁、安全且低成本的代码。它支持代码审查功能，确保在减少代码量的同时不牺牲安全性、错误处理和可访问性。 |
| 4 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | A coding-agent skill for multi-phase security audi... | JavaScript | 39.6k | 3.0k | 这是一个将代理转化为安全审计员的 JavaScript 技能。它通过六个阶段（侦察、狩猎、验证、输出、独立验证、报告）执行结构化安全审计。支持独立验证发现结果，确保机器可读性和准确性，适用于自动化漏洞发现和代码安全评估。 |
| 5 | [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Turn any codebase, with its docs, SQL schemas, con... | Python | 133.0k | 1.4k | Graphify 是一个将代码库、文档和配置转换为可查询知识图谱的工具。它利用本地确定性 AST 解析（tree-sitter）生成图谱，无需向量存储，每条边都有明确解释。支持集成到 Claude、Cursor 等 AI 助手中，通过 `/graphify` 命令快速分析项目结构，生成可视化 HTML 和分析报告，帮助开发者直观理解代码关系，提升代码质量和调试效率。 |
| 6 | [supabase/supabase](https://github.com/supabase/supabase) | The Postgres development platform. Supabase gives ... | TypeScript | 113.5k | 693 | Supabase 是一个基于 PostgreSQL 的开源 Firebase 替代品。它提供托管数据库、身份验证、自动生成的 REST/GraphQL API、实时订阅、文件存储、边缘函数及 AI 向量工具。支持自托管和本地开发，旨在为开发者提供类似 Firebase 的体验。 |
| 7 | [fastapi/fastapi](https://github.com/fastapi/fastapi) | FastAPI framework, high performance, easy to learn... | Python | 103.8k | 101 | FastAPI 是一个基于 Python 类型提示的现代、高性能 Web 框架，用于构建 API。它具备开发速度快、代码简洁、自动生成交互式文档及符合 OpenAPI 标准等特性，能显著减少错误并提升生产环境下的性能。 |
| 8 | [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | A visual, example-driven guide to Claude Code — fr... | Python | 43.2k | 177 | 这是一个关于 Claude Code 的视觉化、示例驱动的指南项目。它旨在解决官方文档缺乏组合示例和学习路径的问题，提供从基础到高级的教程，包含 Mermaid 图表、生产就绪的模板以及交互式测验，帮助用户快速掌握代理、钩子、技能和 MCP 服务器的编排。 |
| 9 | [Meloong-Git/PCL](https://github.com/Meloong-Git/PCL) | Minecraft 启动器 Plain Craft Launcher（PCL）。... | Visual Basic .NET | 8.7k | 119 | 这是一个名为 Plain Craft Launcher (PCL) 的 Minecraft 启动器项目，使用 Visual Basic .NET 编写。项目包含了启动器的核心源代码，涵盖 UI 库、动画模块、下载模块及 Minecraft 启动模块等功能。代码会在每次正式版发布时同步更新，旨在为用户提供免费使用的 Minecraft 启动体验。 |

[查看完整数据](api/github/2026-10-22.json)
<!-- END GITHUB TRENDING -->




