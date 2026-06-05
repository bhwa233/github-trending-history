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

**最后更新**: 2026-06-04 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | Compress tool outputs, logs, files, and RAG chunks... | Python | 12.4k | 3.1k | Headroom 是一个专为 AI 代理设计的上下文压缩层，可在 LLM 接收前压缩工具输出、日志、文件及 RAG 块。它通过 6 种算法将 token 减少 60-95%，保持答案准确。支持 Python/TS 库、代理和 MCP 服务器，具备本地优先、可逆压缩及跨代理记忆功能。 |
| 2 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 180.9k | 1.9k | 这是一个具备内置学习循环的自我改进型 AI 代理，能从经验中创建并优化技能，建立跨会话的用户模型。它支持多平台接入（Telegram、CLI 等），允许自由切换底层模型，并具备自动化任务、子代理并行处理及多种部署方式，旨在成为伴随用户成长的智能助手。 |
| 3 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 207.2k | 1.8k | ECC 是一个跨多个 AI 代理工具（如 Claude Code、Cursor、Copilot）的性能优化系统。它提供了一套完整的解决方案，包括技能管理、记忆持久化、安全扫描和并行化等。该项目旨在通过持续学习和研究优先的开发方法，提升代理工具的效率，并支持 v2.0.0-rc.1 版本的新仪表板 GUI。 |
| 4 | [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | Turn any PDF or image document into structured dat... | Python | 79.8k | 141 | PaddleOCR 是一个强大的轻量级 OCR 工具包，支持 100+ 种语言。它可以将 PDF 和图像转换为结构化、LLM 就绪的数据（JSON/Markdown）。核心功能包括 SOTA 文档 VLM（PaddleOCR-VL-1.6）和结构感知转换（PP-StructureV3），在文档解析、表格识别和复杂元素处理方面表现卓越，适合构建智能 RAG 和 Agentic 应用。 |
| 5 | [github/spec-kit](https://github.com/github/spec-kit) | 💫 Toolkit to help you get started with Spec-Drive... | Python | 108.6k | 321 | 这是一个 Python 工具包，旨在帮助开发者进行规范驱动开发。它将产品规范转化为可执行的代码，直接生成工作实现，而非仅作为指导。通过支持 AI 编码代理集成，它帮助开发者专注于产品场景和可预测结果，从而更快地构建高质量软件。 |
| 6 | [NVIDIA/cosmos](https://github.com/NVIDIA/cosmos) | NVIDIA Cosmos is an open platform of world models,... | Jupyter Notebook | 9.0k | 133 | NVIDIA Cosmos 是一个开放的世界模型平台，旨在构建物理 AI。其核心是 Cosmos 3，采用统一的多模态架构，支持语言、图像、视频、音频和动作序列的处理与生成。平台提供 Reasoner（理解）和 Generator（生成）两种运行时，具备世界理解、模拟、预测及合成数据生成能力，适用于机器人、自动驾驶等领域。 |
| 7 | [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | An Open Source implementation of Notebook LM with ... | TypeScript | 25.0k | 212 | 这是一个开源的 Notebook LM 替代品，支持私有部署和多模型。它允许用户上传 PDF、视频、音频等多种内容，利用 OpenAI、Anthropic、Ollama 等多种 AI 模型进行智能搜索、对话和生成专业播客。项目强调数据隐私和完全控制，支持多语言界面，是 Google Notebook LM 的强大开源替代方案。 |
| 8 | [Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | Talk to any LLM with hands-free voice interaction,... | Python | 9.6k | 581 | Open-LLM-VTuber 是一个本地运行的语音交互 AI 伴侣，支持免提对话、语音打断和 Live2D 动态形象。支持 Windows、macOS 和 Linux，提供 Web 和桌面客户端模式（含透明背景）。目前 v2.0 正在开发，v1 版本持续维护。 |
| 9 | [jwasham/coding-interview-university](https://github.com/jwasham/coding-interview-university) | A complete computer science study plan to become a... | - | 349.7k | 632 | 这是一个旨在帮助求职者通过大型科技公司技术面试的完整计算机科学自学计划。它涵盖了数据结构、算法、操作系统、网络等核心知识，资源丰富且支持多语言，适合有一定编程基础并希望成为软件工程师的学习者。 |
| 10 | [github/copilot-sdk](https://github.com/github/copilot-sdk) | Multi-platform SDK for integrating GitHub Copilot ... | Java | 9.0k | 38 | 这是一个多平台 SDK，旨在将 GitHub Copilot 的代理工作流集成到各类应用中。它暴露了 Copilot CLI 的生产级代理运行时，支持 Python、TypeScript、Go、.NET、Java 和 Rust 等多种语言。开发者无需自行构建编排逻辑，即可通过 SDK 定义代理行为，由 Copilot 处理规划、工具调用和文件编辑等任务。 |
| 11 | [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | Find vulnerabilities, misconfigurations, secrets, ... | Go | 35.7k | 255 | Trivy 是一个用 Go 语言编写的多功能安全扫描器，能够扫描容器、文件系统、Git 仓库、虚拟机和 Kubernetes 等目标，检测漏洞、配置错误、敏感信息和许可证问题。它支持多种操作系统和编程语言，提供全面的软件物料清单 (SBOM)，并可与 CI/CD 流程及主流平台无缝集成，是 DevSecOps 环境中不可或缺的安全工具。 |
| 12 | [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | Windows companion suite for OpenClaw - System Tray... | C# | 1.3k | 411 | 这是一个为 AI 个人助手 OpenClaw 提供的原生 Windows 伴侣套件。项目包含 WinUI 3 系统托盘应用、共享网关客户端库及 CLI 工具，旨在提供便捷的快速访问和管理功能。它支持 x64 和 ARM64 架构，依赖 .NET 10.0 SDK 和 WebView2 运行时，适合需要在 Windows 上部署和管理 AI 助手的用户。 |
| 13 | [reconurge/flowsint](https://github.com/reconurge/flowsint) | A modern platform for visual, flexible, and extens... | TypeScript | 5.3k | 308 | Flowsint 是一个基于图的开源 OSINT 探索工具，专为网络安全分析师设计。它提供可视化界面，允许用户通过自动化丰富器探索实体间的复杂关系。项目强调隐私，所有数据存储在本地，支持灵活扩展，适用于开源情报调查和取证分析。 |
| 14 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 27.6k | 199 | 这是一个基于 Python 的 AI Agent 技能，能够并行搜索 Reddit、X、YouTube、HN、Polymarket 和网络上的任何话题。它通过点赞、观看和真实资金等真实互动来评分，并由 AI Agent 综合生成一个接地气的摘要。它打破了平台围墙花园，提供 Google 等传统搜索引擎无法提供的独特数据聚合。 |

[查看完整数据](api/github/2026-06-04.json)
<!-- END GITHUB TRENDING -->




