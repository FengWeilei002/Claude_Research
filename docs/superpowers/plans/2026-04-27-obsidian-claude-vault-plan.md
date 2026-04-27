# Obsidian + Claude Code ResearchVault Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the project to D:\research\ResearchVault and configure it as a dual-purpose Obsidian + Claude Code research vault.

**Architecture:** Single vault directory at `D:\research\ResearchVault` containing Obsidian notes (00-07 + 90/99 folders), code, data, and tool configs (.obsidian/, .claude/, .git/). Obsidian handles manual note-taking and visualization; Claude Code handles AI-assisted research tasks. Both tools coexist by keeping their configs separate and using WikiLinks for cross-referencing.

**Tech Stack:** Obsidian (desktop), Claude Code CLI, Git, Markdown

---

### Task 1: Migrate project to new path

**Files:**
- Move: entire project from `D:\system files\桌面\documents\202604` to `D:\research\ResearchVault`

- [ ] **Step 1: Create target parent directory**

Run:
```bash
mkdir -p "D:/research"
```

- [ ] **Step 2: Move project files to new location**

Run:
```bash
mv "D:/system files/桌面/documents/202604" "D:/research/ResearchVault"
```

- [ ] **Step 3: Verify migration**

Run:
```bash
ls -la "D:/research/ResearchVault" && git -C "D:/research/ResearchVault" status
```

Expected: All files present, git status clean.

- [ ] **Step 4: Verify git history intact**

Run:
```bash
git -C "D:/research/ResearchVault" log --oneline -3
```

Expected: Recent commits visible including the design spec commit.

---

### Task 2: Create directory structure

**Files:**
- Create: all note directories under `D:\research\ResearchVault`

- [ ] **Step 1: Create all directories**

Run:
```bash
cd "D:/research/ResearchVault" && mkdir -p \
  00_Inbox \
  01_Literature/Reading_Notes \
  01_Literature/Paper_Summaries \
  01_Literature/Citation_Checks \
  02_Thesis/Introduction \
  02_Thesis/Literature_Review \
  02_Thesis/Problem_Formulation \
  02_Thesis/Algorithm \
  02_Thesis/Experiments \
  02_Thesis/Reviewer_Response \
  03_Methods/MDP_RL \
  03_Methods/MAPPO \
  03_Methods/MILP_Gurobi \
  03_Methods/MPC_GA \
  04_Experiments/Scenarios \
  04_Experiments/Results \
  04_Experiments/Logs \
  05_Code \
  06_Ideas \
  07_Meetings \
  90_Templates \
  99_Archive/attachments \
  data \
  output
```

- [ ] **Step 2: Add .gitkeep to empty directories to track them**

Run:
```bash
cd "D:/research/ResearchVault" && for dir in 00_Inbox 01_Literature/Reading_Notes 01_Literature/Paper_Summaries 01_Literature/Citation_Checks 02_Thesis/Introduction 02_Thesis/Literature_Review 02_Thesis/Problem_Formulation 02_Thesis/Algorithm 02_Thesis/Experiments 02_Thesis/Reviewer_Response 03_Methods/MDP_RL 03_Methods/MAPPO 03_Methods/MILP_Gurobi 03_Methods/MPC_GA 04_Experiments/Scenarios 04_Experiments/Results 04_Experiments/Logs 05_Code 06_Ideas 07_Meetings 90_Templates 99_Archive/attachments; do touch "$dir/.gitkeep"; done
```

- [ ] **Step 3: Create vault homepage (index note)**

Write `D:\research\ResearchVault\00_Inbox\Home.md`:
```markdown
# 🏠 ResearchVault

欢迎回到你的研究空间。

## 快速导航

- 📥 [[00_Inbox]] — 待处理
- 📚 [[01_Literature]] — 文献
- 📝 [[02_Thesis]] — 论文
- 🔧 [[03_Methods]] — 方法
- 🧪 [[04_Experiments]] — 实验
- 💻 [[05_Code]] — 代码
- 💡 [[06_Ideas]] — 想法
- 📅 [[07_Meetings]] — 会议
```

