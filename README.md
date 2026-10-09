# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 默认通过 Cloudflare AI Gateway 调用 `workers-ai/@cf/zai-org/glm-4.7-flash` 生成中英文项目总结、技术栈和适用场景
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
  - `summary_en`: 英文项目核心功能总结
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景
  - `useCase_en`: 英文适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare AI Gateway（OpenAI 兼容接口）
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 默认：Cloudflare AI Gateway
export AI_API_KEY=your_cloudflare_ai_gateway_token
export AI_API_URL=https://gateway.ai.cloudflare.com/v1/5697c41d4efbabcbac78eafe2cdf036b/default/compat/chat/completions
export AI_MODEL=workers-ai/@cf/zai-org/glm-4.7-flash

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

**最后更新**: 2026-10-08 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [boykopovar/AnyPS5](https://github.com/boykopovar/AnyPS5) | Tool for automatic PS5 executables porting to Linu... | C++ | 16.2k | 4.7k | AnyPS5 是一个用 C++ 编写的开源工具，旨在自动将 PS5 可执行文件移植到 Linux 和 Windows。它包含重连器和 PRX 库实现，无需模拟或单独运行时进程。支持 Shader 重编译为 SPIR-V，并兼容 SDL 游戏手柄和键盘鼠标。该项目旨在实现互操作性、研究和兼容性，采用 GPL-2.0 许可证。 |
| 2 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram design for Claude Code, Codex, G... | HTML | 46.5k | 1.2k | 该项目为 Claude Code 等工具提供高质量的编辑类图表设计，包含 42 种图表类型。支持自包含 HTML/SVG 输出，无需构建步骤。具备语义化系统模式和可选动画，并能将 draw.io、Mermaid 等源文件转换为选定格式。设计风格注重编辑类质量与品牌定制，支持高密度排版。 |
| 3 | [morluto/rea](https://github.com/morluto/rea) | Reverse engineer anything with agents, from app be... | TypeScript | 28.1k | 7.7k | REA 是一个利用 AI 代理进行逆向工程的工具，支持从原生二进制文件到 JavaScript/Electron 应用的分析。它通过连接静态分析工具（如 Hopper、Ghidra）和代理（如 Claude、Cursor），允许用户在不查看源码的情况下调查应用功能、解释原理并生成证据，最终辅助在项目中复刻类似功能。所有分析均在本地运行。 |
| 4 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 281.2k | 1.8k | 这是一个专为 AI 代理设计的工程技能库，旨在帮助开发者进行真实的工程实践而非“vibe coding”。它包含一系列小型、可组合的脚本和提示，支持 Claude、Copilot、Codex 等多种 AI 工具。通过插件形式安装，开发者可以自定义并增强 AI 代理的工程能力。 |
| 5 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | TypeScript | 98.6k | 670 | 这是一个为 Claude Code 构建的持久化记忆压缩系统。它自动捕获会话中的工具使用和观察结果，利用 AI 进行语义压缩，并将相关上下文注入未来的会话中。这确保了 AI 代理在会话结束后仍能保持对项目的连续知识，支持多种 AI 平台。 |
| 6 | [EpicGames/raddebugger](https://github.com/EpicGames/raddebugger) | A native, user-mode, multi-process, graphical debu... | C | 8.1k | 279 | RAD Debugger 是一个原生、用户模式、多进程的图形化调试器。目前处于 ALPHA 阶段，主要支持 Windows x64 本地调试，使用 PDB 格式。项目未来计划扩展至 Linux 平台并支持 DWARF 调试信息，同时涉及自定义的 RAD Debug Info (RDI) 格式。 |
| 7 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intend... | Python | 27.7k | 392 | 该项目提供开源插件，旨在将 Claude 转变为特定角色的专家。包含生产力、销售、支持等 11 个插件，集成了 Slack、Notion 等主流工具，支持自定义工作流，帮助团队提升协作效率和专业产出。 |
| 8 | [storytold/artcraft](https://github.com/storytold/artcraft) | ArtCraft is an intentional crafting engine for art... | Rust | 8.2k | 2.1k | ArtCraft 是一款面向艺术家、设计师和电影制作人的交互式 AI 图像与视频创作 IDE。它结合了 2D/3D 合成、图像转 3D 网格、角色定位及场景构建等高级功能。用户可以通过文本提示快速生成，再利用画布和场景工具进行精细调整，实现从构思到成品的可视化创作流程。 |
| 9 | [liquidslr/system-design-notes](https://github.com/liquidslr/system-design-notes) | Notes of the book System Desgin Interview - An Ins... | - | 24.7k | 393 | 这是一个关于《系统设计面试：内部指南》一书的笔记项目。它涵盖了系统设计面试的核心概念、架构模式和最佳实践，旨在帮助开发者准备技术面试。项目内容结构清晰，适合作为系统设计学习的参考资料。 |

[查看完整数据](api/github/2026-10-08.json)
<!-- END GITHUB TRENDING -->




