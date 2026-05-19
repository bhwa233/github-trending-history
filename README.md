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

**最后更新**: 2026-05-18 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Your Personal AI super intelligence. Private, Simp... | Rust | 17.1k | 3.9k | OpenHuman 是一个基于 Rust 的开源个人 AI 智能体，主打隐私与易用性。它提供桌面 UI，拥有可交互的桌面吉祥物，能自动集成 Gmail、Notion 等第三方服务，并构建本地记忆树知识库。该工具旨在无缝融入日常生活，无需复杂配置即可作为全能助手工作。 |
| 2 | [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | Academic Research Skills for Claude Code: research... | Python | 11.7k | 1.4k | 这是一个为 Claude Code 设计的学术研究技能套件，涵盖从研究到出版的全流程。它利用 AI 协助处理引用、格式化和数据验证，通过风格校准和质量检查提升写作水平。项目强调“人在回路”模式，利用 Socratic 对话辅助构建论文结构，并通过 7 模式完整性检查防止 AI 幻觉和逻辑错误，旨在辅助而非替代人类研究者。 |
| 3 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 36.6k | 1.0k | CLI-Anything 旨在让所有软件具备“代理原生”能力，通过 CLI-Hub 注册表连接 AI 代理与现有软件生态。它允许 AI 代理（如 Claude Code）通过命令行接口自动化操作各类软件（如 CAD、3D 场景、地图等），并提供社区贡献和一键安装管理功能。 |
| 4 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | A set of ready to use Agent Skills for research, s... | Python | 24.4k | 609 | 提供包含135个科学技能的集合，旨在将任何AI代理转化为强大的科研助手。支持生物信息学、化学信息学、医学等领域，兼容Cursor、Claude等工具。新增K-Dense BYOK本地AI科学家，支持私有数据运行，提供Web搜索和数据库访问。 |
| 5 | [supertone-inc/supertonic](https://github.com/supertone-inc/supertonic) | Lightning-Fast, On-Device, Multilingual TTS — runn... | Swift | 8.3k | 715 | Supertonic 是一款超快、本地运行的 31 语言 TTS 系统。基于 ONNX Runtime，它无需 GPU 或云端即可在桌面、浏览器和移动设备上运行。拥有 99M 参数模型，支持 44.1kHz 高质量音频和表情标签，确保隐私和低延迟。 |
| 6 | [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | LLM inference in C/C++... | C++ | 111.0k | 213 | llama.cpp 是一个用 C++ 编写的本地大语言模型推理库，支持多种硬件架构（如 Apple Silicon、x86 AVX/AVX2/AVX512）。它提供无依赖的纯 C/C++ 实现，旨在实现最小化设置和最佳性能，支持多模态、OpenAI 兼容 API 以及 GGUF 模型格式。 |
| 7 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 59.9k | 700 | RuView 是一个基于 Rust 的 WiFi 感知平台，利用 ESP32 传感器通过 WiFi 信号实现穿墙检测、生命体征监测（呼吸、心率）、活动识别及环境映射。它无需摄像头或可穿戴设备，通过分析信道状态信息（CSI）提供实时空间智能，适用于智能家居、安防及健康监测场景。 |
| 8 | [CloakHQ/CloakBrowser](https://github.com/CloakHQ/CloakBrowser) | Stealth Chromium that passes every bot detection t... | Python | 15.2k | 1.4k | CloakBrowser 是一个通过 C++ 源级补丁修改真实 Chromium 二进制文件的隐身浏览器，旨在绕过所有机器人检测测试。它作为 Playwright 和 Puppeteer 的零配置替代品，提供 30+ 检测网站通过，包括 Cloudflare Turnstile 和 reCAPTCHA v3，支持人类行为模拟。 |
| 9 | [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | The secure, validated skill registry for professio... | TypeScript | 4.0k | 1.2k | 这是一个为专业 AI 编码代理提供的安全、验证过的技能注册表。项目通过静态分析、人工审核和深度防御机制，解决了市场技能中存在的安全漏洞问题。支持 Claude Code、Cursor、Copilot 等主流工具，提供可扩展的插件式工作流和专业知识。 |
| 10 | [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Open-source intelligence for the global theater. T... | Python | 7.7k | 767 | ShadowBroker 是一个开源情报（OSINT）平台，聚合了60多个实时数据源（飞机、船只、卫星、冲突区等）到一个暗战地图界面。支持35+数据层和多种视觉模式，允许用户通过AI代理分析数据。项目无用户数据收集，完全开源，旨在为分析师和研究人员提供统一的全球威胁监控视图。 |
| 11 | [humanlayer/12-factor-agents](https://github.com/humanlayer/12-factor-agents) | What are the principles we can use to build LLM-po... | TypeScript | 20.5k | 399 | 该项目受 12-Factor App 启发，旨在为构建生产级 LLM 应用程序提供核心原则。作者通过实践发现，真正的 AI Agent 应主要由软件逻辑构成而非简单的确定性代码。项目致力于探索如何让 LLM 驱动的软件更可靠、可扩展且易于维护，为开发者提供构建高质量 AI 应用的指导。 |
| 12 | [NVlabs/Sana](https://github.com/NVlabs/Sana) | SANA: Efficient High-Resolution Image Synthesis wi... | Python | 6.5k | 387 | SANA 是一个面向高分辨率图像和视频生成的效率导向代码库，基于线性扩散 Transformer。项目提供完整的训练与推理管道，包含 SANA, SANA-Video, SANA-WM 等模型。支持 720p 及 1 分钟视频生成、6-DoF 相机控制及实时视频生成，近期发布了 Sol-RL 训练基础设施，适用于世界建模与具身 AI。 |
| 13 | [microsoft/ai-agents-for-beginners](https://github.com/microsoft/ai-agents-for-beginners) | 12 Lessons to Get Started Building AI Agents... | Jupyter Notebook | 63.4k | 1.0k | 微软推出的 AI Agents 入门课程，包含 12 节 Jupyter Notebook 交互式课程。内容涵盖构建 AI Agents 的核心基础知识，支持 50 多种语言。适合零基础开发者学习如何利用生成式 AI 模型构建智能体。 |
| 14 | [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | LLM驱动的 A/H/美股智能分析：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送... | Python | 37.1k | 310 | 这是一个基于大语言模型（LLM）的智能股票分析系统，支持A股、港股及美股。它聚合多源行情与新闻，利用AI生成决策仪表盘，支持企业微信、飞书等多渠道推送。项目支持GitHub Actions零成本部署，适合个人投资者进行自动化选股与决策参考。 |
| 15 | [plausible/analytics](https://github.com/plausible/analytics) | Open source, privacy-first web analytics. Lightwei... | Elixir | 26.0k | 638 | Plausible Analytics 是一个开源、隐私优先的网页分析工具，作为轻量级且无 Cookie 的 Google Analytics 替代品。它完全合规（GDPR/CCPA），提供简洁的仪表板和 API，支持自托管或云端托管，适合注重数据隐私和网站性能的用户。 |

[查看完整数据](api/github/2026-05-18.json)
<!-- END GITHUB TRENDING -->




