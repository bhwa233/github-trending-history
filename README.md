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

**最后更新**: 2026-11-02 | **成功**: 14 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | Computer use CLI for AI agents... | Rust | 10.3k | 2.3k | 这是一个为 AI 代理提供桌面应用操作能力的 CLI 和 C 库。它通过操作系统可访问性树读取和操作应用，返回包含引用的 JSON 快照，支持跨平台（macOS/Windows/Linux）的无像素匹配交互。 |
| 2 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | TypeScript | 110.9k | 1.8k | 处理失败 |
| 3 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 🕷️ The BEST Web Scraping framework that handles e... | Python | 93.1k | 706 | Scrapling 是一个功能强大的 Python 网络抓取框架，集成了快速 HTTP 请求、隐身浏览器、JavaScript 渲染和并发爬取功能。它支持静态页面抓取、API 数据提取，具备代理轮换、会话管理和数据导出能力。此外，它还提供 MCP 服务器和 CLI 工具，方便从简单提取到全站爬取的多种场景。 |
| 4 | [hyprwm/Hyprland](https://github.com/hyprwm/Hyprland) | Hyprland is an independent, highly customizable, d... | C++ | 40.0k | 509 | Hyprland 是一个独立的、高度可定制的动态平铺 Wayland 合成器。它提供丰富的视觉效果（渐变、模糊、动画）、强大的插件系统、多种窗口布局及原生 IME 支持。代码库易于扩展，开发活跃，支持 tearing，旨在提供极致的 QoL 和自定义体验。 |
| 5 | [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Turn Claude Code into a full game dev studio — 49 ... | Shell | 33.7k | 1.4k | 该项目将 Claude Code 转化为一个完整的游戏开发工作室。它包含49个专业AI代理和74个技能，模拟真实工作室层级（导演、主管、专家）。通过Slash命令、钩子和规则，确保代码质量、设计规范和项目结构，防止“魔法数字”和混乱代码，实现从构思到发布的全流程管理。 |
| 6 | [FlashML-org/FreeToken](https://github.com/FlashML-org/FreeToken) | FreeToken brings datacenter-scale model serving to... | Python | 16.2k | 653 | FreeToken 是一个边缘原生 MoE 服务引擎，旨在个人硬件上高效运行大规模模型。它支持 CPU-GPU 协同执行、语义感知缓存和弹性内存管理，能在消费级显卡（如 RTX 30/40/50）上流畅运行 290B+ 参数的前沿模型，提供 Anthropic/OpenAI 兼容的 API。 |
| 7 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | ... | TypeScript | 42.3k | 3.2k | T3 Code 是一个开源的“代理控制台”，旨在统一管理本地 AI 编程代理。它提供 iOS、Android、Web 和 Electron 桌面端应用，支持 Claude、Codex、Cursor 等多种服务，为开发者提供高性能、远程就绪且真正开放的统一开发体验。 |
| 8 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 46.1k | 857 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融数据的高噪声特性设计。它采用两阶段框架，首先将 OHLCV 数据量化为离散标记，再通过自回归 Transformer 进行预训练。项目提供多个模型版本，支持金融时间序列预测，已入选 AAAI 2026。 |
| 9 | [kornia/kornia](https://github.com/kornia/kornia) | 🐍 Geometric Computer Vision Library for Spatial A... | Python | 12.2k | 412 | Kornia 是一个基于 PyTorch 的可微分计算机视觉库，提供丰富的图像处理和几何算法。它支持批量变换、自动微分和 GPU 加速，拥有 1200+ 个操作符，涵盖相机模型、特征检测、形态学等，旨在成为 PyTorch 生态中的参考实现。 |
| 10 | [JustVugg/colibri](https://github.com/JustVugg/colibri) | Run frontier MoE models on hardware you already ow... | C | 46.7k | 675 | colibri 是一个纯 C 语言编写的轻量级推理引擎，专为在普通硬件上运行超大规模 MoE（混合专家）模型而设计。它通过将专家模型存储在磁盘并按需流式加载，实现了极低的内存占用，无需 GPU 即可在 CPU 上运行 GLM、DeepSeek、Qwen 等数百亿参数的开源大模型。 |
| 11 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 310.4k | 858 | 这是一套为 AI 代理（如 Claude、Copilot 等）提供的实用工程技能集合，基于 Shell 开发。旨在帮助开发者进行真正的工程实践，而非“氛围编码”。这些技能小巧、可组合，支持多种模型，通过插件形式安装并支持自动更新。 |
| 12 | [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | Worktrunk is a CLI for Git worktree management, de... | Rust | 10.1k | 77 | Worktrunk 是一个用 Rust 编写的 CLI 工具，旨在简化 Git worktree 管理。它专为并行 AI 代理工作流设计，通过提供比原生 Git 更简洁的命令（如创建、切换和清理 worktree），解决了多代理并行开发时的目录冲突问题。此外，它还支持钩子和 copy-on-write 构建缓存等提升开发效率的特性。 |
| 13 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | The open-source app everyone uses to manage agents... | TypeScript | 110.5k | 412 | Paperclip 是一个开源的 AI 代理管理平台，旨在帮助团队协调和管理 AI 代理。它提供类似任务管理器的界面，支持自定义流程、成本监控和权限管理。用户可以雇佣各种 AI 代理（如 OpenClaw、Claude Code）来执行商业目标，并从仪表盘实时追踪工作进度和预算。 |
| 14 | [karpathy/nanochat](https://github.com/karpathy/nanochat) | The best ChatGPT that $100 can buy.... | Python | 60.0k | 321 | nanochat 是 Andrej Karpathy 开发的最小化 LLM 训练实验框架。它覆盖了从分词到推理的全流程，代码简洁。通过设置 --depth 参数，系统自动计算最优超参数，仅需单 GPU 节点即可低成本训练出 GPT-2 级别模型，并设有社区速通排行榜。 |
| 15 | [p-e-w/heretic](https://github.com/p-e-w/heretic) | Training-free language model modification: Remove ... | Python | 38.2k | 420 | Heretic 是一个无需训练即可修改语言模型的 Python 工具。它利用数学技术通过对比示例引导模型行为，能够移除审查、减少废话和谄媚等。用户无需理解模型内部原理即可在本地硬件上运行，支持多种模型架构。 |

[查看完整数据](api/github/2026-11-02.json)
<!-- END GITHUB TRENDING -->




