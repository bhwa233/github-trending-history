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

**最后更新**: 2026-01-22 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | 🎥 Make videos programmatically with React... | TypeScript | 26.9k | 518 | Remotion是一个基于React的视频生成工具，允许开发者通过编程方式创建动态视频内容。它结合TypeScript和React组件，实现自动化视频合成，适用于动态可视化、动画制作等场景。 |
| 2 | [block/goose](https://github.com/block/goose) | an open source, extensible AI agent that goes beyo... | Rust | 27.1k | 334 | block/goose是一个基于Rust的开源AI代理工具，可自动化代码生成、调试、项目构建及工作流编排。支持与任意大语言模型集成，提供CLI和桌面应用形式，适用于高效开发与工程任务自动化。 |
| 3 | [twitter/the-algorithm](https://github.com/twitter/the-algorithm) | Source code for the X Recommendation Algorithm... | Scala | 71.7k | 468 | X平台内容推荐算法核心代码，包含数据处理、机器学习模型和推荐框架，支持动态消息流、搜索、探索等场景，通过用户行为分析和图计算实现个性化推荐。 |
| 4 | [xai-org/grok-1](https://github.com/xai-org/grok-1) | Grok open release... | Python | 51.2k | 344 | Grok-1是基于JAX框架的314B参数大模型开源项目，采用Mixture of Experts架构，支持8位量化和激活分片。提供预训练权重加载与推理示例，适用于研究和开发场景。模型使用SentencePiece分词器，支持最大8192 tokens上下文。 |
| 5 | [deepseek-ai/FlashMLA](https://github.com/deepseek-ai/FlashMLA) | FlashMLA: Efficient Multi-head Latent Attention Ke... | C++ | 12.1k | 25 | FlashMLA是DeepSeek优化的多头潜在注意力内核库，支持稀疏与密集注意力机制，提升模型训练与推理效率。包含针对不同场景的优化 kernels，如FP8 KV缓存和SM100架构支持，性能可达660 TFlops以上。 |
| 6 | [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | The absolute trainer to light up AI agents.... | Python | 11.5k | 333 | Agent Lightning 是一个用于训练和优化AI代理的工具，支持多种代理框架（如LangChain、OpenAI、AutoGen等），无需或仅需少量代码修改即可应用强化学习、自动提示优化等算法，提升代理性能。 |
| 7 | [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | Free, local, open-source Cowork for Gemini CLI, Cl... | TypeScript | 9.2k | 562 | AionUi是支持多AI命令行工具的本地开源协作平台，提供统一图形界面、本地数据安全、智能文件管理及AI生成结果预览功能，兼容Gemini CLI、Qwen Code等主流工具，支持多会话与文件自动化处理。 |
| 8 | [mastra-ai/mastra](https://github.com/mastra-ai/mastra) | From the team behind Gatsby, Mastra is a framework... | TypeScript | 20.1k | 213 | Mastra是基于TypeScript的AI应用开发框架，提供模型路由、代理构建、工作流编排、人机交互和上下文管理功能，支持快速从原型到生产部署。 |
| 9 | [microsoft/Data-Science-For-Beginners](https://github.com/microsoft/Data-Science-For-Beginners) | 10 Weeks, 20 Lessons, Data Science for All!... | Jupyter Notebook | 32.8k | 660 | 微软推出的10周数据科学入门课程，包含20课时项目式教学，每课含测验、指导、解决方案与作业。支持50+语言翻译，通过GitHub Action自动化更新，适合零基础学习者系统掌握数据科学技能。 |
| 10 | [nexmoe/VidBee](https://github.com/nexmoe/VidBee) | Download videos from almost any website worldwide... | TypeScript | 4.6k | 262 | VidBee是一款基于Electron和yt-dlp的开源视频下载工具，支持全球1000+平台视频音频下载。提供可视化界面、RSS自动订阅下载、进度追踪及队列管理功能，适用于多平台视频批量获取与自动化管理。 |
| 11 | [virattt/dexter](https://github.com/virattt/dexter) | An autonomous agent for deep financial research... | TypeScript | 8.4k | 272 | Dexter是用于深度金融研究的自主代理，具备任务规划、实时数据分析和自我验证能力，可分解复杂金融问题并生成数据驱动的解决方案。 |

[查看完整数据](api/github/2026-01-22.json)
<!-- END GITHUB TRENDING -->