---

### Task 3: Update .gitignore

**Files:**
- Modify: `D:\research\ResearchVault\.gitignore`

- [ ] **Step 1: Replace .gitignore content**

Write `D:\research\ResearchVault\.gitignore`:
```
# Data & output (large files)
data/
output/

# Obsidian workspace (volatile, machine-specific)
.obsidian/workspace.json
.obsidian/workspace-mobile.json
.obsidian/plugins/
.obsidian/themes/

# Keep .obsidian core config
!.obsidian/app.json
!.obsidian/appearance.json
!.obsidian/core-plugins.json
!.obsidian/core-plugins-migration.json
!.obsidian/community-plugins.json
!.obsidian/hotkeys.json
!.obsidian/templates.json

# Claude local settings (project-specific, keep in repo)
# .claude/settings.local.json is tracked
```

- [ ] **Step 2: Verify gitignore works**

Run:
```bash
cd "D:/research/ResearchVault" && echo "test" > data/test.txt && git status --short
```

Expected: `data/test.txt` does NOT appear in git status output.

- [ ] **Step 3: Clean up test file**

Run:
```bash
rm "D:/research/ResearchVault/data/test.txt"
```

---

### Task 4: Write CLAUDE.md

**Files:**
- Create: `D:\research\ResearchVault\CLAUDE.md`

- [ ] **Step 1: Write CLAUDE.md**

Write `D:\research\ResearchVault\CLAUDE.md`:
```markdown
# ResearchVault — Claude Code 项目指引

## 项目性质

运筹学/工程学博士研究项目。此 vault 同时被 Obsidian 和 Claude Code 使用。

## 目录约定

| 目录 | 用途 | Claude 行为 |
|------|------|-------------|
| `00_Inbox/` | 快速捕获的笔记 | 新笔记默认创建于此 |
| `01_Literature/` | 文献阅读笔记 | 论文摘要输出到此 |
| `02_Thesis/` | 论文章节草稿 | 辅助起草和审阅 |
| `03_Methods/` | 方法论笔记 | 辅助公式推导和算法分析 |
| `04_Experiments/` | 实验场景、结果、日志 | 辅助实验设计和分析 |
| `05_Code/` | 代码 | 可读写，可执行 |
| `06_Ideas/` | 研究想法 | 辅助头脑风暴和扩展 |
| `07_Meetings/` | 会议记录 | 辅助整理纪要 |
| `90_Templates/` | Obsidian 模板 | 参考即可，一般不改 |
| `99_Archive/` | 归档 | 不要修改 |
| `data/` | 数据文件 | 只读，不进入 git |
| `output/` | 图表等输出 | 可写入，不进入 git |

## 行为规则

- 所有新笔记默认创建在 `00_Inbox/`，除非用户指定其他位置
- 文献摘要创建在 `01_Literature/` 对应子目录
- 使用 WikiLinks（`[[目录名/页面名]]`）关联笔记，保持 Obsidian 兼容
- 中文为主要语言，学术术语可保留英文
- 不自动创建 .md 文件，除非明确要求
- 代码修改在 `05_Code/` 中进行
```

- [ ] **Step 2: Verify CLAUDE.md is readable**

Run:
```bash
cat "D:/research/ResearchVault/CLAUDE.md" | head -5
```

---

### Task 5: Initialize Obsidian vault

**说明:** 这一步需要用户在桌面操作 Obsidian GUI，Claude 无法自动化。

- [ ] **Step 1: 打开 Obsidian**

用户操作：启动 Obsidian 桌面应用。

- [ ] **Step 2: 打开文件夹作为 vault**

用户操作：点击 "Open folder as vault" → 选择 `D:\research\ResearchVault`。

