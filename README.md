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

**最后更新**: 2026-09-25 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | The open-source app everyone uses to manage agents... | TypeScript | 85.0k | 2.1k | Paperclip 是一个开源的 AI 代理编排平台，旨在像管理公司一样管理团队中的 AI 代理。它允许用户定义业务目标、雇佣不同提供商的代理、分配任务，并通过仪表板监控工作进度、成本和治理。它提供了类似任务管理器的界面，底层支持组织架构和预算管理，适合构建自主 AI 组织。 |
| 2 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 36.9k | 83 | 这是 Anthropic 官方维护的 Claude Code 插件目录，提供高质量插件的集中管理。包含 Anthropic 内部插件及第三方合作伙伴插件，支持标准化的插件结构（如 MCP 配置、命令、技能等）。用户可通过插件系统直接安装，项目强调安全，建议用户在安装前信任插件来源。 |
| 3 | [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Hindsight: Agent Memory That Learns... | Python | 29.8k | 1.7k | Hindsight 是一个专注于让智能体“学习”而非单纯“记忆”的 Agent 记忆系统。它通过消除 RAG 和知识图谱的局限性，在 LongMemEval 基准测试中取得了最先进的性能。该系统支持长期记忆任务，已被 Fortune 500 企业和 AI 初创公司用于生产环境。 |
| 4 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 291.7k | 468 | Superpowers 是一个为编码代理设计的代理技能框架与软件开发方法论。它通过引导用户明确需求、展示设计、制定包含 TDD 和 YAGNI 原则的实现计划，并启动子代理驱动的开发流程，实现自主编码。它支持多种主流 AI 编码工具。 |
| 5 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 269.7k | 583 | 这是一个为 AI 代理（如 Claude Code）提供的实用技能集合，旨在帮助工程师进行实际编码而非“氛围编码”。这些技能设计为小型、可组合且易于适应，支持任何大模型，旨在解决开发过程中的复杂问题。 |
| 6 | [dream-num/univer](https://github.com/dream-num/univer) | The Office Harness for AI Agents — Spreadsheets, D... | TypeScript | 18.4k | 1.1k | Univer 是一个开源 SDK，旨在为 AI 代理提供统一的 Office 运行时。它支持电子表格、文档、演示文稿等多种办公场景，具备高性能、可定制和插件化架构。开发者可将其嵌入 SaaS 或 AI 应用中，通过 Facade API 在浏览器和 Node.js 环境下构建嵌入式的生产力体验。 |
| 7 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 178.3k | 189 | Anthropic 官方提供的 Claude Agent Skills 公共仓库。包含用于提升 Claude 特定任务性能的技能，涵盖创意、技术及企业工作流。每个技能以独立文件夹形式存在，包含指令和脚本。旨在展示 Claude 能力，为开发者提供创建自定义技能的灵感和参考，部分技能开源，部分为内部文档能力的源代码参考。 |
| 8 | [androoAGI/starnet](https://github.com/androoAGI/starnet) | A living pixel-art station where real AI agents do... | JavaScript | 484 | 93 | 这是一个本地优先的桌面 AI 代理管理工具，将代理可视化为像素艺术空间站。它允许用户创建多个具有独立工作区和权限的代理，利用真实模型和工具执行任务。支持连接 Telegram、Discord 等外部平台，具备 MCP 扩展能力、任务调度和语音交互功能，强调真实运行而非模拟。 |
| 9 | [derv82/wifit3](https://github.com/derv82/wifit3) | Wifite but USB-only & cross-platform.... | Python | 926 | 183 | 这是一个跨平台的 USB Wi-Fi 审计工具，支持 Linux、Windows 和 macOS。它使用纯 Python 编写，依赖 PyUSB 和 Textual，无需安装 aircrack-ng 等外部工具。功能强大，支持多网卡聚合、实时扫描、WPA/WPA2/3 抓包、PMKID 提取、WPS 暴力破解以及 WEP 攻击。适合网络安全研究人员进行无线网络渗透测试。 |
| 10 | [kelseyhightower/kubernetes-the-hard-way](https://github.com/kelseyhightower/kubernetes-the-hard-way) | Bootstrap Kubernetes the hard way. No scripts.... | - | 50.1k | 119 | 这是一个通过手动步骤引导 Kubernetes 集群的教程，旨在帮助学习者深入理解核心组件。教程要求在四台机器上手动配置 CA、TLS 证书、etcd 集群、控制平面和工作节点，不依赖自动化脚本，非常适合理解 Kubernetes 的底层原理。 |
| 11 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 57.5k | 1.2k | 这是一个全栈 AI 工程课程，旨在弥合学生使用 AI 工具与专业使用之间的差距。项目包含 523 节课程、20 个阶段和约 342 小时的学习内容，涵盖 Python、TypeScript、Rust 和 Julia。它强调实践，每节课都会产出可复用的工件，如提示词、技能、代理和 MCP 服务器。适合想要构建生产级 LLM 应用、智能代理以及掌握 MCP 协议的开发者。 |
| 12 | [shy3130/tick-stock-panel](https://github.com/shy3130/tick-stock-panel) | TSP自托管、零运维的 A 股「选股 + 监控 + 回测」量化工作台 | LLM能力驱使策略定制+个... | Python | 5.1k | 44 | 这是一个自托管的A股量化工作台，支持选股、回测和监控。它具备多数据源路由能力，支持分钟级策略执行和全时段异动监控。集成了AI对话助手，可辅助策略定制和个股分析。项目采用Docker部署，数据本地化存储，适合量化研究学习。 |
| 13 | [google/ax](https://github.com/google/ax) | Google's open agentic orchestration runtime... | Go | 11.5k | 1.4k | Google 开源的代理编排运行时，基于 Go 语言。它类似于 Kubernetes，用于大规模运行自主代理工作负载。提供 Task、Workspace、Model 三个核心原语，支持沙箱隔离、Git 预连接、LLM 配置及调试功能，旨在解决代理工作负载的状态管理、资源限制和成本控制问题。 |
| 14 | [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | A unified library of SOTA model optimization techn... | Python | 4.5k | 359 | NVIDIA Model Optimizer 是一个 Python 库，集成了量化、剪枝、NAS、蒸馏等前沿模型优化技术。它支持 Hugging Face、PyTorch 和 ONNX 模型，提供 Python API 以组合优化技术并导出检查点。该库与 NVIDIA 生态系统深度集成，旨在加速模型推理并优化部署性能。 |
| 15 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | JavaScript | 71.2k | 306 | Impeccable 是一个面向 AI 编码代理的设计语言工具。它提供 24 个命令和 61 条确定性规则，帮助 AI 生成一致、高质量的前端设计。通过记录产品真理和实时浏览器迭代，它能有效避免设计模板化，提升开发效率。 |
| 16 | [openbao/openbao](https://github.com/openbao/openbao) | OpenBao is a software solution to manage, store, a... | Go | 7.7k | 49 | OpenBao 是一个用 Go 编写的开源密钥管理解决方案，旨在安全地存储、分发和管理敏感数据（如密钥、证书和数据库凭据）。它提供安全的密钥存储（加密）、动态密钥生成（如 AWS/SQL 凭据，自动撤销）以及数据加密服务。该项目采用社区治理，专注于解决现代系统中密钥轮换、安全存储和审计日志的难题。 |

[查看完整数据](api/github/2026-09-25.json)
<!-- END GITHUB TRENDING -->




