---
tags: [guide, reference]
created: 2026-04-27
---

# Claude Code + Obsidian 搭配使用指南

## 核心概念

Obsidian 和 Claude Code 共享同一个文件系统（你的 vault 目录），两者各司其职：

| | Obsidian | Claude Code |
|------|-----------|-------------|
| **角色** | 你的手和眼睛 | 你的研究助理 |
| **操作方式** | 手动编辑、可视化浏览 | 对话指令、自动执行 |
| **强项** | 图谱导航、链接跳转、所见即所得 | 批量处理、代码运行、联网搜索、PDF 阅读 |
| **适合做什么** | 阅读笔记、整理思路、轻量编辑 | 论文总结、代码编写、数据分析、文献搜索 |

**关键原则**：Obsidian 里做"人该做的事"（思考、判断、组织），Claude Code 里做"机器该做的事"（搜索、计算、格式化、批量处理）。

---

## 一、日常使用流程

### 场景 1：读一篇新论文

```
最佳流程：
1. 把 PDF 放到 papers/ 目录（或任意位置）
2. 在终端启动 Claude Code：cd D:\research\ResearchVault && claude
3. 对 Claude 说：
   "读 D:\papers\xxx.pdf，按 90_Templates/tpl-literature-note.md 模板格式，
   输出文献笔记到 01_Literature/Reading_Notes/"
4. Claude 输出后，在 Obsidian 中打开生成的笔记，补充自己的思考
5. 用 [[WikiLinks]] 链接到相关的研究想法或论文章节
```

**Claude 指令模板**：
```
读 <PDF路径>，按以下结构总结：
1. 研究问题（一句话）
2. 方法（核心思路，不超 5 句话）
3. 关键发现（列 3-5 条）
4. 与我研究的关联（重点：<你的研究方向>）
5. 值得深入读的参考文献（如果有）

输出到 01_Literature/Reading_Notes/<论文简称>.md，使用模板格式
```

### 场景 2：头脑风暴研究想法

```
最佳流程：
1. 在 Obsidian 的 06_Ideas/ 中快速写下一个想法的要点（几个 bullet）
2. 在 Claude Code 中说：
   "读 06_Ideas/<想法文件>.md，帮我从这个想法出发，
   扩展出 3-5 个可能的研究方向，每个方向评估技术可行性和新颖性"
3. Claude 给出分析后，在 Obsidian 中整理，保留有价值的，舍弃不可行的
4. 把保留的方向用 [[WikiLinks]] 链接到相关的 Methods 和 Literature 笔记
```

**Claude 指令模板**：
```
读 06_Ideas/<文件>.md，帮我做头脑风暴：

1. 这个想法最核心的假设是什么？有哪些隐含前提？
2. 现有文献中什么工作最接近？差异在哪？
3. 技术上需要哪些方法？（如有必要，列出备选方案）
4. 如果这个想法行不通，最可能的死因是什么？
5. 有没有更简单的变体可以先尝试？

把扩展后的分析存回 06_Ideas/ 目录
```

### 场景 3：写论文草稿

```
最佳流程：
1. 在 02_Thesis/ 对应章节目录中，用 Obsidian 创建章节大纲笔记
2. 大纲中包含你想覆盖的要点、引用的文献、关键的公式/图表
3. 在 Claude Code 中说：
   "读 02_Thesis/Introduction/ 下的所有笔记，基于这些要点帮我起草引言第一稿"
4. Claude 输出草稿后，在 Obsidian 中阅读、修改、标注
5. 要修改某部分，直接告诉 Claude 定位到具体段落修改
```

**Claude 指令模板**：
```
读 02_Thesis/<章节>/ 下的笔记，帮我起草该章节的初稿。

要求：
- 学术风格，中文为主，术语保留英文
- 逻辑结构按笔记中的大纲
- 每个论点附上参考文献（从 01_Literature/ 中查找相关笔记）
- 数学公式用 LaTeX
- 输出到 02_Thesis/<章节>/draft_v1.md
```

### 场景 4：写代码和跑实验

```
最佳流程：
1. 在 05_Code/ 下创建子目录存放项目代码
2. 在 Claude Code 中描述需求，让 Claude 生成代码
3. Claude 直接在 05_Code/ 中创建和修改文件
4. 在终端中运行代码（Claude 也可以帮你跑）
5. 结果和图表输出到 output/
```

**Claude 指令模板**：
```
在 05_Code/<项目名>/ 下写一个完整的 Python 脚本，
功能：<描述>
输入：<数据路径>
输出：图表保存到 output/
要求：学术风格图表，完整可独立运行
```

---

## 二、Obsidian 内的高效操作

### 使用 WikiLinks 构建知识网络

在 Obsidian 中编辑笔记时，用 `[[ ]]` 链接相关内容：

```markdown
在 [[01_Literature/Reading_Notes/Kaplan2018]] 中，Kaplan 等人发现...

这个现象可以用 [[03_Methods/MDP_RL/MDP 基础]] 中的框架来分析...
```

**Claude Code 也会遵守 WikiLinks 约定**，所以你让 Claude 创建的笔记会自动兼容 Obsidian 的链接系统。

### 使用 Dataview 汇总信息

在任意笔记中插入 Dataview 查询块：

````markdown
```dataview
TABLE authors, year, tags
FROM "01_Literature"
WHERE contains(tags, "待读")
SORT year DESC
```
````

列出所有标记为"待读"的文献。

````markdown
```dataview
TASK
FROM "02_Thesis" AND "07_Meetings"
WHERE !completed
GROUP BY file.link
```
````

汇总所有未完成的待办事项。

### 使用 Kanban 管理论文进度

在 `02_Thesis/` 下创建看板，列设置为：
- **待写** → **起草中** → **需要修改** → **已完成**

