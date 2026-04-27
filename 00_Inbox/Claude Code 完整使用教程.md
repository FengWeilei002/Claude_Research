---
tags: [claude-code, tutorial, reference]
created: 2026-04-27
---

# Claude Code 完整使用教程

> Claude Code 是 Anthropic 推出的命令行 AI 编程助手，在终端中以对话方式帮你阅读、搜索、编辑和生成代码。

---

## 一、是什么 & 为什么

Claude Code 不是另一个聊天界面——它是一个**能直接操作文件系统、执行命令、读写代码**的终端代理（Agent）。它可以：

- 读你项目里的任意文件（代码、文档、配置、PDF、图片）
- 搜索代码库、grep 关键字、按 glob 模式查找文件
- 创建、编辑、删除文件
- 执行 shell 命令（安装依赖、跑测试、git 操作）
- 联网搜索文档和资料
- 通过 MCP 协议连接外部工具（数据库、API、文献管理……）

**和网页版 Claude 或 API 的关键区别**：Claude Code 有完整的工具链和文件系统权限，不需要你手动复制粘贴上下文。

---

## 二、安装与启动

### 2.1 安装

```bash
# npm 全局安装（推荐）
npm install -g @anthropic-ai/claude-code

# 或使用 winget（Windows）
winget install ClaudeCode

# 验证安装
claude --version
```

### 2.2 启动

```bash
# 在项目目录下启动
cd /path/to/your/project
claude

# 指定模型启动（可选 sonnet/opus/haiku）
claude --model opus

# 用特定 prompt 启动（非交互模式）
claude -p "解释这个项目的结构"

# 从 stdin 读取输入
cat error.log | claude -p "分析这些错误日志"
```

启动后进入**交互式对话界面**（REPL），每行以 `>` 开头等待你输入。

### 2.3 认证

首次启动需要 Anthropic API 密钥，可以通过环境变量或 settings.json 配置：

```bash
# 环境变量方式
export ANTHROPIC_API_KEY="sk-ant-..."

# 或在 settings.json 中配置
# ~/.claude/settings.json → env 字段
```

也可以使用第三方 API 后端（如 DeepSeek、OpenAI 兼容接口），在 settings.json 中设置 `ANTHROPIC_BASE_URL`。

---

## 三、核心交互模式

### 3.1 对话式操作

直接在提示符后输入自然语言指令：

```
> 读 src/auth.ts，解释这个文件的认证流程
> 帮我在 components/ 下新建一个 Button 组件
> 跑一下测试，如果有失败的帮我修
> git log 看看最近 5 个 commit
```

Claude 会自动选择最合适的工具（读文件、搜索、执行命令等）来完成任务。

### 3.2 权限模式

Claude Code 在执行某些操作前会请求你的许可，有三档权限设置：

| 模式 | 行为 |
|------|------|
| **默认** | 读取文件、搜索等安全操作自动允许；写文件、执行命令需确认 |
| **宽松** | 减少许可弹窗频率，适合高信任场景 |
| **计划模式** | 只读不写，用于规划和探索，不修改任何文件 |

可以通过 `/permissions` 或 settings.json 配置各工具权限。

### 3.3 一次性和持续性任务

```
# 一次性：启动时直接执行并退出
claude -p "列出所有 TODO 注释"

# 持续性：交互式多轮对话
claude
> 先看看项目结构
> 看完了，帮我重构 utils/ 下的重复代码
> 好了，现在写测试
```

---

## 四、斜杠命令速查

在对话中输入 `/` 查看可用命令：

### 基础命令

| 命令 | 功能 |
|------|------|
| `/help` | 显示帮助信息 |
| `/clear` | 清空当前对话历史 |
| `/compact` | 压缩上下文（长对话后释放 token） |
| `/config` | 打开配置界面（模型、主题等） |
| `/cost` | 查看当前会话 token 用量和费用 |
| `/stats` | 查看会话统计 |
| `/doctor` | 诊断环境问题 |

### 工作流命令

| 命令 | 功能 |
|------|------|
| `/init` | 为当前项目生成 CLAUDE.md |
| `/review` | 代码审查当前分支的变更 |
| `/security-review` | 安全审查当前分支 |
| `/simplify` | 审查修改过的代码，发现可简化的地方 |
| `/loop` | 按间隔重复运行某个任务 |
| `/fast` | 切换快速模式（Opus 4.6 可用） |

### 模式切换

| 命令 | 功能 |
|------|------|
| `EnterPlanMode` | 进入计划模式（只读，设计实现方案后需用户批准） |
| `ExitPlanMode` | 退出计划模式，开始执行 |

---

