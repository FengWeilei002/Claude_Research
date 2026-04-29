---
tags: [literature, renewable-energy, energy-storage, capacity-investment, two-product-newsvendor, complementary-investment, carbon-tax, electricity-market, thermal-storage, battery-storage, monopoly-vs-competition]
created: 2026-04-28
authors: "Christian Kaps, Simone Marinesi, Serguei Netessine"
year: 2020
title: "When the Wind of Change Blows, Build Batteries? Optimum Renewable Generation and Energy Storage Investments"
paper_type: analytical-modeling
journal: "Working Paper (March 8, 2020)"
---

# When the Wind of Change Blows, Build Batteries? Optimum Renewable Generation and Energy Storage Investments

## 元信息
- **作者**: Christian Kaps (Wharton PhD → 现 ?), Simone Marinesi (Wharton), Serguei Netessine (Wharton)
- **年份**: 2020 (working paper, March 8, 2020)
- **期刊**: Working paper — 未标注目标期刊，但基于作者背景和论文风格，可能瞄准 Management Science 或 M&SOM
- **论文类型**: 分析性建模 + 多区域实证校准（ERCOT/德国/PJM 数据）
- **篇幅**: 22 页正文 + 18 页 online appendix（含所有证明、竞争模型扩展、Binary Intermittency Model 等）
- **Token 估算**: 本次读取+总结约消耗 ~42K tokens（PDF 文本约 38K + 笔记生成约 4K）

## 研究问题

研究**可再生能源发电容量**和**储能容量**的联合最优投资决策。核心问题：

1. **可再生能源和储能是替代品还是互补品？** 在投资层面，两者是共同增长还是互相替代？
2. **垄断（社会规划者）的最优投资组合是什么？** 联合优化 vs 独立决策？
3. **竞争（发电商 vs 储能运营商）如何改变结果？** 两方独立决策下的投资偏差？
4. **碳税如何影响最优投资组合？** 不同碳价水平下，储能技术选择（电池 vs 热储能）如何变化？
5. **储能技术在什么条件下变得可盈利？** 成本/效率阈值是多少？

## 方法

### 核心模型：Two-Product Newsvendor

- **时间结构**：一天分为两个子时段——白天（a 比例，需求 DH）和夜间（1−a 比例，需求 DL）
- **可再生能源发电**：装机容量 Q̄，实际出力在 [0, Q̄] 上服从均匀分布，日间/夜间发电独立
- **储能**：容量 K（MWh），充放电效率 e ∈ (0, 1]，充电成本 cK（$/MWh/天）
- **备用电源**：边际成本 g（$/MWh），无容量约束，始终可用
- **可再生能源发电成本**：cQ（$/MW/天，经间歇性调整后为 cQ/(24r)，r 为容量因子）
- **弃电假设**：超出需求和储能容量的可再生能源发电被免费弃掉

### 垄断利润函数

日间利润 + 夜间利润 − 容量成本：
- 可再生能源实际出力 ≤ 需求 → 自用
- 出力 > 需求 → 超出部分先充储能（受限于剩余容量和放电需求），再弃掉
- 储能放电节省备用电源成本 g

### 关键定理（垄断）

- **Theorem 1 — 互补性**：Q̄ 和 K 是策略互补品（∂²Π/∂Q̄∂K > 0）
  - 更多发电 → 更多储能可以利用过剩电力
  - 更多储能 → 更多发电可以储存并在需要时放电
- **Theorem 2 — 唯一最优解**：利润函数联合凹，存在唯一的 (Q̄*, K*)，由一阶条件联立求解
  - 得到 closed-form 解（a = 0.5 对称情况简化后）

### 竞争模型（§3.4）

- **两阶段序贯博弈**：发电商先选择 Q̄ 和转移价格 t（储能充电电价），储能运营商后选择 K
- **博弈时序**：
  1. 发电商选择 Q̄ 和转移价格 t ∈ [0, ge]
  2. 储能运营商观察决策后选择 K
  3. 实际出力实现，按合同执行充放电
- Theorem 3：子博弈完美均衡存在且唯一
- Theorem 4：竞争导致**双边际化（double marginalization）**——竞争下的 Q̄ 和 K **均低于**垄断最优

### 扩展（§3.5）

