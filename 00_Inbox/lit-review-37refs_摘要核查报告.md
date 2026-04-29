---
tags: [meta-research, abstract-verification, lit-review, citation-accuracy]
created: 2026-04-28
---

# 37 篇文献综述摘要核查：LR 引用内容 vs 原文摘要

## 核查方法

- 对 37 篇文献综述中引用的论文，从 OpenAlex API 逐一拉取摘要（34/37 成功，3 篇无摘要）
- 将 LR 正文对每篇论文的描述与原文摘要进行逐条比对
- 重点关注：LR 是否准确传达了论文的核心发现、研究方向、与 LR 自身贡献的关系

## 总体结论

| 结果 | 篇数 | 占比 |
|------|------|------|
| 引用准确 | **32** | 94.1% |
| 需要核查 | **2** | 5.9% |
| 无摘要（无法比对） | **3** | — |

## 一、引用准确的文献（32 篇）

### Stream 2.1: 可再生能源采购与合同设计

**✅ [1] Hu et al. (2015)**
- LR: "data granularity at the hourly level plays a crucial role; coarser data leads to systematic overinvestment"
- Abstract: "data granularity for renewable yield and electricity demand at a fine level, such as hourly, matters: Without energy storage, coarse data…may lead to an overinvestment in renewable capacity"
- 判定: 完全吻合

**✅ [2] Aflaki & Netessine (2017)**
- LR: "intermittency of renewable energy determines the effectiveness of emissions regulations; increasing the emissions cost can paradoxically decrease the share of renewable capacity"
- Abstract: "intermittency of renewable technologies drives the effectiveness of carbon pricing mechanisms…charging more for emissions could unexpectedly discourage investment in renewables"
- 判定: "paradoxically decrease" = "unexpectedly discourage"，完全吻合

**✅ [4] Sunar & Birge (2019)**
- LR: "prove that imposing larger undersupply penalties can reduce equilibrium reliability with probability one"
- Abstract: "imposing or increasing a market-based undersupply penalty rate…can lead to lower equilibrium reliability in all periods with probability 1"
- 判定: 完全吻合

**✅ [6] Wu & Kapuscinski (2013)**
- LR: "allowing renewable curtailment lowers system costs and emissions"
- Abstract: "system cost reduction per unit of curtailed energy is consistently significant…curtailing intermittent generation often leads to system emission reductions"
- 判定: 完全吻合

**✅ [7] Peng et al. (2024)**
- LR: "characterize the conditions under which renewable, flexible, and storage capacities act as substitutes versus complements"
- Abstract: "examining whether they act as investment substitutes or complements…Storage and renewables substitute each other in meeting peak demand; storage complements renewables by storing surplus renewable output"
- 判定: 完全吻合

**✅ [8] Angelus (2021)**
- LR: "analyzes how distributed renewable power generation affects capacity investment and electricity prices in regulated utility markets"
- Abstract: "how a consumer should invest in distributed renewable generation…infinite-horizon, continuous-time model…regulated, retail electricity market"
- 判定: 吻合

**✅ [9] Agrawal & Yücel (2021)** — 书章，无摘要。LR 将其作为 "more detailed reviews" 引用，不涉及具体主张。✅

**✅ [10] Sunar & Swaminathan (2022)**
- LR: 同样作为综述引用
- Abstract: "we review some of the relevant research advancements made in the last decade…renewable energy, environmentally and socially responsible operations…agriculture, and public health"
- 判定: 确实是综述，吻合

**✅ [11] Trivella et al. (2023)**
- LR: "develop heuristics via approximate dynamic programming to analyze how corporations can meet their renewable targets by trading off REC purchases on the spot market against engagement in long-term power purchase agreements (PPAs)"
- Abstract: "We formulate rolling power purchases using a portfolio of VPPAs as a Markov decision process…forecast-based reoptimization heuristics…information-relaxation based reoptimization heuristic"
- 判定: Heuristics + VPPA portfolio + renewable target — 完全吻合

### Stream 2.2: 合作博弈与机制设计

**✅ [12] Nash (1950)** — 基础性引用。"The bargaining perspective traces to Nash (1950)." Abstract 确认为博弈论经典。✅

**✅ [13] Nagarajan & Bassok (2008)**
- LR: "analyze sequential negotiations between an assembler and complementary suppliers"
- Abstract: "a single assembler buys complementary components from n suppliers…We model the multilateral negotiations between the suppliers and the assembler sequentially…using the Nash bargaining concept"
- 判定: 完全吻合