## 五、CLAUDE.md — 项目级配置

`CLAUDE.md` 是放在项目根目录（或递归向上查找）的指令文件，每次启动 Claude Code 时自动加载。

### 5.1 基本结构

```markdown
# 项目名称

## 项目性质
简要描述这是什么项目。

## 目录约定
| 目录 | 用途 | 注意事项 |
|------|------|----------|
| src/ | 源码 | — |
| tests/ | 测试 | 必须通过才能提交 |

## 行为规则
- 使用 TypeScript strict mode
- 测试框架用 Vitest
- 不要修改 data/ 下的文件
- ...
```

### 5.2 CLAUDE.md 能做什么

- **指定行为惯例**：如"不写注释"、"使用蛇形命名"、"优先用 Edit 而非 Write"
- **声明目录职责**：哪些目录只读、哪些可写
- **定义工作流**：如"提交前必须跑 lint 和 test"
- **补充上下文**：项目用了什么技术栈、有什么特殊约定

### 5.3 嵌套 CLAUDE.md

可以在子目录中放置 CLAUDE.md，Claude 会根据当前工作目录加载最相关的那个。

---

## 六、Settings.json — 全局 & 项目配置

### 6.1 文件位置

| 级别 | 路径 | 优先级 |
|------|------|--------|
| 用户级 | `~/.claude/settings.json` | 低（全局默认） |
| 项目级 | `.claude/settings.json` | 中（项目共享） |
| 本地级 | `.claude/settings.local.json` | 高（个人覆盖，不提交 git） |

### 6.2 关键配置项

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-ant-...",
    "ANTHROPIC_BASE_URL": "https://api.anthropic.com"
  },
  "model": "claude-sonnet-4-6",
  "theme": "dark",
  "permissions": {
    "allow": [
      "Bash(npm test)",
      "Bash(git diff)",
      "Bash(git status)"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Bash(git push --force origin main)"
    ]
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [{"command": "prettier --write $FILE_PATH"}]
      }
    ]
  }
}
```

### 6.3 权限配置

三种配置方式：

```json
// 1. 按工具+命令精确允许
"allow": ["Bash(npm test)"]

// 2. 按工具允许全部（谨慎）
"allow": ["Read", "Glob", "Grep"]

// 3. 按目录限制命令范围
"allow": ["Bash(npm run *)"]
"deny": ["Bash(rm *)", "Bash(git push --force *)"]
```

---

## 七、Hook 系统

Hook 是 Claude Code 最强大的扩展机制，允许在特定事件前后自动执行命令。

### 7.1 可用事件

| 事件 | 触发时机 |
|------|----------|
| `PreToolUse` | 工具执行前（可阻止执行） |
| `PostToolUse` | 工具执行后 |
| `Notification` | Claude 收到通知时 |
| `Stop` | Claude 响应结束时 |
| `SubagentStop` | 子代理完成时 |
| `PreCompact` | 上下文压缩前 |
| `SessionStart` | 会话开始时 |
| `UserPromptSubmit` | 用户提交消息时 |

### 7.2 常见用例

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {"command": "npx prettier --write \"${CLAUDE_FILE_PATH}\""}
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash(git commit *)",
        "hooks": [
          {"command": "npm test"}
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {"command": "echo 'Claude finished at $(date)' >> .claude/log"}
        ]
      }
    ]
  }
}
```

**Hook 可用的环境变量**：
- `CLAUDE_FILE_PATH` — 被编辑的文件路径
- `CLAUDE_TOOL_NAME` — 触发的工具名
- `CLAUDE_TOOL_INPUT` — 工具输入的 JSON

---

## 八、MCP 协议 — 连接外部世界

MCP（Model Context Protocol）让 Claude Code 连接外部工具和数据源。

