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

**最后更新**: 2026-05-16 | **成功**: 7 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [oven-sh/bun](https://github.com/oven-sh/bun) | Incredibly fast JavaScript runtime, bundler, test ... | Rust | 91.2k | 414 | 处理失败 |
| 2 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | A set of ready to use Agent Skills for research, s... | Python | 23.1k | 669 | 这是一个包含135个科学和研究技能的集合，旨在增强AI Agent的能力。它支持生物信息学、化学信息学、蛋白质组学等多个领域，兼容Cursor、Claude Code等工具。新增的BYOK功能允许用户在本地运行AI科学家，处理复杂的多步骤科学工作流。 |
| 3 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 194.0k | 1.3k | Superpowers 是一个面向编码代理的技能框架与软件开发方法论。它通过一组可组合的技能和指令，增强 Claude、Codex 等代理的自主开发能力。系统强调 TDD、YAGNI 和 DRY 原则，支持从需求分析到子代理驱动开发的完整流程，旨在让 AI 代理更智能、更规范地编写代码。 |
| 4 | [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) | Open-source alternative to AI video platforms — Fr... | JavaScript | 14.4k | 393 | 开源的 AI 视频生成平台替代品，支持 200+ 模型（Flux, Sora 等）。提供图像/视频生成、唇形同步及影院模式，无内容过滤，支持自托管与桌面应用。支持通过编程代理自动化生成媒体内容，无需订阅费用。 |
| 5 | [supertone-inc/supertonic](https://github.com/supertone-inc/supertonic) | Lightning-Fast, On-Device, Multilingual TTS — runn... | Swift | 6.8k | 745 | Supertonic 是一个基于 ONNX Runtime 的本地多语言文本转语音系统。它具有闪电般的速度，支持31种语言，无需云端即可在边缘设备上运行，保护隐私。该模型仅含9900万参数，输出44.1kHz高保真音频，并支持表情标签以增加自然感，适用于桌面、移动端及浏览器等多种环境。 |
| 6 | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Your Personal AI super intelligence. Private, Simp... | Rust | 10.7k | 1.6k | OpenHuman 是一个基于 Rust 的开源个人 AI 超级智能助手。它采用 UI 优先的设计，拥有桌面吉祥物，支持与 Google Meet 等工具集成。项目内置 118+ 第三方应用集成，通过 OAuth 自动获取数据，并利用本地 SQLite 和 Memory Tree 构建知识库。它旨在提供简单、私密且强大的个人代理体验，目前处于早期测试阶段。 |
| 7 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 58.3k | 990 | RuView 是一个基于 Rust 的 WiFi 感知平台，利用 ESP32 网状网络采集信道状态信息（CSI）。它能在无摄像头、无穿戴设备的情况下，通过 WiFi 信号实现透视墙壁、人体存在检测、呼吸心率监测、活动识别及睡眠质量分析。项目运行在边缘硬件上，旨在将普通 WiFi 转化为空间智能系统。 |
| 8 | [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | Pre-indexed code knowledge graph for Claude Code —... | TypeScript | 2.5k | 397 | CodeGraph 是一个为 Claude Code 提供语义代码知识图谱的工具。它通过预索引代码库的符号关系和调用图，让 AI 代理直接查询图谱而非扫描文件，从而大幅减少令牌消耗和工具调用次数。该工具 100% 本地运行，能显著提升代码探索速度。 |

[查看完整数据](api/github/2026-05-16.json)
<!-- END GITHUB TRENDING -->




