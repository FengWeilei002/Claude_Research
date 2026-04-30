---
tags: [guide, claude-code, harness, configuration]
created: 2026-04-29
---

# Claude Code Harness 配置指南

## 什么是 Harness？

Harness 是 Claude Code 的「自动化配置层」，通过 `settings.json` 文件控制：

- **权限 (Permissions)** — 哪些操作允许/禁止/需确认
- **钩子 (Hooks)** — 在特定事件发生时自动执行脚本或 LLM 检查
- **环境变量 (Env)** — 会话级别的环境变量
- **模型/代理配置** — 模型选择、thinking mode 等

简而言之：**harness = Claude Code 的行为操作系统**。

---

## 一、Settings 文件层级

三个层级，后加载的覆盖前面的：

| 文件 | 位置 | Git | 用途 |
|------|------|-----|------|
| 用户级 | `~/.claude/settings.json` | 不提交 | 全局个人偏好 |
| 项目级 | `.claude/settings.json` | 提交 | 团队共享的 hooks/permissions/plugins |
| 本地级 | `.claude/settings.local.json` | gitignored | 个人项目覆盖（**本项目使用此层**） |

**加载顺序**：用户级 → 项目级 → 本地级（后者覆盖前者）

> 当前 ResearchVault 使用 `.claude/settings.local.json`，因为权限规则包含个人路径和 API token，不适合提交。

---

## 二、权限系统 (Permissions)

### 权限规则语法

```
"工具名(参数模式)"
```

| 写法 | 含义 | 示例 |
|------|------|------|
| `Bash(npm *)` | 前缀通配 | 允许所有 npm 命令 |
| `Bash(git status)` | 精确匹配 | 只允许 git status |
| `WebFetch(domain:api.crossref.org)` | 域名限制 | 只允许访问 Crossref API |
| `Read` | 仅工具名 | 允许所有 Read 操作 |
| `Edit(.claude)` | 路径限制 | 只允许编辑 .claude 目录 |

### 权限模式

```json
{
  "permissions": {
    "allow": ["Bash(git *)", "WebSearch"],
    "deny": ["Bash(rm -rf *)"],
    "ask": ["Write(/etc/*)"],
    "defaultMode": "default"
  }
}
```

`defaultMode` 可选值：
- `default` — 根据规则决定
- `acceptEdits` — 自动接受编辑
- `dontAsk` — 尽量不询问（需配合 allow 规则）
- `plan` — 计划模式

### 研究项目的权限建议

```json
{
  "permissions": {
    "allow": [
      "Bash(git *)",
      "Bash(python *)",
      "Bash(pip *)",
      "WebSearch",
      "WebFetch(domain:api.crossref.org)",
      "WebFetch(domain:api.semanticscholar.org)",
      "WebFetch(domain:api.openalex.org)",
      "WebFetch(domain:export.arxiv.org)",
      "Read(data/**)",
      "Write(output/**)"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Bash(git push --force *)"
    ]
  }
}
```

---

## 三、Hooks 系统（核心）

Hooks 是 harness 最强大的部分——在 Claude Code 生命周期的特定事件点，自动执行自定义逻辑。

### 3.1 事件类型

| 事件 | 触发时机 | 典型用途 |
|------|----------|----------|
| `PreToolUse` | 工具执行前 | 拦截危险命令、记录日志 |
| `PostToolUse` | 工具执行成功后 | 自动格式化、运行测试 |
| `PostToolUseFailure` | 工具执行失败后 | 错误通知、重试逻辑 |
| `Notification` | 收到通知时 | 自定义通知处理 |
| `UserPromptSubmit` | 用户提交 prompt 时 | 注入上下文、记录历史 |
| `SessionStart` | 会话启动时 | 加载研究上下文、显示提醒 |
| `Stop` | 会话停止时 | 清理、自动提交提醒 |
| `PreCompact` | 上下文压缩前 | 保存关键信息 |
| `PostCompact` | 上下文压缩后 | 注入压缩摘要 |

### 3.2 Hook 类型

#### Command Hook（命令钩子）
执行 shell 命令，接收 JSON on stdin：

```json
{
  "type": "command",
  "command": "jq -r '.tool_input.file_path' | { read -r f; prettier --write \"$f\"; }",
  "timeout": 30,
  "statusMessage": "格式化中..."
}
```

#### Prompt Hook（LLM 评估钩子）
用 LLM 评估某个条件：

```json
{
  "type": "prompt",
  "prompt": "检查以下命令是否安全: $ARGUMENTS",
  "timeout": 15
}
```

#### Agent Hook（代理验证钩子）
派出一个子 agent 执行验证：

```json
{
  "type": "agent",
  "prompt": "验证测试是否通过: $ARGUMENTS",
  "timeout": 60
}
```

### 3.3 Hook 输入 (stdin JSON)

每个 hook 收到一个 JSON 对象：

```json
{
  "session_id": "abc123",
  "transcript_path": "/path/to/transcript.jsonl",
  "cwd": "/current/working/dir",
  "tool_name": "Write",
  "tool_input": {
    "file_path": "/path/to/file.txt",
    "content": "..."
  }
}
```

