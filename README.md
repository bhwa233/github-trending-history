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

**最后更新**: 2026-10-07 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [morluto/rea](https://github.com/morluto/rea) | Reverse engineer anything with agents, from app be... | TypeScript | 15.8k | 4.7k | REA 是一个跨二进制文件、应用程序和运行时行为的逆向工程 MCP 工具。它利用 AI 代理分析原生二进制文件、JavaScript 应用、.NET 程序集和网站，无需源代码即可解释功能、展示证据并辅助构建版本，所有分析均在本地运行。 |
| 2 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 279.7k | 1.4k | 这是一套专为工程师设计的代理技能集合，旨在通过小型、可组合的脚本提升开发效率。它支持 Claude Code 和 Codex 等工具，强调工程实践而非僵化的流程，允许用户高度自定义。 |
| 3 | [boykopovar/AnyPS5](https://github.com/boykopovar/AnyPS5) | Tool for automatic PS5 executables porting to Linu... | C++ | 10.8k | 2.7k | AnyPS5 是一款用 C++ 编写的工具，旨在自动将 PS5 可执行文件移植到 Linux 和 Windows。它包含重连器将可执行文件转换为原生格式，并实现了系统库以支持动态链接。项目支持 SDL 游戏控制器映射和 SPIR-V 着色器编译，旨在实现互操作性、研究和兼容性，采用 GPL v2 许可证。 |
| 4 | [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | A skill to stop your coding agent from burying the... | Python | 55.2k | 619 | 这是一个为编程助手设计的技能，旨在解决 AI 回答过于冗长或隐藏核心步骤的问题。它采用 ADHD 友好的输出格式，强调“行动优先”，要求步骤编号、具体时间估算，并禁止废话。通过强制 AI 直接给出解决方案和下一步操作，提高代码调试和修改的效率。 |
| 5 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram design for Claude Code, Codex, G... | HTML | 45.1k | 825 | 这是一个专为 Claude Code 等工具设计的编辑风格图表库。提供 42 种图表类型，采用自包含 HTML + SVG，支持静态输出及可选动画。设计理念强调高密度、简洁与品牌化，支持导入 draw.io 等源文件，旨在生成高质量、无通用圆角框的架构与流程图。 |
| 6 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 102.9k | 677 | 该项目为 AI 编码代理提供生产级工程技能，通过 9 个斜杠命令封装了从定义到发布的全生命周期工作流和质量门控。支持自动技能激活和单次批准的增量构建，旨在提升 AI 编码的一致性和代码质量。 |
| 7 | [EpicGames/raddebugger](https://github.com/EpicGames/raddebugger) | A native, user-mode, multi-process, graphical debu... | C | 7.9k | 90 | 这是一个由 Epic 开发的原生、用户模式、多进程图形化调试器。目前处于 ALPHA 阶段，主要支持 Windows x64 PDB 调试。项目致力于构建自定义的 RAD Debug Info (RDI) 格式以替代传统调试信息，并计划未来支持 Linux 和 DWARF。 |
| 8 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | TypeScript | 97.8k | 578 | Claude-Mem 是一个为 Claude Code 等代理提供的持久化上下文系统。它自动捕获会话活动，利用 AI 进行语义压缩，并将相关上下文注入未来会话，确保 AI 代理在断开连接后仍能保持项目知识的连续性。 |
| 9 | [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | Open source Ghostty-based macOS terminal with vert... | Swift | 27.9k | 44 | 基于 Ghostty 的 macOS 原生终端，专为 AI 编码代理设计。支持垂直/水平分屏、内置浏览器、SSH 远程连接及 Claude Code Teams 集成。具备通知系统、浏览器导入及可编程 API，旨在提升多任务处理与组织效率。 |
| 10 | [trycua/cua](https://github.com/trycua/cua) | Scale computer-use 2.0 with open-source drivers, c... | Rust | 28.8k | 228 | 该项目旨在扩展计算机使用 2.0，提供完整的桌面环境供 AI 代理操作。核心组件包括 Cua Spaces（桌面应用）、Cua Driver（自动化工具）、Lume（本地 VM）和 Cua Bench（基准测试）。支持跨平台部署，为计算机使用模型的训练、评估及数据生成提供基础设施。 |
| 11 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | A coding-agent skill for multi-phase security audi... | JavaScript | 26.1k | 576 | 这是一个将编码代理转化为自动化安全审计员的技能。它通过六个阶段（侦察、狩猎、验证、输出、独立验证、报告）执行结构化审计，生成机器可读的发现结果，并支持独立验证以确保准确性。该工具是 Cloudflare 漏洞发现系统的起点。 |
| 12 | [tester-army/e2e](https://github.com/tester-army/e2e) | Next generation e2e testing framework for web and ... | TypeScript | 7.5k | 1.4k | 这是一个基于 TypeScript 的下一代端到端测试框架。它允许用户用自然语言描述测试目标，由智能代理驱动应用完成操作。框架支持 Web 和移动端，具备动作记录与重放机制，支持多种前端框架，并能集成本地大模型。 |
| 13 | [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | Self-hosted gym & body-weight tracker — plan routi... | JavaScript | 7.0k | 1.5k | openGym 是一个自托管的健身房与自重训练追踪器，强调数据隐私与完全掌控。它支持制定常规训练计划、记录超级组与热身，具备 PR 检测与 RIR/RPE 记录功能。支持从 FitNotes/Strong/Hevy 导入数据，提供 Passkey 登录，通过 Docker 部署，无订阅与广告。 |

[查看完整数据](api/github/2026-10-07.json)
<!-- END GITHUB TRENDING -->




