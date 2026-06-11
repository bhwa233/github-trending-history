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

**最后更新**: 2026-06-10 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | Shell | 51.7k | 821 | 该项目为 AI 编码代理提供生产级工程技能，将资深工程师的工作流程、质量门控和最佳实践编码为技能。包含 7 个开发生命周期斜杠命令，支持自动技能激活，可集成至 Claude Code、Cursor 等工具中，确保 AI 在开发过程中始终如一地遵循最佳实践。 |
| 2 | [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | PM Skills Marketplace: 100+ agentic skills, comman... | - | 14.8k | 804 | 这是一个面向产品经理的 AI 技能市场，旨在将成熟的产品管理框架编码为 AI 工作流。它包含 100+ 个技能、命令和插件，专为 Claude Code 和 Cowork 设计，帮助用户通过结构化的 AI 交互做出更好的产品决策。 |
| 3 | [refactoringhq/tolaria](https://github.com/refactoringhq/tolaria) | Desktop app to manage markdown knowledge bases... | TypeScript | 14.9k | 612 | Tolaria 是一款跨平台桌面应用，专为管理 Markdown 知识库设计。它采用“文件优先”和“Git 优先”原则，确保数据完全属于用户，支持离线使用和版本控制。该工具支持构建第二大脑、管理 AI 上下文及存储记忆，界面设计键盘优先，适合追求高效知识管理的极客用户。 |
| 4 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 39.1k | 2.5k | 这是一个基于 AI agent 的跨平台搜索技能，能并行检索 Reddit、X、YouTube、HN、Polymarket 等平台数据。通过点赞、观看量和真实资金支持对内容进行评分，并由 AI 代理综合成摘要。旨在提供一种由真实用户参与度驱动的搜索体验，而非编辑筛选。 |
| 5 | [soxoj/maigret](https://github.com/soxoj/maigret) | 🕵️‍♂️ Collect a dossier on a person by username f... | Python | 32.0k | 318 | Maigret 是一款基于 Python 的开源 OSINT 工具，通过用户名在 3000+ 网站上自动收集个人档案。支持 AI 分析、递归搜索、Tor/I2P 访问及 Web UI，无需 API 密钥，可生成多种格式报告。 |
| 6 | [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | FULL Augment Code, Claude Code, Cluely, CodeBuddy,... | - | 139.5k | 393 | 该项目是一个汇集了Cursor、Claude Code、Replit等多种主流AI工具的系统提示词、内部工具及AI模型的资源库。它不仅提供技术参考，还包含针对AI初创公司的安全警告及漏洞防护建议。 |
| 7 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 223.6k | 1.1k | Superpowers 是一个为编码代理设计的软件开发生命周期框架。它通过可组合的技能引导代理在编码前先明确需求、展示设计并制定计划，随后执行子代理驱动的开发流程。系统强调 TDD、YAGNI 和 DRY 原则，支持 Claude、Codex 等多种主流工具，实现自主化开发。 |
| 8 | [masterking32/MasterDnsVPN](https://github.com/masterking32/MasterDnsVPN) | Advanced DNS tunneling VPN for censorship bypass, ... | Go | 5.2k | 354 | 这是一个基于 Go 语言开发的高级 DNS 隧道 VPN 项目，旨在通过 DNS 查询传输 TCP 流量以绕过网络审查。相比同类项目，它具有极低的开销（5-7B）、极高的传输速度（比 DNSTT 快 9 倍）和强大的稳定性（支持 ARQ 和多路径）。项目针对恶劣网络环境进行了优化，支持多解析器负载均衡和 SOCKS5 协议，适合在受限网络中进行科学上网和数据传输。 |
| 9 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用AI大模型，一键生成高清短视频 Generate short videos with one c... | Python | 85.0k | 1.4k | 这是一个基于 Python 的 AI 视频生成工具，采用 MVC 架构。用户只需输入主题，即可利用大模型自动生成文案、字幕、背景音乐及高清无版权素材，并合成竖屏或横屏视频。支持批量生成及多种主流 AI 模型接入。 |
| 10 | [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) | open-source healthcare ai... | Python | 2.3k | 527 | OpenMed 是一个本地优先的开源医疗 AI 项目，专注于临床文本结构化。它包含 1000+ 专用模型，支持实体提取和 PII 去标识化，完全在设备端运行。项目支持 Apple MLX 加速，提供原生 iOS/macOS 应用，确保患者数据隐私，无云依赖。 |
| 11 | [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | A visual, example-driven guide to Claude Code — fr... | Python | 36.5k | 211 | 这是一个关于 Claude Code 的视觉化、示例驱动指南，旨在帮助开发者从基础概念掌握到构建高级代理。项目提供结构化的学习路径、Mermaid 图表和即拿即用的生产级模板，解决官方文档缺乏实战组合示例的问题，帮助用户快速掌握 Claude Code 的核心功能与工作流。 |
| 12 | [activeloopai/hivemind](https://github.com/activeloopai/hivemind) | One brain for all your agents... | TypeScript | 824 | 64 | Hivemind 是一个为 AI 代理提供共享大脑的工具。它自动学习并记忆团队的工作模式，将经验转化为可复用的技能。通过混合检索和实时传播，它让所有团队成员（如 Claude、Cursor 等）都能利用已解决的经验，从而降低成本、减少 Token 消耗并提高效率。 |
| 13 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 72.9k | 420 | RuView 是一个基于 Rust 的 WiFi 感知平台，利用信道状态信息（CSI）将普通 WiFi 转化为空间智能系统。它能在无摄像头、无穿戴设备的情况下，穿透墙壁检测人体存在、生命体征（呼吸心率）、活动行为（跌倒、睡眠）及环境变化。支持 Home Assistant、Apple Home 等主流生态，提供 21 种实体数据，适用于智能家居安全与健康监测。 |
| 14 | [roboflow/supervision](https://github.com/roboflow/supervision) | We write your reusable computer vision tools. 💜... | Python | 43.6k | 695 | 这是一个面向计算机视觉的 Python 工具包，旨在提供可复用的组件。它支持从数据加载、模型集成到可视化标注的全流程，兼容多种主流深度学习框架（如 Ultralytics, Transformers）。开发者可以专注于应用构建，快速实现目标检测、分割及区域计数等功能。 |
| 15 | [google/skills](https://github.com/google/skills) | Agent Skills for Google products and technologies... | Python | 13.3k | 211 | 该项目为 Google 产品和技术提供 Agent Skills，涵盖 Gemini API、Google Cloud 服务（如 AlloyDB、BigQuery）及 Well-Architected Framework。开发者可通过 npx 安装特定技能，旨在加速 Google Cloud 及相关技术的学习与集成，目前处于积极开发阶段。 |
| 16 | [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | A straightforward method for training your LLM, fr... | Python | 5.2k | 247 | 这是一个使用 PyTorch 从零实现 Transformer 架构的 LLM 训练项目。它涵盖了从预训练到对齐的全流程，包括 SFT、RM、PPO、DPO 和 GRPO 等算法。项目支持多 GPU 训练，使用真实公开数据集，不依赖第三方库，适合学习大模型底层原理。 |
| 17 | [apple/container](https://github.com/apple/container) | A tool for creating and running Linux containers u... | Swift | 29.7k | 1.6k | 这是一个用 Swift 编写的工具，用于在 Mac 上通过轻量级虚拟机运行 Linux 容器。它针对 Apple Silicon 优化，支持 OCI 兼容镜像，允许用户从标准注册表拉取和推送镜像。需要 macOS 26 和 Apple Silicon 硬件。 |

[查看完整数据](api/github/2026-06-10.json)
<!-- END GITHUB TRENDING -->