1. **排放定价**：备用电源排放 vG（tCO₂/MWh），储能制造排放 vK（tCO₂/MWh/天），碳税 τ → 调整 g 和 cK
2. **电力价格**：引入 pH、pL（白天/夜间电价）使模型可评估"不卖电只自用" vs "在市场售电"的切换
3. **转移合同**：分析转移价格 t 如何由发电商设定以激励储能投资
4. **放电概率递减**：当 Q̄ 很大时储能可能无法完全放电→引入放电概率项
5. **Binary Intermittency Model**：更接近实际——可再生能源完全运行或完全停机（如风电），用正态分布建模需求和间歇性

### 数值实验设计（§4-5）

- **三个区域市场**：ERCOT（德州）、德国、PJM（美国东北部）
- **两类储能技术**：锂电池（高成本 $60/MWh/天，高效率 90%）vs 热储能（低成本 $9/MWh/天，低效率 45%）
- **碳税范围**：$0 ~ $100/tCO₂
- **假设成本降低**：当前成本的 95%-50%
- 模型与 30,000 次仿真对比验证

## 关键发现

### 1. 可再生与储能是互补品（核心理论贡献）
- Theorem 1 证明 ∂²Π/∂Q̄∂K > 0：更多发电→储能更有利可图，更多储能→发电更有利可图
- 这与 Kok et al. (2020) 的"可再生 vs 灵活常规互补"结论平行——储能在此扮演了类似灵活常规的角色

### 2. 竞争导致双边际化、投资不足（Theorem 4）
- 发电商设定的转移价格 t* > 0 → 储能运营商利润被挤压 → K 降低
- 发电商选择的 t 高于社会最优水平（joint profit maximization）→ 整体福利下降
- 原因：发电商不内部化储能对自身利润的正外部性（储能增加→更多过剩电力被利用→发电商收益增加）

### 3. 热储能优于电池储能（当前技术参数下）
- 在所有三个市场中，热储能都比电池储能更具成本效益
- 即使电池效率更高（90% vs 45%），低单位成本（$9 vs $60/MWh/天）使热储能占据优势
- 对于多 GWh 级别的日间储能，"总放电成本 = 可再生输入 + 效率损失 + 储能成本"是主要决策因素

### 4. 碳税驱动转型，但阈值因市场而异
- 低碳价市场（PJM，g=$38）需要 $50-75/tCO₂ 碳税才能驱动大规模可再生+储能
- 高电价市场（德国，g=$75）在低得多的碳税下即可过渡
- 无论市场如何，$50-75/tCO₂ 碳税都能引发大规模可再生+储能投资

### 5. 储能盈利性是非线性的——存在技术阈值
- 当 cK/(ge) < 1 时（储能单位成本 < 节省的备用电源成本），储能投资突然飙升
- 这解释了为什么储能部署不是渐进的——一旦跨越技术/成本阈值，采用速度急剧加快
- 电池在 $50/tCO₂ 碳税下，需成本降低约 50% 才能达到阈值

### 6. 发电比储能更需要成本降低
- 在大多数市场中，可再生能源发电成本降低对盈利性的影响 > 储能成本降低
- 当前电池储能成本下，即使发电成本降低 50%，电池储能仍不可行（PJM）
- 热储能在当前成本下已接近可行——仅需 25%（ERCOT）~ 40%（PJM）成本降低

### 7. 需求分布均匀有利于储能
- 直觉上储能套利价值来自日夜价差→需求波动大似乎有利于储能
- 但模型发现：需求分布均匀时储能利用率更高→每单位储能投资回报更高
- 在大比例可再生能源电网中，储能资产的高利用率比套利机会更重要

### 8. Binary Intermittency Model 验证核心结论
- 即使可再生能源是完全运行或完全停机的（binary），主要结论保持
- 正态分布需求 + 放电概率递减使储能投资更集中在均值和零附近
- 储能规模主要通过充放电功率（Q−DL）增长，而非充电小时数——即使高碳税下，5-6 小时容量是上限

## 研究局限性

