---
tags: [literature, renewable-energy, economic-curtailment, wind-power, stochastic-dynamic-programming, electricity-system, capacity-adjustment, energy-storage, emissions, priority-dispatch]
created: 2026-04-28
authors: "Owen Q. Wu, Roman Kapuscinski"
year: 2013
title: "Curtailing Intermittent Generation in Electrical Systems"
paper_type: analytical-modeling
journal: "Manufacturing & Service Operations Management (M&SOM)"
---

# Curtailing Intermittent Generation in Electrical Systems

## 元信息
- **作者**: Owen Q. Wu (Indiana U Kelley → 现 U Michigan Ross), Roman Kapuscinski (U Michigan Ross)
- **年份**: 2013 (working paper, March 2013; 后发表于 M&SOM)
- **期刊**: Manufacturing & Service Operations Management (M&SOM) — UTD-24
- **论文类型**: 分析性建模 + 大规模数值实验（MISO 数据校准）
- **篇幅**: 32 页正文 + online supplement（含证明和成本估计）
- **Token 估算**: 本次读取+总结约消耗 ~35K tokens（PDF 文本约 28K + 笔记生成约 7K）

## 研究问题

研究**经济性弃风/弃光（economic curtailment）**——即出于经济原因（而非物理约束或可靠性要求）主动放弃可再生能源发电——对电力系统运营成本和环境排放的影响。核心问题：

1. **经济性弃风能显著降低系统运营成本吗？** 直觉上可再生能源边际成本为零，弃风似乎没有经济价值
2. **弃风的环境影响是什么？** 放弃清洁能源直觉上会增加污染——但事实是？
3. **储能的引入如何改变弃风的经济和环境效果？** 储能似乎可以替代弃风
4. **确定性优化（业界实际使用）vs 随机动态优化（本文方法）** 在评估弃风收益时有差异吗？

## 方法

### 核心模型：随机动态规划（SDP）

- **时间尺度**：15 分钟间隔，96 期/天
- **三类发电资源**：
  - **非灵活（Inflexible）**：核电，零排放，恒定输出 Q_R，最低边际成本 c_R
  - **中间（Intermediate）**：煤电或天然气联合循环（NGCC），部分灵活但有 ramp 约束
    - 最低出力 αK（α = 50%），低于此产生 min-gen penalty
    - 启停有 cycling cost（磨损 + 启动燃料）
    - 启动/停机过程分别有 ramp-up rate γ_u 和 ramp-down rate γ_d
  - **调峰（Peaking）**：天然气开循环，完全灵活，最高边际成本 c_P
- 中间机组容量调整用 **pending capacity** 建模：
  - K_t（dispatchable）、R^u_t（pending-up）、R^d_t（pending-down）
  - 容量调整有惯性——启动和停机不是即时的

### 两种弃风策略对比

| 策略 | 公式 | 描述 |
|------|------|------|
| Priority Dispatch (PD) | Q^PD_t = (D_t - W_t)^+ | 风电优先，只在风电超过需求时才弃风 |
| Economic Curtailment (EC) | Q^EC_t ∈ [(D_t - W_t)^+, D_t] | 允许任意水平弃风，联合优化所有决策 |

### 关键命题
- **Proposition 1**：给定 K_t，最优柔性资源产量 Q*_t = (D_t - W_t) ∨ (αK_t) ∧ D_t
  - 三种情况：(i) 净需求 > αK_t → 不弃风；(ii) αK_t 在净需求和需求之间 → 部分弃风；(iii) αK_t ≥ 需求 → 完全弃风
- **Proposition 2**：最优容量调整由 pending-up 和 pending-down 目标刻画
- **Proposition 3**：V^PD ≥ V^EC ≥ V^ES（价值函数排序）

### 成本分解（六个成分）
1. Cycling cost（启停磨损+燃料）
2. Part-load penalty（部分负荷效率损失）
3. Min-gen penalty（低于最小出力）
4. Peaking premium 变化：ΔQ_P × (c_P − c_I)
5. Intermediate premium 变化：ΔQ_R × (c_R − c_I)
6. Wind curtailment cost：Δw × c_I

