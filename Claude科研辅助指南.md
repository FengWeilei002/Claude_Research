# Claude Code 科研辅助完全指南

> **阅读指引**：如果你是第一次使用，从第 1 章开始读。如果你已会基本操作，直接跳到第 3 章看具体场景。

---

## 一、快速入门：5 分钟跑通第一个任务

### 1.1 打开项目目录

在终端中进入你的科研项目目录，然后启动 Claude Code：

```bash
cd "D:\system files\桌面\documents\202604"
claude
```

进入 Claude Code 后，你会看到一个交互式对话界面。**Claude 可以直接看到你项目目录下的所有文件**（PDF、代码、数据、LaTeX 等）。

### 1.2 试第一个任务：读一篇论文

假设你有一篇论文 PDF 在 `D:\papers\acemoglu2001.pdf`，直接在对话中输入：

```
读 D:\papers\acemoglu2001.pdf，用中文总结：
1. 研究问题
2. 理论框架（核心假设 + 主要机制）
3. 实证策略（数据来源 + 识别方法）
4. 主要结论
```

**你不需要先"告诉 Claude 你是研究员"**，直接给出带具体路径的指令即可。

### 1.3 试第二个任务：搜索 arXiv 论文

```
在 arXiv 搜索 "heterogeneous agent New Keynesian model" 最近 3 年的论文，
列出前 5 篇的标题、作者、发表年份和核心贡献
```

### 1.4 理解 Claude 的工作方式

Claude 在这个项目里的能力边界：

| 能做 | 不能做 |
|------|--------|
| 读你电脑上的文件（PDF、.tex、.dta、.py 等） | 访问你电脑之外的私有资源 |
| 写代码并执行 | 替你运行需要 GUI 的软件（Stata、Matlab） |
| 联网搜索论文、查文档 | 替你登录需要验证码的网站 |
| 读写 Zotero 文献库 | 在没有 API 密钥的情况下访问外部服务 |
| 搜索/克隆 GitHub 仓库 | — |
| 用 Puppeteer 抓取网页数据 | — |

**核心原则**：你给 Claude 的文件、数据、指令越具体，输出质量越高。

---

## 二、学会"正确地说话"：高效对话模式

### 2.1 黄金法则：像给研究助理布置任务一样说话

❌ **太模糊的提问**：
```
帮我做研究
```

✅ **好的提问**：
```
我是理论经济学博士生，研究方向是异质性代理人宏观（HANK 模型）。
请读 D:\papers\kaplan2018.pdf（Kaplan, Moll & Violante 2018），
帮我梳理：
1. 模型的三个核心假设及其经济学含义
2. HANK 与 RANK（代表性代理人）在货币政策传导机制上的关键差异
3. 数值求解方法的要点
用中文回答，公式请用 LaTeX 格式。
```

**四要素**：
1. **我是谁**（学术背景）
2. **要做什么**（具体任务）
3. **要什么格式**（输出要求）
4. **什么标准**（深度/严格性要求）

### 2.2 最常见的 5 种对话模式

**模式 1：一次性任务** — 给出完整指令，Claude 直接输出结果
```
用 Python 跑一个 OLS 回归，数据在 D:\data\wage.csv，因变量 lwage，自变量 educ+exper+tenure，输出回归表
```

**模式 2：迭代追问** — 基于上一个回答继续深入
```
# 第一步
帮我推导这个 Bellman 方程的一阶条件

# Claude 输出后，第二步
对，用包络定理消去值函数的导数，继续推导到 Euler 方程

# 第三步
把这个 Euler 方程写成 log-linearized 形式
```

**模式 3：多轮修改** — 先给初稿，再逐步完善
```
# 第一轮
帮我写论文引言，主题是"金融摩擦与资源配置效率"

# Claude 输出后
第二段关于文献缺口的论述太泛了，请具体提到 Midrigan & Xu (2014) 和 Moll (2014) 的发现

# 再修改
把研究贡献分成三点，每点两句话
```

