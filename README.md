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

**最后更新**: 2026-09-01 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | runs anywhere. uses anything... | TypeScript | 31.3k | 80 | OpenClaude 是一个开源的编码代理 CLI 工具，支持 OpenAI 兼容 API、Gemini、Ollama 等多种云和本地模型。它提供统一的终端工作流，集成了提示词、工具、代理、MCP 和斜杠命令，旨在简化 AI 编码体验。 |
| 2 | [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | Academic Research Skills for Claude Code: research... | Python | 44.9k | 193 | 这是一个为 Claude Code 打造的学术研究全流程技能套件，涵盖研究、写作、审核与定稿。它利用 AI 处理引用、格式及数据验证等繁琐工作，通过风格校准和逻辑检查提升质量。项目强调人机协作，旨在辅助人类研究者提升效率，避免 AI 幻觉与逻辑错误。 |
| 3 | [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | Open Multi-Agent Interactive Classroom — Get an im... | TypeScript | 29.5k | 3.1k | OpenMAIC 是一个开源的多智能体交互式课堂项目。用户可通过一个提示词生成完整课程，利用智能体工作台进行规划、构建和修订。项目支持上传多种媒体材料，提供幻灯片、测验等20种内置技能，且采用中立设计，支持自定义模型和存储后端，旨在提供沉浸式学习体验。 |
| 4 | [iv-org/invidious](https://github.com/iv-org/invidious) | Invidious is an alternative front-end to YouTube... | Crystal | 23.8k | 577 | Invidious 是一个基于 Crystal 语言开发的 YouTube 替代前端。它专注于隐私保护，提供无广告、无跟踪、无需 JavaScript 的视频观看体验。支持自定义主题、订阅管理、音频模式及 Reddit 评论。支持数据导入导出，不使用官方 YouTube API，允许用户托管私有实例，是追求隐私用户的理想选择。 |
| 5 | [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 🧠 Train a 64M-parameter LLM from scratch in just ... | Python | 57.1k | 1.0k | 这是一个从零开始训练64M参数轻量级大语言模型的开源项目。旨在降低LLM学习门槛，仅需3美元成本和2小时即可完成训练。项目覆盖了从预训练、SFT到RLHF、工具使用等全流程，核心代码原生PyTorch实现，不依赖高层抽象，适合个人GPU复现，是LLM入门与实践的绝佳教程。 |
| 6 | [3b1b/manim](https://github.com/3b1b/manim) | Animation engine for explanatory math videos... | Python | 92.6k | 86 | Manim 是一个用于制作解释性数学视频的精确程序化动画引擎。它最初由 3Blue1Brown 开发，现已有社区版本。支持 Python 编程，并依赖 FFmpeg、OpenGL 和 LaTeX 等系统工具来生成高质量的矢量图形动画。 |
| 7 | [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Fast Rust library for PDF inspection, classificati... | Rust | 17.9k | 541 | 这是一个用 Rust 编写的快速 PDF 检查库，支持智能分类（文本/扫描/图像）、定位感知的文本提取和 Markdown 转换。它能自动检测多列布局和表格，并提供选择性 OCR 功能以节省资源。支持 Python、Node.js 和 WebAssembly 绑定，能在本地快速处理 PDF。 |
| 8 | [browser-use/video-use](https://github.com/browser-use/video-use) | Edit videos with coding agents... | Python | 22.9k | 472 | 这是一个基于 Claude Code 的开源视频编辑工具。用户只需将素材放入文件夹，通过对话指令即可自动完成剔除填充词、自动调色、添加字幕及生成动画等剪辑工作。项目利用 FFmpeg 和 ElevenLabs 等技术，实现了无需预设菜单的智能化视频处理流程。 |
| 9 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Turn any AI agent into an AI Scientist. The #1 Age... | Python | 41.5k | 912 | 这是一个将任何 AI 代理转变为 AI 科学家的大型技能库。包含 163 个经过验证的科学技能，覆盖生物、化学、医学等领域，支持 100+ 科学数据库。兼容多种 AI 工具，并提供本地运行的 K-Dense BYOK 开源 AI 共同科学家工具，数据安全。 |
| 10 | [handsomestWei/patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill) | 中国专利.skill：专利点挖掘与交底书（发明/实用/外观）编写，通俗解读专利，嗅探政策动向，辅助审... | Python | 6.7k | 501 | 这是一个基于 Python 的专利辅助技能，旨在帮助研发人员挖掘专利点并编写交底书。它支持发明、实用新型和外观设计，能自动生成 Word 文档和框图，并利用 Obsidian 进行专利知识图谱管理，实现从技术到文档的自动化转化。 |
| 11 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | A collection of DESIGN.md files analysis by popula... | - | 112.8k | 323 | 该项目提供由流行品牌设计系统分析的 DESIGN.md 文件集合。DESIGN.md 是一种纯文本设计系统文档，允许 AI 代理根据文档生成视觉一致的高质量 UI。开发者无需 Figma 导出或特殊工具，只需将文件放入项目即可让 AI 代理构建匹配的界面。 |
| 12 | [averygan/reclip](https://github.com/averygan/reclip) | Download videos from almost any website. Lightweig... | HTML | 7.6k | 56 | 这是一个自托管的轻量级视频和音频下载工具，拥有简洁的 Web 界面。它支持从 YouTube、TikTok、Instagram 等超过 1000 个网站下载视频或音频，支持批量处理和画质选择。后端基于 Python Flask，前端为原生 HTML/JS，代码量极少，易于部署。 |
| 13 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 245.8k | 623 | ECC 是一个专为 AI 编码代理（如 Claude Code、Cursor）设计的性能优化系统。它提供了一套协调的工程工具箱，包含技能、记忆、安全性和研究优先的开发功能。该系统帮助代理在构建前规划、通过测试验证变更、自我审查工作，并将重复的成功转化为可重用的技能和工作流。 |
| 14 | [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | 🚀🤖 Crawl4AI: Open-source LLM Friendly Web Crawle... | Python | 80.8k | 145 | Crawl4AI 是一个开源的、LLM 友好的网页爬虫与抓取工具，旨在将网页转换为干净的 Markdown，供 RAG、AI 代理及数据管道使用。项目具备深度爬取、崩溃恢复、PDF 处理及 Docker API 服务器功能。近期重点进行了安全加固，修复了多项漏洞并默认启用认证，适合构建大规模、可控的 Web 数据提取系统。 |

[查看完整数据](api/github/2026-09-01.json)
<!-- END GITHUB TRENDING -->




