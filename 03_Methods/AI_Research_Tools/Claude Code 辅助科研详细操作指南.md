---
tags: [claude-code, research, guide, workflow]
created: 2026-04-29
---

# Claude Code 辅助科研详细操作指南

> 系统梳理 Claude Code 在运筹学/经济学博士研究中的操作方法和最佳实践。已有更详细的专题指南可供参考：[[Claude科研辅助指南]]（六大场景实战）、[[Claude Code 完整使用教程]]（命令与工具参考）、[[Claude Code + Obsidian 使用指南]]（与笔记系统搭配）。

---

## 一、核心理念：把 Claude Code 当作研究助理

Claude Code 不是聊天机器人——它是能直接读写文件、执行代码、搜索文献的命令行代理（Agent）。用它做研究的正确姿势：

| 你（研究者） | Claude Code（助理） |
|-------------|-------------------|
| 判断什么问题是重要的 | 搜索和整理文献 |
| 决定研究方向和方法 | 推导公式、验证逻辑 |
| 审阅和修改初稿 | 起草章节、格式化输出 |
| 设计实验框架 | 写代码、跑回归、画图 |
| 解读结果的经济学含义 | 批量处理数据和文件 |

**黄金法则**：像给 RA 布置任务一样说话——告诉它你是谁、做什么、什么格式、什么标准。

---

## 二、启动与项目配置

### 2.1 日常启动

```bash
cd D:\research\ResearchVault
claude
```

启动后 Claude 自动加载 `CLAUDE.md` 中的项目指引，包括目录约定、研究方向和权限规则。

### 2.2 关键文件的作用

| 文件 | 作用 |
|------|------|
| `CLAUDE.md` | 项目级指引：目录约定、研究方向、行为规则 |
| `.claude/settings.local.json` | 本地配置：API 密钥、权限规则、Hook 自动化 |
| `.mcp.json` | 外部工具连接：arXiv、Zotero、GitHub、Puppeteer |

### 2.3 针对研究方向定制 CLAUDE.md

如果换了具体研究项目，在对应项目目录下的 `CLAUDE.md` 中补充：
- 研究问题和假设
- 关键术语表
- 数据来源和路径
- 方法论偏好（如：偏好结构估计而非简约式回归）

---

## 三、文献搜索与整理

### 3.1 搜索论文

**arXiv 搜索**（内置 MCP，无需 API 密钥）：
```
在 arXiv 的 econ.TH 分类下，搜索 2024-2026 年关于 "mechanism design for renewable energy procurement" 的论文，列出前 10 篇的标题、作者和摘要
```

**NBER/SSRN 搜索**（WebSearch）：
```
搜索 NBER 上关于 "place-based policies and manufacturing productivity" 的最新工作论文，列出 5 篇最有影响力的
```

**跨库综合搜索**：
```
搜索 "supply chain flexibility in renewable energy" 相关论文：
1. arXiv 搜 econ.TH + econ.GN
2. Semantic Scholar 搜高引论文
3. 如有 DOI 列表，用 Crossref API 验证元数据
```

### 3.2 文献脉络梳理

```
帮我梳理 "misallocation and aggregate TFP" 文献的发展脉络：
- 起点：Hsieh & Klenow (2009)
- 方法论扩展：Hopenhayn (2014) 动态模型
- 应用和批评：测量误差、模型误设
每篇标注核心贡献、方法和引用关系，按时间线排列
```

### 3.3 批量文献分析工作流

```
任务 1：在 arXiv 和 WebSearch 搜索 "renewable energy supply chain mechanism design" 近 5 年论文
任务 2：对每篇论文提取：研究问题 / 模型类型 / 关键机制 / 量化结果 / 数据来源
任务 3：按主题分类（投资决策 / 采购拍卖 / 合同设计 / 运营灵活性）
任务 4：生成一页综述表格，列为：论文 | 主题 | 方法 | 主要发现 | 局限
任务 5：基于此起草 1000 字中文文献综述
```

### 3.4 使用 Zotero MCP 管理文献

