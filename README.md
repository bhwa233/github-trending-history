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

**最后更新**: 2026-02-14 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tambo-ai/tambo](https://github.com/tambo-ai/tambo) | Generative UI SDK for React... | TypeScript | 9.6k | 137 | Tambo 是一个基于 React 的生成式 UI 开发工具包，通过 Zod 模式注册组件，实现自然语言指令与 UI 的动态交互。支持流式传输组件属性、状态管理及多模型协议（如 OpenAI、Anthropic 等），提供云端和自托管后端方案。 |
| 2 | [SynkraAI/aios-core](https://github.com/SynkraAI/aios-core) | Synkra AIOS: AI-Orchestrated System for Full Stack... | JavaScript | 596 | 223 | Synkra AIOS 是一个以CLI为核心的AI编排框架，通过代理协作实现全栈开发自动化。支持AI驱动的规划与上下文感知开发，强调CLI优先架构，提供可观测性监控和轻量级UI辅助，适用于需要AI增强的软件开发流程。 |
| 3 | [rowboatlabs/rowboat](https://github.com/rowboatlabs/rowboat) | Open-source AI coworker, with memory... | TypeScript | 6.0k | 226 | Rowboat是一款开源AI协作工具，通过构建知识图谱实现工作流程自动化。它可连接邮箱和会议记录，长期存储工作上下文，支持生成文档、会议准备、知识图谱可视化等功能，所有数据本地存储且兼容Markdown格式。 |
| 4 | [minio/minio](https://github.com/minio/minio) | MinIO is a high-performance, S3 compatible object ... | Go | 60.3k | 37 | MinIO是一个高性能的S3兼容对象存储服务，采用Go语言开发，支持AI/ML、大数据分析等场景。提供高扩展性和低延迟特性，遵循AGPLv3开源协议，适用于需要分布式存储和大规模数据处理的场景。 |
| 5 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 25.1k | 326 | ChromeDevTools MCP项目为AI编码代理提供Chrome浏览器的控制与调试能力，支持性能分析、网络请求监控、自动化操作等功能，基于TypeScript开发，整合Chrome DevTools和Puppeteer实现可靠浏览器交互。 |
| 6 | [alibaba/zvec](https://github.com/alibaba/zvec) | A lightweight, lightning-fast, in-process vector d... | C++ | 1.2k | 186 | Zvec是阿里开源的轻量级嵌入式向量数据库，支持高速相似性搜索，可直接集成到应用中。特性包括密集/稀疏向量处理、混合搜索、低延迟和跨平台运行，适用于需要快速向量检索的场景。 |
| 7 | [ruvnet/wifi-densepose](https://github.com/ruvnet/wifi-densepose) | Production-ready implementation of InvisPose - a r... | Python | 6.1k | 83 | 基于WiFi的隐私保护实时人体姿态估计系统，通过CSI数据和ML实现非接触式全身追踪，支持多人检测与低延迟处理，适用于医疗、智能家居等场景。 |
| 8 | [Zipstack/unstract](https://github.com/Zipstack/unstract) | No-code LLM Platform to launch APIs and ETL Pipeli... | Python | 6.3k | 24 | 无代码LLM平台，支持通过Prompt Studio定义数据结构化方案，一键生成API和ETL管道，集成MCP/REST/ETL/n8n等多场景，提升文档处理效率 |
| 9 | [letta-ai/letta-code](https://github.com/letta-ai/letta-code) | The memory-first coding agent... | TypeScript | 1.2k | 30 | Letta Code 是基于 Letta API 的内存优先代码框架，通过持久化代理实现跨会话学习与模型切换。支持多模型（Claude、GPT、Gemini 等）无缝衔接，提供记忆初始化、技能模块扩展等功能，提升代码协作与长期任务处理能力。 |
| 10 | [ruby/ruby](https://github.com/ruby/ruby) | The Ruby Programming Language... | Ruby | 23.4k | 52 | Ruby 是一种动态、面向对象的脚本语言，具有简单语法和强大功能，支持跨平台开发。提供异常处理、垃圾回收、迭代器等特性，适用于Web开发、系统管理及文本处理。项目包含源代码库和构建文档，支持多种操作系统。 |
| 11 | [cinnyapp/cinny](https://github.com/cinnyapp/cinny) | Yet another matrix client... | TypeScript | 3.0k | 46 | Cinny是一款基于Matrix协议的即时通讯客户端，注重简洁优雅的界面设计和安全性。支持自托管部署，提供网页版和桌面应用，采用TypeScript开发，具备现代Web技术特征。 |

[查看完整数据](api/github/2026-02-14.json)
<!-- END GITHUB TRENDING -->








