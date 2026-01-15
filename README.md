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

**最后更新**: 2026-01-15 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [eigent-ai/eigent](https://github.com/eigent-ai/eigent) | Eigent: The Open Source Cowork Desktop to Unlock Y... | TypeScript | 5.9k | 674 | Eigent是一个开源的AI协作桌面应用，通过多代理工作队列实现复杂流程自动化，支持本地部署与隐私保护，提供零配置的AI工作流管理方案。 |
| 2 | [blakeblackshear/frigate](https://github.com/blakeblackshear/frigate) | NVR with realtime local object detection for IP ca... | TypeScript | 29.3k | 95 | Frigate NVR是一款基于TypeScript开发的本地IP摄像头实时对象检测系统，集成OpenCV与TensorFlow实现低资源消耗的AI监控。支持Home Assistant联动、MQTT通信、多摄像头管理及视频录制，适用于智能家居安防场景。 |
| 3 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 24.2k | 2.0k | Superpowers 是一个基于可组合技能的软件开发框架，通过代理自动化流程提升编码效率。它通过分步设计、TDD测试驱动和YAGNI原则生成实施计划，并支持子代理协同开发，适用于需要自动化代码生成与协作的场景。 |
| 4 | [cilium/cilium](https://github.com/cilium/cilium) | eBPF-based Networking, Security, and Observability... | Go | 23.3k | 9 | Cilium基于eBPF技术提供网络、安全与可观测性解决方案，支持跨集群扁平化L3网络，L7协议感知的安全策略，高效负载均衡及替代kube-proxy的扩展能力，适用于大规模容器化环境。 |
| 5 | [wavetermdev/waveterm](https://github.com/wavetermdev/waveterm) | An open-source, cross-platform terminal for seamle... | Go | 16.4k | 120 | Wave Terminal是一款跨平台终端工具，整合传统终端功能与图形化能力，支持文件预览、网页浏览、AI辅助等功能。提供拖放界面管理终端块、编辑器、浏览器和AI助手，内置远程文件编辑、多模型AI聊天、命令块管理及安全密钥存储，提升开发效率。 |
| 6 | [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Ultralytics YOLO 🚀... | Python | 51.4k | 141 | Ultralytics YOLO提供先进的目标检测、分割、分类等计算机视觉模型，支持CLI和Python集成，具备高效训练与预测能力，适用于实时图像分析场景。 |
| 7 | [mudler/LocalAI](https://github.com/mudler/LocalAI) | 🤖 The free, Open Source alternative to OpenAI, Cl... | Go | 41.9k | 425 | LocalAI是一款开源的本地AI推理平台，兼容OpenAI API，支持文本、音频、图像、视频生成等多种任务。无需GPU即可在消费级硬件上运行，兼容gguf、transformers等模型格式，提供分布式和去中心化推理功能。 |
| 8 | [google-ai-edge/mediapipe](https://github.com/google-ai-edge/mediapipe) | Cross-platform, customizable ML solutions for live... | C++ | 33.2k | 41 | MediaPipe是跨平台机器学习框架，提供实时媒体处理解决方案。支持Android/iOS/web/桌面/边缘设备，包含预训练模型、定制工具链和可视化评估平台，适用于计算机视觉、语音识别等AI任务的快速集成与优化。 |
| 9 | [puckeditor/puck](https://github.com/puckeditor/puck) | The visual editor for React... | TypeScript | 10.6k | 11 | Puck是一个模块化的开源React可视化编辑器，允许用户通过自定义组件构建拖放式UI。作为纯React组件，兼容Next.js等环境，支持数据自主管理且无供应商锁定，适用于内容管理系统和定制化编辑场景。 |
| 10 | [twitter/the-algorithm](https://github.com/twitter/the-algorithm) | Source code for the X Recommendation Algorithm... | Scala | 70.2k | 365 | X平台推荐算法核心代码，包含数据处理、机器学习模型及服务框架，用于生成个性化内容流和用户互动推荐。 |

[查看完整数据](api/github/2026-01-15.json)
<!-- END GITHUB TRENDING -->








