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

**最后更新**: 2026-04-21 | **成功**: 8 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Fincept-Corporation/FinceptTerminal](https://github.com/Fincept-Corporation/FinceptTerminal) | FinceptTerminal is a modern finance application of... | Python | 11.5k | 2.6k | FinceptTerminal 是一款基于 C++20 和 Qt6 的原生桌面金融终端，集成了 Python 进行高级分析。它提供 CFA 级财务建模、AI 交易代理、100+ 数据源连接、实时交易及量化分析工具，旨在为专业投资者提供高性能、数据驱动的决策支持。 |
| 2 | [thunderbird/thunderbolt](https://github.com/thunderbird/thunderbolt) | AI You Control: Choose your models. Own your data.... | TypeScript | 3.4k | 591 | Thunderbolt 是一个开源的跨平台 AI 客户端，旨在让用户掌控模型和数据，消除供应商锁定。它支持部署在本地或企业环境，兼容前沿、本地及自托管模型。目前处于活跃开发和安全审计阶段，主要面向企业客户，支持 Docker 部署，可连接 Ollama 或 OpenAI 兼容接口。 |
| 3 | [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | Code search MCP for Claude Code. Make entire codeb... | TypeScript | 6.6k | 259 | Claude Context 是一个 MCP 插件，旨在为 AI 编码助手提供语义代码搜索能力。它将整个代码库转化为向量数据库中的上下文，帮助 Claude Code 等代理快速定位相关代码，降低大型项目成本，提升开发效率。 |
| 4 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView: WiFi DensePose turns commodity WiFi sign... | Rust | 48.9k | 828 | RuView 是一个基于 Rust 的 WiFi 感知平台，利用 ESP32 传感器捕获信道状态信息（CSI），无需摄像头即可实现人体姿态估计、生命体征监测及存在检测。它支持通过墙壁检测人员活动、环境映射和睡眠质量分析，运行在边缘设备上。 |
| 5 | [microsoft/ai-agents-for-beginners](https://github.com/microsoft/ai-agents-for-beginners) | 12 Lessons to Get Started Building AI Agents... | Jupyter Notebook | 57.6k | 131 | 这是一个由微软提供的面向初学者的 AI Agents 课程，包含 12 个教学单元。项目使用 Jupyter Notebook 编写，涵盖构建 AI Agents 的基础知识。支持 50 多种语言的翻译，旨在帮助用户快速上手生成式 AI 模型。 |
| 6 | [dayanch96/YTLite](https://github.com/dayanch96/YTLite) | A flexible enhancer for YouTube on iOS... | Logos | 4.8k | 135 | YTLite 是一款针对 iOS 的 YouTube 增强插件，提供超过百种自定义选项。支持下载视频音频、界面定制（如 OLED 模式、Shorts 模式）、播放器手势设置及内置 SponsorBlock。自 5.2 版本起需订阅。 |
| 7 | [HKUDS/RAG-Anything](https://github.com/HKUDS/RAG-Anything) | "RAG-Anything: All-in-One RAG Framework"... | Python | 16.8k | 256 | RAG-Anything 是一个基于 Python 的全功能多模态文档处理 RAG 框架。它基于 LightRAG 构建，旨在解决传统 RAG 无法处理非文本元素的问题。系统支持文本、图像、表格、公式等多模态内容的无缝处理与查询，集成了 VLM 增强查询和上下文配置模块。该统一方案适用于学术研究、技术文档及企业知识管理等场景，提供深度多模态检索能力。 |
| 8 | [sansan0/TrendRadar](https://github.com/sansan0/TrendRadar) | ⭐AI-driven public opinion & trend monitor with mul... | Python | 53.6k | 584 | 这是一个基于 Python 的 AI 驱动舆情监控工具，支持多平台热点聚合与 RSS 订阅。通过关键词筛选，利用 AI 进行智能分析、翻译及生成简报，并支持 MCP 架构进行自然语言对话分析。项目支持 Docker 部署，数据自持，可集成微信、钉钉等多种渠道推送，旨在解决信息过载问题。 |

[查看完整数据](api/github/2026-04-21.json)
<!-- END GITHUB TRENDING -->




