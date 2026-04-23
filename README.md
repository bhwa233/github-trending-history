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

**最后更新**: 2026-04-23 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [huggingface/ml-intern](https://github.com/huggingface/ml-intern) | 🤗 ml-intern: an open-source ML engineer that read... | Python | 3.2k | 530 | 这是一个基于 Hugging Face 生态系统的开源 AI 助手，模拟 ML 工程师。它能自主研究论文、编写代码、训练模型并部署，支持交互式和 Headless 模式，深度集成文档、数据集及云计算资源。 |
| 2 | [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | Code search MCP for Claude Code. Make entire codeb... | TypeScript | 8.4k | 1.0k | Claude Context 是一个 MCP 插件，利用语义搜索技术将整个代码库存储在向量数据库中，为 Claude Code 等代理提供高效的代码上下文。相比全量加载，这种方式能显著降低成本，快速定位相关代码。 |
| 3 | [HKUDS/RAG-Anything](https://github.com/HKUDS/RAG-Anything) | "RAG-Anything: All-in-One RAG Framework"... | Python | 18.1k | 574 | RAG-Anything 是一个基于 LightRAG 的全功能多模态 RAG 框架，支持文本、图像、表格及公式的统一处理。它集成了 VLM 增强查询和上下文配置模块，解决了传统 RAG 处理非文本元素的难题，提供跨模态检索能力，适用于学术研究和技术文档分析。 |
| 4 | [Z4nzu/hackingtool](https://github.com/Z4nzu/hackingtool) | ALL IN ONE Hacking Tool For Hackers... | Python | 61.0k | 1.4k | 这是一个功能全面的黑客工具箱，包含185+个工具，涵盖Web、无线、云安全等20个类别。支持Python 3.10+，具备搜索、标签过滤、智能更新及一键安装功能，旨在为黑客提供便捷的渗透测试环境搭建。 |
| 5 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView: WiFi DensePose turns commodity WiFi sign... | Rust | 49.8k | 427 | RuView 是一个基于 Rust 的 WiFi 密集感知平台，利用 ESP32 传感器采集信道状态信息（CSI），无需摄像头即可实现实时人体姿态估计、生命体征监测和存在检测。它支持墙体透视、活动识别和环境映射，运行在边缘端，具备低功耗和隐私保护特性。 |
| 6 | [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) | Uncensored, open-source alternative to Higgsfield ... | JavaScript | 6.9k | 384 | 这是一个开源、无限制的 AI 图像与视频生成工作室，提供 200+ 种先进模型（如 Flux、Midjourney、Sora），无内容过滤。支持在线网页版、桌面应用及自托管，并包含自动化媒体管道技能。 |
| 7 | [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Use claude-code for free in the terminal, VSCode e... | Python | 5.5k | 2.4k | 这是一个轻量级代理工具，旨在让 Claude Code 免费使用。它通过路由 Anthropic API 调用到 NVIDIA NIM、OpenRouter、DeepSeek、LM Studio 或 llama.cpp 等多个提供商，无需 Anthropic API Key。支持终端、VSCode 扩展及 Discord 机器人，具备零成本、智能限流、思考 Token 解析等功能，是 Claude Code 的完美替代方案。 |
| 8 | [open-metadata/OpenMetadata](https://github.com/open-metadata/OpenMetadata) | OpenMetadata is a unified metadata platform for da... | TypeScript | 12.9k | 771 | OpenMetadata 是一个开源的统一元数据平台，专注于数据发现、可观测性和治理。它提供中心化存储、深度列级血缘追踪及 84+ 种数据源连接器，支持数据资产搜索与团队协作，帮助企业实现端到端的元数据管理。 |
| 9 | [microsoft/ai-agents-for-beginners](https://github.com/microsoft/ai-agents-for-beginners) | 12 Lessons to Get Started Building AI Agents... | Jupyter Notebook | 58.8k | 177 | Microsoft 提供的 AI Agent 入门课程，包含 12 个 Jupyter Notebook 教程。课程涵盖构建 AI Agent 的基础知识，支持 50+ 种语言，内容自动更新。适合零基础开发者学习如何使用生成式 AI 模型构建智能体。 |
| 10 | [PowerShell/PowerShell](https://github.com/PowerShell/PowerShell) | PowerShell for every system!... | C# | 52.8k | 76 | PowerShell 是一个跨平台的自动化和配置工具，包含命令行 shell、脚本语言和 cmdlet 框架。它专为处理结构化数据（如 JSON、XML）和 REST API 设计，支持 Windows、Linux 和 macOS。 |
| 11 | [cline/cline](https://github.com/cline/cline) | Autonomous coding agent right in your IDE, capable... | TypeScript | 60.8k | 103 | Cline 是一款运行在 IDE 中的自主 AI 编码代理，基于 Claude Sonnet 构建。它具备创建/编辑文件、执行终端命令及使用浏览器进行 Web 开发的能力。通过 MCP 协议扩展工具，并采用“人类在回路”模式，确保每一步操作都需要用户授权，安全地协助处理复杂软件任务。 |
| 12 | [microsoft/onnxruntime](https://github.com/microsoft/onnxruntime) | ONNX Runtime: cross-platform, high performance ML ... | C++ | 20.2k | 80 | ONNX Runtime 是微软开源的跨平台高性能机器学习推理和训练加速器。它支持 PyTorch、TensorFlow 等多种深度学习框架及传统机器学习库的模型。通过利用硬件加速器和图优化技术，它能显著提升推理速度和降低成本，同时支持多节点 GPU 训练，是构建高效 AI 应用的理想选择。 |
| 13 | [mksglu/context-mode](https://github.com/mksglu/context-mode) | Context window optimization for AI coding agents. ... | TypeScript | 9.4k | 302 | 这是一个针对 AI 编码代理的上下文窗口优化 MCP 服务器。它通过沙箱工具输出（98% 减少）、SQLite 会话跟踪（FTS5+BM25 索引）以及“以代码思考”模式（LLM 编写脚本代替读取文件），有效解决了上下文溢出和会话丢失问题，支持 12 个平台。 |
| 14 | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | Marketing skills for Claude Code and AI agents. CR... | JavaScript | 23.8k | 491 | 这是一个专为 Claude Code 和 AI 代理设计的营销技能集合，涵盖 CRO、文案写作、SEO、分析和增长工程。通过 Markdown 文件定义专业工作流，帮助技术型营销人员和创始人利用 AI 代理提升营销效率，支持 Cursor、Windsurf 等多种主流 AI 编辑器。 |
| 15 | [chiphuyen/aie-book](https://github.com/chiphuyen/aie-book) | [WIP] Resources for AI engineers. Also contains su... | Jupyter Notebook | 15.2k | 214 | 该项目是 Chip Huyen 所著《AI Engineering》的配套仓库，包含 Jupyter Notebook 格式的学习笔记、案例研究及实用工具。内容涵盖基础模型适配、RAG、提示词工程、代理构建及微调等 AI 工程核心主题，旨在为 AI 工程师提供从理论到实践的完整资源。 |
| 16 | [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | A curated collection of 1000+ agent skills from of... | - | 18.0k | 176 | 这是一个精选的 Agent Skills 集合，包含 1000+ 个由 Anthropic、Google、Vercel 等官方团队及社区创建的真实技能。项目专注于人工挑选而非 AI 生成，兼容 Claude Code、Cursor、GitHub Copilot 等多种主流 AI 编码工具，旨在提升开发效率。 |

[查看完整数据](api/github/2026-04-23.json)
<!-- END GITHUB TRENDING -->