**模式 4：上下文引用** — 利用 Claude 能"看到"项目中其他文件
```
读 D:\papers\hopenhayn1992.pdf 的理论模型部分，然后读 D:\code\entry_exit.py，
判断我的代码是否正确实现了 Hopenhayn 模型的 stationary equilibrium
```

**模式 5：工具链串联** — 一个对话完成多个步骤
```
1. 在 arXiv 搜索 "misallocation and productivity" 近 5 年的论文
2. 对找到的 10 篇论文，每篇用 3 句话总结核心发现
3. 按主题（资本错配/劳动错配/政策扭曲）分类
4. 生成一个 markdown 表格，列为：论文/主题/方法/主要发现
```

### 2.3 关键词触发指南

某些关键词和短语能显著提高输出质量：

| 你想要 | 用这个关键词 | 示例 |
|--------|-------------|------|
| 严谨的数学推导 | "一步步推导，不要跳步" | 推导这个模型的一阶条件，一步步写出拉格朗日函数 |
| 批判性分析 | "找出潜在弱点" | 读这篇论文，找出识别策略的可能弱点 |
| 经济学家的视角 | "用 XXX 领域的视角" | 用劳动经济学的视角分析这个模型设定 |
| 结构化的输出 | "分 X 个部分" | 你的回答请分 3 个部分 |
| 可运行的代码 | "完整的、可独立运行的" | 写一个完整可独立运行的 Python 脚本 |
| 学术级图表 | "学术风格" | 学术风格：白底、Times New Roman、1.5pt 线条 |
| LaTeX 公式 | "公式用 LaTeX 格式" | 把模型方程写成 LaTeX 格式 |

---

## 三、六大科研场景实战

### 📄 场景 1：读论文 & 总结

#### 基本用法

**直接拖入 PDF（最简单）**：
直接把 PDF 文件拖到终端窗口，Claude 会自动识别路径，然后输入：
```
总结这篇论文的核心模型和主要结论
```

**指定路径**：
```
读 D:\papers\restuccia2008.pdf（Restuccia & Rogerson 2008），
重点分析他们如何用异质性企业模型量化政策性扭曲对 TFP 的影响
```

#### 进阶用法

**批量处理多篇论文**：
```
读 D:\papers\literature\ 目录下的全部 PDF，对每篇论文：
1. 一句话概括研究问题
2. 列出模型的关键假设
3. 说明识别策略
4. 写出主要实证发现

最后按主题（如：资本错配、劳动市场摩擦、政策扭曲）生成一个分类表格
```

**深度精读一篇论文**：
```
精读 D:\papers\hsieh2009.pdf，分三个层次分析：

【理论层】
- 模型的基本设定：多少个部门？代表性代理人还是异质性？
- 扭曲（distortion）是如何建模的？产出扭曲 vs 资本扭曲
- 均衡的定义和求解步骤

【实证层】
- 识别扭曲的关键方程是什么？（写出公式）
- 数据：中国工业企业数据库还是美国制造业普查？
- 核心结果：消除错配后 TFP 能提高多少？

【批判层】
- 模型假设"每个企业的扭曲是外生的"是否合理？
- 如果考虑企业进入退出，结论会如何变化？
- 这篇论文对后续文献的影响和局限
```

#### 实用技巧

- **一次给 Claude 很多论文时，每篇给一个编号/短名称**，方便后续引用："基于论文 A 的模型设定…"
- **Claude 读 PDF 是 OCR + 文本提取**，扫描版旧论文可能提取不完整，此时建议先用 Adobe 转文字
- **可以要求 Claude 对比两篇论文**："对比论文 A 和论文 B 在识别策略上的差异"

---

### 📊 场景 2：写代码 & 跑模型

#### 基本用法