### 数值实验规模
- **347.1 million 状态**（969 容量状态 × 41 库存水平 × 7 负荷水平 × 13 风电水平 × 96 时段）
- 用 MISO 2011 年数据估计参数
- 风电穿透率从 0% 到 34.6%

## 关键发现

### 1. 经济性弃风的成本节省始终显著（核心贡献）
- **无储能**：每 MWh 弃风电量的成本节省 **$42 ~ $380/MWh**
  - 煤电中间容量：$55 ~ $380/MWh
  - NGCC 中间容量：$42 ~ $81/MWh
- **有储能**：成本节省依然显著，且每 MWh 的节省率可能**更高**
- 直觉：弃风 1 MWh → 可让 2 MW 中间机组提前启动（因 α = 50%）→ 替代峰荷数小时

### 2. 弃风的环境影响取决于中间机组类型（反直觉）
- **煤电中间机组**：弃风**减少** CO₂ 排放（~0.13-3.56 t/MWh 弃风），通常也减少 NOx
  - 原因：减少燃煤机组 cycling → 减少启动能耗 → 增加核电出力
- **NGCC 中间机组**：弃风可能**增加** CO₂ 排放，但**减少** NOx
  - NGCC 启动时 NOx 排放特别高（SCR 未启动），避免 cycling = 避免启动 NOx
- 在高风电穿透率（34.6%）下：弃风同时减少成本 ~$2M/天、CO₂ >100K t/天、NOx ~20 t/天

### 3. 成本节省的驱动因素分解
主要驱动因素（按重要性）：
1. **Peaking premium 减少**（弃风→增加中间机组可用容量→减少峰荷机组使用）
2. **Cycling cost 减少**（弃风→避免夜间停机→减少次日启动次数）
3. **Min-gen penalty 消除**（弃风→实时缓解最低出力约束）
4. 副作用：Part-load penalty 增加、弃风自身成本

### 4. 储能与弃风是"替代+互补"的双重关系
- **替代效应**：储能减少了弃风总量 → 弃风的总成本节省减少（约 10%-73% of 无储能）
- **互补效应**：储能**增加**了每 MWh 弃风的成本节省率（在多数场景）——因为储能 + 弃风联合优化比单独使用更有效

### 5. 确定性优化放大弃风价值
- 业界使用的确定性 rolling horizon 优化比 SDP **高估**了弃风的总收益
- 但在低风电穿透率下，确定性优化 + 日内再优化（每 6 小时）已经接近最优

### 6. 运营灵活性的替代效应
- NGCC 代替煤电作为中间容量 → 弃风收益大幅降低（~94-97% 减少）
- **灵活性是经济性弃风的替代品**——更灵活的系统通过弃风获得的额外节省更少

## 研究局限性

- 风电和负荷假设已知 15 分钟（实际有残余不确定性）
- 中间机组假设同质（实际有不同 age/效率的机组）
- 负荷弹性未考虑（demand response）
- 输电约束未考虑（transmission congestion）
- 仅考虑一个储能设施（大型抽水蓄能）——未考虑分布式储能
- 弃风假设无成本——实际可能涉及 contractual/regulatory cost
- 碳价未显式建模——如果排放完全定价，弃风的效果可能不同

## 文献综述写作亮点

Section 2（Literature Review，约 4 页，占正文 ~12.5%）呈现了一种我称为**"问题演化史 + 方法论升级"（Problem Evolution + Methods Ladder）**的组织方式：

### 结构解析——三阶递进

