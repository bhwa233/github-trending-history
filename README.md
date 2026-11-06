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

**最后更新**: 2026-11-05 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | Auto Ontology is a Python framework for building s... | Python | 7.6k | 2.7k | NVIDIA Auto Ontology 是一个 Python 框架，旨在为 LLM 和智能体构建语义图推理层。它从企业元数据生成知识图谱，提供上下文检索和可解释的 AI。支持自然语言转 SQL，通过 MCP、CLI 和 API 暴露上下文，并包含 Web UI 和 RBAC，确保数据可靠性和业务一致性。 |
| 2 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 315.4k | 2.1k | 这是一个为 AI 编程助手设计的技能库，旨在帮助工程师进行真正的工程开发而非“氛围编码”。它包含一系列小巧、可组合的 Shell 脚本和提示词，支持 Claude、Copilot、Codex 等多种主流工具。用户可以通过插件快速安装，自定义工作流，提升代码质量和开发效率。 |
| 3 | [garrytan/gstack](https://github.com/garrytan/gstack) | Use Garry Tan's exact Claude Code setup: 23 opinio... | TypeScript | 140.0k | 612 | gstack 是一个开源的 AI 软件工厂，旨在将 Claude Code 转化为虚拟工程团队。它集成了 CEO、设计师、工程经理、QA、安全官和发布工程师等 23 个角色，通过自动化代码审查、QA 测试和发布流程，帮助开发者高效构建产品，支持多冲刺并行开发。 |
| 4 | [Usagi-org/ai-goofish-monitor](https://github.com/Usagi-org/ai-goofish-monitor) | 基于 Playwright 和AI实现的闲鱼多任务实时/定时监控与智能分析系统，配备了功能完善的后台... | Python | 17.7k | 240 | 基于 Python 和 Playwright 的闲鱼智能监控系统，利用 AI 自然语言处理和多模态分析实现商品监控。支持多任务并发、高级筛选、定时调度及多种通知渠道，提供 Web 可视化管理界面，支持 Docker 一键部署。 |
| 5 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 🕷️ The BEST Web Scraping framework that handles e... | Python | 98.1k | 1.7k | Scrapling 是一个功能全面的 Python Web 抓取框架，集成了快速 HTTP 请求、隐身浏览器、JavaScript 渲染和并发爬取能力。它支持静态页面抓取、API 数据提取、代理轮换及数据导出，并提供 MCP 服务器和 Agent Skill 以支持 AI 代理操作，覆盖从单页抓取到全站爬取的完整工作流。 |
| 6 | [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | Computer use CLI for AI agents... | Rust | 17.1k | 2.2k | Agent Desktop 是一个为 AI 代理提供计算机使用能力的 CLI 工具。它通过读取操作系统的可访问性树来获取 UI 元素，并以 JSON 格式返回，包含可操作的引用。它支持 macOS、Windows 和 Linux，无需截图或像素匹配，适合构建自动化代理。 |
| 7 | [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | Worktrunk is a CLI for Git worktree management, de... | Rust | 11.6k | 546 | Worktrunk 是一个用 Rust 编写的 CLI 工具，旨在简化 Git worktree 管理。它专为并行 AI agent 工作流设计，通过提供核心命令（如切换、创建和清理）来替代繁琐的 Git 原生操作。它还支持 Hooks 和 Copy-on-Write 缓存，显著提升了多任务并行开发的效率。 |
| 8 | [lz4/lz4](https://github.com/lz4/lz4) | Extremely Fast Compression algorithm... | C | 12.4k | 23 | LZ4 是一个极速的无损压缩算法，支持多核 CPU 扩展。它提供极高的压缩和解压速度，并支持动态调整压缩率。包含标准版 LZ4 和高压缩率版本 LZ4_HC，支持字典压缩。库采用 BSD 2-Clause 许可证，命令行工具采用 GPL-2.0 许可证。 |
| 9 | [google/skills](https://github.com/google/skills) | Agent Skills for Google products and technologies... | Python | 22.4k | 211 | 该项目为 Google 产品和技术提供 Agent Skills，涵盖 Google Cloud、多产品解决方案及 AI/ML 领域。它支持通过 npx 命令行工具安装和更新技能，帮助开发者快速配置代理，实现认证授权、架构工作流、数据分析及模型管理等任务，提升开发效率。 |
| 10 | [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Browser automation CLI for AI agents... | Rust | 46.0k | 150 | 这是一个基于 Rust 的浏览器自动化 CLI 工具，专为 AI 代理设计。它允许代理通过命令行打开网页、读取无障碍树，并使用引用或选择器执行点击、获取内容等操作。通过 Chrome DevTools Protocol 控制浏览器，支持交互式和脚本化任务，非常适合需要网页交互的 AI 智能体。 |
| 11 | [scenario-labs/skills](https://github.com/scenario-labs/skills) | Get production-ready images, video, audio, and 3D ... | Python | 3.1k | 667 | 该项目提供了一套 AI 代理技能库，旨在通过 Scenario MCP 服务器帮助用户生成高质量的生产级图像、视频、音频和 3D 资产。它支持 Claude Code、Cursor 等主流 AI 编码代理，并包含驱动 Blender、Maya、Unity 等本地 DCC 软件的专家工具，覆盖游戏开发与创意制作全流程。 |
| 12 | [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | ConardLi's open-source Skills collection, featurin... | JavaScript | 14.2k | 175 | 这是一个面向 AI 编程 Agent 的开源技能集合，包含网页设计、知识检索等功能。其中 motion-showreel 技能专注于生成式视频制作，支持通过确定性渲染管道生成 MP4 视频，内置 43 种风格库，能实现图片与声音的时间轴同步，适用于作品集展示、UI 动画及产品影片。 |
| 13 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 56.1k | 223 | VibeVoice 是微软开源的前沿语音 AI 项目，包含 ASR（语音转文本）和 TTS（文本转语音）功能。支持 50+ 语言，具备流式识别、长音频处理及说话人分离能力。提供 BitNet 量化版本，可在无 GPU 的 CPU 上实现实时推理，并已集成至 Azure AI Foundry 和 Hugging Face Transformers。 |
| 14 | [floci-io/floci](https://github.com/floci-io/floci) | Light, fluffy, and always free - The AWS Local Emu... | Java | 30.5k | 779 | Floci 是一个轻量级、免费的本地 AWS 模拟器，专为开发、测试和 CI 环境设计。它无需云账户或认证令牌，支持 AWS SDK、CLI、Terraform 和 CDK 等工具，可作为 LocalStack 的直接替代品。通过 Docker Compose 或 CLI 即可快速启动，提供与 AWS 一致的本地服务体验。 |
| 15 | [JiaFeiMiao-K-Cat/DiscImageStudio](https://github.com/JiaFeiMiao-K-Cat/DiscImageStudio) | ... | C# | 7.4k | 984 | DiscImageStudio 是一款基于 C# 的工具，可将图片转换为符合 CD、DVD 和单层 BD-R 物理层约束的数据。它支持图层排版、灰度调整及多种导出格式（ISO、RAW、WAV+CUE），并具备辅助标定功能以实现高精度盘面复刻。 |

[查看完整数据](api/github/2026-11-05.json)
<!-- END GITHUB TRENDING -->




