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

**最后更新**: 2026-10-09 | **成功**: 10 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [morluto/rea](https://github.com/morluto/rea) | Reverse engineer anything with agents, from app be... | TypeScript | 47.9k | 14.9k | REA 是一个利用 AI 代理进行逆向工程的工具，支持对原生二进制文件、JS/Electron、.NET 及网站进行无源码分析。它能够解释功能原理、展示证据并生成代码，支持 Claude Code、Cursor 等多种代理，并集成 Hopper、Ghidra 等本地分析工具。 |
| 2 | [boykopovar/AnyPS5](https://github.com/boykopovar/AnyPS5) | Tool for automatic PS5 executables porting to Linu... | C++ | 22.6k | 5.9k | AnyPS5 是一个用 C++ 编写的开源工具，旨在自动将 PS5 可执行文件移植到 Linux 和 Windows。它包含重链接器、系统库实现和着色器重编译器，无需模拟即可直接运行游戏。支持 SDL 游戏控制器和自定义输入配置。 |
| 3 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 282.8k | 1.7k | 面向真实工程师的 AI 代理技能库，提供小巧、可组合的 Shell 脚本技能。旨在帮助开发者摆脱“氛围编码”，通过插件形式集成到 Claude、Copilot 等主流 AI 编程工具中，提升工程实践能力。 |
| 4 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram design for Claude Code, Codex, G... | HTML | 47.9k | 1.7k | 这是一个为 Claude Code、Copilot 等 AI 代理设计的技能，用于生成自包含的 HTML+SVG 编辑风格图表。支持 44 种图表类型，允许用户通过自然语言指令创建架构图、象限图等，支持品牌定制，无需 Mermaid。 |
| 5 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Secure, fast, efficient, battle-tested at Alibaba'... | Go | 45.3k | 326 | 这是一个由阿里巴巴孵化的开源 AI 代码审查 CLI 工具，基于 Go 语言开发。它采用混合架构，结合确定性管道与 LLM Agent，能精准识别代码缺陷（如 NPE、SQL 注入等）。相比通用 Agent，它在精度和 F1 指标上表现更优，且 Token 消耗更低。支持 OCR 全量扫描，内置多语言规则集，适合大规模团队提升代码质量。 |
| 6 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intend... | Python | 28.3k | 709 | 这是一个为 Claude Cowork 和 Claude Code 设计的开源插件库，旨在将 Claude 转变为特定角色（如销售、产品、法律等）的专家。它通过集成各种工具（如 Slack、Jira、Notion）和自定义工作流，帮助知识工作者自动化任务、管理日程并提高团队协作效率。用户可以基于这些插件进行定制，使其更贴合公司流程。 |
| 7 | [BerriAI/litellm](https://github.com/BerriAI/litellm) | The fastest, litest AI Gateway. Rust core with Pyt... | Python | 60.7k | 95 | LiteLLM 是一个开源 AI 网关，提供统一的接口调用 100+ 个 LLM 提供商。它支持 OpenAI 格式，包含 Python SDK 和代理服务器。具备成本追踪、护栏、负载均衡及日志记录等企业级功能，旨在简化多模型管理，实现高性能的统一接口调用。 |
| 8 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 104.0k | 436 | 这是一个为 AI 编码代理提供生产级工程技能的项目。它将资深工程师的工作流程、质量门控和最佳实践编码为技能，确保 AI 代理在开发全生命周期中保持一致的高标准。项目包含 9 个斜杠命令，覆盖从定义需求到部署上线的各个环节，支持自动技能激活和自主构建。 |
| 9 | [storytold/artcraft](https://github.com/storytold/artcraft) | ArtCraft is an intentional crafting engine for art... | Rust | 11.7k | 3.8k | ArtCraft 是一个基于 Rust 的 IDE，专为艺术家、设计师和电影制作人设计，用于交互式 AI 图像和视频创作。它结合了 2D 和 3D 合成工具，允许用户通过提示词、图层编辑和 3D 场景构建来精确控制构图、角色定位和相机角度。它支持图像转 3D 网格、背景移除和混合资产制作，将提示词转化为可重复的视觉结果。 |
| 10 | [Robbyant/lingbot-map](https://github.com/Robbyant/lingbot-map) | [ECCV 2026 Best Paper Award Candidate] LingBot-Map... | Python | 17.7k | 110 | LingBot-Map 是一个用于流式 3D 重建的前馈 3D 基础模型，获得 ECCV 2026 最佳论文奖提名。它通过几何上下文变换器（GCT）统一了坐标定位、几何线索和漂移校正，支持高效流式推理，在长序列下保持高帧率，在 KITTI 和 Oxford Spires 等基准测试中表现优异。 |
| 11 | [twostraws/SwiftUI-Agent-Skill](https://github.com/twostraws/SwiftUI-Agent-Skill) | SwiftUI agent skill for Claude Code, Codex, and ot... | - | 5.5k | 65 | 处理失败 |

[查看完整数据](api/github/2026-10-09.json)
<!-- END GITHUB TRENDING -->




