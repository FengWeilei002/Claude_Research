---
tags: [literature, renewable-energy, supply-function-equilibrium, day-ahead-market, electricity-market, undersupply-penalty, reliability, strategic-commitment, supply-uncertainty]
created: 2026-04-28
authors: "Nur Sunar, John R. Birge"
year: 2019
title: "Strategic Commitment to a Production Schedule with Uncertain Supply and Demand: Renewable Energy in Day-Ahead Electricity Markets"
paper_type: analytical-modeling
journal: "Management Science"
---

# Strategic Commitment to a Production Schedule with Uncertain Supply and Demand: Renewable Energy in Day-Ahead Electricity Markets

## 元信息
- **作者**: Nur Sunar (UNC Kenan-Flagler), John R. Birge (UChicago Booth)
- **年份**: 2019 (received Oct 2015, 两轮修改, accepted Sep 2017, published online May 2018, print Feb 2019, Vol 65, Issue 2)
- **引用年份说明**: 官方印刷年份为 2019（Management Science Vol.65#2, Feb 2019），online first 为 2018 年 5 月。Crossref 验证确认印刷年 2019。
- **期刊**: Management Science — UTD-24
- **论文类型**: 分析性建模 — Supply Function Equilibrium (SFE) + 数值验证（MISO 数据）
- **篇幅**: 21 页正文 + electronic companion（含所有证明和扩展）
- **Token 估算**: 本次读取+总结约消耗 ~38K tokens（PDF 文本约 35K + 笔记生成约 8K）
- **Department Editor**: Serguei Netessine

## 研究问题

研究日前电力市场中，**可再生能源企业**（风电/光伏，面临供给不确定性）和**非灵活常规能源企业**（煤电/核电，产量恒定）在面临**低供给惩罚（undersupply penalty）**时的策略性生产计划承诺（supply function）均衡。核心问题：

1. **均衡策略是什么？** 各类企业在日前市场中的承诺生产计划（supply function）和实际产量如何确定？
2. **惩罚规则的影响？** 市场化的低供给惩罚（undersupply penalty rate linked to day-ahead price）是否能提高可靠性？——直觉上惩罚应该促使企业更保守承诺，但结果如何？
3. **多技术企业（diversified firms）的影响？** 同时拥有可再生和常规发电技术的企业如何改变均衡可靠性和承诺？
4. **补贴的影响？** 可再生能源生产补贴如何改变企业的承诺策略和均衡结构？

## 方法

### 核心模型：Supply Function Equilibrium (SFE) with Supply Uncertainty

- **离散时间多期模型**：τ 期，每期运行一个日前市场（day-ahead market）
- 两类企业：
  - **N_r ≥ 2 个可再生能源企业**：零边际成本，供给 Q_{n,t+1} 随机（分布 F_{t+1}），可在每期更改 supply function S_{n,t}(p)
  - **N_i ≥ 2 个非灵活企业**：凸生产成本 C_{t+1}(q)，在第 1 期承诺固定产量 S̄_k，之后各期不变
- **事件时序**：
  1. 所有企业在观察到需求冲击前同时提交 supply function
  2. 需求冲击 ε_t 实现，ISO 确定 market-clearing price p*_t
  3. 下期：可再生能源企业的可用供给 Q_{n,t+1} 实现
  4. 企业选择实际产量 q_{j,t+1}
  5. 若实际产量 < 承诺量：支付 undersupply penalty η_u(p*_t) = β_u p*_t + b_u
  6. 若实际产量 > 承诺量：支付 oversupply penalty η_o(p*_t)

### 关键方法创新
- **引入供给不确定性到 SFE 框架**：传统 SFE 文献（Klemperer & Meyer 1989, Green & Newbery 1992）只考虑需求不确定性
- 可再生能源企业的 committed production schedule 由一个 **ODE** 刻画：
  ```
  S'_t(p) = (1/(N_r-1)) · [S_t(p) - β_u ∫₀^{S_t(p)}(S_t(p)-x)dF_{t+1}(x)] / [p - η_u(p)F_{t+1}(S_t(p))] - α_t
  ```
  满足单调性约束 S'_t(p) > 0 和初始条件 S_t(p_ℓ) = 0
- **Ex post equilibrium** (Klemperer & Meyer 1989 概念): 对任意需求冲击实现，企业的 supply function 都最大化其期望利润

