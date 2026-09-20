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

**最后更新**: 2026-09-19 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | A coding-agent skill for multi-phase security audi... | JavaScript | 16.3k | 3.2k | 这是一个将编码代理转化为安全审计员的技能，通过六个阶段（侦察、狩猎、验证等）执行多阶段安全审计。它支持独立验证和机器可读的发现结果，能够自动生成结构化报告，适用于自动化漏洞发现与代码库安全评估。 |
| 2 | [trycua/cua](https://github.com/trycua/cua) | Scale computer-use 2.0 with open-source drivers, c... | HTML | 24.4k | 859 | Cua 是一个开源项目，旨在为 AI 代理提供计算机使用能力。它提供云端隔离桌面、本地 macOS 虚拟机、专用决策模型及基准测试工具。通过 Sandbox SDK，用户可运行命令、截图并与应用交互，支持计算机使用 2.0（代码、API、GUI 混合操作），帮助评估和训练计算机使用代理。 |
| 3 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 97.0k | 556 | 该项目为 AI 编码代理提供生产级工程技能，包含 9 个斜杠命令覆盖从需求定义到生产部署的完整开发生命周期。它封装了资深工程师的最佳实践和工作流程，确保 AI 代理遵循一致的质量标准和规范，支持自动生成计划、测试驱动开发及代码审查等功能。 |
| 4 | [coder/coder](https://github.com/coder/coder) | Secure environments for developers and their agent... | Go | 15.6k | 402 | Coder 是一个自托管的云开发环境和 AI 编码代理平台。它利用 Terraform 定义工作区，通过安全的 Wireguard 隧道连接，并支持自动关闭空闲资源以节省成本。平台允许在基础设施上运行原生 AI 代理，支持多种 LLM 模型，且无需将 API 密钥暴露在工作区中。 |
| 5 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | TypeScript | 146.7k | 483 | 这是一个基于 TypeScript 的终端智能编码助手，通过自然语言理解代码库，帮助开发者执行常规任务、解释代码及处理 Git 工作流。支持多种安装方式，包含插件扩展功能，旨在提升开发效率。 |
| 6 | [Open-Dev-Society/OpenStock](https://github.com/Open-Dev-Society/OpenStock) | OpenStock is an open-source alternative to expensi... | TypeScript | 16.0k | 472 | OpenStock 是一个开源的股票市场应用，旨在替代昂贵的付费平台。它提供实时价格追踪、个性化警报和详细的公司洞察。项目基于 Next.js 和 TypeScript 构建，承诺永久免费且无付费墙，适合个人投资者和开发者使用。 |
| 7 | [higgsfield-ai/higgsfield](https://github.com/higgsfield-ai/higgsfield) | Fault-tolerant, highly scalable GPU orchestration,... | Jupyter Notebook | 5.0k | 196 | Higgsfield 是一个开源的容错、高度可扩展的 GPU 编排和机器学习框架，专为训练数十亿至数万亿参数的大规模模型（如 LLMs）设计。它支持 ZeRO-3 DeepSpeed 和 PyTorch FSDP，提供资源分配、任务队列管理及 CI/CD 集成，简化分布式训练流程。 |
| 8 | [docling-project/docling](https://github.com/docling-project/docling) | Get your documents ready for gen AI... | Python | 67.0k | 129 | Docling 是一个专为生成式 AI 设计的文档处理库。它支持 PDF、DOCX、图片、音频、视频等多种格式的高级解析，具备精准的布局理解、表格提取和 OCR 能力。项目提供统一的文档表示格式，支持本地执行，并深度集成 LangChain、LlamaIndex 等主流 AI 框架，是构建 RAG 应用和智能文档分析系统的理想工具。 |
| 9 | [cloudflare/quiche](https://github.com/cloudflare/quiche) | 🥧 Savoury implementation of the QUIC transport pr... | Rust | 12.0k | 31 | quiche 是 Rust 编写的 QUIC 传输协议和 HTTP/3 的实现。它提供低级 API 用于处理数据包和连接状态，需应用层提供 I/O 和事件循环。被 Cloudflare、Android 和 curl 等广泛使用，主要用于构建高性能的网络应用。 |
| 10 | [asciimoo/hister](https://github.com/asciimoo/hister) | Your own search engine... | Go | 5.2k | 420 | Hister 是一个基于 Go 语言开发的私有搜索引擎，专注于本地化数据索引。它支持通过浏览器扩展自动抓取网页内容，也能索引本地文件和历史记录。提供 Web、终端及 MCP 接口，具备全文检索、语义搜索及强大的查询语法，强调隐私保护，适合个人构建本地知识库。 |
| 11 | [ruanyf/weekly](https://github.com/ruanyf/weekly) | 科技爱好者周刊，每周五发布... | - | 103.1k | 98 | 这是一个由阮一峰运营的科技爱好者周刊项目，每周五发布。内容涵盖AI、编程、创业、硬件等领域的精选文章、软件和资源。项目包含讨论区，其中“谁在招人”板块提供大量程序员招聘信息，是科技从业者和爱好者获取行业动态、学习新技术及寻找工作的重要渠道。 |
| 12 | [ZuodaoTech/everyone-can-use-english](https://github.com/ZuodaoTech/everyone-can-use-english) | 人人都能用英语... | TypeScript | 37.8k | 48 | 这是一个名为 'Enjoy' 的 AI 英语学习助手项目。它提供网页版、浏览器插件（支持 YouTube/Netflix）以及即将推出的桌面版。项目旨在利用 AI 作为外语老师，结合《人人都能用英语》的训练方法，帮助用户提升英语听说读写能力。 |
| 13 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intend... | Python | 25.1k | 281 | 这是一个开源插件仓库，旨在将 Claude 转变为特定角色（如销售、产品经理）的专家。它包含 11 个预构建插件，支持与 Slack、Notion、Jira 等主流工具集成。用户可自定义插件以适应公司的工作流程和术语，从而提升团队协作效率和一致性。 |
| 14 | [cactus-compute/needle](https://github.com/cactus-compute/needle) | Automation foundation model for tiny devices: 2-bi... | Python | 11.6k | 234 | Needle 是一个面向微设备的自动化基础模型，仅 8-29 MB。它支持工具调用、结构化提取和文本嵌入。基于 Laddered Simple Attention Network 架构，它在手机、可穿戴设备及微控制器等边缘设备上高效运行，提供高精度的函数调用和结构化数据提取能力。 |
| 15 | [yynxxxxx/Codex-X](https://github.com/yynxxxxx/Codex-X) | OpenAI Codex 桌面端/CLI 的可视化管理工具，具有Provider/API 切换、会话... | Rust | 3.4k | 32 | Codex-X 是一款基于 Rust 的跨平台桌面工具，专为 OpenAI Codex 桌面端和 CLI 设计。它提供可视化的提示词注入、多 Provider/API 管理、会话同步、Skills/MCP 管理、配置查看及 Token 用量统计功能，帮助用户集中管理配置，无需手动编辑文件。 |

[查看完整数据](api/github/2026-09-19.json)
<!-- END GITHUB TRENDING -->




