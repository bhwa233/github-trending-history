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

**最后更新**: 2026-01-24 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | 🎥 Make videos programmatically with React... | TypeScript | 29.5k | 1.2k | Remotion 是一个基于 React 的程序化视频生成工具，允许开发者通过代码创建动态视频内容。支持 TypeScript，提供视频渲染、动画处理和导出功能，适用于需要自动化生成视频的场景。 |
| 2 | [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 📑 PageIndex: Document Index for Vectorless, Reaso... | Python | 8.3k | 1.4k | PageIndex是一款无需向量数据库和分块处理的推理型RAG系统，通过构建文档结构树索引并利用LLM进行上下文感知的树搜索实现精准检索，模拟人类专家分析长文档的逻辑流程。 |
| 3 | [OpenBMB/UltraRAG](https://github.com/OpenBMB/UltraRAG) | UltraRAG v3: A Low-Code MCP Framework for Building... | Python | 3.4k | 591 | UltraRAG v3是基于MCP架构的低代码RAG开发框架，通过标准化Retriever、Generation等组件为MCP服务器，结合YAML配置实现复杂RAG流水线的快速构建，降低开发门槛并提升部署效率。 |
| 4 | [browser-use/browser-use](https://github.com/browser-use/browser-use) | 🌐 Make websites accessible for AI agents. Automat... | Python | 76.8k | 410 | 提供Python库实现AI代理自动化网页操作，支持云服务和隐身浏览器，简化在线任务流程。包含快速启动模板、LLM集成及沙盒部署方案。 |
| 5 | [block/goose](https://github.com/block/goose) | an open source, extensible AI agent that goes beyo... | Rust | 28.3k | 411 | block/goose 是一个用 Rust 编写的开源 AI 代理，可自动化开发任务，支持代码生成、调试、项目构建及 API 交互，兼容任意 LLM 并提供桌面与 CLI 工具。 |
| 6 | [Blaizzy/mlx-audio](https://github.com/Blaizzy/mlx-audio) | A text-to-speech (TTS), speech-to-text (STT) and s... | Python | 3.5k | 63 | 基于Apple MLX框架的音频处理库，支持文本转语音(TTS)、语音转文本(STT)和语音转语音(STS)。优化Apple Silicon芯片性能，提供多语言支持、语音克隆、速度控制及量化模型，兼容Python API与Web界面。 |
| 7 | [simstudioai/sim](https://github.com/simstudioai/sim) | Open-source platform to build and deploy AI agent ... | TypeScript | 26.1k | 78 | 开源AI代理工作流构建平台，支持可视化流程设计、自然语言生成节点、向量数据库集成，提供云端和自托管部署方案。 |
| 8 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 21.6k | 453 | VibeVoice是微软开源的前沿语音AI框架，包含ASR和TTS模型。支持60分钟长音频单次处理，生成带说话人、时间戳和内容的结构化转录，覆盖100+语言。采用7.5Hz超低帧率连续语音分词器，提升计算效率。提供实时语音合成与多语言风格语音生成能力。 |
| 9 | [putyy/res-downloader](https://github.com/putyy/res-downloader) | 视频号、小程序、抖音、快手、小红书、直播流、m3u8、酷狗、QQ音乐等常见网络资源下载!... | Go | 14.4k | 232 | 基于Go和Wails的跨平台资源下载工具，支持视频号、抖音、快手、小红书等平台的视频/音频/直播流等资源抓包与下载，提供代理设置、m3u8处理及多平台兼容性，界面简洁易用。 |
| 10 | [AI4Finance-Foundation/FinRobot](https://github.com/AI4Finance-Foundation/FinRobot) | FinRobot: An Open-Source AI Agent Platform for Fin... | Jupyter Notebook | 5.2k | 174 | FinRobot是一个基于大语言模型的金融分析开源平台，提供自动化报告生成、财务分析、估值评估及风险评估功能，支持市场预测和交易策略分析，适用于金融领域的智能化决策需求。 |

[查看完整数据](api/github/2026-01-24.json)
<!-- END GITHUB TRENDING -->








