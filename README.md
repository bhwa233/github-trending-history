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

**最后更新**: 2026-01-16 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 26.0k | 1.9k | Superpowers 是一个基于代理技能框架的软件开发方法论，通过需求分析、设计分解、TDD测试驱动和自动化子代理开发，提升编码效率。支持流程化协作与自动化的工程任务执行。 |
| 2 | [Gentleman-Programming/Gentleman.Dots](https://github.com/Gentleman-Programming/Gentleman.Dots) | My personal configuration for LazyVim !... | Shell | 1.2k | 13 | Gentleman.Dots 是一个基于 LazyVim 的 Neovim 配置方案，整合了多平台开发环境，包含 Shell 脚本、终端工具链及 AI 辅助功能，支持快速部署个性化开发环境。 |
| 3 | [google/langextract](https://github.com/google/langextract) | A Python library for extracting structured informa... | Python | 21.2k | 329 | LangExtract是一个Python库，利用大语言模型从非结构化文本中提取结构化信息，支持精确来源定位、交互式可视化和多模型适配，适用于医疗文本分析等需要高精度信息提取的场景。 |
| 4 | [cjpais/Handy](https://github.com/cjpais/Handy) | A free, open source, and extensible speech-to-text... | TypeScript | 11.8k | 413 | Handy是一款开源免费的离线语音转文本工具，采用Tauri框架（Rust+TypeScript）开发，支持跨平台使用。通过本地化处理实现隐私保护，集成Whisper模型与VAD语音检测技术，用户可通过快捷键或按压通话模式实现语音转文字，适用于需要本地化处理的办公场景。 |
| 5 | [puckeditor/puck](https://github.com/puckeditor/puck) | The visual editor for React... | TypeScript | 11.0k | 478 | Puck 是一个基于 React 的开源可视化编辑器，支持自定义拖拽组件和动态页面构建，提供模块化架构和 MIT 许可证，适用于内容管理系统和动态页面开发。 |
| 6 | [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Ultralytics YOLO 🚀... | Python | 51.8k | 373 | Ultralytics YOLO提供高性能的实时目标检测、图像分类和姿态估计模型，基于Python和PyTorch框架，支持多种部署方式，适用于计算机视觉任务。 |
| 7 | [eigent-ai/eigent](https://github.com/eigent-ai/eigent) | Eigent: The Open Source Cowork Desktop to Unlock Y... | TypeScript | 7.5k | 2.1k | Eigent是一款开源的AI协作桌面应用，通过多智能体工作队列实现复杂流程自动化，支持本地部署、企业级安全及自定义模型集成，提升用户生产力。 |
| 8 | [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | Free, local, open-source Cowork for Gemini CLI, Cl... | TypeScript | 4.3k | 198 | AionUi是面向AI开发者的本地开源协作工具，支持多模型CLI工具统一管理，提供图形化界面、本地数据存储、智能文件管理及AI生成结果预览功能，可提升代码开发与内容协作效率。 |
| 9 | [agentsmd/agents.md](https://github.com/agentsmd/agents.md) | AGENTS.md — a simple, open format for guiding codi... | TypeScript | 15.3k | 101 | AGENTS.md 是一种用于指导AI编码代理的标准化格式，通过结构化文档提供开发环境配置、任务说明和项目规则，提升AI与开发者的协作效率。 |

[查看完整数据](api/github/2026-01-16.json)
<!-- END GITHUB TRENDING -->








