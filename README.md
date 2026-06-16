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

**最后更新**: 2026-06-15 | **成功**: 18 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [iptv-org/iptv](https://github.com/iptv-org/iptv) | Collection of publicly available IPTV channels fro... | TypeScript | 122.9k | 2.7k | 该项目是一个全球公开 IPTV 频道集合，提供 M3U 格式的播放列表。用户只需将链接粘贴到支持流媒体的播放器即可观看。项目不存储视频文件，仅提供链接索引，并集成了 EPG 和 API 等相关资源。 |
| 2 | [teslamate-org/teslamate](https://github.com/teslamate-org/teslamate) | A self-hosted data logger for your Tesla 🚘 [main ... | Elixir | 8.2k | 33 | TeslaMate 是一个用 Elixir 编写的自托管 Tesla 数据记录器。它将数据存储在 Postgres 数据库中，并利用 Grafana 进行可视化分析。项目支持高精度记录、低功耗运行、多车辆管理及成本追踪，并通过 MQTT 协议与 Home Assistant 等系统轻松集成，提供电池健康、里程统计等丰富的仪表板。 |
| 3 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet... | Python | 30.2k | 1.1k | 这是一个为 AI Agent 提供互联网访问能力的 Python 工具。它支持 Twitter、Reddit、YouTube、GitHub、Bilibili 等主流平台，提供一键安装、零 API 费用、自动处理登录与风控、隐私安全等特性。兼容所有命令行 Agent，解决 AI 无法直接读取网页和社交媒体内容的问题。 |
| 4 | [meshery/meshery](https://github.com/meshery/meshery) | Meshery, the cloud native manager... | TypeScript | 10.6k | 228 | Meshery 是一个开源的云原生管理平台，基于 TypeScript 开发。它提供自助服务工程能力，支持可视化和协作式 GitOps，帮助用户设计和管理基于 Kubernetes 的多云基础设施。平台具备基础设施生命周期管理功能，支持 380+ 种集成，并能通过干运行机制在部署前验证配置，确保多集群环境的一致性和可观测性。 |
| 5 | [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) | Open-source live-chat, email support, omni-channel... | Ruby | 31.7k | 431 | Chatwoot 是一个开源的全渠道客户支持平台，支持实时聊天、邮件及社交媒体等多种渠道。它集成了 AI 代理 Captain 以自动化常见问题，并提供帮助中心、团队协作及多语言支持等功能。作为 Intercom 等商业软件的自托管替代方案，它允许企业完全掌控客户数据，适合需要灵活、可扩展客服解决方案的团队。 |
| 6 | [krahets/hello-algo](https://github.com/krahets/hello-algo) | 《Hello 算法》：动画图解、一键运行的数据结构与算法教程。支持简中、繁中、English、日本語... | Java | 126.9k | 71 | 《Hello 算法》是一款开源免费的数据结构与算法入门教程，以动画图解和一键运行为核心特色。支持简繁中、英、日、俄等多语言，并提供 Python、Java、C++ 等多种语言的代码实现。内容通俗易懂，旨在帮助初学者平滑学习算法，适合编程新手及进阶开发者。 |
| 7 | [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) | freeCodeCamp.org's open-source codebase and curric... | TypeScript | 447.9k | 736 | freeCodeCamp 是一个非营利性的开源编程学习平台，提供全栈 Web 开发、机器学习等免费课程。项目包含数千个交互式编程挑战，涵盖响应式 Web 设计、JavaScript、Python 等认证。用户完成课程和项目后可获得可验证的证书，用于求职。项目使用 TypeScript 编写，旨在帮助忙碌的成年人转型进入科技行业。 |
| 8 | [trycua/cua](https://github.com/trycua/cua) | Open-source infrastructure for Computer-Use Agents... | HTML | 18.2k | 70 | 这是一个为计算机使用代理提供开源基础设施的项目。它包含Cua Drivers用于后台控制桌面，Cua沙箱支持多平台（macOS, Windows, Linux, Android）的API，以及Cua-Bench用于评估和训练模型。旨在帮助AI代理自主完成桌面任务。 |
| 9 | [jwasham/coding-interview-university](https://github.com/jwasham/coding-interview-university) | A complete computer science study plan to become a... | - | 352.3k | 364 | 这是一个旨在帮助用户通过大型科技公司技术面试的完整计算机科学自学计划。它涵盖了CS核心知识，提供了详细的学习路线和资源，适合有一定编程基础的学习者系统提升。 |
| 10 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 33.1k | 562 | 这是一个涵盖从数学基础到生产级 AI 系统构建的综合课程，包含503节课和20个阶段。支持Python、TypeScript、Rust和Julia四种语言，强调从零手写算法（如反向传播、注意力机制），每个阶段产出可重用工件，旨在培养具备端到端 AI 工程能力的开发者。 |
| 11 | [music-assistant/server](https://github.com/music-assistant/server) | Music Assistant is a free, opensource Media librar... | Python | 2.4k | 225 | Music Assistant 是一个免费开源的媒体库管理器，核心是服务器组件，需运行在树莓派或 NAS 等常开设备上。它连接流媒体服务和扬声器，支持与 Home Assistant 深度集成，通过 Docker 容器或 Home Assistant 插件安装，旨在实现自动化音乐管理。 |
| 12 | [Free-TV/IPTV](https://github.com/Free-TV/IPTV) | M3U Playlist for free TV channels... | Python | 17.3k | 361 | 这是一个提供全球免费电视频道的 M3U 播放列表项目。项目专注于高质量和主流内容，仅收录官方免费频道，排除成人、宗教及政治类内容。使用 Python 脚本生成 m3u8 格式，用户可直接用于 IPTV 播放器。 |
| 13 | [Introduction-to-Autonomous-Robots/Introduction-to-Autonomous-Robots](https://github.com/Introduction-to-Autonomous-Robots/Introduction-to-Autonomous-Robots) | Introduction to Autonomous Robots... | TeX | 3.1k | 489 | 这是一个关于自主机器人计算原理的开放教科书项目。使用 TeX 编写，涵盖机制、传感器、执行器和算法。由于版权限制，源码需自行编译。适合教学及非商业研究使用。 |
| 14 | [Raphire/Win11Debloat](https://github.com/Raphire/Win11Debloat) | A simple, lightweight PowerShell script that allow... | PowerShell | 48.0k | 112 | 这是一个轻量级且无需安装的 PowerShell 脚本，旨在帮助用户清理和自定义 Windows 10/11 体验。它能够移除预装应用、禁用遥测、移除侵入性界面元素，并提供强大的命令行界面和管理员支持，适合系统管理员和高级用户优化系统性能。 |
| 15 | [mikeroyal/Self-Hosting-Guide](https://github.com/mikeroyal/Self-Hosting-Guide) | Self-Hosting Guide. Learn all about locally hostin... | Dockerfile | 21.1k | 188 | 这是一个关于自托管的综合指南，旨在帮助个人或组织学习如何自行管理软件应用。内容涵盖本地部署、私有云、LLMs、WireGuard、自动化、Home Assistant及网络配置等广泛主题。 |
| 16 | [itsfatduck/optimizerDuck](https://github.com/itsfatduck/optimizerDuck) | Free, open-source Windows optimization tool for pe... | C# | 3.7k | 340 | 这是一个开源的 Windows 优化工具，使用 C# 开发。它提供超过 30 项系统优化，涵盖性能提升和隐私保护。用户可清理预装应用、禁用遥测、调整服务优先级等。工具支持多语言，无需安装即可运行，旨在让用户轻松管理后台进程并提升系统响应速度。 |
| 17 | [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | Security scanner for AI agent skills. Detect vulne... | Python | 6.4k | 1.1k | NVIDIA 开发的 AI 代理技能安全扫描器，支持 Git、文件等多种输入格式。内置 64 种漏洞检测模式，结合静态分析与可选的 LLM 语义评估，实时查询 CVE 数据。它能有效识别漏洞、恶意意图及数据泄露风险，提供风险评分与修复建议，确保 AI 代理技能的安全安装。 |
| 18 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 30.3k | 396 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融市场的高噪声数据设计。它采用两阶段框架，首先将 OHLCV 数据量化为离散 Token，再通过自回归 Transformer 进行预训练。该模型支持多种量化任务，提供 Mini、Small、Base 等不同参数量的版本，并已在 AAAI 2026 被接收。用户可轻松使用 Python 进行预测，如 BTC/USDT 交易对的未来走势。 |

[查看完整数据](api/github/2026-06-15.json)
<!-- END GITHUB TRENDING -->




