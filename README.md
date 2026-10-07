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

**最后更新**: 2026-10-06 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tester-army/e2e](https://github.com/tester-army/e2e) | Next generation e2e testing framework for web and ... | TypeScript | 6.4k | 1.7k | 这是一个基于 TypeScript 的下一代端到端测试框架，支持 Web 和移动应用。它允许用户用自然语言描述测试目标，由智能代理驱动应用完成操作，并使用定位器和断言验证结果。框架支持 Playwright 和移动模拟器，集成了 GitHub 报告器，并支持自定义大语言模型，旨在简化测试编写流程。 |
| 2 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 278.2k | 889 | 这是一套专为真实工程师设计的 AI 技能集合，旨在提供可组合、易定制的开发流程，避免过度依赖“氛围编码”。它支持 Claude Code 和 Codex 等多种 AI 编码助手，帮助开发者保持对代码和流程的控制，提高开发效率。 |
| 3 | [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | Give your agent CAD superpowers.... | Python | 18.0k | 619 | 该项目为 AI 代理赋予 CAD 能力，支持将文本指令转换为 3D 模型（STEP, GLB, STL, 3MF）。它提供制造设计检查、工程图纸生成，并连接 3D 打印、钣金及 CNC 服务。兼容 Claude Code、Cursor 等主流代理，通过 uv 运行。 |
| 4 | [boykopovar/AnyPS5](https://github.com/boykopovar/AnyPS5) | Tool for automatic PS5 executables porting to Linu... | C++ | 6.7k | 949 | AnyPS5 是一个用 C++ 编写的开源工具，旨在自动将 PS5 可执行文件移植到 Linux 和 Windows 系统。它包含重连器和 PRX 库实现，支持动态链接，无需模拟或单独运行时。项目实现了 Shader 重编译器生成 SPIR-V，并支持 SDL 游戏手柄映射。目前 Dreaming Sarah 等游戏已验证可运行。该工具旨在实现互操作性、研究和兼容性目的，遵循 GPL-2.0 许可证。 |
| 5 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | JavaScript | 77.7k | 616 | 这是一个专为 AI 编码代理设计的前端设计语言工具。它提供 24 个命令和 60 条确定性规则，帮助 AI 生成高质量、一致且非模板化的前端设计。支持实时浏览器迭代和产品真相记录，确保设计质量。 |
| 6 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | TypeScript | 97.2k | 534 | 这是一个为 Claude Code 设计的持久化上下文系统，通过自动捕获工具使用、生成语义摘要并压缩存储，在未来的会话中注入相关上下文。它支持多种 AI 代理，帮助 AI 保持对项目的连续性认知，解决会话中断导致的知识丢失问题。 |
| 7 | [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | A skill to stop your coding agent from burying the... | Python | 54.4k | 326 | 这是一个专为 AI 编码助手设计的技能，旨在提供 ADHD 友好的输出。它通过强制优先采取行动、编号步骤、提供具体时间估算和避免填充内容，防止 AI 隐藏答案或过于啰嗦。它通过直接、可执行的指令（如“编辑文件 X”和“运行测试”）来提高代码审查和调试的效率。 |
| 8 | [morluto/rea](https://github.com/morluto/rea) | Reverse engineer anything with agents, from app be... | TypeScript | 9.7k | 3.0k | REA 是一个基于 MCP 的逆向工程工具，利用 AI 代理分析原生二进制文件、JavaScript 应用程序、.NET 程序集和网站。它允许用户在无需源代码的情况下理解应用行为，生成证据，并构建功能。它本地运行，并与 AI 编码助手集成。 |
| 9 | [deepseek-ai/DeepGEMM](https://github.com/deepseek-ai/DeepGEMM) | DeepGEMM: clean and efficient BLAS kernel library ... | Cuda | 8.7k | 199 | DeepGEMM 是一个统一的高性能 GPU 张量核库，专为现代大语言模型设计。它集成了 GEMM（FP8/FP4/BF16）、融合 MoE、MQA 评分等核心原语，支持运行时编译（DeepJIT）。库设计简洁，性能媲美专家调优库，并在 H800 上达到 1550 TFLOPS，同时支持 Ascend 硬件。 |
| 10 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 157.9k | 623 | 这是一个提供完整AI代理机构的GitHub项目，包含前端巫师、Reddit社区忍者等具有个性化和专业流程的AI代理。项目提供原生桌面应用（支持macOS/Linux/Windows）和命令行脚本，可一键将代理安装到Claude Code、Cursor等主流AI开发工具中，并支持自动更新。适合需要定制化AI助手团队的开发者。 |
| 11 | [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | Self-hosted gym & body-weight tracker — plan routi... | JavaScript | 5.8k | 1.4k | openGym 是一个自托管的健身房与自重追踪应用，数据完全由用户掌控。支持制定周计划、记录锻炼（含超级组、热身等）、分析肌肉状态，并兼容 FitNotes/Strong/Hevy 数据导入。具备 Passkey 登录、无广告无订阅、离线使用及跨设备同步功能。 |
| 12 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram design for Claude Code, Codex, G... | HTML | 44.1k | 228 | 这是一个专为 Claude Code 等工具设计的编辑级图表设计技能。它提供 42 种图表类型（如架构图、鱼骨图、UML），支持 HTML/SVG 自包含输出，无需构建步骤。项目强调“编辑质量”的视觉风格，支持导入导出，旨在帮助开发者快速生成美观且符合品牌调性的技术文档图表。 |

[查看完整数据](api/github/2026-10-06.json)
<!-- END GITHUB TRENDING -->




