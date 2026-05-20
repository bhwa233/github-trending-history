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

**最后更新**: 2026-05-19 | **成功**: 18 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Your Personal AI super intelligence. Private, Simp... | Rust | 21.1k | 4.0k | OpenHuman 是一个基于 Rust 的个人 AI 超级智能，主打私密与简单。它提供桌面 UI 体验，拥有可交互的桌面吉祥物。支持 118+ 第三方应用（如 Gmail、Notion）的一键集成，具备自动数据获取能力。核心特色是 Memory Tree 本地知识库和 Obsidian Wiki 集成，能将数据转化为结构化记忆，让 AI 在后台持续思考，无缝融入日常生活。 |
| 2 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 37.7k | 1.0k | CLI-Anything 旨在连接 AI 代理与各类软件，通过 CLI-Hub 提供社区 CLI 的安装与管理，使 Claude Code、Cursor 等代理能够通过命令行自动化处理 CAD、GIS、3D 建模等任务。 |
| 3 | [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | Academic Research Skills for Claude Code: research... | Python | 14.1k | 3.2k | 这是一个为 Claude Code 设计的学术研究技能套件，涵盖从研究到出版的全流程。它利用 AI 处理引用、格式化和数据验证等繁琐工作，同时通过风格校准和写作质量检查提升文本质量。项目强调“人在回路”模式，旨在辅助人类研究者避免全自动化系统常见的幻觉和逻辑错误，专注于核心研究决策。 |
| 4 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 198.3k | 1.6k | Superpowers 是一个为编码代理设计的软件开发框架。它通过技能组合，引导代理从需求收集、设计审查到实施计划（强调 TDD、YAGNI、DRY），最后进行子代理驱动的开发。它支持多种主流 AI 编码工具，旨在让代理自主高效地完成复杂工程任务。 |
| 5 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 20.2k | 171 | Anthropic 官方维护的 Claude Code 插件目录，包含内部开发及第三方社区插件。提供标准插件结构规范，支持通过 Claude Code 系统直接安装。用户需注意安全，在安装前确认插件来源及安全性。 |
| 6 | [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | #1 Persistent memory for AI coding agents based on... | TypeScript | 14.1k | 1.6k | 这是一个为 AI 编码代理提供持久化内存的开源项目。基于 iii engine 构建，扩展了 Karpathy 的 LLM Wiki 模式，增加了置信度评分、生命周期管理和知识图谱等功能。支持 Claude Code、Cursor、Gemini CLI 等主流 AI 编码工具，通过 MCP 或 Hooks 实现无缝连接，让 AI 代理能够记住上下文，无需重复解释。 |
| 7 | [CloakHQ/CloakBrowser](https://github.com/CloakHQ/CloakBrowser) | Stealth Chromium that passes every bot detection t... | Python | 16.6k | 1.5k | 这是一个通过所有机器人检测测试的隐身 Chromium 浏览器，通过修改 C++ 源代码实现。它作为 Playwright/Puppeteer 的零配置替代品，内置 49 个源级补丁和人类行为模拟，能轻松绕过 Cloudflare Turnstile 和 reCAPTCHA 等反爬虫检测，适合自动化测试和爬虫开发。 |
| 8 | [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | CLI proxy that reduces LLM token consumption by 60... | Rust | 50.9k | 704 | 这是一个用 Rust 编写的 CLI 代理工具，通过过滤和压缩命令输出，显著减少 LLM 的 token 消耗（最高达 90%）。它支持 100+ 个常用开发命令（如 git、ls、cat 等），且开销极低（<10ms）。作为单二进制文件，它无需依赖，非常适合在开发过程中与 AI 助手协作以节省成本。 |
| 9 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 101.6k | 1.1k | 该项目提供了一套完整的 AI 代理集合，专为 Claude Code 等开发工具设计。包含前端开发、社区管理等不同领域的专业代理，每个代理拥有独特性格和流程。通过 Shell 脚本一键安装，帮助开发者快速获得特定领域的专家级辅助。 |
| 10 | [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | Pre-indexed code knowledge graph for Claude Code, ... | TypeScript | 6.6k | 1.9k | CodeGraph 是一个为 Claude Code、Cursor、Codex 和 OpenCode 提供预索引代码知识图谱的工具。它通过构建符号关系和调用图，让 AI 代理无需扫描文件即可快速查询代码库。该工具能显著减少工具调用次数（最高 94%）并加快探索速度（最高 77%），且完全本地化运行。 |
| 11 | [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 137.9k | 2.0k | 该项目是一个基于 Andrej Karpathy 关于 LLM 编码陷阱观察的 CLAUDE.md 配置文件。旨在通过“思考、简单、手术式更改、目标驱动”四大原则，指导 Claude Code 避免错误假设、过度复杂化和破坏性变更，提升代码质量与执行效率。 |
| 12 | [humanlayer/12-factor-agents](https://github.com/humanlayer/12-factor-agents) | What are the principles we can use to build LLM-po... | TypeScript | 21.2k | 736 | 受 12-Factor Apps 启发，该项目旨在为构建生产级 LLM 应用提供核心原则。作者指出真正的 AI 代理应主要由软件逻辑而非简单的 Prompt 循环组成。项目致力于探索如何构建可靠、可扩展且易于维护的 LLM 驱动软件，解决当前市场上许多产品缺乏真正代理能力的痛点。 |
| 13 | [Diolinux/PhotoGIMP](https://github.com/Diolinux/PhotoGIMP) | A Patch for GIMP 3+ for Photoshop Users... | CSS | 10.8k | 493 | PhotoGIMP 是一个针对 GIMP 3+ 的社区驱动补丁，旨在将 GIMP 的界面转换为类似 Photoshop 的布局。它重新组织了工具位置，优化了画布空间，并应用了 Photoshop 的键盘快捷键和自定义图标，帮助用户从 Photoshop 平滑过渡到 GIMP。 |
| 14 | [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Use claude-code for free in the terminal, VSCode e... | Python | 26.4k | 563 | 这是一个开源代理工具，允许用户免费使用 Claude Code CLI、VSCode 扩展和 Discord 机器人。它将 Anthropic API 流量路由到 NVIDIA NIM、DeepSeek、Ollama 等多个免费或本地模型提供商，支持流式传输、工具调用和推理处理，并提供本地管理界面。 |
| 15 | [pascalorg/editor](https://github.com/pascalorg/editor) | Create and share 3D architectural projects.... | TypeScript | 15.9k | 110 | 这是一个基于 React Three Fiber 和 WebGPU 的 3D 建筑编辑器。项目采用 Turborepo Monorepo 架构，包含核心逻辑、3D 渲染和 UI 工具三个主要包。利用 Zustand 进行状态管理，支持节点系统、撤销重做及 IndexedDB 持久化，旨在帮助用户创建和分享 3D 建筑项目。 |
| 16 | [frappe/erpnext](https://github.com/frappe/erpnext) | Free and Open Source Enterprise Resource Planning ... | Python | 34.3k | 98 | ERPNext 是一个基于 Python 和 Vue.js 的 100% 开源企业资源规划系统。它集成了会计、订单管理、制造、资产管理和项目管理等核心功能，旨在帮助用户免费高效地处理复杂的业务运营。 |
| 17 | [microsoft/ai-agents-for-beginners](https://github.com/microsoft/ai-agents-for-beginners) | 12 Lessons to Get Started Building AI Agents... | Jupyter Notebook | 64.3k | 818 | 这是一个由微软提供的 AI Agents 入门课程，包含12个教学单元。项目使用 Jupyter Notebook 格式，旨在帮助初学者掌握构建 AI Agents 的基础知识。课程支持超过50种语言的自动翻译，内容涵盖生成式 AI 模型的基础介绍。适合零基础开发者学习如何创建智能代理。 |
| 18 | [HKUDS/ViMax](https://github.com/HKUDS/ViMax) | "ViMax: Agentic Video Generation (Director, Screen... | Python | 5.4k | 503 | ViMax 是一个基于 Python 的全流程 AI 视频生成项目，旨在解决现有工具短片段、缺乏叙事连贯性的痛点。它集成了导演、编剧、制片人和生成器功能，提供 Idea2Video、Novel2Video、Script2Video 和 AutoCameo 四大核心模块，支持从创意到成片的端到端自动化。 |

[查看完整数据](api/github/2026-05-19.json)
<!-- END GITHUB TRENDING -->




