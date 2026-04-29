---
tags: [literature, renewable-energy, capacity-investment, operational-flexibility, substitution-complementarity, newsvendor, energy-policy, carbon-tax]
created: 2026-04-27
authors: "A. Gürhan Kök, Kevin Shang, Şafak Yücel"
year: 2020
title: "Investments in Renewable and Conventional Energy: The Role of Operational Flexibility"
paper_type: analytical-modeling
journal: "Manufacturing & Service Operations Management (M&SOM)"
---

# Investments in Renewable and Conventional Energy: The Role of Operational Flexibility

## 元信息
- **作者**: A. Gürhan Kök (Koç University), Kevin Shang (Duke Fuqua), Şafak Yücel (Georgetown McDonough)
- **年份**: 2020 (received Oct 2016, 三轮修改, accepted Feb 2019, published online Jan 2020)
- **期刊**: Manufacturing & Service Operations Management (M&SOM) — UTD-24
- **论文类型**: 分析性建模 + 案例验证
- **篇幅**: 18 页正文 + online appendix
- **Token 估算**: 本次读取+总结约消耗 ~35K tokens（PDF 文本约 30K + 笔记生成约 5K）

## 研究问题

研究公用事业公司（utility firm）在**可再生能源**和**两类常规能源**（非灵活/灵活）之间的容量投资决策。核心问题：

1. **运营灵活性如何决定能源之间的交互关系？** 可再生能源与非灵活常规能源（核电/煤电）是替代还是互补？与灵活常规能源（天然气）呢？
2. **为什么现有文献和实践中存在矛盾主张？** 有人声称天然气是可再生能源的"陷阱"（替代品），有人声称是可再生能源的"补充"（互补品）
3. **补贴政策如何影响能源组合？** 对一种能源提供补贴会如何影响其他能源的投资水平？
4. **碳税是否总能促进可再生能源投资？** 已有文献暗示碳税增加→可再生能源投资增加，但这一直觉一定正确吗？

## 方法

### 核心模型
- **两阶段随机规划（two-stage stochastic program with recourse）**
  - 第一阶段：选择三类能源的容量投资水平 k_I, k_R, k_F
  - 第二阶段：在每个运营期（5 分钟间隔），基于需求/间歇性预报，决定各类能源的调度量
- 三类能源：
  - **非灵活（Inflexible）**：核电/煤电——输出不能频繁调整，高投资成本，低发电成本
  - **可再生（Renewable）**：风电/光伏——间歇性产出 θ_n·k_R，发电成本≈0
  - **灵活（Flexible）**：开循环天然气——可快速爬坡，低投资成本，高发电成本
- 需求 Ξ_n 和间歇性 Θ_n 具有**序列相关、非平稳**（通过 VAR 模型 + 趋势 + 季节性建模）
- 电力不足时产生惩罚成本 r

### 最优调度策略（Lemma 1+2）
1. 非灵活能源在所有时段满发（q_I = k_I）
2. 可再生能源优先于灵活能源调度（因为发电成本为零）
3. 灵活能源作为最后手段

### 最优容量——多维报童解（Proposition 1）
- 三个能源各有一个报童型的 underage/overage 平衡条件
- 灵活能源的 critical fractile 决定了系统可靠性（LOLP）：
  - ρ* = α_F / (r - c_F)
  - 即只有灵活能源的补贴才会影响电网可靠性

### 能源间交互关系的定义
- **替代品（Substitutes）**：降低 i 的投资成本 → 减少 j 的投资（dk*_j/dα_i > 0）
- **互补品（Complements）**：降低 i 的投资成本 → 增加 j 的投资（dk*_j/dα_i < 0）
- 交叉效应对称（Proposition 2(ii)）：dk*_i/dα_j = dk*_j/dα_i

### 关键假设（Assumption 1）
- g(ξ,θ) = Σ f_{Ξ_n,Θ_n}(ξ,θ) 的对数凹性（log-concave）
- g(ξ,θ₂)/g(ξ,θ₁) 关于 ξ 递减（negative correlation between demand and intermittency）
- 风电数据满足该假设（SPP 实际数据验证）；光伏因正相关性不一定满足

### 案例验证（Section 6）
- 使用德克萨斯州实际电力数据
- 用 Unit Commitment and Dispatch Model (UCDM) 替代解析模型的第二 stage
- 考虑真实的爬坡约束、最小启停时间、启动成本
- 160 个场景枚举（4×4×5×2）

### 扩展
- 现货市场（§7.1）：主要结论保持
- 超额供给惩罚（§7.2）：主要结论保持（ro ≤ ~$200/kWh 时）
- 碳税（§7.3）：效果取决于非灵活能源的碳强度
- 双重采购（§7.4）：任意两个能源的组合总是替代品

## 关键发现