**数值求解宏观经济模型**：
```
用 Python 求解一个 Huggett 模型的稳态均衡。
参数设定：
- β = 0.96, σ = 2（CRRA 效用）
- 收入过程：两状态 Markov，y = [0.1, 1.0]，转移概率 0.05
- 借贷约束：a_min = -2
- 利率 r = 0.01（部分均衡）

要求：
1. 用值函数迭代 + 网格搜索求解个体决策
2. 画出稳态财富分布
3. 用 stationary distribution 验证市场出清
4. 代码注释用中文
```

**计量回归**：
```
用 Python 跑一个双重差分回归：
- 数据：D:\data\policy_did.dta
- 因变量：ln_wage
- 处理变量：treated × post（交互项）
- 控制变量：age, age², education, industry FE, year FE
- 使用 cluster by city 的标准误
- 输出 reg 表格到 D:\output\did_results.tex
```

#### 进阶用法

**完整复现经典论文**：
```
帮我复现 Aiyagari (1994) 的异质性代理人模型：

第一步：写模型代码
- 用 Python + Numba 加速值函数迭代
- 离散化资产网格（建议 200 个点）
- 用二分法求解均衡利率

第二步：数值实验
- 比较不同 σ（1, 2, 3, 5）下的总储蓄率
- 比较不同借贷约束下的财富不平等

第三步：生成图表
- 图 1：稳态财富分布（PDF + CDF）
- 图 2：消费政策函数
- 图 3：利率与总储蓄的关系
- 学术风格，保存为 PDF
```

#### 实用技巧

- **要求 Claude 写 "完整可独立运行" 的代码**，避免缺少 import 或变量未定义
- **运行前让 Claude 先解释算法思路**，确认逻辑正确再执行
- **报错时把错误信息粘贴给 Claude**，它能直接定位和修复
- **跑长时间计算的代码**，让 Claude 加进度条和中间结果保存

---

### 🌐 场景 3：文献搜索 & 联网查资料

#### 基本用法

**搜索 arXiv**：
```
在 arXiv 的 econ.TH（理论经济学）分类下，
搜索 2024-2026 年关于 "mechanism design with transfers" 的论文
```

**搜索 NBER 等网站**：
```
访问 nber.org，查找关于 "place-based policies" 的最新工作论文，
帮我列出 5 篇最有影响力的，每篇写 2 句话说明其贡献
```

**搜索数据来源**：
```
我需要中国家庭追踪调查（CFPS）的数据。
帮我搜索：CFPS 最新 wave 的数据获取方式、问卷内容、以及使用该数据发表在 AER/Econometrica/QJE 上的论文
```

#### 进阶用法

**文献脉络梳理**：
```
帮我梳理 "misallocation and aggregate TFP" 文献的发展脉络：

起点：Hsieh & Klenow (2009) "Misallocation and Manufacturing TFP in China and India"
后续发展：
1. 方法论扩展（如 Hopenhayn 2014 的动态模型）
2. 应用（不同国家/部门/扭曲形式）
3. 批评和修正（如测量误差问题）

请按时间线列出里程碑论文，每篇标注核心贡献和引用关系
```

**系统性文献综述**（工作流 A）：
```
任务1：在 arXiv 和 NBER 搜索 "wealth inequality macroeconomic effects" 最近 5 年论文
任务2：对每篇论文，提取：研究问题/模型类型/关键机制/量化结果
任务3：按主题分类（预防性储蓄渠道/创业渠道/需求渠道/供给渠道）
任务4：生成综述表格，列为：论文|主题|方法|主要发现|局限
任务5：基于以上，起草一段 1000 字的中文文献综述
```

#### 实用技巧

- **ArXiv MCP 不需要 API 密钥**，可以直接用
- **WebSearch 和 WebFetch 是 Claude 内置的**，不需要额外配置
- **需要登录的网站**（如某些期刊付费墙后），Claude 无法直接访问，你需要手动下载 PDF 后拖给 Claude
- **搜索一次找不到**，换个关键词再搜，或让 Claude 帮你设计搜索策略

---

### 📝 场景 4：写论文 & LaTeX

