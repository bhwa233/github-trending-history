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

**最后更新**: 2026-10-04 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tester-army/e2e](https://github.com/tester-army/e2e) | Next generation e2e testing framework for web and ... | TypeScript | 3.2k | 345 | 这是一个基于自然语言的下一代端到端测试框架，支持Web和移动应用。用户可用自然语言描述目标，由Agent驱动应用执行并验证结果。支持自定义大模型，具备动作记录与回放功能，集成Playwright等引擎，适合自动化测试开发。 |
| 2 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | JavaScript | 76.3k | 1.2k | Impeccable 是一个为 AI 编码代理提供设计指导的开源项目。它包含 24 个命令和 61 条确定性检测规则，旨在避免 AI 生成设计中的陈词滥调，提升前端设计质量。通过初始化流程记录产品真相，支持实时浏览器迭代，帮助 AI 理解设计语境。 |
| 3 | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | Marketing skills for Claude Code and AI agents. CR... | JavaScript | 53.1k | 197 | 该项目为 Claude Code 和 AI agents 提供专业的营销技能库，涵盖 CRO、文案、SEO、分析和增长工程。专为技术营销人员和创始人设计，支持 Claude Code、Cursor、Windsurf 等多种平台。通过 markdown 格式的技能文件，帮助 AI 辅助完成营销任务，提升转化率和增长效率。 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 154.9k | 1.9k | Ponytail 是一个 JavaScript 库，旨在让 AI 代理表现得像房间里最懒惰的高级开发人员。它通过鼓励编写最少的代码（'YAGNI' 和单行代码）来减少过度工程。基准测试显示，与无技能代理相比，它减少了 54% 的代码量、20% 的成本和 27% 的时间，同时保持 100% 的安全性。它将一个'懒惰'的角色注入到 AI 编码工作流中。 |
| 5 | [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | Give your agent CAD superpowers.... | Python | 16.9k | 83 | 这是一个 Python 库，为 AI 代理提供 CAD 和机器人描述文件的生成、检查、采购及切片技能。支持从文本/图像创建 STEP 模型、生成工程图、URDF/SDF 文件、制造检查（DFM/DfAM）以及直接打印到打印机，旨在自动化制造工作流程。 |
| 6 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet... | Python | 90.9k | 980 | Agent-Reach 是一个为 AI Agent 提供全网互联网访问能力的 Python CLI 工具。它解决了 Agent 无法直接访问 Twitter、Reddit、YouTube 等平台的问题，支持零 API 费用、本地 Cookie 存储和自动路由切换。兼容 Claude Code、Cursor 等主流 Agent，具备隐私安全、全网搜索和自诊断功能。 |
| 7 | [getsentry/sentry](https://github.com/getsentry/sentry) | Developer-first error tracking and performance mon... | Python | 45.4k | 152 | Sentry 是一个开发者优先的错误追踪和性能监控平台，旨在帮助开发人员快速检测、追踪和修复代码问题。它支持包括 Python、JavaScript、Go、Java、Ruby、PHP、Rust、C#、C++、Swift 和 Dart 在内的多种编程语言和框架 SDK，是开发团队进行应用监控和调试的重要工具。 |
| 8 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 63.2k | 245 | OpenMontage 是世界首个开源的代理式视频制作系统，拥有12个生产管线和700+代理技能。它能将AI编程助手转化为全功能视频工作室，支持从脚本、素材生成到剪辑合成的全流程自动化。不仅能制作基于图像的视频，还能利用开源素材制作真实视频，适用于科幻预告片、动画短片及3D展示等多种场景。 |
| 9 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | ... | TypeScript | 25.2k | 490 | T3 Code 是一个开源的 AI 代理控制台，旨在提供跨平台（移动端、Web、桌面端）的最佳开发体验。它支持 Claude、Codex、Cursor 等多种主流 AI 编程工具，允许用户通过统一的界面远程管理和控制这些代理。 |
| 10 | [caddyserver/caddy](https://github.com/caddyserver/caddy) | Fast and extensible multi-platform HTTP/1-2-3 web ... | Go | 76.6k | 24 | Caddy 是一个用 Go 语言编写的快速、可扩展多平台 HTTP/1-2-3 服务器。它默认启用自动 HTTPS，支持 HTTP/1.1、HTTP/2 和 HTTP/3。项目提供简单的 Caddyfile 配置和强大的 JSON API，具备模块化架构，无需外部依赖即可运行，适合各类 Web 服务部署。 |
| 11 | [michael-denyer/pstack-claude](https://github.com/michael-denyer/pstack-claude) | Claude Code, Codex, Pi, OpenCode, Gemini, and Prim... | JavaScript | 1.2k | 232 | 这是一个将 Poteto 的 pstack 技能栈移植到 Claude Code、Codex、Pi 等多种 AI 代理工具的项目。它提供严格的代理工作流，帮助 AI 保持代码简洁、简单且经过验证。项目支持策略分支，并包含用于形式化验证的插件，通过 /skill 等指令实现自动化任务路由和执行。 |
| 12 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 101.2k | 336 | 为 AI 编码代理提供生产级工程技能，将资深工程师的工作流程、质量门控和最佳实践编码为技能，确保 AI 代理在开发全生命周期中保持一致性。项目包含 9 个斜杠命令，支持自动技能激活和增量构建，旨在减少手动步骤并提升代码质量。 |
| 13 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | TypeScript | 96.1k | 628 | 这是一个为 Claude Code 构建的持久记忆压缩系统。它自动捕获代理在会话中的工具使用和观察结果，利用 AI 进行语义压缩，并将相关上下文注入未来的会话中，确保代理在会话结束后仍能保持对项目的连续性知识。 |
| 14 | [garrytan/gstack](https://github.com/garrytan/gstack) | Use Garry Tan's exact Claude Code setup: 23 opinio... | TypeScript | 135.2k | 125 | gstack 是一个基于 Claude Code 的 AI 辅助开发工具集，包含 23 个特定工具，旨在模拟 CEO、设计师、工程经理等完整工程团队的职能。通过 TypeScript 实现，帮助开发者利用 AI 大幅提升个人生产力，实现单人高效交付。 |
| 15 | [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | The open-source CapCut alternative... | TypeScript | 92.2k | 512 | OpenCut 是一款免费开源的视频编辑器，支持 Web、桌面和移动端。目前项目正在进行底层重写，旨在提供插件架构、MCP 服务器支持、无头模式及脚本功能，打造跨平台的视频创作工具。 |
| 16 | [antirez/ds4](https://github.com/antirez/ds4) | DeepSeek 4 Flash and PRO local inference engine fo... | C | 23.5k | 211 | DwarfStar 是一个专为消费级硬件优化的本地大语言模型推理引擎，支持 DeepSeek V4、GLM 和 Qwen 等模型。它原生支持 Metal、CUDA 和 ROCm 后端，针对特定模型格式（GGUF）进行了深度优化，包含 HTTP 服务器和工具调用等完整功能，旨在让用户在 Mac、DGX Spark 等设备上高效运行高性能模型。 |

[查看完整数据](api/github/2026-10-04.json)
<!-- END GITHUB TRENDING -->