每张卡片链接到对应的章节笔记。

### 使用模板快速创建笔记

在 Obsidian 中 Ctrl+N 创建新笔记后，点击左侧 "插入模板"，选择对应模板：
- `tpl-literature-note` → 新论文笔记
- `tpl-meeting-note` → 会议记录
- `tpl-idea-note` → 研究想法

---

## 三、Claude Code 的高效指令

### 说清楚四要素

每次给 Claude 下指令时包含：
1. **要操作什么文件**（给出路径或让 Claude 搜索）
2. **要做什么操作**（读/写/分析/搜索）
3. **输出到哪里**（指定目录和文件名）
4. **格式要求**（结构、语言、风格）

```
✅ 好的指令：
读 01_Literature/Reading_Notes 下最近 3 天创建的笔记，
提取每篇的研究问题和主要发现，汇总成一个表格，
保存到 01_Literature/Paper_Summaries/recent_summary.md

❌ 模糊的指令：
帮我整理一下文献
```

### 常用指令速查

| 需求 | 指令模板 |
|------|----------|
| 搜论文 | `在 arXiv 搜索 "<关键词>" 近 3 年的论文，列出标题和摘要` |
| 读 PDF | `读 <路径>，按模板格式总结，输出到 01_Literature/` |
| 写代码 | `在 05_Code/<名称>/ 创建完整的 Python 脚本：<需求>` |
| 跑回归 | `读 data/<文件>，用 <模型> 回归，输出表到 output/` |
| 画图 | `读 data/<文件>，画 <图表类型>，学术风格，保存到 output/` |
| 数学推导 | `推导以下模型的 <目标方程>，一步步写，公式用 LaTeX` |
| 写草稿 | `基于 02_Thesis/<章节>/ 的笔记，起草该章节初稿` |
| 对比论文 | `读这两篇论文笔记，对比它们在 <维度> 上的差异，生成对比表` |
| 审阅修改 | `读 02_Thesis/<章节>/draft.md，审阅逻辑结构并提出修改建议` |

### 迭代工作流

不要期望一次指令就得到完美结果：

1. **第一轮**：给出粗粒度的指令，让 Claude 出初稿
2. **第二轮**：在 Obsidian 中阅读，发现问题后回到 Claude Code 提出针对性修改
3. **第三轮**：让 Claude 检查一致性（如公式编号、引用格式、逻辑连贯性）

```
# 第一轮
帮我起草 Introduction 的初稿，基于下面的大纲...

# Claude 输出后，你在 Obsidian 里读完
# 回到 Claude Code 继续：

# 第二轮
第二段关于文献缺口的论述太泛了，
请具体提到 01_Literature/Reading_Notes 中 2024-2026 年的论文发现

# Claude 修改后，你继续：

# 第三轮
检查整个 Introduction 的逻辑流程：
每个段落的主题句是否承接上一段？
是否有跳跃或重复？
```

---

## 四、Git 版本控制

### 什么时候提交

| 时机 | 操作 |
|------|------|
| 完成一篇文献笔记 | `git add` 对应文件，提交 |
| 写完一个章节初稿 | 提交，commit message 标注版本 |
| 代码可以运行 | 提交，附上运行说明 |
| 每天结束 | `git status` 检查，提交当天所有变更 |

### Claude Code 中的 Git 操作

```
# 查看今天改了什么
git diff --stat

# 提交今天的所有文献笔记
git add 01_Literature/ && git commit -m "docs: add literature notes for <topic>"

# 查看文件修改历史
git log --oneline -- <文件路径>
```

---

## 五、最佳实践

### DO ✅

- **在 Obsidian 中思考，在 Claude Code 中执行** — 人是决策者，AI 是执行者
- **笔记写一半就保存** — 粗糙的笔记 Claude 也能理解和扩展
- **使用一致的标签系统** — tags 让 Dataview 查询更有效
- **保持 WikiLinks** — 笔记之间的链接是最有价值的资产
- **一次对话聚焦一个主题** — Claude Code 会话有上下文记忆，同类任务放一起效率更高
- **把常用的 prompt 写成模板** — 放到 90_Templates/ 下，重复使用

### DON'T ❌

- **不要让 Claude 替你做判断** — 哪些论文重要、哪个方向有价值，你决定
- **不要在 Claude Code 中手动写大量笔记** — 那是 Obsidian 的事
- **不要一次给太多不相关的任务** — 拆成多个对话更好
- **不要忘记提交 git** — 版本控制是你最安全的保险
- **不要忽略 Obsidian 的图谱视图** — 定期回看图谱，发现笔记之间意想不到的连接

---

## 六、常见问题

**Q: Claude Code 创建的笔记在 Obsidian 中 WikiLinks 不生效？**
A: 确保 Claude 用的是 `[[目录名/文件名]]` 格式，不带 `.md` 后缀。

**Q: 在 Claude Code 中怎么引用 Obsidian 的笔记？**
A: 直接用文件路径，如 `读 06_Ideas/某个想法.md`。Claude 会自动理解 vault 结构。

**Q: data/ 和 output/ 里的文件能放进 Obsidian 吗？**
A: data/ 和 output/ 已经加入 .gitignore。Obsidian 能正常看到它们，但它们不进入版本控制。

**Q: 怎么让 Claude Code 更好地理解我的研究？**
A: 在 `CLAUDE.md` 中补充你的研究方向和关键术语。每次 `claude` 启动时它会自动加载。

**Q: 同时打开 Obsidian 和 Claude Code 编辑同一个文件会冲突吗？**
A: Obsidian 会自动检测外部修改并刷新。Claude Code 不会自动检测外部修改。建议不同时编辑同一个文件。
