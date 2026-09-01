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

**最后更新**: 2026-08-31 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | Open Multi-Agent Interactive Classroom — Get an im... | TypeScript | 27.2k | 2.8k | OpenMAIC 是一个基于 TypeScript 的开源多智能体交互式课堂平台。它允许用户通过一个提示词生成完整课程，并提供智能体工作台进行规划、构建和修订。支持上传文档、音频、视频等材料，包含20种内置教学工具，且支持自定义模型和存储后端，旨在提供沉浸式学习体验。 |
| 2 | [tt-a1i/archify](https://github.com/tt-a1i/archify) | Agent skill for beautiful, verifiable architecture... | JavaScript | 38.9k | 4.0k | Archify 是一个专为 AI 代理设计的 Node.js 工具，用于将代码库或系统描述转化为交互式系统地图。它将类型化的 JSON IR 编译为 HTML/SVG，支持架构、工作流、数据流等多种图表。具备快照对比、路由追踪及多格式导出功能，确保架构变更的可验证性与可视化。 |
| 3 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Turn any AI agent into an AI Scientist. The #1 Age... | Python | 40.8k | 2.0k | 这是一个将任何 AI 代理转化为 AI 科学家的技能库，包含 163+ 个现成的科学技能，覆盖生物、化学、医学等领域。新增 K-Dense BYOK 功能，允许用户在本地运行免费开源的 AI 科学家，保护数据隐私。兼容 Cursor、Claude Code 等多种 AI 工具。 |
| 4 | [k1tbyte/Wand-Enhancer](https://github.com/k1tbyte/Wand-Enhancer) | Advanced UX and interoperability extension for Wan... | C# | 23.4k | 582 | 这是一个为 Wand (WeMod) 应用设计的开源扩展工具，旨在提升用户体验和互操作性。它通过本地 .NET 修补器修改客户端配置，支持高级主题定制、AI 功能及远程 Web 面板。项目强调安全性，不涉及遥测，但需用户自行编译源码。 |
| 5 | [majd/ipatool](https://github.com/majd/ipatool) | Command-line tool that allows searching and downlo... | Go | 10.6k | 373 | 这是一个用 Go 语言编写的命令行工具，允许用户通过 Apple ID 在 App Store 上搜索 iOS、iPadOS、tvOS 和 visionOS 应用，并下载对应的 ipa 安装包。支持认证、搜索和购买授权等功能，方便开发者或用户获取应用资源。 |
| 6 | [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 🧠 Train a 64M-parameter LLM from scratch in just ... | Python | 56.2k | 495 | 这是一个旨在从零开始训练 64M 参数轻量级语言模型的开源项目。它提供了完整的训练链路，包括预训练、微调、RLHF 等，覆盖 MoE、数据清洗、工具使用等全流程。项目使用原生 PyTorch 实现，不依赖高层抽象，旨在降低 LLM 学习门槛，让个人 GPU 也能快速复现大模型训练全过程，兼具教程与实战价值。 |
| 7 | [Osmantic/ODS](https://github.com/Osmantic/ODS) | Turn your PC, Mac, or Linux box into an AI server.... | Python | 5.5k | 77 | ODS 是一个将本地硬件（PC/Mac/Linux）转化为私有 AI 服务器的部署系统。它集成了 Ollama、Open WebUI、n8n 和 ComfyUI 等工具，提供本地 LLM 推理、聊天界面、语音交互、RAG、工作流自动化及图像生成。该系统强调数据隐私，无需云端订阅，并提供集中式控制仪表盘，旨在简化 AI 服务器搭建。 |
| 8 | [checkstyle/checkstyle](https://github.com/checkstyle/checkstyle) | Checkstyle is a development tool to help programme... | Java | 9.4k | 198 | Checkstyle 是一款 Java 代码质量检查工具，旨在确保代码符合 Google Java Style Guide 等编码标准。它高度可配置，支持命令行和 ANT 任务调用，能自动检测代码规范违规（如 FallThrough 错误），帮助开发者提升代码质量和可维护性。 |
| 9 | [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | Reverse Engineering / Authorized Penetration Testi... | PowerShell | 33.2k | 1.4k | 这是一个面向逆向工程、渗透测试和安全研究的 PowerShell 技能路由包。它为 AI 代理（如 Claude Code）提供智能路由，根据任务类型（APK、二进制、JS 等）自动选择正确的工具和方法论。项目包含可重复的工作流、按需自举工具链和自我进化知识库，旨在解决 AI 代理在安全任务中缺乏上下文和工具选择能力的问题，支持 Windows 和 Ubuntu。 |
| 10 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 245.3k | 512 | ECC 是一个面向 Claude Code、Cursor 等代码代理的性能优化系统。它提供技能、记忆、安全和研究优先的开发工具，帮助代理在构建前规划、验证变更、审查工作并记忆重要信息。项目支持 MIT 许可，提供免费开源版本和付费的 ECC Pro 托管 GitHub App。 |
| 11 | [kaifcodec/user-scanner](https://github.com/kaifcodec/user-scanner) | 🕵️‍♂️ (2-in-1) Email & Username OSINT suite for d... | Python | 4.3k | 93 | 这是一个强大的开源网络情报（OSINT）工具，专为深度数据提取设计。它支持从单一邮箱或用户名出发，在465+个平台上进行扫描。项目具备丰富的元数据抓取、跨扫描引擎、MCP服务器集成以及高并发处理能力，适用于安全研究和数字足迹分析。 |
| 12 | [every-app/open-seo](https://github.com/every-app/open-seo) | Open source alternative to Semrush and Ahrefs... | TypeScript | 15.8k | 610 | OpenSEO 是一款开源的 SEO 工具，旨在替代 Semrush 和 Ahrefs。它支持 MCP 和 AI 代理集成，提供关键词研究、排名追踪等功能。用户可自托管，无需订阅费，仅需按使用付费 DataForSEO API。 |
| 13 | [p-e-w/heretic](https://github.com/p-e-w/heretic) | Fully automatic censorship removal for language mo... | Python | 29.7k | 537 | Heretic 是一个用于语言模型的完全自动审查移除工具。它结合了方向消融技术和 Optuna 优化器，无需人工干预即可自动寻找参数，在最小化拒绝率和保持模型能力（低 KL 散度）之间取得平衡。支持多种模型架构，操作简单，能生成高质量的去审查模型。 |
| 14 | [handsomestWei/patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill) | 中国专利.skill：专利点挖掘与交底书（发明/实用/外观）编写，通俗解读专利，嗅探政策动向，辅助审... | Python | 6.3k | 571 | 这是一个基于 Python 的中国专利辅助技能，旨在帮助研发人员挖掘专利点、编写发明/实用新型/外观设计交底书，并支持专利通俗解读与查新。它通过扫描代码和文档自动生成框图、线稿，并集成 Obsidian 进行知识管理，解决专利撰写难的问题。 |
| 15 | [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Fast Rust library for PDF inspection, classificati... | Rust | 17.4k | 228 | 这是一个用 Rust 编写的快速 PDF 检查、分类和文本提取库。它能智能检测 PDF 类型（文本/扫描），进行定位感知的文本提取和 Markdown 转换，支持多列布局和表格识别。内置选择性 OCR 功能，可在本地快速处理，避免昂贵的 OCR 服务，支持 Python、Node.js 和 WebAssembly。 |
| 16 | [pollen-robotics/microduck_rl](https://github.com/pollen-robotics/microduck_rl) | RL training environments for Microduck (mjlab)... | Python | 1.2k | 385 | 这是一个用于 Microduck 双足机器人的强化学习训练环境。基于 MuJoCo Warp 和 PPO 算法，实现了从仿真到现实的完整 Sim2Real 工作流，包含 BAM 执行器物理、域随机化及奖励设计。支持导出 ONNX 模型部署，旨在训练机器人的行走与姿态控制策略。 |

[查看完整数据](api/github/2026-08-31.json)
<!-- END GITHUB TRENDING -->




