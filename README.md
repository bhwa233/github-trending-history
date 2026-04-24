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

**最后更新**: 2026-04-24 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Use claude-code for free in the terminal, VSCode e... | Python | 8.8k | 2.6k | 这是一个轻量级代理，允许免费使用 Claude Code CLI 和 VSCode 扩展。它将 Anthropic API 调用路由到 NVIDIA NIM、OpenRouter、DeepSeek、LM Studio 或 llama.cpp 等多种免费或本地提供商，无需 Anthropic API 密钥，支持多种模型映射和工具解析。 |
| 2 | [huggingface/ml-intern](https://github.com/huggingface/ml-intern) | 🤗 ml-intern: an open-source ML engineer that read... | Python | 5.3k | 3.0k | 这是一个基于 Hugging Face 生态系统的开源 AI 助手，旨在充当一名自主的 ML 工程师。它能利用 Anthropic、Hugging Face 和 GitHub 的 API，自主研究论文、训练模型并部署代码。支持交互式和 Headless 模式，适合自动化机器学习开发流程。 |
| 3 | [google/osv-scanner](https://github.com/google/osv-scanner) | Vulnerability scanner written in Go which uses the... | Go | 9.5k | 147 | OSV-Scanner 是一个用 Go 编写的官方漏洞扫描工具，利用 OSV 数据库检测项目依赖中的安全漏洞。它支持多种语言、包管理器、操作系统及容器镜像扫描，并提供基于修复策略的升级建议。底层数据库全面且权威，能精准匹配受影响版本，帮助开发者快速解决安全问题。 |
| 4 | [Z4nzu/hackingtool](https://github.com/Z4nzu/hackingtool) | ALL IN ONE Hacking Tool For Hackers... | Python | 62.3k | 1.4k | 这是一个面向黑客的 All-in-One 渗透测试工具集，基于 Python 3.10+ 开发。项目包含 185+ 种安全工具，涵盖信息收集、Web 攻击、无线攻击、云安全等 20 个分类。支持交互式菜单搜索、标签过滤、批量安装及智能更新，旨在为安全研究人员提供便捷的一站式渗透测试环境搭建方案。 |
| 5 | [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | Code search MCP for Claude Code. Make entire codeb... | TypeScript | 9.0k | 706 | 这是一个为 Claude Code 提供语义代码搜索的 MCP 插件，旨在将整个代码库作为 AI Agent 的上下文。它利用向量数据库高效存储代码，仅检索相关片段，从而大幅降低大代码库的上下文加载成本，提升编码效率。 |
| 6 | [open-metadata/OpenMetadata](https://github.com/open-metadata/OpenMetadata) | OpenMetadata is a unified metadata platform for da... | TypeScript | 13.3k | 530 | OpenMetadata 是一个统一的元数据平台，专注于数据发现、可观测性和治理。它通过中心化存储库提供深度列级血缘追踪，支持 84+ 数据源连接器，并允许通过 API 和 Schema 进行无缝集成与协作，帮助企业解锁数据资产价值。 |
| 7 | [PostHog/posthog](https://github.com/PostHog/posthog) | 🦔 PostHog is an all-in-one developer platform for... | Python | 33.1k | 90 | PostHog 是一个开源的全栈开发者平台，集成了产品分析、Web 分析、会话回放、错误追踪、功能标志、A/B 实验以及数据仓库等功能。它支持自托管，提供免费层级，并包含 LLM 分析和工作流自动化等现代功能，帮助开发者调试代码、快速发布功能并集中管理数据。 |
| 8 | [dani-garcia/vaultwarden](https://github.com/dani-garcia/vaultwarden) | Unofficial Bitwarden compatible server written in ... | Rust | 59.2k | 252 | 这是一个用 Rust 编写的 Bitwarden 兼容服务器，专为自托管设计。它提供了几乎完整的 Bitwarden 客户端 API 实现，包括个人保险库、多因素认证、组织管理和紧急访问等功能。相比官方服务，它更轻量且资源占用更低，支持 Docker 部署，是自建密码管理服务的理想选择。 |
| 9 | [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) | Uncensored, open-source alternative to Higgsfield ... | JavaScript | 7.7k | 847 | 这是一个开源的、无审查的 AI 图像和视频生成工作室，替代 Higgsfield AI 等商业产品。它支持 200+ 模型，包括 Flux、Midjourney 和 Happy Horse 1.0。提供在线托管、桌面应用以及自动化媒体管道工具，完全免费且无订阅费用，支持自托管。 |
| 10 | [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Master programming by recreating your favorite tec... | Markdown | 494.7k | 1.1k | 这是一个通过从头开始重建各种技术来学习编程的项目。它包含了从3D渲染器、AI模型、区块链到操作系统、Web服务器等众多领域的教程。项目旨在帮助开发者通过实践深入理解底层原理，适合想要提升编程深度和系统设计能力的开发者。 |
| 11 | [deepseek-ai/DeepEP](https://github.com/deepseek-ai/DeepEP) | DeepEP: an efficient expert-parallel communication... | Cuda | 9.3k | 29 | DeepEP 是一个专为 MoE 模型和专家并行设计的通信库。它提供高性能的 all-to-all GPU 内核，支持 FP8 和低精度操作。针对 DeepSeek-V3 的组限制门控算法进行了优化，支持 NVLink 到 RDMA 的非对称带宽转发。包含低延迟内核用于推理解码，并支持通信计算重叠。性能测试显示在 H800 上吞吐量极高，近期优化后性能提升 30%。 |
| 12 | [microsoft/typescript-go](https://github.com/microsoft/typescript-go) | Staging repo for development of native port of Typ... | Go | 25.0k | 22 | 这是一个 TypeScript 的 Go 语言原生移植版本的开发阶段仓库。它实现了类型检查、解析、命令行工具等功能，目前处于早期开发阶段，部分功能（如 JS 推断、声明发出）仍在进行中，尚未达到完全功能对齐。 |

[查看完整数据](api/github/2026-04-24.json)
<!-- END GITHUB TRENDING -->




