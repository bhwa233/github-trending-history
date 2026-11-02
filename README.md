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

**最后更新**: 2026-11-01 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | TypeScript | 109.4k | 1.5k | 这是一个为 Claude Code 构建的持久记忆压缩系统。它通过 AI 自动捕获会话中的工具使用观察，生成语义摘要，并在未来会话中注入相关上下文，实现跨会话的知识连续性。支持多种 AI Agent，如 Claude Code、Copilot 等。 |
| 2 | [lightpanda-io/browser](https://github.com/lightpanda-io/browser) | Lightpanda: the headless browser designed for AI a... | Zig | 40.2k | 825 | Lightpanda 是一个专为 AI 代理和自动化设计的无头浏览器，使用 Zig 语言从零编写。相比 Headless Chrome，它轻量 16 倍且快 9 倍，内存占用仅 123MB，执行时间仅需 5 秒。支持 Linux 和 macOS，适合需要高性能浏览器自动化任务的场景。 |
| 3 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 45.4k | 630 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理高噪声的金融数据设计。它采用两阶段框架，首先将 OHLCV 数据量化为离散 Token，再通过自回归 Transformer 进行预训练。项目提供多个模型版本（Mini 到 Base），支持 BTC 等交易对的 24 小时预测，已获 AAAI 2026 录用。 |
| 4 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | ... | TypeScript | 38.2k | 3.1k | T3 Code 是一个开源的“代理控制台”，旨在通过统一的移动端、Web 和桌面端界面来控制本地 AI 编程代理。它支持 Claude、Codex、Cursor 等多种主流服务，强调高性能、远程就绪和完全开源，致力于为开发者提供最佳的开发体验。 |
| 5 | [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | Open-source Grok Bot alternative with a virtual ma... | TypeScript | 10.6k | 922 | OpenMausBot 是一个开源的 Grok Bot 替代品，旨在提供一个本地优先的 AI 代理管理平台。它允许用户在聊天应用中管理多个独立的 AI 代理（如 Claude、Codex），每个代理拥有独立的个性、模型和运行环境。该项目强调“自带代理”和隐私安全，无需中间代理，完全在本地运行。 |
| 6 | [public-apis/public-apis](https://github.com/public-apis/public-apis) | A collective list of free APIs... | Python | 494.7k | 324 | 这是一个汇集了大量免费公开 API 的资源列表仓库。开发者可以在这里查找并使用各种领域的 API，涵盖数据集、开发工具等，极大地便利了 API 的集成与开发工作。 |
| 7 | [cjpais/Handy](https://github.com/cjpais/Handy) | A free, open source, and extensible speech-to-text... | Rust | 36.6k | 339 | Handy 是一款基于 Rust 开发的跨平台桌面语音转文本应用。它完全离线运行，注重隐私保护，无需上传音频到云端。用户可通过快捷键触发录音，利用 Whisper 或 Parakeet 模型进行本地转录，并将结果直接粘贴到任意文本框中。该项目免费开源，旨在提供简单、可扩展且易于访问的语音输入工具。 |
| 8 | [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Turn Claude Code into a full game dev studio — 49 ... | Shell | 32.4k | 967 | 这是一个将 Claude Code 会话转化为完整游戏开发工作室的项目。它包含49个专业AI代理（涵盖设计、编程、艺术等）、74个技能和15个自动化钩子。通过模拟真实工作室的层级结构和QA流程，确保代码质量、设计规范和项目愿景的一致性，帮助用户从零开始构建结构化、高质量的游戏项目。 |
| 9 | [kornia/kornia](https://github.com/kornia/kornia) | 🐍 Geometric Computer Vision Library for Spatial A... | Python | 11.8k | 101 | Kornia 是一个基于 PyTorch 的可微分计算机视觉库，提供 1200+ 个图像处理和几何算法。它支持批量变换、自动微分和 GPU 加速，包含相机模型、特征匹配等丰富算子，旨在成为 PyTorch 生态中可微分视觉的参考实现。 |
| 10 | [beenuar/AiSOC](https://github.com/beenuar/AiSOC) | Open-source AI Security Operations Center: alert f... | Python | 6.3k | 446 | AiSOC 是一个开源的 AI 安全运营中心，专注于安全工具遥测数据的归一化与自动化响应。它内置 7000+ 规则库，利用 LLM 代理对警报进行智能研判与 MITRE ATT&CK 追踪，并记录每一步决策以实现可审计的自动化调查。项目支持 MCP 服务器集成，完全自托管且无需 API 密钥，适合企业构建自主可控的安全运营体系。 |
| 11 | [Renhuai123/ziwei-doushu](https://github.com/Renhuai123/ziwei-doushu) | 紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据... | TypeScript | 13.2k | 941 | 这是一个基于倪海厦《天纪》体系的紫微斗数开源排盘引擎。项目包含完整的排盘算法、四化系统及古籍数据，并发布了包含67.5万张命盘的v4.0解读数据集。代码开源，旨在让更多人接触和学习这门传统命理学。 |
| 12 | [anomalyco/hex](https://github.com/anomalyco/hex) | Local voice dictation for mac, windows and linux... | Rust | 3.4k | 1.2k | Hex 是一款跨平台的本地语音转文字工具，支持 Mac、Windows 和 Linux。用户只需按住快捷键说话，松开后即可将转录文本粘贴到当前应用中。所有处理均在本地设备完成，保护隐私。项目使用 Rust 开发，提供多种安装方式，采用 MIT 许可证。 |
| 13 | [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | Open-source AI coworkers that each get a computer ... | TypeScript | 9.6k | 175 | OpenBot 是一个开源框架，允许在本地基础设施上部署拥有独立浏览器、文件和工具的 AI 同事。它支持任何 AG-UI 代理，强调操作的可控性与可追溯性。用户可完全自定义并运行自己的 AI 助手，适合需要本地化、私有化部署的智能协作场景。 |
| 14 | [togg53192-cmd/jailbreaks](https://github.com/togg53192-cmd/jailbreaks) | LIST OF ALL MY JAILBREAKS... | - | 13.0k | 726 | 这是一个包含32个针对26+种模型的系统提示词、人设锁定及工作区策略的精选集合。涵盖了开源（GLM、Qwen等）和闭源（Claude、Gemini等）模型。所有文件均为完整且可直接粘贴的格式。该项目旨在研究AI行为、提示注入及系统鲁棒性，仅供教育和研究目的。 |
| 15 | [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) | In-depth tutorials on LLMs, RAGs and real-world AI... | Jupyter Notebook | 40.3k | 1.2k | 这是一个专注于AI工程的综合资源库，包含93+个生产级项目。项目涵盖LLMs、RAG、Agents及OCR等核心领域，按难度分级，提供从入门到精通的实战教程，适合初学者、从业者和研究人员学习与构建AI应用。 |
| 16 | [FlashML-org/FreeToken](https://github.com/FlashML-org/FreeToken) | FreeToken brings datacenter-scale model serving to... | Python | 15.4k | 242 | FreeToken 是一个边缘原生 MoE 服务引擎，旨在个人电脑上高效运行大规模前沿模型。它利用异构资源（CPU/GPU）实现带宽自适应执行和弹性内存管理，支持 DeepSeek、Qwen 等多种模型。通过语义感知缓存和快速权重格式，它能在消费级硬件上实现数据中心级的推理速度，适合本地部署大模型和 AI 智能体开发。 |
| 17 | [hyprwm/Hyprland](https://github.com/hyprwm/Hyprland) | Hyprland is an independent, highly customizable, d... | C++ | 39.4k | 38 | Hyprland 是一个 100% 独立的动态平铺 Wayland 合成器，专注于高度自定义和视觉效果。它支持强大的插件系统、 tearing 性能优化、多种布局模式以及即时配置重载，旨在提供现代且流畅的桌面体验。 |

[查看完整数据](api/github/2026-11-01.json)
<!-- END GITHUB TRENDING -->