- 两时段结构简化——实际需要多时段或连续时间建模
- 假设储能总能以至少 DH/(24a) 的功率放电——未考虑功率容量约束
- 未建模输电约束和位置选择
- 未考虑需求弹性和需求侧响应
- 备用电源假设无限弹性（无容量约束）
- 未考虑多种储能技术的混合投资
- 竞争模型仅两方——未考虑多方竞争或市场结构演化
- 可再生能源出力假设时段间独立——实际有序列相关性
- 未考虑储能的辅助服务价值（频率调节、备用容量等）

## 文献综述写作亮点

Section 2（Literature Review，约 2 页，占正文 ~9%）呈现了一种我称为**"三流汇聚+间隙强调"（Three-Stream Convergence with Gap Emphasis）**的组织方式：

### 结构解析——三条文献流

```
流 1: Capacity Management under Uncertainty（容量管理）
  → Van Mieghem (2003): 综述（"comprehensive review"）
  → Boyabatlı & Toktay (2011): 不完全资本市场的随机容量投资
  → Wang et al. (2013): 两种竞争技术的动态容量投资
  → Drake et al. (2016): 排放规制下的技术选择与容量组合
  → 定位声明："none of these papers studies the investment decision in generation AND storage capacity"

流 2: Energy Research（能源研究）
  → Chao (2011): "only paper that analytically characterizes optimal investment portfolio" — 但仅仿真、无储能
  → Kök et al. (2017/2020): 可再生和常规能源投资——灵活性的作用
  → Aflaki & Netessine (2017): 间歇性对可再生投资的影响
  → Sunar & Swaminathan (2018): 分布式可再生能源对公用事业的威胁
  → 定位声明："None of these papers consider storage...while we analyze generation and storage capacities being chosen jointly"

流 3: Storage Operations Literature（储能运营文献）
  → Kim & Powell (2011): 随机动态规划——储能优化调度
  → Jiang et al. (2014): 近似动态规划——储能基准问题
  → Qi et al. (2015): 储能和输电联合规划
  → Schill & Kemfert (2011): 德国抽水蓄能的策略性建模
  → 定位声明："this literature takes generation capacity as given...we endogenize both decisions"

汇流点：
  "To the best of our knowledge, this paper is the first in the OM literature to study the LARGE-SCALE
   capacity investment into both intermittent generation and storage..."
```

### 独特写作技巧

1. **"Gap Convergence"策略**：
   三条文献流各自处理了问题的一个侧面（容量投资、可再生能源、储能运营），但在三条流的交汇处存在空白——没有论文同时内生化发电和储能投资。这不是批评任何一条流"做得不好"，而是说"它们没有交集"——本文恰好填补了这个交集。

2. **"First in OM"的精确限定**：
   > "the first in the OM literature to study the large-scale capacity investment into both intermittent generation and storage"
   
   限定词：(1) first in OM literature (而非所有文献); (2) large-scale capacity investment (而非运营调度); (3) both generation and storage (而非其中一个)。每一个限定词都精确避免了不准确的声称。

3. **"Only paper" + "but" 结构**：
   对 Chao (2011) 的引用使用经典"唯一但有缺陷"结构：
   - "To the best of our knowledge, the work by Chao (2011) is the **only** paper that analytically characterizes the optimal investment portfolio..."
   - "**but** does not include storage in this analysis"
   
   这与 Kök et al. (2020) 对 Chao (2011) 的策略相同（"analytically validate" vs "analytically characterize"）。

4. **极简批判风格**：
   每条流的区分只用 1-2 句话。不展开批评，不逐一分析前人论文的局限。这种风格适合"填补空白"而非"修正错误"的论文。

5. **"Working paper"的 LR 特征**：
   作为 working paper，LR 更简洁、更强调 gap 而非与每篇论文的详细对话。参考文献中有很多非传统学术来源（行业报告、新闻、政策文件），这在发表版本中可能会调整。

6. **缺少"综述锚"的使用**：
   与 Sunar & Birge (2018) 的 "comprehensive review can be found in Holmberg & Newbery (2010)" 不同，本文没有使用综述锚。这可能是 working paper 的特征——在提交前可能会补充。

### 与前九篇的 LR 风格对比

