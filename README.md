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

**最后更新**: 2026-06-14 | **成功**: 14 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [iptv-org/iptv](https://github.com/iptv-org/iptv) | Collection of publicly available IPTV channels fro... | TypeScript | 120.9k | 1.5k | 这是一个全球公开 IPTV 频道集合项目，提供 M3U 播放列表。用户可将链接粘贴至支持直播流的播放器观看。项目包含 EPG 电子节目指南、API 接口及数据库支持，旨在整合全球电视频道资源，方便开发者与用户获取直播流数据。 |
| 2 | [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) | freeCodeCamp.org's open-source codebase and curric... | TypeScript | 447.2k | 146 | 处理失败 |
| 3 | [pytest-dev/pytest](https://github.com/pytest-dev/pytest) | The pytest framework makes it easy to write small ... | Python | 14.0k | 14 | pytest 是一个功能强大的 Python 测试框架，旨在简化测试编写，同时支持复杂应用和库的功能测试。它支持简单的断言语句、自动发现测试、模块化 fixtures 以及丰富的插件生态。该框架兼容 Python 3.10+ 和 PyPy3，并能直接运行 unittest 测试套件，是 Python 开发者进行单元测试和集成测试的首选工具。 |
| 4 | [swc-project/swc](https://github.com/swc-project/swc) | Rust-based platform for the Web... | Rust | 33.8k | 163 | SWC 是一个用 Rust 编写的超快 TypeScript/JavaScript 编译器，旨在替代 Babel 等工具。它是一个同时支持 Rust 和 JavaScript 的库，能显著提升 Web 开发构建速度，由社区维护。 |
| 5 | [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) | Open-source live-chat, email support, omni-channel... | Ruby | 31.2k | 400 | Chatwoot 是一个开源、自托管的现代客户支持平台，替代 Intercom 和 Zendesk。它支持多渠道（聊天、邮件、社交媒体等），集成了 AI 代理 Captain 自动化常见查询。此外，它还提供帮助中心、团队协作和生产力工具，帮助企业高效管理客户互动。 |
| 6 | [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | Security scanner for AI agent skills. Detect vulne... | Python | 5.3k | 964 | SkillSpector 是 NVIDIA 开发的 AI agent skills 安全扫描工具。它支持多种输入格式，通过两阶段分析（静态分析+LLM语义评估）检测漏洞、恶意模式及安全风险。提供实时漏洞查询、多种输出格式及风险评分，旨在解决 AI agent 信任缺失问题，确保安装前的安全性。 |
| 7 | [meshery/meshery](https://github.com/meshery/meshery) | Meshery, the cloud native manager... | TypeScript | 10.4k | 20 | Meshery 是一个开源的云原生管理平台，使用 TypeScript 构建。它允许用户设计和管理基于 Kubernetes 的多集群基础设施和应用。它支持 380+ 集成，提供可视化 GitOps 工作流，并允许通过 Dry-run 功能进行部署前的配置验证，简化多云环境下的运维。 |
| 8 | [cypress-io/cypress](https://github.com/cypress-io/cypress) | Fast, easy and reliable testing for anything that ... | TypeScript | 49.9k | 39 | Cypress 是一个专为浏览器应用设计的快速、简单且可靠的测试框架。它支持端到端、集成和单元测试，旨在解决传统测试工具的痛点，提供更好的开发体验。 |
| 9 | [GorvGoyl/Clone-Wars](https://github.com/GorvGoyl/Clone-Wars) | 100+ open-source clones of popular sites like Airb... | - | 35.4k | 269 | 这是一个包含100多个流行网站开源克隆版的聚合项目。涵盖了Airbnb, Amazon, Netflix, Spotify, Discord, Clubhouse等知名应用。每个克隆版都提供了源代码、演示链接、技术栈和GitHub星标信息，适合开发者学习不同技术栈的实际应用案例。 |
| 10 | [Introduction-to-Autonomous-Robots/Introduction-to-Autonomous-Robots](https://github.com/Introduction-to-Autonomous-Robots/Introduction-to-Autonomous-Robots) | Introduction to Autonomous Robots... | TeX | 2.7k | 293 | 这是一个关于自主机器人计算原理的开放教科书项目。使用 TeX 编写，源代码遵循 CC-BY-NC-ND 协议。项目提供了详细的编译指南，支持在 Overleaf 或本地 LaTeX 环境下生成 PDF。适合计算机科学、机器人学专业的学生和教师作为教学参考材料。 |
| 11 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 29.9k | 244 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融数据的高噪声特性设计。它采用两阶段框架，通过专用分词器量化 OHLCV 数据，并利用自回归 Transformer 进行预训练。项目支持多种模型规模，已在 AAAI 2026 录用，可用于金融预测和量化交易任务。 |
| 12 | [music-assistant/server](https://github.com/music-assistant/server) | Music Assistant is a free, opensource Media librar... | Python | 2.2k | 197 | Music Assistant 是一个免费开源的媒体库管理器，核心功能是连接流媒体服务和扬声器。它作为服务器运行在常开设备（如树莓派、NAS）上，支持与 Home Assistant 深度集成，通过 Docker 容器或 Home Assistant 插件安装。 |
| 13 | [Free-TV/IPTV](https://github.com/Free-TV/IPTV) | M3U Playlist for free TV channels... | Python | 16.9k | 70 | 该项目提供全球免费电视频道的 M3U 播放列表。项目专注于质量，仅收录免费、主流且高清的频道，严格排除成人、政治及宗教内容。使用 Python 脚本生成播放列表，用户可直接通过 IPTV 播放器访问。 |
| 14 | [puppeteer/puppeteer](https://github.com/puppeteer/puppeteer) | JavaScript API for Chrome and Firefox... | TypeScript | 94.6k | 29 | Puppeteer 是一个用于控制 Chrome 或 Firefox 的 JavaScript 库。它通过 DevTools Protocol 或 WebDriver BiDi 提供高级 API，默认以无头模式运行。支持网页自动化、截图、爬虫及测试等场景。 |
| 15 | [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | Simple, unified interface to multiple Generative A... | Python | 14.4k | 291 | aisuite 是一个轻量级 Python 库，旨在为多个生成式 AI 提供商提供统一的接口。它包含统一的聊天完成 API 和支持工具/工具包的智能体 API，支持 OpenAI、Anthropic、Google、Ollama 等多种模型，允许用户轻松切换提供商。该项目也是桌面 AI 代理 OpenCoworker 的基础。 |

[查看完整数据](api/github/2026-06-14.json)
<!-- END GITHUB TRENDING -->




