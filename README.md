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

**最后更新**: 2026-03-27 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 12.6k | 2.8k | AI信息聚合工具，跨平台抓取Reddit、X、YouTube等30天热门内容，生成带引用的结构化摘要。支持对比分析、智能社区发现和本地化存储，适用于快速掌握热点话题和社区共识。 |
| 2 | [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) | real time face swap and one-click video deepfake w... | Python | 83.0k | 1.5k | 该项目是一款基于Python的实时人脸交换与视频深度伪造工具，仅需单张图片即可生成深度伪造内容。强调伦理与法律合规，内置内容审查机制，禁止处理不当素材，用户需获取人脸授权并标注深度伪造内容。 |
| 3 | [SakanaAI/AI-Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2) | The AI Scientist-v2: Workshop-Level Automated Scie... | Python | 2.8k | 125 | AI-Scientist-v2是自主科学发现系统，通过代理树搜索实现自动化假设生成、实验执行、数据分析和论文撰写。相比v1，其无需人工模板，跨ML领域通用，适合开放性科学探索，但依赖LLM代码执行存在风险。 |
| 4 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 24.7k | 320 | VibeVoice是微软开源的语音AI框架，包含ASR和TTS模型。ASR支持60分钟长音频单次处理，生成带说话人、时间戳的结构化转录，覆盖50+语言。TTS可合成90分钟多说话人语音，支持实时流式输入。项目整合Hugging Face Transformers，提供vLLM加速推理。 |
| 5 | [twentyhq/twenty](https://github.com/twentyhq/twenty) | Building a modern alternative to Salesforce, power... | TypeScript | 42.0k | 661 | twentyhq/twenty 是一个开源客户关系管理系统（CRM），旨在替代Salesforce。提供自定义数据视图、工作流自动化、权限管理、多对象字段配置等功能，支持kanban、表格等多种布局方式。基于社区开发，强调开源协作与低成本替代方案。 |
| 6 | [datalab-to/chandra](https://github.com/datalab-to/chandra) | OCR model that handles complex tables, forms, hand... | Python | 7.0k | 913 | Chandra OCR 2 是先进的OCR模型，支持复杂表格、表单、手写体识别，可将图片/PDF转为带布局信息的Markdown/HTML/JSON。具备90+语言支持、数学公式处理、图像提取及两种推理模式（HuggingFace/vLLM）。 |
| 7 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 118.4k | 2.8k | Superpowers 是一个基于代理技能框架的软件开发方法论，通过需求分析、设计确认、TDD 实现和子代理协作流程，提升编码自动化效率。强调 YAGNI、DRY 原则，支持 Claude 等编码代理自主执行开发任务。 |
| 8 | [virattt/dexter](https://github.com/virattt/dexter) | An autonomous agent for deep financial research... | TypeScript | 19.7k | 673 | Dexter是面向金融研究的自主代理系统，支持任务规划、实时数据处理与自我验证，通过分解复杂问题生成结构化研究方案并迭代优化结果。 |
| 9 | [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | Teams-first Multi-agent orchestration for Claude C... | TypeScript | 13.9k | 1.4k | oh-my-claudecode 是基于 Claude Code 的多智能体编排工具，通过团队协作模式简化开发流程。提供自动化构建、需求深度访谈、tmux CLI 工人管理等功能，降低使用门槛并提升团队开发效率。 |
| 10 | [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | Official source code of FreeCAD, a free and openso... | C++ | 29.6k | 173 | FreeCAD是一款开源的跨平台3D参数化建模器，支持从2D草图到3D模型的转换，提供Python API和多种工程设计功能，适用于产品设计、机械工程及建筑领域。 |
| 11 | [Vaibhavs10/insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper) | ... | Jupyter Notebook | 11.9k | 1.1k | 基于Whisper的高性能音频转录工具，通过Flash Attention 2、批量处理和BetterTransformers优化，实现150分钟音频98秒内完成转录。提供轻量级CLI接口，支持多种模型和精度配置。 |
| 12 | [onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx) | Open Source AI Platform - AI Chat with advanced fe... | Python | 19.1k | 512 | 开源AI平台，提供自托管聊天界面支持所有LLM，集成Agents、RAG、Web搜索、40+知识源连接器及代码解释等高级功能，适配本地化部署与多云环境。 |

[查看完整数据](api/github/2026-03-27.json)
<!-- END GITHUB TRENDING -->








