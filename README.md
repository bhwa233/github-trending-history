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

**最后更新**: 2026-09-14 | **成功**: 20 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [JustVugg/colibri](https://github.com/JustVugg/colibri) | Run frontier MoE models on hardware you already ow... | C | 32.1k | 2.2k | Colibri 是一个纯 C 编写的推理引擎，旨在将存储、内存和显存视为统一层级，以在消费级硬件上运行超大 MoE 模型。它支持从 744B 到 2.8T 参数的模型，通过流式传输专家优化性能，是一个专注于软件/硬件边界推理优化的开放研究平台。 |
| 2 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Fast, efficient, battle-tested at Alibaba's scale.... | Go | 25.8k | 1.6k | OpenCodeReview 是阿里巴巴开源的高效 AI 代码审查工具，基于 Go 开发。它采用确定性管道与 LLM Agent 混合架构，能精准定位 NPE、线程安全等缺陷。相比通用 Agent，它在同等模型下精度更高、速度更快且 Token 消耗更少。支持 Git Diff 分析、全文件 OCR 审计及跨文件上下文理解，适合大规模团队提升代码质量。 |
| 3 | [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE) | YuE2: frontier music generation with symbolic plan... | Python | 8.3k | 559 | YuE2 是一个前沿的音乐生成项目，统一了符号与音频生成。它通过“白盒”符号规划实现高质量歌曲创作，支持零样本翻唱和代理式编辑。用户可基于歌词和风格生成完整歌曲，并能通过对话实时调整乐谱与风格，达到与 Suno v5/v6 相当的 frontier quality。 |
| 4 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 29.2k | 2.8k | VoiceStudio 是一个完全本地化的 ElevenLabs 替代品，支持语音克隆、视频配音、听写和有声书制作。项目支持 646 种语言，内置 16 个 TTS 和 11 个 ASR 引擎，无需账号或订阅。提供桌面应用及 OpenAI 兼容 API，适用于个人硬件上的语音处理任务。 |
| 5 | [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | A Simple and Universal Swarm Intelligence Engine, ... | Python | 73.2k | 560 | MiroFish 是一个基于多智能体技术的下一代 AI 预测引擎。它通过提取现实世界的种子信息，构建高保真的平行数字世界，让数千个具有独立人格的智能体在其中自由交互演化。用户可从上帝视角注入变量，在数字沙盒中预演未来，从而获得详细的预测报告。 |
| 6 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet... | Python | 81.3k | 651 | Agent Reach 是一个为 AI Agent 提供全网访问能力的 Python CLI 工具。它支持 Twitter、Reddit、YouTube、GitHub、B站、小红书等平台，提供阅读和搜索功能。项目完全免费、开源且注重隐私，具备自动切换后端机制以应对平台封禁，兼容所有命令行 Agent。 |
| 7 | [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | Extracted system prompts from Anthropic - Claude F... | JavaScript | 66.8k | 764 | 该项目收集并整理了 Claude、ChatGPT、Gemini、Grok 等主流 AI 模型的泄露系统提示词。它详细记录了这些模型的隐藏规则和底层指令，并保持定期更新。该项目被媒体用于分析 AI 行为，揭示了 AI 在用户交互前的内部逻辑。 |
| 8 | [rlaope/oh-my-hermes](https://github.com/rlaope/oh-my-hermes) | All in one plugin for Hermes Agent ⚚ the coding in... | Python | 2.0k | 77 | oh-my-hermes 是一个为 Hermes Agent 设计的 All-in-one 插件，旨在增强其工作流。它作为一个操作层，提供规划、研究、编码交接和项目记忆功能，通过明确的证据边界将普通请求转化为清晰的能力和记录，强化现有工作流而不替换 Hermes。 |
| 9 | [localsend/localsend](https://github.com/localsend/localsend) | An open-source cross-platform alternative to AirDr... | Dart | 91.3k | 251 | LocalSend 是一个开源的跨平台应用，旨在替代 AirDrop。它利用 REST API 和 HTTPS 加密，允许用户在本地网络内安全地传输文件和消息，无需互联网连接或第三方服务器，支持 Android、iOS、macOS、Windows 和 Linux。 |
| 10 | [dani-garcia/vaultwarden](https://github.com/dani-garcia/vaultwarden) | Unofficial Bitwarden compatible server written in ... | Rust | 67.5k | 115 | 这是一个用 Rust 编写的 Bitwarden 兼容服务器，专为自托管设计。它几乎完整实现了 Bitwarden 客户端 API，支持个人保险库、多因素认证、组织管理和附件等功能。相比官方服务，它更轻量级，推荐使用 Docker 部署，非常适合资源有限或希望私有化部署密码管理的用户。 |
| 11 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 106.1k | 745 | TradingAgents 是一个基于多智能体架构的金融交易框架，利用 LLM 进行市场研究和交易决策。支持多种主流大模型（如 GPT-5.x, Claude 4.x）和数据源（FRED, Polymarket），具备回测、情绪分析和决策日志功能，旨在通过 AI 智能体实现自动化量化交易。 |
| 12 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 93.8k | 383 | RuView 是一个基于 Rust 的 WiFi 感知平台，利用 WiFi 信号进行空间智能分析。它无需摄像头或可穿戴设备，即可实现穿墙检测、生命体征监测（呼吸/心率）、活动识别（如跌倒）及睡眠质量分析。项目原生支持 Home Assistant、Apple Home、Google Home 和 Amazon Alexa 等主流智能家居生态，通过 MQTT 和 Matter 协议提供丰富的实体状态和语音控制能力。 |
| 13 | [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | The secure, validated skill registry for professio... | TypeScript | 6.1k | 512 | 这是一个为专业AI编码代理提供的安全、验证技能注册表。它通过打包的指令和资源（技能）扩展Claude Code、Cursor、Copilot等代理的能力。项目强调安全与信任，采用100%开源、静态分析、内容哈希和人工审核等机制，确保技能库无漏洞，为AI开发提供可信的插件生态。 |
| 14 | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | VoxCPM2: Tokenizer-Free TTS for Multilingual Speec... | Python | 37.4k | 216 | VoxCPM2 是一个基于 MiniCPM-4 的 2B 参数多语言 TTS 系统，采用无分词器扩散自回归架构。支持 30 种语言、声音设计及高质量克隆，输出 48kHz 音频，具备实时流式传输能力，完全开源且商业可用。 |
| 15 | [huggingface/transformers](https://github.com/huggingface/transformers) | 🤗 Transformers: the model-definition framework fo... | Python | 166.0k | 536 | Transformers 是一个用于文本、视觉、音频和多模态模型的模型定义框架，支持推理和训练。它连接了训练框架、推理引擎和建模库，拥有超过100万个模型检查点，旨在民主化最先进机器学习模型的使用。 |
| 16 | [ever-co/ever-gauzy](https://github.com/ever-co/ever-gauzy) | Ever® Gauzy™ - Open Business Management Platform (... | TypeScript | 6.0k | 1.1k | Ever Gauzy 是一个开源的商业管理平台，集成了 ERP、CRM、HRM、ATS 和项目管理等核心模块。它提供时间追踪、财务管理和供应链解决方案，旨在为协作经济提供全面的业务支持。 |
| 17 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | Project NOMAD is an offline-first knowledge and ed... | TypeScript | 36.9k | 40 | Project NOMAD 是一个离线优先的知识与教育服务器，集成了维基百科、书籍、课程、地图及可选本地 AI。它通过 Docker 容器化技术提供命令中心管理界面，支持在 Debian/Ubuntu 系统上快速部署，旨在让用户在无互联网环境下掌控自有硬件上的知识与数据。 |
| 18 | [reconurge/flowsint](https://github.com/reconurge/flowsint) | A modern platform for visual, flexible, and extens... | TypeScript | 8.3k | 280 | Flowsint 是一个开源的 OSINT 图探索工具，专为网络安全分析师设计。它提供可视化的、灵活的基于图的研究平台，支持数据存储在本地以保护隐私。项目使用 TypeScript 开发，通过 Docker 快速部署，适用于道德调查和透明度验证。 |
| 19 | [peetzweg/opendisplay](https://github.com/peetzweg/opendisplay) | Free, open-source Sidecar/Duet alternative — use y... | Swift | 3.6k | 229 | 这是一个开源免费的 Mac 扩展显示器工具，支持 iPhone 和 iPad。它通过 USB 或 WiFi 连接，提供低延迟、Retina 高清显示和触摸输入功能。作为 Sidecar 的替代品，它无需订阅或硬件加密狗，允许用户将闲置设备变成真正的第二屏幕。 |
| 20 | [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) | claude-red is a curated library of offensive secur... | Python | 4.7k | 579 | 这是一个为Claude AI设计的攻击性安全技能库，包含SQL注入、shellcode、EDR规避等多种攻击手法。通过结构化的SKILL.md文件，将Claude转化为具备特定领域知识的红队操作员。支持按需加载，适用于授权渗透测试、漏洞赏金和CTF等场景。 |

[查看完整数据](api/github/2026-09-14.json)
<!-- END GITHUB TRENDING -->




