# Claude Code 常用指令速查

## 一、内置斜杠命令

### 会话管理
| 命令 | 功能 |
|------|------|
| `/clear` | 清空上下文，开始新对话（旧会话可通过 `/resume` 恢复）。别名：`/reset`, `/new` |
| `/compact [指令]` | 压缩上下文以释放空间，可选传入聚焦指令 |
| `/resume [会话ID或名称]` | 恢复之前的会话。别名：`/continue` |
| `/rename [名称]` | 重命名当前会话 |
| `/exit` | 退出 CLI。别名：`/quit` |
| `/fork` | 在当前点创建对话分支 |
| `/recap` | 生成当前会话的一行摘要 |
| `/btw <问题>` | 提一个不进入对话历史的快速侧边问题 |

### 工具与权限
| 命令 | 功能 |
|------|------|
| `/permissions` | 管理允许/询问/拒绝工具权限规则。别名：`/allowed-tools` |
| `/config` | 打开设置界面（主题、模型、输出风格等）。别名：`/settings` |
| `/status` | 查看版本、模型、账户和连接状态 |
| `/model [模型名]` | 切换 AI 模型 |
| `/effort [level]` | 设置努力级别（low/medium/high/xhigh/max） |
| `/fast [on/off]` | 切换快速模式 |
| `/add-dir <路径>` | 为当前会话添加工作目录 |
| `/hooks` | 查看钩子配置 |
| `/sandbox` | 切换沙箱模式 |

### MCP 与插件
| 命令 | 功能 |
|------|------|
| `/mcp` | 管理 MCP 服务器连接和 OAuth 认证 |
| `/plugin` | 管理 Claude Code 插件 |
| `/reload-plugins` | 重新加载所有插件（无需重启） |

### 子代理与技能
| 命令 | 功能 |
|------|------|
| `/agents` | 管理子代理配置 |
| `/skills` | 列出可用技能 |
| `/memory` | 编辑 CLAUDE.md 记忆文件，管理自动记忆 |
| `/init` | 初始化项目 CLAUDE.md 指南 |

### Git 与代码审查
| 命令 | 功能 |
|------|------|
| `/diff` | 交互式差异查看器 |
| `/review [PR]` | 本地审查拉取请求 |
| `/ultrareview [PR]` | 云端深度多代理代码审查 |
| `/ultraplan <prompt>` | 在云端起草并执行计划 |
| `/autofix-pr [提示]` | 启动监视 PR 的远程会话，自动修复 CI 失败和审查意见 |
| `/security-review` | 分析当前分支未提交更改的安全漏洞 |
| `/install-github-app` | 安装 Claude GitHub Actions 应用 |

### 信息与诊断
| 命令 | 功能 |
|------|------|
| `/help` | 显示帮助和可用命令 |
| `/doctor` | 诊断并验证安装和设置 |
| `/debug [描述]` | 启用调试日志并诊断问题 |
| `/context` | 可视化当前上下文使用情况 |
| `/usage` | 显示会话成本、计划用量和活动统计。别名：`/cost`, `/stats` |
| `/insights` | 生成 Claude Code 会话分析报告 |
| `/release-notes` | 查看更新日志 |
| `/heapdump` | 写入 JavaScript 堆快照（排查高内存） |
| `/powerup` | 通过交互式课程探索功能 |

### 输出与复制
| 命令 | 功能 |
|------|------|
| `/copy [N]` | 复制上一条回复到剪贴板（可指定倒数第 N 条） |
| `/export [文件名]` | 导出对话为纯文本 |
| `/focus` | 切换聚焦视图 |
| `/tui [default\|fullscreen]` | 切换终端 UI 渲染模式 |

### 个性化与主题
| 命令 | 功能 |
|------|------|
| `/theme` | 更改颜色主题 |
| `/color [颜色]` | 设置当前会话的提示栏颜色 |
| `/voice [hold\|tap\|off]` | 切换语音听写 |
| `/statusline` | 配置状态栏 |
| `/keybindings` | 打开/创建快捷键配置文件 |
| `/terminal-setup` | 配置终端快捷键（Shift+Enter 等） |

