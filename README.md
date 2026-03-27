[English](./README.en.md) | 中文

# OpenClaw 飞书插件 — 流式卡片版

![demo](./demo.gif)

基于官方 [openclaw-lark](https://github.com/larksuite/openclaw-lark) 插件，支持**实时流式输出**、**推理过程展示**和**工具调用状态**。

## ✨ 改动说明

官方插件在 LLM 生成完一个 block 后才一次性推送结果。本版本实现了：

- **实时流式输出** — 每个 block 的内容在生成过程中逐步追加到流式卡片
- **群聊流式输出** — 群聊中也可使用流式输出
- **推理过程展示** — 推理模型（DeepSeek-R1、Claude 3.7 等）的 think 内容实时流出，完成后折叠为可展开面板
- **工具调用状态** — agent 调用工具时，卡片顶部实时显示当前工具，完成后折叠为可展开面板
- **有序事件面板** — 最终卡片按 think → tool → think → tool 的顺序展示折叠面板，完整还原推理过程

## 📢 News

- **2026.3.27** — 适配 OpenClaw >= 2026.3.22；新增 AskUserQuestion 交互式提问工具；推理块与工具调用面板按发生顺序排列；修复卡片表格超限错误 230099
- **2026.3.23** — 发布第一版，支持实时流式输出和工具调用状态展示（适配 OpenClaw < 2026.3.22，请切换到 `0322` 分支）

## 📦 安装

需要 [OpenClaw](https://openclaw.ai) 和 Node.js（>= v22）。

安装脚本会自动检测 OpenClaw 版本并安装对应的插件版本：
- OpenClaw **>= 2026.3.22** → 自动安装最新版（支持推理流式、AskUserQuestion 等）
- OpenClaw **< 2026.3.22** → 自动安装兼容旧版的插件

> [!NOTE]
> **不支持阿里云 OpenClaw 套餐**（权限限制），请使用自建服务器安装。

```bash
npx -y @colinlu50/openclaw-lark-stream install
```

### 从源码安装（开发用）

```bash
cd ~/.openclaw/extensions
git clone https://github.com/ColinLu50/openclaw-lark-stream.git openclaw-lark-stream
cd openclaw-lark-stream && npm install && npm run build
openclaw gateway restart
```

## ⚙️ 配置

### 流式输出

安装后默认开启流式输出。如需关闭：

```bash
openclaw config set channels.feishu.streaming false
openclaw config set channels.feishu.replyMode.direct card
openclaw config set channels.feishu.replyMode.group card
openclaw config set channels.feishu.replyMode.default card
openclaw gateway restart
```

重新开启：

```bash
openclaw config set channels.feishu.streaming true
openclaw config set channels.feishu.replyMode.direct streaming
openclaw config set channels.feishu.replyMode.group streaming
openclaw config set channels.feishu.replyMode.default streaming
openclaw gateway restart
```

### 卡片底栏

默认显示耗时和完成状态，如需关闭：

```bash
openclaw config set channels.feishu.footer.elapsed false  # 隐藏耗时
openclaw config set channels.feishu.footer.status false   # 隐藏完成状态
```

- **elapsed** — 卡片底栏显示总响应耗时（如 `耗时 3.2s`）
- **status** — 卡片底栏显示完成状态（`已完成` / `出错` / `已停止`）

## 📄 许可证

MIT
