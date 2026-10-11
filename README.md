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

**最后更新**: 2026-10-10 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [morluto/rea](https://github.com/morluto/rea) | Reverse engineer anything with agents, from app be... | TypeScript | 73.6k | 25.8k | REA 是一个利用 AI 代理进行逆向工程的工具，支持原生二进制文件、JavaScript/Electron、.NET 及网站。它允许用户无需源代码即可分析应用行为、解释功能原理并构建类似功能。通过 MCP 服务器与 Claude Code、Cursor 等代理集成，支持本地分析，提供证据和局限性报告。 |
| 2 | [boykopovar/AnyPS5](https://github.com/boykopovar/AnyPS5) | Tool for automatic PS5 executables porting to Linu... | C++ | 27.0k | 5.8k | AnyPS5 是一个 C++ 工具，用于将 PS5 可执行文件自动移植到 Linux 和 Windows。它包含重链接器和系统库实现，无需模拟或单独运行时进程。支持 SDL 游戏控制器和配置输入，已验证兼容 Dreaming Sarah 等游戏，旨在用于互操作性和研究。 |
| 3 | [storytold/artcraft](https://github.com/storytold/artcraft) | ArtCraft is an intentional crafting engine for art... | Rust | 14.6k | 3.2k | ArtCraft 是一款专为艺术家、设计师和电影制作人设计的交互式 AI 图像与视频创作 IDE。它支持 2D 和 3D 场景编排，提供图像到 3D 网格、角色姿势控制、背景移除及混合资产制作等高级功能。用户可以通过文本提示或视觉工具精确控制画面，实现从构思到成品的可视化创作流程。 |
| 4 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram design for Claude Code, Codex, G... | HTML | 49.0k | 1.2k | 这是一个专为 Claude Code、Cursor 等 AI 代理设计的图表生成技能。支持 44 种图表类型，通过自然语言指令即可生成自包含的 HTML + SVG 文件。支持品牌定制，无需 Mermaid，适合快速生成架构图、流程图及序列图。 |
| 5 | [mksglu/context-mode](https://github.com/mksglu/context-mode) | Context window optimization for AI coding agents. ... | TypeScript | 26.3k | 178 | 这是一个用于 AI 编码代理的上下文窗口优化 MCP 服务器。它通过沙箱工具将原始数据减少 98%，利用 SQLite 和 FTS5 索引实现智能会话记忆，并强制 LLM 以代码方式（ctx_execute）处理分析而非读取数据，从而显著节省 Token 并保持会话连续性。 |
| 6 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 284.5k | 1.7k | 这是一个为 AI 代理（如 Claude、Copilot）提供工程化技能的 Shell 项目。它包含了一套基于真实工程经验的小型、可组合的技能，旨在帮助开发者进行高质量开发而非“氛围编码”。项目通过插件形式安装，支持自动更新。 |
| 7 | [flutter/flutter](https://github.com/flutter/flutter) | Flutter makes it easy and fast to build beautiful ... | Dart | 179.5k | 88 | Flutter 是 Google 的开源 UI 工具包，使用 Dart 语言。它允许开发者通过单一代码库快速构建美观、高性能的移动端、Web 和桌面端应用。Flutter 提供丰富的 Material Design 和 Cupertino 组件，支持像素级定制，是跨平台开发的理想选择。 |
| 8 | [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | An Open Source Machine Learning Framework for Ever... | C++ | 200.7k | 26 | TensorFlow 是 Google 开发的端到端开源机器学习平台。它拥有全面的生态系统，支持研究人员进行前沿研究，也帮助开发者轻松构建和部署 ML 应用。提供稳定的 Python 和 C++ API，支持 GPU 加速，广泛应用于深度学习、神经网络等领域。 |
| 9 | [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | AI turns documents or topics into real, native Pow... | Python | 59.5k | 461 | 这是一个基于 Python 的 AI 工具，利用 Kimi K3 模型将文档、网页或主题自动转化为原生 PowerPoint 幻灯片。它支持原生形状、动画、数据图表和音频旁白，并允许使用自定义模板。项目旨在通过 AI 简化演示文稿的创建过程，让用户能快速生成高质量的 PPTX 文件并进行后续编辑。 |
| 10 | [pytorch/pytorch](https://github.com/pytorch/pytorch) | Tensors and Dynamic neural networks in Python with... | Python | 104.1k | 84 | PyTorch 是一个基于 Python 的深度学习框架，提供强大的 GPU 加速张量计算和动态神经网络构建功能。它包含 torch、autograd、nn 等核心组件，支持自动微分，既可作为 NumPy 的 GPU 替代品，也是灵活的深度学习研究平台。 |
| 11 | [huggingface/transformers](https://github.com/huggingface/transformers) | 🤗 Transformers: the model-definition framework fo... | Python | 167.3k | 96 | 这是一个由 Hugging Face 开发的开源机器学习库，提供了文本、视觉、音频和多模态等领域的最先进模型定义框架。它支持推理和训练，兼容多种训练框架和推理引擎，拥有超过百万个模型检查点，旨在民主化 AI 模型的使用。 |
| 12 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intend... | Python | 28.8k | 625 | 这是一个为 Claude Cowork 设计的开源插件仓库，旨在将 Claude 转变为特定角色的专家。它包含生产力、销售、客服等 11 个插件，支持与多种工具集成，帮助知识工作者定制工作流程，提高团队协作效率。 |
| 13 | [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 218.3k | 278 | 这是一个基于 Andrej Karpathy 关于 LLM 编码陷阱观察的单文件指南，旨在提升 Claude Code 的编码行为。它包含四个核心原则：思考前编码、简单优先、外科手术式更改和目标驱动执行，帮助 AI 避免过度复杂化代码、做出错误假设及破坏性修改。 |

[查看完整数据](api/github/2026-10-10.json)
<!-- END GITHUB TRENDING -->




