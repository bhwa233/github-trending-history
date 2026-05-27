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

**最后更新**: 2026-05-26 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) | Graphs that teach > graphs that impress. Turn any ... | TypeScript | 35.7k | 4.7k | 这是一个 Claude Code 插件，通过多智能体管道将代码库、知识库或文档转换为交互式知识图谱。它支持结构图探索、业务逻辑映射及知识库分析，帮助开发者快速理解大型代码库的架构与业务逻辑，告别盲目阅读代码。 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 194.3k | 1.9k | ECC 是一个高性能的 AI 代理运行时优化系统，旨在提升 Claude Code、Cursor 等多个 AI 编程助手的能力。它提供技能、记忆持久化、安全扫描和并行化等核心功能，支持持续学习和验证循环，帮助开发者构建生产级的智能体工作流。该项目曾获 Anthropic Hackathon 获奖者，目前处于 v2.0.0-rc.1 阶段，并推出了基于 Tkinter 的桌面仪表板。 |
| 3 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 20.7k | 2.2k | 这是一个从零构建 AI 系统的实战课程，包含 435 课和 20 个阶段。课程涵盖数学基础到生产级代理，支持 Python、TypeScript、Rust 和 Julia。核心在于从底层算法（如反向传播、注意力机制）开始手写实现，而非仅依赖 PyTorch 等库，旨在培养具备深度理解的专业 AI 工程师。 |
| 4 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intend... | Python | 16.6k | 1.7k | 该项目为 Claude Cowork 提供开源插件库，旨在将 Claude 转变为特定角色（如销售、产品、法律等）的专家助手。通过集成 Slack、Jira、Notion 等工具，它允许用户自定义工作流和斜杠命令，从而自动化任务管理、客户支持和内容创作，提升团队协作效率。 |
| 5 | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 754 structured cybersecurity skills for AI agents ... | Python | 10.1k | 880 | 该项目包含754个结构化网络安全技能，遵循agentskills.io标准，并映射至MITRE ATT&CK、NIST CSF 2.0等五大框架。旨在赋予AI代理资深分析师的能力，支持Claude Code、GitHub Copilot等20多个平台，覆盖26个安全领域，帮助用户快速获得专家级的安全调查指导。 |
| 6 | [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop) | A skill file for removing AI tells from prose... | - | 5.0k | 539 | 该项目是一个旨在移除 AI 写作痕迹的技能文件。它通过定义禁用短语、结构陈词滥调和句子级规则，教导 Claude 或其他 LLM 识别并修正机械节奏、被动语态等 AI 特征。项目包含评分机制，帮助评估文本的直接性与真实性，旨在生成更自然、更符合人类阅读习惯的散文。 |
| 7 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Taste-Skill - gives your AI good taste. stops the ... | Shell | 21.6k | 1.4k | Taste-Skill 是一款面向 AI 代理的“反垃圾”前端框架。它提供可移植的设计技能，帮助 AI 生成具有优秀布局、排版和动效的界面，避免枯燥的样板代码。此外，还包含图像生成技能用于参考板制作。用户可通过 npx 安装，与 ChatGPT、Codex 等工具配合使用，提升 AI 产出界面的质量。 |
| 8 | [DigitalPlatDev/FreeDomain](https://github.com/DigitalPlatDev/FreeDomain) | DigitalPlat FreeDomain: Free Domain For Everyone... | HTML | 167.3k | 1.2k | DigitalPlat FreeDomain 是一个提供免费域名注册服务的项目，旨在让每个人都能拥有数字身份。用户可注册 .DPDNS.ORG 等扩展名的域名，并将其托管在 Cloudflare 等服务商。该项目已有超50万域名注册，致力于降低建站门槛，让互联网更加开放。 |
| 9 | [jellyfin/jellyfin](https://github.com/jellyfin/jellyfin) | The Free Software Media System - Server Backend & ... | C# | 52.4k | 83 | Jellyfin 是一个免费开源的媒体系统，提供服务器端和 API。它是 Emby 和 Plex 的替代品，允许用户管理和流式传输媒体。项目基于 .NET 平台，支持跨平台，无付费许可证或隐藏议程。本仓库包含后端服务器代码。 |
| 10 | [Axorax/awesome-free-apps](https://github.com/Axorax/awesome-free-apps) | Curated list of the best free apps for PC and mobi... | JavaScript | 5.2k | 731 | 这是一个精选的免费软件列表，涵盖 PC 和移动端。项目按类别（如音频、开发工具、游戏等）组织，使用图标标识平台（Windows、macOS、Linux）及状态（开源、推荐），旨在帮助用户发现高质量且免费的实用工具。 |
| 11 | [twentyhq/twenty](https://github.com/twentyhq/twenty) | The open alternative to Salesforce, designed for A... | TypeScript | 46.8k | 216 | Twenty 是 Salesforce 的开源替代品，专为 AI 设计。它为技术团队提供构建块，允许通过代码定义对象、字段和视图，像管理其他技术栈一样管理 CRM。支持云端、CLI 和自托管，包含对象、视图、工作流和智能体等功能，适合需要高度定制化和快速适应业务变化的团队。 |
| 12 | [Open-Dev-Society/OpenStock](https://github.com/Open-Dev-Society/OpenStock) | OpenStock is an open-source alternative to expensi... | TypeScript | 12.1k | 156 | OpenStock 是一个开源的股票市场平台，旨在替代昂贵的商业服务。它使用 Next.js 和 TypeScript 构建，提供实时价格追踪、个性化警报和详细的公司洞察。该项目由 Open Dev Society 维护，承诺永久免费且无付费墙，强调透明度和社区支持。 |
| 13 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | TypeScript | 78.6k | 352 | Claude-Mem 是一个为 Claude Code 等代理提供持久化上下文的工具。它自动捕获会话中的工具使用，利用 AI 进行语义压缩，并将相关上下文注入未来会话，实现跨会话的知识连续性。支持 Claude Code、Gemini CLI、OpenCode 等多种平台。 |
| 14 | [st-tech/ppf-contact-solver](https://github.com/st-tech/ppf-contact-solver) | A contact solver for physics-based simulations inv... | Python | 3.5k | 170 | 这是一个由 ZOZO 开发的物理模拟接触求解器，专为处理壳、实体和杆等物体设计。它具备 GPU 加速、无穿透接触、支持超大规模计算（1.8亿+接触点）及有限元法（FEM）等特点。项目提供 Blender 插件、Docker 容器及 Python API，支持云端部署，适用于高性能物理仿真场景。 |

[查看完整数据](api/github/2026-05-26.json)
<!-- END GITHUB TRENDING -->