```
Phase 1: Problem Recognition (§2.1 — Wind Integration Studies and Curtailment Issues)
  → 实践驱动：英国系统 (Gross et al. 2006), NYISO (GE Energy 2005), CAISO (2007), Minnesota (EnerNex 2006)
  → 综述锚：Smith et al. (2007), Ela et al. (2009), Hart et al. (2012) — "excellent reviews"
  → 最新进展：GE Energy (2010), EnerNex (2011) — 大地理区域整合
  → 关键缺口："Most of these studies report the amount of wind energy curtailment necessary to meet system constraints and reliability requirement, but do NOT analyze economic curtailment as a way to save system operating costs."
  → 早期异议：Ela (2009, 三节点系统), Ela & Edelson (2012, 无输电约束案例) — 经济性弃风可能有益
  → 环境争议：Bentek Energy (2010, cycling 增加排放), Katzenstein & Apt (2009, 碳排放减少不如预期)
  → 市场实践：ISOs 开始允许风电提供价格报价→负价格→实际还是优先调度
  → 贡献声明："Our work COMPLEMENTS these studies by decomposing system operating costs into six components"

Phase 2: Methodology Upgrade (§2.2 — Advanced Methods)
  → Unit Commitment (UC) + Economic Dispatch (ED) = 现有框架
  → Milligan et al. (2012): "wind integration is still a relatively young field and new methodologies are needed"
  → 四个方法论前沿：
    1. Look-ahead ED (Xie et al. 2011) — PJM/MISO 已实施
    2. Stochastic UC + rolling planning (Weber et al. 2009, Meibom et al. 2011, Tuohy et al. 2009)
    3. Sub-hourly analysis (GE Energy 2010) — MISO 15-min 实施
  → 定位声明："SDP explicitly models stochasticity and is forward-looking in nature. Therefore, SDP CONTAINS the look-ahead ED, stochastic UC, and rolling planning methods."

Phase 3: Methodological Roots (§2.3 — Capacity and Inventory Management)
  → Rocklin et al. (1984): 随机需求下产能扩展/收缩
  → Eberly & Van Mieghem (1997): 多要素产能调整
  → Angelus & Porteus (2002): 库存+产能联合管理
  → 差异化：电力系统特有特征 — shutdown doesn't generate return; storage has conversion losses; capacity adjustment is gradual
```

### 独特写作技巧

1. **"实践报告→学术分析"的文献升级路径**：
   §2.1 引用了大量**非学术**的实践报告（GE Energy, EnerNex, CAISO, Bentek Energy, Xcel Energy），这是前八篇论文从未出现的。这些灰色文献（grey literature）服务于"问题来自于实践"的叙事——不只是学术 gap，而是**业界已经在讨论/试行但缺少学术分析**的问题。

2. **"Methods Ladder"（方法论阶梯）**：
   §2.2 呈现了一个方法论升级的梯子：UC/ED → Look-ahead ED → Stochastic UC → SDP。每个后续方法包容前一个。Wu & Kapuscinski 的 SDP 站在梯子顶端——"SDP contains the look-ahead ED, stochastic UC, and rolling planning methods." 这是一种非常有效的**方法论优越性声明**——不需要批评前面的方法，只需要展示 SDP 是更一般的框架。

3. **"Complement"而非"Overturn"的谦虚定位**：
   > "Our work COMPLEMENTS these studies by decomposing system operating costs into six components and analyzing the tradeoffs among these costs."
   
   不是"前人做错了"，而是"前人没有做细"。六个成分的分解本身就是一个贡献——它将复杂的系统成本透明化。

4. **"灰色文献"作为 legitimization 工具**：
   引用 Bentek Energy (2010)、Xcel Energy (2011)、EnerNex (2011) 等行业报告并非为了学术覆盖，而是为了**证明问题的实践 relevance**。这种技巧对面向行业问题的运筹学论文特别有效——"look, even the industry practitioners are concerned about this."

5. **反向 Policy Motivation**：
   在 LR 一开始就引用了 EU Renewable Energy Directive (2009) 的明确措辞：
   > "...when dispatching electricity generating installations, transmission system operators shall give priority to generating installations using renewable energy sources."
   
   这篇论文的发现**直接挑战**这一政策——经济性弃风可能有益。在 LR 中引用政策文本是一种"制造对立面"的叙事技巧——政策说了一件事，但我们的分析表明可能错了。

