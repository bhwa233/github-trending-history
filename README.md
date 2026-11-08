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

**最后更新**: 2026-11-07 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Browser automation CLI for AI agents... | Rust | 46.9k | 190 | 这是一个用 Rust 编写的浏览器自动化 CLI 工具，专为 AI 代理设计。它通过 Chrome DevTools Protocol 控制浏览器，将页面转换为可读的快照文本，允许 AI 代理通过 shell 命令逐个操作页面元素，如点击、读取等。 |
| 2 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | A coding-agent skill for multi-phase security audi... | JavaScript | 65.8k | 2.1k | 这是一个由 Cloudflare 开发的编码代理技能，旨在将 AI 代理转变为安全审计员。它通过六个阶段（侦察、狩猎、验证、输出、独立验证、报告）执行结构化安全审计。该工具支持独立验证和机器可读的发现结果，能够自动生成架构映射、覆盖率追踪和漏洞报告，是构建企业级漏洞发现系统的起点。 |
| 3 | [google/skills](https://github.com/google/skills) | Agent Skills for Google products and technologies... | Python | 23.4k | 443 | 该项目为 Google 产品和技术提供 Agent Skills，涵盖 Google Cloud、AI/ML 及多产品解决方案。用户可通过 Node.js 环境安装和更新这些技能，用于配置目标代理、管理模型、执行 RAG、数据分析及安全审计等任务，旨在简化 AI 代理在 Google 生态中的部署与管理。 |
| 4 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 317.8k | 1.1k | 这是一套为 AI 编程助手（如 Claude、Copilot 等）设计的可组合、可定制的工程技能库。旨在帮助开发者进行真正的工程实践，而非简单的“氛围编码”。支持多种 AI 模型，通过 Shell 脚本实现，强调小型化和模块化，方便用户根据需求自由组合和修改。 |
| 5 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 188.8k | 390 | Anthropic 官方维护的 Agent Skills 公共仓库，展示了 Claude 如何通过加载包含指令、脚本和资源的文件夹来提升特定任务性能。项目涵盖创意、技术及企业工作流等多种场景，包含 Apache 2.0 许可的开源技能示例，特别是文档处理相关的技能实现。 |
| 6 | [meta/astryx](https://github.com/meta/astryx) | An open source design system that's fully customiz... | TypeScript | 14.6k | 96 | Astryx 是 Meta 开源的企业级设计系统，内置 150+ 可访问组件、品牌级主题及暗黑模式。它基于 StyleX 构建，支持 React 19，提供 CLI 工具。其核心优势在于无样式锁定、高度可定制且开放内部，允许开发者直接组合组件或 eject 源码，同时支持与 Tailwind 等工具混用，专为人类和 AI 助手设计。 |
| 7 | [prometheus/prometheus](https://github.com/prometheus/prometheus) | The Prometheus monitoring system and time series d... | Go | 67.5k | 322 | Prometheus 是一个基于 Go 语言开发的云原生系统监控与时序数据库。它采用 HTTP 拉取模型收集指标，支持多维数据模型和 PromQL 查询语言，具备服务发现、联邦和告警功能，无分布式存储依赖。 |
| 8 | [sherlock-project/sherlock](https://github.com/sherlock-project/sherlock) | Hunt down social media accounts by username across... | Python | 100.6k | 1.8k | Sherlock 是一款开源工具，用于在 400+ 个社交网络上查找用户名。支持通过 pipx、Docker 或包管理器安装。可搜索单个或多个用户名，并将结果保存至文件。提供代理、调试等丰富命令行选项，适合进行全网账号存在性检测。 |
| 9 | [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | Open-source Grok Bot alternative with a virtual ma... | TypeScript | 17.1k | 2.0k | OpenMausBot 是一个开源的本地优先 AI 代理聊天应用。它允许用户在本地运行多个 AI 代理（如 Claude、Codex），每个代理拥有独立的个性、模型和虚拟环境。项目旨在提供类似 Grok Bot 的多代理协作体验，无需中间代理，支持跨平台使用。 |
| 10 | [astral-sh/ruff](https://github.com/astral-sh/ruff) | An extremely fast Python linter and code formatter... | Rust | 51.0k | 350 | Ruff 是一个用 Rust 编写的极快 Python linter 和代码 formatter。它比 Flake8 和 Black 快 10-100 倍，支持 900 多条规则，可替代多个工具。具备自动修复、缓存和编辑器集成功能，兼容 Python 3.15。 |
| 11 | [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) | A utility-first CSS framework for rapid UI develop... | TypeScript | 98.5k | 122 | Tailwind CSS 是一个实用优先的 CSS 框架，旨在加速 UI 开发。它通过提供一系列底层工具类，允许开发者直接在 HTML 中构建自定义界面，无需编写繁琐的 CSS 文件。该项目支持 TypeScript，拥有活跃的社区和完善的文档，适合快速构建现代化的响应式网页应用。 |
| 12 | [mbillow/localthings](https://github.com/mbillow/localthings) | Control your Samsung appliances from Home Assistan... | Python | 1.1k | 186 | 本项目是一个 Python 库，允许用户通过本地网络直接控制三星家电，无需云端账户。它完美集成 Home Assistant，支持洗衣机、冰箱、空调等多种设备。项目注重隐私，完全离线运行，数据不外传。支持自动检测 IP 和设备类型，提供电源、温度、计时器等全面控制功能。 |
| 13 | [zed-industries/zed](https://github.com/zed-industries/zed) | Code at the speed of thought – Zed is a high-perfo... | Rust | 94.3k | 1.1k | Zed 是一款由 Rust 编写的高性能多人协作代码编辑器，由 Atom 和 Tree-sitter 的开发者打造。它支持跨平台（macOS、Linux、Windows），旨在提供“思维速度”的编码体验，目前由营利性公司 Zed Industries 维护。 |
| 14 | [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | A context-compression plugin for month-long single... | TypeScript | 4.6k | 191 | 这是一个用于大语言模型长会话的上下文压缩插件。它通过增量分层压缩技术，支持月级长会话（数十亿 tokens），仅需 100K 上下文窗口即可运行，实现 5 倍 token 节省。在多项基准测试中表现优异，解决了长上下文窗口溢出和成本高昂的问题。 |
| 15 | [dsx-ai-factory/nvke](https://github.com/dsx-ai-factory/nvke) | NVIDIA Kubernetes Engine (NVKE). A management plan... | Go | 571 | 123 | NVKE 是 NVIDIA 推出的 Kubernetes 管理平面，用于在裸金属上运行 GPU Kubernetes 服务。它允许平台团队创建和管理独立的工作负载集群，每个集群拥有自己的控制平面和节点池。目前处于预览阶段，支持本地快速评估和基于 NVIDIA Infra Controller (NICo) 的真实部署。 |

[查看完整数据](api/github/2026-11-07.json)
<!-- END GITHUB TRENDING -->




