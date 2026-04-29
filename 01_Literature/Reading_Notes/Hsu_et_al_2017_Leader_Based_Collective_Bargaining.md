---
tags: [literature, collective-bargaining, buyer-alliance, nash-bargaining, supply-chain, cooperation-mechanism]
created: 2026-04-27
authors: "Vernon N. Hsu, Guoming Lai, Baozhuang Niu, Wenqiang Xiao"
year: 2017
title: "Leader-Based Collective Bargaining: Cooperation Mechanism and Incentive Analysis"
paper_type: analytical-modeling
journal: "Manufacturing & Service Operations Management (M&SOM)"
---

# Leader-Based Collective Bargaining: Cooperation Mechanism and Incentive Analysis

## 元信息
- **作者**: Vernon N. Hsu (CUHK), Guoming Lai (UT Austin), Baozhuang Niu (SCUT), Wenqiang Xiao (NYU Stern)
- **年份**: 2017 (received Feb 2015, accepted May 2016, published online Nov 2016)
- **期刊**: Manufacturing & Service Operations Management (M&SOM) — UTD-24
- **论文类型**: 纯分析性建模
- **篇幅**: 12 页正文 + online appendix
- **Token 估算**: 本次读取+总结约消耗 ~22K tokens（PDF 文本约 16K + 笔记生成约 6K）

## 研究问题

研究**基于领导者的集体议价（Leader-Based Collective Bargaining, LCB）**——两个在下游市场相互竞争的企业组成采购联盟，由领导者（leader）代表联盟与上游供应商谈判采购价格，跟随者（follower）按内部协议向领导者支付。核心问题：

1. **等价格机制（equal price LCB）是否可持续？**跟随者支付与领导者相同的批发价格——这是实践中最常见的形式——但其对所有参与方的影响如何？
2. **是否存在更有效的内部转移定价机制？**如果等价格机制有问题，什么替代机制能保证 LCB 的"win-win"？
3. **两种效应如何交互？**议价能力效应（bargaining power effect）vs 竞争效应（competition effect）如何共同决定结果？
4. **什么条件下供应商也能从 LCB 中受益？**

## 方法

### 模型框架
- **Generalized Nash Bargaining (GNB)** 框架，而非传统的 take-it-or-leave-it 合同
- 两个下游买家（i, j），一个上游供应商（s），采购共同组件
- 逆需求函数：pi = a - qi - b·qj，b ∈ [0,1] 衡量竞争强度
- 买家 i 相对供应商的议价能力：βis ∈ [0,1]
- 买家 i 相对买家 j 的议价能力：βij ∈ [0,1]
- 基准：separate procurement（分别采购），使用 Nash-Nash 均衡

### 两种 LCB 机制

| 机制 | 内部定价 | 特点 |
|------|---------|------|
| **Equal Price LCB** | 跟随者支付与领导者相同的批发价 | 简单、公平感强、实践中常见 |
| **Fixed Price LCB** | 跟随者支付一个不依赖于供应商谈判结果的固定转移价格 | 需要买家间额外谈判，但消除了竞争效应 |

### 决策时序
1. Stage 1: 两个买家同时决定采购量 qi, qj
2. Stage 2 (Equal Price): 领导者与供应商谈判 w；跟随者支付相同的 w
3. Stage 2' (Fixed Price): 买家间先谈判固定转移价格 t；然后领导者与供应商谈判 w
4. 假设：买家承诺不单独采购（collective boycott commitment），LCB 谈判失败则全部为零利润

### 扩展
- LCB 无承诺（允许买家退回到单独采购）
- LCB 增强议价能力（领导者的 βis 因联合量增加而提高）
- LCB 领导者的内生选择

## 关键发现

### 1. 竞争效应（Competition Effect）——本文核心概念
在 equal price LCB 下，领导者的采购量对批发价的影响比跟随者的采购量**更直接**：
- 领导者增加 qi → 直接降低自己产品的市场价格 → 批发价下降
- 跟随者增加 qj → 仅通过替代效应 b·qj 间接影响 → 批发价下降幅度更小

这导致了一个**不平衡的竞争位置**：领导者在 Cournot 竞争中获得相对优势——卖得更多（q_i^L ≥ q_i^S），跟随者卖得更少（q_j^L ≤ q_j^S）。

### 2. 等价格机制的不可持续性
| 条件 | 结果 |
|------|------|
| βjs 足够低（跟随者议价能力弱） | 跟随者受益——议价能力效应主导 |
| βjs 在中间区域 | 跟随者受损——竞争效应主导 |
| b 在中间区域 | 竞争效应最强，跟随者最可能受损 |
| b 很低或很高 | 竞争效应弱，跟随者可能受益 |

**直觉**：b 在中间区域时，跟随者的量对批发价影响与领导者差距最大→竞争位置最不平等。

### 3. 固定价格机制总是 Win-Win
- 固定转移价格 t 使跟随者的采购成本**不依赖于供应商谈判结果**→消除竞争效应
- 两个买家都实现了比单独采购更高的利润
- 总采购量达到**一体化最优**（first-best）——等于最大化供应链盈余的量
- 供应商在特定条件下也受益（b ≥ 阈值 + βij 大 + βjs 大 + βis 适中）→可能实现"all-win"

