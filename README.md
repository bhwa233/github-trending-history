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

**最后更新**: 2026-10-11 | **成功**: 7 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [morluto/rea](https://github.com/morluto/rea) | Reverse engineer anything with agents, from app be... | TypeScript | 108.3k | 25.6k | REA 是一个利用 AI 代理进行逆向工程的工具，支持从原生二进制文件到 Web 应用的全栈分析。它无需源码即可检查应用行为、解释功能原理并生成证据，帮助开发者快速复刻竞品功能。项目支持本地工具集成，并与 Claude Code 等主流 AI 编程助手无缝协作。 |
| 2 | [boykopovar/AnyPS5](https://github.com/boykopovar/AnyPS5) | Tool for automatic PS5 executables porting to Linu... | C++ | 30.3k | 4.0k | AnyPS5 是一个用 C++ 编写的开源工具，旨在自动将 PS5 可执行文件移植到 Linux 和 Windows。它包含重链接器和系统 PRX 库实现，支持 SDL 映射的游戏手柄及键盘鼠标，专注于互操作性与研究，不包含受版权保护的软件。 |
| 3 | [storytold/artcraft](https://github.com/storytold/artcraft) | ArtCraft is an intentional crafting engine for art... | Rust | 18.2k | 3.0k | ArtCraft 是一款面向艺术家、设计师和电影制作人的交互式 AI 图像与视频创作 IDE。它允许用户在 2D 和 3D 空间中构建场景，通过图像转 3D、角色姿势、背景移除等工具精确控制构图与模型，实现从文本提示到精细视觉作品的“先构建后生成”流程。 |
| 4 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram design for Claude Code, Codex, G... | HTML | 50.5k | 1.1k | 这是一个 AI 代理技能，用于生成自包含的 HTML/SVG 图表文件。支持 44 种图表类型，允许通过自然语言指令生成符合品牌风格的架构图、流程图等，无需 Mermaid，生成的文件可直接在浏览器中打开。 |
| 5 | [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | A spy satellite simulator in your browser, except ... | JavaScript | 51.8k | 886 | 处理失败 |
| 6 | [pytorch/pytorch](https://github.com/pytorch/pytorch) | Tensors and Dynamic neural networks in Python with... | Python | 104.5k | 315 | PyTorch 是一个基于 Python 的科学计算库，提供强大的 GPU 加速张量计算功能。它包含一个基于磁带的自动微分系统，支持构建动态神经网络。PyTorch 拥有丰富的组件库，既可作为 NumPy 的 GPU 替代品，也是深度学习研究的理想平台。 |
| 7 | [lyogavin/airllm](https://github.com/lyogavin/airllm) | AirLLM 70B inference with single 4GB GPU... | Jupyter Notebook | 36.5k | 548 | AirLLM 是一个 Jupyter Notebook 项目，旨在显著降低大语言模型推理内存占用。它能在无需量化、蒸馏或剪枝的情况下，让 70B 模型在单张 4GB GPU 上运行，并支持 Kimi K3、Qwen3.8 等大模型。此外，项目还支持在低显存下进行大模型训练。 |
| 8 | [chrislgarry/Apollo-11](https://github.com/chrislgarry/Apollo-11) | Original Apollo 11 Guidance Computer (AGC) source ... | Assembly | 74.3k | 466 | 该项目包含阿波罗11号登月任务的原始源代码，涵盖指令舱和登月舱的阿波罗制导计算机（AGC）程序。代码由MIT博物馆数字化，采用汇编语言编写，处于公共领域，旨在保存历史并欢迎社区贡献。 |

[查看完整数据](api/github/2026-10-11.json)
<!-- END GITHUB TRENDING -->