### 补贴扩展模型（§5）
- 引入 subsidy function T_t(q)，凹函数，T'_t(0) 为初始补贴率
- 存在临界供给量 ŝ_t：T'_t(ŝ_t) = b_o（补贴率 = 固定过度供给惩罚）
- **全新结构**：当 T'_{t+1}(0) > b_{o,t+1} 时（初始补贴率高于过度供给惩罚），supply function 由一个 **两段 ODE** 刻画
  - [0, ŝ_{t+1})："补贴主导区间"——企业最优过度生产以获得补贴
  - [ŝ_{t+1}, ∞)："惩罚主导区间"——企业避免过度生产
- 生产策略空间分为四个区域（Figure 2）

### 数值验证（§6）
- 使用 MISO 实际数据：N_i = 45 个非灵活企业，N_r = 25 个风电企业
- 基于 2013 年小时级风电数据 + 月度燃料成本回归估计参数
- 对比两种惩罚规则：Rule A（固定为主）vs Rule B（市场化为主）

## 关键发现

### 1. 市场化惩罚的反直觉效果（核心贡献，Propositions 4-7）

**Proposition 4 — Uniform Commitment Inflation（承诺统一膨胀）**：
当 N_r ≤ Γ_{t+1} 且 b_{u,t+1} < Δ_{t+1} 时（竞争不够激烈 + 固定惩罚部分足够小），提高市场化惩罚率 β_u 会导致每个可再生能源企业在**所有价格**上的承诺量**统一膨胀**。

直觉：可再生能源企业有**操纵惩罚率的能力**——通过膨胀承诺→压低市场出清价格 p*_t →降低市场化惩罚率 η_u(p*_t) = β_u p*_t + b_u →抵消 β_u 上升的影响。

**Proposition 5 — 可靠性下降**：
在与 Proposition 4 相同的条件下，提高市场化惩罚率会导致**更低的均衡可靠性**（对任意需求冲击实现，with probability 1）。

**Proposition 6 — 所有时段可靠性下降**：
在更强的条件下（承诺膨胀幅度大 + 非灵活企业容量约束非紧），一个时段惩罚率的上升会导致**所有时段**的可靠性下降（with probability 1）。

**Proposition 7 — 即使竞争激烈也会部分膨胀**：
即使 N_r 很大（竞争激烈），高惩罚率下仍存在一个**非空价格区间**，其中可再生能源企业会膨胀承诺。

### 2. 固定惩罚 vs 市场化惩罚（Proposition EC.10）
- 提高**固定**惩罚 b_u 不会导致 uniform commitment inflation——可再生能源企业在非空价格区间**减少**承诺
- 政策含义：**固定惩罚率比市场化惩罚率更有利于可靠性**

### 3. 多技术企业的可靠性更低（Proposition 9）
- 同时拥有可再生和常规技术的企业会**战略性压低**其常规能源承诺（相比纯常规企业）
- 压低常规承诺→抬高市场出清价格→可再生能源承诺被出清更多→可靠性下降
- 直觉：多技术企业通过压低常规承诺来增加可再生能源收入（内部化外部性）

### 4. 补贴导致全新的均衡结构（Proposition 11）
- 当初始补贴率高于过度供给惩罚时，quantity space 分为两个区间，supply function 由**两段不同的 ODE** 刻画
- 生产策略空间分为 4 个区域（Figure 2）：基于 (p*_t, Q_{n,t+1}) 的组合
- 补贴可以导致企业在**负价格**下仍提交正承诺量（与实践中观察到的负电价一致）

### 5. 惩罚规则有巨大影响（§6 数值）
- Rule A vs Rule B 的参数差异仅 ~4%，但在 p ≥ $4/MWh 时，可再生能源承诺量差异 > **15%**
- 非灵活企业的均衡承诺从 900 MW (Rule A) 变为 920 MW (Rule B)，增加 **~22%**
- 该增量足以满足密歇根州 99.1 万居民的年用电需求

## 研究局限性

- 所有可再生能源企业假设相同的供给分布（对称性假设——放松后数值结果显示结论仍成立）
- 未考虑柔性常规能源企业（如天然气调峰）——作者推测这类企业会减弱 adverse effects
- 电价需求函数假设为线性
- 惩罚率与日前价格的依赖关系假设为线性（β_u p + b_u）
- 非灵活企业的生产只能在第 1 期设定，之后不变——现实中可能有有限的调整能力
- 未考虑储能
- 多期模型中未考虑策略性跨期替代

## 文献综述写作亮点

Section 1.2（Literature Review，约 2 页，占正文 ~10%）呈现了一种我称为**"三条河流汇聚"（Three-Stream Confluence）**的组织方式：

### 结构解析——三条文献流