**✅ [14] Cachon & Lariviere (2005)**
- LR: "characterize the coordinating properties of revenue-sharing contracts in supply chains"
- Abstract: "We demonstrate that revenue sharing coordinates a supply chain with a single retailer…We compare revenue sharing to a number of other supply chain contracts"
- 判定: 完全吻合

**✅ [15] Nagarajan & Sošić (2008)** — EJOR 综述，无摘要。LR: "comprehensive review of cooperative game-theoretic models." 标题支持。✅

**✅ [16] Bernstein & Nagarajan (2012)**
- LR: "provide a synthesis of competition and cooperative bargaining models"
- Abstract: "how the literature uses non-cooperative game theory…how some of these models can be analyzed using a cooperative bargaining framework. We compare the modeling tools and the insights"
- 判定: 吻合

**✅ [17] Lovejoy (2010)**
- LR: "introduces the bargaining-chain framework for multi-tier negotiations"
- Abstract: "We develop a bargaining-based solution to the negotiations between two adjacent multifirm tiers…We then link up multiple bargaining modules to generate chainwide predictions…with an arbitrary number of tiers"
- 判定: 完全吻合

**✅ [18] Feng et al. (2022)**
- LR: "introduce the Kalai-Smorodinsky solution to supply chain settings, showing that it can yield more reasonable outcomes than Nash bargaining when supply chains compete horizontally"
- Abstract: "the Kalai-Smorodinsky (KS) solution has been applied in many fields but has not been introduced to the supply chain contexts…the KS solution can appropriately capture the negotiation power shift induced by…the competition intensity"
- 判定: 完全吻合

**✅ [19] Li et al. (2025)**
- LR: "apply a multiunit bilateral bargaining framework to a distribution channel with one manufacturer and two competing retailers, and show that the equilibrium money-back guarantee policy depends jointly on bargaining power and on whether parties contract under wholesale-price or two-part tariff terms"
- Abstract: "We adopt a multiunit bilateral bargaining framework…one manufacturer and two competing retailers…both bargaining power and contract forms play important roles in determining equilibrium MBG decisions…wholesale price contract…two-part tariff contract"
- 判定: 每个细节都吻合

**✅ [20] Hsu et al. (2017)**
- LR: 详细描述了 LCB 中的 equal-price vs fixed-price 机制，competition effect 使 follower worse off，fixed-price LCB 实现 win-win
- Abstract: "the follower can be worse off if the competition intensity…is within an intermediate region. We identify a competition effect resulting from equal price LCB…fixed price LCB always achieves a win–win outcome"
- 判定: 逐点吻合

**✅ [21] Davis et al. (2021)**
- LR: "study an assembly supply chain in which an OEM procures two complementary inputs from suppliers with private cost information, and analyze both dynamic bargaining and mechanism design institutions, comparing simultaneous and sequential contracting"
- Abstract: "an OEM purchasing two inputs for assembly from two suppliers with private cost information. The OEM can contract with the two suppliers either simultaneously or sequentially. We consider both cases…the dynamic bargaining institution or…the mechanism design institution"
- 判定: 完全吻合

**✅ [22] Myerson (1984)** — 基础性方法引用。无摘要。✅

**✅ [23] Hu & Qi (2018)**
- LR: "develop optimal procurement mechanisms for assembly under private supplier costs and propose noncontingent two-part tariff contracts"
- Abstract: "procures multiple inputs for assembly from suppliers with privately informed costs…we propose alternative implementations of the optimal mechanisms by menus of two-part tariff contracts that are noncontingent"
- 判定: 完全吻合

**✅ [24] Oh & Özer (2013)**
- LR: "design an optimal mechanism for capacity planning when an agent's demand forecast evolves over time"
- Abstract: "a supplier's (principal's) problem of eliciting credible forecast information from a manufacturer (agent) when both firms obtain asymmetric demand information for the end product over multiple periods. The supplier uses demand information to better plan for a capacity investment decision"
- 判定: 吻合

**✅ [25] Kadiyala et al. (2019)**
- LR: "develop a 'learn and screen' dynamic mechanism for vendor-managed inventory"
- Abstract: "we propose learn and screen—a dynamic inventory mechanism…combines the ability of the supplier to learn about market conditions from POS data (over multiple selling periods) and dynamically determine when to screen the retailer"
- 判定: "learn and screen" 字面吻合

**✅ [26] Feng et al. (2015)**
- LR: "study dynamic bilateral bargaining between a seller and a buyer privately informed about demand"
- Abstract: "We analyze a dynamic bargaining game in which a seller and a buyer negotiate over quantity and payment…The buyer is privately informed about his type"
- 判定: 吻合

