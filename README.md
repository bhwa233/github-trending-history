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

**最后更新**: 2026-04-07 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) | A gallery that showcases on-device ML/GenAI use ca... | Kotlin | 18.7k | 899 | Google AI Edge Gallery是展示本地设备生成式AI能力的Android应用，支持离线运行大型语言模型。核心功能包括多模态交互（图像识别、语音转录）、AI对话推理、提示测试及模块化技能扩展，适用于隐私敏感场景下的AI模型体验与开发测试。 |
| 2 | [google-ai-edge/LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) | ... | C++ | 2.5k | 522 | LiteRT-LM是Google开源的边缘设备大语言模型推理框架，支持跨平台部署与硬件加速，提供多模态输入、函数调用功能，兼容Gemma/Llama等主流模型，适用于移动设备、IoT及嵌入式场景。 |
| 3 | [NVIDIA/personaplex](https://github.com/NVIDIA/personaplex) | PersonaPlex code.... | Python | 7.9k | 663 | PersonaPlex是基于Moshi架构的实时全双工语音对话模型，支持文本角色提示与音频语音条件控制，可生成自然低延迟的口语交互，适用于需要个性化语音交互的场景。 |
| 4 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 24.5k | 1.2k | GitNexus 是一个浏览器端代码知识图谱工具，可本地化索引代码库生成交互式图谱，并通过CLI与AI代理集成。支持GitHub仓库或ZIP文件导入，提供依赖关系、调用链等结构化分析，增强代码理解与AI开发效率。 |
| 5 | [tobi/qmd](https://github.com/tobi/qmd) | mini cli search engine for your docs, knowledge ba... | TypeScript | 19.5k | 859 | QMD是本地运行的Markdown文档搜索引擎，结合BM25、向量语义搜索和LLM重排序技术，支持多场景知识管理与高效检索。 |
| 6 | [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | ... | - | 8.0k | 42 | 该项目提供一套Claude代码编写指南，通过四个核心原则（思考优先、简洁优先、精准修改、目标驱动）优化大语言模型代码生成质量，解决错误假设、过度复杂化、随意修改代码等问题。 |
| 7 | [elebumm/RedditVideoMakerBot](https://github.com/elebumm/RedditVideoMakerBot) | Create Reddit Videos with just✨ one command ✨... | Python | 10.0k | 656 | 自动化生成Reddit视频的Python工具，通过编程实现视频制作流程，无需手动编辑。支持从Reddit抓取内容并生成视频，需手动上传结果文件。 |
| 8 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | "DeepTutor: Agent-Native Personalized Learning Ass... | Python | 12.1k | 339 | DeepTutor 是一个基于智能代理的个性化学习助手，支持多模式交互（聊天、深度解答、测验生成等），提供统一上下文环境和可扩展的插件架构，适用于教育技术领域的个性化辅导场景。 |
| 9 | [TheCraigHewitt/seomachine](https://github.com/TheCraigHewitt/seomachine) | A specialized Claude Code workspace for creating l... | Python | 3.9k | 213 | SEO Machine 是基于 Claude Code 的专业化 SEO 内容生成工具，提供从关键词研究、内容创作到性能分析的全流程解决方案，集成多维度 SEO 分析与营销技能，支持自动化优化和数据驱动决策。 |

[查看完整数据](api/github/2026-04-07.json)
<!-- END GITHUB TRENDING -->








