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

**最后更新**: 2026-03-11 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 29.9k | 6.2k | 提供多个AI代理程序，每个代理具备特定技能和个性化处理流程，可应用于自动化任务、开发工作流及内容生成，支持多工具集成。 |
| 2 | [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | A Simple and Universal Swarm Intelligence Engine, ... | Python | 16.7k | 2.9k | MiroFish 是基于多智能体技术的AI预测引擎，通过构建数字世界模拟现实事件发展。支持上传文本材料生成预测报告，提供可交互的虚拟场景，适用于政策模拟与创意推演。 |
| 3 | [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) | Test your prompts, agents, and RAGs. Red teaming/p... | TypeScript | 12.5k | 728 | Promptfoo 是一个用于测试和红队攻击LLM应用的命令行工具和库，支持提示词、代理和RAG的评估，提供漏洞扫描、多模型性能对比（GPT、Claude、Gemini等）及CI/CD集成，强调本地运行和隐私安全。 |
| 4 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 78.0k | 1.5k | Superpowers 是一个基于 Shell 的代理技能框架，提供软件开发工作流自动化。通过可组合技能和 TDD/YAGNI/DRY 原则，实现需求分解、代码生成与测试的全流程管理，支持编码代理自主执行任务。 |
| 5 | [fishaudio/fish-speech](https://github.com/fishaudio/fish-speech) | SOTA Open Source TTS... | Python | 25.7k | 277 | Fish Speech 是由 Fish Audio 开发的开源文本到语音系统，采用强化学习对齐和双自回归架构，支持50种语言、多说话人及情感控制。通过自然语言标签实现细腻的语调与情绪调节，模型在多项基准测试中表现优异，适用于高质量语音合成场景。 |
| 6 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 48.1k | 633 | AI驱动的量化交易模拟系统，集成多个投资策略代理（如价值投资、成长投资、技术分析等），通过AI模型生成交易信号并模拟组合管理，项目仅用于教育研究目的。 |
| 7 | [alibaba/page-agent](https://github.com/alibaba/page-agent) | JavaScript in-page GUI agent. Control web interfac... | TypeScript | 4.7k | 1.2k | 阿里巴巴开源的JavaScript页面代理工具，通过自然语言控制网页交互。支持无需扩展的轻量级集成，基于文本操作DOM，可接入自定义大模型，提供人机协作界面及跨页扩展功能。 |
| 8 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 5.2k | 1.2k | Hermes-Agent 是一个自我进化的AI代理，具备学习循环、跨平台交互、多模型支持和终端界面。可自动创建技能并持续优化，支持Telegram/Discord等多平台通信，提供定时任务、并行处理及低成本部署方案。 |
| 9 | [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | Agentic IM Chatbot infrastructure that integrates ... | Python | 21.0k | 391 | AstrBot是开源的代理聊天机器人平台，集成多IM平台、LLMs和插件，支持QQ/微信/Telegram等多平台，提供AI对话、多模态、代理功能、1000+插件扩展及安全沙盒环境，适用于构建智能客服、个人助手等场景。 |

[查看完整数据](api/github/2026-03-11.json)
<!-- END GITHUB TRENDING -->