#### 基本用法

**起草论文章节**：
```
帮我写论文引言，主题是"环境规制对企业生产率的影响——基于中国排污费改革的实证研究"。
结构要求：
1. 研究背景（2 段）：中国环境问题 + 现有政策 + Porter 假说
2. 文献缺口（1 段）：现有文献的局限
3. 本文贡献（3 点，每点 2-3 句）
4. 主要发现预览（1 段）
用中文撰写，学术风格，约 1500 字
```

**写 LaTeX 公式**：
```
把以下经济学模型写成 LaTeX align 环境下的公式：

家庭问题：最大化 E₀ Σ βᵗ [Cᵗ¹⁻σ/(1-σ) - χ Nᵗ¹⁺φ/(1+φ)]
约束：P_t C_t + B_t = W_t N_t + R_{t-1} B_{t-1} + D_t + T_t

要求：
- 分别用英文和中文标注每个变量的含义
- 在公式下添加一行说明每个参数的经济学含义
```

**生成 BibTeX 引用**：
```
搜索以下论文的完整信息并生成 BibTeX：
- Acemoglu, Johnson, Robinson (2001) AER "Colonial Origins"
- Chetty, Hendren, Katz (2016) AER "Effects of Exposure to Better Neighborhoods on Children"
- Restuccia & Rogerson (2008) RED "Policy Distortions and Aggregate Productivity with Heterogeneous Establishments"
```

#### 进阶用法

**论文润色 & 逻辑审查**：
```
读我的论文草稿 D:\writing\draft_v2.tex，从以下角度审阅：

1. 数学推导：
   - 第 2 节的 7 个方程是否有逻辑跳跃？
   - 稳态定义是否自洽？

2. 论证结构：
   - 引言是否在 2 段内讲清楚了"为什么这个问题重要"？
   - 第 3 节的机制分析是否有替代解释？

3. 实证部分：
   - 基准回归的识别假设是否明确写出？
   - 稳健性检验是否覆盖了主要的替代假说？

4. 英文表达：
   - 有无中式英语或不规范的学术表达？
   - 时态是否统一？

5. 参考文献：
   - 是否遗漏了该领域近 3 年的重要论文？
```

#### 实用技巧

- **分段处理大文档**：如果论文太长（50+ 页），逐章给 Claude 审阅效果更好
- **公式多的部分**，确认 Claude 输出的 LaTeX 在你本地能否编译
- **参考文献管理**：配合 Zotero MCP，可以直接让 Claude 在 Zotero 库中查找和格式化引用

---

### 🔬 场景 5：数据分析 & 可视化

#### 基本用法

**描述性统计**：
```
读 D:\data\firm_panel.dta，生成一张学术风格的描述性统计表：
- 变量：ln_sales, ln_employment, ln_wage, tfp, age, exporter
- 统计量：均值、标准差、中位数、最小/最大值、观测数
- 分行业（industry 变量）显示
- 处理组 vs 对照组做平衡性检验（t-test）
- 输出 LaTeX 格式表格
```

**学术级图表**：
```
用 Python 画以下图：
1. 平行趋势检验（事件研究图）：横轴=相对时间，纵轴=处理效应，带 95% 置信区间
2. 动态处理效应：分年度估计，带 CI
要求：
- 白色背景、无顶框和右边框
- Times New Roman 字体
- 1.5pt 线条
- 图例在内部左上角
- 保存为 PDF 矢量图
```

#### 进阶用法

**从原始数据到论文输出**（工作流 B）：
```
任务：用 D:\data\chinese_firms.dta 完成从数据处理到结果输出的全流程

第 1 步：数据清洗
- 删除关键变量缺失的观测
- winsorize 所有连续变量 1% 和 99%
- 生成行业-年份层面的控制变量均值

第 2 步：基准回归
- 固定效应模型：ln_tfp ~ treated_post + controls + firm_FE + year_FE
- cluster by city
- 输出到 D:\output\table_baseline.tex

第 3 步：稳健性检验
- 替换因变量：ln_labor_productivity
- 替换样本：去掉直辖市
- 安慰剂检验：假设政策提前 2 年发生
- 生成一张综合对比表

第 4 步：机制检验
- 中介效应：treated → 环保投资 → TFP
- 异质性：按企业所有制、规模分组

第 5 步：基于输出写结果部分初稿
```

