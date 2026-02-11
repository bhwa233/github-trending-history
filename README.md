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

**最后更新**: 2026-02-11 | **成功**: 7 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [google/langextract](https://github.com/google/langextract) | A Python library for extracting structured informa... | Python | 30.4k | 3.2k | Google开源的Python库，利用LLM从非结构化文本中提取结构化信息，支持精确来源定位、交互式可视化及多模型适配，适用于医疗报告等长文档的高效信息抽取。 |
| 2 | [github/gh-aw](https://github.com/github/gh-aw) | GitHub Agentic Workflows... | Go | 1.7k | 389 | GitHub Agentic Workflows 项目允许开发者通过自然语言 Markdown 编写智能工作流，并在 GitHub Actions 中安全执行。项目强调安全机制，包括默认只读权限、沙盒执行、输入消毒和网络隔离，支持自动化仓库任务同时降低风险。 |
| 3 | [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | Microsoft PowerToys is a collection of utilities t... | C# | 129.4k | 48 | Microsoft PowerToys 是一组Windows系统增强工具，包含25+实用功能，如快捷键管理、屏幕截图、文件管理等，旨在提升用户生产力与系统定制化体验。 |
| 4 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 24.0k | 102 | ChromeDevTools MCP项目为AI编码助手提供Chrome浏览器控制能力，支持性能分析、调试和自动化。通过Model-Context-Protocol协议接入Chrome DevTools，实现网络请求分析、截图、控制台监控及Puppeteer自动化操作，同时包含性能数据采集和使用统计功能。 |
| 5 | [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | Official Claude Code compound engineering plugin... | TypeScript | 8.4k | 270 | Claude Code工程插件市场工具，支持将插件转换为OpenCode/Codex/Droid格式，提供本地开发与配置同步功能，简化工程工作流。 |
| 6 | [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) | In-depth tutorials on LLMs, RAGs and real-world AI... | Jupyter Notebook | 28.6k | 140 | AI Engineering Hub 是一个提供LLMs、RAG、AI代理等技术的实战项目合集，包含93+不同难度的生产级项目，涵盖OCR、聊天界面、模型微调等应用场景，适合各层次开发者通过教程和示例提升AI工程能力。 |
| 7 | [cheahjs/free-llm-api-resources](https://github.com/cheahjs/free-llm-api-resources) | A list of free LLM inference resources accessible ... | Python | 9.4k | 463 | 该项目整理了多个提供免费LLM推理API服务的资源列表，包含不同服务商的调用限制和可用模型，方便开发者快速接入大语言模型服务进行测试和应用开发。 |

[查看完整数据](api/github/2026-02-11.json)
<!-- END GITHUB TRENDING -->