6. **跨领域方法论桥接**：
   §2.3 将 OM 领域的产能/库存管理文献与电力系统工程文献连接。"production-inventory systems have several similarities to the electrical systems"——然后精确指出关键差异。这种桥接让电力系统的审稿人看到论文有 OM 方法论深度，也让 OM 审稿人看到论文解决了一个新领域的问题。

7. **综述锚的多次使用**（和 Hsu et al.、Hu et al. 相同）：
   - Smith et al. (2007)、Ela et al. (2009)、Hart et al. (2012) → "excellent reviews of these studies"
   - Milligan et al. (2012) → wind integration 领域的 overview

### 与前八篇的 LR 风格对比

| 维度 | 前八篇 | **Wu & Kapuscinski (2013)** |
|------|--------|------------------------------|
| LR 组织逻辑 | 按文献流/方法论工具 | **"问题演化史 + 方法论阶梯"** — 从实践报告到学术方法到方法论根源 |
| 文献来源 | 几乎全是学术期刊 | **大量引用灰色文献**（行业报告、ISO 文件、EU 指令） — 证明实践 relevance |
| 差异化方式 | 学术 gap（missing feature/different framework） | **Complement + Contain** — "补全"已有分析 + SDP "包容"已有方法 |
| 批判风格 | 中等到强 | **极温和** — 几乎不批评，只"补全"和"包容" |
| 自我定位 | 问题解决者/方法论提供者 | **政策挑战者 + 透明度提供者**（challenge priority dispatch policy + decompose costs transparently） |
| 叙事驱动力 | 学术 gap | **实践问题 + 错误直觉**（"contrary to our priors"） |
| LR 篇幅 | ~10%-14% | **~12.5%** — 适中 |
| 最适合场景 | 各类型 | **面向行业问题的运筹学论文 — 需要说服审稿人问题确实是重要且未被分析的** |

### 新增写作技巧（本论文特有）

- **"Contrary to Our Priors" 叙事**：Introduction 中明确说 "The findings of this paper are contrary to our priors"——这在学术写作中少见但非常有力。它创造了一种"连研究者自己都惊讶"的科学发现感。
- **灰色文献作为实践关联性证明**：引用行业报告、ISO 文件、政策指令来证明问题不是学术想象出来的。这对想发表在 UTD-24 的应用型论文特别重要。
- **"六成分分解"作为分析透明性贡献**：不只说"curtailment saves cost"，而是精确分解为 6 个可量化的成分。这是 **explainable analytics** 的典范。
- **方法论阶梯（Methods Ladder）**：不批评前面的方法，而是展示自己的方法"包含"它们。这种"inclusiveness"策略比"my method beats yours"更容易被接受。

## 与我的研究关联

- **"系统成本分解"的分析范式**：将复杂系统成本透明化为可量化的成分是运筹学论文中非常有效的研究策略——适用于任何多因素权衡的复杂系统
- **"存储与某操作的替代+互补双重关系"**（storage can both substitute and complement curtailment on different margins）是一个一般的洞察——技术 A 可能减少技术 B 的使用总量但增加 B 的单位边际价值
- **SDP 作为"包容性方法论"**：将多种现有方法统一在 SDP 框架下是一种避免方法之争的策略
- **灰色文献的引用策略**可用于任何面向实践问题的运筹学论文——证明"问题确实存在且很重要"
- 本文是 utd-lit-1 中唯一以 working paper 形式出现的——LR 格式更灵活、更注重实践关联性

## 待验证 / 疑问

- 本文 2013 年作为 working paper 后是否经过大幅修改？最终发表在 M&SOM 的版本与 working paper 版本在 LR 结构和结论上有何变化？
- N_r ≥ 2 假设在电力市场中的保守性如何？MISO 有约 25 个主要风电企业——但每个企业可能在不同地理位置，面临不同的风电分布
- 15 分钟预测完美假设——在实际中，15 分钟前的风电预测误差可以有多大？
- 碳税/碳价未建模——如果 CO₂ 排放被完全定价，弃风的经济和环境效果是否会一致？（即没有 tradeoff）
- 需求侧响应（demand response）的引入——如果消费者可以在价格高时减少用电，这会如何改变弃风的价值？