```
流 1: Renewable Energy/Resources Operations（可再生能源运营）
  → Aflaki & Netessine (2017): 间歇性影响环境政策有效性
  → Kök et al. (2018): 定价方案影响太阳能/风能投资
  → Murali et al. (2015): 地下水分配优化
  → Hu et al. (2015): 数据粒度对可再生能源容量投资的影响
  → Zhou et al. (2011): 储能增加可再生能源价值
  → Wu & Kapuscinski (2013): 减少可再生能源产出可能有经济价值
  → Lobel & Perakis (2011): 太阳能补贴设计
  → Alizamir et al. (2016): Feed-in-tariff 优化设计
  → 定位声明："To the best of our knowledge, our paper is the FIRST that analyzes strategic renewable energy producers' equilibrium production schedule commitments in a day-ahead market with various penalty rules and subsidies in effect."
  
  注意：这里将 Kök et al. (2018) 作为 working paper 引用（后来是 2020 年发表），Aflaki & Netessine (2017) 也是当时未正式发表

流 2: Supply Function Equilibrium (SFE)
  → Holmberg & Newbery (2010): 综述（"comprehensive literature review"）
  → Klemperer & Meyer (1989): SFE 开创——需求不确定性 + 凸成本
  → Green & Newbery (1992), Green (1996): 首次应用于电力市场
  → Rudkevich et al. (1998): 无弹性需求 + 分段常数凸成本
  → Anderson & Philpott (2002): 无弹性需求下的对称 SFE
  → Holmberg (2008): 唯一对称 SFE 的存在条件
  → Vives (2011): 不对称 SFE + 成本私有信息
  → 关键差异声明：
    1. "introduces and analyzes a supply function competition model with BOTH supply and demand uncertainty" （文献未同时考虑两种不确定性）
    2. "different from the literature that analyzes linear supply functions, in our paper, each renewable firm's committed production schedule is allowed to be ANY function" （更一般的函数形式）

流 3: Priority Dispatch Literature（优先调度文献）
  → Buygi et al. (2012), Al-Gwaiz et al. (2017)
  → Al-Gwaiz et al. (2017) 与本文最相关但聚焦完全不同
  → 差异：在 Al-Gwaiz et al. 中，可再生能源企业没有决策权（不能提交 supply function，不能选择产量）
  → 本文：可再生能源企业 actively participate in markets，动态选择 supply function 和产量
```

### 独特写作技巧

1. **"综述锚（Review Anchor）"策略**：
   SFE 流中明确引用 Holmberg & Newbery (2010) 作为"comprehensive literature review"，然后只讨论最相关的论文。这避免了在 LR 中重复综述已有的覆盖，让读者去综述中找完整文献。这是非常高效的"深度指向"（depth pointer）技巧。

2. **"First paper to" 的精确限定**：
   > "To the best of our knowledge, our paper is the first that analyzes strategic renewable energy producers' equilibrium production schedule commitments in a day-ahead market with various penalty rules and subsidies in effect."
   
   这个"first"声明非常精确——不是泛泛的"first paper on renewable energy in electricity markets"，而是精准限定了五个要素：(1) strategic producers, (2) equilibrium production schedule commitments, (3) day-ahead market, (4) penalty rules, (5) subsidies。

3. **"实用问题驱动"的 LR 组织**：
   不同于前七篇论文，Sunar & Birge 的 LR 明确以**实际问题**为锚——"The fundamental challenge with variable renewable energy is supply uncertainty...the day-ahead production schedule decision of a strategic firm that faces supply uncertainty and penalties has not yet been studied." LR 的组织不是"文献有哪些"，而是"为了回答我们的四个研究问题，我们需要哪些文献？"

4. **"任何函数 vs 线性函数"的区分**：
   > "different from the literature that analyzes linear supply functions, in our paper, each renewable firm's committed production schedule is allowed to be any function in equilibrium."
   
   这是一个纯技术性的区分，但它为理论贡献提供了正当性——即使线性 SFE 更容易求解，本文坚持用一般函数形式来获得"正确的"均衡特征。

5. **"Two types of uncertainty" 作为核心贡献定位**：
   论文的核心创新——同时引入供给和需求不确定性到 SFE 中——在 LR 中清晰声明，并且与每个引用的 SFE 论文形成对比（都只有需求不确定性）。

6. **对"无法做"的诚实说明**：
   > "It is well established that the explicit analysis of an asymmetric SFE in a general setting is usually infeasible (see Johari and Tsitsiklis 2011 for a discussion). Thus, most of the SFE literature focuses on the analysis of a symmetric SFE."
   
   这种诚实地承认方法论局限，同时解释为什么本文也采用对称性假设，既有学术诚信又防止了审稿人对对称假设的质疑。

