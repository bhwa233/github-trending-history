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

**最后更新**: 2026-01-01 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [awslabs/amazon-bedrock-agentcore-samples](https://github.com/awslabs/amazon-bedrock-agentcore-samples) | Amazon Bedrock Agentcore accelerates AI agents int... | Jupyter Notebook | 2.0k | 219 | Amazon Bedrock AgentCore Samples提供基于Jupyter Notebook的教程和示例，展示如何利用框架和模型无关的特性快速部署安全可靠的AI代理应用，涵盖Runtime、Gateway、Memory等核心组件实践。 |
| 2 | [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | Get 10X more out of Claude Code, Codex or any codi... | Rust | 10.7k | 541 | Vibe Kanban是一款用于协调和管理AI代码代理（如Claude Code、Codex）工作流程的工具，支持多代理并行/串行执行、任务状态跟踪、配置集中管理及远程项目SSH访问，旨在提升开发者效率。 |
| 3 | [usememos/memos](https://github.com/usememos/memos) | An open-source, self-hosted note-taking service. Y... | Go | 48.0k | 81 | 开源自托管笔记服务，强调隐私保护与数据自主权。支持Markdown格式，采用Go+React架构，提供快速性能与简单部署方案，适用于个人知识管理及团队协作场景。 |
| 4 | [organicmaps/organicmaps](https://github.com/organicmaps/organicmaps) | 🍃 Organic Maps is a free Android & iOS offline ma... | C++ | 12.8k | 232 | Organic Maps是一款开源的隐私优先离线地图应用，提供徒步、骑行、驾驶等场景的离线导航服务。基于OpenStreetMap数据，支持多语言、暗黑模式、轨迹导出及详细地形信息，无广告无跟踪，强调用户隐私与电池续航优化。 |
| 5 | [afkarxyz/SpotiFLAC](https://github.com/afkarxyz/SpotiFLAC) | Get Spotify tracks in true FLAC from Tidal, Qobuz ... | TypeScript | 1.9k | 437 | SpotiFLAC 是一个无需账户即可从 Tidal、Qobuz 和 Amazon Music 获取 Spotify 音乐的工具，支持将音频转换为高质量 FLAC 格式。项目提供命令行接口，通过第三方服务实现跨平台音乐提取，但强调仅限教育和私人使用。 |
| 6 | [HQarroum/docker-android](https://github.com/HQarroum/docker-android) | 🤖 A minimal and customizable Docker image running... | Shell | 1.2k | 304 | 提供最小化可定制的Android模拟器Docker镜像，支持KVM加速、多版本Android配置和无头模式运行，内置ADB服务与端口转发功能，适用于CI/CD环境及远程Android测试场景。 |
| 7 | [harvard-edge/cs249r_book](https://github.com/harvard-edge/cs249r_book) | Introduction to Machine Learning Systems... | JavaScript | 14.4k | 652 | 哈佛大学CS249R课程配套资源，聚焦AI系统工程教育，提供教材、TinyTorch框架、硬件套件及实验代码，涵盖机器学习系统设计、开发与部署全流程。 |
| 8 | [Polymarket/agents](https://github.com/Polymarket/agents) | Trade autonomously on Polymarket using AI Agents... | Python | 1.4k | 66 | Polymarket Agents 是用于构建AI交易代理的框架，支持与Polymarket API集成，提供预测市场工具、RAG数据源和LLM工程功能，实现自动化交易策略。 |
| 9 | [HandsOnLLM/Hands-On-Large-Language-Models](https://github.com/HandsOnLLM/Hands-On-Large-Language-Models) | Official code repo for the O'Reilly Book - "Hands-... | Jupyter Notebook | 19.4k | 101 | 该项目是O'Reilly书籍《Hands-On Large Language Models》的官方代码库，包含12章Jupyter Notebook示例，涵盖LLM基础、Transformer结构、文本分类、生成技术等，通过可视化教程帮助读者掌握LLM工具与实践。 |
| 10 | [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | RAG on Everything with LEANN. Enjoy 97% storage sa... | Python | 7.8k | 638 | LEANN是一个创新的向量数据库，通过图-based有选择性重新计算和高保真度剪枝技术，在个人设备上实现97%存储节省的RAG应用。支持本地化语义搜索，隐私保护，适用于文档检索、代码分析及个人AI助手场景。 |
| 11 | [livekit/agents](https://github.com/livekit/agents) | A powerful framework for building realtime voice A... | Python | 8.8k | 5 | LiveKit Agents是用于构建实时语音AI代理的Python框架，支持多模态交互与实时通信，提供STT、LLM、TTS等灵活集成，内置任务调度、WebRTC客户端及电话对接功能，适用于智能客服、实时会议等场景。 |
| 12 | [DayuanJiang/next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io) | A next.js web application that integrates AI capab... | TypeScript | 16.2k | 95 | 基于Next.js的AI驱动图表工具，支持自然语言生成/编辑draw.io图表，提供多云架构图生成、图像/文档上传及AI可视化增强功能。 |

[查看完整数据](api/github/2026-01-01.json)
<!-- END GITHUB TRENDING -->