| 维度 | 前九篇 | **Kaps, Marinesi, Netessine (2020)** |
|------|--------|--------------------------------------|
| LR 组织逻辑 | 多种（问题演化史/方法论双塔/三河汇聚/漏斗争论解决） | **"三流汇聚+间隙强调"** — 三条流分别处理问题的不同侧面，在交汇处有 gap |
| 核心差异化 | 修正/补全/包容/反对  | **Gap-based** — "没人同时研究过两者"（最经典的 gap 声明） |
| 批判风格 | 中等到极温和 | **极简** — 每条流 1-2 句区分，不做长篇批评 |
| 自我定位 | 政策挑战者/方法论提供者/争论调和者 | **空白填补者（Gap Filler）** — 首次将两个决策变量联合内生化 |
| LR 篇幅 | ~10%-14% | ~9%（最短之一）— 但覆盖了三条完全不同的文献流 |
| 综述锚使用 | 部分使用（Kök et al., Sunar & Birge） | **未使用** — working paper 特征 |
| 工作论文特征 | Oh & Özer, Sunar & Birge 等的 LR 更发达 | **LR 较简洁** — 可能在被接受后会扩展 |
| 最适合场景 | 各种 | **填补交集的论文** — 当两个领域各自发展但从未交汇时 |

### 新增写作技巧（本论文特有）

- **"Intersection Gap"叙事**：不是"前人做错了"，不是"前人少了一个特征"，而是"两个成熟的文献流从来没有交汇过——我们是第一个让它们交汇的"。这是最经典也是最安全的 gap 声明方式。
- **"Working paper 的简化 LR"**：作为 working paper，LR 更短、更直接、更少对话。如果最终发表在 Management Science 或 M&SOM，预计 LR 会扩展 50%-100%，增加与每篇论文的详细对话。
- **行业报告作为数据来源而非文献综述**：本文大量引用行业报告（IRENA, Lazard, BMWi, BDEW）和新闻报道，但这些引用不是在 LR 中（不像 Wu & Kapuscinski），而是在数据部分（§4）——用于证明参数估计的现实性。
- **"First in OM" vs "First paper"的微妙区别**：声称 "first in the OM literature" 而非 "first paper"——为其他领域（工程、能源经济学）可能存在的类似研究留有余地。

## 与我的研究关联

- **"双产品报童模型"的框架**：joint capacity investment with complementary products 是运筹学中的基础框架——可迁移到任何互补品投资场景（如充电桩+电池、数据中心+可再生能源）
- **"互补品 vs 替代品"的系统分析模板**：Theorem 1 的 cross-derivative 符号 + Theorem 4 的双边际化分析——提供了完整的"互补品投资在垄断 vs 竞争下"的分析模板
- **"竞争 vs 垄断"作为论文的分层论证结构**：先解决社会最优（monopoly = social planner），再分析竞争偏差——这是一个清晰的两层结构，适用于任何有市场失灵的投资问题
- **"技术阈值"（cK/ge < 1）的非线性洞察**：储能不是渐进式采用的——存在临界点，政策应帮助技术跨越阈值而非在阈值以下提供渐进式补贴
- **"模型 vs 仿真验证"的方法论选择**：本文用 30,000 次仿真验证了均匀分布假设的适用性——展示了分析模型（tractable but approximate）和经验验证（accurate but computationally expensive）之间的互补
- 本文是 utd-lit-1 中唯一以 working paper 形式出现且关注储能投资的论文——与其他论文的 focus（容量投资、运营灵活性、策略博弈、经济性弃风）形成互补

## 待验证 / 疑问

- 本文标注为 March 8, 2020 working paper——是否已发表？如已发表，发表在哪个期刊？经过几轮修改？
- 如果引入多种储能技术的混合组合（同时投资电池和热储能），主要结论（互补性、双边际化）是否保持？
- 两时段假设对结论的敏感性——如果使用 24 小时连续时间模型，互补性结论是否仍然成立？
- 需求均匀分布有利于储能的结论——是否依赖于两时段假设？在实际电力市场中，价格套利机会是否仍然重要？
- 与 Wu & Kapuscinski (2013) 的关系——Wu & Kapuscinski 关注运营层面的储能调度和弃风，本文关注投资层面。两者如何互补？
- 分布式储能（如电动汽车 V2G）的引入会如何改变投资层面的互补/替代关系？
- Netessine 作为作者——他同时也是 Aflaki & Netessine (2017) 的合著者（同在 utd-lit-1），这形成了 Wharton 可再生能源 OM 研究的连续脉络