### 账户与登录
| 命令 | 功能 |
|------|------|
| `/login` | 登录 Anthropic 账户 |
| `/logout` | 登出 |
| `/upgrade` | 打开升级页面 |
| `/web-setup` | 连接 GitHub 账户到 Claude Code on the web |
| `/remote-control` | 使此会话可从 claude.ai 远程控制。别名：`/rc` |
| `/remote-env` | 配置远程会话的默认环境 |
| `/teleport` | 将云端会话拉取到本地终端。别名：`/tp` |
| `/feedback [报告]` | 提交反馈。别名：`/bug` |
| `/privacy-settings` | 查看和更新隐私设置 |

### 计划与调度
| 命令 | 功能 |
|------|------|
| `/plan [描述]` | 进入计划模式 |
| `/schedule [描述]` | 创建、更新、列出或运行例程。别名：`/routines` |
| `/loop [间隔] [提示]` | 按间隔重复运行提示 |
| `/batch <指令>` | 大规模并行变更编排（5-30 个隔离工作树代理） |

### 桌面与移动
| 命令 | 功能 |
|------|------|
| `/desktop` | 在桌面 App 中继续会话（macOS/Windows）。别名：`/app` |
| `/mobile` | 显示移动端 App 下载二维码。别名：`/ios`, `/android` |
| `/ide` | 管理 IDE 集成 |
| `/chrome` | 配置 Chrome 浏览器集成 |

---

## 二、快速输入前缀