前提：Zotero 桌面版运行中，且开启 API 访问（设置 → 高级 → 允许其他应用通过 API 访问）。

```
# 搜索本地 Zotero 库
在我的 Zotero 库中搜索 "HANK model"

# 按 collection 浏览
列出 "PhD Thesis" collection 下的所有文献

# 自动添加论文
把这篇论文的信息添加到我的 Zotero 库

# 生成参考文献
给 "Literature Review" collection 的文献生成 Chicago 格式参考文献
```

---

## 四、论文阅读与笔记

### 4.1 单篇论文精读

```
精读 D:\papers\xxx.pdf，分三个层次分析：

【理论层】
- 模型基本设定（代理人、市场结构、信息结构）
- 关键假设及其经济学含义
- 均衡的定义和求解方法

【实证层】
- 识别策略和关键方程
- 数据来源和样本特征
- 核心结果和稳健性

【批判层】
- 识别假设是否可辩护？
- 替代解释是否被排除？
- 对后续文献的影响和局限
```

### 4.2 批量论文摘要

```
读 D:\papers\literature\ 下所有 PDF，对每篇：
1. 一句话概括研究问题
2. 列出模型关键假设
3. 说明识别策略
4. 写出主要实证发现

最后按主题生成分类表格，输出到 01_Literature/Paper_Summaries/
```

### 4.3 论文对比分析

```
对比论文 A（Hsieh & Klenow 2009）和论文 B（Restuccia & Rogerson 2008）：
1. 对"扭曲"的建模方式差异
2. 识别扭曲的方程差异
3. 量化结果的差异及可能原因
4. 哪篇的方法更适合我的研究问题？
```

### 4.4 从论文提取技术细节

```
读 D:\papers\kaplan2018.pdf，提取：
1. 数值求解算法的完整步骤（伪代码）
2. 参数校准表（参数名、值、目标矩、来源）
3. 模型中的全部方程（LaTeX 格式）
```

---

## 五、理论推导与模型分析

### 5.1 推导验证

```
考虑一个带有不完全保险的异质性代理人模型：
- CRRA 效用 (σ=2), β=0.96
- 两状态 Markov 收入过程，persistence=0.925
- 借贷约束 a ≥ -φ·ȳ

问题：
1. 写出 Bellman 方程，推导 Euler 方程（一步步，不要跳步）
2. 证明稳态利率满足 β(1+r) < 1
3. 当 φ→∞ 时，模型是否退化为完备市场？如果不是，为什么？
```

### 5.2 机制设计分析

```
分析以下采购拍卖中的激励相容约束：

一个买方从 N 个供应商处采购可再生能源。每个供应商 i 有私有成本 c_i ~ F(c)。
买方设计一个合同菜单 {(q(ĉ), t(ĉ))}。

请：
1. 写出供应商的效用函数和激励相容约束
2. 用包络定理推导信息租的表达式
3. 写出买方的最优控制问题并推导最优性条件
4. 讨论最优合同的性质（效率 vs. 租金抽取的权衡）
```

### 5.3 头脑风暴研究想法

```
我有一个想法：把企业异质性（Hopenhayn 1992 进入退出）与家庭异质性（Huggett 1993 不完全保险）
结合在一个一般均衡模型中。

请从以下角度讨论可行性：
1. 计算负担：两个异质性维度的降维技术（Krusell-Smith？Reiter？）
2. 机制互动：企业退出 → 就业冲击 → 消费平滑 → 需求反馈 → 企业进入
3. 现有文献：谁做过类似的事？用的什么方法？
4. 边际贡献：这个框架能回答什么现有框架回答不了的问题？
```

---

## 六、代码编写与数值计算

### 6.1 模型求解

**值函数迭代**：
```
用 Python 求解 Aiyagari (1994) 模型稳态：
- 参数：β=0.96, σ=2, α=0.36, δ=0.08
- 资产网格：200 个点，收入过程：7 状态 Markov
- 用 Numba 加速值函数迭代
- 二分法搜索均衡利率
- 画出稳态财富分布和消费政策函数
- 保存为学术风格 PDF
```

