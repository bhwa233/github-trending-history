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

**最后更新**: 2026-06-16 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) | freeCodeCamp.org's open-source codebase and curric... | TypeScript | 448.5k | 633 | freeCodeCamp 是一个非营利性的开源编程学习平台，提供全栈 Web 开发和机器学习等免费课程。项目采用 TypeScript 开发，包含数千个互动编程挑战。用户通过完成项目、考试获得认证，这些认证可链接到 LinkedIn，帮助求职者转型进入科技行业。 |
| 2 | [swc-project/swc](https://github.com/swc-project/swc) | Rust-based platform for the Web... | Rust | 34.0k | 20 | SWC 是一个用 Rust 编写的超快 TypeScript/JavaScript 编译器。它同时作为 Rust 和 JavaScript 库使用，旨在显著提高 Web 开发速度。这是一个社区驱动的项目，支持 Node.js 环境，并遵循 Apache 2.0 许可证。 |
| 3 | [teslamate-org/teslamate](https://github.com/teslamate-org/teslamate) | A self-hosted data logger for your Tesla 🚘 [main ... | Elixir | 8.4k | 215 | TeslaMate 是一个基于 Elixir 的自托管特斯拉数据记录器。它将车辆数据存储在 Postgres 数据库中，并利用 Grafana 进行可视化分析。项目支持高精度驾驶记录、充电成本追踪、多车辆管理，并通过 MQTT 协议与 Home Assistant 等智能家居系统无缝集成。此外，它还支持从其他数据源导入数据，并提供自定义主题。 |
| 4 | [iptv-org/iptv](https://github.com/iptv-org/iptv) | Collection of publicly available IPTV channels fro... | TypeScript | 124.0k | 1.2k | 该项目是一个全球公开 IPTV 频道列表集合。它提供 M3U 格式的播放列表，用户可直接在支持直播流的播放器中观看。项目还集成了 EPG 电子节目指南、数据库及 API 等相关资源，致力于为用户提供便捷的全球电视频道访问服务。 |
| 5 | [puppeteer/puppeteer](https://github.com/puppeteer/puppeteer) | JavaScript API for Chrome and Firefox... | TypeScript | 94.9k | 56 | Puppeteer 是一个提供高级 API 的 JavaScript 库，用于控制 Chrome 或 Firefox 浏览器。它默认以无头模式运行，支持通过 DevTools Protocol 或 WebDriver BiDi 进行自动化操作，适用于网页抓取、自动化测试和截图等场景。 |
| 6 | [meshery/meshery](https://github.com/meshery/meshery) | Meshery, the cloud native manager... | TypeScript | 10.8k | 228 | Meshery 是一个开源的云原生管理平台，基于 TypeScript 开发。它提供自助服务工程能力，支持可视化和协作式 GitOps，帮助用户设计和管理基于 Kubernetes 的多云基础设施与应用。平台具备基础设施生命周期管理功能，支持 380+ 种集成，并能通过干运行验证配置，确保多集群部署的一致性与可观测性。 |
| 7 | [cypress-io/cypress](https://github.com/cypress-io/cypress) | Fast, easy and reliable testing for anything that ... | TypeScript | 50.2k | 13 | Cypress 是一个现代化的端到端测试框架，专为浏览器应用设计。它提供快速、简单且可靠的测试体验，支持 Mac、Linux 和 Windows。开发者可以通过 npm 或 yarn 轻松安装并开始编写测试脚本，旨在解决传统测试工具的痛点，提升开发效率。 |
| 8 | [music-assistant/server](https://github.com/music-assistant/server) | Music Assistant is a free, opensource Media librar... | Python | 2.6k | 157 | Music Assistant 是一个免费开源的媒体库管理服务器，核心用 Python 编写。它连接流媒体服务和扬声器，支持与 Home Assistant 深度集成。由于依赖外部组件，必须通过 Docker 容器或 Home Assistant 插件运行，适合部署在树莓派、NAS 等常开设备上。 |
| 9 | [Universal-Debloater-Alliance/universal-android-debloater-next-generation](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation) | Cross-platform GUI written in Rust using ADB to de... | Rust | 7.3k | 146 | 这是一个基于 Rust 开发的跨平台 GUI 工具，利用 ADB 技术为非 Root 的 Android 设备提供去臃肿服务。它旨在通过移除不必要的系统应用来提升设备的隐私保护、安全性和电池续航。项目不收集用户数据，仅向 GitHub 发出请求获取包列表和更新。适合希望优化手机性能和隐私的用户。 |
| 10 | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | VoxCPM2: Tokenizer-Free TTS for Multilingual Speec... | Python | 30.1k | 408 | VoxCPM2 是一个基于扩散自回归架构的 tokenizer-free 文本转语音系统。它支持30种语言，具备语音设计、可控克隆及终极克隆功能，能输出48kHz高保真音频。模型基于MiniCPM-4，支持实时流式传输，开源且商业可用。 |
| 11 | [alibaba/zvec](https://github.com/alibaba/zvec) | A lightweight, lightning-fast, in-process vector d... | C++ | 10.4k | 156 | Zvec 是阿里巴巴开源的轻量级进程内向量数据库，基于 C++ 开发。它支持混合检索（向量+全文+过滤）、DiskANN 磁盘索引及 WAL 持久化，能毫秒级处理数十亿向量搜索。提供 Go/Rust SDK，无需外部服务器，适合嵌入式应用。 |
| 12 | [rmyndharis/OpenWA](https://github.com/rmyndharis/OpenWA) | Free, Open Source, Self-Hosted WhatsApp API Gatewa... | TypeScript | 9.1k | 185 | OpenWA 是一个免费开源的 WhatsApp API 网关，基于 TypeScript 构建。它采用插件化架构，支持多会话并发、Docker 部署及 REST API。提供现代化的 Web Dashboard 管理界面，支持 Webhooks、媒体消息发送及 n8n 等第三方集成，适合开发者自建消息基础设施。 |
| 13 | [n0-computer/iroh](https://github.com/n0-computer/iroh) | IP addresses break, dial keys instead. Modular net... | Rust | 9.3k | 334 | iroh 是一个 Rust 编写的模块化网络堆栈，旨在通过公钥而非 IP 地址进行连接。它利用 QUIC 协议和打洞技术自动寻找并维护最佳连接路径，支持中继回退。项目提供了基于内容的寻址存储（blobs）、发布订阅网络（gossip）和键值存储（docs）等可组合协议，适用于构建去中心化、高可用的分布式应用。 |

[查看完整数据](api/github/2026-06-16.json)
<!-- END GITHUB TRENDING -->




