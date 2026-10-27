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

**最后更新**: 2026-10-26 | **成功**: 12 | **失败**: 2

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | Anti-AI-slop design skill for Claude Code, Cursor,... | CSS | 36.5k | 2.2k | 这是一个由 Together AI 开发的 AI 设计技能，旨在防止 Claude Code、Cursor 和 Codex 生成看起来像机器生成的网页。它提供 48 种主题，根据用户任务构建页面，并检查对比度、事实错误等“机器痕迹”。支持自定义页面、URL 捕获和真实照片，确保高质量的设计输出。 |
| 2 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 116.2k | 1.4k | 这是一个基于多智能体 LLM 的金融交易框架。项目利用大语言模型（如 GPT-6、Claude Sonnet 5）构建交易员、分析师和经理角色，实现自动化交易决策与回测。支持 SEC EDGAR、Yahoo Finance 等多源数据接入，提供 CLI 工具及 HTML 报告，旨在通过 AI 提升金融交易效率与准确性。 |
| 3 | [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | Vibe code with pi in a lightweight, real IDE that ... | TypeScript | 3.0k | 1.2k | ThinkRail 是一个基于 TypeScript 的智能 IDE，围绕 pi 编码代理构建。它提供隔离的工作区（基于 git worktrees）、持久化的项目知识以及强大的 IDE 功能。该工具允许 AI 并行处理任务，自动管理 PR，并能根据用户工作方式自适应进化。 |
| 4 | [makecindy/cindy](https://github.com/makecindy/cindy) | Consider it done. The open-source AI agent that wo... | TypeScript | 6.5k | 1.3k | Cindy 是一个开源、开箱即用的本地 AI Agent，支持 Claude Code 和 Codex 等多种模型与工具。它能够自动化处理项目中的实际工作，支持记忆共享、技能复用及自动化流程，并通过 MCP 连接内部工具，适用于需要高效本地化 AI 辅助开发和自动化管理的场景。 |
| 5 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 289.9k | 896 | ECC 是一个代理 Harness 性能优化系统，旨在为 Claude Code、Cursor 等提供技能、记忆和安全支持。它通过“计划-测试-实现-审查-验证-记忆-改进”的闭环工作流，优化上下文窗口，提升代码生成质量，并支持多平台集成。 |
| 6 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | Rust | 89.3k | 1.5k | 这是一个为 AI 编码代理提供设计指导的 Rust 项目。它包含 24 个命令、62 个确定性检测规则和实时浏览器迭代功能。通过 `/impeccable init` 记录产品真相，帮助 AI 生成更一致、高质量的前端设计，避免常见的模板化问题。 |
| 7 | [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | Security scanner for AI agent skills. Detect vulne... | Python | 22.2k | 214 | NVIDIA/SkillSpector 是一款针对 AI agent skills 的安全扫描工具，旨在检测漏洞、恶意模式及提示注入等风险。它支持多种输入格式，结合静态分析与 LLM 语义评估，提供实时漏洞查询和风险评分，确保在安装 Claude Code 等技能前进行安全验证。 |
| 8 | [pollen-robotics/microduck](https://github.com/pollen-robotics/microduck) | A Tiny biped duck robot 🦆... | Rust | 12.4k | 843 | 这是一个基于 Rust 开发的双足鸭子机器人，运行在 Rockchip RK3566 芯片上。它利用强化学习策略实现行走、滚动、抓取物体和自我站立等功能，包含完整的控制循环、通信和更新机制。 |
| 9 | [nightly-labs/openbot](https://github.com/nightly-labs/openbot) | A local-first desktop workspace for persistent AI ... | TypeScript | 1.5k | 176 | 处理失败 |
| 10 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet... | Python | 103.7k | 746 | Agent Reach 是一个 Python CLI 工具，旨在赋予 AI Agent 访问整个互联网的能力。它支持搜索 Twitter、Reddit、YouTube、GitHub、Bilibili 和小红书等平台，无需 API 密钥。它解决了 Agent 无法访问登录墙、视频内容和中文平台的问题，通过后台浏览器提供结构化数据。 |
| 11 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 89.4k | 2.3k | VoiceStudio 是一个开源的、完全本地化的 ElevenLabs 替代品。它支持语音克隆、语音设计、视频配音、听写、转录和有声书创作，覆盖 646 种语言。项目提供本地 API 和 MCP 支持，允许用户在本地硬件上运行工作流，保护隐私，并支持通过 Electron 桌面应用进行便捷操作。 |
| 12 | [gitroomhq/postiz-app](https://github.com/gitroomhq/postiz-app) | 📨 The ultimate agentic social media scheduling to... | TypeScript | 38.5k | 188 | Postiz 是一个全功能的社交媒体管理平台，支持调度、自动化和分析内容。它集成了 AI 代理生成内容，并支持团队协作。用户可选择 Postiz Cloud 或自托管版本，并提供 API 与 N8N、Make.com 等工具集成，实现工作流自动化。技术栈基于 NextJS、NestJS 和 Prisma。 |
| 13 | [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | Huashu Design 3.0 · 在 agent 里打一句话，拿回能交付的设计：网页 / Ap... | HTML | 26.8k | 251 | 这是一个跨 Agent 通用的高质量 AI 设计 Skill，允许用户输入一句话，在 3-30 分钟内生成网页、App 原型、PPTX 等专业级设计交付物。支持品牌资产识别与 84 种风格库，具备“设计体检”与“外观账本”功能，确保输出非 AI 模糊感，兼容 Claude Code、Cursor 等工具，采用 MIT 协议开源。 |
| 14 | [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 224.7k | 638 | 处理失败 |

[查看完整数据](api/github/2026-10-26.json)
<!-- END GITHUB TRENDING -->




