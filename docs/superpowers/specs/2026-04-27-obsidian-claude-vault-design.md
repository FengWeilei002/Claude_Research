# ResearchVault: Obsidian + Claude Code 科研 Vault 配置设计

## 目标

将当前项目配置为同时支持 Obsidian（手动编辑）和 Claude Code（AI 辅助）的研究 vault，两者在同一目录下协作无冲突。

## 项目性质

运筹学/工程学博士研究项目。工作语言中文，学术术语可保留英文。

## 路径迁移

从 `D:\system files\桌面\documents\202604` 迁移到 `D:\research\ResearchVault`，消除路径中的空格和中文带来的兼容性问题。

## 目录结构

```
D:\research\ResearchVault\
├── .obsidian/                 # Obsidian 配置
├── .claude/                   # Claude Code 配置（从旧项目迁移）
├── .git/                      # Git 版本控制
├── .gitignore                 # 排除 data/ output/ 及 Obsidian 工作区文件
├── CLAUDE.md                  # Claude Code 项目指令
├── 00_Inbox/                  # 快速捕获，待整理
├── 01_Literature/             # 文献
│   ├── Reading_Notes/
│   ├── Paper_Summaries/
│   └── Citation_Checks/
├── 02_Thesis/                 # 论文章节
│   ├── Introduction/
│   ├── Literature_Review/
│   ├── Problem_Formulation/
│   ├── Algorithm/
│   ├── Experiments/
│   └── Reviewer_Response/
├── 03_Methods/                # 方法论笔记
│   ├── MDP_RL/
│   ├── MAPPO/
│   ├── MILP_Gurobi/
│   └── MPC_GA/
├── 04_Experiments/            # 实验
│   ├── Scenarios/
│   ├── Results/
│   └── Logs/
├── 05_Code/                   # 代码
├── 06_Ideas/                  # 研究想法
├── 07_Meetings/               # 会议记录
├── 90_Templates/              # Obsidian 模板
├── 99_Archive/                # 归档
│   └── attachments/           # 附件存储
├── data/                      # 数据（不入 git）
└── output/                    # 图表输出（不入 git）
```

## Obsidian 配置

### 核心插件
- 快速切换器、关系图谱、反向链接、大纲、命令面板、文件恢复、模板、标签面板

### 社区插件
- Dataview — 跨目录查询汇总
- Citations — Zotero 集成引用
- Kanban — 看板进度管理
- Tag Wrangler — 批量标签管理

### 设置
- 默认新笔记位置：`00_Inbox/`
- 附件位置：`99_Archive/attachments/`
- 模板文件夹：`90_Templates/`

## CLAUDE.md 行为规则

- 新笔记默认创建在 `00_Inbox/`，文献摘要创建在 `01_Literature/`
- 使用 WikiLinks（`[[页面名]]`）关联笔记，保持 Obsidian 兼容
- 中文为主要语言
- 不自动创建 .md 文档或 README，除非明确要求

## Git 配置

- `.gitignore` 排除：`data/`、`output/`、`.obsidian/workspace.json`、`.obsidian/workspace-mobile.json`
- 初始提交包含完整目录结构和配置文件

## 实现步骤

1. 移动项目到 `D:\research\ResearchVault`
2. 创建所有目录结构
3. 初始化 Obsidian vault
4. 安装社区插件
5. 编写 CLAUDE.md
6. 更新 .gitignore
7. Git 初始提交
