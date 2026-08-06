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

**最后更新**: 2026-08-05 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [cloudflare/computer](https://github.com/cloudflare/computer) | Give your agent a computer 👾... | TypeScript | 2.9k | 891 | Cloudflare Computer 是一个基于 Durable Object 和 SQLite 的虚拟文件系统，旨在为 AI Agent 提供计算机环境。它提供三种执行后端：Container（FUSE 挂载，完整 Linux 环境）、Isolate shell（bash）和 Isolate JavaScript（ESM 模块）。目前处于预览阶段，适合实验和原型开发。 |
| 2 | [huangruiteng/loopx](https://github.com/huangruiteng/loopx) | Lightweight loop engineering state kernel for long... | Python | 2.1k | 326 | LoopX 是一个轻量级的 Python 状态内核，作为本地控制平面用于长期运行的 AI 代理团队。它管理持久化目标、待办事项和证据，支持跨多种代理的无缝交接与重启，确保工作可管理、可复盘。 |
| 3 | [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TencentDB Agent Memory is a team-level memory hub ... | TypeScript | 15.0k | 1.9k | 这是一个团队级的 AI Agent 内存中心，旨在减少重复工作。它将对话、文档和代码转化为四种可复用的内存资产（聊天记忆、技能、LLM-Wiki、代码图），支持跨框架共享和管理。通过积累和复用经验，帮助 Agent 避免重复造轮子，提升团队协作效率和稳定性。 |
| 4 | [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer) | Learn how to design large-scale systems. Prep for ... | Python | 361.5k | 303 | 这是一个开源项目，旨在帮助工程师学习大规模系统设计并准备技术面试。项目包含学习指南、面试题、代码示例、图表以及 Anki 闪卡（用于间隔重复记忆）。内容持续更新，欢迎社区贡献。 |
| 5 | [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Fast Rust library for PDF inspection, classificati... | Rust | 11.4k | 1.6k | 这是一个用 Rust 编写的快速 PDF 检查库。它能智能分类 PDF（文本/扫描），提取位置感知的文本并转换为 Markdown。支持多列布局、表格检测和 CID 字体，无需 OCR 即可在 200ms 内本地处理，性能高效。 |
| 6 | [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | DeepSeek-native AI coding agent for your terminal.... | Go | 31.6k | 747 | DeepSeek-Reasonix 是一个专为终端设计的 DeepSeek 原生 AI 编码代理。它采用配置和插件驱动架构，支持多模型与 MCP 服务器集成。项目核心优化了前缀缓存稳定性，旨在降低长会话的 Token 成本，并提供零依赖的单二进制分发方式。 |
| 7 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 82.0k | 226 | 该项目为 AI 编码代理提供生产级工程技能，包含 8 个斜杠命令覆盖从定义到部署的完整开发流程。它封装了资深工程师的工作流与质量门禁，支持自动生成计划并实现任务，确保 AI 在不同阶段遵循最佳实践。 |
| 8 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 267.3k | 931 | Superpowers 是一个为 AI 编码代理设计的技能框架与软件开发方法论。它通过规范确认、设计审查、实施计划制定及子代理驱动开发，实现自主化软件构建。支持 Claude、Cursor 等多种工具，强调 TDD、YAGNI 和 DRY 原则，旨在让 AI 代理高效、自主地完成复杂工程任务。 |
| 9 | [roboflow/supervision](https://github.com/roboflow/supervision) | We write your reusable computer vision tools. 💜... | Python | 48.9k | 146 | Roboflow Supervision 是一个 Python 计算机视觉工具包，提供从数据加载到实时区域计数的构建模块。它支持多种主流模型库（如 Ultralytics, Transformers），并拥有高度可定制的标注器，旨在帮助开发者专注于应用层开发。 |
| 10 | [vercel/next.js](https://github.com/vercel/next.js) | The React Framework... | JavaScript | 141.5k | 68 | Next.js 是一个基于 React 的全栈 Web 应用框架，通过集成 Rust 工具实现极速构建。它扩展了 React 特性，支持服务端渲染和静态生成，被全球大公司广泛采用，适合构建高性能、SEO 友好的现代 Web 应用。 |
| 11 | [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) | A utility-first CSS framework for rapid UI develop... | TypeScript | 96.8k | 408 | Tailwind CSS 是一个实用优先的 CSS 框架，旨在快速构建自定义用户界面。它通过提供底层工具类，让开发者无需编写复杂的 CSS 文件即可快速开发 UI。项目支持 TypeScript，拥有活跃的社区和完善的文档。 |
| 12 | [uber/ADR](https://github.com/uber/ADR) | ADR secures enterprise AI agents through observabi... | Python | 1.0k | 354 | ADR 是 Uber 开源的企业级 AI 代理安全系统，旨在保护员工和客户代理。它提供可观测性（捕获意图与工具使用）、基准测试（覆盖 300+ 任务与 133 MCP 服务器）及威胁检测（两层架构）。该项目部署于生产环境，通过观察、评估、检测和预防四大能力保障 AI 代理安全。 |
| 13 | [lyogavin/airllm](https://github.com/lyogavin/airllm) | AirLLM 70B inference with single 4GB GPU... | Jupyter Notebook | 29.1k | 833 | AirLLM 是一个 Jupyter Notebook 项目，旨在大幅降低大语言模型推理的显存占用。它通过稀疏 MoE 专家流式加载技术，无需量化或剪枝，即可在单张 4GB 显卡上运行 70B 等超大模型，甚至支持 Kimi K3 等万亿参数模型。 |

[查看完整数据](api/github/2026-08-05.json)
<!-- END GITHUB TRENDING -->