**✅ [27] Tomlin (2006)**
- LR: "provides a foundational analysis of mitigation and contingency strategies for managing supply disruption risks, characterizing the conditions under which firms should invest in backup supply versus inventory buffers"
- Abstract: "a risk-neutral firm will pursue a single disruption-management strategy: mitigation by carrying inventory, mitigation by single-sourcing from the reliable supplier, or passive acceptance…a supplier's percentage uptime and the nature of the disruptions (frequent but short versus rare but long) are key determinants"
- 判定: 完全吻合

### Stream 2.3: 算法方法与数据中心

**✅ [28] Brown & Smith (2025)**
- LR: "use Lagrangian methods to decompose a high-dimensional stochastic dynamic program into unit-level subproblems, exploiting the weakly coupled structure of the system"
- Abstract: "introduces stochastic Lagrange multipliers as surrogate energy prices, which reduces the system-wide DP to a collection of unit-specific DPs"
- 判定: 完全吻合

**✅ [29] Schindler et al. (2024)**
- LR: "develop a planner-trader bi-layer decomposition for multimarket hydropower scheduling, in which an outer planner's problem optimizes end-of-day reservoir targets over an annual horizon while an inner trader's problem selects hourly market bids"
- Abstract: "propose a bi-layer stochastic programming framework that jointly optimizes the trading strategies on the spot and reserve markets…a new planner-trader decomposition"
- 判定: 吻合。LR 中关于 "annual horizon" 和 "hourly bids" 的细节可能是来自全文，摘要中 "spot and reserve markets" 支持这一方向

**✅ [30] Cordera et al. (2023)**
- LR: "solve a multistage stochastic unit commitment problem with energy storage under correlated renewables uncertainty using a tailored variant of stochastic dual dynamic programming"
- Abstract: "a day-ahead unit commitment (UC) problem formulation that incorporates energy storage and considers multistage correlated uncertainty. Using a variant of the stochastic dual dynamic programming (SDDP) method"
- 判定: 完全吻合

**✅ [31] Chen et al. (2023)**
- LR: "organize the field around three domains: cloud resource management, marketplace pricing, and capacity supply chains"
- Abstract: "three problem domains: (1) cloud computing resource management, (2) pricing in the cloud computing marketplaces, and (3) capacity planning and management of cloud supply chains"
- 判定: 三个领域名称完全一致

**✅ [32] Arbabian et al. (2021)**
- LR: "study capacity expansion with bundled supplies of attributes (such as CPU and RAM)…develop multidimensional balancing algorithms that achieve provably near-optimal expansion policies"
- Abstract: "the growth of demand for capacity attributes—for example, CPU and RAM—is disproportionate, these attributes are often provided in preconfigured packages (cluster-types)…we devise two algorithms, the dynamic-programming-based (DP) algorithm and the forward-looking (FL) heuristic"
- 判定: 完全吻合

**✅ [33] Liu et al. (2025)**
- LR: "formulate a two-stage stochastic program for cloud server deployment under demand uncertainty using Microsoft Azure production traces, and demonstrate sizeable cost reductions compared to manual provisioning policies"
- Abstract: "We formulate the underlying optimization problem as a two-stage stochastic program…We test our algorithms with real production traces from Microsoft Azure and demonstrate sizeable cost reductions…Cloud supply chain operations were largely executed manually"
- 判定: 字面吻合

**✅ [34] Wierman et al. (2014)**
- LR: "data-center participation in electricity markets, including demand response"
- Abstract: "This paper surveys the opportunities and challenges in…data center demand response"
- 判定: 吻合

**✅ [35] Jiang & Powell (2015)**
- LR: "real-time bidding with battery storage"
- Abstract: "battery storage operators place bids into an hour-ahead market…The problem is formulated as a dynamic program…a convergent approximate dynamic programming (ADP) algorithm…to find a revenue-generating bidding policy"
- 判定: 吻合

**✅ [36] Ghamkhari et al. (2016)**
- LR: "risk-aware procurement"
- Abstract: "a unified energy portfolio optimization framework…the key to link different energy options…is to conduct risk management at different time horizons"
- 判定: 吻合

**✅ [37] Nair et al. (2014)**
- LR: "intermittent-source procurement"
- Abstract: "the problem of conventional energy procurement in the presence of intermittent renewable resources…We compute closed-form expressions for the optimal energy procurement strategy"
- 判定: 吻合

