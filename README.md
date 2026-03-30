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

**最后更新**: 2026-03-30 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 30.1k | 2.5k | VibeVoice是微软开源的前沿语音AI项目，包含语音识别（ASR）和语音合成（TTS）模块。ASR支持60分钟长音频单次处理，生成带说话人、时间戳的结构化转录，覆盖50+语言；TTS可生成多语言长音频，但代码因使用问题已移除。集成Hugging Face Transformers和vLLM推理优化。 |
| 2 | [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | A visual, example-driven guide to Claude Code — fr... | Python | 9.8k | 4.2k | 提供Claude Code的视觉化教程与生产级模板，覆盖从基础命令到高级代理架构的完整学习路径，包含交互式测验和分步示例。 |
| 3 | [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | practice made claude perfect... | HTML | 26.0k | 1.3k | 该项目聚焦Claude代码最佳实践，通过代理、命令、技能等模块化设计，提供工作流自动化、上下文管理及插件扩展方案，强调实践优化模型应用效果。 |
| 4 | [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) | real time face swap and one-click video deepfake w... | Python | 86.3k | 1.1k | 该项目是一款基于Python的实时人脸交换与视频深度伪造工具，仅需单张图片即可生成深度伪造内容。提供一键式操作，内置内容审查机制以防止不当媒体处理，强调伦理与法律合规性。 |
| 5 | [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Financial data platform for analysts, quants and A... | Python | 64.5k | 499 | OpenBB-finance/OpenBB 是面向金融分析师、量化交易员和AI代理的开源数据平台，提供多源数据整合与统一访问接口，支持Python、Excel、AI代理等多场景数据调用，具备REST API和本地服务部署功能。 |
| 6 | [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) | freeCodeCamp.org's open-source codebase and curric... | TypeScript | 439.7k | 376 | freeCodeCamp/freeCodeCamp 是一个开源编程教育平台，提供免费的全栈开发和机器学习课程。用户可通过互动挑战、项目实践和考试获取开发者认证，涵盖响应式设计、JavaScript、Python等领域，同时支持语言能力认证。 |
| 7 | [sherlock-project/sherlock](https://github.com/sherlock-project/sherlock) | Hunt down social media accounts by username across... | Python | 74.7k | 68 | Sherlock 是一个基于Python的命令行工具，可跨400多个社交平台通过用户名进行账户检索。支持多用户批量查询、结果文件存储、自定义输出格式及代理配置，适用于社交媒体账户追踪与安全审计场景。 |
| 8 | [apache/superset](https://github.com/apache/superset) | Apache Superset is a Data Visualization and Data E... | TypeScript | 71.9k | 63 | Apache Superset是现代化的企业级商业智能Web应用，提供数据可视化、探索和分析功能。支持无代码图表构建、SQL编辑器、多数据库连接及丰富可视化组件，适用于大规模数据监控与决策支持。 |
| 9 | [fastfetch-cli/fastfetch](https://github.com/fastfetch-cli/fastfetch) | A maintained, feature-rich and performance oriente... | C | 21.4k | 271 | FastFetch是一款用C语言开发的高性能系统信息工具，类似Neofetch，支持多平台（Linux、macOS、Windows等），提供视觉化系统信息展示，注重可定制性和快速响应，适用于系统调试和个性化显示。 |
| 10 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 18.5k | 1.9k | Hermes-Agent 是一个自我改进的AI代理系统，支持跨平台交互与多模型集成。具备学习循环机制，可自主创建和优化技能，实现任务自动化、对话记忆持久化及多终端无缝衔接，适用于需要持续优化的智能自动化场景。 |

[查看完整数据](api/github/2026-03-30.json)
<!-- END GITHUB TRENDING -->