### 8.1 配置文件 `.mcp.json`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-filesystem", "/path/to/data"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}"
      }
    },
    "database": {
      "command": "python",
      "args": ["-m", "my_mcp_server"],
      "env": {
        "DATABASE_URL": "postgresql://..."
      }
    }
  }
}
```

### 8.2 常用 MCP Server

| Server | 功能 | 安装 |
|--------|------|------|
| **Context7** | 最新编程文档查询 | 内置 |
| **GitHub** | 管理 issues/PRs/仓库 | `@anthropic-ai/mcp-server-github` |
| **Filesystem** | 安全访问指定目录 | `@anthropic-ai/mcp-server-filesystem` |
| **Puppeteer** | 浏览器自动化/网页抓取 | `@anthropic-ai/mcp-server-puppeteer` |
| **Zotero** | 文献管理 | 社区插件 |
| **arXiv** | 论文搜索 | 社区插件 |

### 8.3 使用 MCP 工具

配置好 MCP Server 后，对应工具名会以 `mcp__<server>__<tool>` 格式出现，你可以直接在对话中让 Claude 使用它们：

```
> 用 GitHub MCP 看看我有哪些 open PR
> Context7 查一下 React 19 的 useOptimistic 用法
> 搜 arXiv 上 econ.TH 分类最近一周的论文
```

---

## 九、Claude Code 的工具链

Claude 在执行任务时可以使用以下工具（无需你手动指定，它会自动选择和调用）：

### 9.1 文件操作

| 工具 | 用途 |
|------|------|
| `Read` | 读文件（支持 PDF、图片、Jupyter notebook） |
| `Write` | 创建/覆写文件 |
| `Edit` | 精确字符串替换（推荐，只传 diff） |
| `Glob` | 按模式查找文件（如 `src/**/*.ts`） |
| `Grep` | 正则搜索文件内容（基于 ripgrep） |

### 9.2 执行操作

| 工具 | 用途 |
|------|------|
| `Bash` | 执行 shell 命令 |
| `TaskCreate` / `TaskUpdate` | 管理任务列表 |
| `Agent` | 启动子代理处理独立子任务 |
| `Skill` | 调用技能模块 |

### 9.3 网络与外部

| 工具 | 用途 |
|------|------|
| `WebSearch` | 网络搜索 |
| `WebFetch` | 抓取网页内容并分析 |
| MCP 工具 | 取决于配置的 MCP Server |

---

## 十、Agent 子代理系统

Claude Code 可以启动**子代理（subagent）**来并行处理独立任务，大幅提高效率。

### 10.1 可用代理类型

| 代理 | 用途 | 最佳场景 |
|------|------|----------|
| `Explore` | 只读代码搜索和探索 | "找到所有用到 JWT 的地方" |
| `Plan` | 软件架构设计 | "设计用户认证系统的实现方案" |
| `general-purpose` | 通用读写任务 | 多步骤的复杂任务 |
| `claude-code-guide` | Claude Code 本身的功能问答 | "Claude Code 怎么配置 hook" |
| `code-reviewer` | 代码审查 | 实现完成后独立审查 |

### 10.2 使用方式

```
> 用 Explore 代理搜一下项目中所有没有测试文件的模块
> 启动一个 agent 审查刚才的修改，独立审查不要受我影响
> 这两个 bug 互不相关，用两个子代理并行修
```

子代理**不共享上下文**，适合隔离的独立任务。注意给子代理写清楚 prompt，包含足够的上下文。

### 10.3 并行执行

多个独立任务可以同时启动多个子代理：

```
> 同时做三件事：
> 1. 用 Explore 列出所有 API 路由
> 2. 用 Explore 列出所有数据库 migration
> 3. 用 Explore 找所有使用 console.log 的地方
```

---

## 十一、计划模式与执行流程

### 11.1 计划模式（Plan Mode）

对于复杂任务，Claude Code 会主动进入计划模式：先探索代码，设计方案，交给你审阅，得到确认后再执行。

```
> 帮我把认证系统从 JWT 迁移到 session-based

# Claude 不会直接改代码，而是：
# 1. 探索现有认证代码
# 2. 设计方案
# 3. 写入计划文件
# 4. 等你批准后才开始改代码
```

### 11.2 任务列表

Claude Code 会自动将复杂任务拆成步骤，用 TodoWrite 系统管理：

- 创建任务 → 标记进行中 → 完成 → 下一个
- 支持任务间的依赖关系
- 可以在对话中用 `/tasks` 查看进度

---

## 十二、Git Worktree 隔离

需要在不影响当前工作区的情况下做实验性修改时，可以使用 git worktree：

```
> 启动一个 worktree 来测试重构方案
```

Claude Code 会在 `.claude/worktrees/` 下创建隔离的 git worktree：
- 独立的文件系统环境
- 不污染主工作区
- 完成后可以保留或删除

---

## 十三、内存系统

Claude Code 有跨会话的记忆系统，保存在 `~/.claude/projects/<项目名>/memory/` 下。

### 13.1 记忆类型

| 类型 | 内容 | 示例 |
|------|------|------|
| **user** | 用户角色、偏好、知识背景 | "我是后端工程师，不熟悉前端" |
| **feedback** | 用户对工作方式的反馈 | "不要 mock 数据库，用真实测试库" |
| **project** | 项目背景、目标、约束 | "2 月底前完成 API 重构" |
| **reference** | 外部资源的指针 | "bug 在 Linear 的 INGEST 项目中追踪" |

### 13.2 使用方式

```
> 记住：这个项目的测试必须用 Vitest 不能用 Jest
> 我之前和你说过什么？（检查已有记忆）
> 忘掉关于旧 API 的记忆
```

记忆不是代码注释——只存储从代码本身无法推导的信息。

---

## 十四、会话管理

### 14.1 上下文窗口

Claude Code 的上下文窗口有限（取决于模型），长对话需要注意：
- 当上下文接近上限时会收到警告
- 使用 `/compact` 主动压缩，保留关键信息
- 无关的旧对话会被自动截断

### 14.2 保持效率

- 一个会话聚焦一个主题，不要混太多不相关任务
- 大任务后 `/compact` 一下释放空间
- 用 `run_in_background` 让长时间任务后台运行
- 对话过长时，把中间结论存成文件，新会话直接读文件

### 14.3 后台任务

```bash
# 让 Claude 在后台跑测试，你继续做别的事
# Claude 会自动将长时间命令放到后台，完成后通知你
```

---

## 十五、快捷键（CLI 界面）

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+C` | 中断当前操作 |
| `Ctrl+D` | 退出 Claude Code |
| `↑/↓` | 浏览命令历史 |
| `Ctrl+R` | 搜索命令历史 |
| `Esc` | 取消当前输入 |

