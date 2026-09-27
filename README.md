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

**最后更新**: 2026-09-26 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | The open-source app everyone uses to manage agents... | TypeScript | 87.4k | 2.6k | Paperclip 是一个开源的 AI 代理编排应用，基于 Node.js 和 React 构建。它充当“AI 公司”的角色，帮助团队协调多个 AI 代理。用户可通过仪表板设定目标、分配任务、监控成本和工作进度，底层具备组织架构、预算治理和目标对齐功能，旨在构建自主运行的 AI 组织。 |
| 2 | [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Hindsight: Agent Memory That Learns... | Python | 32.2k | 2.1k | Hindsight 是一个专注于让智能体随时间学习的记忆系统，而非仅仅回忆历史。它声称通过消除 RAG 和知识图谱的缺陷，在长期记忆任务中达到 SOTA 性能。项目提供 LLM 包装器和集成，支持 Fortune 500 企业生产环境部署，旨在构建更聪明的智能体。 |
| 3 | [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | A unified library of SOTA model optimization techn... | Python | 4.8k | 357 | NVIDIA Model Optimizer 是一个提供 SOTA 模型优化技术的统一库，支持量化、剪枝、NAS、蒸馏和推测解码。它支持 Hugging Face、PyTorch 和 ONNX 模型输入，通过 Python API 进行优化，并生成可用于 TensorRT-LLM、vLLM 等部署框架的高效量化检查点，旨在加速深度学习模型的推理速度并减少模型大小。 |
| 4 | [dream-num/univer](https://github.com/dream-num/univer) | The Office Harness for AI Agents — Spreadsheets, D... | TypeScript | 19.2k | 849 | Univer 是一个高性能、开源的 Office SDK，专为 AI 代理打造统一的办公运行时。它支持电子表格、文档、演示文稿等多种格式，提供 Canvas 渲染、公式引擎及插件架构。开发者可灵活构建嵌入式的生产力应用，支持浏览器与 Node.js 环境，适用于 SaaS、BI 工作流及 AI 应用场景。 |
| 5 | [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | An Open Source Machine Learning Framework for Ever... | C++ | 200.5k | 46 | TensorFlow 是由 Google Brain 开发的端到端开源机器学习平台。它拥有全面的生态系统，支持研究人员推动技术前沿，也方便开发者构建和部署 ML 应用。提供稳定的 Python 和 C++ API，支持 GPU 加速。 |
| 6 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 58.4k | 827 | 这是一个全面的 AI 工程自学课程，涵盖数学基础、机器学习、LLM 工程及代理开发。项目包含 523 个课程、20 个阶段及约 342 小时内容，支持 Python、TypeScript、Rust 和 Julia。学生通过构建可重用的工件（如提示词、代理和 MCP 服务器）来学习，旨在弥合 AI 工具使用与专业准备之间的差距，开源免费。 |
| 7 | [openbao/openbao](https://github.com/openbao/openbao) | OpenBao is a software solution to manage, store, a... | Go | 8.0k | 364 | OpenBao 是一个用 Go 语言编写的开源机密管理工具，旨在安全地存储、分发和管理敏感数据（如机密、证书和密钥）。它提供动态机密生成（如 AWS 和 SQL 凭据）及自动轮换功能，支持加密存储和多种后端，由社区驱动。 |
| 8 | [block/buzz](https://github.com/block/buzz) | A hive mind communication platform... | Rust | 34.8k | 339 | Buzz 是一个基于 Rust 的自托管工作空间，旨在让人类与 AI 代理在同一环境中协作。它采用 Nostr 协议作为底层事件日志，支持代理执行代码审查、工作流、仓库操作等任务，并保持完整的审计追踪。项目强调代理拥有独立身份和权限，类似于团队成员。 |
| 9 | [microsoft/vscode](https://github.com/microsoft/vscode) | Visual Studio Code... | TypeScript | 193.1k | 95 | Visual Studio Code 是微软开发的免费开源代码编辑器，基于 TypeScript 和 Electron 构建。它集成了代码编辑、构建、调试等核心开发功能，拥有强大的扩展生态系统，支持 Windows、macOS 和 Linux。项目采用 MIT 许可证，欢迎社区贡献。 |
| 10 | [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | Reverse Engineering / Authorized Penetration Testi... | PowerShell | 38.0k | 361 | 这是一个面向 AI 代理的逆向工程与安全研究技能路由包。通过 AI 自动路由，将 APK、二进制文件或 CTF 任务精准匹配至对应工具链与方法论，实现按需自举与经验复用，支持 Claude Code、Cursor 等客户端，旨在解决 AI 工具选择混乱及经验无法复用的问题。 |
| 11 | [llvm/llvm-project](https://github.com/llvm/llvm-project) | The LLVM Project is a collection of modular and re... | LLVM | 40.8k | 41 | LLVM 是一个模块化且可重用的编译器和工具链技术集合。核心组件处理中间表示并生成目标文件，Clang 前端支持 C/C++/Objective-C，此外还包括 libc++ 标准库和 LLD 链接器。该项目旨在构建高度优化的编译器、优化器和运行时环境。 |
| 12 | [anthropics/claude-code-action](https://github.com/anthropics/claude-code-action) | ... | TypeScript | 9.1k | 31 | 这是一个基于 TypeScript 的 GitHub Action，利用 Claude AI 智能处理 PR 和 Issue。它支持代码问答、审查、实现及自动化任务，具备模式自动检测、结构化输出和本地运行能力，简化了与 Claude Code SDK 的集成配置。 |
| 13 | [actions/runner-images](https://github.com/actions/runner-images) | GitHub Actions runner images... | PowerShell | 13.3k | 19 | 该项目是 GitHub Actions 和 Azure Pipelines 托管运行器 VM 镜像的源代码仓库。它提供了构建这些镜像的脚本和配置，支持 Ubuntu、macOS 和 Windows 等多种操作系统及架构，并预装了各类开发工具和运行时环境。 |
| 14 | [mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp) | Model Context Protocol Server for Mobile Automatio... | TypeScript | 7.4k | 168 | 这是一个基于 TypeScript 的 MCP 服务器，提供跨平台移动自动化解决方案。它允许 AI 代理通过无障碍树或坐标与 iOS/Android 原生应用交互，无需特定平台知识。支持模拟器、真机及云端设备，适用于自动化测试、数据提取及复杂用户流程。 |
| 15 | [vercel/next.js](https://github.com/vercel/next.js) | The React Framework... | JavaScript | 142.6k | 54 | Next.js 是一个基于 React 的全栈 Web 应用程序框架。它通过集成 Rust 工具实现极速构建，支持扩展最新 React 特性，被全球大型企业广泛使用。 |

[查看完整数据](api/github/2026-09-26.json)
<!-- END GITHUB TRENDING -->




