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

**最后更新**: 2026-01-06 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf) | Protocol Buffers - Google's data interchange forma... | C++ | 70.1k | 14 | Protocol Buffers（protobuf）是Google开发的跨语言、跨平台数据序列化框架，支持结构化数据高效编码解码。项目以C++实现，提供编译器生成多语言代码，广泛用于通信协议和数据存储，支持Bazel构建工具。 |
| 2 | [Lissy93/web-check](https://github.com/Lissy93/web-check) | 🕵️‍♂️ All-in-one OSINT tool for analysing any web... | TypeScript | 27.7k | 173 | 基于TypeScript开发的全功能OSINT工具，提供网站安全分析、技术架构检测及潜在风险识别。支持IP信息、SSL证书、DNS记录、服务器配置等多维度数据采集与可视化，助力网站优化与安全防护。 |
| 3 | [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | Microsoft PowerToys is a collection of utilities t... | C# | 127.3k | 129 | Microsoft PowerToys是微软提供的Windows实用工具集合，包含25+功能模块，如窗口管理、快捷键定制、文件操作等，帮助用户提升系统自定义能力和日常任务效率。采用C#开发，适合需要优化Windows体验的开发者及高级用户。 |
| 4 | [anthropics/claude-code-action](https://github.com/anthropics/claude-code-action) | ... | TypeScript | 4.7k | 32 | 该工具为GitHub PR和问题提供智能代码辅助，支持自动检测工作流上下文，实现代码审查、修复、重构及新功能开发，兼容多种AI平台认证方式，提供交互式代码问答和自动化任务执行。 |
| 5 | [microsoft/BitNet](https://github.com/microsoft/BitNet) | Official inference framework for 1-bit LLMs... | Python | 25.4k | 766 | 微软开源的1-bit大语言模型推理框架，优化CPU/GPU加速实现高效低能耗推理，支持ARM/x86架构，可运行超大规模100B参数模型，性能较传统方案提升1.37x-6.17x且能耗降低55.4%-82.2% |
| 6 | [marcelscruz/public-apis](https://github.com/marcelscruz/public-apis) | A collaborative list of public APIs for developers... | JavaScript | 6.8k | 170 | 该仓库是一个由开发者协作维护的公共API集合项目，涵盖动物、天气、金融、编程等多个领域的API资源，提供分类索引和详细描述，便于开发者快速查找和调用。项目包含API的认证方式、HTTPS支持等关键信息，支持高效测试与集成。 |
| 7 | [kirodotdev/Kiro](https://github.com/kirodotdev/Kiro) | Kiro is an agentic IDE that works alongside you fr... | - | 2.7k | 26 | Kiro是一个智能IDE，支持从原型到生产的开发流程。提供结构化规范制定、自动化任务钩子、自然语言交互、项目引导配置及外部工具集成，强调隐私安全与代码效率。 |
| 8 | [LuckyOne7777/ChatGPT-Micro-Cap-Experiment](https://github.com/LuckyOne7777/ChatGPT-Micro-Cap-Experiment) | This repo powers my experiment where ChatGPT manag... | Python | 7.1k | 68 | 该项目通过ChatGPT管理真实资金的微盘股投资组合，包含交易引擎、止损机制、每日数据更新和绩效跟踪功能，用于验证大语言模型在实时交易中的决策能力。 |
| 9 | [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 📑 PageIndex: Document Index for Reasoning-based R... | Jupyter Notebook | 4.7k | 102 | PageIndex 是一种无需向量数据库或分块处理的推理型RAG系统，通过构建文档树状索引并利用LLM进行上下文感知的检索，模拟人类专家分析长文档的流程，提升专业文档的检索准确性。 |
| 10 | [bobbyiliev/introduction-to-bash-scripting](https://github.com/bobbyiliev/introduction-to-bash-scripting) | Free Introduction to Bash Scripting eBook... | HTML | 5.4k | 75 | 免费Bash脚本入门电子书，涵盖基础语法、自动化任务及实战案例，包含变量、条件判断、循环、函数、远程执行、API交互等内容，适合系统管理员和开发者学习脚本编写。 |

[查看完整数据](api/github/2026-01-06.json)
<!-- END GITHUB TRENDING -->








