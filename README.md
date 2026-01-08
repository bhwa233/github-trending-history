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

**最后更新**: 2026-01-08 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 19.3k | 314 | ChromeDevTools/mcp 是一个基于TypeScript的MCP服务器，允许AI编码助手（如Gemini、Claude）通过Chrome DevTools控制浏览器，实现自动化操作、性能分析和深度调试，集成puppeteer进行可靠浏览器控制。 |
| 2 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Shell | 53.4k | 510 | Claude Code是集成在终端的代理编程工具，通过自然语言指令执行代码任务、解释复杂逻辑、管理Git流程，支持多平台安装。提供插件扩展功能，注重数据隐私保护。 |
| 3 | [nothings/stb](https://github.com/nothings/stb) | stb single-file public domain libraries for C/C++... | C | 31.6k | 179 | stb项目提供一系列单文件C/C++库，涵盖图像处理、音频解码、字体渲染、数据结构等功能。包含图像加载/写入/缩放、字体解析、动态数组、音频合成等工具，适用于需要轻量级库的开发场景。 |
| 4 | [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | MiroThinker is an open-source search agent suite, ... | Python | 3.4k | 799 | MiroThinker是开源搜索代理套件，支持工具增强的推理与信息检索，提供多组件框架（MiroThinker、MiroFlow等），在HLE、BrowseComp等基准测试中表现优异，适用于复杂研究工作流。 |
| 5 | [protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf) | Protocol Buffers - Google's data interchange forma... | C++ | 70.2k | 61 | Protocol Buffers是Google的跨语言、跨平台数据序列化框架，支持结构化数据的高效交换。项目提供C++实现的协议编译器和运行时库，适用于分布式系统和微服务通信。 |
| 6 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 12.5k | 803 | Claude-Mem是为Claude Code设计的持久化记忆压缩插件，自动捕获编码会话中的工具使用记录，生成语义摘要并跨会话保存，支持上下文连续性维护、隐私控制及多场景检索，提升长期项目开发的上下文连贯性。 |
| 7 | [xpipe-io/xpipe](https://github.com/xpipe-io/xpipe) | Access your entire server infrastructure from your... | Java | 12.8k | 216 | XPipe是基于Java的连接枢纽，支持通过SSH、Docker、虚拟机、云服务器等多种方式集中管理远程资源，无需远程配置且可扩展性强，适用于开发及运维的多环境管理。 |
| 8 | [NVlabs/alpasim](https://github.com/NVlabs/alpasim) | ... | Python | 519 | 65 | AlpaSim是NVIDIA开源的自动驾驶研究模拟平台，支持闭环测试与传感器数据模拟，提供高保真视觉渲染、模块化架构及分布式计算能力，适用于算法验证、安全分析与性能测试。 |
| 9 | [Lissy93/web-check](https://github.com/Lissy93/web-check) | 🕵️‍♂️ All-in-one OSINT tool for analysing any web... | TypeScript | 29.0k | 640 | Lissy93/web-check 是一个基于TypeScript的全功能OSINT网站分析工具，提供IP信息、SSL证书、DNS记录、安全配置、技术栈识别等20+维度的网站洞察，支持潜在攻击面分析与安全优化。 |
| 10 | [google/googletest](https://github.com/google/googletest) | GoogleTest - Google Testing and Mocking Framework... | C++ | 37.9k | 119 | GoogleTest是Google的C++测试框架，提供xUnit架构支持，自动测试发现，丰富的断言功能（如相等性、异常等），支持自定义断言、死亡测试、参数化测试（值和类型参数化），可处理致命与非致命失败，适用于全面的单元测试和模拟测试场景。 |
| 11 | [apache/superset](https://github.com/apache/superset) | Apache Superset is a Data Visualization and Data E... | TypeScript | 69.8k | 50 | Apache Superset是现代化的企业级商业智能平台，提供数据可视化、无代码图表构建、SQL编辑器、多数据库支持及可扩展的安全架构，适用于大规模数据分析与动态报表场景。 |
| 12 | [memvid/memvid](https://github.com/memvid/memvid) | Memory layer for AI Agents. Replace complex RAG pi... | Rust | 11.7k | 465 | Memvid是基于Rust的AI代理单文件内存层，通过类似视频编码的帧结构实现即时检索与长期记忆。支持持久化、版本控制、时间回溯及高效压缩，替代传统RAG管道和数据库。 |
| 13 | [Lightricks/ComfyUI-LTXVideo](https://github.com/Lightricks/ComfyUI-LTXVideo) | LTX-Video Support for ComfyUI... | Python | 2.6k | 44 | ComfyUI-LTXVideo为ComfyUI提供LTX-2视频生成模型的扩展节点和工作流，支持文本/图像到视频生成、视频细节增强等功能，包含多种预训练模型和优化模块。 |
| 14 | [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | Memory infrastructure for LLMs and AI agents... | Python | 3.8k | 97 | MemU是面向LLM和AI代理的记忆框架，支持多模态输入处理，通过分层文件系统组织结构化记忆，提供RAG和LLM双模式检索，具备自适应进化能力。 |
| 15 | [HKUDS/VideoRAG](https://github.com/HKUDS/VideoRAG) | [KDD'2026] "VideoRAG: Chat with Your Videos"... | Python | 2.0k | 120 | VideoRAG是一款基于AI的视频智能分析工具，支持超长视频对话交互。通过VideoRAG框架实现视频内容理解与问答，具备多格式支持、跨平台特性及针对研究人员的基准数据集，可处理从短片段到数百小时的视频内容。 |

[查看完整数据](api/github/2026-01-08.json)
<!-- END GITHUB TRENDING -->








