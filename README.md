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

**最后更新**: 2026-04-19 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Fincept-Corporation/FinceptTerminal](https://github.com/Fincept-Corporation/FinceptTerminal) | FinceptTerminal is a modern finance application of... | Python | 6.5k | 1.2k | Fincept Terminal 是一款基于 C++20 和 Qt6 的高性能桌面金融终端，内置 Python 引擎支持 CFA 级分析、量化建模及 37 个 AI 交易代理。它集成了 100+ 数据源、实时交易引擎及全球情报功能，旨在为专业投资者提供媲美 Bloomberg 的数据驱动决策与自动化交易环境。 |
| 2 | [thunderbird/thunderbolt](https://github.com/thunderbird/thunderbolt) | AI You Control: Choose your models. Own your data.... | TypeScript | 2.2k | 696 | Thunderbolt 是一个开源的跨平台 AI 客户端，旨在让用户掌控模型选择和数据所有权，消除供应商锁定。它支持本地、前沿和私有模型，目前处于早期开发阶段，主要面向企业客户进行自托管部署。 |
| 3 | [tractorjuice/arc-kit](https://github.com/tractorjuice/arc-kit) | Enterprise Architecture Governance & Vendor Procur... | HTML | 982 | 263 | ArcKit 是一个企业架构治理与供应商采购工具包，旨在通过结构化工作流提升架构治理水平。它集成了AI辅助研究、Wardley 战略地图、数据建模、需求管理及供应商RFP流程，支持HM Treasury标准，帮助架构师建立原则、管理风险并生成可视化图表。 |
| 4 | [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | A lightweight, powerful framework for multi-agent ... | Python | 23.1k | 751 | 这是一个用于构建多代理工作流的轻量级 Python 框架。它支持 OpenAI 和 100+ 其他 LLM，提供代理、沙盒、工具、护栏、人工介入和会话管理等核心功能，旨在简化复杂 AI 应用的开发。 |
| 5 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | ... | TypeScript | 9.9k | 96 | T3 Code 是一个极简的 Web GUI，专为 Codex 和 Claude 等编码代理设计。它提供了桌面应用和 Web 运行方式，旨在简化与 AI 编码助手的交互体验。目前项目处于早期阶段。 |
| 6 | [paperless-ngx/paperless-ngx](https://github.com/paperless-ngx/paperless-ngx) | A community-supported supercharged document manage... | Python | 38.8k | 382 | Paperless-ngx 是一个基于 Python 的社区支持文档管理系统，旨在将物理文档转化为可搜索的在线档案。它支持扫描、索引和归档所有文档，帮助用户减少纸张使用。项目提供 Docker Compose 部署方式，支持从旧版本迁移，拥有活跃的社区支持和多语言翻译。 |
| 7 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView: WiFi DensePose turns commodity WiFi sign... | Rust | 47.5k | 118 | RuView 是一个基于 Rust 的 WiFi 密集感知平台，利用 ESP32 传感器捕获信道状态信息（CSI），实现无摄像头的人体姿态估计、生命体征监测（呼吸/心率）及存在检测。它运行在边缘端，支持活动识别和环境映射，无需云端或摄像头即可穿透墙壁探测人体活动。 |
| 8 | [EvoMap/evolver](https://github.com/EvoMap/evolver) | The GEP-Powered Self-Evolution Engine for AI Agent... | JavaScript | 5.5k | 525 | 这是一个基于 GEP（基因表达程序）的 AI 代理自我进化引擎。它将临时的提示调整转化为可审计、可复用的进化资产，支持通过 Git 进行版本控制。作为 EvoMap 网络的核心引擎，它实现了协议约束的进化与基因管理，旨在解决 AI 代理的适应性问题。 |
| 9 | [BasedHardware/omi](https://github.com/BasedHardware/omi) | AI that sees your screen, listens to your conversa... | Dart | 11.1k | 687 | Omi 是一个基于 AI 的个人“第二大脑”助手。它通过屏幕捕捉和语音转录技术，实时分析用户的屏幕内容和对话，生成摘要和行动项。支持桌面、手机和可穿戴设备，具备记忆功能，适合需要高效记录和整理信息的专业人士。 |
| 10 | [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Turn Claude Code into a full game dev studio — 49 ... | Shell | 13.4k | 698 | 该项目将 Claude Code 会话转化为完整游戏开发工作室，包含49个专业化AI代理、72个技能及模拟真实工作室层级的协调系统。通过自动化钩子和规则，确保代码质量与设计一致性，帮助开发者从构思到发布进行高效管理。 |

[查看完整数据](api/github/2026-04-19.json)
<!-- END GITHUB TRENDING -->




