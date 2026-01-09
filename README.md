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

**最后更新**: 2026-01-09 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 19.7k | 427 | ChromeDevTools/mcp 是一个基于TypeScript的Chrome DevTools MCP服务器，允许AI编码助手（如Gemini、Claude）通过Chrome DevTools实现浏览器控制、自动化操作、性能分析和深度调试，集成puppeteer实现可靠自动化。 |
| 2 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Shell | 54.1k | 779 | Claude Code是一款终端级智能编码工具，通过自然语言指令执行代码任务、解释代码逻辑并管理Git流程，支持多平台安装和插件扩展，提升开发效率。 |
| 3 | [obra/superpowers](https://github.com/obra/superpowers) | Claude Code superpowers: core skills library... | Shell | 15.3k | 380 | Superpowers为Claude Code提供代码代理增强功能，通过可组合技能实现自动化开发流程，支持TDD、YAGNI和DRY原则，实现从需求分析到代码生成的全流程自动化。 |
| 4 | [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) | A utility-first CSS framework for rapid UI develop... | TypeScript | 92.5k | 262 | Tailwind CSS是一个基于实用程序的CSS框架，通过预定义的CSS类加速网页UI开发。支持高度可定制化，提供响应式设计、暗黑模式等特性，简化样式编写流程。 |
| 5 | [netbirdio/netbird](https://github.com/netbirdio/netbird) | Connect your devices into a secure WireGuard®-base... | Go | 20.8k | 28 | NetBird基于WireGuard构建安全的自动对等网络，支持SSO/MFA及细粒度访问控制，提供跨平台部署与自托管方案，简化私有网络配置与管理。 |
| 6 | [C4illin/ConvertX](https://github.com/C4illin/ConvertX) | 💾 Self-hosted online file converter. Supports 100... | TypeScript | 13.9k | 159 | ConvertX是一个自托管的在线文件转换工具，支持1000+种格式转换，提供多文件处理、密码保护和多账户管理功能，采用TypeScript开发兼顾性能与可维护性。 |
| 7 | [Lightricks/ComfyUI-LTXVideo](https://github.com/Lightricks/ComfyUI-LTXVideo) | LTX-Video Support for ComfyUI... | Python | 2.8k | 159 | 为ComfyUI提供LTX-2视频生成模型的扩展节点，支持文本/图像到视频生成及视频细节增强，包含多种预训练模型和工作流示例。 |
| 8 | [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | MiroThinker is an open-source search agent model, ... | Python | 3.9k | 608 | MiroThinker是开源搜索代理模型，支持工具增强推理与现实世界信息检索，涵盖多基准测试优化的搜索代理框架、训练数据集及基础设施，适用于复杂研究工作流。 |
| 9 | [google/googletest](https://github.com/google/googletest) | GoogleTest - Google Testing and Mocking Framework... | C++ | 37.9k | 74 | GoogleTest是Google的C++测试框架，提供xUnit架构、自动测试发现、丰富断言及自定义断言功能，支持死亡测试、参数化测试等，整合GoogleMock用于模拟，适用于C++项目的单元测试与验证。 |
| 10 | [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | The Open-Source Multimodal AI Agent Stack: Connect... | TypeScript | 21.8k | 831 | UI-TARS-desktop是基于TypeScript的多模态AI代理桌面应用，整合GUI和视觉能力，支持本地及远程计算机与浏览器操作，实现自动化任务处理。核心功能包括多模态交互、工具集成及跨平台操作，适用于需要高效人机协作的场景。 |
| 11 | [Johnshall/Shadowrocket-ADBlock-Rules-Forever](https://github.com/Johnshall/Shadowrocket-ADBlock-Rules-Forever) | 提供多款 Shadowrocket 规则，拥有强劲的广告过滤功能。每日 8 时重新构建规则。... | - | 21.5k | 105 | 提供Shadowrocket广告过滤规则，支持多类型规则切换与自动更新，整合GFWList、EasyList等源，每日8点生成最新规则文件，优化iOS端广告拦截与网络策略。 |
| 12 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | The open source coding agent.... | TypeScript | 57.3k | 1.9k | OpenCode 是一个开源的AI编码代理工具，提供两种模式：build模式支持全功能开发，plan模式用于只读代码分析与探索。默认阻止文件修改，执行命令前需授权，适合代码库分析及变更规划。 |

[查看完整数据](api/github/2026-01-09.json)
<!-- END GITHUB TRENDING -->