### 1. 灵活性的核心角色（Proposition 3）
| 能源对 | 关系 | 直觉 |
|--------|------|------|
| 可再生 vs 非灵活 | **替代品** | 核电补贴→减少风电投资 |
| 非灵活 vs 灵活 | **替代品** | 核电补贴→减少天然气投资 |
| 可再生 vs 灵活 | **互补品** | 天然气补贴→增加风电投资（灵活能源缓解了间歇性问题→"间歇性缓解效应"） |

### 2. 对风电 vs 光伏的差异
- **风电**：与需求负相关→替代/互补效应更强→结果稳健
- **光伏**：与需求正相关→互补效应被削弱→在灵活能源补贴水平较低时，光伏与灵活能源可能变成替代品（Figure 5b）
  - 正相关时，光伏产出的高峰与需求高峰重合→灵活能源调度需求减少→两者竞争

### 3. 碳税的反直觉效果（§7.3）
- **非灵活能源为核电（零碳）时**：碳税↑→灵活能源成本↑→灵活能源投资↓→**可再生能源投资↓**（因互补效应）
- **非灵活能源为煤电（高碳）时**：碳税↑→煤电投资↓→灵活能源和可再生能源投资↑
- **政策含义**：碳税促进可再生能源的效果取决于存量非灵活能源的碳强度

### 4. 可靠性仅取决于灵活能源（Corollary 1）
- 可再生能源或非灵活能源的补贴**不改变电网可靠性**
- 只有灵活能源的补贴会影响 LOLP
- 这反驳了"可再生能源补贴损害可靠性""核电补贴增强可靠性"的说法

### 5. 调和实证文献的矛盾（Section 2）
- 欧洲研究（Marques et al. 2010）：天然气价格高→可再生能源投资高（替代关系）——因欧洲多为联合循环燃气轮机（非灵活）
- 美国研究（Bushnell 2010）：天然气补充风电（互补关系）——因美国多为开循环燃气轮机（灵活）
- **本文用"运营灵活性"统一解释了这些看似矛盾的发现**

## 研究局限性

- 垄断公用事业假设（但 §7.1 扩展至现货市场，核心结论保持）
- 非灵活能源的输出要么完全不变、灵活能源的输出要么瞬间可调——实际中有不同程度的灵活性（案例部分做了缓解）
- Assumption 1 对光伏不完全满足→光伏相关的互补性结果需要数值验证
- 成本参数外生——未考虑技术变革或学习效应
- 未考虑储能技术
- 未建模多个公用事业公司的策略互动
- 案例研究中枚举了有限的投资组合（160 个组合）

## 文献综述写作亮点

Section 2（Literature Review，约 2.5 页，占正文 ~14%）呈现了一种我称为**"漏斗式争论解决"（Funnel + Debate Resolution）**的组织方式：

### 结构解析——七层递进

```
第 1 层：Broad field anchor（领域锚）
  → Crew et al. 1995（综述）— 传统能源容量投资
  → Lee et al. 2012 — 提出可再生与灵活能源"可能互补"

第 2 层：Two-source papers（两条能源的论文）— 建立共识
  → Ambec & Crampes 2012, Baranes et al. 2017, Pinho et al. 2018
  → 共识：可再生与常规能源是替代品
  → 差异声明："jointly optimize three sources under general stochastic demand"

第 3 层：The lone three-source paper（唯一的先行者）
  → Chao 2011 — 唯一用三条能源的论文，但仅做仿真
  → "Our contribution is to analytically validate this insight"
  → 这是非常聪明的定位：不声称是第一个，而是声称是第一个"分析性验证"的

第 4 层：Empirical contradiction（实证矛盾）— 制造张力
  → Devlin et al. 2017 综述（天然气+风电互补）
  → Marques et al. 2010（欧洲：替代）vs Bushnell 2010（美国：互补）
  → "Our analytical results reconcile these empirical findings"
  → 这是本文 LR 最精彩的句子——用理论模型调和实证矛盾

第 5 层：Defensive note（防守性说明）
  → 讨论 rate-of-return regulation，解释为什么成本最小化目标是合理的
  → 这种主动化解潜在批评的做法非常成熟

第 6 层：OM literature positioning（OM 文献定位）
  → Al-Gwaiz et al. 2016, Sunar & Birge 2019, Hu et al. 2015,
     Aflaki & Netessine 2017, Kök et al. 2018
  → "Their results indicate that renewable and conventional sources are substitutes.
     We refine this conclusion by modeling operational flexibility"
  → 对 OM 领域已有成果的"修正性定位"

第 7 层：Related methodology streams（方法论关联）
  → Volume flexibility: Van Mieghem & Dada 1999, Tomlin 2006
  → Process flexibility: Jordan & Graves 1995, Van Mieghem 1998
  → Dual-sourcing: Sting & Huchzermeier 2012 (closest)
  → 每一条流都精确指出差异（需求侧 vs 供需双侧、两条 vs 三条源）
```

