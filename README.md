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

**最后更新**: 2026-11-11 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [meta/astryx](https://github.com/meta/astryx) | An open source design system that's fully customiz... | TypeScript | 25.2k | 2.8k | Astryx 是 Meta 开源的企业级设计系统，包含 150+ 个可访问组件，支持暗黑模式和主题定制。它基于 StyleX 构建，但允许使用 Tailwind 或 CSS 覆盖样式。专为人类和 AI 助手设计，提供开箱即用的 React 组件和 CLI 工具，无需构建插件即可快速集成。 |
| 2 | [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 ... | Python | 70.5k | 278 | 基于 Python 的 LLM 驱动多市场股票智能分析系统，支持 A股、港股、美股等多地行情聚合与 AI 决策报告生成。支持零成本 GitHub Actions 定时运行，自动推送决策仪表盘至企业微信、飞书等平台，辅助投资决策。 |
| 3 | [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) | ... | TypeScript | 1.9k | 159 | 本项目由 Chrome、Edge、Firefox 和 MDN 团队维护，旨在为编码代理提供现代 Web 平台的专业知识和最佳实践。通过 CLI 工具，它帮助开发者引导 AI 走出遗留模式，使用原生高性能 API，从而提升代码质量和浏览器兼容性。 |
| 4 | [shadcn/improve](https://github.com/shadcn/improve) | Use your most capable model to audit your codebase... | - | 11.0k | 361 | 这是一个智能体技能，旨在利用强大的模型审计代码库并生成实施计划，交由廉价模型执行。它支持全量、快速、安全等多种审计模式，生成独立的 Markdown 规范文档，帮助团队优化成本，实现高效的自动化代码改进。 |
| 5 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 116.1k | 787 | 该项目为 AI 编码代理提供生产级工程技能，封装了资深工程师的流程与最佳实践。包含 9 个开发生命周期斜杠命令，覆盖从需求定义到生产发布的全流程，确保 AI 代理在构建软件时保持一致的高质量标准。 |
| 6 | [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Browser automation CLI for AI agents... | Rust | 50.0k | 708 | 这是一个用 Rust 编写的浏览器自动化 CLI，专为 AI 代理设计。它允许代理通过 Shell 命令打开页面、读取无障碍树快照并交互元素。使用 Chrome DevTools Protocol，支持通过引用或语义定位器进行操作，非常适合需要网页交互能力的 AI 智能体。 |
| 7 | [we-promise/sure](https://github.com/we-promise/sure) | The personal finance app for everyone (by everyone... | Ruby | 13.1k | 1.1k | 这是一个基于 Ruby 的全功能个人理财与财富管理应用，源自 Maybe Finance 的社区分支。支持 Docker 自托管，提供浏览器、桌面及移动端访问，并集成了理财顾问功能。项目旨在通过开源保持代码活跃，允许用户免费自托管。 |
| 8 | [homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp) | Configure and automate Home Assistant with Claude,... | Python | 7.4k | 645 | 这是一个 Python 项目，旨在通过 Claude、ChatGPT 等 AI 助手配置和自动化 Home Assistant。它通过 HACS 或 Home Assistant 市场作为集成安装，支持多种 Home Assistant 版本，允许用户使用自然语言控制智能家居设备并执行自动化任务。 |
| 9 | [openai/codex-security](https://github.com/openai/codex-security) | OpenAI's Codex Security CLI and TypeScript SDK for... | TypeScript | 11.8k | 52 | 这是一个用于查找、验证和修复代码安全漏洞的 CLI 和 SDK。支持深度扫描、自动修补、生成 SECURITY.md 以及与第三方工具集成。用户可通过 Codex 插件、命令行或 GitHub Action 进行操作，适用于自动化安全审计和 CI/CD 流程。 |
| 10 | [TheAlgorithms/Java](https://github.com/TheAlgorithms/Java) | All Algorithms implemented in Java... | Java | 67.1k | 51 | 这是一个包含所有经典算法的 Java 实现项目，旨在用于教育目的。项目提供了丰富的算法代码库，支持通过 Gitpod.io 在线运行和编辑，并鼓励社区贡献。 |

[查看完整数据](api/github/2026-11-11.json)
<!-- END GITHUB TRENDING -->




