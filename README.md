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

**最后更新**: 2026-10-21 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | A coding-agent skill for multi-phase security audi... | JavaScript | 36.5k | 2.0k | 这是一个将编码代理转化为安全审计员的技能，通过六个阶段（侦察、狩猎、验证、输出、独立验证、报告）执行结构化审计。支持独立验证和机器可读发现，是 Cloudflare 漏洞发现工具的起点。 |
| 2 | [vllm-project/vllm](https://github.com/vllm-project/vllm) | A high-throughput and memory-efficient inference a... | Python | 94.9k | 441 | vLLM 是一个高性能且内存高效的 LLM 推理与服务引擎。它通过 PagedAttention 和连续批处理技术实现高吞吐量，支持多种量化格式及多 GPU 部署。提供 OpenAI 兼容 API，易于集成 Hugging Face 模型，适合大规模生产环境部署。 |
| 3 | [stablyai/orca](https://github.com/stablyai/orca) | Orca is the place for working with a fleet of agen... | TypeScript | 101.3k | 1.5k | Orca 是一个 AI 编排平台，旨在帮助开发者高效管理多个 AI 编码代理。它支持在隔离的 Git 工作树中并行运行 Claude、Codex 等代理，提供移动端伴侣、终端分割、设计模式抓取 UI 元素以及与 GitHub/Linear 的原生集成。用户可以通过 SSH 运行代理，并使用 Orca CLI 脚本化工作流，实现多代理协作与代码审查。 |
| 4 | [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Compress tool outputs, logs, files, and RAG chunks... | Python | 77.3k | 474 | Headroom 是一个本地运行的 AI 输入压缩工具，支持库、代理和 MCP 服务器模式。它能在 LLM 处理前压缩工具输出、日志及 RAG 块，显著减少 Token 消耗（JSON 减少 60-95%），同时保持答案准确。支持跨代理记忆与隐私保护。 |
| 5 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 171.7k | 2.1k | Ponytail 是一个让 AI 代理像“懒惰的高级开发人员”一样思考的工具。它通过重用现有代码、避免不必要的复杂性来生成更少、更安全的代码。版本 5 在代码量减少 53% 的同时，将高风险逻辑的测试覆盖率从 68% 提升至 98%，显著降低了成本和延迟。 |
| 6 | [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | The most powerful and modular diffusion model GUI,... | Python | 141.5k | 939 | ComfyUI 是一个强大的扩散模型 GUI 和后端，采用节点/图形界面。它支持本地高效推理，兼容多种硬件和操作系统，允许用户通过可视化节点构建图像、视频、音频等生成流程，无需编写代码，是视觉专业人士的强大工具。 |
| 7 | [supabase/supabase](https://github.com/supabase/supabase) | The Postgres development platform. Supabase gives ... | TypeScript | 113.0k | 504 | Supabase 是一个基于 Postgres 的开发平台，旨在使用企业级开源工具复刻 Firebase 的功能。它提供托管数据库、身份验证、自动生成的 REST/GraphQL API、实时订阅、文件存储、函数及 AI 向量工具包，帮助开发者快速构建 Web、移动和 AI 应用。 |
| 8 | [twentyhq/twenty](https://github.com/twentyhq/twenty) | The open alternative to Salesforce, designed for A... | TypeScript | 59.2k | 112 | twentyhq/twenty 是一款开源的 AI 原生 CRM，专为技术团队打造。它允许用户通过代码定义对象、视图和工作流，像管理其他软件栈一样构建和版本控制 CRM。支持云端部署和自托管，提供灵活的定制能力。 |
| 9 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 42.8k | 575 | Kronos 是首个开源的金融蜡烛图基础模型，采用两阶段框架：先用专用分词器量化 OHLCV 数据，再利用自回归 Transformer 进行预训练。该模型专为处理金融数据的高噪声特性设计，支持多种量化任务。 |
| 10 | [strelov1/freehire](https://github.com/strelov1/freehire) | freehire — the open-source search engine for job s... | Go | 2.4k | 360 | freehire 是一个开源的求职搜索引擎，直接从 Workday、Greenhouse 等 ATS 爬取职位，去重后提供筛选搜索。它还提供简历构建、申请跟踪和 AI 匹配功能，支持自托管和 API 调用。 |
| 11 | [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | Solution for long term memory for agent coding CLI... | Rust | 12.3k | 286 | 这是一个为AI编码助手提供长期记忆的Rust项目。它允许用户在Claude Code、Codex、Cursor等多种AI工具之间无缝切换，共享同一个记忆库。项目支持跨项目、跨机器的记忆存储，能够携带会话细节而非仅摘要，帮助开发者在不同工具间交接任务，无需重复解释架构和上下文。 |
| 12 | [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Turn any codebase, with its docs, SQL schemas, con... | Python | 131.7k | 1.4k | Graphify 是一个将代码库、文档和配置转换为可查询知识图谱的工具。它利用本地确定性 AST 解析（tree-sitter）生成图结构，无需向量存储，确保数据不出本地。支持集成到 Claude Code、Cursor 等 AI 助手中，通过可视化图谱辅助代码理解和维护。Graphify Cloud 提供跨仓库的持续监控和正式验证。 |

[查看完整数据](api/github/2026-10-21.json)
<!-- END GITHUB TRENDING -->




