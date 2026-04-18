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

**最后更新**: 2026-04-18 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [thunderbird/thunderbolt](https://github.com/thunderbird/thunderbolt) | AI You Control: Choose your models. Own your data.... | TypeScript | 1.5k | 458 | Thunderbolt 是一个开源、跨平台的 AI 客户端，旨在让用户控制模型、拥有数据并消除供应商锁定。它支持自托管部署，兼容前沿、本地及企业级模型。目前处于活跃开发和安全审计阶段，主要面向需要私有化部署的企业客户，支持 Web、移动端及桌面端。 |
| 2 | [BasedHardware/omi](https://github.com/BasedHardware/omi) | AI that sees your screen, listens to your conversa... | Dart | 10.4k | 617 | Omi 是一个开源的 AI 个人助手，旨在成为比第一个大脑更值得信赖的第二大脑。它支持桌面、手机和可穿戴设备，能够实时捕获屏幕画面和对话内容，进行转录、生成摘要和行动项，并提供拥有长期记忆的 AI 聊天功能。 |
| 3 | [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | A lightweight, powerful framework for multi-agent ... | Python | 22.3k | 473 | 这是一个轻量级且强大的 Python 框架，专为构建多智能体工作流设计。它支持多种 LLM 提供商，具备智能体配置、工具调用、护栏机制、会话管理和追踪等功能。支持沙盒环境、实时语音交互及智能体间移交，适合开发复杂的 AI 应用和自动化工作流。 |
| 4 | [EvoMap/evolver](https://github.com/EvoMap/evolver) | The GEP-Powered Self-Evolution Engine for AI Agent... | JavaScript | 5.0k | 1.1k | EvoMap/evolver 是一个基于 GEP（基因表达编程）的 AI 代理自我进化引擎。它将临时的提示调整转化为可审计、可重用的进化资产，支持协议约束进化和提示治理。作为 EvoMap 网络的核心引擎，它允许 AI 代理通过协作进化，提供基因和胶囊机制，旨在解决 AI 代理适应性问题。 |
| 5 | [deepseek-ai/DeepGEMM](https://github.com/deepseek-ai/DeepGEMM) | DeepGEMM: clean and efficient FP8 GEMM kernels wit... | Cuda | 6.5k | 31 | DeepGEMM 是一个统一的高性能 CUDA 张量核心内核库，专为现代大语言模型设计。它支持 FP8、FP4、BF16 GEMM，融合了 Mega MoE、MQA 评分和 HyperConnection 等关键计算原语。通过轻量级 JIT 编译，无需安装时编译，性能媲美专家调优库，支持 SM90/SM100 架构。 |
| 6 | [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) | 《动手学大模型Dive into LLMs》系列编程实践教程... | Jupyter Notebook | 32.0k | 562 | 这是一个由上海交通大学开发的公益编程实践教程，使用 Jupyter Notebook。内容涵盖微调、提示学习、安全对齐、隐写术及 GUI Agent 等大模型核心主题。项目近期新增了与华为昇腾合作的国产化大模型开发全流程教程，旨在帮助开发者快速入门大模型技术。 |
| 7 | [aaddrick/claude-desktop-debian](https://github.com/aaddrick/claude-desktop-debian) | Claude Desktop for Debian-based Linux distribution... | Shell | 3.5k | 39 | 该项目为 Debian/Ubuntu 等基于 Debian 的 Linux 发行版提供 Claude Desktop 的原生运行环境。它将 Windows 应用程序重新打包为多种格式（如 .deb、AppImage），支持 MCP 协议、全局热键及系统托盘集成。项目包含实验性的协作模式，支持使用 bubblewrap 进行沙箱隔离。 |
| 8 | [rustdesk/rustdesk](https://github.com/rustdesk/rustdesk) | An open-source remote desktop application designed... | Rust | 112.1k | 351 | RustDesk 是一个用 Rust 编写的开源远程桌面应用，旨在替代 TeamViewer。它支持自托管，用户拥有完全的数据控制权，无需配置即可开箱即用。项目支持自定义中继服务器，并提供 Flutter 和 Sciter 两种 GUI 框架，欢迎社区贡献。 |
| 9 | [SimoneAvogadro/android-reverse-engineering-skill](https://github.com/SimoneAvogadro/android-reverse-engineering-skill) | Claude Code skill to support Android app's reverse... | Shell | 3.1k | 408 | 这是一个用于 Android 应用逆向工程的 Claude Code 技能。它利用 jadx 和 Fernflower 等工具反编译 APK、XAPK、JAR 和 AAR 文件，提取 HTTP API（如 Retrofit 端点、OkHttp 调用）并追踪调用流程。该技能还能分析应用结构、处理混淆代码，帮助用户在没有源代码的情况下文档化和重现 API。 |
| 10 | [tractorjuice/arc-kit](https://github.com/tractorjuice/arc-kit) | Enterprise Architecture Governance & Vendor Procur... | HTML | 724 | 143 | ArcKit 是一个企业架构治理与供应商采购工具包，旨在将分散的文档转化为系统化的 AI 辅助工作流。它支持架构原则建立、利益相关者分析、风险与商业案例管理、数据建模、技术调研（含 Azure）、Wardley Mapping、架构图生成及供应商 RFP 管理等功能，集成了 Claude Code 插件和多个 MCP 服务器，提供从战略规划到设计审查的全流程支持。 |

[查看完整数据](api/github/2026-04-18.json)
<!-- END GITHUB TRENDING -->




