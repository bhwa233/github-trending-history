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

**最后更新**: 2026-11-12 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) | Keep your coding agent up to date with the latest ... | TypeScript | 3.3k | 739 | 该项目由 Chrome、Edge、Firefox 和 MDN 团队维护，旨在通过嵌入 Web 平台最佳实践和浏览器兼容性数据，引导 AI 编码代理生成更现代、高性能的代码。它提供 CLI 工具，支持安装指南、搜索特定主题、检索指南以及扫描代码库中的遗留模式，帮助开发者使用原生 Web API 替代过时方案。 |
| 2 | [openai/codex-security](https://github.com/openai/codex-security) | OpenAI's Codex Security CLI and TypeScript SDK for... | TypeScript | 12.5k | 643 | 这是一个用于查找、验证和修复代码安全漏洞的 CLI 工具和 TypeScript SDK。它支持深度扫描、自动生成补丁、威胁建模及导出报告，并能与 Jira、GitHub 等工具集成，帮助开发者通过 Codex 插件或自动化工作流提升代码安全性。 |
| 3 | [nvm-sh/nvm](https://github.com/nvm-sh/nvm) | Node Version Manager - POSIX-compliant bash script... | Shell | 96.0k | 63 | nvm 是一个 POSIX 兼容的 Node.js 版本管理脚本，允许用户通过命令行快速安装、切换和使用不同的 Node.js 版本。它支持 bash、zsh 等多种 shell，兼容 Unix、macOS 和 Windows WSL，并提供 Docker 集成、自动版本切换及离线安装等功能。 |
| 4 | [pookjw/HermesEnabler](https://github.com/pookjw/HermesEnabler) | Enable Hermès Watch Faces on any Apple Watch devic... | Objective-C | 1.6k | 218 | 该项目允许用户在任意 Apple Watch 设备上启用 Hermès 表盘。支持 watchOS 27.0 到 27.3 beta 1 版本。用户可通过 macOS 的 Sideloadly 或 Xcode，或 Windows 的 WatchBridge 工具进行安装，需开启开发者模式并信任证书。 |
| 5 | [we-promise/sure](https://github.com/we-promise/sure) | The personal finance app for everyone (by everyone... | Ruby | 14.0k | 967 | 这是一个源自 Maybe Finance 的社区维护分叉项目，提供功能齐全的个人理财应用。支持自托管（Docker）、多端访问（浏览器、桌面、移动端）及 API/LLM 代理集成。项目采用 AGPLv3 许可证，旨在让用户免费使用，现由社区维护以延续代码库。 |
| 6 | [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | An open-source AI coding agent that lives in your ... | TypeScript | 29.9k | 151 | Qwen Code 是一个开源的 AI 编码代理，运行在终端中。它具备自动记忆、技能和子代理等内置代理能力，支持多协议（OpenAI、Anthropic、Gemini、Qwen）及本地模型。提供零设置动态工作流，支持终端、IDE 插件等多种界面，且框架和模型均开源，无供应商锁定。 |
| 7 | [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | LLM Inference Engine for Metal, CUDA and Vulkan.... | Zig | 2.0k | 54 | TensorFold 是一个用 Zig 编写的 LLM 推理引擎，支持 Metal、CUDA 和 Vulkan。它允许从 Zig 二进制文件直接在 Apple Silicon 和 NVIDIA GPU 上运行语言模型，无需 Python 或 MLX 环境支持。项目通过直接运行 Metal 或 CUDA 内核来处理检查点加载和请求分词，并集成了 Agent Traffic Control (ATC) 工具以优化协作流程。 |
| 8 | [nodejs/node](https://github.com/nodejs/node) | Node.js JavaScript runtime ✨🐢🚀✨... | JavaScript | 123.6k | 62 | Node.js 是一个开源的、跨平台 JavaScript 运行时环境，由 OpenJS Foundation 支持。项目采用开放治理模式，遵循语义化版本控制。提供 Alpha、Current 和 LTS 三种发布类型，其中 LTS 版本专注于稳定性和安全性，适用于生产环境。 |
| 9 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 116.8k | 816 | 该项目为 AI 编码代理提供生产级工程技能，包含 9 个斜杠命令覆盖全开发生命周期。它确保 AI 遵循最佳实践（如测试驱动、代码审查、性能审计），提升代码质量和开发效率，特别适用于 Claude Code 环境。 |
| 10 | [meta/astryx](https://github.com/meta/astryx) | An open source design system that's fully customiz... | TypeScript | 26.7k | 1.8k | Astryx 是 Meta 开源的企业级设计系统，拥有 150+ 可访问组件和品牌级主题。它基于 React 19 和 StyleX 构建，支持暗黑模式和无样式锁定。核心优势在于开放内部、可自定义主题以及专为人类和 AI 助手设计的统一工具链，适合构建大规模、可扩展的 Web 应用。 |
| 11 | [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | Open-source AI coworkers that each get a computer ... | TypeScript | 11.7k | 298 | OpenBot 是一个开源的 AI 同事工作空间，旨在为 AI 代理提供独立的浏览器、文件和工具环境。它支持多种大模型和 AG-UI 代理，具备企业级功能如权限管理、审批流程和审计日志。用户可自托管，灵活集成现有代理，实现跨平台协作。 |
| 12 | [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Use Claude Code, Codex, Antigravity, VSCode, Pi, a... | Python | 69.4k | 415 | 这是一个开源项目，旨在通过路由技术免费使用Claude Code等12种编程工具。它支持61个提供商，每月提供超13亿免费代币，支持终端、IDE及浏览器使用。具备流式传输、工具调用、语音支持及高可靠性重试机制，旨在降低编程成本。 |
| 13 | [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | LLM inference in C/C++... | C++ | 134.6k | 176 | llama.cpp 是一个用 C++ 编写的轻量级 LLM 推理库，旨在本地和云端实现高性能推理。它支持多硬件架构（x86, ARM, RISC-V）及多种后端（CUDA, Metal, Vulkan 等），提供多种量化选项以减少内存占用，并支持 CPU+GPU 混合加速。 |

[查看完整数据](api/github/2026-11-12.json)
<!-- END GITHUB TRENDING -->




