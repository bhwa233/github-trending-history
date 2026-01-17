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

**最后更新**: 2026-01-17 | **成功**: 5 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [eigent-ai/eigent](https://github.com/eigent-ai/eigent) | Eigent: The Open Source Cowork Desktop to Unlock Y... | TypeScript | 8.6k | 703 | Eigent是一款开源AI协作桌面应用，通过多智能体工作队列实现复杂流程自动化，支持本地部署与隐私保护，提供零配置设置、企业级SSO/权限控制及自定义模型集成，提升开发与运维效率。 |
| 2 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 27.3k | 1.4k | Superpowers 是一个基于代理技能框架的软件开发方法论，通过可组合的技能和自动化工作流提升编码效率。它引导代理在编码前明确需求，生成可执行的开发计划，并通过子代理协作实现代码生成与审查，强调TDD、YAGNI和DRY原则。 |
| 3 | [puckeditor/puck](https://github.com/puckeditor/puck) | The visual editor for React with AI superpowers... | TypeScript | 11.4k | 333 | Puck 是一个基于 React 的模块化可视化编辑器，支持自定义组件和拖拽式页面构建，适用于需要无代码编辑能力的场景。项目采用 TypeScript 开发，提供灵活的配置和渲染能力，兼容 Next.js 等主流框架。 |
| 4 | [google/langextract](https://github.com/google/langextract) | A Python library for extracting structured informa... | Python | 21.6k | 445 | LangExtract是一个基于LLM的Python库，可从非结构化文本中提取结构化信息，支持精确来源定位、交互式可视化和多模型兼容，适用于医疗、法律等领域的文本结构化处理。 |
| 5 | [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | Free, local, open-source Cowork for Gemini CLI, Cl... | TypeScript | 4.9k | 592 | AionUi是面向AI命令行工具的本地协作平台，支持多模型统一管理、图形化界面操作、本地数据存储及智能文件处理。提供代码生成、文件预览、图像编辑与多任务并行功能，提升AI开发效率。 |

[查看完整数据](api/github/2026-01-17.json)
<!-- END GITHUB TRENDING -->








