---
tags: [literature, procurement, assembly-supply-chain, asymmetric-information, bargaining, mechanism-design, experiment, behavioral-operations]
created: 2026-04-27
authors: "Andrew M. Davis, Bin Hu, Kyle Hyndman, Anyan Qi"
year: 2022
title: "Procurement for Assembly under Asymmetric Information: Theory and Evidence"
paper_type: theory-experiment
journal: "Manufacturing & Service Operations Management (M&SOM)"
---

# Procurement for Assembly under Asymmetric Information: Theory and Evidence

## 元信息
- **作者**: Andrew M. Davis (Cornell), Bin Hu (UT Dallas), Kyle Hyndman (UT Dallas), Anyan Qi (UT Dallas)
- **年份**: 2022 (received Nov 2020)
- **期刊**: Manufacturing & Service Operations Management (M&SOM) — UTD-24 顶级期刊
- **论文类型**: 理论建模 + 人因实验 (theory + human-subjects experiment)
- **篇幅**: 33 页正文 + 18 页在线附录
- **实验规模**: 396 名参与者，2×3 between-subjects 设计
- **Token 估算**: 本次读取+总结约消耗 ~40K tokens（含 PDF 文本约 32K + 笔记生成约 8K）

## 研究问题

研究装配供应链（assembly supply chain）中 OEM 向两个拥有**私有成本信息**的供应商采购两种互补投入品的合同问题。核心研究问题：

1. **合同时序**：OEM 应该同时（simultaneously）还是序贯（sequentially）与供应商签约？
2. **装配 vs 二元供应链**：三方装配系统与单个集成供应商的二元供应链相比，在供应链利润、OEM 利润和供应商利润方面有何差异？
3. **议价能力**：OEM 议价能力（对等 vs 强势）如何影响上述结果？

## 方法

### 理论部分
- **两种制度建模**：
  - **Dynamic Bargaining**: OEM 与供应商议价能力对等，采用 Myerson (1984a) 的激励有效机制（incentive-efficient mechanism）——满足 IR、IC、Pareto Optimality
  - **Mechanism Design**: OEM 有主导议价能力，发出 take-it-or-leave-it 合同菜单
- **两种合同时序**：Simultaneous vs Sequential（每种制度下都分析两种时序，共 4 个模型）
- **二元供应链基准**：单一集成供应商提供两种投入品
- **合同形式**：两部制关税（two-part tariff）：wholesale price w + fixed payment f
- **信息结构**：每个供应商独立地以概率 p 为高成本 cH 或以概率 1-p 为低成本 cL
- **需求**: 市场出清价格 a - Q/2

### 实验部分
- **设计**: 2 (Bargaining/Mechanism) × 3 (Simultaneous/Sequential/Dyadic) between-subjects
- **参与者**: 396 人，每轮随机重新匹配，共 8 轮
- **参数**: a=75, cL=5, cH=15, p=0.5; Dyadic: cLL=10(w.p.0.25), cHL=20(w.p.0.5), cHH=30(w.p.0.25)
- **平台**: z-Tree (Fischbacher 2007)
- **议价协议**: 有限时间内来回出价/反馈，有决策支持工具

### 关键理论命题

| 命题 | 核心结论 |
|------|----------|
| Prop 1 | Simultaneous bargaining 中，高成本供应商的批发价被扭曲（w_H > c_H），以分离类型 |
| Prop 2 | Sequential bargaining 中，第一供应商的批发价无扭曲（w_1 = c），因为 IC'约束替代了 IC 约束 |
| Prop 3 | Sequential bargaining → 供应链利润更高，OEM 利润更低，Supplier 1 利润更高 |
| Prop 4-5 | Mechanism design 下 simultaneous 和 sequential 的最优机制 |
| Prop 6 | **Revenue Equivalence**: 最优 simultaneous 和 sequential 机制对 OEM 和供应商产生相同预期利润 |
| Prop 7 | 装配系统 vs 二元：装配系统供应链利润更高，但 OEM 利润更低 |

## 关键发现

### 理论发现
1. **Dynamic Bargaining 下时序重要**：序贯议价导致供应链总利润更高，但 OEM 利润更低——OEM 需要向第一供应商转让更多固定支付以减少第二阶段激励扭曲
2. **Mechanism Design 下 Revenue Equivalence**：强势 OEM 在同时和序贯签约中获得相同利润——不需要担心时序
3. **装配系统的双重性**：装配系统总利润高于二元供应链（因为供应商间的信息不对称可以被 OEM 利用），但 OEM 自身在二元供应链中利润更高
4. **第一供应商优势**：序贯签约中 Supplier 1 总是比 Supplier 2 赚得更多

### 实验结果
| 结果 | 发现 | 与理论对比 |
|------|------|------------|
| Result 1 | 二元供应链的协议达成率和供应链利润均高于装配系统 | **与理论相反** |
| Result 2 | Mech-Seq 下 OEM 利润高于 Mech-Sim | **与理论 Revenue Equivalence 相反** |
| Result 3 | OEM 在 Mech 中未充分利用议价能力，在 Barg 中赚得比理论多 | 部分偏差 |
| Result 4 | Supplier 1 在两种制度下都赚得比 Supplier 2 多 | 方向正确但幅度更大 |
| Result 5 | OEM 很少成功设计 screening contracts（仅 16-24% 的合同菜单能分离供应商类型） | **重要行为偏差** |

