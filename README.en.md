English | [中文](./README.md)

# OpenClaw Lark/Feishu Plugin — Stream Card Edition

![demo](./demo.gif)

Based on the official [openclaw-lark](https://github.com/larksuite/openclaw-lark) plugin, with **real-time streaming output**, **reasoning display**, and **tool call indicators**.

## ✨ What's Changed

The official plugin delivers LLM block results all at once after completion. This version enables:

- **Real-time streaming output** — each block's content is progressively appended to the streaming card as it's generated
- **Group chat streaming** — streaming output works in group chats as well
- **Reasoning display** — think content from reasoning models (DeepSeek-R1, Claude 3.7, etc.) streams live, then collapses into an expandable panel
- **Tool call indicators** — when the agent calls a tool, the card shows the current tool at the top in real-time, collapsing into an expandable panel on completion
- **Ordered event panels** — the final card shows toggle panels in the order they occurred: think → tool → think → tool, preserving the full reasoning flow

## 📢 News

- **2026.3.27** — Compatible with OpenClaw >= 2026.3.22; added AskUserQuestion interactive tool; reasoning and tool panels now appear in chronological order; fixed card table limit error 230099
- **2026.3.23** — First release with real-time streaming output and tool call indicators (for OpenClaw < 2026.3.22, use the `0322` branch)

## 📦 Installation

Requires [OpenClaw](https://openclaw.ai) and Node.js (>= v22).

The install script automatically detects your OpenClaw version and installs the right plugin:
- OpenClaw **>= 2026.3.22** → installs the latest version (reasoning streaming, AskUserQuestion, etc.)
- OpenClaw **< 2026.3.22** → installs the legacy-compatible version

> [!NOTE]
> **Alibaba Cloud OpenClaw plans are not supported** (permission restrictions). Please use a self-hosted server.

```bash
npx -y @colinlu50/openclaw-lark-stream install
```

### From source (for development)

```bash
cd ~/.openclaw/extensions
git clone https://github.com/ColinLu50/openclaw-lark-stream.git openclaw-lark-stream
cd openclaw-lark-stream && npm install && npm run build
openclaw gateway restart
```

## ⚙️ Configuration

### Streaming Output

Streaming is enabled by default after installation. To disable:

```bash
openclaw config set channels.feishu.streaming false
openclaw config set channels.feishu.replyMode.direct card
openclaw config set channels.feishu.replyMode.group card
openclaw config set channels.feishu.replyMode.default card
openclaw gateway restart
```

To re-enable:

```bash
openclaw config set channels.feishu.streaming true
openclaw config set channels.feishu.replyMode.direct streaming
openclaw config set channels.feishu.replyMode.group streaming
openclaw config set channels.feishu.replyMode.default streaming
openclaw gateway restart
```

### Card Footer

Elapsed time and completion status are shown by default. To disable:

```bash
openclaw config set channels.feishu.footer.elapsed false  # hide elapsed time
openclaw config set channels.feishu.footer.status false   # hide completion status
```

- **elapsed** — displays total response time (e.g. `Elapsed 3.2s`) in the card footer
- **status** — displays completion state (`Completed` / `Error` / `Stopped`) in the card footer

## 📄 License

MIT
