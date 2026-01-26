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

**最后更新**: 2026-01-26 | **成功**: 8 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Blaizzy/mlx-audio](https://github.com/Blaizzy/mlx-audio) | A text-to-speech (TTS), speech-to-text (STT) and s... | Python | 5.1k | 1.2k | 基于Apple MLX框架的音频处理库，支持TTS、STT、STS功能，优化Apple Silicon性能，提供多语言、语音克隆、量化模型及Web交互功能。 |
| 2 | [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 📑 PageIndex: Document Index for Vectorless, Reaso... | Python | 9.7k | 731 | PageIndex 是一种无需向量数据库或分块的推理型RAG系统，通过构建文档分层树索引，利用大语言模型进行上下文感知的精准检索，模拟人类专家分析长文档的逻辑流程。 |
| 3 | [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | Memory engine and app that is extremely fast, scal... | TypeScript | 15.1k | 418 | Supermemory是面向AI时代的高性能内存引擎，支持多格式内容添加、自然语言聊天查询，集成Claude等主流AI工具，提供浏览器与Raycast扩展实现快速信息管理。 |
| 4 | [block/goose](https://github.com/block/goose) | an open source, extensible AI agent that goes beyo... | Rust | 29.1k | 295 | block/goose是用Rust开发的开源AI代理，支持代码自动化开发、测试及工程流程管理，可集成任意LLM并执行构建、调试、API交互等复杂任务，适用于快速原型设计与工程管道优化。 |
| 5 | [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | 🎥 Make videos programmatically with React... | TypeScript | 31.9k | 1.4k | Remotion 是一个基于 React 的程序化视频生成工具，允许开发者通过代码创建动态视频内容。支持 TypeScript，提供组件化开发方式，适用于自动化视频合成和动态视觉创作。 |
| 6 | [AI4Finance-Foundation/FinRobot](https://github.com/AI4Finance-Foundation/FinRobot) | FinRobot: An Open-Source AI Agent Platform for Fin... | Jupyter Notebook | 5.6k | 173 | FinRobot是面向金融分析的开源AI代理平台，整合大语言模型与AI技术，提供自动化股权研究、财务分析、风险评估及报告生成，支持市场预测与交易策略优化。 |
| 7 | [k4yt3x/video2x](https://github.com/k4yt3x/video2x) | A machine learning-based video super resolution an... | C++ | 18.0k | 473 | 基于机器学习的视频超分辨率与帧插值框架，支持C++重写后的跨平台处理，提供Anime4K、Real-ESRGAN等模型，具备GUI界面和高效处理能力。 |
| 8 | [business-science/ai-data-science-team](https://github.com/business-science/ai-data-science-team) | An AI-powered data science team of agents to help ... | Python | 4.1k | 164 | AI Data Science Team 是一个Python库，提供AI驱动的数据科学代理工具，支持数据加载、清洗、可视化、建模等流程。配套的AI Pipeline Studio提供可视化工作流管理，结合Streamlit、H2O和MLflow实现高效数据科学项目开发。 |

[查看完整数据](api/github/2026-01-26.json)
<!-- END GITHUB TRENDING -->








