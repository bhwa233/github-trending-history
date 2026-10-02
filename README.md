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

**最后更新**: 2026-10-01 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 150.6k | 1.2k | Ponytail 是一个 JavaScript 项目，旨在通过将“懒惰高级开发人员”的人设注入 AI 代理，显著减少代码量、成本和时间。它鼓励使用原生简单方案（如原生 HTML 元素）替代复杂库，在保持 100% 安全的同时，实测代码量减少约 54%，成本降低 20%，速度提升 27%。 |
| 2 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 273.9k | 883 | 这是一个为真实工程师设计的 AI 技能集合，旨在帮助开发者构建真实应用而非仅进行“氛围编码”。这些技能基于数十年的工程经验，设计为小型、可组合且易于适应。支持 Claude Code 和 Codex 等多种 AI 代理，提供订阅式或本地可编辑的安装方式，通过运行特定命令快速配置项目。 |
| 3 | [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) | OpenShell is the safe, private runtime for autonom... | Rust | 14.0k | 2.5k | OpenShell 是一个为自主 AI 代理提供的安全、私有运行时。它利用内核级强制执行和形式化验证技术，确保代理仅在策略允许的范围内读写文件、调用 API 和访问网络。项目通过 Rust 构建，有效隔离代理与敏感数据，防止未经授权的访问。 |
| 4 | [firebase/firebase-ios-sdk](https://github.com/firebase/firebase-ios-sdk) | Firebase SDK for Apple App Development... | C++ | 6.9k | 112 | Firebase iOS SDK 是 Google Firebase 平台在 Apple 设备上的开源开发套件。包含 AI Logic、认证、云数据库、消息推送、崩溃报告等核心服务。支持 Swift 和 Objective-C，提供 Swift Package Manager 和 CocoaPods 等安装方式。注意 CocoaPods 将于 2026 年停止更新新版本。 |
| 5 | [mvschwarz/openrig](https://github.com/mvschwarz/openrig) | Build your own network of agents from Claude Code,... | TypeScript | 3.8k | 642 | OpenRig 是一个开源工具，用于构建和管理 AI 代理网络。它将多个 AI 编码模型（如 Claude Code 和 Codex）整合到一个持久化的团队中。用户可以通过 YAML 定义团队角色，使用命令行启动，实现共享上下文和协作工作。它旨在将零散的终端会话转化为有组织的系统，适合进行复杂的 AI 编码任务和实验。 |
| 6 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 9.3k | 150 | 该项目是 Cursor 编辑器的官方插件集合，包含教学、持续学习、团队协作、代码审查、文档渲染、代理编排等多种开发者工具。旨在通过 TypeScript SDK 和插件规范，增强 AI 辅助编程能力，支持自动化工作流、深度审计及团队内部协作。 |
| 7 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 294.0k | 455 | Superpowers 是一个面向编码代理的技能框架与软件开发方法论。它通过一套可组合的技能，指导 AI 代理在编码前与用户确认需求、展示设计、制定 TDD 实施计划，并支持自主执行。旨在提升 AI 编码代理的工程化水平和自主开发能力。 |
| 8 | [mksglu/context-mode](https://github.com/mksglu/context-mode) | Context window optimization for AI coding agents. ... | TypeScript | 24.8k | 362 | 这是一个 TypeScript 项目，旨在优化 AI 编码代理的上下文窗口。它通过沙箱化工具输出（减少 98%）、利用 SQLite 和 FTS5 保留会话记忆，以及强制 LLM 编写脚本执行计算而非读取数据，有效解决了上下文丢失和冗余问题，提升代理效率。 |
| 9 | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Write HTML. Render video. Built for agents.... | TypeScript | 55.4k | 627 | HyperFrames 是一个开源框架，用于将 HTML、CSS、媒体和动画转换为确定性的 MP4 视频。它专为 AI 编码代理设计，提供 CLI 工具和技能，帮助代理自动化视频创作流程，支持本地运行和云端集成。 |
| 10 | [earendil-works/pi](https://github.com/earendil-works/pi) | AI agent toolkit: unified LLM API, agent loop, TUI... | TypeScript | 111.3k | 298 | Pi 是一个基于 TypeScript 的 AI Agent 工具包，提供统一的 LLM API、Agent 运行时及交互式编码 CLI。核心组件包括多模型支持、工具调用与状态管理，以及独立的代码辅助 CLI。项目还包含应用编排、遥测和持久化运行时等扩展包，适合构建智能代理系统。 |
| 11 | [tile-ai/tilelang](https://github.com/tile-ai/tilelang) | Domain-specific language designed to streamline th... | Python | 8.1k | 163 | Tile Language 是一个基于 TVM 的领域特定语言（DSL），旨在简化高性能 GPU/CPU/NPU 内核的开发。它采用 Pythonic 语法，结合底层编译器基础设施，在保证开发效率的同时提供卓越的低级优化性能。支持 GEMM、FlashAttention 等算子，并已扩展支持华为 Ascend 950、Apple M5 等多后端硬件。 |
| 12 | [pablostanley/yoinks](https://github.com/pablostanley/yoinks) | yoink any video from your terminal. no shady ads.... | TypeScript | 3.0k | 361 | 这是一个基于 TypeScript 的终端视频下载工具，支持从 YouTube、Instagram 等数千个网站下载视频或音频。它利用 yt-dlp 和 ffmpeg 技术，提供无广告、无弹窗的纯净体验，并使用 Ink 框架构建交互式界面，支持键盘和鼠标操作。 |
| 13 | [HunxByts/GhostTrack](https://github.com/HunxByts/GhostTrack) | Useful tool to track location or mobile number... | Python | 16.4k | 368 | GhostTrack 是一款基于 Python 的 OSINT 信息收集工具，主要用于追踪目标 IP 地址、手机号码及社交媒体用户名。它支持在 Linux 和 Termux 环境下运行，通过菜单界面提供多种追踪功能，帮助用户获取目标位置或关联信息。 |
| 14 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | JavaScript | 73.7k | 495 | 这是一个为 AI 编码代理提供设计指导的开源项目。它包含 24 个命令和 61 条确定性检测规则，帮助 AI 生成一致且高质量的前端设计，避免重复模式。支持实时浏览器迭代和产品真相记录。 |
| 15 | [Friedrich-M/UniMate](https://github.com/Friedrich-M/UniMate) | [SIGGRAPH Asia 2026] UniMate: One Unified Model to... | Python | 1.1k | 217 | UniMate 是一个发表于 SIGGRAPH Asia 2026 的统一模型，旨在通过单一模型动画化多样化的骨骼（如双足、四足、鸟类等）。项目引入了包含 13,006 个文本配对的大规模 UniML3D 数据集，支持文本到动画的生成，并提供了完整的训练与推理代码。 |

[查看完整数据](api/github/2026-10-01.json)
<!-- END GITHUB TRENDING -->




