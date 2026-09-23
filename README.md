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

**最后更新**: 2026-09-22 | **成功**: 8 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anthropics/financial-services](https://github.com/anthropics/financial-services) | ... | Python | 36.3k | 438 | 该项目为金融服务业（投资银行、股权研究等）提供参考代理、技能和数据连接器。包含 Pitch Agent、Market Researcher 等端到端工作流代理，以及垂直插件。支持通过 Claude Cowork 插件或 Managed Agents API 部署。注意：仅用于起草工作产品，需人工审查，不构成投资建议。 |
| 2 | [agent-substrate/substrate](https://github.com/agent-substrate/substrate) | Agent Substrate: the core system... | Go | 3.0k | 245 | Agent Substrate 是一个专为大规模运行自主代理设计的安全执行运行时。它通过将大量“演员”映射到少量“工作者”实现高密度沙箱，支持微VM和gVisor，提供零信任隔离。它利用Kubernetes进行基础设施管理，专注于低延迟的调度、生命周期控制和流量路由，旨在优化AI代理、推理和训练循环。 |
| 3 | [dream-num/univer](https://github.com/dream-num/univer) | The Office Harness for AI Agents — Spreadsheets, D... | TypeScript | 15.4k | 255 | Univer 是一个开源的 Office SDK，专为 AI 代理打造。它提供电子表格、文档、演示文稿等核心组件，支持高性能、可定制的插件架构。开发者可在浏览器和 Node.js 环境中构建嵌入式的生产力应用，实现多工具间的数据共享与协作，是一个构建自定义办公界面的框架。 |
| 4 | [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI tool for configuring and monitoring Claude Cod... | Python | 31.1k | 64 | 这是一个为 Anthropic Claude Code 提供的 CLI 工具，旨在增强开发工作流。它提供了一套即用型的配置，包括 AI 代理、自定义命令、设置、钩子、外部服务集成（MCPs）以及项目模板。用户可以通过命令行轻松安装和管理这些组件，以提升开发效率。 |
| 5 | [google/ax](https://github.com/google/ax) | Google's open agentic orchestration runtime... | Go | 7.6k | 2.3k | AX 是 Google 开源的自主代理编排运行时，基于 Go 语言开发。它提供类似 Kubernetes 的声明式 API，通过 Task、Workspace、Gateway 和 Model 四个核心原语，实现代理代码的沙箱隔离、网络限制、资源管理及状态恢复。旨在以高吞吐量运行数十亿个自主代理工作负载，解决代理运行中的状态管理、安全隔离和成本控制问题。 |
| 6 | [mvt-project/mvt](https://github.com/mvt-project/mvt) | MVT (Mobile Verification Toolkit) helps with condu... | Python | 14.1k | 441 | MVT (Mobile Verification Toolkit) 是由 Amnesty International 开发的开源取证工具，主要用于 Android 和 iOS 设备。它旨在自动化收集数字取证痕迹，帮助调查员识别设备是否被间谍软件（如 Pegasus）感染。该工具支持使用公开的指标（IOCs）进行扫描，但警告指出仅依赖公开指标不足以确认设备安全，建议寻求专业专家协助。 |
| 7 | [superdesigndev/treg](https://github.com/superdesigndev/treg) | OpenRouter for agent tools. Join community here: h... | Python | 2.2k | 230 | treg 是一个为代理工具设计的统一 API 网关，类似于 OpenRouter。它通过单一端点连接 3000+ 外部工具，无需提供商注册，支持按次付费调用。同时支持团队内部工具集成与安全凭证管理，旨在简化代理工作流程。 |
| 8 | [browser-use/video-use](https://github.com/browser-use/video-use) | Edit videos with coding agents... | Python | 25.9k | 191 | 这是一个基于 Python 的开源项目，允许用户通过 Claude Code 等编程代理自动编辑视频。它支持剪除填充词、自动调色、添加字幕和动画，并能自我评估输出质量，实现无需预设的智能化视频处理。 |

[查看完整数据](api/github/2026-09-22.json)
<!-- END GITHUB TRENDING -->




