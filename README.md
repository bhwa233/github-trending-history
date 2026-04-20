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

**最后更新**: 2026-04-20 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Fincept-Corporation/FinceptTerminal](https://github.com/Fincept-Corporation/FinceptTerminal) | FinceptTerminal is a modern finance application of... | Python | 9.5k | 3.1k | FinceptTerminal 是一款基于 C++20 和 Qt6 的桌面金融终端，集成 Python 实现类彭博终端性能。它提供 CFA 级分析、37 个 AI 交易代理、100+ 数据源接入、实时交易及量化实验室功能，支持多经纪商集成与自动化工作流，适合专业投资者进行数据驱动决策。 |
| 2 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView: WiFi DensePose turns commodity WiFi sign... | Rust | 48.2k | 716 | RuView 是一个基于 Rust 的 WiFi 感知平台，利用 ESP32 采集信道状态信息（CSI），通过边缘计算实现无摄像头的人体姿态估计、生命体征监测及存在检测。它支持穿墙感知、呼吸心率监测、活动识别及睡眠质量分析，无需云端或摄像头，适合智能家居和安防场景。 |
| 3 | [thunderbird/thunderbolt](https://github.com/thunderbird/thunderbolt) | AI You Control: Choose your models. Own your data.... | TypeScript | 2.8k | 667 | Thunderbolt 是一个开源的跨平台 AI 客户端，旨在消除供应商锁定。它支持自托管部署，兼容前沿、本地及私有模型，目前正进行安全审计以支持企业生产环境。 |
| 4 | [paperless-ngx/paperless-ngx](https://github.com/paperless-ngx/paperless-ngx) | A community-supported supercharged document manage... | Python | 39.4k | 611 | Paperless-ngx 是一个社区支持的文档管理系统，旨在将纸质文档转化为可搜索的在线档案。它支持扫描、索引和归档，帮助用户减少纸张使用。项目提供 Docker 快速部署方式，并支持从旧版本迁移，致力于通过社区协作持续发展。 |
| 5 | [tractorjuice/arc-kit](https://github.com/tractorjuice/arc-kit) | Enterprise Architecture Governance & Vendor Procur... | HTML | 1.3k | 334 | ArcKit 是一个企业架构治理与供应商采购工具包，旨在通过结构化工作流提升架构治理水平。它支持建立架构原则、利益相关者分析、风险管理、商业案例论证、数据建模、技术调研（含Azure）以及Wardley Mapping。该工具集成了Claude Code插件，提供68个命令、10个自主研究代理及自动化钩子，涵盖需求文档、设计审查、ServiceNow设计及需求可追溯性，帮助架构师实现系统化、AI辅助的架构管理。 |
| 6 | [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | Real-time global intelligence dashboard. AI-powere... | TypeScript | 50.0k | 477 | 这是一个实时全球情报仪表板，利用AI聚合500+新闻源，结合3D/2D地图引擎展示地缘政治与基础设施数据。支持跨流信号相关性分析、国家风险评分及金融雷达，内置本地AI模型，无需API密钥，提供多站点变体及跨平台桌面应用。 |
| 7 | [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | A lightweight, powerful framework for multi-agent ... | Python | 23.9k | 909 | 这是一个轻量级且强大的 Python 框架，专为构建多智能体工作流设计。它支持 OpenAI 及 100+ 其他 LLM，提供智能体配置、沙箱环境、工具调用、护栏机制、人工介入、会话管理及追踪等功能，支持语音交互。 |
| 8 | [deepseek-ai/DeepGEMM](https://github.com/deepseek-ai/DeepGEMM) | DeepGEMM: clean and efficient FP8 GEMM kernels wit... | Cuda | 6.8k | 155 | DeepGEMM 是一个统一的高性能 CUDA 张量核心内核库，专为现代大语言模型设计。它集成了 GEMM（FP8/FP4/BF16）、融合 MoE（Mega MoE）、MQA 评分及 HyperConnection 等核心原语。采用轻量级 JIT 编译，无需安装时编译，设计简洁且性能卓越，支持 SM90/SM100 及反向传播，在 H800 上可达 1550 TFLOPS。 |
| 9 | [pi-hole/pi-hole](https://github.com/pi-hole/pi-hole) | A black hole for Internet advertisements... | Shell | 57.2k | 154 | Pi-hole 是一个基于 Linux 的 DNS sinkhole，用于网络级广告拦截。它保护所有连接设备（浏览器、应用、智能电视）免受跟踪和广告，无需客户端安装。它轻量级、响应迅速，并提供一个用于可视化的 Web 界面。 |
| 10 | [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | Xray, Penetrates Everything. Also the best v2ray-c... | Go | 37.4k | 124 | Xray-core 是一个基于 Go 语言开发的网络工具平台，源自 XTLS 协议。它提供了包括 VLESS、REALITY 和 XTLS Vision 在内的多种协议，旨在实现网络穿透和隐私保护。项目开源，支持多种安装方式（如 Docker、脚本），并拥有丰富的社区面板和客户端支持，是 v2ray 的强力替代品。 |

[查看完整数据](api/github/2026-04-20.json)
<!-- END GITHUB TRENDING -->




