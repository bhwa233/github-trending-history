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

**最后更新**: 2026-04-27 | **成功**: 12 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 30.1k | 5.6k | 这是一个为 Claude AI 提供的工程技能集合，旨在帮助开发者进行真实的工程实践而非“氛围编码”。它包含规划与设计（如生成PRD、设计界面）以及开发（如TDD、重构、架构改进）两大类技能，通过命令行工具集成，辅助开发者进行需求分析、代码编写、测试驱动开发及代码库优化。 |
| 2 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 31.5k | 1.1k | GitNexus 是一个零服务器的代码智能引擎，完全在浏览器中运行。它通过 Tree-sitter 将代码库索引为知识图谱，追踪依赖和调用链。支持 CLI 和 Web UI 两种模式，可与 AI 代理（如 Cursor）集成，提供深度的架构视图，确保 AI 不会遗漏代码细节，保护隐私。 |
| 3 | [ComposioHQ/awesome-codex-skills](https://github.com/ComposioHQ/awesome-codex-skills) | A curated list of practical Codex skills for autom... | Python | 2.8k | 637 | 这是一个精选的 Codex 技能列表，旨在通过模块化指令包自动化 Codex CLI 和 API 的工作流。项目提供了多种实用技能，涵盖开发、生产力、沟通等领域，支持邮件发送、Slack 发布等跨应用操作。用户可通过 Python 安装脚本或手动方式安装技能，Codex 会根据元数据自动触发执行。 |
| 4 | [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Use claude-code for free in the terminal, VSCode e... | Python | 16.0k | 3.0k | 这是一个开源代理工具，旨在让用户免费使用 Claude Code。它通过拦截 Anthropic API 调用，将其路由到 NVIDIA NIM、OpenRouter 或本地模型（如 LM Studio、Ollama）等替代服务。支持 VSCode、终端和 Discord，具备零成本、工具解析、智能限流等功能，无需修改 Claude Code 原有配置。 |
| 5 | [gastownhall/beads](https://github.com/gastownhall/beads) | Beads - A memory upgrade for your coding agent... | Go | 22.2k | 485 | Beads 是一个基于 Go 和 Dolt 数据库的分布式图问题追踪器，专为 AI 编码代理设计。它提供持久化、结构化的记忆系统，支持依赖感知的图结构、版本控制、零冲突 ID 及语义压缩，帮助代理处理长期任务并保持上下文。 |
| 6 | [penpot/penpot](https://github.com/penpot/penpot) | Penpot: The open-source design tool for design and... | Clojure | 46.6k | 283 | Penpot 是一个专为大规模团队设计的开源设计平台。支持自托管与合规性，利用 SVG、CSS、HTML 等开放标准。核心功能包括实时协作、设计即代码、Design Tokens 及 MCP 服务器，实现设计与代码的多向工作流，将设计系统与产品开发流程深度集成。 |
| 7 | [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI tool for configuring and monitoring Claude Cod... | Python | 25.8k | 181 | 处理失败 |
| 8 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 43.1k | 771 | VibeVoice 是微软开源的前沿语音 AI 框架，包含 ASR 和 TTS 模型。ASR 支持多语言长音频转录，输出结构化信息；TTS 支持多说话人长音频合成及实时流式生成。项目已集成至 Hugging Face Transformers，支持 vLLM 加速推理。 |
| 9 | [Z4nzu/hackingtool](https://github.com/Z4nzu/hackingtool) | ALL IN ONE Hacking Tool For Hackers... | Python | 67.1k | 1.8k | 这是一个基于 Python 3.10+ 开发的全功能黑客工具箱，集成了 185+ 种渗透测试工具。项目提供交互式菜单、标签过滤、智能更新及一键安装功能，涵盖信息收集、Web 攻击、无线攻击等多个安全领域，旨在简化渗透测试流程。 |
| 10 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 53.8k | 183 | TradingAgents 是一个基于 Python 的多智能体 LLM 金融交易框架。它模拟真实交易公司，通过基本面分析师、技术分析师、交易员和风险管理团队等智能体的协作与动态讨论，共同评估市场并制定交易策略。支持多种大模型提供商，适合金融交易研究。 |
| 11 | [CJackHwang/ds2api](https://github.com/CJackHwang/ds2api) | Deepseek to API: A lightweight, high-performance f... | Go | 1.8k | 144 | 这是一个将 DeepSeek Web 对话能力转换为 OpenAI、Claude 和 Gemini 兼容 API 的中间件。后端使用 Go 全量实现，前端为 React WebUI。支持多账户轮询、Docker 部署和 Vercel Serverless。具备 PromptCompat 内核、PoW 验证和工具调用解析等高级功能，旨在提供高性能的 API 转换服务。 |
| 12 | [deepseek-ai/DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) | ... | Python | 103.1k | 60 | DeepSeek-V3 是一个强大的混合专家（MoE）语言模型，拥有 671B 总参数和 37B 激活参数。它采用 Multi-head Latent Attention (MLA) 和 DeepSeekMoE 架构，引入无辅助损失负载均衡策略和多 Token 预测目标。在 14.8 万亿 token 上预训练后，其性能媲美顶尖闭源模型，且训练效率极高。 |
| 13 | [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer) | Learn how to design large-scale systems. Prep for ... | Python | 345.1k | 396 | 这是一个开源项目，旨在帮助工程师学习如何设计大规模系统，并为系统设计面试做准备。它包含丰富的学习资源、面试题库、解决方案以及基于间隔重复的 Anki 闪卡，帮助用户掌握系统设计核心概念。 |

[查看完整数据](api/github/2026-04-27.json)
<!-- END GITHUB TRENDING -->




