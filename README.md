# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 使用 Cloudflare Workers AI 生成项目核心功能总结、技术栈和适用场景
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
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct)
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 配置环境变量
export CLOUDFLARE_ACCOUNT_ID=your_account_id
export CLOUDFLARE_API_KEY=your_api_key

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

**最后更新**: 2026-03-21 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2) | Automate the process of making money online.... | Python | 17.7k | 379 | MoneyPrinterV2 是一个自动化在线赚钱工具，包含Twitter机器人、YouTube Shorts自动化、联盟营销及本地企业冷拓功能，采用模块化设计提升扩展性。 |
| 2 | [systemd/systemd](https://github.com/systemd/systemd) | The systemd System and Service Manager... | C | 15.7k | 112 | systemd是Linux系统的系统和服务管理器，负责初始化进程管理和服务控制。核心功能包括进程管理、服务依赖处理、系统状态监控及日志管理，支持并行启动服务以提升效率，并提供状态监控与自动重启机制。 |
| 3 | [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | Find vulnerabilities, misconfigurations, secrets, ... | Go | 33.4k | 127 | Trivy是用Go编写的全面安全扫描工具，支持容器、Kubernetes、代码仓库等多平台扫描，可检测漏洞、配置错误、密钥和SBOM。覆盖OS包、依赖项、IaC问题及敏感信息，适用于云原生环境安全检测。 |
| 4 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | Project N.O.M.A.D, is a self-contained, offline su... | TypeScript | 6.5k | 2.1k | Project N.O.M.A.D 是一个离线知识服务器，提供AI聊天、文档检索和离线工具集，基于Docker容器化部署，支持终端安装和浏览器访问，适用于无网络环境下的知识管理与应急信息获取。 |
| 5 | [opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf) | PDF Parser for AI-ready data. Automate PDF accessi... | Java | 7.9k | 954 | Java开源PDF解析器，支持AI数据提取与无障碍自动化。可精准提取Markdown/JSON/HTML，处理表格、公式、图像，集成OCR及混合模式分析，符合PDF/UA标准。 |
| 6 | [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | A Claude Code plugin that shows what's happening -... | JavaScript | 10.4k | 957 | Claude HUD是用于Claude Code的插件，实时显示上下文使用情况、工具活动、代理状态和待办进度，帮助用户监控会话状态。通过终端状态栏提供项目路径、上下文健康度、工具操作、代理任务及任务完成情况，提升开发效率。 |
| 7 | [protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf) | Protocol Buffers - Google's data interchange forma... | C++ | 70.9k | 7 | Protocol Buffers是Google的跨语言、平台中立的数据交换格式，用于高效序列化结构化数据。项目提供C++编译器和运行时库，支持多语言使用，适用于数据序列化与反序列化场景。 |
| 8 | [vllm-project/vllm-omni](https://github.com/vllm-project/vllm-omni) | A framework for efficient model inference with omn... | Python | 3.5k | 82 | vLLM-Omni是基于vLLM的多模态模型推理框架，支持文本、图像、视频、音频等多模态数据处理，优化分布式执行与跨平台性能，适用于高效、低成本的AI模型服务部署。 |
| 9 | [louis-e/arnis](https://github.com/louis-e/arnis) | Generate any location from the real world in Minec... | Rust | 12.2k | 680 | Arnis是一款基于Rust开发的开源工具，可将真实地理数据（如OpenStreetMap和高程数据）转换为高细节度的Minecraft世界，支持Java版和基岩版。提供可视化界面选择区域并生成城市、自然景观等场景，注重模块化设计与跨平台性能优化。 |

[查看完整数据](api/github/2026-03-21.json)
<!-- END GITHUB TRENDING -->








