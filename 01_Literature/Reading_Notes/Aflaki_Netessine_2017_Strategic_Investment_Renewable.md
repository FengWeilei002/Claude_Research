---
tags: [literature, renewable-energy, capacity-investment, intermittency, carbon-pricing, newsvendor]
created: 2026-04-27
authors: "Sam Aflaki, Serguei Netessine"
year: 2017
title: "Strategic Investment in Renewable Energy Sources: The Effect of Supply Intermittency"
paper_type: analytical-modeling
---

# Strategic Investment in Renewable Energy Sources: The Effect of Supply Intermittency

## 元信息
- **作者**: Sam Aflaki (HEC Paris), Serguei Netessine (INSEAD)
- **年份**: 2017
- **期刊**: Manufacturing & Service Operations Management (M&SOM)
- **DOI**: https://doi.org/10.1287/msom.2017.0621
- **论文类型**: 分析性建模（非文献综述）
- **篇幅**: 19 页正文 + online appendix

## 研究问题

在电力市场同时经历**自由化改革**和**可再生能源引入**两大变化的背景下，研究：
1. 可再生能源的**间歇性（intermittency）**如何影响发电容量投资决策？
2. **碳定价**机制在可再生能源间歇性的制约下是否真正有效？
3. **垂直拆分（market liberalization）**对可再生能源投资、总排放和系统成本的影响？
4. 长期**固定价格合同**能否纠正市场自由化的不利影响？

## 方法

### 核心模型
- **报童模型（Newsvendor Model）**框架，用于分析长期容量投资
- 两种发电技术：
  - Wind（风能）：间歇性可再生能源，高投资成本，零边际成本
  - Gas（天然气）：可靠化石能源，低投资成本，有燃料成本和碳排放成本
- 风能可用性采用两点分布（可用概率 q / 不可用概率 1-q），后续扩展为 Beta 分布
- 备用发电（backup）在两种技术容量都不足时启用，通常更碳密集

### 三种市场结构分析
1. **垂直一体化（Vertically Integrated, VI）**：单一主体同时拥有两种技术
2. **市场竞争（Nash Equilibrium, NE）**：两个独立发电商分别做容量决策
3. **部分竞争+固定价格合同（Fixed-Price, FP）**：风能采用长期固定价格合同，天然气仍为现货市场定价

### 方法特点
- 解析推导一阶条件，得到均衡容量
- 用美国能源部真实数据做数值实验
- 比较静态分析（comparative statics）
- 关键指标：临界比（critical ratio）Ai = αi / [E[vi](C - Ui)]

## 关键发现

1. **碳价格的意外反效果**：由于可再生能源的间歇性需要碳密集的备用发电，提高碳价格可能反而**降低**可再生能源在能源组合中的占比。这与直觉相反——人们通常认为提高碳排放价格一定会促进可再生能源投资。

2. **市场自由化的负面影响**：与垂直一体化相比，市场竞争下的总装机容量更低、总成本更高、总排放更高。原因在于边际成本定价机制：发电商只有在需求超过自身容量时才能获得正利润，这激励了**投资不足**。

3. **间歇性是核心障碍**：不仅影响短期调度，更影响长期投资决策。可再生能源在竞争市场中处于双重劣势——当风力可用时电价最低，风力不可用时电价最高但此时无法发电。

4. **固定价格合同的功过**：能有效促进风电投资，但可能导致天然气发电投资不足，最终过度依赖碳密集的备用发电——**增加了排放**。这是一个"没有免费午餐"的结果。

5. **关键比率优于平均成本**：在技术投资决策中，临界比（critical ratio）比总平均发电成本更好，因为它额外考虑了备用成本、碳价和间歇性的影响。

6. **互补还是替代**：可再生能源和化石能源是互补品还是替代品取决于**备用技术的碳密集度 e** 和碳价格 a 的交互作用。这对政策设计有重要启示。

## 研究局限性

- **仅有两种技术**：未考虑核能、煤电等不具备间歇性但缺乏灵活性的技术
- **单一发电商假设**：竞争情景中每种技术只有一个发电商，未建模多个发电商动态投资
- **简化的竞标过程**：未建模复杂的实时竞标和调度过程
- **两点分布假设**：基础模型用离散分布描述风能可用性，虽然在扩展中用 Beta 分布做了稳健性检验
- **只关注肩峰需求**：未考虑基荷（base load）需求
- **备用价格外生给定**：现实中长期备用容量和价格可能内生变化
- **需求完全无弹性**：未考虑需求侧响应

## 文献综述写作亮点（写作方法学习）

这是本文的 Section 2，是一个典型的 **M&SOM 风格文献综述**：

### 结构层次
1. **第一层**：定位到更广的文献领域（可持续运营 Kleindorfer et al. 2005）
2. **第二层**：横向展开该领域的关键主题（绿色工艺设计、闭环供应链、绿色技术采用）
3. **第三层**：聚焦到最接近的工作（Drake et al. 2016 的碳泄漏研究），指出本文差异
4. **第四层**：专项文献分组讨论
   - **间歇性文献**：Zhou et al. 2011, Kim & Powell 2011, Wu & Kapuscinski 2013, Tomlin & Wang 2005
   - **垂直拆分文献**：Taylor & Plambeck 2007, Goodarzi et al. 2015, Alizamir et al. 2016
   - **电力经济学文献**：Crew & Kleindorfer 1976, Chao 1983, Borenstein et al. 2000
5. **第五层**：明确本文贡献——交叉整合了上述多条文献流

### 写作技巧
- **每组文献都有一个主题句**（如"Within the sustainable operations literature, most papers that consider the intermittency..."）
- **用论文间的对比来凸显本文独特定位**（"At least two important features distinguish our paper..."）
- **引用数量适中**：约 40 篇参考文献，重点讨论 15-20 篇
- **明确的差异化声明**："Our paper integrates the aforementioned literatures by addressing both supply intermittency and the incentive issues associated with vertical unbundling"

## 与我的研究关联

- 运筹学在能源领域的应用方法论值得参考
- 报童模型框架可扩展到其他存在供给不确定性的场景
- 临界比分析方法可能适用于其他存在间歇性/不确定性的投资决策
- 碳定价与间歇性交互的"反直觉结果"对政策优化研究有启示

## 待验证 / 疑问

- 如果引入储能（storage）选项，关键结果是否还成立？
- 三点或连续分布的风能可用性能否得到解析解？
- 如果有多个风电发电商（如海上风电 vs 陆上风电），间歇性的相关性会如何改变结果？
