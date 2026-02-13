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

**最后更新**: 2026-02-13 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [SynkraAI/aios-core](https://github.com/SynkraAI/aios-core) | Synkra AIOS: AI-Orchestrated System for Full Stack... | JavaScript | 404 | 105 | Synkra AIOS 是一个以CLI为核心的全栈开发AI编排框架，通过AI代理协作实现自动化开发流程。遵循CLI优先架构，提供可观测性监控和轻量级UI，支持软件开发、内容创作等多领域场景，强调通过AI代理生成完整技术文档与开发任务。 |
| 2 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 24.7k | 357 | ChromeDevTools/mcp 是一个基于TypeScript的Model-Context-Protocol服务器，允许AI编码助手（如Gemini、Copilot）通过Chrome DevTools实现浏览器自动化、性能分析和深度调试，支持网络请求分析、截图、console日志监控及puppeteer驱动的可靠自动化操作。 |
| 3 | [danielmiessler/Personal_AI_Infrastructure](https://github.com/danielmiessler/Personal_AI_Infrastructure) | Agentic AI Infrastructure for magnifying HUMAN cap... | TypeScript | 8.0k | 588 | Personal AI Infrastructure (PAI) 旨在通过AI增强人类自我发现能力，解决创造力激活难题。核心功能包括双阶段能力选择、思维工具优化和默认并行执行，注重用户个性化激活与开放获取，覆盖从基础聊天机器人到智能代理的多层级交互。 |
| 4 | [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) | In-depth tutorials on LLMs, RAGs and real-world AI... | Jupyter Notebook | 29.3k | 386 | 提供93+个AI工程实践项目，涵盖LLMs、RAG、AI代理等技术的教程与实战案例，包含从OCR识别到智能对话系统的多种应用场景，适合不同技能层级的开发者学习和项目开发。 |
| 5 | [TelegramMessenger/MTProxy](https://github.com/TelegramMessenger/MTProxy) | ... | C | 5.9k | 72 | MTProxy是Telegram的轻量级MT-Proto协议代理服务器，支持加密通信和流量中转。通过生成密钥和配置文件实现安全连接，可部署为Telegram客户端的中转节点，适用于需要稳定代理服务的场景。 |
| 6 | [google-deepmind/superhuman](https://github.com/google-deepmind/superhuman) | ... | TeX | 361 | 108 | Google DeepMind的Superhuman Reasoning团队开源项目，包含数学推理AI模型AlphaGeometry、IMO竞赛基准测试集和数学研究代理Aletheia，旨在推动AI在数学证明、问题求解和自动评估领域的发展。 |
| 7 | [cheahjs/free-llm-api-resources](https://github.com/cheahjs/free-llm-api-resources) | A list of free LLM inference resources accessible ... | Python | 10.6k | 442 | 整理了多个提供免费LLM API资源的服务商，包含模型列表、使用限制及试用额度信息，帮助开发者低成本访问大语言模型推理服务。 |
| 8 | [HandsOnLLM/Hands-On-Large-Language-Models](https://github.com/HandsOnLLM/Hands-On-Large-Language-Models) | Official code repo for the O'Reilly Book - "Hands-... | Jupyter Notebook | 21.1k | 318 | 该项目是O'Reilly书籍《Hands-On Large Language Models》的配套代码库，包含12章实践案例，涵盖语言模型基础、Transformer结构、文本生成、多模态模型等主题，通过Jupyter Notebook形式提供可运行代码与可视化示例。 |
| 9 | [THUDM/slime](https://github.com/THUDM/slime) | slime is an LLM post-training framework for RL Sca... | Python | 4.1k | 85 | slime是面向LLM强化学习训练的后处理框架，提供高性能多模式训练和灵活数据生成能力，支持Megatron与SGLang高效集成，适配多种大模型训练需求。 |
| 10 | [DebugSwift/DebugSwift](https://github.com/DebugSwift/DebugSwift) | A toolkit to make debugging iOS applications easie... | Swift | 1.4k | 50 | DebugSwift是面向iOS开发的调试工具包，提供网络监控、性能分析、崩溃追踪及可视化调试工具，支持HTTP/WebSocket抓包、实时性能指标、内存泄漏检测和SwiftUI渲染追踪，提升调试效率。 |

[查看完整数据](api/github/2026-02-13.json)
<!-- END GITHUB TRENDING -->