### 4. 供应商视角
- Equal price LCB：供应商利润变化取决于竞争效应与议价能力转移的净效果
- Fixed price LCB：当 b 大且特定议价参数条件满足时，供应商也可能受益

### 5. 扩展结论
- **无承诺**（允许退回单独采购）：总是伤害领导者，可能在某些 b 区域帮助跟随者
- **增强议价能力**（βis 因联合采购而提高）：在 equal price 下减弱竞争效应→可能惠及跟随者
- **领导者选择**：equal price 下应是 βis 更大的买家；fixed price 下还取决于 βij

## 研究局限性

- 仅有两个买家、一个供应商——现实 LCB 联盟可能涉及更多成员
- 线性需求函数——更一般的需求形式可能揭示新效应
- 无规模经济效应、无需求不确定性、无信息不对称
- 未考虑供应商的策略性反应（如供应商可能针对性地调整对不同 LCB 成员的报价）
- 买家承诺（collective boycott）在实践中可能需要法律/制度支持
- Fixed price LCB 的内部谈判可能在信息不对称下更复杂
- 仅考虑单个组件——装配系统中的 LCB 可能不同

## 文献综述写作亮点

Section 2 非常紧凑（约 1.5 页），但结构清晰，是**纯模型论文短小精悍型综述**的代表：

### 结构解析——三条文献流

```
流1: Group Buying (团购)
  → Anand & Aron 2003 (survey), Chen et al. 2007, 2010, Chen & Roma 2011
  → 与 LCB 的根本区别：团购是卖方先设价格方案，LCB 是买方先结盟再谈判

流2: Joint Procurement / Inventory Pooling
  → Chen 2009, Hu et al. 2013, Chen & Li 2013
  → 与 LCB 区别：关注的是议价能力和竞争优势的变化

流3: Cooperative Bargaining in Supply Chains
  → Lovejoy 2010, Nagarajan & Bassok 2008, Leng & Parlar 2009, Feng & Lu 2012/2013a/2013b
  → 引用 Bernstein & Nagarajan (2012) 作为该流派的综述
```

### 独特技巧

1. **"Fundamental Difference" 一句话区分**（最关键的一句）：
   > "For LCB, the buyers first form an alliance, and the leader then negotiates with the supplier for the purchase price. In contrast, for group buying, the seller first designs a price scheme..."
   
   用**时序差异**在概念层面区分文献流——这是经济学/OM 综述的高阶写法。

2. **引用综述文献作为定位锚**：
   - "Anand and Aron (2003) provide an excellent survey..." → 告诉读者去哪儿看全貌
   - "Bernstein and Nagarajan (2012) for an extensive review..." → 同样手法

3. **承认未建模的因素**：
   > "we assume away the factors that tend to benefit joint procurement, such as the economies of scale effect"
   
   这种"主动声明排除了什么"的做法既诚实又在战略上保护了论文——审稿人无法批评遗漏了规模经济。

4. **文献综述极短但精准**：全文 12 页，LR 仅 ~1.5 页（~12.5%），远低于 Davis et al. 的 ~10%（但 Davis 更长因为它是理论+实验）。对于纯模型论文，这个比例是合理的。

### 四篇对比更新

| 维度 | Aflaki & Netessine | Agrawal & Yücel | Davis et al. | **Hsu et al.** |
|------|-------------------|-----------------|--------------|----------------|
| 论文类型 | 纯模型 | Survey 书章 | 理论+实验 | **纯模型** |
| LR 篇幅 | ~10% | 几乎全文 | ~10% | **~12.5%（极紧凑）** |
| 组织方式 | 按文献流递进 | 按主体分类 | 按假设放松链 | **按文献流 + 概念区分** |
| 核心技巧 | 差异化声明 | 表格收束 | 假设放松链 + 新旧结果区分 | **"Fundamental difference" 一句定位 + 引用综述作为锚** |
| 批判强度 | 强 | 弱 | 中（missing feature） | **中（时序/结构差异）** |
| 适合场景 | 模型论文 | 综述章节 | 理论+实验论文 | **紧凑型模型论文** |

## 与我的研究关联

- GNB 框架在供应链合作中的应用，可迁移到其他多方谈判场景（如能源市场中的联盟采购）
- "竞争效应"和"议价能力效应"的二元分析框架具有通用性——可应用于任何涉及"合作同时竞争"的场景
- 固定转移价格的"消除外部性"逻辑，在机制设计中有更广泛的应用
- 运筹学中"内部协议设计"对联盟稳定性的影响值得关注

## 待验证 / 疑问

- 如果买家数量 > 2，竞争效应会如何变化？存在最优联盟规模吗？
- 供应商如果有私有成本信息（如 Davis et al. 的设定），LCB 的机制选择会如何改变？
- 新提出的 fixed price LCB 在实践中是否已有应用？实施障碍是什么？
- Assemble-to-order 或 complementarity 结构下，两种 LCB 机制的表现如何？
