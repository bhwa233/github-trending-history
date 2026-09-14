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

**最后更新**: 2026-09-13 | **成功**: 18 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [JustVugg/colibri](https://github.com/JustVugg/colibri) | Run frontier MoE models on hardware you already ow... | C | 29.8k | 868 | Colibri 是一个纯 C 语言编写的零依赖推理引擎，旨在运行参数量达 744B 到 2.8T 的前沿 MoE 模型。它通过将存储、内存和显存视为统一的层级，实现专家流式加载，降低对稀缺硬件的依赖，支持多种主流模型家族。 |
| 2 | [ever-co/ever-gauzy](https://github.com/ever-co/ever-gauzy) | Ever® Gauzy™ - Open Business Management Platform (... | TypeScript | 5.1k | 191 | Ever Gauzy 是一个基于 TypeScript 的开源商业管理平台，集成了 ERP、CRM、HRM、ATS 和项目管理等模块。它提供从财务、人力资源到销售的全流程管理解决方案，支持 Headless API，具备时间追踪、绩效监控、库存管理及会计开票等功能，旨在为协作经济提供一站式企业级服务。 |
| 3 | [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | A spy satellite simulator in your browser, except ... | JavaScript | 31.9k | 2.7k | 这是一个基于浏览器的间谍卫星模拟器，利用真实数据提供逼真的3D地球。它实时追踪飞机、船只、卫星、地震、交通及公共摄像头，支持语音控制，无需API密钥即可本地运行。用户可体验驾驶舱视角飞行，点击追踪目标，并查看周围实时联系人。该项目开源且可扩展，将全球公开信号整合为可探索的交互式地图。 |
| 4 | [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | The secure, validated skill registry for professio... | TypeScript | 5.7k | 265 | 这是一个为专业 AI 编码代理提供的安全、经过验证的技能注册表。通过静态分析、人工策展和 Snyk 扫描确保技能库的安全性，解决了开放市场中 13% 技能存在漏洞的问题。支持 Claude Code、Cursor、Copilot 等多种主流 AI 编码工具，提供可扩展的插件化能力。 |
| 5 | [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | Open-source AI sales OS — self-hosted CRM with nat... | TypeScript | 2.2k | 432 | DeskcommCRM 是一个开源的 AI 销售操作系统，基于 TypeScript 开发。它提供自托管的 CRM 功能，集成了原生 AI 代理，专门用于 WhatsApp 营销。作为 Kommo、Octadesk 和 Intercom 的开源替代方案，它支持多租户和 LGPD 合规，帮助企业通过聊天进行销售。 |
| 6 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 58.4k | 380 | OpenMontage 是世界上首个开源、代理驱动的视频制作系统。它包含 12 个生产管道和 700+ 代理技能，能将 AI 编码助手转化为全功能视频工作室。不仅能制作基于图像的视频，还能利用开源素材库生成包含真实运动片段的成品视频，涵盖从概念、脚本到剪辑、渲染的全流程。 |
| 7 | [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | Extracted system prompts from Anthropic - Claude F... | JavaScript | 66.0k | 706 | 该项目收集并整理了来自Anthropic、OpenAI、Google、xAI等主流大模型的泄露系统提示词，涵盖Claude、ChatGPT、Gemini、Grok等。内容定期更新，被媒体用于分析AI行为，帮助开发者了解大模型的底层指令和规则。 |
| 8 | [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | Fully autonomous AI Agents system capable of perfo... | Go | 24.0k | 590 | Pentagi 是一个基于 Go 语言开发的完全自主 AI Agent 系统，专注于执行复杂的渗透测试任务。项目采用前后端分离架构，包含后端服务、前端界面及可观测性模块，支持通过 Docker 快速部署。它利用 AI 技术自动化安全测试流程，旨在提升渗透测试的效率与深度。 |
| 9 | [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE) | YuE2: frontier music generation with symbolic plan... | Python | 7.7k | 487 | YuE2 是一个前沿的音乐生成项目，通过符号化规划实现高质量音乐创作。它支持文本生成歌曲、零样本翻唱和代理式音乐编辑，允许用户在渲染前查看和编辑乐谱，并能通过对话进行风格转换和歌曲优化。 |
| 10 | [yuliskov/SmartTube](https://github.com/yuliskov/SmartTube) | Browse media content with your own rules on Androi... | Java | 33.5k | 233 | SmartTube 是一款专为 Android TV 设计的开源媒体客户端，允许用户在电视优化界面下浏览和播放内容。它支持 8K、HDR、SponsorBlock 等高级功能，且无需 Google 服务。开发者近期报告了安全事件，建议用户检查权限。目前不支持手机和平板，主要面向电视用户。 |
| 11 | [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Run parallel research agents with any model... | Rust | 2.1k | 289 | OpenResearch 是一个基于 Rust 的本地优先研究工作空间，旨在运行并行研究代理。它支持 Claude Code、Codex 等工具，允许用户进行文献综述、假设开发和实验。核心特性包括并行探索、基于 Git 的可重现实验、上下文证据管理以及自动研究循环。支持本地或云端计算，适合研究人员进行自主科研。 |
| 12 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 26.8k | 2.6k | VoiceStudio 是一个开源、完全本地化的 ElevenLabs 替代品，基于 Python 开发。它支持语音克隆、视频配音、听写、转录和有声书创作，覆盖 646 种语言。项目提供 16 个 TTS 和 11 个 ASR 引擎，无需账户或订阅，支持多种硬件加速，目前处于活跃 Beta 阶段。 |
| 13 | [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) | claude-red is a curated library of offensive secur... | Python | 4.1k | 506 | 这是一个针对 Claude AI 的攻击性安全技能库，包含 SQL 注入、Shellcode、EDR 绕过等专业技能。通过结构化的 SKILL.md 文件，Claude 可根据对话上下文按需加载特定领域的攻击方法论，适用于授权红队、漏洞赏金和安全研究。 |
| 14 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Fast, efficient, battle-tested at Alibaba's scale.... | Go | 23.5k | 443 | 阿里巴巴开源的 AI 代码审查 CLI 工具，采用混合架构（确定性管道+LLM Agent），能生成高精度的行级评论。内置多语言规则集，支持读取完整文件和搜索代码库进行深度审查。相比通用 Agent，它在相同模型下精度更高、耗 Token 更少，专为大规模生产环境设计。 |
| 15 | [jihe520/MathModelAgent](https://github.com/jihe520/MathModelAgent) | 🤖📐专为数学建模设计的 Agent & skills ,自动完成数学建模，生成一份完整的可以直接... | Python | 5.3k | 246 | 这是一个专为数学建模设计的开源 Agent 项目，利用 Python 和 SKILLS 技术实现全流程自动化。它能自动分析问题、建模、编写代码、绘图并生成排版精美的论文。支持多 Agent 协作、RAG 知识库检索、Web 搜索及人机交互，内置多种竞赛模板和验收机制，旨在将建模时间从三天缩短至一小时。 |
| 16 | [tonhowtf/omniget](https://github.com/tonhowtf/omniget) | Download Udemy and Hotmart courses, YouTube videos... | Rust | 11.7k | 507 | 处理失败 |
| 17 | [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | A practical Douyin downloader for both single-item... | Python | 11.4k | 452 | 这是一个功能全面的抖音视频下载工具，支持单视频、图集、合集、音乐及个人主页批量下载。具备去水印、进度显示、断点续传、SQLite去重及完整性校验等功能。项目还提供了一个名为Douzy的桌面应用，支持抖音、TikTok和YouTube多平台，提供可视化的任务管理和本地归档功能。 |
| 18 | [Swordfish90/cool-retro-term](https://github.com/Swordfish90/cool-retro-term) | A good looking terminal emulator which mimics the ... | QML | 26.2k | 57 | cool-retro-term 是一款模仿老式阴极射线管显示器的终端模拟器。它外观精美、可自定义且轻量级。基于 QML 和 qmltermwidget 构建，支持 Linux 和 macOS，提供复古的视觉体验和丰富的设置选项。 |
| 19 | [huggingface/transformers](https://github.com/huggingface/transformers) | 🤗 Transformers: the model-definition framework fo... | Python | 165.5k | 152 | Hugging Face Transformers 是一个支持文本、视觉、音频及多模态模型的机器学习框架。它集成了超过 100 万个预训练模型检查点，旨在简化 SOTA 模型的使用。该库与多种训练和推理框架兼容，提供 Pipeline API，方便开发者进行模型推理和训练，推动机器学习技术的普及。 |

[查看完整数据](api/github/2026-09-13.json)
<!-- END GITHUB TRENDING -->