**结构估计**：
```
用 Python 实现 BLP (1995) 随机系数离散选择模型：
1. 读 D:\data\auto_data.dta
2. 设定随机系数：价格（log-normal）、马力（normal）
3. 用 contraction mapping 反解市场份额
4. GMM 估计，工具变量：竞争对手产品特征、成本侧变量
5. 输出估计结果表和需求弹性矩阵
```

### 6.2 计量回归

**面板数据固定效应**：
```
读 D:\data\firm_panel.dta，跑以下回归：
- 基准：ln_tfp ~ treated_post + controls + firm_FE + year_FE
- cluster by city
- 输出 LaTeX 表格到 output/table_baseline.tex
```

**事件研究（Event Study）**：
```
用 Python 做事件研究：
- 生成相对时间虚拟变量（-5 到 +5，-1 为基准）
- 画平行趋势检验图：横轴=相对时间，纵轴=处理效应，带 95% CI
- 学术风格：白底、Times New Roman、1.5pt 线条
- 保存 PDF 到 output/event_study.pdf
```

### 6.3 代码执行与调试

```
# 执行代码
运行 05_Code/aiyagari/solve_steady_state.py

# 如果报错，把 error traceback 直接粘贴给 Claude
这个代码报错了：
Traceback (most recent call last):
  File "...", line 42, in <module>
    V = np.zeros((n_a, n_z))
NameError: name 'n_z' is not defined

# Claude 会定位问题并修复
```

**长计算任务的建议**：
- 让 Claude 加进度条（tqdm）
- 定期保存中间结果（checkpointing）
- 用 Numba 或 JAX 加速关键循环
- 大规模计算考虑并行化

---

## 七、论文写作与 LaTeX

### 7.1 起草章节

```
基于 02_Thesis/Introduction/ 下的笔记，起草 Introduction 初稿。
结构：
1. 研究背景（2 段）：可再生能源扩张 + 供应链挑战
2. 文献缺口（1 段）：现有机制设计文献未充分考虑运营灵活性
3. 本文贡献（3 点）
4. 主要发现预览（1 段）
用中文撰写，学术风格，约 1500 字
```

### 7.2 数学公式 LaTeX 化

```
把以下模型写成 LaTeX align 环境：

家庭问题：max E₀ Σ βᵗ [Cᵗ¹⁻σ/(1-σ) - χ Nᵗ¹⁺φ/(1+φ)]
约束：P_t C_t + B_t = W_t N_t + R_{t-1} B_{t-1} + D_t + T_t

要求：每行标注变量含义，如 C_t：时期 t 消费，N_t：劳动供给
```

### 7.3 论文审阅

```
审阅 D:\writing\draft_v2.tex，从以下角度：

1. 数学推导：第 2 节的方程是否有逻辑跳跃？稳态定义是否自洽？
2. 论证结构：引言是否在 2 段内讲清"为什么重要"？
3. 实证部分：基准回归的识别假设是否明确写出？
4. 稳健性：是否覆盖了主要的替代假说（如反向因果、遗漏变量）？
5. 参考文献：是否遗漏了近 3 年的重要论文？
```

### 7.4 格式化和参考文献

```
# 生成 BibTeX
搜索以下论文的完整信息并生成 BibTeX：
- Acemoglu, Johnson, Robinson (2001) AER
- Chetty, Hendren, Katz (2016) AER

# 检查引用格式
检查 D:\writing\draft.tex 中所有 \cite{} 是否在 refs.bib 中有对应条目
```

---

## 八、数据处理

### 8.1 从原始数据到分析就绪

```
任务：处理 D:\data\chinese_firms.dta

第 1 步：数据清洗
- 删除关键变量缺失的观测
- winsorize 所有连续变量（1% 和 99%）
- 生成行业-年份层面控制变量

第 2 步：描述性统计
- 生成学术风格的 summary statistics 表
- 按处理组/对照组做平衡性检验（t-test）
- 输出 LaTeX 到 output/summary_stats.tex

第 3 步：基准回归 + 稳健性
```

### 8.2 文件格式处理能力

