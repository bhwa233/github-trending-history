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

**最后更新**: 2026-08-15 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [cordiverse/cordis](https://github.com/cordiverse/cordis) | Meta-Framework of Spatiotemporal Composability... | TypeScript | 4.0k | 616 | Cordis 是一个专注于时空组合性的元框架，旨在提供灵活的数据处理和逻辑组合能力。项目采用 TypeScript 开发，集成了测试、代码规范和构建工具，适合构建复杂的时间序列或空间数据应用。 |
| 2 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 29 editorial diagram types for Claude Code. Self-c... | HTML | 18.6k | 1.6k | 这是一个专为 Claude Code 设计的 29 种编辑类图表库。提供自包含的 HTML/SVG，支持语义系统模式与静态输出。包含架构、流程、状态机等多种图表类型，旨在替代 Figma 和通用圆角框，提供高质量、品牌一致的图表，无需构建步骤。 |
| 3 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 2.9k | 152 | 该仓库是 Cursor 的官方插件规范与工具集集合。包含持续学习、团队协作、代码审查、插件生成器、可视化画布（PR/文档）、SDK 及任务编排等工具。旨在扩展 AI 编程助手的开发能力，提供从脚手架到自动化工作流的完整解决方案。 |
| 4 | [cactus-compute/needle](https://github.com/cactus-compute/needle) | 14MB foundation model for tiny devices; phones, we... | Python | 6.1k | 551 | Needle 2 是一个专为边缘设备设计的轻量级模型，仅 14MB。它支持工具调用、设备使用和结构化提取，基于 Simple Attention Network 和 CQ2-bit 压缩技术。模型在约 28MB 内存下运行，性能媲美大模型，适合手机、可穿戴设备及机器人等资源受限场景。 |
| 5 | [unslothai/unsloth](https://github.com/unslothai/unsloth) | Local UI to run and train LLMs and diffusion model... | Python | 72.0k | 435 | Unsloth 是一款本地桌面应用，旨在运行和训练各类 AI 模型（如 LLMs 和扩散模型）。它支持 Qwen、Gemma 等主流模型，提供 2 倍训练速度和 70% 显存优化。支持多平台硬件，具备远程访问和 OpenAI 兼容 API，适合本地 AI 开发与部署。 |
| 6 | [public-apis/public-apis](https://github.com/public-apis/public-apis) | A collective list of free APIs... | Python | 460.1k | 2.5k | 这是一个拥有超过46万星标的GitHub开源项目，旨在收集整理互联网上所有免费可用的API接口。项目维护活跃，包含大量分类，为开发者提供了便捷的API资源查找渠道，支持MIT开源协议。 |
| 7 | [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | Fine-tune LLMs from one YAML. Layer streaming trai... | Python | 1.6k | 303 | Soup 是一个简化 LLM 微调流程的 CLI 工具，仅需一个 YAML 配置文件和一个命令即可完成。其核心特性是逐层流式传输技术，允许在仅 4GB 显存的笔记本电脑 GPU 上训练 8B 模型，支持本地 QLoRA 训练，无需 SSH 或复杂配置。 |
| 8 | [github/spec-kit](https://github.com/github/spec-kit) | 💫 Toolkit to help you get started with Spec-Drive... | Python | 129.2k | 901 | 这是一个开源的规范驱动开发（SDD）工具包，旨在帮助开发者在使用 AI 编码代理时，先定义可执行的规范再编写代码。它支持多种 AI 代理集成，流程可扩展，致力于通过规范驱动流程提升软件质量和开发效率。 |
| 9 | [megadose/holehe](https://github.com/megadose/holehe) | holehe allows you to check if the mail is used on ... | Python | 13.1k | 389 | Holehe 是一个开源 OSINT 工具，用于检查电子邮件是否注册在超过 120 个网站（如 Twitter、Instagram）上。它利用“忘记密码”功能检索账户信息，包括恢复邮箱和电话号码，且不会通知目标用户。支持命令行和 Python 集成，适用于安全审计和账户追踪。 |
| 10 | [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) | Fastest and only macOS Dictation app with on-devic... | Swift | 10.3k | 165 | FluidVoice 是一款专为 macOS 打造的极速语音转文字应用。它利用本地 STT 引擎实现零延迟输入，并集成了名为 Fluid Intelligence 的本地 AI 模型，提供智能格式化和上下文感知功能。该应用完全开源，注重隐私，无需云端 API，是本地化语音输入的优质替代方案。 |
| 11 | [ToolJet/ToolJet](https://github.com/ToolJet/ToolJet) | ToolJet is the open-source foundation of ToolJet A... | JavaScript | 39.5k | 553 | ToolJet 是一个开源的低代码平台，用于构建内部工具、仪表板和业务应用。它提供可视化拖拽构建器、内置数据库及80+数据源连接，支持JavaScript和Python代码编写。社区版具备企业级安全特性，企业版集成了AI功能（如应用生成、查询构建和智能调试），适合快速开发复杂的企业级应用。 |
| 12 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 47.3k | 100 | CLI-Anything 旨在让所有软件具备‘代理原生’能力。通过 CLI-Hub 平台，它连接 AI 代理与各类软件，允许 Claude Code、Cursor 等代理通过一条命令行指令直接操作软件。项目支持社区贡献，提供丰富的 CLI 工具，帮助 AI 代理完成 CAD 构建、3D 场景、笔记管理等复杂任务，是构建 AI Agent 生态的重要基础设施。 |
| 13 | [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | The fastest browser for AI agents to run browser a... | JavaScript | 10.9k | 546 | 这是一个专为 AI 代理设计的浏览器，旨在让用户与 AI 并行工作。它允许 AI 代理在独立空间运行自动化任务，同时共享用户的已登录状态（如 Cookie 和扩展），无需打扰用户。项目支持 macOS，提供零配置的快速启动方式，解决了现有自动化框架中登录状态难以传递和资源冲突的问题。 |

[查看完整数据](api/github/2026-08-15.json)
<!-- END GITHUB TRENDING -->




