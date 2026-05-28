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

**最后更新**: 2026-05-27 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用AI大模型，一键生成高清短视频 Generate short videos with one c... | Python | 61.9k | 1.7k | 这是一个基于 Python 的 AI 视频生成工具，采用 MVC 架构。用户只需输入主题，即可自动生成文案、素材、字幕和背景音乐，并合成高清视频。支持批量生成、多种尺寸及多种大模型接入，适合快速制作短视频内容。 |
| 2 | [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) | Graphs that teach > graphs that impress. Turn any ... | TypeScript | 39.7k | 4.5k | 这是一个 Claude Code 插件，利用多智能体管道将代码库、知识库或文档转化为交互式知识图谱。它通过可视化文件、函数、类和依赖关系，帮助开发者快速理解复杂的代码结构、业务逻辑及知识关联，支持搜索、探索和问答，旨在让开发者“看到大局”而非盲目阅读代码。 |
| 3 | [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop) | A skill file for removing AI tells from prose... | - | 5.7k | 664 | 这是一个用于移除 AI 写作痕迹（如填充词、陈词滥调、被动语态）的技能文件。它通过提供参考库和评分系统，教导 Claude 等大模型识别并修正文本中的“AI 味”，使散文更自然、直接且具有人类特征。 |
| 4 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 196.0k | 2.1k | ECC 是 Anthropic Hackathon 获胜者，专为 Claude Code、Cursor 等主流 AI 代理工具设计的性能优化系统。它提供了一套完整的操作员系统，包含技能管理、记忆持久化、持续学习和安全扫描等功能，旨在提升代理的开发效率和智能化水平。 |
| 5 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intend... | Python | 17.3k | 695 | Anthropics 开源的知识工作插件库，旨在将 Claude 定制为特定角色专家。通过集成各类工具（如 Slack、Jira）和自定义工作流，这些插件帮助知识工作者自动化任务、管理数据并提升团队协作效率，支持深度定制以适应公司特定流程。 |
| 6 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Taste-Skill - gives your AI good taste. stops the ... | Shell | 24.2k | 2.7k | Taste-Skill 是一个为 AI 代理设计的反垃圾前端框架，旨在提升 AI 生成界面的设计质量。它提供可移植的技能，包含布局、排版、动画等优化，并支持图像生成参考板。可与 ChatGPT Images、Codex 等工具配合，帮助 AI 构建更美观、非通用的用户界面。 |
| 7 | [p-e-w/heretic](https://github.com/p-e-w/heretic) | Fully automatic censorship removal for language mo... | Python | 22.0k | 211 | Heretic 是一个用于自动移除语言模型审查（安全对齐）的工具。它结合了方向消融技术和 Optuna 优化器，通过最小化拒绝率和 KL 散度自动寻找最佳参数。该方法无需人工干预，能生成保留原始模型智能的解密模型，支持多种模型架构，且效果优于人工消融。 |
| 8 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 26.9k | 401 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融数据的高噪声特性设计。它采用两阶段框架，首先将 OHLCV 数据量化为离散标记，再通过自回归 Transformer 进行预训练。该模型支持多种量化任务，已在 AAAI 2026 被接收，并提供了从 mini 到 large 的多种模型版本。 |
| 9 | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 754 structured cybersecurity skills for AI agents ... | Python | 10.9k | 886 | 这是一个开源的网络安全技能库，包含754个结构化技能，覆盖26个安全领域。它将技能映射到MITRE ATT&CK、NIST CSF 2.0、MITRE ATLAS、D3FEND和NIST AI RMF五个主流框架，遵循agentskills.io标准。旨在为AI代理提供资深分析师级别的安全指导，支持Claude Code、Copilot等多种平台。 |
| 10 | [twentyhq/twenty](https://github.com/twentyhq/twenty) | The open alternative to Salesforce, designed for A... | TypeScript | 47.3k | 519 | Twenty 是一个开源的 Salesforce 替代品，专为 AI 设计。它为技术团队提供构建自定义 CRM 的积木，允许通过代码定义对象、视图和工作流。支持云端、CLI 构建和自托管，旨在像其他技术栈一样快速适应业务需求。 |
| 11 | [Chachamaru127/claude-code-harness](https://github.com/Chachamaru127/claude-code-harness) | Claude Code Dedicated Development Harness - Achiev... | Shell | 1.8k | 87 | 这是一个为 Claude Code 设计的开发工具，旨在通过“计划→工作→审查→发布”的自律循环实现高质量开发。它将原始的代理工作转化为可重复的操作路径，通过规范编写、批准切片、验证结果和独立审查等步骤，确保代码质量和交付证据的完整性。 |
| 12 | [DigitalPlatDev/FreeDomain](https://github.com/DigitalPlatDev/FreeDomain) | DigitalPlat FreeDomain: Free Domain For Everyone... | HTML | 169.1k | 2.2k | DigitalPlat FreeDomain 是一个提供免费域名的项目，旨在让每个人都能拥有数字身份。它支持多种顶级域名扩展，用户可将其托管在 Cloudflare 等服务商。该项目由 DigitalPlat Foundation 维护，已注册超过 50 万个域名，致力于降低建站门槛。 |
| 13 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 209.5k | 1.5k | Superpowers 是一个为编码代理设计的完整软件开发方法论和技能框架。它通过引导用户定义规范、分解设计，并制定包含 TDD、YAGNI 和 DRY 原则的实现计划，实现代理的自主开发。支持多种主流 AI 编码工具，旨在让代理像拥有超能力一样高效工作。 |
| 14 | [byoungd/English-level-up-tips](https://github.com/byoungd/English-level-up-tips) | An advanced guide to learn English which might ben... | - | 46.6k | 1.2k | 这是一个结合个人备考经验的高效英语学习指南，特别新增了2026版AI章节。内容详细介绍了如何利用Gemini、ChatGPT等工具构建完整的听说读写训练回路，旨在帮助用户通过AI技术加速英语学习进程。 |
| 15 | [iii-hq/iii](https://github.com/iii-hq/iii) | Effortlessly compose, extend, and observe every se... | Rust | 16.8k | 376 | iii 是一个基于 Rust 的服务编排系统，采用 Worker-Function-Trigger 三大原语模型。它将队列、Cron、HTTP 等服务统一到一个实时系统表面，支持动态添加 Worker 和实时观察，旨在简化服务组合与扩展。 |
| 16 | [Axorax/awesome-free-apps](https://github.com/Axorax/awesome-free-apps) | Curated list of the best free apps for PC and mobi... | JavaScript | 5.9k | 728 | 这是一个精选的免费软件列表，涵盖 PC 和移动端各类应用。包含音频、开发、安全、视频等分类，标注平台支持、开源状态及推荐度，旨在帮助用户发现高质量免费替代方案。 |
| 17 | [moeru-ai/airi](https://github.com/moeru-ai/airi) | 💖🧸 Self hosted, you-owned Grok Companion, a cont... | TypeScript | 40.2k | 72 | AIRI 是一个自托管的 AI 虚拟主播伴侣项目，灵感来源于 Neuro-sama。它基于 TypeScript 开发，支持 Web、macOS 和 Windows 平台。项目具备实时语音聊天、游戏游玩（如 Minecraft 和 Factorio）、代码查看等功能。它集成了 RAG、记忆系统和 Live2D 工具，旨在为用户提供沉浸式的虚拟伴侣体验。 |

[查看完整数据](api/github/2026-05-27.json)
<!-- END GITHUB TRENDING -->




