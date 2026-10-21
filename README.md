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

**最后更新**: 2026-10-20 | **成功**: 14 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | The job search that runs on your machine. AI job a... | Python | 60.7k | 3.9k | 这是一个基于 Claude Code 的本地 AI 求职自动化框架。它帮助用户评估职位发布、定制简历、撰写求职信并准备面试。作者利用该工具成功转型为 AI 工程师。项目支持丹麦市场，但工作流设计通用，易于适配其他地区。 |
| 2 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | A coding-agent skill for multi-phase security audi... | JavaScript | 34.3k | 1.7k | 这是一个由 Cloudflare 开发的编码代理技能，用于自动化多阶段安全审计。它通过六个阶段协调代理进行漏洞发现，支持独立验证和结构化输出，旨在生成可验证的机器可读安全报告。 |
| 3 | [stablyai/orca](https://github.com/stablyai/orca) | Orca is the place for working with a fleet of agen... | TypeScript | 99.8k | 1.6k | Orca 是一款 AI 编排器，旨在帮助开发者高效管理多个编码代理。它支持在桌面、移动端和远程运行时运行 Codex、ClaudeCode 等。核心功能包括并行工作树、终端分割、设计模式、GitHub/Linear 集成以及 SSH 远程执行。用户可在统一界面中监控、比较并合并多个 AI 代理的代码结果，显著提升开发效率。 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 169.7k | 1.2k | Ponytail 是一个让 AI 代理像“懒散资深开发”一样思考的技能。它通过重用现有代码和只编写必要逻辑来生成更简洁、更安全的代码。相比之前版本，代码量减少 53%，安全性提升，且能显著降低成本和延迟。它不仅优化代码生成，还提供代码审查功能，确保不遗漏关键的安全性和错误处理。 |
| 5 | [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | The most powerful and modular diffusion model GUI,... | Python | 140.8k | 1.2k | 处理失败 |
| 6 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The original agent harness. Deploy intelligent ... | TypeScript | 77.9k | 684 | Ruflo 是一个专为 Claude Code 和 Codex 打造的智能体执行框架。它支持部署多智能体集群、协调自主工作流，具备自适应记忆、自学习能力、联邦通信及向量 RAG 集成。通过插件或 MCP 协议集成，帮助开发者构建复杂的对话式 AI 系统。 |
| 7 | [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Turn any codebase, with its docs, SQL schemas, con... | Python | 130.3k | 802 | Graphify 是一个将代码库、文档等转换为可查询知识图谱的工具。它利用本地确定性 AST 解析（Tree-sitter）构建图结构，无需向量存储，为 AI 助手提供代码理解能力，通过解释提取和推断的连接来节省 token 并提升开发效率。 |
| 8 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | The open source coding agent.... | TypeScript | 219.0k | 1.2k | OpenCode 是一个开源的 AI 编码代理，提供命令行和桌面应用。它内置了两个代理：build（默认，用于开发）和 plan（只读，用于分析）。支持多种安装方式，覆盖 macOS、Windows 和 Linux 平台。 |
| 9 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 162.4k | 562 | 这是一个提供完整 AI 代理机构的 GitHub 项目。它包含多个具有独特个性和专业能力的 AI 代理（如前端开发、Reddit 社区专家等）。用户可以通过原生桌面应用或 Shell 脚本，将这些代理一键安装到 Claude Code、Cursor 等主流 AI 编码工具中，提升开发效率。 |
| 10 | [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Compress tool outputs, logs, files, and RAG chunks... | Python | 76.8k | 549 | Headroom 是一个本地运行的 AI 输入压缩工具，旨在减少 LLM 的 token 使用量。它支持库、代理和 MCP 服务器等多种集成方式，能够智能压缩代码、JSON 和文本，在保持答案不变的前提下，显著降低编码代理和 JSON 处理的 token 消耗，保护数据隐私。 |
| 11 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intend... | Python | 30.8k | 267 | 这是一个开源插件仓库，旨在将 Claude 转变为特定角色的专家。它包含生产力、销售、客户支持等领域的插件，支持与多种工具集成。用户可以自定义这些插件以适应公司的工作流程和术语，从而提高团队协作效率和产出质量。 |
| 12 | [wshobson/agents](https://github.com/wshobson/agents) | Multi-harness agentic plugin marketplace for Claud... | Python | 41.3k | 93 | 这是一个跨平台的 AI 编码工具插件市场，支持 Claude Code、Cursor、Copilot 等多种主流工具。项目包含丰富的插件、代理和技能库（94个插件，202个代理），通过 Markdown 源码实现组件的统一管理和多工具适配。 |
| 13 | [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | AAS Core is the local, agent-first control plane f... | Python | 48.1k | 83 | Agentic Awesome Skills 是一个基于 Python 的本地代理控制平面，包含 2700+ 可安装的 SKILL.md 播放书。它帮助 Codex 或 Claude 搜索本地目录，进行代理选择、堆栈验证和规划预览。项目提供 CLI、本地 MCP 和 Workbench，支持可重用指令的发现与管理，旨在为 AI 代理提供完整的技能库和规划能力。 |
| 14 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 42.4k | 733 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融数据的高噪声特性设计。它采用两阶段框架，利用专用分词器将 OHLCV 数据量化为离散标记，并通过自回归 Transformer 进行预训练。该模型支持多种量化任务，已获 AAAI 2026 接收，提供 mini、small、base 等不同规模模型。 |
| 15 | [vllm-project/vllm](https://github.com/vllm-project/vllm) | A high-throughput and memory-efficient inference a... | Python | 94.4k | 128 | vLLM 是一个高性能且内存高效的 LLM 推理和服务引擎。它采用 PagedAttention 技术实现高效的 KV 内存管理，支持连续批处理和 FlashAttention 等优化内核，提供极高的吞吐量。同时支持多种量化方法和 OpenAI 兼容 API，易于部署。 |

[查看完整数据](api/github/2026-10-20.json)
<!-- END GITHUB TRENDING -->