### 独特写作技巧

1. **"争论解决"框架（Debate Resolution Frame）**：
   将 LR 组织成"一个争论（可再生与常规能源是替代还是互补？）+ 本文提供解决"的叙事结构。这使文献综述具有内在的叙事驱动力——读者想知道答案。

2. **区分经济学文献和 OM 文献**：
   能源经济学（Ambec & Crampes, Chao, Bushnell）和 OM（Aflaki & Netessine, Hu et al., Kök et al.）被分别处理。这是跨领域论文的重要技巧——承认两个领域的贡献，同时指出各自未触及的方面。

3. **"Validate + Reconcile"双重贡献声明**：
   - 对 Chao (2011)：analytically validate（分析性验证）
   - 对实证文献：reconcile empirical findings（调和实证发现）
   
   这两个动词精准地定义了论文的贡献类型。

4. **防守性段落（Defensive paragraph）**：
   第 5 层关于 rate-of-return regulation 的讨论只有 5-6 句，但功能很重要——主动回应对"成本最小化目标函数"的潜在质疑，引用了 Regulatory Assistance Project (2011) 作为权威支持。

5. **"Only paper" 策略**：
   > "To the best of our knowledge, the work by Chao (2011) is the only paper that analytically characterizes the optimal investment portfolio..."
   
   在声称"唯一"时要非常精确——Kök et al. 精确地限定了 Chao 是在做仿真而非解析推导，因此"analytically validate"确实是新的贡献。

6. **用实证文献服务理论论文**：
   在第 4 层引入实证文献不是为了"全面覆盖"，而是为了制造"矛盾需要解决"的叙事张力。这种"理论论文引实证文献作为 motivation"的写法比单纯的实践例子更有说服力。

### 六篇对比更新

| 维度 | Aflaki & Netessine | Agrawal & Yücel | Davis et al. | Hsu et al. | Hu et al. | **Kök et al.** |
|------|-------------------|-----------------|--------------|------------|---------------|----------------|
| 论文类型 | 纯模型 | Survey 书章 | 理论+实验 | 纯模型 | 模型+案例 | **模型+案例验证** |
| LR 篇幅 | ~10% | 几乎全文 | ~10% | ~12.5% | ~12.5% | **~14%** |
| 组织方式 | 按文献流递进 | 按主体分类 | 假设放松链 | 文献流+概念区分 | 按问题特征逐一定位 | **漏斗式争论解决** |
| 核心技巧 | 差异化声明 | 表格收束 | 假设放松链+新旧区分 | Fundamental difference | Feature→Closest paper→Exact difference | **"Validate + Reconcile" + 跨领域文献分别处理** |
| 批判强度 | 强 | 弱 | 中（missing feature） | 中（时序/结构差异） | 中（精确技术差异） | **中——以"修正/refine"而非"否定"前人结论** |
| 适合场景 | 模型论文 | 综述章节 | 理论+实验论文 | 紧凑型模型论文 | 多特征模型论文 | **有实证争论需要理论来调和的论文** |

### 新增写作技巧（本论文特有）

- **"Reconcile"策略**：当存在相互矛盾的实证发现时，理论论文可以将自己定位为"调和者"——这是比"前人没做过"更有力的贡献声明。
- **"Refine"而非"Overturn"**：Kök et al. 不说自己的结论与前人"相反"，而是说"refine this conclusion"——更学术、更谦逊、更容易被审稿人接受。
- **跨领域文献的分层呈现**：将经济学文献和 OM 文献分开处理，每层内部有逻辑递进，层与层之间有明确的功能区分（经济学→提供争论；OM→提供方法基准）。
- **防守性段落**：在 LR 中主动回应潜在批评（如目标函数的选择），可以用很短的篇幅（~5 句）化解审稿人的顾虑。

## 与我的研究关联

- "替代/互补"的分析框架是经济学中研究要素间关系的基本工具，可应用于任何多要素投资组合问题
- 两阶段随机规划+多维报童解的模型结构可迁移到其他"战略投资+运营调度"场景
- "灵活性决定替代/互补关系"的洞见具有一般性——任何涉及刚性/柔性要素组合的系统中都应该存在类似效应
- 用理论模型调和实证矛盾是高影响力的写作策略
- 碳税效果取决于存量资本碳强度的结论，对政策评估有重要的方法论启示

## 待验证 / 疑问

- 如果存在储能（storage），三类能源的替代/互补关系会如何变化？储能是可再生的互补品还是灵活能源的替代品？
- 多区域互联电网（如跨州输电）下，一个地区的补贴如何影响另一个地区的能源投资？
- 需求弹性（demand response）的引入会削弱还是增强互补效应？
- 如果有多家公用事业公司在现货市场中竞争，策略互动会改变替代/互补关系吗？
