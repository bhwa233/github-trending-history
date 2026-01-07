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

**最后更新**: 2026-01-07 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 11.9k | 674 | Claude-Mem是为Claude Code设计的插件，通过自动捕获编码行为、AI压缩和上下文注入，实现跨会话的持久化记忆管理，支持智能搜索与隐私控制，提升代码开发连续性。 |
| 2 | [google/googletest](https://github.com/google/googletest) | GoogleTest - Google Testing and Mocking Framework... | C++ | 37.8k | 8 | GoogleTest是Google的C++测试框架，提供xUnit架构、自动测试发现、丰富断言库、自定义断言、死亡测试、参数化测试等功能，支持C++17及以上版本，适用于单元测试与模拟测试场景。 |
| 3 | [Lissy93/web-check](https://github.com/Lissy93/web-check) | 🕵️‍♂️ All-in-one OSINT tool for analysing any web... | TypeScript | 28.5k | 800 | Web-check 是一个基于TypeScript的开源情报（OSINT）工具，提供网站全面分析功能，包括IP信息、SSL证书、DNS记录、安全配置、技术栈检测等，帮助用户识别攻击向量、优化网站性能及增强安全性。 |
| 4 | [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | Microsoft PowerToys is a collection of utilities t... | C# | 127.6k | 337 | Microsoft PowerToys 是一组 Windows 系统增强工具，提供超过 25 个实用功能，涵盖剪贴板管理、窗口布局、快捷键定制、屏幕截图等，旨在提升用户操作效率与系统自定义能力。 |
| 5 | [protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf) | Protocol Buffers - Google's data interchange forma... | C++ | 70.2k | 135 | Protocol Buffers是Google开发的跨语言、跨平台的数据序列化框架，支持结构化数据的高效编码与解码。项目提供编译器和多种语言的运行时库，适用于分布式系统和网络通信场景。 |
| 6 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 19.0k | 107 | ChromeDevTools/mcp项目为AI编码代理提供Chrome浏览器控制与调试能力，支持性能分析、网络请求监控、自动化操作等功能，通过Model-Context-Protocol协议实现与AI助手的交互。 |
| 7 | [memvid/memvid](https://github.com/memvid/memvid) | Memory layer for AI Agents. Replace complex RAG pi... | Rust | 11.4k | 232 | Memvid是用Rust开发的AI代理单文件内存层，通过类似视频编码的智能帧结构实现即时检索与长期记忆。支持版本控制、时间回溯、高效压缩和无服务器部署，替代传统RAG管道和向量数据库。 |
| 8 | [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) | In-depth tutorials on LLMs, RAGs and real-world AI... | Jupyter Notebook | 25.2k | 257 | AI Engineering Hub 提供93+个生产级AI项目教程，涵盖LLMs、RAG、AI代理等技术，包含OCR、聊天界面等实际应用场景，适合不同技能水平的开发者学习和实践。 |
| 9 | [DrewThomasson/ebook2audiobook](https://github.com/DrewThomasson/ebook2audiobook) | Generate audiobooks from e-books, voice cloning & ... | Python | 16.6k | 104 | ebook2audiobook是一款将电子书转换为有声书的工具，支持1158种语言和语音克隆功能。基于Python开发，集成XTTSv2、Bark等多款TTS模型，可分割章节并保留元数据，提供GUI界面和本地/远程运行方式。 |
| 10 | [marcelscruz/public-apis](https://github.com/marcelscruz/public-apis) | A collaborative list of public APIs for developers... | JavaScript | 7.3k | 461 | 一个由开发者维护的公共API集合项目，涵盖动物、动漫、区块链、金融等多个领域，提供API名称、描述、认证方式及协议信息，便于开发者快速查找和调用各类API服务。 |
| 11 | [prateek-chaubey/YTPro](https://github.com/prateek-chaubey/YTPro) | Youtube client with older Android version support,... | JavaScript | 1.4k | 219 | YTPro是一个支持旧版Android的YouTube客户端，提供后台播放、Google Gemini集成等特性，致力于提升老旧设备的YouTube使用体验。 |
| 12 | [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | MiroThinker is a series of open-source search agen... | Python | 2.6k | 509 | MiroThinker是开源搜索代理项目，专注于工具增强型推理与信息获取，支持复杂研究工作流。包含搜索代理模型、研究框架、训练数据集及训练基础设施，多版本在HLE、BrowseComp等基准测试中表现领先。 |
| 13 | [anthropics/prompt-eng-interactive-tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) | Anthropic's Interactive Prompt Engineering Tutoria... | Jupyter Notebook | 28.4k | 174 | Anthropic的交互式提示工程教程，包含9章实践课程，涵盖基础结构、清晰指令、角色分配、避免幻觉等主题，通过Jupyter Notebook提供示例与练习，帮助用户掌握优化提示技巧。 |

[查看完整数据](api/github/2026-01-07.json)
<!-- END GITHUB TRENDING -->