#### 实用技巧

- `.dta` 文件直接用 `pandas.read_stata()` 读取
- 中文变量名可能乱码，让 Claude 帮你处理编码问题
- 数据量大时（10 万+行），要求 Claude 加进度条和分块处理
- 图表风格统一：一次给 Claude 看几张你喜欢的参考图

---

### 🧠 场景 6：理论推导 & 头脑风暴

#### 基本用法

**理论推导验证**：
```
考虑一个 Huggett 经济：
- CRRA 效用（σ=2），贴现因子 β=0.96
- 随机收入：两状态 Markov，persistence=0.925
- 借贷约束：a ≥ -φ·ȳ（ȳ 为平均收入）

问题：
1. 这个模型的稳态利率是否满足 β(1+r) < 1？证明你的结论。
2. 如果借贷约束不是紧的（slack），消费的欧拉方程是否像完备市场那样成立？
3. 当 φ→∞ 时，模型是否退化为完备市场？如果不是，为什么？
一步步推导，不要跳步。
```

**研究思路讨论**：
```
我有一个初步想法：把企业异质性（Hopenhayn 1992 的进入退出框架）
和家庭异质性（Huggett 1993 的不完全保险框架）结合在一个一般均衡模型中。

请从以下角度讨论可行性：
1. 计算负担：两个异质性维度会带来什么难度的增加？有哪些降维技术？
2. 机制互动：企业退出 → 就业冲击 → 家庭消费平滑 → 需求反馈 → 企业进入。
   这种双向反馈的核心经济学直觉是什么？
3. 现有文献：有哪些论文做了类似的事情？用的什么方法？
4. 边际贡献：如果克服了技术难度，这种框架能回答什么现有框架回答不了的问题？
```

#### 进阶用法

**审稿回复策略**：
```
我的论文被要求修改后重投，审稿人提出了以下意见：
"你的工具变量（降雨量）可能通过农业收入之外的渠道影响因变量（教育支出）。
例如，降雨量可能直接影响学校基础设施或教师出勤。
请更充分地论证排除限制。"

帮我：
1. 分析这个批评的力度——有多严重？
2. 找出可能的反驳思路
3. 建议可以补充哪些经验证据来加强排除限制（如 overidentification test、falsification test）
4. 起草一段给审稿人的回复
```

#### 实用技巧

- **推导前先让 Claude 确认它对模型结构的理解正确**，避免推导方向跑偏
- **头脑风暴时给出明确的分析维度**（如：技术可行性/理论直觉/文献定位/边际贡献）
- **审稿回复**：把完整审稿意见和你的论文都传给 Claude，让它全面理解上下文

---

### 📎 场景 7：文档文件处理（Word / Excel / PPT / PDF）

Claude 通过 Python 库可以直接读写这些文件，不需要你手动复制粘贴内容。

#### 文件处理能力总览

| 文件类型 | 读 | 写/编辑 | 实现方式 |
|---------|-----|---------|----------|
| **PDF** | ✅ | ✅ 提取/合并/拆分 | 内置 Read + pypdf/pdfplumber |
| **Word (.docx)** | ✅ | ✅ 创建/修改 | python-docx |
| **Excel (.xlsx/.xls)** | ✅ | ✅ 写入/格式化 | openpyxl / xlsxwriter |
| **PPT (.pptx)** | ✅ | ✅ 创建/修改 | python-pptx |
| **CSV / 文本** | ✅ | ✅ | pandas |
| **Stata (.dta)** | ✅ | ✅ | pandas |
| **LaTeX (.tex)** | ✅ | ✅ | 纯文本直接读写 |
| **图片 (.png/.jpg)** | ✅ | ✅ | 内置视觉 + Pillow |
| **JSON / YAML** | ✅ | ✅ | 内置直接读写 |

