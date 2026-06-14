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

**最后更新**: 2026-06-13 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [iptv-org/iptv](https://github.com/iptv-org/iptv) | Collection of publicly available IPTV channels fro... | TypeScript | 119.1k | 530 | 这是一个全球公开 IPTV 频道列表的集合项目。它提供了大量的 M3U 播放列表，用户可以直接将链接粘贴到支持直播流的播放器中观看电视节目。项目还包含 EPG 电子节目指南、API 接口以及相关的数据库和资源链接。项目本身不存储视频文件，仅提供外部链接。 |
| 2 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | Shell | 58.3k | 1.5k | 面向 AI 编码代理的生产级工程技能库，将资深工程师的工作流程与最佳实践编码为标准化技能。提供 7 个斜杠命令覆盖开发全生命周期（定义、计划、构建、测试、审查、发布），支持自动生成计划与任务实现，确保代码质量与一致性。 |
| 3 | [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) | Open-source live-chat, email support, omni-channel... | Ruby | 30.8k | 83 | Chatwoot 是一款开源的全渠道客户支持平台，支持网站、邮件及 WhatsApp 等多渠道沟通。它集成了 AI 代理 Captain 自动处理常见问题，并提供帮助中心、团队协作及自动化工具。作为 Intercom 的自托管替代方案，它允许企业完全掌控客户数据，灵活扩展支持流程。 |
| 4 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 226.9k | 924 | Superpowers 是一个为编码代理（如 Claude Code）设计的软件开发方法论框架。它通过一套可组合的技能，引导代理从需求收集、规范拆解、实施计划制定到自主开发的全流程。强调 TDD、YAGNI 和 DRY 原则，支持代理自主工作数小时，旨在提升 AI 编码的效率和质量。 |
| 5 | [apple/container](https://github.com/apple/container) | A tool for creating and running Linux containers u... | Swift | 36.3k | 1.5k | 这是一个用 Swift 编写的工具，用于在 Mac 上创建和运行 Linux 容器。它利用轻量级虚拟机技术，针对 Apple Silicon 进行了优化。支持 OCI 兼容的容器镜像，可在 macOS 26 上运行。 |
| 6 | [music-assistant/server](https://github.com/music-assistant/server) | Music Assistant is a free, opensource Media librar... | Python | 2.0k | 270 | Music Assistant 是一个开源的媒体库管理器，核心功能是连接流媒体服务和扬声器。它专为常开设备（如树莓派、NAS）设计，支持与 Home Assistant 深度集成，实现自动化控制。由于依赖外部组件，主要通过 Docker 容器或 Home Assistant 插件运行。 |
| 7 | [kenn-io/agentsview](https://github.com/kenn-io/agentsview) | Local-first session intelligence and analytics for... | Go | 2.4k | 190 | 这是一个用 Go 编写的本地优先 AI 编码代理会话智能与分析工具。支持 Claude Code、Codex 等 20+ 代理，追踪成本、浏览和搜索会话。单二进制部署，本地 SQLite 存储，提供 Web UI 和命令行工具，号称比 ccusage 快 100 倍。 |
| 8 | [LMCache/LMCache](https://github.com/LMCache/LMCache) | LMCache: Supercharge Your LLM with the Fastest KV ... | Python | 8.9k | 238 | LMCache 是一个用于 LLM 推理的 KV 缓存管理层，旨在将 KV 缓存转化为可重用的 AI 原生知识。它通过独立守护进程实现引擎无关部署，支持跨硬件厂商和存储系统的持久化缓存，显著降低 TTFT 并提升吞吐量，特别适用于长上下文代理、多轮对话及 RAG 场景。 |
| 9 | [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | Microsoft PowerToys is a collection of utilities t... | C | 134.7k | 370 | Microsoft PowerToys 是一套用于 Windows 的实用工具集合，旨在提升生产力与系统自定义能力。它包含超过 30 个工具，如 FancyZones（窗口分区）、PowerRename（批量重命名）、PowerToys Run（快速启动器）和 Color Picker 等，帮助用户优化 Windows 体验，简化日常任务。 |
| 10 | [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | Simple, unified interface to multiple Generative A... | Python | 14.1k | 127 | aisuite 是一个轻量级 Python 库，提供统一的 Chat Completions API 以支持 OpenAI、Anthropic、Google 等多种生成式 AI 提供商。它还包含 Agents API 和 MCP 支持，便于构建具备工具调用能力的智能代理，并集成了桌面 AI 代理 OpenCoworker。 |
| 11 | [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | Security scanner for AI agent skills. Detect vulne... | Python | 4.4k | 804 | SkillSpector 是 NVIDIA 开发的 AI Agent Skills 安全扫描工具，旨在检测安装前的漏洞和恶意意图。它支持多种输入格式，包含 64 种漏洞模式，提供两阶段分析（静态+LLM）和实时 CVE 查询，输出多种格式报告并给出风险评分，帮助用户确保 AI Agent Skills 的安全性。 |
| 12 | [bannedbook/fanqiang](https://github.com/bannedbook/fanqiang) | 翻墙-科学上网... | Kotlin | 47.5k | 93 | 这是一个综合性的科学上网工具库，包含安卓APP、Chrome一键翻墙包（ChromeGo）及各类教程。项目涵盖了V2Ray、Shadowsocks、Clash等多种协议在Windows、Mac、iOS、Android及路由器等平台上的配置与使用指南，旨在帮助用户突破网络限制。 |
| 13 | [swc-project/swc](https://github.com/swc-project/swc) | Rust-based platform for the Web... | Rust | 33.6k | 20 | SWC 是一个用 Rust 编写的超快 TypeScript/JavaScript 编译器平台，旨在让 Web 开发更快。它支持 Rust 和 JavaScript 环境，提供高性能的代码转译服务，是现代前端工程化中 Babel 的强力替代方案。 |
| 14 | [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | FULL Augment Code, Claude Code, Cluely, CodeBuddy,... | - | 140.3k | 109 | 该项目是一个开源的 AI 工具系统提示词与模型集合，涵盖了 Cursor、Devin AI、Replit、Windsurf 等主流开发工具。它整理了这些工具的内部提示词、工具及模型，旨在帮助开发者优化 AI 辅助开发体验，同时也包含安全提示和赞助信息。 |

[查看完整数据](api/github/2026-06-13.json)
<!-- END GITHUB TRENDING -->