### 15.1 输入模式

| 方式 | 操作 |
|------|------|
| 单行输入 | 直接输入并按 Enter |
| 多行输入 | 按 `\` 加 Enter 换行，或直接粘贴多行文本 |
| 文件拖入 | 拖文件到终端窗口自动填入路径 |
| 管道输入 | `echo "..." | claude` |

### 15.2 自定义快捷键

编辑 `~/.claude/keybindings.json` 自定义快捷键，或使用 `/keybindings-help` 技能获取帮助。

---

## 十六、IDE 集成

Claude Code 不仅可以在终端中使用，还可以集成到 IDE：

| IDE | 安装方式 |
|-----|---------|
| **VS Code** | 安装 "Claude Code" 扩展 |
| **JetBrains** | 安装 "Claude Code" 插件 |

IDE 内的体验和终端版一致，但额外提供：
- 内嵌终端面板
- 点击文件路径直接跳转
- 更好的 diff 视图

---

## 十七、常用技巧汇总

### 提效技巧

- **给文件而非描述**：`读 src/auth.ts 第 42 行` 比 "看那个认证文件" 精准
- **指定输出路径**：`把结果写入 output/report.md` 比 "给我输出" 更好
- **限定范围**：`只修改 utils.ts 中的 formatDate 函数` 防止改动不相关代码
- **利用模板**：把常用 prompt 存成文件，`读 prompt-templates/xxx.md 然后按模板执行`
- **并行处理**：多个独立任务同时发出，Claude 会尽可能并行执行

### 调试技巧

- 把完整的 error traceback 粘贴给 Claude，包括文件路径和行号
- 跑测试出问题，`跑 pytest -x --tb=long 然后把完整输出给我分析`
- Claude 修的代码有问题，直接说 `第 N 行的修改不对，因为...`

### 避坑要点

- 不要在同个对话中混 5 个不相关的话题
- 不要在 Claude Code 里做该在编辑器中做的事（手动大量打字）
- 不要跳过权限提示就允许危险的 shell 命令
- 定期 `git commit`，给 Claude 的操作留回滚空间
- 检查 Claude 的修改再提交，不要盲目信任

---

## 十八、与 GitHub Copilot 的对比

| 维度 | Claude Code | GitHub Copilot |
|------|-------------|----------------|
| **交互方式** | 对话式，多轮协作 | 内联补全 + 聊天面板 |
| **能力范围** | 读写文件、执行命令、联网搜索 | 代码补全、聊天问答 |
| **上下文** | 可读整个项目 | 当前文件和相邻 tab |
| **代理能力** | 自主规划、多步执行、子代理 | 有限的多步操作 |
| **扩展性** | Hook + MCP + Skill | 扩展生态 |
| **适用场景** | 复杂任务、重构、探索代码库 | 快速补全、单文件编辑 |
| **学习曲线** | 中等 | 低 |

两者可以互补：Copilot 做快速补全和轻量问答，Claude Code 做复杂任务和跨文件重构。

---

## 十九、延伸阅读

- [[Claude Code + Obsidian 使用指南]] — Claude Code 与 Obsidian 的搭配工作流
- [[Claude科研辅助指南]] — 科研场景的完整使用指南
- 官方文档：https://docs.anthropic.com/en/docs/claude-code
- GitHub Issues：https://github.com/anthropics/claude-code/issues
