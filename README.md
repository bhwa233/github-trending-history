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

**最后更新**: 2026-01-25 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Blaizzy/mlx-audio](https://github.com/Blaizzy/mlx-audio) | A text-to-speech (TTS), speech-to-text (STT) and s... | Python | 4.2k | 263 | 基于Apple MLX框架的音频处理库，支持TTS/STT/STS功能，优化Apple Silicon性能，提供多语言、语音克隆、量化模型及Web交互功能。 |
| 2 | [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 📑 PageIndex: Document Index for Vectorless, Reaso... | Python | 9.0k | 1.0k | PageIndex 是一种无需向量数据库或分块处理的推理型RAG系统，通过构建文档结构树索引并利用LLM进行上下文感知的树搜索检索，提升长文档检索的准确性与专业性。 |
| 3 | [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | 🎥 Make videos programmatically with React... | TypeScript | 30.6k | 1.1k | Remotion是一个基于React的程序化视频生成工具，允许开发者通过编程方式创建动态视频内容。支持组件化视频设计、动画合成及自动化渲染，适用于需要批量生成个性化视频的场景。 |
| 4 | [qarmin/czkawka](https://github.com/qarmin/czkawka) | Multi functional app to find duplicates, empty fol... | Rust | 28.5k | 60 | Czkawka是用Rust开发的多功能文件管理工具，支持查找重复文件、空文件夹、相似图片/视频、大文件等。具备多平台支持、隐私保护、缓存加速和CLI/GUI双模式，核心库可复用于其他应用。 |
| 5 | [OpenBMB/UltraRAG](https://github.com/OpenBMB/UltraRAG) | UltraRAG v3: A Low-Code MCP Framework for Building... | Python | 4.0k | 437 | UltraRAG v3是基于MCP架构的低代码RAG开发框架，通过YAML配置实现复杂流水线编排，标准化Retriever/Generation等组件为MCP服务器，支持条件分支、循环等控制结构，降低RAG开发门槛。 |
| 6 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 22.0k | 362 | VibeVoice是微软开源的语音AI框架，包含ASR和TTS模型。支持60分钟长音频实时转录与合成，具备多语言识别、说话人分离、时间戳标记等功能，采用低帧率语音分词器提升效率。 |
| 7 | [openai/codex](https://github.com/openai/codex) | Lightweight coding agent that runs in your termina... | Rust | 57.4k | 208 | OpenAI推出的轻量级本地编码代理，支持终端运行，提供代码生成与编辑功能。可通过ChatGPT账户或API密钥使用，兼容多平台二进制文件安装，强调本地化与高效开发体验。 |
| 8 | [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | Memory engine and app that is extremely fast, scal... | TypeScript | 14.7k | 159 | Supermemory是一款面向AI时代的高性能内存管理引擎，支持多源内容录入（URL/PDF/文本）、自然语言交互、AI工具集成及多平台扩展。提供网页应用、浏览器插件和Raycast扩展，适用于企业级数据整合与个性化记忆管理。 |
| 9 | [Psiphon-Inc/conduit](https://github.com/Psiphon-Inc/conduit) | Conduit React Native app... | TypeScript | 81 | 17 | Conduit是基于React Native开发的跨平台网络代理应用，集成psiphon-tunnel-core实现网络穿透功能，支持Android、iOS及Mac系统，采用TypeScript开发并使用Git LFS管理大型库文件。 |

[查看完整数据](api/github/2026-01-25.json)
<!-- END GITHUB TRENDING -->