#### 基本用法

**读 Excel 并分析**：
```
读 D:\data\firm_data.xlsx 的 Sheet1
- 变量：revenue, cost, employees, industry, year
- 做描述性统计，按 industry 分组
- 结果写入同一个文件的 Sheet2，带格式
```

**读写 Word 文档**：
```
读 D:\writing\paper_draft.docx
1. 把所有"全要素生产率"替换为"TFP"
2. 检查所有表格编号是否连续
3. 把第 3 节的"模型设定"提取出来单独保存为 D:\writing\model_section.md
```

**处理 PPT 演示文稿**：
```
读 D:\slides\seminar.pptx
1. 列出每页幻灯片的标题和主要内容
2. 把第 5 页的表格更新为 D:\output\updated_table.xlsx 的数据
3. 在最后一页前插入一页"结论"幻灯片，内容从 D:\writing\conclusion.txt 读取
```

**PDF 批量操作**：
```
把 D:\papers\literature\ 下所有 PDF 的参考文献页提取出来
合并成一个文件 D:\output\all_references.pdf
如果某篇论文没有明确的参考文献页，标记出来
```

**PDF 表格提取**：
```
从 D:\papers\restuccia2008.pdf 的第 4 页提取 Table 2
转换成 Excel 格式保存到 D:\output\table2.xlsx
```

#### 实用技巧

- **Word 中的公式**：Claude 读 .docx 的 MathType/Equation Editor 公式可能不完整，数学内容建议用 LaTeX
- **大 Excel 文件**：让 Claude 先读前几行确认结构，再批量处理
- **PPT 模板**：如果有固定模板 .pptx，让 Claude 在模板基础上填充内容而非从头创建
- **扫描版 PDF 的表格**：pdfplumber 对图像扫描的 PDF 效果差，这时需要先用 OCR 软件处理

#### 典型工作流

```
任务：把 D:\data\survey_results.xlsx（10 个 sheet，每个 sheet 是一个城市的调查数据）
整理成一份包含图表的研究报告（Word 格式）

第 1 步：读 Excel，检查每个 sheet 的结构是否一致
第 2 步：合并所有城市数据，做描述性统计
第 3 步：画 3 张对比图（按城市），保存为 PDF
第 4 步：创建 Word 文档，包含：标题页 → 数据说明 → 统计表 → 图表 → 简要结论
第 5 步：保存为 D:\output\survey_report.docx
```

---

## 四、Zotero 文献管理集成

### 4.1 前提条件

确保 Zotero 桌面版正在运行，且设置为 "允许其他应用通过 API 访问"（Zotero → 设置 → 高级）。

### 4.2 常用操作

```
# 搜索你的 Zotero 库
在我的 Zotero 库中搜索 "monetary policy"

# 按 collection 浏览
列出我 Zotero 中 "PhD Thesis" collection 下的所有文献

# 添加论文到 Zotero
把这篇论文的元数据添加到我的 Zotero 库

# 生成特定格式引用
从我的 Zotero 库中，给 "misallocation" collection 的所有文献生成 Chicago 格式的参考文献
```

---

## 五、GitHub 集成

### 5.1 基本用法

```
# 搜索开源模型代码
在 GitHub 上搜索 "HANK model Python" 仓库，按 star 排序

# 克隆仓库
克隆 https://github.com/xyz/dsge-python 到 D:\code\dsge-python

# 搜索论文复现代码
搜索关于 "Aiyagari model replication code" 的 GitHub 仓库
```

---

## 六、常见问题和避坑指南

### 6.1 Claude 的输出质量不理想怎么办？