PostToolUse 额外包含：
```json
{
  "tool_response": {
    "success": true,
    "filePath": "/output/path"
  }
}
```

### 3.4 Hook 输出控制

Hook 可以通过 stdout 输出 JSON 来控制 Claude Code 行为：

```json
{
  "systemMessage": "显示给用户的消息",
  "continue": false,
  "stopReason": "阻止原因",
  "suppressOutput": true,
  "decision": "block",
  "hookSpecificOutput": {
    "hookEventName": "PostToolUse",
    "additionalContext": "注入回模型的上下文"
  }
}
```

关键字段：
- `continue: false` — 阻止操作继续
- `systemMessage` — 向用户展示消息
- `hookSpecificOutput.additionalContext` — 注入上下文给模型
- `hookSpecificOutput.permissionDecision` — PreToolUse 中控制权限 ("allow"/"deny"/"ask")

### 3.5 Hook 结构总览

```json
{
  "hooks": {
    "事件名": [
      {
        "matcher": "工具名1|工具名2",
        "hooks": [
          {
            "type": "command",
            "command": "具体的 shell 命令",
            "timeout": 30
          }
        ]
      }
    ]
  }
}
```

- `matcher` — 匹配工具名，支持 `|` 分隔多个
- `hooks` 数组 — 可以串联多个 hook
- `timeout` — 超时秒数（默认 60）

---

## 四、研究场景实战配置

### 场景 1：会话启动时加载研究上下文

```json
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "cat D:/research/ResearchVault/CLAUDE.md 2>/dev/null; echo '{\"hookSpecificOutput\":{\"hookEventName\":\"SessionStart\",\"additionalContext\":\"ResearchVault 已就绪。当前研究重点：可再生能源供应链、机制设计、运营灵活性。\"}}'"
          }
        ]
      }
    ]
  }
}
```

### 场景 2：文献笔记创建后自动提示关联

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path // empty' | { read -r f; case \"$f\" in *01_Literature/Reading_Notes/*.md) echo \"{\\\"systemMessage\\\":\\\"📝 文献笔记已创建: $(basename \"$f\")。在 Obsidian 中打开并添加 [[WikiLinks]] 关联。\\\"}\" ;; esac; } 2>/dev/null || true"
          }
        ]
      }
    ]
  }
}
```

### 场景 3：Python 代码执行前自动激活虚拟环境

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.command' | grep -q 'python' && echo '{\"hookSpecificOutput\":{\"hookEventName\":\"PreToolUse\",\"additionalContext\":\"Python 命令已执行。如有包缺失，先用 pip install 安装。\"}}' || true"
          }
        ]
      }
    ]
  }
}
```

### 场景 4：停止前提醒提交

```json
{
  "hooks": {
    "Stop": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "cd D:/research/ResearchVault && if [ -n \"$(git status --porcelain)\" ]; then echo '{\"systemMessage\":\"⚠️ 有未提交的更改，记得 git commit\"}'; fi"
          }
        ]
      }
    ]
  }
}
```

---

## 五、环境变量配置

```json
{
  "env": {
    "PYTHONUTF8": "1",
    "RESEARCH_VAULT": "D:/research/ResearchVault",
    "DATA_DIR": "D:/research/ResearchVault/data"
  }
}
```

---

## 六、其他实用配置

### 模型与 Thinking

```json
{
  "model": "opus",
  "alwaysThinkingEnabled": true
}
```

### 输出风格

```json
{
  "outputStyle": "default",
  "language": "zh"
}
```

### 插件管理

```json
{
  "enabledPlugins": {
    "formatter@anthropic-tools": true
  }
}
```

---

## 七、调试 Hooks

### 检查 hook 是否生效

```bash
# 验证 settings.json 语法
jq -e '.hooks' .claude/settings.local.json

# 提取特定 hook 的命令
jq -e '.hooks.PostToolUse[] | select(.matcher == "Write") | .hooks[] | select(.type == "command") | .command' .claude/settings.local.json
```

### 管道测试

在实际配置前，先手动模拟 hook 收到的 stdin：

```bash
# 模拟 Write 工具的 PostToolUse hook
echo '{"tool_name":"Write","tool_input":{"file_path":"D:/research/ResearchVault/01_Literature/test.md"}}' | <你的hook命令>
```

### 常见问题

| 问题 | 原因 | 解决 |
|------|------|------|
| Hook 不触发 | settings.json 语法错误 | `jq` 验证 JSON |
| Hook 不触发 | matcher 不匹配 | 检查工具名大小写 |
| Hook 静默失败 | 命令出错被 `|| true` 吞掉 | 去掉 `|| true` 测试 |
| 新 hook 不生效 | 文件监控未覆盖 | 运行 `/hooks` 重载配置 |

---

## 八、参考资源

- 官方文档：Claude Code 内置 `/help` 命令
- 配置 UI：在 Claude Code 中输入 `/hooks` 查看和管理 hooks
- 权限管理：`/permissions` 查看权限面板
- 设置向导：`/config` 交互式配置基本选项

---

## 相关笔记

- [[Claude Code + Obsidian 使用指南]] — 日常使用流程
- [[Claude Code 完整使用教程]] — 更详细的命令参考
- [[CLAUDE.md]] — 项目指引文件