| 文件类型 | 读取 | 写入 | 实现方式 |
|---------|------|------|---------|
| **.dta (Stata)** | ✅ | ✅ | pandas |
| **.xlsx / .xls** | ✅ | ✅ | openpyxl / xlsxwriter |
| **.csv** | ✅ | ✅ | pandas |
| **.docx (Word)** | ✅ | ✅ | python-docx |
| **.pptx (PPT)** | ✅ | ✅ | python-pptx |
| **.tex (LaTeX)** | ✅ | ✅ | 纯文本 |
| **PDF (文本型)** | ✅ | ✅ (提取/合并) | pypdf / pdfplumber |
| **JSON / YAML** | ✅ | ✅ | 内置 |

### 8.3 从 PDF 提取数据

```
从 D:\papers\restuccia2008.pdf 的 Table 2 提取数据，
转换为 Excel 格式保存到 output/table2_extracted.xlsx

注意：扫描版 PDF 的表格提取可能不完整，图像密集型 PDF 需用 OCR 预处理
```

---

## 九、图表与可视化

### 9.1 学术级图表

```
用 Python 画以下图（学术风格）：
1. 财富分布的 PDF + CDF（对比不同 σ 值）
2. 消费政策函数（对比完备市场 vs 不完全市场）
3. 利率与总储蓄的关系

要求：
- 白色背景、无顶框右边框
- Times New Roman 字体、1.5pt 线条
- 图例在内部左上角
- 保存为 PDF 矢量图到 output/figures/
```

### 9.2 用 AI 图像工具生成科研示意图

如需更复杂的框架图、文献分类图、模型时序图，可使用 GPT Image 2 或 Nano Banana 生成。
详细 prompt 模板和设计原则参见 [[科研示意图Prompt设计指南]]。

**适用场景**：
- 论文 Introduction 中的问题描述图
- 理论框架/算法流程图
- 文献综述分类框架
- 博弈/机制设计时序图
- 政策演进时间线

---

## 十、进阶功能与自动化

### 10.1 子代理并行工作

多个独立任务可以同时执行：

```
同时做三件事：
1. 搜 arXiv 上关于 "carbon market mechanism design" 的论文
2. 读 01_Literature/ 下最近创建的 5 篇笔记，检查格式是否统一
3. 跑 05_Code/aiyagari/solve.py 并检查输出
```

### 10.2 定时任务 (/loop)

```
# 每 30 分钟检查一次 arXiv 是否有新论文
/loop 30m 在 arXiv econ.TH 下搜索最近一周的论文，如果有关于 mechanism design 的新论文，告诉我

# 每 10 分钟检查长计算是否完成
/loop 10m 检查 output/estimation.log 的最后 5 行
```

### 10.3 计划模式

对复杂任务，Claude Code 会进入计划模式：
1. 探索现有代码/文件
2. 设计方案
3. 写入计划文件
4. 等你批准后再执行

```
帮我重构 05_Code/ 下的模型求解代码：从全局变量改为面向对象设计
→ Claude 会先设计方案，不会直接改代码
```

### 10.4 Git Worktree 隔离实验

在不影响主工作区的情况下做实验性修改：

```
启动 worktree 来尝试用 JAX 重写 Huggett 模型的求解算法
```

### 10.5 跨会话记忆

Claude 会自动记住项目中的重要信息（如构建命令、调试经验等）。也可以手动要求：

```
记住：这个项目的数据文件都在 data/ 下，不要修改 data/raw/ 中的原始数据
```

记忆类型：
- **user**：研究者背景、偏好
- **feedback**：对工作方式的反馈
- **project**：项目进展、截止日期
- **reference**：外部资源链接

### 10.6 Hook 自动化

通过 `.claude/settings.local.json` 中的 hooks 配置自动化工作流：

- **PostToolUse + Write**：文献笔记创建后提醒添加 WikiLinks
- **Stop**：会话结束时检查 git 状态，有未提交更改则提醒
- **SessionStart**：启动时显示研究上下文提醒

详见 [[Claude Code Harness 配置指南]]。

---

## 十一、完整的典型研究任务流程

### 流程 A：从零开始一个新研究项目

