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

**最后更新**: 2026-01-21 | **成功**: 8 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tambo-ai/tambo](https://github.com/tambo-ai/tambo) | Generative UI SDK for React... | TypeScript | 3.3k | 260 | Tambo是一个基于React的生成式UI开发工具包，通过自然语言处理技术实现动态界面生成。开发者可注册组件，AI根据用户指令自动选择并渲染对应组件，支持生成式和可交互组件两种模式，适用于需要个性化界面交互的场景。 |
| 2 | [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | Official Claude Code compound engineering plugin... | Python | 5.6k | 206 | Claude Code工程插件市场，提供工具提升工程工作效率。支持插件安装与管理，包含工作流规划、执行和审查功能，简化开发流程。 |
| 3 | [twitter/the-algorithm](https://github.com/twitter/the-algorithm) | Source code for the X Recommendation Algorithm... | Scala | 71.3k | 414 | X平台推荐算法核心代码，包含用户行为数据处理、机器学习模型和内容推荐框架，支持多产品场景的内容流生成与个性化推荐。 |
| 4 | [xai-org/grok-1](https://github.com/xai-org/grok-1) | Grok open release... | Python | 50.9k | 135 | 该项目提供Grok-1模型的JAX实现，支持314B参数的大规模语言模型运行，采用Mixture of Experts架构，具备RoPE、激活分片和8-bit量化等特性，需大内存GPU部署。 |
| 5 | [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | The absolute trainer to light up AI agents.... | Python | 11.2k | 514 | Agent Lightning 是一个用于训练和优化AI代理的工具，支持零代码更改优化代理性能，兼容多种代理框架（如LangChain、OpenAI、AutoGen等），并集成强化学习、自动提示优化等算法，提升代理效率。 |
| 6 | [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 📑 PageIndex: Document Index for Vectorless, Reaso... | Python | 6.1k | 110 | PageIndex是一款无需向量数据库和分块的RAG系统，通过构建文档层次树索引并利用LLM进行推理检索，模拟人类专家处理长文档的逻辑，实现更精准的上下文相关检索。 |
| 7 | [microsoft/Data-Science-For-Beginners](https://github.com/microsoft/Data-Science-For-Beginners) | 10 Weeks, 20 Lessons, Data Science for All!... | Jupyter Notebook | 32.2k | 114 | 微软推出的10周数据科学入门课程，包含20个模块化课程，提供测验、指导文档、解决方案及作业，采用项目驱动教学法，支持多语言自动翻译，适合初学者系统学习数据科学。 |
| 8 | [tobi/try](https://github.com/tobi/try) | fresh directories for every vibe... | Shell | 3.1k | 193 | try 是一个用于快速创建和管理实验目录的工具，通过智能模糊搜索、自动命名及排序功能，帮助开发者高效组织临时项目。支持零配置运行，所有实验目录统一管理，避免文件散乱。 |

[查看完整数据](api/github/2026-01-21.json)
<!-- END GITHUB TRENDING -->








