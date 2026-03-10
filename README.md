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

**最后更新**: 2026-03-10 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 25.1k | 6.2k | 提供可定制的AI代理工具集，包含前端开发、内容创作等专业角色，支持多平台集成。每个代理具备领域专长、个性化交互和可交付成果，适用于自动化任务和开发流程优化。 |
| 2 | [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | A Simple and Universal Swarm Intelligence Engine, ... | Python | 14.0k | 4.5k | MiroFish 是基于多智能体技术的群体智能预测引擎，通过构建数字世界模拟现实场景，支持金融、时政等领域的预测与决策推演。用户上传种子信息后，系统生成高保真数字世界并进行动态交互模拟，输出预测报告与可交互环境。 |
| 3 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 3.7k | 776 | Hermes-Agent 是一个由 Nous Research 开发的自我改进型 AI 代理，具备内置学习循环，可自主创建和优化技能、跨会话记忆存储、多平台交互（Telegram/CLI 等）、定时任务自动化及并行子代理处理能力，支持多种大模型接入且部署灵活。 |
| 4 | [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) | Test your prompts, agents, and RAGs. AI Red teamin... | TypeScript | 11.9k | 632 | Promptfoo 是用于评估和红队测试LLM应用的工具，支持提示词测试、模型性能比较、漏洞扫描及安全评估，强调本地化运行与数据安全，适用于CI/CD集成和多模型对比。 |
| 5 | [GoogleCloudPlatform/generative-ai](https://github.com/GoogleCloudPlatform/generative-ai) | Sample code and notebooks for Generative AI on Goo... | Jupyter Notebook | 15.7k | 534 | 该项目提供Google Cloud Vertex AI生成式AI的示例代码和Notebook，涵盖Gemini模型、Vertex AI Search、RAG技术、视觉生成（Imagen）及语音处理（Chirp）等场景，包含环境配置与实战案例。 |
| 6 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 47.5k | 293 | 该项目是一个AI驱动的对冲基金原型，通过多个模拟投资专家代理协同决策，整合估值、基本面、技术面及市场情绪分析，生成交易信号并管理风险，旨在教育研究AI在量化投资中的应用。 |
| 7 | [karpathy/nanochat](https://github.com/karpathy/nanochat) | The best ChatGPT that $100 can buy.... | Python | 46.2k | 709 | nanochat是一个低成本的LLM训练框架，可在单GPU上运行，支持从预训练到聊天界面的全流程。通过调整深度参数可快速训练出类似GPT-2的小型模型，显著降低计算成本。 |
| 8 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 76.5k | 1.4k | Superpowers 是一个基于可组合技能的代码代理开发框架，通过自动化工作流提升开发效率。核心功能包括需求拆解、设计确认、TDD实施及子代理协作开发，强调YAGNI和DRY原则，支持低人工干预的代码生成与测试。 |
| 9 | [alibaba/page-agent](https://github.com/alibaba/page-agent) | JavaScript in-page GUI agent. Control web interfac... | TypeScript | 3.6k | 895 | Page-Agent 是一个基于JavaScript的网页GUI代理工具，通过自然语言控制网页界面。支持无需扩展的轻量级集成，利用文本操作DOM实现交互，可对接自定义大模型，适用于SaaS产品中的AI助手场景。 |
| 10 | [sepinf-inc/IPED](https://github.com/sepinf-inc/IPED) | IPED Digital Forensic Tool. It is an open source s... | Java | 2.2k | 292 | IPED是基于Java的开源数字取证工具，支持多平台处理与分析犯罪现场或企业调查中的数字证据。提供命令行批量处理、高并发性能及多种磁盘镜像格式支持，可处理超大案例数据。 |
| 11 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | Your own personal AI assistant. Any OS. Any Platfo... | TypeScript | 298.1k | 9.1k | OpenClaw是跨平台个人AI助手，支持多消息渠道和操作系统，提供本地运行、快速响应和始终在线体验，通过CLI和图形界面控制。 |
| 12 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | JavaScript | 3.6k | 932 | Impeccable是面向AI的前端设计语言，提供17个指令命令和7个领域参考模板，解决AI设计中的常见问题。通过抗性模式和系统化技能库，提升UI设计的一致性、可访问性和专业性，支持从审计到优化的全流程设计管理。 |
| 13 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source SuperAgent harness that researches,... | Python | 28.5k | 1.4k | DeerFlow 是一个基于Python的开源超级代理框架，通过整合子代理、记忆模块、沙盒环境及工具链，实现复杂任务的自动化处理。支持多模型配置、智能搜索集成与长期记忆存储，适用于需要高效任务分解与执行的科研及开发场景。 |

[查看完整数据](api/github/2026-03-10.json)
<!-- END GITHUB TRENDING -->








