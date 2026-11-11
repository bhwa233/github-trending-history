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

**最后更新**: 2026-11-10 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [meta/astryx](https://github.com/meta/astryx) | An open source design system that's fully customiz... | TypeScript | 23.1k | 3.1k | Astryx 是 Meta 开源的设计系统，提供 150+ 可访问组件、品牌级主题和暗黑模式。它基于 React 和 StyleX，支持无构建插件集成。核心优势在于开放内部结构（支持 swizzle）、无样式锁定（可覆盖 Tailwind/CSS）以及专为人和 AI 协同设计的 API，适合构建可定制且 AI 友好的现代 Web 应用。 |
| 2 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 192.4k | 1.7k | Anthropic 官方的 Agent Skills 公共仓库，包含 Claude 动态加载的指令、脚本和资源。旨在提升 Claude 在特定任务（如文档创建、数据分析、自动化）上的表现。仓库提供 Apache 2.0 许可的开源技能示例及底层文档处理技能实现。 |
| 3 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 115.2k | 465 | 该项目为 AI 编码代理提供生产级工程技能。通过 9 个斜杠命令封装资深工程师的最佳实践，覆盖从需求定义到生产部署的全生命周期。它确保代码质量、性能优化和可维护性，支持自动化测试、代码审查及增量构建。 |
| 4 | [anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts) | A collection of projects designed to help develope... | Python | 20.5k | 531 | 该项目是一套帮助开发者快速构建 Claude API 应用的示例集合。包含客户支持、金融分析、计算机控制及浏览器自动化等多种场景的参考实现，展示了如何利用 Claude 的自然语言理解与操作能力来开发实用工具。 |
| 5 | [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | Multi-Joint dynamics with Contact. A general purpo... | C++ | 17.4k | 456 | MuJoCo 是 Google DeepMind 维护的通用物理引擎，专注于多关节动力学与接触模拟。它旨在加速机器人、生物力学、图形学及机器学习等领域的研究。该引擎提供 C API，性能经过高度优化，支持原生桌面和浏览器可视化，并包含 Python 绑定和 Unity 插件，适用于需要快速且精确模拟的复杂结构环境交互场景。 |
| 6 | [we-promise/sure](https://github.com/we-promise/sure) | The personal finance app for everyone (by everyone... | Ruby | 12.1k | 159 | 这是一个基于 Ruby 开发的全功能个人理财应用，由 Maybe Finance 社区分支维护。支持自托管（Docker），提供浏览器、桌面及移动端多平台访问，兼容 API 和 LLM 代理。旨在让用户免费管理个人财务数据，采用 AGPLv3 开源协议。 |
| 7 | [homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp) | Configure and automate Home Assistant with Claude,... | Python | 6.7k | 790 | 这是一个 Python 项目，允许用户通过 Claude、ChatGPT 等 AI 助手配置和自动化 Home Assistant 智能家居系统。它通过 HACS 或 Marketplace 安装，支持多种 Home Assistant 版本，提供完整的 AI 控制功能。 |
| 8 | [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Browser automation CLI for AI agents... | Rust | 49.3k | 780 | 这是一个用 Rust 编写的 CLI 工具，专为 AI 代理提供浏览器自动化能力。它通过 Chrome DevTools Protocol 控制浏览器，将页面渲染为可访问性树并生成元素引用（如 @e1），允许 AI 代理通过命令行逐个操作网页元素。支持打开页面、读取内容、点击交互等功能，非常适合需要网页浏览能力的 AI 智能体。 |
| 9 | [sherlock-project/sherlock](https://github.com/sherlock-project/sherlock) | Hunt down social media accounts by username across... | Python | 109.1k | 2.4k | Sherlock 是一个用 Python 编写的开源工具，用于在 400 多个社交网络上搜索特定用户名。它支持批量查询，并提供多种输出格式（如 CSV、TXT）。用户可以通过命令行快速检测用户名在各大平台的注册情况，适合用于品牌保护、网络安全调查或个人隐私查询。 |
| 10 | [tokio-rs/topcoat](https://github.com/tokio-rs/topcoat) | A batteries-included framework for building web ap... | Rust | 6.9k | 192 | Topcoat 是一个 Rust 全栈框架，提供模块化和开箱即用的功能。它支持服务器端渲染，组件可直接查询数据库。其核心优势在于客户端响应性，通过 `$(...)` 表达式在浏览器端即时运行，无需 WebAssembly 或构建步骤。项目目前处于早期实验阶段。 |
| 11 | [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | A context-compression plugin for month-long single... | TypeScript | 6.4k | 375 | 这是一个专为月级长会话设计的上下文压缩插件，支持数十亿 tokens 的处理，仅需 100K 上下文窗口即可运行，能将 token 消耗减少 5 倍。项目基于 MIT 许可证开源，包含详细论文和第三方基准测试，旨在解决长上下文管理的成本和质量问题。 |
| 12 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 321.0k | 1.2k | 这是一个为 AI 代理（如 Claude、Copilot 等）提供工程技能的 Shell 脚本集合。旨在帮助开发者进行真实的工程实践，而非简单的“氛围编码”。这些技能小巧、可组合且易于适应，支持多种 AI 模型，并提供自动更新功能。 |

[查看完整数据](api/github/2026-11-10.json)
<!-- END GITHUB TRENDING -->




