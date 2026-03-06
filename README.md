# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 使用 Cloudflare Workers AI 生成项目核心功能总结、技术栈和适用场景
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
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct)
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 配置环境变量
export CLOUDFLARE_ACCOUNT_ID=your_account_id
export CLOUDFLARE_API_KEY=your_api_key

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

**最后更新**: 2026-03-06 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [moeru-ai/airi](https://github.com/moeru-ai/airi) | 💖🧸 Self hosted, you-owned Grok Companion, a cont... | TypeScript | 29.5k | 2.5k | Airi 是一个自托管的AI虚拟伴侣项目，旨在复刻Neuro-sama功能，支持实时语音聊天、Minecraft/Factorio游戏互动，提供跨平台（Web/macOS/Windows）体验。基于大型语言模型构建，强调用户数据所有权和本地化部署。 |
| 2 | [QwenLM/Qwen-Agent](https://github.com/QwenLM/Qwen-Agent) | Agent framework and applications built upon Qwen>=... | Python | 14.6k | 684 | Qwen-Agent是基于Qwen大模型的代理框架，支持函数调用、MCP规划、代码解释器、RAG检索增强生成等功能，提供浏览器助手、代码解析等应用示例，适用于需要多工具协同的LLM应用开发。 |
| 3 | [microsoft/hve-core](https://github.com/microsoft/hve-core) | A refined collection of Hypervelocity Engineering ... | PowerShell | 541 | 275 | HVE Core是针对GitHub Copilot的提示工程框架，提供约束型AI工作流、验证工件及RPI方法论，将工程任务分解为研究、计划、实施阶段，通过JSON Schema验证确保AI输出的可靠性，适用于团队协作的结构化AI开发场景。 |
| 4 | [Ed1s0nZ/CyberStrikeAI](https://github.com/Ed1s0nZ/CyberStrikeAI) | CyberStrikeAI is an AI-native security testing pla... | Go | 1.6k | 138 | CyberStrikeAI是用Go开发的AI原生安全测试平台，集成100+安全工具与智能编排引擎，支持角色化测试、技能系统及全生命周期管理。通过MCP协议与AI代理实现从命令到漏洞发现的端到端自动化，提供攻击链分析、风险评分、可视化结果及审计追踪功能。 |
| 5 | [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL) | Lightning-Fast RL for LLM Reasoning and Agents. Ma... | Python | 4.4k | 348 | AReaL是一个面向大模型推理和智能体的开源异步强化学习系统，支持灵活定制和高速可扩展训练，具备数学、编码、搜索等场景的前沿性能，提供完整训练数据和基础设施以降低AI代理开发门槛。 |
| 6 | [lingfengQAQ/webnovel-writer](https://github.com/lingfengQAQ/webnovel-writer) | 基于 Claude Code 的长篇网文辅助创作系统，解决 AI 写作中的「遗忘」和「幻觉」问题，支... | Python | 762 | 84 | 基于Claude Code的长篇网文创作系统，通过RAG技术解决AI写作的遗忘与幻觉问题，支持200万字级连载。提供可视化面板、追读力系统及智能上下文管理，适用于需要长期内容创作的网络小说场景。 |
| 7 | [openai/skills](https://github.com/openai/skills) | Skills Catalog for Codex... | Python | 11.9k | 582 | OpenAI的Skills项目为Codex提供可重复使用的技能目录，支持AI代理通过标准化指令、脚本和资源完成特定任务。包含技能安装、管理及分发机制，促进团队与个人能力封装与共享。 |
| 8 | [TheCraigHewitt/seomachine](https://github.com/TheCraigHewitt/seomachine) | A specialized Claude Code workspace for creating l... | Python | 2.1k | 675 | SEO Machine 是基于 Claude Code 的专业 SEO 内容创作工具，提供从关键词研究到内容优化的全流程解决方案。集成 NLP 分析、SEO 检测、数据可视化等功能，支持自动化撰写、优化及性能分析，提升博客内容搜索排名与用户匹配度。 |
| 9 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 46.3k | 82 | 该项目是一个AI驱动的对冲基金模拟系统，整合了15种经典投资策略，通过多代理协同实现基本面分析、技术分析、情绪判断和风险管理，所有决策均为模拟场景下的教育性研究。 |
| 10 | [aidenybai/react-grab](https://github.com/aidenybai/react-grab) | Select context for coding agents directly from you... | TypeScript | 6.0k | 442 | react-grab 是一个用于快速提取网页代码上下文的工具，通过快捷键复制React组件、文件名及HTML源码，提升代码代理工具的效率。支持Next.js、Vite等框架，提供浏览器端实时上下文捕获功能。 |
| 11 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | - | 9.8k | 2.9k | 提供多种AI代理模板，涵盖前端开发、后端架构、移动应用开发等场景，每个代理具备专业技能和个性化沟通方式，可直接调用或参考实现。 |

[查看完整数据](api/github/2026-03-06.json)
<!-- END GITHUB TRENDING -->