7. **与同一 reading list 中其他论文的交叉引用**：
   本文引用了 Aflaki & Netessine (2017)、Hu et al. (2015)、Kök et al. (2018)、Wu & Kapuscinski (2013)——这些都是 utd-lit-1 中的论文。这种相互引用形成了一个**紧密的学术社区**——OM 可再生能源领域的核心圈子。

### 与前七篇的 LR 风格对比

| 维度 | 前七篇 | **Sunar & Birge (2018)** |
|------|--------|--------------------------|
| LR 组织逻辑 | 按主题/文献流或方法论工具 | **"三条河流汇聚"** — 三条流各有独立定位，在本文交汇 |
| 核心差异化 | "缺失某个 feature" 或 "框架不同" | **"两种不确定性同时存在"** + **"任何函数形式"** — 技术性差异化 |
| 批判风格 | 中等（refine/missing/static vs dynamic） | **极简批判** — 每条流的差异用 1-2 句精确说明，不给长篇批评 |
| 自我定位 | 问题解决者 或 方法论提供者 | **政策评估者（Policy Evaluator）** — 评估现行惩罚规则的有效性 |
| 与同一社区的关系 | 相互引用但不多 | **紧密交叉引用** — 70% 的可再生能源流论文来自同一 reading list |
| LR 篇幅 | ~10%-14% | **~10%**（最紧凑之一）— 但覆盖了三条完全不同的文献流 |
| 综述锚使用 | 偶尔（Hu et al., Hsu et al.） | **明确使用** — "comprehensive literature review can be found in Holmberg & Newbery (2010)" |
| 最适合场景 | 各种 | **研究实际问题（现有市场规则评估）的理论论文** — LR 要覆盖多个不重叠的文献流 |

### 新增写作技巧（本论文特有）

- **"政策反直觉发现"作为论文核心叙事**：不是"我们提出了一个模型"，而是"实践中的惩罚规则会事与愿违"。LR 服务于建立这个叙事的 tension——所有现有文献都没有研究过市场化惩罚的这种反直觉效果。
- **"三种不确定性来源"的论证**：需求不确定、供给不确定、惩罚规则不确定——三个来源分别对应三条 LR 流，每条流处理了一个来源但忽略了其他两个。
- **"方法借用+扩展"的定位**：不声称发明新方法，而是声称将 SFE 方法扩展到新的不确定性组合。"introducing and analyzing a SFE with both supply and demand uncertainty"——介绍+分析，而非发明。

## 与我的研究关联

- **市场化惩罚的反直觉结果**是一个一般性的 economics of regulation 洞见——当监管工具的价格与被监管对象的行为相互依赖时（penalty rate depends on market price, market price depends on commitments），监管可能产生反效果。这适用于碳税、补贴、罚款等任何与市场价格挂钩的政策工具
- **SFE 模型 + supply uncertainty** 的技术框架可以应用于其他"供给随机+策略报价"场景——如农产品批发市场、渔业配额交易、加密货币挖矿等
- **"可靠性"作为均衡度量**——定义 reliability 为 P(actual production ≥ day-ahead commitment)——是一个可移植的 performance metric，适用于任何有交付承诺+不确定性的系统
- **两段 ODE 结构**（补贴模型）展示了当经济激励在一个临界点切换时，均衡策略如何出现非光滑结构——这是 mechanism design 和 contract theory 中普遍存在的现象

## 待验证 / 疑问

- 如果引入柔性常规能源企业（天然气调峰），允许其在每期更改 supply function，Inflexible firms 的"战略替代"效果是否会被削弱？
- 论文假设 N_r ≥ 2 和 N_i ≥ 2——如果 N_r = 1（垄断可再生能源），结论是否改变方向？垄断者可能更有动机压低承诺（抬高价格）而非膨胀承诺
- 可靠性定义中假设不惩罚常规企业的供给不足——如果常规企业也面临容量约束不确定性（如电厂随机故障），结论如何变化？
- MISO 数值实验中仅使用了 2013 年风电数据——风电容量在 2013 年后大幅增长，结果在更高风电穿透率下是否仍然成立？
- 本文是 utd-lit-1 中第三篇发表在 Management Science 上的论文（前两篇是 Oh & Özer 2013 和本论文），也是第三篇不涉及"容量投资"而关注"运营层面策略"的论文——这是否反映了 MS 更偏爱策略互动均衡分析？
