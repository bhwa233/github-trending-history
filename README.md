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

**最后更新**: 2026-03-26 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 10.2k | 2.7k | AI代理技能，跨Reddit、X、YouTube等平台抓取近30天热点内容，通过社区投票、分享数据生成带引用的综合摘要。支持比较模式分析对比话题，自动保存研究结果并优化配置管理。 |
| 2 | [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | Teams-first Multi-agent orchestration for Claude C... | TypeScript | 12.6k | 576 | oh-my-claudecode 是面向 Claude Code 的多代理协作工具，提供团队模式与自动化流程，支持 CLI 快速构建 REST API、错误修复等任务，通过深度访谈明确需求并实现零学习曲线开发。 |
| 3 | [virattt/dexter](https://github.com/virattt/dexter) | An autonomous agent for deep financial research... | TypeScript | 19.0k | 269 | Dexter是面向金融研究的自主代理系统，支持任务规划、自我反思与实时数据分析。能分解复杂金融问题为研究步骤，调用数据接口验证结果，并具备安全机制防止异常执行。 |
| 4 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView: WiFi DensePose turns commodity WiFi sign... | Rust | 43.1k | 1.0k | RuView是一款基于Rust的边缘AI系统，通过分析WiFi信号CSI扰动实现人体姿态、呼吸/心率监测及存在检测，无需摄像头或云服务。采用自学习嵌入模型，部署在ESP32等低成本硬件上，实时感知环境并持续优化模型。 |
| 5 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source long-horizon SuperAgent harness tha... | Python | 48.2k | 2.4k | DeerFlow 是字节跳动开源的超代理框架，通过子代理、记忆、沙盒等技术实现长周期任务处理，支持多模型协作与复杂流程自动化，适用于研究、开发及长期任务管理。 |
| 6 | [Vaibhavs10/insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper) | ... | Jupyter Notebook | 11.2k | 1.4k | 基于Whisper的高性能音频转录工具，通过Flash Attention 2、批量处理等优化技术，实现超快速度（150分钟音频仅需1分18秒）。提供CLI接口，支持多种模型优化方案。 |
| 7 | [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) | Build and run agents you can see, understand and t... | Python | 20.4k | 439 | AgentScope是一款面向智能代理的生产级开发框架，支持快速构建可信任的AI代理系统。提供ReAct代理、多模态交互、实时语音、记忆压缩、多代理协作等核心功能，强调灵活性与可扩展性，适用于复杂AI代理场景。 |
| 8 | [twentyhq/twenty](https://github.com/twentyhq/twenty) | Building a modern alternative to Salesforce, power... | TypeScript | 41.2k | 198 | twenty 是一个开源客户关系管理系统（CRM），旨在替代 Salesforce。提供自定义数据模型、工作流自动化、多视图布局、权限管理等功能，支持本地部署。基于社区开发，强调开源协作与可扩展性，适用于需要灵活定制的企业级客户管理场景。 |
| 9 | [datalab-to/chandra](https://github.com/datalab-to/chandra) | OCR model that handles complex tables, forms, hand... | Python | 6.1k | 546 | Chandra OCR 2是一款先进的OCR模型，支持90+语言，可将PDF和图像转为结构化HTML/Markdown/JSON，精准处理表格、手写、表单及复杂布局，提供本地和远程推理模式。 |

[查看完整数据](api/github/2026-03-26.json)
<!-- END GITHUB TRENDING -->