| 问题 | 解决方法 |
|------|----------|
| 回答太简单 | 加 "请详细阐述"、"请一步步推导" |
| 回答太浅 | 加 "请用高级经济学研究者的视角"、"请严格地..." |
| 代码跑不通 | 把 error traceback 完整粘贴给 Claude |
| 公式不对 | 让 Claude "写出推导过程，每一步编号" |
| 理解错了你的问题 | 补充更多上下文，或让 Claude 先复述它理解的模型结构 |
| 太长不想看 | 加 "请简洁回答，控制在 500 字以内" |

### 6.2 文件路径注意事项

- Windows 路径用反斜杠或正斜杠都可以：`D:\data\file.dta` = `D:/data/file.dta`
- 路径包含空格时加引号：`"D:\system files\桌面\documents\202604\data.dta"`
- 中文路径通常兼容，但偶尔有问题，建议用英文路径存放研究文件

### 6.3 安全提醒

- **不要在对话中直接粘贴完整 API 密钥**，建议通过环境变量或 settings.json 配置
- **提交代码到 GitHub 前**，检查代码中是否有硬编码的密钥
- **不要向 Claude 分享你不希望别人看到的机密信息**

### 6.4 效率提升技巧

- **一次给多个任务**，Claude 能并行处理
- **建立研究笔记**：每次对话后，把关键输出保存到项目的 `notes/` 目录
- **模板化**：把常用的 prompt 存成 `.md` 文件，下次直接引用
- **利用上下文**：在同一个对话 session 中连续工作，Claude 会记住之前的讨论

---

## 七、推荐文件结构

```
D:\research\
├── papers/              # 论文 PDF
│   ├── read/            # 已读
│   └── to-read/         # 待读
├── writing/             # LaTeX 论文草稿
│   ├── main.tex
│   ├── sections/
│   │   ├── intro.tex
│   │   ├── model.tex
│   │   ├── empirics.tex
│   │   └── conclusion.tex
│   ├── tables/          # LaTeX 表格
│   ├── figures/         # 图
│   └── refs.bib
├── code/                # 模型代码
│   ├── python/
│   │   ├── models/      # 模型求解
│   │   ├── empirics/    # 计量分析
│   │   └── utils/       # 工具函数
│   ├── dynare/          # Dynare .mod 文件
│   └── stata/           # Stata .do 文件
├── data/                # 数据
│   ├── raw/             # 原始数据（只读）
│   ├── cleaned/         # 清洗后数据
│   └── codebooks/       # 数据字典
├── output/              # 输出（表、图）
│   ├── tables/
│   └── figures/
├── notes/               # 研究笔记
│   ├── literature.md    # 文献笔记
│   ├── ideas.md         # 研究想法
│   └── meetings.md      # 会议记录
└── prompts/             # 常用 Claude prompt 模板
    ├── read-paper.md
    ├── run-regression.md
    └── draft-section.md
```

**关键原则**：每个研究项目一个文件夹，Claude Code 在项目目录下打开——这样 Claude 可以一次性看到项目的全部文件，效率最高。

---

## 八、环境配置速查

| 工具 | 配置位置 | 状态 |
|------|----------|------|
| DeepSeek API 后端 | `settings.json` → `env.ANTHROPIC_BASE_URL` | ✅ 已配置 |
| arXiv MCP | `.mcp.json` | ✅ 已配置 |
| Zotero MCP | `.mcp.json` + 环境变量 | ✅ 已配置 |
| GitHub MCP | `.mcp.json` + 环境变量 | ✅ 已配置 |
| Puppeteer MCP | `.mcp.json` | ✅ 已配置 |
| Python 数值计算 | pip | numpy, scipy, pandas, quantecon ✅ |
| Python 计量分析 | pip | statsmodels, linearmodels ✅ |
| Python 可视化 | pip | matplotlib, seaborn ✅ |
| Python 文档处理 | pip | python-docx, python-pptx, openpyxl, pypdf, pdfplumber ✅ |
| gh CLI | winget | ✅ 已安装 |