### 行为驱动因素（Section 6 的核心贡献）
- **Bounded Rationality（有限理性）**: 分离合同（screening contracts）对认知错误不稳健，OEM 更偏好认知负担低的 pooling contracts
- **Fairness（公平偏好）**: 实际利润分配比理论更均等；供应商拒绝正期望值但不平等的报价
- **Peer-induced Fairness**: Supplier 2 可能错误地认为得到了与 Supplier 1 相同合同条件，从而接受不利报价

## 研究局限性

- 假设供应商对称——实践中可能存在异质性（如 Apple vs Samsung）
- 二元供应链中仅有一个集成供应商——未考虑供应商之间的竞争
- 实验环境简化：两点成本分布、无外部选择权、固定需求函数
- 需求完全由市场出清价格驱动，无需求不确定性
- 仅考虑两部制关税合同形式
- 实验仅有 8 轮，有限学习效应
- 行为驱动因素分析是事后解释，而非预先注册的假设

## 文献综述写作亮点

Section 2（约 3 页，占正文 ~10%）是这篇论文文献综述的精华。这是一个**典型的 UTD 顶刊 "理论+实验" 论文的文献综述结构**：

### 结构解析

**第一层：核心文献流分类（5 条并行流）**

| 文献流 | 代表论文 | 本文定位 |
|--------|----------|----------|
| (1) 装配供应链采购（信息不对称） | Kalkanci & Erhun 2012, Hu & Qi 2018, Fang et al. 2014 | 这些论文只考虑强势 OEM，未考虑对等议价 |
| (2) 议价理论 | Nash 1950, Myerson 1984a/b, Harsanyi & Selten 1972 | 现有 OM 议价文献假设对称信息 |
| (3) 供应链实验研究 | Chen & Wu 2019 (综述), Johnsen et al. 2019 | 多为两方、ultimatum、完全信息 |
| (4) 放松假设的实验 | Leider & Lovejoy 2016, Davis & Leider 2018, Ho et al. 2014 | Ho et al. 是唯一研究同时/序贯出价的 OM 实验 |
| (5) 实验经济学中的议价 | Roth 1995, Camerer 2003, Ho & Su 2009 | 多在完全信息下的简单环境 |

**第二层：纵向递进——从严格假设到逐步放松**

文献综述呈现一个清晰的逻辑链条：
```
传统文献（两方 + ultimatum + 完全信息）
  → 放松为三方（Johnsen et al. 2019 引入私人信息）
  → 放松为动态议价（Leider & Lovejoy 2016 引入 chat-box）
  → 放松为同时/序贯（Ho et al. 2014 引入时序选择）
  → 本文：同时包含三方 + 动态议价 + 私人信息 + 时序选择
```

**第三层：贡献声明（3 个"missing feature"）**

"Second, we consider a dynamic bargaining environment that mimics a more realistic bargaining interaction. Third, we allow for suppliers to have private information, which is common in industry but has not been studied extensively in the literature." —— 用"缺失特征"来定义贡献，是 M&SOM 的常见写法。

### 与前两篇的对比

| 维度 | Aflaki & Netessine (2017) | Agrawal & Yücel (2021) | **Davis et al. (2022)** |
|------|--------------------------|------------------------|--------------------------|
| 综述目的 | 为单一模型论文定位 | 全面覆盖领域 | **为"理论+实验"论文做多层次定位** |
| 组织方式 | 按文献流递进 | 按主体分类 | **按文献流 × 假设复杂度递进** |
| 批判性 | 强 | 弱 | **中等——用"missing feature"而非直接批评** |
| 独特技巧 | 差异化方程 | 表格收束 | **"假设放松链"叙事 + 区分全新结果 vs 扩展结果** |
| 篇幅占比 | ~10% 正文 | 几乎全文 | **~10% 正文** |

### 额外亮点：Discussion 中的"Connection to Literature"
Section 6.2 是文献综述的"后半场"——在讨论实验结果后，明确区分：
- **完全新的实验结果**（两条，对应两个研究问题）
- **对前人发现的扩展**（三条，公平偏好、Supplier 2 劣势、screening 不普遍）

这种"Results → 区分新旧发现 → 与文献对话"的结构非常值得学习。

## 与我的研究关联

- Myerson 机制设计框架在供应链中的应用，对运筹学中信息不对称问题的建模有参考价值
- "理论+实验"的双方法设计对验证运筹学模型的行为有效性是一个重要范式
- Behavioral OR 方向：有限理性和公平偏好的交互是当前热门
- 装配供应链结构与可再生能源投资中的互补性问题有相似之处（如风电+储能为互补品）

## 待验证 / 疑问

- Myerson (1984a) 的 cooperative game with incomplete information 框架是否可迁移到其他多方采购场景？
- Revenue Equivalence 在更一般的信息结构下是否还成立（如连续类型、相关性）？
- 实验中 screening contract 的低成功率是否意味着需要设计更简单、更 robust 的合同形式？
- Dyadic 优于 Assembly 的实验结果是否会随着参与者经验的增加而改变？
