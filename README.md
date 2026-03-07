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

**最后更新**: 2026-03-07 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | A Simple and Universal Swarm Intelligence Engine, ... | Python | 5.6k | 345 | MiroFish 是基于多智能体技术的群体智能预测引擎，通过构建数字世界模拟现实场景，支持政策、舆情、文学结局等多领域预测。用户上传种子信息后，系统生成可交互的数字世界并推演未来可能性，提供深度预测报告。 |
| 2 | [openai/skills](https://github.com/openai/skills) | Skills Catalog for Codex... | Python | 12.7k | 947 | OpenAI的Skills项目为Codex提供技能目录管理，通过结构化指令、脚本和资源实现AI代理任务自动化。支持技能安装、版本管理和跨平台复用，包含Curated和Experimental两类技能库，提供标准化技能分发方案。 |
| 3 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 10.7k | 1.5k | 该项目提供了一系列预定义的AI代理，涵盖前端开发、后端架构、移动应用开发等角色，每个代理具备特定技能和个性化的任务处理流程，适用于需要多领域AI协作的开发场景。 |
| 4 | [GoogleCloudPlatform/generative-ai](https://github.com/GoogleCloudPlatform/generative-ai) | Sample code and notebooks for Generative AI on Goo... | Jupyter Notebook | 13.5k | 348 | 该项目提供Google Cloud Vertex AI生成式AI的示例代码和Jupyter笔记本，涵盖Gemini大模型、AI搜索、RAG技术、图像/音频生成等场景，包含环境配置和开发指南。 |
| 5 | [agentjido/jido](https://github.com/agentjido/jido) | 🤖 Autonomous agent framework for Elixir. Built fo... | Elixir | 1.4k | 138 | Jido是Elixir的自主代理框架，基于OTP构建分布式、自动化工作流。通过纯函数代理和指令系统实现状态管理与副作用分离，支持可组合的AI工具集成与动态任务编排。 |
| 6 | [QwenLM/Qwen-Agent](https://github.com/QwenLM/Qwen-Agent) | Agent framework and applications built upon Qwen>=... | Python | 15.0k | 586 | Qwen-Agent是基于Qwen大模型的智能代理框架，支持函数调用、MCP、RAG、代码解释器等功能，提供浏览器助手、代码执行等应用场景，兼容多版本模型并集成工具调用能力。 |
| 7 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 46.6k | 248 | 该项目是一个AI对冲基金的原型，通过多个模拟不同投资策略的AI代理（如价值投资、成长投资、技术分析等）协同工作，分析市场数据、基本面、技术面及情绪，生成交易信号并进行风险管理，但明确声明仅用于教育和研究，不进行实际交易。 |
| 8 | [microsoft/hve-core](https://github.com/microsoft/hve-core) | A refined collection of Hypervelocity Engineering ... | PowerShell | 743 | 217 | HVE Core是面向GitHub Copilot的提示工程框架，提供约束型AI工作流、验证工件及RPI方法论，通过结构化组件提升开发效率。支持PowerShell脚本集成，适用于企业级AI工程化场景。 |
| 9 | [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | There can be more than Notion and Miro. AFFiNE(pro... | TypeScript | 64.7k | 264 | AFFiNE是一个隐私优先的开源知识库平台，整合文档、画布和数据库，支持实时协作与本地存储。内置多模态AI助手，提供创意写作、思维导图、任务规划等功能，适用于需要高度定制和数据自主的知识管理场景。 |
| 10 | [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | A set of beautifully-designed, accessible componen... | TypeScript | 108.2k | 102 | shadcn-ui/ui 是一个基于 TypeScript 的开源 UI 组件库，提供美观且可访问的组件，支持多框架使用，便于快速构建用户界面。 |
| 11 | [alibaba/page-agent](https://github.com/alibaba/page-agent) | JavaScript in-page GUI agent. Control web interfac... | TypeScript | 1.3k | 104 | Page-Agent是基于JavaScript的网页GUI代理工具，通过自然语言控制网页界面，无需扩展或后端支持。支持直接DOM操作与自定义LLM集成，提供人机交互UI，适用于SaaS AI助手、表单自动化及无障碍场景。 |

[查看完整数据](api/github/2026-03-07.json)
<!-- END GITHUB TRENDING -->








