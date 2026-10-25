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

**最后更新**: 2026-10-24 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | A coding-agent skill for multi-phase security audi... | JavaScript | 44.6k | 2.3k | 这是一个将编码代理转化为安全审计员的技能，通过六个阶段（侦察、狩猎、验证等）执行多阶段安全审计。它支持独立验证和机器可读输出，能够自动发现漏洞并生成结构化报告，是 Cloudflare 漏洞发现系统的起点。 |
| 2 | [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) | OpenShell is the safe, private runtime for autonom... | Rust | 19.5k | 896 | OpenShell 是一个为自主 AI 代理提供的安全、私有运行时。它利用内核级强制执行和形式化验证，在赋予代理执行任务（如读写文件、调用 API）权限的同时，严格限制其对敏感数据和网络的访问。项目采用 Rust 开发，通过策略声明确保代理行为的安全隔离。 |
| 3 | [aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws) | Official, AWS-supported MCP servers, skills, and p... | Python | 3.1k | 13 | 这是一个由 AWS 官方支持的 Python 项目，旨在为 AI 编码代理提供在 AWS 上构建、部署和管理应用程序的工具、知识和护栏。它包含多个 MCP 服务器和插件，支持服务选择、CDK/CloudFormation、数据分析、DevSecOps 等功能，兼容 Claude Code、Cursor 等主流开发工具。 |
| 4 | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | Anti-AI-slop design skill for Claude Code, Cursor,... | CSS | 32.2k | 455 | 这是一个为 Claude Code、Cursor 和 Codex 设计的“反 AI-slop”设计技能。它提供 48 种独特主题，通过检查标题眉毛、全大写标签等机器痕迹来确保设计真实。支持自定义、重设计、审计和截图，确保 AI 生成的网页符合人类设计标准，避免通用化。 |
| 5 | [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | A visual, example-driven guide to Claude Code — fr... | Python | 44.6k | 392 | 这是一个视觉化、示例驱动的 Claude Code 指南，涵盖从基础概念到高级代理、钩子及 MCP 服务器的全流程。项目提供结构化学习路径、Mermaid 图解及生产级可复制模板，旨在解决官方文档缺乏组合示例的问题，帮助用户快速掌握 Claude Code 并构建自动化工作流。 |
| 6 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | Rust | 86.4k | 619 | Impeccable 是一个为 AI 编码代理提供设计指导的开源项目。它包含 24 个命令、62 条确定性检测规则和实时浏览器迭代功能，旨在避免 AI 生成的重复设计模式。通过 `/impeccable init` 记录产品真相，帮助 AI 生成更独特、高质量的前端设计。 |
| 7 | [pollen-robotics/microduck](https://github.com/pollen-robotics/microduck) | A Tiny biped duck robot 🦆... | Rust | 11.0k | 319 | 这是一个基于 Rust 开发的双足小鸭子机器人，运行在 Rockchip RK3566 芯片上。它利用强化学习策略控制 15 个舵机，实现行走、滚动、抓取和起立等复杂动作。系统包含 50Hz 控制循环、蓝牙控制和自动更新机制，支持从模拟到现实的策略迁移。 |
| 8 | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | An open-source AI agent that brings the power of G... | TypeScript | 108.1k | 44 | 这是一个开源的 AI 代理工具，旨在将 Google Gemini 的强大功能直接带入终端。它提供轻量级的访问方式，支持通过 npx、npm 等多种方式安装，并定期发布更新。注意：该项目已被 Antigravity 取代，且未针对最新模型优化。 |
| 9 | [jbiaojerry/ebook-treasure-chest](https://github.com/jbiaojerry/ebook-treasure-chest) | 欢迎来到电子书下载宝库，一个汇聚了各类电子书下载链接的地方。无论你是喜欢阅读经典文学、经管励志、终身... | Python | 22.6k | 227 | 这是一个电子书资源聚合库，使用Python开发。它收集了帆书、微信读书、京东读书等平台的大量电子书链接，提供epub、mobi、azw3三种格式。项目通过GitHub Pages提供强大的实时搜索和多关键词搜索功能，并按文学、历史、管理等分类整理，方便用户快速查找和下载各类书籍。 |
| 10 | [makecindy/cindy](https://github.com/makecindy/cindy) | Consider it done. The open-source AI agent that wo... | TypeScript | 4.1k | 477 | Cindy 是一个开源、开箱即用的 AI Agent，支持本地运行。它集成了 Claude Code 和 Codex 等多种模型，支持浏览器和电脑控制。具备记忆、技能、自动化和 MCP 插件功能，可无缝处理项目任务，支持自定义 API 密钥或使用官方服务。 |

[查看完整数据](api/github/2026-10-24.json)
<!-- END GITHUB TRENDING -->