```
第 1 天 — 文献摸底
> 搜索 "renewable energy procurement mechanism design" 近 5 年文献
> 把搜索到的论文信息保存到 01_Literature/
> 对每篇生成一句话摘要

第 2 天 — 精读关键论文
> 读 [5 篇最相关论文的 PDF]，每篇按三层分析法精读
> 生成文献对比表

第 3 天 — 理论建模
> 帮我推导以下机制设计模型的一阶条件...
> 检查模型的激励相容约束是否满足...
> 把模型写成 LaTeX，保存到 02_Thesis/Model/

第 4 天 — 数值求解
> 用 Python 实现上面模型的数值求解
> 跑基准参数下的比较静态分析
> 画图

第 5 天 — 起草初稿
> 基于以上所有输出，起草论文的 Introduction 和 Model 章节
```

### 流程 B：复现一篇经典论文

```
任务：复现 Hopenhayn (1992) "Entry, Exit, and Firm Dynamics"

第 1 步：精读论文，提取完整的模型方程和参数
第 2 步：用 Python 实现模型，先做部分均衡
第 3 步：加入自由进入条件，求解一般均衡
第 4 步：复现论文中的主要图表
第 5 步：在我的参数设定下做比较静态分析
```

### 流程 C：审稿回复

```
我的论文被要求修改后重投。

第 1 步：把审稿意见和论文草稿都给 Claude
> 读 D:\writing\response\referee_comments.txt 和 D:\writing\draft_v3.pdf
> 帮我分析每条意见的严重程度和应对策略

第 2 步：逐条起草回复
> 针对问题 1（工具变量的排除限制），帮我起草回复：
> 1. 补充 overidentification test
> 2. 论证降雨量不通过农业之外的渠道影响教育
> 3. 写一段给审稿人的回复

第 3 步：修改论文
> 在第 3.4 节补充讨论排除限制的段落
```

---

## 十二、效率提升技巧

### DO ✅

- **一次给出完整指令**（四要素：背景 + 任务 + 路径 + 格式）
- **把文件拖到终端**自动填入路径
- **利用上下文**：同一主题的多轮操作放在一个 session 中
- **存常用 prompt 为模板**：放到 `90_Templates/` 下复用
- **输出到固定目录**：图表 → `output/`，笔记 → `00_Inbox/`
- **定期 git commit**：每次完成一个子任务就提交

### DON'T ❌

- 不要问模糊的问题（"帮我做研究"）
- 不要在同一个 session 混 5 个不相关的话题
- 不要让 Claude 替你判断"什么问题是重要的"
- 不要跳过检查——验证 Claude 的输出再提交
- 不要在 data/raw/ 下写入或修改原始数据

### 关键快捷键

| 操作 | 快捷键 |
|------|--------|
| 中断当前操作 | `Ctrl+C` |
| 退出 Claude Code | `Ctrl+D` |
| 浏览命令历史 | `↑/↓` |
| 多行输入换行 | `\` + `Enter` |
| 拖入文件路径 | 拖文件到终端窗口 |

### 常用斜杠命令

| 命令 | 功能 |
|------|------|
| `/compact` | 压缩上下文，释放 token |
| `/cost` | 查看 token 用量 |
| `/permissions` | 管理权限规则 |
| `/config` | 交互式配置 |
| `/init` | 为新项目生成 CLAUDE.md |
| `/clear` | 清空对话历史 |

---

## 十三、进阶阅读

- [[Claude科研辅助指南]] — 六大科研场景的完整实战（读论文、写代码、文献搜索、写 LaTeX、数据分析、理论推导）
- [[Claude Code 完整使用教程]] — 所有工具、Hook、MCP、Agent、权限系统的完整参考
- [[Claude Code + Obsidian 使用指南]] — 与 Obsidian 笔记系统的协同工作流
- [[Claude Code Harness 配置指南]] — settings.json 权限、Hook 自动化配置
- [[科研示意图Prompt设计指南]] — AI 生成学术框架图、模型图、文献分类图的 prompt 模板
- 官方文档：https://code.claude.com/docs/en/overview