| 前缀 | 功能 |
|------|------|
| `/` 开头 | 触发命令或技能 |
| `!` 开头 | 直接执行 Shell 命令（绕过 Claude，输出加入会话） |
| `@` | 触发文件路径自动补全 |
| `\` + `Enter` | 多行输入（换行） |

---

## 三、CLI 启动命令与标志

### 基本命令
| 命令 | 说明 |
|------|------|
| `claude` | 启动交互式会话 |
| `claude "查询"` | 带初始提示启动会话 |
| `claude -p "查询"` | 非交互模式（打印结果后退出） |
| `cat 文件 \| claude -p "查询"` | 通过管道传入内容 |
| `claude -c` | 继续当前目录最近会话 |
| `claude -r "<会话>" "查询"` | 按 ID 或名称恢复指定会话 |
| `claude update` | 更新到最新版本 |
| `claude install [版本]` | 安装或重装指定版本 |
| `claude auth login/logout/status` | 认证管理 |
| `claude mcp` | 配置 MCP 服务器 |
| `claude plugin` | 管理插件 |
| `claude agents` | 列出所有子代理 |

### 常用 CLI 标志
| 标志 | 说明 |
|------|------|
| `-p, --print` | 非交互模式 |
| `-c, --continue` | 继续最近会话 |
| `-r, --resume` | 恢复指定会话 |
| `-n, --name` | 设置会话显示名称 |
| `-v, --version` | 输出版本号 |
| `-w, --worktree` | 在隔离 git worktree 中启动 |
| `--model` | 设置模型 |
| `--effort` | 设置努力级别 |
| `--permission-mode` | 设置权限模式（default/acceptEdits/plan/auto/dontAsk/bypassPermissions） |
| `--dangerously-skip-permissions` | 跳过所有权限提示 |
| `--debug` | 启用调试模式（可过滤类别，如 "api,hooks"） |
| `--verbose` | 启用详细日志 |
| `--bare` | 极简模式（跳过自动发现钩子/技能/插件/MCP 等） |
| `--tools` | 限制 Claude 可用的内置工具 |
| `--allowedTools` | 免提示直接执行的工具列表 |
| `--disallowedTools` | 禁止使用的工具列表 |
| `--system-prompt` | 替换完整系统提示 |
| `--system-prompt-file` | 从文件加载系统提示 |
| `--append-system-prompt` | 追加到系统提示末尾 |
| `--append-system-prompt-file` | 从文件追加到系统提示 |
| `--output-format` | 输出格式（text/json/stream-json） |
| `--input-format` | 输入格式（text/stream-json） |
| `--max-turns` | 限制最大轮数（非交互模式） |
| `--max-budget-usd` | 设置最大 API 花费（非交互模式） |
| `--json-schema` | 获取符合 JSON Schema 的输出（非交互模式） |
| `--mcp-config` | 从 JSON 文件加载 MCP 服务器 |
| `--settings` | 从 JSON 文件加载额外设置 |
| `--add-dir` | 添加额外工作目录 |
| `--agent` | 指定子代理 |
| `--agents` | 通过 JSON 动态定义子代理 |
| `--session-id` | 使用指定 UUID 作为会话 ID |
| `--fork-session` | 恢复时创建新会话 ID |
| `--remote` | 在 claude.ai 上创建云端会话 |
| `--teleport` | 将云端会话拉取到本地 |
| `--remote-control` | 启用远程控制 |
| `--chrome` | 启用 Chrome 浏览器集成 |
| `--tmux` | 为工作树创建 tmux 会话 |
| `--disable-slash-commands` | 禁用所有命令和技能 |
| `--no-session-persistence` | 不持久化会话（非交互模式） |
| `--init` | 运行 Setup 钩子后启动会话 |
| `--init-only` | 仅运行钩子后退出 |
| `--from-pr` | 恢复与指定 PR 关联的会话 |
| `--setting-sources` | 指定设置加载源（user/project/local） |
| `--strict-mcp-config` | 仅使用 --mcp-config 指定的 MCP 服务器 |
| `--betas` | 包含 Beta 标头（仅 API key 用户） |
| `--exclude-dynamic-system-prompt-sections` | 动态部分移至首条消息以改善缓存复用 |

---

## 四、键盘快捷键

### 通用控制
| 快捷键 | 功能 |
|--------|------|
| `Ctrl+C` | 取消当前输入或生成 |
| `Ctrl+D` | 退出 Claude Code 会话 |
| `Ctrl+L` | 清空提示输入并重绘屏幕 |
| `Ctrl+R` | 反向搜索命令历史 |
| `Ctrl+O` | 切换对话查看器（显示详细工具调用） |
| `Ctrl+T` | 切换任务列表 |
| `Ctrl+B` | 将当前命令放入后台运行 |
| `Ctrl+G` 或 `Ctrl+X Ctrl+E` | 在默认文本编辑器中打开编辑 |
| `Esc` + `Esc` | 回退或总结对话 |
| `Shift+Tab` | 循环切换权限模式 |
| `Alt+P` | 切换模型 |
| `Alt+T` | 切换扩展思考模式 |
| `Alt+O` | 切换快速模式 |
| `Ctrl+V` (macOS `Cmd+V`, Win `Alt+V`) | 从剪贴板粘贴图片 |
| `Ctrl+X Ctrl+K`（连按两次） | 终止所有后台代理 |

### 文本编辑
| 快捷键 | 功能 |
|--------|------|
| `Ctrl+A` | 光标移到行首 |
| `Ctrl+E` | 光标移到行尾 |
| `Ctrl+K` | 删除到行尾 |
| `Ctrl+U` | 从光标删除到行首 |
| `Ctrl+W` | 删除前一个词 |
| `Ctrl+Y` | 粘贴删除的文本 |
| `Alt+B` / `Alt+F` | 光标向后/向前移一个词 |

### 多行输入
| 方式 | 说明 |
|------|------|
| `\` + `Enter` | 通用方式，所有终端可用 |
| `Option+Enter` (macOS) | 需配置 Option 为 Meta |
| `Shift+Enter` | 部分终端原生支持，其他需运行 `/terminal-setup` |
| `Ctrl+J` | 任何终端均可，无需配置 |

### Vim 模式（在 `/config` → Editor mode 中启用）

- **模式切换**：`Esc` 进入普通模式，`i` 插入，`v`/`V` 可视选择
- **导航**：`h/j/k/l` 移动，`w`/`e`/`b` 词导航，`0`/`$` 行首/尾，`gg`/`G` 开头/末尾
- **编辑**：`x` 删字符，`dd` 删行，`yy` 复制行，`p`/`P` 粘贴，`u` 撤销，`.` 重复
- **文本对象**：`iw`/`aw`（词），`i"`/`a"`（引号），`i(`/`a(`（括号），`i{`/`a{`（花括号）

---

## 五、实用技巧

- **明确指定**：在提示中提供具体文件路径和预期输出
- **分步复杂任务**：先用 `/plan` 规划再执行
- **侧边问题**：用 `/btw` 在不打断主任务时快速提问
- **压缩上下文**：长对话用 `/compact` 释放空间
- **非交互模式**：`claude -p --output-format json "查询"` 适合脚本/CI
- **权限管理**：配置 `defaultMode: acceptEdits` 自动接受文件编辑；运行 `/fewer-permission-prompts` 自动添加允许列表
- **大规模并行**：`/batch` 自动拆分为 5-30 个独立代理并行工作
- **快捷查询**：输入 `/` 查看所有可用命令，按 `?` 查看环境支持的快捷键

---

> 参考文档：code.claude.com/docs