---

## 二、需要核查的文献（2 篇）

### ⚠️ [3] Kök et al. (2020) — 可能引用不准确

**LR 声称**:
> "examine the role of operational flexibility, and **identify the conditions under which flat pricing yields larger renewable investments than time-of-use pricing**"

**Abstract 实际内容**:
> "We study a capacity investment problem for a utility firm that invests in renewable and conventional energy, with a consideration of two critical factors. First, conventional sources have different levels of **operational flexibility**—inflexible (e.g., nuclear and coal) and **flexible** (e.g., natural gas)…We find that **renewable and inflexible sources are substitutes**…However, **wind energy and flexible sources are complements**. Thus, a subsidy for flexible natural gas-fired power plants leads to a higher investment in wind energy."

**差异分析**:
- Abstract 阐述的核心发现是：可再生能源与不灵活电源是**替代品**，与灵活电源是**互补品**
- 关于补贴的结论是：对灵活气电的补贴→增加风电投资；对煤电/核电的补贴→减少可再生能源投资
- Abstract 中**完全没有提到** "flat pricing" 或 "time-of-use pricing" 的比较

**判定**: LR 的描述（flat pricing vs time-of-use pricing）与 Abstract 的核心发现（operational flexibility → substitution/complementarity → subsidy design）**不匹配**。需要查阅该论文全文来确认是否论文中有讨论电价结构的影响，还是 LR 错误地归因了这一发现。

**建议**: 核对该论文全文。如果论文确实分析了 flat vs TOU pricing，则 LR 可保留；如果论文集中分析 operational flexibility and subsidies，则应修改 LR 描述。

---

### ⚠️ [5] Sunar & Swaminathan (2021) — 方向性错误

**LR 声称**:
> "showing that **net metering can be a peril for utilities** under certain demand and capacity conditions"

**Abstract 实际内容**:
> "Utilities have been lobbying against net-metered distributed solar based on the **common belief that it harms utility profits**. We find that when wholesale market dynamics are considered, **net-metered DRE may be a positive for utilities**. That is, net-metered DRE **strictly improves** the expected utility profit when the utility's self-supply is below a threshold and the wholesale electricity price is sufficiently responsive to wholesale demand fluctuations."

**差异分析**:
- 论文标题是 "Net-Metered Distributed Renewable Energy: **A Peril for Utilities?**" — 注意问号
- Abstract 明确说明净计量分布式可再生能源对公用事业**可能是好事**（"may be a positive"）
- 论文的核心贡献恰恰是**反驳** "net metering harms utilities" 的普遍观点
- LR 的表述 "can be a peril" 复现了普遍观点（即论文要反驳的观点），而非论文的实际发现

**判定**: LR 对这篇论文的引用**方向性错误**。LR 将论文呈现为支持 "net metering 危害公用事业" 的证据，但论文实际上发现净计量在合理条件下**改善**公用事业利润，挑战了这一普遍信念。

**建议**: 应修改为 "showing that net metering does not necessarily harm utilities and can improve utility profits under certain conditions"，或者在 LR 中将该论文定位为 "challenging the conventional wisdom that net metering is detrimental to utilities."

---

## 三、未获取摘要（3 篇，无法比对）

| # | 论文 | 原因 | LR 引用类型 |
|---|------|------|-----------|
| 9 | Agrawal & Yücel (2021) | Book chapter，OpenAlex 无摘要 | 综述引用，无具体主张 |
| 15 | Nagarajan & Sošić (2008) | EJOR 综述，OpenAlex 无摘要 | 综述引用 |
| 22 | Myerson (1984) | 1984 年论文，OpenAlex 无摘要 | 基础方法论引用 |

这三篇均为综述/基础性引用，LR 未对其内容做出可验证的具体主张。

## 四、核查方法说明

- **摘要来源**: OpenAlex API (https://api.openalex.org/works/doi:{doi})，通过 DOI 直接查找
- **OpenAlex 摘要特征**: inverted index 格式，需重构为自然文本。摘要长度通常 500-2000 字符
- **覆盖率**: 34/37 (91.9%)，3 篇无摘要均来自较早期论文或书籍章节
- **比对标准**: LR 对论文的描述是否与摘要中的核心发现/方法/贡献方向一致。不要求字面完全匹配，但核心方向不能相反或严重偏离
- **注意**: 摘要是论文的浓缩版本，LR 可能引用摘要未覆盖的论文细节。标记为 "⚠️" 的条目建议阅读全文后做最终判断