- [ ] **Step 3: 信任作者并启用插件**

用户操作：如果弹出安全提示，点击 "Trust author and enable plugins"。

- [ ] **Step 4: 配置核心插件**

用户操作：Settings → Core plugins，启用以下插件：
- Quick Switcher（快速切换器）
- Graph view（关系图谱）
- Backlinks（反向链接）
- Outline（大纲）
- Command palette（命令面板）
- File recovery（文件恢复）
- Templates（模板）
- Tag pane（标签面板）

- [ ] **Step 5: 配置默认设置**

用户操作：Settings → Files & Links：
- Default location for new notes: `00_Inbox`
- Attachment folder path: `99_Archive/attachments`
- New link format: "Shortest path when possible"
- 启用 "Use [[Wikilinks]]"

Settings → Templates：
- Template folder location: `90_Templates`

- [ ] **Step 6: 安装社区插件**

用户操作：Settings → Community plugins → Browse，搜索并安装：
- Dataview
- Citations
- Kanban
- Tag Wrangler

安装后逐一启用。

---

### Task 6: Create Obsidian templates

**Files:**
- Create: `D:\research\ResearchVault\90_Templates\tpl-literature-note.md`
- Create: `D:\research\ResearchVault\90_Templates\tpl-meeting-note.md`
- Create: `D:\research\ResearchVault\90_Templates\tpl-idea-note.md`

- [ ] **Step 1: Write literature note template**

Write `D:\research\ResearchVault\90_Templates\tpl-literature-note.md`:
```markdown
---
tags: [literature, {{tags}}]
created: {{date}}
authors: "{{authors}}"
year: {{year}}
title: "{{title}}"
---

# {{title}}

## 元信息
- **作者**: {{authors}}
- **年份**: {{year}}
- **期刊/会议**: {{venue}}
- **链接**: {{url}}

## 研究问题

## 方法

## 关键发现

## 与我的研究关联

## 待验证 / 疑问
```

- [ ] **Step 2: Write meeting note template**

Write `D:\research\ResearchVault\90_Templates\tpl-meeting-note.md`:
```markdown
---
tags: [meeting]
created: {{date}}
---

# {{title}}

**日期**: {{date}}
**参与人**: {{attendees}}

## 议题

## 讨论要点

## 待办事项

- [ ] 
```

- [ ] **Step 3: Write idea note template**

Write `D:\research\ResearchVault\90_Templates\tpl-idea-note.md`:
```markdown
---
tags: [idea]
created: {{date}}
status: seedling
---

# {{title}}

## 核心问题

## 初步思路

## 需要验证

## 相关文献

## 相关想法
```

---

### Task 7: Final verification and git commit

**Files:**
- Stage all new files and commit

- [ ] **Step 1: Check git status**

Run:
```bash
cd "D:/research/ResearchVault" && git status
```

Expected: New directories (.gitkeep files), CLAUDE.md, templates, .gitignore changes.

- [ ] **Step 2: Stage and commit**

Run:
```bash
cd "D:/research/ResearchVault" && git add -A && git commit -m "$(cat <<'EOF'
Initialize ResearchVault structure with Obsidian + Claude Code config

- Create vault directory structure (00_Inbox through 99_Archive)
- Add CLAUDE.md with project conventions
- Update .gitignore for data/output/Obsidian workspace
- Add Obsidian templates (literature, meeting, idea)
- Add vault homepage

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 3: Verify final state**

Run:
```bash
cd "D:/research/ResearchVault" && git log --oneline -3 && echo "---" && echo "Directory structure:" && find . -type d -not -path './.git/*' -not -path './.git' | sort
```

- [ ] **Step 4: 用户最终验证**

用户在 Obsidian 中打开 `D:\research\ResearchVault`，确认：
- 图谱视图显示所有目录
- 主页 `00_Inbox/Home.md` 中的链接可点击
- 模板可在创建新笔记时选择
