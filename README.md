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

**最后更新**: 2026-08-12 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 29 editorial diagram types for Claude Code. Self-c... | HTML | 10.2k | 3.0k | 这是一个专为 Claude Code 设计的 27 种编辑类图表库。项目提供自包含的 HTML + SVG，包含极简、深色和全编辑三种风格。支持品牌定制（读取网站配色）及从 Mermaid 导入，旨在生成高质量、非通用的图表，无需 Figma 或复杂构建步骤。 |
| 2 | [macro-inc/macro](https://github.com/macro-inc/macro) | Macro is a unified workspace for teams: email, cha... | Rust | 1.8k | 325 | Macro 是一个为团队设计的统一工作空间，集成了邮件、消息、文档、任务、CRM 和 AI 代理。它通过共享的团队级内存和 @ 链接将所有工具连接成一个单一系统，旨在成为团队的“操作系统”。项目采用 Rust 和 SolidJS 构建，强调速度和可靠性，采用模块化“块”设计，支持实时协作和双向图存储。 |
| 3 | [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | Graph-Native Infrastructure for Context and Accoun... | Python | 5.7k | 834 | 这是一个面向 AI 代理的原生图基础设施，旨在解决 AI 决策缺乏可解释性和可审计性的问题。它提供决策智能、确定性推理和端到端可追溯性，支持 RDF 和 LPG 图存储。专为金融、医疗等高利害受监管领域设计，确保数据主权和合规性，是 AI 平台团队和合规团队的理想选择。 |
| 4 | [stablyai/orca](https://github.com/stablyai/orca) | Orca is the ADE for working with a fleet of parall... | TypeScript | 43.8k | 1.2k | Orca 是一个用于管理并行 AI 编码代理的 ADE。它允许用户同时运行 Codex、ClaudeCode 等多个代理，每个代理拥有独立的工作树。支持移动端监控、WebGL 终端、设计模式、Git 集成及 SSH 远程执行。旨在通过并行化和集中管理加速开发流程。 |
| 5 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 144.5k | 2.0k | 这是一个包含多种专业AI代理的集合，旨在为用户提供全方位的AI助手团队。项目支持通过原生应用或脚本将各类专家代理（如前端开发、Reddit运营等）安装到Claude Code、Cursor等主流AI编程工具中。每个代理都具备独特的个性、专业流程和可交付成果，帮助用户提升工作效率。 |
| 6 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 36.9k | 277 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融数据的高噪声特性设计。它采用两阶段框架，通过专用分词器将 OHLCV 数据量化为离散标记，再利用自回归 Transformer 进行预训练。项目提供多种模型规模，支持量化预测，已被 AAAI 2026 录用。 |
| 7 | [NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) | 小红书笔记 | 评论爬虫、抖音视频 | 评论爬虫、快手视频 | 评论爬虫、B 站视频 ｜ 评论爬虫、... | Python | 62.0k | 236 | MediaCrawler 是一款功能强大的多平台自媒体数据采集工具，支持小红书、抖音、B站等主流平台。项目基于 Playwright 浏览器自动化框架，利用登录态缓存和 CDP 模式，无需复杂 JS 逆向即可实现搜索、评论及主页信息抓取。项目还提供 Pro 版本，支持断点续爬与 Agent 功能，适合学习爬虫架构与全栈开发。 |
| 8 | [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | AI turns documents or topics into real, native Pow... | Python | 45.5k | 364 | 这是一个基于 Python 的开源项目，利用 AI（如 Kimi K3）将文档、网页或主题自动转换为原生可编辑的 PowerPoint 演示文稿。它支持生成原生形状、动画、图表、表格及音频旁白，并允许使用自定义模板。项目旨在通过 AI 大幅提升 PPT 制作效率，降低内容创作门槛。 |
| 9 | [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | RAGFlow is a leading open-source Retrieval-Augment... | Go | 87.5k | 182 | RAGFlow 是一个领先的开源 RAG 引擎，融合了前沿 RAG 与 Agent 能力，为 LLMs 提供卓越上下文层。它拥有收敛的上下文引擎和预构建 Agent 模板，支持多模态模型、多渠道接入及复杂文档解析，能将复杂数据转化为高保真、生产就绪的 AI 系统，适用于各类企业级应用。 |
| 10 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | The open-source app everyone uses to manage agents... | TypeScript | 77.7k | 573 | Paperclip 是一个开源的 AI 代理编排平台，旨在帮助团队管理和协调多个 AI 代理。它提供类似任务管理器的界面，允许用户定义业务目标、分配角色（如 CEO、CTO）、设置预算并审计工作。基于 Node.js 和 React 构建，支持 24/7 自主运行，适合构建自主 AI 公司或管理复杂的多代理协作流程。 |
| 11 | [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) | ... | Rust | 807 | 370 | Switchyard 是一个用 Rust 编写的 LLM 流量代理与库。它支持 OpenAI、Anthropic 和 OpenAI Responses 格式间的协议转换，允许编码代理与开源模型（如 vLLM、NVIDIA NIM）通信。项目提供多后端路由、信号驱动路由及 Prometheus 指标，但当前处于 Pre-alpha 阶段，不建议用于生产环境。 |
| 12 | [ZuodaoTech/everyone-can-use-english](https://github.com/ZuodaoTech/everyone-can-use-english) | 人人都能用英语... | TypeScript | 36.1k | 53 | 这是一个名为 Enjoy 的 AI 英语学习项目，旨在帮助用户提升英语能力。项目提供网页版、浏览器插件（支持 YouTube 和 Netflix）以及即将推出的桌面版。它结合了 AI 辅助教学和经典英语学习教材，提供全方位的英语学习体验。 |
| 13 | [smicallef/spiderfoot](https://github.com/smicallef/spiderfoot) | SpiderFoot automates OSINT for threat intelligence... | Python | 20.3k | 40 | SpiderFoot 是一个开源 OSINT 自动化工具，利用 Python 集成数百个外部数据源（如 Abuse.ch、AlienVault、Archive.org 等）。它自动收集目标（域名、IP、社交媒体）的情报，用于威胁情报分析、攻击面映射及安全风险评估。 |
| 14 | [localsend/localsend](https://github.com/localsend/localsend) | An open-source cross-platform alternative to AirDr... | Dart | 87.8k | 284 | LocalSend 是一款开源免费的跨平台文件传输工具，旨在替代 AirDrop。它利用本地网络和 REST API 进行设备间通信，无需互联网连接或第三方服务器，支持 Android、iOS、macOS、Windows 和 Linux 等多平台，确保数据安全快速传输。 |
| 15 | [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | Official Python inference and LoRA trainer package... | Python | 8.7k | 40 | 这是 LTX-2 音频-视频生成模型的官方 Python 推理和 LoRA 训练包。LTX-2 是首个基于 DiT 的音频-视频基础模型，支持同步音频与视频生成、高保真输出及多种性能模式。项目提供了快速安装和模型下载指南，支持 Linux + CUDA 环境下的高效推理，适用于生产级 AI 视频内容创作。 |
| 16 | [embabel/embabel-agent](https://github.com/embabel/embabel-agent) | Agent framework for the JVM. Pronounced Em-BAY-bel... | Kotlin | 4.2k | 29 | Embabel 是一个由 Spring 创始人开发的 JVM 智能代理框架。它将 LLM 提示与代码和领域模型无缝结合，支持智能寻路和动态规划（OODA 循环）。框架超越了传统的有限状态机，通过非 LLM 算法实现复杂规划，具备强大的可扩展性和类型安全性，适用于构建混合 AI 与代码的智能应用。 |
| 17 | [cactus-compute/needle](https://github.com/cactus-compute/needle) | 14MB foundation model for tiny devices; phones, we... | Python | 4.2k | 346 | Needle 2 是一款专为边缘设备设计的轻量级 45M 参数模型，仅 14MB 大小。基于 Simple Attention Network 架构，支持工具调用、设备使用及结构化提取。提供 Python 推理与微调接口，具备置信度门控和内存管理功能，适合手机、可穿戴设备等资源受限环境。 |

[查看完整数据](api/github/2026-08-12.json)
<!-- END GITHUB TRENDING -->




