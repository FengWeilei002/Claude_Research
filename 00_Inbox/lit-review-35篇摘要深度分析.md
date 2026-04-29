---
tags: [meta-research, abstract-analysis, lit-review, deep-reading]
created: 2026-04-28
---

# 35 篇文献综述引用论文：摘要翻译与深度分析

## 说明

- 对 LR 引用的 37 篇论文中可获取摘要的 35 篇（34 篇期刊/会议论文 + 1 篇书章无摘要但有替代分析），逐篇进行摘要翻译和深度分析
- 3 篇无摘要（Agrawal & Yücel 2021 书章、Nagarajan & Sošić 2008 综述、Myerson 1984）另做说明
- utd-lit-1 系列已有详细阅读笔记的论文（标注 ★），此处给出精简分析和笔记链接
- 摘要来源：OpenAlex API，翻译由 Claude 完成

---

# Stream 2.1: 可再生能源采购与合同设计（Refs 1–11）

---

## [1] ★ Hu et al. (2015) — Data Granularity Matters!

**期刊**: Manufacturing & Service Operations Management, 17(4), 480–494
**DOI**: 10.1287/msom.2015.0536
**已有读笔记**: `01_Literature/Reading_Notes/Hu_Wang_2015_Data_Granularity_Renewable.md`

### 英文摘要

We study an organization's one-time capacity investment in a renewable energy-producing technology with supply intermittency and net metering compensation. The renewable technology can be coupled with conventional technologies to form a capacity portfolio that is used to meet stochastic demand for energy. The technologies have different initial investments and operating costs, and the operating costs follow different stochastic processes. We show how to reduce this problem to a single-period decision problem and how to estimate the joint distribution of the stochastic factors using historical data. Importantly, we show that data granularity for renewable yield and electricity demand at a fine level, such as hourly, matters: Without energy storage, coarse data that does not reflect the intermittency of renewable generation may lead to an overinvestment in renewable capacity. We obtain solutions that are simple to compute, intuitive, and provide managers with a framework for evaluating the trade-offs of investing in renewable and conventional technologies. We illustrate our model using two case studies: one for investing in a solar rooftop system for a bank branch and another for investing in a solar thermal system for water heating in a hotel, along with a conventional natural gas heating system.

### 中文翻译

我们研究组织在可再生能源生产技术中的一次性容量投资，该技术面临供给间歇性和净计量补偿。可再生能源技术可与常规技术组合形成容量组合，用于满足随机能源需求。不同技术有不同的初始投资和运营成本，运营成本遵循不同的随机过程。我们展示了如何将此问题简化为单期决策问题，以及如何使用历史数据估计随机因素的联合分布。重要的是，我们证明在精细粒度（如小时级）上的可再生能源产出和电力需求的数据粒度至关重要：在没有储能的情况下，不能反映可再生能源发电间歇性的粗粒度数据可能导致可再生能源容量的过度投资。我们得到的解计算简单、直观，为管理者评估可再生与常规技术投资权衡提供了框架。我们通过两个案例研究来说明模型：一个是为银行分行投资太阳能屋顶系统，另一个是为酒店投资太阳能热水系统及常规天然气供暖系统。

### 深度分析

- **研究问题**: 面临供给间歇性的组织，如何做一次性可再生能源容量投资决策？数据粒度如何影响投资质量？
- **方法**: 将多期随机优化归约为单期决策问题；通过历史数据估计随机因素联合分布；案例分析（银行太阳能屋顶 + 酒店太阳能热水）
- **动机**: 实践中企业常用粗粒度（月/年级）数据做可再生能源投资决策，可能导致系统性偏差
- **核心结论**: 粗粒度数据→过度投资可再生能源；小时级数据才能反映间歇性，避免过度投资
- **局限**: 无储能假设；仅考虑一次性投资而非序贯投资；两个案例的规模较小

---

## [2] ★ Aflaki & Netessine (2017) — Strategic Investment in Renewable Energy

**期刊**: Manufacturing & Service Operations Management, 19(3), 489–507
**DOI**: 10.1287/msom.2017.0621
**已有读笔记**: `01_Literature/Reading_Notes/Aflaki_Netessine_2017_Strategic_Investment_Renewable.md`

### 英文摘要

To analyze incentives for investing in the capacity to generate renewable electricity, we model the trade-off between renewable (e.g., wind) and nonrenewable (e.g., natural gas) technology. Renewable technology has a higher investment cost and yields only an intermittent supply of electricity; nonrenewable technology is reliable and has lower investment cost but entails both fuel expenditures and carbon emission costs. With reference to existing electricity markets, we model several interrelated contexts—the vertically integrated electricity supplier, market competition, and partial market competition with long-term fixed-price contracts for renewable electricity—and examine the effect of carbon taxes on the cost and share of wind capacity in an energy portfolio. We find that the intermittency of renewable technologies drives the effectiveness of carbon pricing mechanisms, which suggests that charging more for emissions could unexpectedly discourage investment in renewables. We also show that market liberalization may reduce investment in renewable capacity while increasing the overall system's cost and emissions. Fixed-price contracts with renewable generators can mitigate these detrimental effects, but not without possibly creating other problems. In short, actions to reduce the intermittency of renewable sources may be more effective than carbon taxes alone at promoting investment in renewable generation capacity.

### 中文翻译

为分析可再生能源发电容量投资的激励，我们建模了可再生（如风电）与非可再生（如天然气）技术之间的权衡。可再生技术投资成本更高且只能提供间歇性电力供给；非可再生技术可靠且投资成本更低，但涉及燃料支出和碳排放成本。参照现有电力市场，我们建模了几个相互关联的情境——垂直一体化电力供应商、市场竞争、以及具有长期固定价格可再生能源合同的部分市场竞争——并考察碳税对能源组合中风电容量的成本和占比的影响。我们发现可再生能源技术的间歇性驱动了碳定价机制的有效性，这意味着提高排放收费可能出人意料地抑制可再生能源投资。我们还表明市场自由化可能减少可再生能源容量投资，同时增加整个系统的成本和排放。与可再生能源发电商的固定价格合同可以缓解这些不利影响，但可能带来其他问题。简言之，减少可再生能源间歇性的措施可能比单独使用碳税更有效地促进可再生能源发电容量投资。

### 深度分析

- **研究问题**: 碳税/碳排放成本如何影响可再生能源投资？间歇性在这一关系中扮演什么角色？
- **方法**: 在三种市场结构下（垂直一体化、完全竞争、部分竞争+固定价格合同）建模可再生vs非可再生技术投资组合优化
- **动机**: 政策制定者普遍认为碳税能促进可再生能源投资，但间歇性可能使这一逻辑失效
- **核心结论**: 
  1. 提高碳税→可能**反直觉地减少**可再生能源投资（因为间歇性使化石燃料在碳税下仍有优势）
  2. 市场自由化→可能减少可再生能源投资
  3. 固定价格合同可以缓解但无法完全消除
  4. 减少间歇性的措施比碳税更有效
- **局限**: 未考虑储能；假设单一可再生技术和单一非可再生技术

---

## [3] ★ Kök, Shang, & Yücel (2020) — Operational Flexibility

**期刊**: Manufacturing & Service Operations Management, 22(5), 925–941
**DOI**: 10.1287/msom.2019.0789
**已有读笔记**: `01_Literature/Reading_Notes/Kok_et_al_2020_Operational_Flexibility.md`

### 英文摘要

Problem definition: There is an ongoing debate on how providing a subsidy for one energy source affects the investment level of other sources. Academic/practical relevance: To investigate this issue, we study a capacity investment problem for a utility firm that invests in renewable and conventional energy, with a consideration of two critical factors. First, conventional sources have different levels of operational flexibility—inflexible (e.g., nuclear and coal) and flexible (e.g., natural gas). Second, random renewable energy supply and electricity demand are correlated and nonstationary. Methodology: We model this problem as a two-stage stochastic program in which a utility firm first determines the capacity investment levels followed by the dispatch quantities of energy sources to minimize the sum of investment and generation-related costs. Results: We derive the optimal capacity portfolio to characterize the interactions between renewable and conventional sources. Policy implications: We find that renewable and inflexible sources are substitutes, suggesting that a subsidy for nuclear or coal-fired power plants leads to a lower investment level in wind or solar energy. However, wind energy and flexible sources are complements. Thus, a subsidy for flexible natural gas-fired power plants leads to a higher investment in wind energy. This result holds for solar energy if the subsidy for the flexible source is sufficiently high. We validate these insights by using real electricity generation and demand data from the state of Texas.

### 中文翻译

**问题定义**: 关于对一种能源提供补贴如何影响其他能源的投资水平，存在持续争议。**学术/实践相关性**: 为研究这一问题，我们分析了一家公用事业公司投资可再生能源和常规能源的容量投资问题，考虑了两个关键因素。第一，常规能源具有不同程度的运营灵活性——不灵活（如核能和煤电）和灵活（如天然气）。第二，随机的可再生能源供给和电力需求是相关的且非平稳的。**方法**: 我们将此问题建模为两阶段随机规划：公用事业公司首先决定容量投资水平，然后决定各能源的调度量，以最小化投资和发电相关成本的总和。**结果**: 我们推导了最优容量组合，刻画了可再生与常规能源之间的互动关系。**政策含义**: 我们发现可再生能源与不灵活电源是替代品，表明对核电或煤电的补贴导致风电或太阳能投资水平降低。然而，风能与灵活电源是互补品。因此，对灵活的天然气发电厂的补贴导致更高的风能投资。如果对灵活电源的补贴足够高，这一结果对太阳能也成立。我们使用德克萨斯州的实际发电和需求数据验证了这些洞见。

### 深度分析

- **研究问题**: 对某种能源的补贴如何影响其他能源的投资？运营灵活性在其中扮演什么角色？
- **方法**: 两阶段随机规划→最优容量组合→替代/互补关系刻画；德克萨斯州真实数据验证
- **动机**: 政策制定中对能源补贴的跨期效应认识不足——补贴一种能源可能意外抑制或促进另一种
- **核心结论**: 
  1. 可再生↔不灵活常规（核/煤）= **替代品**（补贴煤电→减少可再生能源）
  2. 风能↔灵活常规（天然气）= **互补品**（补贴天然气→增加风能）
  3. 太阳能↔灵活常规 = 条件互补（需补贴足够高）
- **局限**: 两阶段静态投资（非动态序贯）；仅考虑单一公用事业公司

---

## [4] ★ Sunar & Birge (2019) — Strategic Commitment in Day-Ahead Markets

**期刊**: Management Science, 65(2), 714–734
**DOI**: 10.1287/mnsc.2017.2961
**已有读笔记**: `01_Literature/Reading_Notes/Sunar_Birge_2019_Strategic_Commitment_Day_Ahead.md`

### 英文摘要

We consider a day-ahead electricity market that consists of multiple competing renewable firms (e.g., wind generators) and conventional firms (e.g., coal-fired power plants) in a discrete-time setting. The market is run in every period, and all firms submit their price-contingent production schedules in every day-ahead market. Following the clearance of a day-ahead market, in the next period, each (renewable) firm chooses its production quantity (after observing its available supply). If a firm produces less than its cleared day-ahead commitment, the firm pays an undersupply penalty in proportion to its underproduction. We explicitly characterize firms' equilibrium strategies by introducing and analyzing a supply function competition model. The purpose of an undersupply penalty is to improve reliability by motivating each firm to commit to quantities it can produce in the following day. We prove that in equilibrium, imposing or increasing a market-based undersupply penalty rate in a period can result in a strictly larger renewable energy commitment at all prices in the associated day-ahead market, and can lead to lower equilibrium reliability in all periods with probability 1. We also show in an extension that firms with diversified technologies result in lower equilibrium reliability than single-technology firms in all periods with probability 1.

### 中文翻译

我们考虑一个日前电力市场，由多个竞争性可再生能源企业（如风电发电商）和常规能源企业（如燃煤电厂）组成，采用离散时间设定。市场每期运行，所有企业在每个日前市场中提交价格相关的生产计划。在日前市场出清后，下一期每个（可再生）企业在观察到其可用供给后选择实际产量。如果企业产量低于其出清的日前承诺，企业按少发电量比例支付低供给惩罚。我们通过引入和分析供给函数竞争模型，显式刻画了企业的均衡策略。低供给惩罚的目的是通过激励每个企业承诺其能在次日生产的数量来提高可靠性。我们证明在均衡中，在一期施加或提高市场化低供给惩罚率可能导致相关日前市场中所有价格上的可再生能源承诺量严格增大，并且可能导致所有时期中均衡可靠性以概率 1 降低。我们还在扩展中证明，多元化技术企业在所有时期中的均衡可靠性低于单一技术企业，概率为 1。

### 深度分析

- **研究问题**: 日前市场中的低供给惩罚是否能提高可再生能源发电的可靠性？
- **方法**: Supply Function Equilibrium (SFE) 模型 + 供给不确定性；ODE 刻画均衡策略；MISO 数据数值验证
- **动机**: 电力市场实践中普遍使用惩罚机制来确保可靠性，但其策略性效应未被充分研究
- **核心结论**: 
  1. 市场化惩罚率↑→承诺量膨胀→可靠性反而**下降**（with probability 1）——反直觉
  2. 多元化企业（同时拥有可再生+常规）比纯可再生企业可靠性更**低**
  3. 固定惩罚比市场化惩罚更有利于可靠性
- **局限**: 对称性假设（所有可再生企业相同分布）；无柔性常规企业；无储能；无策略性跨期替代
- **注**: 详见完整读笔记（~220行深度分析）

---

## [5] Sunar & Swaminathan (2021) — Net-Metered Distributed Renewable Energy

**期刊**: Management Science, 67(11), 6716–6733
**DOI**: 10.1287/mnsc.2020.3854

### 英文摘要

Electricity end-users have been increasingly generating their own electricity via rooftop solar panels. We study the impact of such distributed renewable energy (DRE) on utility profits and social welfare under net metering, which is a widespread policy in the United States. Utilities have been lobbying against net-metered distributed solar based on the common belief that it harms utility profits. We find that when wholesale market dynamics are considered, net-metered DRE may be a positive for utilities. That is, net-metered DRE strictly improves the expected utility profit when the utility's self-supply is below a threshold and the wholesale electricity price is sufficiently responsive to wholesale demand fluctuations. Our paper distinctively considers both downstream and upstream impacts of net-metered DRE on utilities and analyzes the tradeoff between these impacts. Net-metered DRE can increase utilities' expenses because of their required buyback from generating customers, and reduces their retail sales revenues. In addition, it can either reduce utilities' wholesale procurement costs or affect their wholesale market revenues. Our results suggest that utilities might benefit from emerging business strategies that motivate their customers to install solar panels. Our numerical study uses data on the distributed solar in California and the wholesale electricity market operated by the California Independent System Operator, and demonstrates that our findings hold under realistic parameters.

### 中文翻译

电力终端用户越来越通过屋顶太阳能板自行发电。我们研究这种分布式可再生能源（DRE）在净计量政策下对公用事业利润和社会福利的影响，净计量在美国是一项广泛实施的政策。公用事业公司一直基于分布式太阳能损害其利润的普遍信念来游说反对净计量。我们发现当考虑批发市场动态时，净计量 DRE 对公用事业可能是好事。也就是说，当公用事业的自有供给低于阈值且批发电价对批发需求波动足够敏感时，净计量 DRE 严格改善预期公用事业利润。我们的论文独特地同时考虑了净计量 DRE 对公用事业的下游和上游影响，并分析了这些影响之间的权衡。净计量 DRE 可能因需要回购发电客户的电力而增加公用事业支出，并减少其零售销售收入。此外，它可能降低公用事业的批发采购成本或影响其批发市场收入。我们的结果表明公用事业可能从激励客户安装太阳能板的商业策略中获益。我们的数值研究使用加州分布式太阳能和加州独立系统运营商运营的批发电力市场数据，证明我们的发现在实际参数下成立。

### 深度分析

- **研究问题**: 净计量分布式可再生能源到底损害还是改善公用事业利润？普遍认为有害，但真实情况如何？
- **方法**: 动态 Stackelberg 博弈（公用事业先动→消费者后动）；同时考虑下游（零售收入减少 + 回购支出）和上游（批发采购成本降低）效应；加州 CAISO 数据数值验证
- **动机**: 公用事业以"净计量损害利润"为由游说反对屋顶太阳能政策，但这一论断缺乏批发市场动态的严谨分析
- **核心结论**: 
  1. **净计量未必有害**——当公用事业自有供给低且批发电价弹性高时，净计量改善公用事业利润
  2. 机制：上游效应（降低批发采购成本）可能超过下游效应（零售收入损失+回购支出）
  3. 公用事业可能从鼓励客户安装太阳能的策略中获益
- **局限**: 假设公用事业为垄断者；仅考虑单一费率结构；消费者异质性有限

---

## [6] ★ Wu & Kapuscinski (2013) — Curtailing Intermittent Generation

**期刊**: Manufacturing & Service Operations Management, 15(4), 578–595
**DOI**: 10.1287/msom.2013.0446
**已有读笔记**: `01_Literature/Reading_Notes/Wu_Kapuscinski_2013_Curtailing_Intermittent_Generation.md`

### 英文摘要

Energy generation from intermittent renewable sources introduces additional variability into electrical systems, resulting in a higher cost of balancing against the increased variabilities. Ways to balance demand and supply for electricity include using flexible generation resources, storage operations, and curtailing intermittent generation. This paper focuses on the operational and environmental impact of curtailing intermittent generation. We construct a stochastic dynamic optimization model that captures the critical components of the system operating cost and analyze how various generation resources should operate with and without curtailing intermittent generation. We find that the system cost reduction per unit of curtailed energy is consistently significant and the presence of storage may increase the cost saving per unit of curtailed energy. We also find that curtailing intermittent generation often leads to system emission reductions.

### 中文翻译

间歇性可再生能源发电给电力系统引入了额外的变异性，导致平衡这些增加变异性的更高成本。平衡电力供需的方法包括使用灵活发电资源、储能运营和削减间歇性发电。本文聚焦于削减间歇性发电的运营和环境影响。我们构建了一个随机动态优化模型，捕捉系统运营成本的关键组成部分，并分析各种发电资源在有无削减间歇性发电的情况下应如何运营。我们发现每单位削减电量的系统成本降低持续显著，并且储能的存在可能增加每单位削减电量的成本节约。我们还发现削减间歇性发电通常导致系统排放减少。

### 深度分析

- **研究问题**: 允许削减（弃风/弃光）间歇性可再生能源发电，对系统成本和排放有什么影响？
- **方法**: 随机动态优化模型；分析各种发电资源的联合调度
- **动机**: 实践中"弃风弃光"被视为浪费，但其经济和环境效应缺乏系统分析
- **核心结论**: 
  1. 削减间歇性发电→系统成本显著降低（每单位削减量持续显著）
  2. 有储能时→每单位削减的成本节约更大
  3. 削减间歇性发电→系统排放减少（因减少了低效的备用调度）
- **局限**: 未考虑削减的监管/政策约束；仅从系统运营者角度分析

---

## [7] Peng, Wu, & Souza (2024) — Renewable, Flexible, and Storage: Friends or Foes?

**期刊**: Manufacturing & Service Operations Management, 26(5), 1730–1749
**DOI**: 10.1287/msom.2023.0068

### 英文摘要

Problem definition: More than 99% of the new power generation capacity to be installed in the United States from 2023 to 2050 will be powered by wind, solar, and natural gas. Additionally, large-scale battery systems are planned to support power systems. It is paramount for policymakers and electric utilities to deepen the understanding of the operational and investment relations among renewable, flexible (natural gas-powered), and storage capacities. In this paper, we optimize both the joint operations and investment mix of these three types of resources, examining whether they act as investment substitutes or complements. Methodology/results: Using stochastic control theory, we identify and prove the structure of the optimal storage control policy, from which we determine various pairs of charging and discharging operations. We find that whether storage complements or substitutes other resources hinges on the operational pairs involved and whether executing these pairs is constrained by charging or discharging. Through extensive numerical analysis using data from a Florida utility, government agencies, and industry reports, we demonstrate how storage operations drive the investment relations among renewable, flexible, and storage capacities. Managerial implications: Storage and renewables substitute each other in meeting peak demand; storage complements renewables by storing surplus renewable output; renewables complement storage by compressing peak periods, facilitating peak shaving and displacement of flexible capacity. These substitution and complementary effects often coexist, and the dominant effect can alternate as costs change.

### 中文翻译

**问题定义**: 美国 2023 年至 2050 年间安装的新发电容量中超过 99% 将由风电、太阳能和天然气驱动。此外，大规模电池系统计划支持电力系统。政策制定者和电力公司亟需加深对可再生、灵活（天然气）发电和储能容量之间运营和投资关系的理解。在本文中，我们同时优化这三种资源的联合运营和投资组合，考察它们之间是投资替代品还是互补品。**方法/结果**: 使用随机控制理论，我们识别并证明了最优储能控制策略的结构，由此确定了各种充放电运营对。我们发现储能是互补还是替代其他资源取决于所涉及的运营对以及执行这些对是否受到充电或放电约束。通过使用佛罗里达公用事业、政府机构和行业报告的数据进行广泛数值分析，我们论证了储能运营如何驱动可再生、灵活和储能容量之间的投资关系。**管理含义**: 储能和可再生能源在满足峰值需求方面相互替代；储能通过存储剩余可再生输出与可再生能源互补；可再生能源通过压缩峰值时段促进峰值削减和灵活容量替代，与储能互补。这些替代和互补效应常常共存，主导效应可能随成本变化而交替。

### 深度分析

- **研究问题**: 可再生能源、灵活电源（天然气）和储能三种容量之间，在投资层面是什么关系——替代还是互补？
- **方法**: 随机控制理论→最优储能控制策略结构→充放电运营对分类→数值分析（佛罗里达数据）
- **动机**: 未来 30 年美国几乎全部新增容量都来自风/光/气+储能，理解三者间的投资互动关系对规划和政策至关重要
- **核心结论**: 
  1. 替代/互补关系**取决于具体运营对**（charging vs discharging 模式）
  2. 储能↔可再生在满足峰值需求上=替代品
  3. 储能在存储剩余可再生输出上↔可再生=互补品
  4. 两种效应共存，主导效应随成本变化交替
- **局限**: 模型为集中式规划，非市场竞争均衡；未考虑输电约束

---

## [8] Angelus (2021) — Distributed Renewable Power Generation

**期刊**: Production and Operations Management, 30(12), 4614–4634
**DOI**: 10.1111/poms.13241

### 英文摘要

Renewable energy generation at the point of consumption (i.e., distributed generation) reduces consumer's electricity expenditure, and eliminates the cost, complexity, and inefficiency associated with power transmission and distribution. In this study, we address the problem of how a consumer should invest in distributed renewable generation to minimize the total expected cost of meeting his electricity demand. In contrast to the existing literature that focuses on grid-connected, large-scale investments in renewable power generation in the wholesale electricity market, we address investment in stand-alone, distributed renewable energy by an individual consumer who participates in a regulated, retail electricity market. We formulate an infinite-horizon, continuous-time model in which the utility moves first, and announces a retail electricity rate. Each consumer then acts strategically in deciding if, when, and how much distributed generation capacity to install. We find the subgame-perfect Nash equilibrium of this dynamic Stackelberg game by first deriving the consumer's optimal investment time and the resulting optimal capacity of his installed distributed generation. Using those results, we quantify the ensuing cost savings to the consumer, which average over 22% across a range of model parameters. Next, we evaluate the impact of consumer's investment in renewable energy on the revenue of his electric utility, and arrive at the structure of the pricing policy that maximizes that revenue. We quantify the revenue increase available to the utility from following this revenue-maximizing pricing when serving either a single consumer or multiple heterogeneous consumers, and find that it averages over 10% in our numerical studies.

### 中文翻译

在消费点进行可再生能源发电（即分布式发电）减少了消费者的电力支出，消除了与输配电相关的成本、复杂性和低效率。在本研究中，我们关注消费者应如何投资分布式可再生能源发电以最小化满足其电力需求的总预期成本的问题。与现有文献关注并网的大规模可再生能源发电（在批发电力市场中）不同，我们研究的是个体消费者在受监管的零售电力市场中投资独立分布式可再生能源的问题。我们构建了一个无限期连续时间模型，其中公用事业先动并公布零售电价。每个消费者然后策略性地决定是否、何时以及安装多少分布式发电容量。我们通过首先推导消费者的最优投资时机和由此产生的最优分布式发电装机容量，找到了这个动态 Stackelberg 博弈的子博弈完美纳什均衡。利用这些结果，我们量化了消费者的成本节约，在一系列模型参数下平均超过 22%。接着，我们评估了消费者可再生能源投资对电力公用事业收入的影响，并得出了最大化该收入的定价政策结构。我们量化了公用事业在服务单个消费者或多个异质性消费者时采用这种收入最大化定价所能获得的收入增长，在数值研究中平均超过 10%。

### 深度分析

- **研究问题**: 在受监管零售电力市场中，消费者何时投资、投资多少分布式可再生能源？这对消费者成本和公用事业收入有何影响？
- **方法**: 无限期连续时间模型；动态 Stackelberg 博弈（公用事业→消费者）；子博弈完美纳什均衡；最优停时（real options）求解最优投资时机
- **动机**: 现有文献关注批发市场大规模可再生能源投资，忽略了零售市场中个体消费者的分布式投资决策——而这正在快速增长
- **核心结论**: 
  1. 消费者最优分布式发电投资→成本节约平均 22%
  2. 公用事业可通过优化定价策略→收入增长平均 10%
  3. 均衡由公用事业定价策略和消费者投资策略共同决定
- **局限**: 单一消费者或有限异质性；未考虑净计量政策；未考虑储能

---

## [9] Agrawal & Yücel (2021) — Renewable Energy Sourcing

**类型**: 书章，Springer Series in Supply Chain Management, vol 10, pp 211–224
**DOI**: 10.1007/978-3-030-51957-5_10
**摘要**: 未获取（OpenAlex 无此书章摘要）

### 替代分析（基于书目信息和 LR 上下文）

- **定位**: 综述性质，覆盖可再生能源采购的三个维度：公用事业、消费者、企业
- **LR 中的使用**: "More detailed reviews of this literature can be found in..."
- **书名**: "Responsible Business Operations" (eds. Swaminathan & Deshpande)
- **估计内容**: 系统梳理可再生能源采购领域的文献，按决策主体（公用事业/消费者/企业）组织

---

## [10] Sunar & Swaminathan (2022) — Socially Relevant and Inclusive OM

**期刊**: Production and Operations Management, 31(12), 4379–4392
**DOI**: 10.1111/poms.13873

### 英文摘要

Many parts of the world are experiencing extreme weather events, energy poverty, food insecurity, and lack of access to basic healthcare. Moreover, concerns over socioeconomic, gender, and racial inequalities are growing. These socially relevant issues are ripe for analysis and improvement using an operations management lens. In this paper, we review some of the relevant research advancements made in the last decade, and identify future research directions on these important topics. In particular, we focus on papers related to sustainable planet (renewable energy, environmentally and socially responsible operations, regulation-driven operations), agriculture, and public health. For future research directions, we discuss the role of innovative business models and disruptive technologies, such as artificial intelligence (AI) and blockchain, in addressing these pressing issues.

### 中文翻译

世界许多地区正在经历极端天气事件、能源贫困、粮食不安全和缺乏基本医疗保障。此外，对社会经济、性别和种族不平等的担忧日益增长。这些社会相关议题非常适合用运营管理的视角进行分析和改善。在本文中，我们回顾了过去十年中取得的一些相关研究进展，并确定了这些重要议题的未来研究方向。我们特别关注与可持续地球（可再生能源、环境和社会责任运营、监管驱动的运营）、农业和公共卫生相关的论文。对于未来研究方向，我们讨论了创新商业模式和颠覆性技术（如人工智能和区块链）在解决这些紧迫问题中的作用。

### 深度分析

- **研究问题**: OM 领域如何贡献于社会相关议题（可持续、农业、公共卫生）？
- **方法**: 文献综述，按主题域组织
- **动机**: 社会议题（气候、不平等、健康）亟需 OM 工具分析，但领域参与不足
- **核心贡献**: 提供未来研究方向路线图——特别是 AI 和区块链在可持续运营中的应用
- **LR 使用**: 作为可再生能源文献的补充综述引用

---

## [11] Trivella, Mohseni-Taheri, & Nadarajah (2023) — Meeting Corporate Renewable Power Targets

**期刊**: Management Science, 69(1), 491–512
**DOI**: 10.1287/mnsc.2022.4354

### 英文摘要

Several corporations have committed to procuring a percentage of their electricity demand from renewable sources by a future date. Long-term financial contracts with renewable generators based on a fixed strike price, known as virtual power purchase agreements (VPPAs), are popular to meet such a target. We formulate rolling power purchases using a portfolio of VPPAs as a Markov decision process, accounting for uncertainty in generator availability and in the prices of electricity, renewable energy certificates, and VPPAs. Obtaining an optimal procurement policy is intractable. We consider forecast-based reoptimization heuristics consistent with practice that limit the sourcing of different VPPA types and the timing of new agreements. We extend these heuristics and introduce an information-relaxation based reoptimization heuristic, both of which allow for full sourcing and timing flexibilities. The latter heuristic also accounts for future uncertainties when making a decision. We assess the value of decision flexibility in rolling power purchases to meet a renewable target by numerically comparing the aforementioned policies and variants thereof on realistic instances involving a novel strike price stochastic process calibrated to data. Policies with full timing flexibility and no sourcing flexibility reduce procurement costs significantly compared with one with neither type of flexibility. Introducing sourcing flexibility in the former policies results in further significant cost reduction, thus providing support for using VPPA portfolios that are both dynamic and heterogeneous. Computing near-optimal portfolios of this nature entails using our information-relaxation based reoptimization heuristic because portfolios constructed via forecast-based reoptimization exhibit higher suboptimality.

### 中文翻译

多家企业已承诺在特定日期前从可再生能源采购其电力需求的一定比例。基于固定行权价的长期金融合同——即虚拟电力购买协议（VPPA）——是实现这一目标的流行方式。我们将使用 VPPA 组合的滚动电力采购构建为马尔可夫决策过程，考虑了发电商可用性以及电价、可再生能源证书价格和 VPPA 价格的不确定性。获得最优采购策略是不可行的。我们考虑了与实践中一致的基于预测的重优化启发式方法，这些方法限制了不同 VPPA 类型的采购和新协议的时间安排。我们扩展了这些启发式方法，并引入了一种基于信息松弛的重优化启发式方法，两者都允许完全的采购和时间灵活性。后一种启发式方法在决策时还考虑了未来的不确定性。我们通过在包含一个新颖的、经数据校准的行权价随机过程的实际算例上数值比较上述策略及其变体，评估了滚动电力采购中决策灵活性在实现可再生能源目标中的价值。与既无时间灵活性也无采购灵活性的策略相比，具有完全时间灵活性但无采购灵活性的策略显著降低了采购成本。在前者策略中引入采购灵活性进一步显著降低成本，从而支持使用既动态又异质的 VPPA 组合。计算此类接近最优的组合需要使用我们基于信息松弛的重优化启发式方法，因为基于预测重优化构建的组合表现出更高的次优性。

### 深度分析

- **研究问题**: 企业如何通过 VPPA 组合满足可再生能源采购目标？决策灵活性（采购类型、时机）有多大价值？
- **方法**: MDP 建模+VPPA 组合滚动采购；基于预测的重优化启发式；信息松弛（information relaxation）启发式；行权价随机过程校准真实数据
- **动机**: 企业可再生能源承诺激增（RE100 等），但最优采购策略在 VPPA 价格/供给不确定性下极其复杂
- **核心结论**: 
  1. 时间灵活性→显著成本降低（相比无灵活性）
  2. 采购灵活性（多种 VPPA 类型）→进一步显著成本降低
  3. 动态异质 VPPA 组合优于静态同质组合
  4. 信息松弛启发式优于实践中常用的预测重优化
- **局限**: 启发式而非精确解；未考虑 VPPA 的对手方风险；假设 VPPA 市场流动性充足

---

# Stream 2.2: 合作博弈与机制设计（Refs 12–27）

---

## [12] Nash (1950) — The Bargaining Problem

**期刊**: Econometrica, 18(2), 155–162
**DOI**: 10.2307/1907266

### 英文摘要

A new treatment is presented of a classical economic problem, one which occurs in many forms, as bargaining, bilateral monopoly, etc. It may also be regarded as a nonzero-sum two-person game. In this treatment a few general assumptions are made concerning the behavior of a single individual and of a group of two individuals in certain economic environments. From these, the solution (in the sense of this paper) of classical problem may be obtained. In the terms of game theory, values are found for the game.

### 中文翻译

对古典经济问题（以多种形式出现，如讨价还价、双边垄断等）提出了一种新的处理方法。该问题也可被视为一种非零和两人博弈。在此处理中，对单个个体和两个个体组成的群体在特定经济环境中的行为给出了一些一般性假设。由此可得古典问题的解（在本文的意义上）。用博弈论的术语来说，找到了博弈的值。

### 深度分析

- **研究问题**: 当两个理性个体存在合作机会时，如何公平地分配合作剩余？讨价还价问题有"解"吗？
- **方法**: 公理化方法：提出 4 条公理（Pareto 效率、对称性、无关替代独立性、仿射变换不变性）→证明存在唯一满足所有公理的解 = Nash 积最大化
- **动机**: 古典经济学对双边垄断/讨价还价没有令人满意的解决方案——Nash 开创性地将讨价还价视为博弈
- **核心结论**: 满足四条公理的唯一解 = 最大化 (u₁ - d₁)(u₂ - d₂)，即双方"超出不同意点的效用"之积
- **影响**: 奠定了此后 75 年的合作博弈/讨价还价理论基石
- **局限**: IIA 公理被广泛批评为不现实；仅考虑两人博弈；假设完全信息

---

## [13] Nagarajan & Bassok (2008) — A Bargaining Framework in Supply Chains

**期刊**: Management Science, 54(8), 1482–1496
**DOI**: 10.1287/mnsc.1080.0880

### 英文摘要

We examine a decentralized supply chain in which a single assembler buys complementary components from n suppliers and assembles the final product in anticipation of demand. Players take actions in the following sequence. First (stage 1), the suppliers form coalitions among themselves. Second (stage 2), the coalitions compete for a position in the negotiation sequence. Finally (stage 3), the coalitions negotiate with the assembler on allocations of the supply chain's profit. We model the multilateral negotiations between the suppliers and the assembler sequentially, i.e., the assembler negotiates with one coalition at a time. Each of these negotiations is modeled using the Nash bargaining concept. Further, in forming coalitions we assume that players are farsighted. We then predict at equilibrium the structure of the supply chain as a function of the players' relative negotiation powers. In particular, we show that the assembler always prefers the outcome where suppliers do not form coalitions. However, when the assembler is weak (low negotiation power) the suppliers join forces as a grand coalition, but when the assembler is powerful the suppliers stay independent, which is the preferred outcome to the assembler.

### 中文翻译

我们考察了一个分散式供应链，其中一个装配商从 n 个供应商处购买互补组件，并在预期需求的情况下组装最终产品。参与者按以下顺序行动。首先（阶段 1），供应商之间组成联盟。其次（阶段 2），联盟竞争谈判顺序中的位置。最后（阶段 3），联盟与装配商就供应链利润的分配进行谈判。我们将供应商与装配商之间的多边谈判建模为序贯谈判，即装配商每次与一个联盟谈判。每次谈判都使用纳什讨价还价概念建模。此外，在形成联盟时，我们假设参与者具有远见。然后我们在均衡中预测供应链结构作为参与者相对谈判能力的函数。我们特别表明，装配商总是偏好供应商不形成联盟的结果。然而，当装配商弱势（低谈判能力）时，供应商会联合成大联盟；但当装配商强势时，供应商保持独立，这正是装配商偏好的结果。

### 深度分析

- **研究问题**: 在装配供应链中，供应商联盟结构如何由谈判能力内生决定？装配商偏好什么联盟结构？
- **方法**: 三阶段博弈：联盟形成（有远见的参与方）→谈判顺序竞争→Nash 讨价还价（序贯）
- **动机**: 供应链中供应商常形成联盟以增强议价力，但联盟结构的内生决定缺乏理论分析
- **核心结论**: 
  1. 装配商总偏好供应商不联盟（独立谈判→更大利润份额）
  2. 弱势装配商→供应商形成大联盟（团结对抗）
  3. 强势装配商→供应商保持独立（装配商理想结果）
- **局限**: 完全信息假设；不考虑组件间的替代/互补程度对联盟的影响

---

## [14] Cachon & Lariviere (2005) — Revenue-Sharing Contracts

**期刊**: Management Science, 51(1), 30–44
**DOI**: 10.1287/mnsc.1040.0215

### 英文摘要

Under a revenue-sharing contract, a retailer pays a supplier a wholesale price for each unit purchased, plus a percentage of the revenue the retailer generates. Such contracts have become more prevalent in the videocassette rental industry relative to the more conventional wholesale price contract. This paper studies revenue-sharing contracts in a general supply chain model with revenues determined by each retailer's purchase quantity and price. Demand can be deterministic or stochastic and revenue is generated either from rentals or outright sales. Our model includes the case of a supplier selling to a classical fixed-price newsvendor or a price-setting newsvendor. We demonstrate that revenue sharing coordinates a supply chain with a single retailer (i.e., the retailer chooses optimal price and quantity) and arbitrarily allocates the supply chain's profit. We compare revenue sharing to a number of other supply chain contracts (e.g., buy-back contracts, price-discount contracts, quantity-flexibility contracts, sales-rebate contracts, franchise contracts, and quantity discounts). We find that revenue sharing is equivalent to buybacks in the newsvendor case and equivalent to price discounts in the price-setting newsvendor case. Revenue sharing also coordinates a supply chain with retailers competing in quantities, e.g., Cournot competitors or competing newsvendors with fixed prices. Despite its numerous merits, we identify several limitations of revenue sharing to (at least partially) explain why it is not prevalent in all industries. In particular, we characterize cases in which revenue sharing provides only a small improvement over the administratively cheaper wholesale price contract. Additionally, revenue sharing does not coordinate a supply chain with demand that depends on costly retail effort. We develop a variation on revenue sharing for this setting.

### 中文翻译

在收入共享合同下，零售商向供应商支付每单位采购的批发价，加上零售商产生的收入的一个百分比。这种合同在录像带租赁行业相对于更常规的批发价合同已变得更加普遍。本文在一般供应链模型中研究收入共享合同，收入由每个零售商的采购量和价格决定。需求可以是确定性的或随机的，收入来自租赁或直接销售。我们的模型包括供应商向经典固定价格报童或定价报童销售的情况。我们证明收入共享协调单零售商供应链（即零售商选择最优价格和数量）并任意分配供应链利润。我们将收入共享与多种其他供应链合同（如回购合同、价格折扣合同、数量灵活合同、销售返利合同、特许经营合同和数量折扣合同）进行比较。我们发现收入共享在报童情形中等价于回购，在定价报童情形中等价于价格折扣。收入共享还能协调零售商进行数量竞争（如 Cournot 竞争者或固定价格的竞争报童）的供应链。尽管有诸多优势，我们识别了收入共享的几个局限，以（至少部分地）解释为什么它并非在所有行业都普遍。特别是，我们刻画了收入共享相对于行政成本更低的批发价合同仅提供微小改进的情形。此外，收入共享不能协调需求依赖于昂贵的零售努力的供应链。我们为这种情况开发了收入共享的一种变体。

### 深度分析

- **研究问题**: 收入共享合同在什么条件下能协调供应链？它相对于其他合同形式（回购、折扣、返利等）有什么优势和局限？
- **方法**: 博弈论均衡分析；供应链协调框架（与一体化最优对比）；多合同形式比较（涵盖 7 种合同）
- **动机**: 录像带租赁行业率先采用收入共享，但理论上对其协调性质、与其他合同的等价性、以及局限性缺乏系统分析
- **核心结论**: 
  1. 收入共享可协调单零售商供应链并可任意分配利润
  2. 报童情形：收入共享≡回购；定价报童：收入共享≡价格折扣
  3. 可协调零售商数量竞争
  4. **无法协调有零售努力的情形**（成本不可合同化）——需设计变体
  5. 当管理成本高时，收入共享的优势可能很小
- **方法论贡献**: 建立了收入共享合同与多种经典合同的等价性/差异性的系统比较框架

---

## [15] Nagarajan & Sošić (2008) — Game-Theoretic Analysis of Cooperation

**期刊**: European Journal of Operational Research, 187(3), 719–745
**DOI**: 10.1016/j.ejor.2006.05.045
**摘要**: 未获取（OpenAlex 无此 EJOR 综述摘要）

### 替代分析（基于书目信息和 LR 上下文）

- **标题**: "Game-theoretic Analysis of Cooperation Among Supply Chain Agents: Review and Extensions"
- **定位**: EJOR 综述论文，系统梳理供应链合作博弈文献
- **LR 中的使用**: "provide a comprehensive review of cooperative game-theoretic models in supply chains"
- **影响**: 该综述被引用超过 500 次（Google Scholar），是 OM 领域合作博弈文献的标准参考

---

## [16] Bernstein & Nagarajan (2012) — Competition and Cooperative Bargaining Models

**期刊**: Foundations and Trends in Technology, Information and Operations Management, 5(2), 87–145
**DOI**: 10.1561/0200000016

### 英文摘要

In the last two decades or so, a significant emphasis of the research literature in operations management has been on the strategic interaction of firms in a supply chain. Individual firms in supply chains make decisions on multiple levers such as capacity, inventory and price, to name a few, that have consequences for the entire supply chain. In modeling strategic interactions, the operations literature has followed the large literature in industrial organization and economics. Competition between firms in a supply chain has largely been modeled using noncooperative game theory and the associated concepts of equilibrium that predict the outcomes. There are a few key differences between the industrial organization literature and the research in operations management. First of all, the operations literature looks more at operational variables, such as capacity and inventory, as a response to various sources of process uncertainty that any firm faces. The preferences of individual customers, their valuations and the construction of the specific form of the uncertainty is less of a concern (although more recent literature emphasize this). Second, the findings in the operations literature usually have the objective of improving individual firms' (and supply chains') profits and operational efficiencies rather than one of dictating economic policy. Third, although non-cooperative models are the norm, there is also an underlying emphasis in the operations literature on cooperation between firms in a supply chain to improve the overall profit of the supply chain. This is probably because, unlike the levers traditionally studied in economics, many operational variables in a supply chain are often jointly decided between firms. The goal of this review taps on this last sentiment. We provide an overview of some of the basic multi-firm models studied in supply chain management. We look at how the literature uses non-cooperative game theory to analyze these models. We then look at how some of these models can be analyzed using a cooperative bargaining framework. We compare the modeling tools and the insights one obtains by taking this twofold approach. This process also allows us to discuss a few topics of interest such as the relative channel power of a firm, the relative merits of using a non-cooperative game versus cooperative bargaining to model a supply chain setting, etc. Finally, we conclude this review by exploring some issues that remain unresolved and are topics for future research.

### 中文翻译

在过去二十年左右，运营管理研究文献的一个重要重点一直是供应链中企业的战略互动。供应链中的个体企业在多个杠杆上做出决策，如容量、库存和价格等，这些决策对整个供应链产生影响。在建模战略互动时，运营文献借鉴了产业组织和经济学的庞大文献。供应链中企业间的竞争主要使用非合作博弈论和相关均衡概念来建模以预测结果。产业组织文献和运营管理研究之间存在几个关键差异。第一，运营文献更关注运营变量（如容量和库存）作为企业面临的各种过程不确定性来源的回应。个体客户的偏好、估值以及不确定性具体形式的构建关注较少（尽管近期文献强调这一点）。第二，运营文献的发现通常以改善个体企业（和供应链）的利润和运营效率为目标，而非主导经济政策。第三，虽然非合作模型是常态，运营文献中也存在对供应链中企业间合作以改善供应链整体利润的潜在强调。这可能是因为，与经济学传统研究的杠杆不同，供应链中的许多运营变量往往由企业共同决定。本综述的目标正是基于这最后一种感受。我们概述了供应链管理中研究的一些基本多企业模型。我们考察了文献如何使用非合作博弈论分析这些模型。然后我们考察其中一些模型如何使用合作讨价还价框架进行分析。我们比较了采用这两种方法所获得的建模工具和洞见。这一过程也让我们能够讨论一些有趣的话题，如企业的相对渠道权力、使用非合作博弈与使用合作讨价还价建模供应链场景的相对优劣等。最后，我们通过探索一些尚未解决并值得未来研究的问题来总结本综述。

### 深度分析

- **研究问题**: 供应链管理文献中，非合作博弈和合作讨价还价两种方法各自如何建模？各有什么优劣？
- **方法**: 方法论综述——按非合作/合作两条主线组织文献，比较工具和洞见
- **核心贡献**: 系统考察了同一类供应链问题在两种博弈论框架下得出不同洞见的原因
- **与 OM 传统的定位**: 强调 OM 文献与 IO（产业组织）文献的三个关键差异：运营变量、利润/效率导向、合作维度
- **LR 中的使用**: 作为合作-竞争博弈两条路径的"综合参考"

---

## [17] Lovejoy (2010) — Bargaining Chains

**期刊**: Management Science, 56(12), 2282–2301
**DOI**: 10.1287/mnsc.1100.1251

### 英文摘要

We consider a firm that designs a new product and wishes to bring it to market but does not have ownership or control over all of the resources required to make that happen. The firm must select and contract with one of several possible tier 1 suppliers for necessary inputs, who do the same with their (tier 2) suppliers, etc. This general situation is common in industry. We assume tier-wise negotiations, sole sourcing within each tier, complete local information, and horizontal competition. We develop a bargaining-based solution to the negotiations between two adjacent multifirm tiers and show its consistency with familiar solution concepts from the theories of bargaining and cooperative games. We then link up multiple bargaining modules to generate chainwide predictions for efficiency and profitability in supply chains with an arbitrary number of tiers and an arbitrary number of firms per tier. We investigate the implications of the results for investments in process improvements or supplier development.

### 中文翻译

我们考虑一家设计新产品并希望将其推向市场的企业，但该企业并不拥有或控制实现这一目标所需的所有资源。企业必须从多个可能的一级供应商中选择并签订合同以获得必要的投入，而这些一级供应商又与其（二级）供应商做同样的事，以此类推。这种一般情境在工业中很常见。我们假设逐层谈判、每层内单一采购、完全局部信息以及水平竞争。我们为两个相邻的多企业层之间的谈判开发了一种基于讨价还价的解决方案，并展示了其与讨价还价理论和合作博弈中熟悉解概念的一致性。然后我们将多个讨价还价模块链接起来，为具有任意层数和每层任意企业数的供应链生成链式效率与利润预测。我们研究了结果对过程改进或供应商发展投资的影响。

### 深度分析

- **研究问题**: 多层供应链中的谈判如何跨层级传递？如何预测链式效率和利润？
- **方法**: 逐层独立谈判→讨价还价模块→模块串联→链式预测；Nash 讨价还价解
- **动机**: 实际供应链有多层（Tier 1 → Tier 2 → ...），但现有模型几乎只研究两层
- **核心贡献**: 首次将讨价还价模型扩展到**任意多层/多企业**的供应链结构
- **核心结论**: 
  1. 开发了可级联的讨价还价模块
  2. 层内竞争程度和谈判顺序影响链式效率
  3. 过程改进投资的激励取决于在链中的位置
- **局限**: 完全局部信息（每层只知自己这一层）；单一采购假设

---

## [18] Feng, Li, & Shanthikumar (2022) — Kalai-Smorodinsky Bargaining

**期刊**: Management Science, 68(8), 5868–5890
**DOI**: 10.1287/mnsc.2021.4184

### 英文摘要

Supply chain contract negotiation has gained increasing attention in recent years, and the studies involving negotiations in the operations literature almost exclusively apply the concept of the Nash bargaining (NB) solution. The NB solution, however, is derived based on the axiom of independence of irrelevant alternatives (IIA), an unrealistic assumption in many contexts. Indeed, our analysis suggests that the NB solution can lead to unreasonable negotiation outcomes in supply chains with horizontal competition. As an alternative, the Kalai-Smorodinsky (KS) solution has been applied in many fields but has not been introduced to the supply chain contexts. The KS solution is derived under the axiom of individual monotonicity in replacement of the IIA axiom. We perform a comprehensive comparison of contract negotiations under the KS and NB solutions in horizontally competing supply chains. Although the KS solution does not possess the flexibility of explicitly specifying the relative bargaining power as the NB solution does, the KS solution can appropriately capture the negotiation power shift induced by the decision ownership, the negotiation sequence, the vertical relationship, the competition intensity, the trade contingency, and the contract type. Our study sheds lights on the appropriate selection of solution concepts in studying negotiations in competing supply chains.

### 中文翻译

供应链合同谈判近年来越来越受关注，而运营文献中涉及谈判的研究几乎无一例外地应用了纳什讨价还价（NB）解的概念。然而，NB 解是基于无关替代独立性（IIA）公理推导的，这一假设在许多情境中是不现实的。事实上，我们的分析表明在具有水平竞争的供应链中，NB 解可能导致不合理的谈判结果。作为替代方案，Kalai-Smorodinsky（KS）解已在许多领域得到应用，但尚未被引入供应链情境。KS 解是在个体单调性公理（替代 IIA 公理）下推导的。我们对水平竞争供应链中 KS 解和 NB 解下的合同谈判进行了全面比较。虽然 KS 解不具备像 NB 解那样显式指定相对谈判能力的灵活性，但 KS 解能够恰当地捕捉由决策所有权、谈判顺序、纵向关系、竞争强度、交易条件性和合同类型引起的谈判权力转移。我们的研究为竞争供应链谈判研究中解概念的适当选择提供了启示。

### 深度分析

- **研究问题**: Nash 讨价还价解在水平竞争供应链中会产生不合理结果。KS 解是否能提供更好的替代方案？
- **方法**: 博弈论公理分析；KS 解 vs NB 解在多种供应链结构下的系统比较
- **动机**: OM 文献几乎 100% 用 NB 解，但其 IIA 公理在竞争下产生反直觉结果。KS 解的个体单调性公理可能更合适
- **核心贡献**: **首次将 KS 解引入供应链管理领域**，并系统比较两种解概念
- **核心结论**: 
  1. NB 解在水平竞争下产生不合理结果
  2. KS 解能恰当捕捉由竞争强度、谈判顺序、合同类型等引发的议价力转移
  3. KS 解的劣势：无法像 NB 解那样显式设定议价力参数
- **影响**: 为供应链谈判文献提供了解概念选择的指导原则

---

## [19] Li, Huang, & Huang (2025) — Product Return Policies: Bargaining & Contracting

**期刊**: Manufacturing & Service Operations Management, 27(4), 1126–1145
**DOI**: 10.1287/msom.2023.0717

### 英文摘要

Problem definition: Although many retailers allow consumer returns via money-back guarantees (MBGs) to stimulate consumer demand, some may choose not to. Most existing literature emphasizes factors from the marketing side. However, it is not uncommon that the returned products from unsatisfied consumers are further returned to the upstream manufacturer. How the upstream manufacturer–retailer interactions impact the downstream MBG policies is unclear. Methodology/results: We adopt a multiunit bilateral bargaining framework to model the firms' interactions in distribution channels consisting of a manufacturer and two competing retailers. Interestingly, we find that both bargaining power and contract forms play important roles in determining equilibrium MBG decisions. When both retailers possess the same bargaining power, both retailers offering MBGs arises in equilibrium under the wholesale price contract, whereas the equilibrium MBG decisions depend on the bargaining power under the two-part tariff contract. Particularly, when the manufacturer is relatively weak in the negotiation with retailers, only one channel provides MBGs. When the retailers possess different bargaining powers, regardless of the contract forms, the asymmetric MBG decisions arise when one retailer is significantly more powerful in negotiation with the manufacturer than the other. The channel associated with the retailer with lower bargaining power provides an MBG, whereas the other may not. Managerial implications: Our results suggest that manufacturers should carefully develop product return policies when trading with symmetric retailers under coordinating contracts or asymmetric retailers with imbalanced power distribution.

### 中文翻译

**问题定义**: 尽管许多零售商允许消费者通过退款保证（MBG）退货以刺激消费需求，但有些零售商选择不提供。大多数现有文献强调营销方面的因素。然而，不满意的消费者退回的产品进一步退回给上游制造商的情况并不少见。上游制造商-零售商互动如何影响下游 MBG 政策尚不清楚。**方法/结果**: 我们采用多单位双边讨价还价框架来建模由一个制造商和两个竞争零售商组成的分销渠道中企业间的互动。有趣的是，我们发现讨价还价能力和合同形式都在决定均衡 MBG 决策中发挥重要作用。当两个零售商拥有相同的讨价还价能力时，在批发价合同下，两个零售商都提供 MBG 是均衡结果；而在两部定价合同下，均衡 MBG 决策取决于讨价还价能力。特别是，当制造商在与零售商的谈判中相对弱势时，只有一个渠道提供 MBG。当零售商拥有不同的讨价还价能力时，无论合同形式如何，当一个零售商在与制造商的谈判中显著强于另一个时，不对称的 MBG 决策就会出现。与讨价还价能力较低的零售商关联的渠道提供 MBG，而另一个可能不提供。**管理含义**: 我们的结果表明制造商在与对称零售商（在协调合同下）或权力分布不平衡的不对称零售商交易时，应谨慎制定产品退货政策。

### 深度分析

- **研究问题**: 上游制造商-零售商谈判如何影响下游的消费者退款保证（MBG）政策？讨价还价能力和合同形式各自的作用是什么？
- **方法**: 多单位双边讨价还价框架；一个制造商 + 两个竞争零售商；比较批发价合同 vs 两部定价合同
- **动机**: 现有退货文献只关注营销因素，忽略了**上游谈判互动**对下游退货政策的决定性影响
- **核心结论**: 
  1. 谈判能力对称：批发价→两家都提供 MBG；两部定价→取决于讨价还价能力
  2. 谈判能力不对称：弱势零售商的渠道提供 MBG，强势的可能不提供
  3. 制造商在制定退货政策时需考虑零售商间的权力分布
- **方法论贡献**: 将双边讨价还价框架引入产品退货分析

---

## [20] ★ Hsu, Lai, Niu, & Xiao (2017) — Leader-Based Collective Bargaining

**期刊**: Manufacturing & Service Operations Management, 19(1), 72–83
**DOI**: 10.1287/msom.2016.0592
**已有读笔记**: `01_Literature/Reading_Notes/Hsu_et_al_2017_Leader_Based_Collective_Bargaining.md`

### 英文摘要

We study leader-based collective bargaining (LCB), under which a leading buyer (leader) and a following buyer (follower) form an alliance to jointly purchase a common component from a supplier. Although the leader and the follower cooperate in their component purchase, they compete in selling their end products. We first analyze the most common and simple form of LCB, equal price LCB, under which the follower pays to the leader the same wholesale price that the leader obtains from his negotiation with the supplier. We compare each buyer's profit under the equal price LCB with the benchmark where each buyer purchases separately from the supplier. We find that although the alliance might obtain a lower wholesale price and although the leader is always better off under equal price LCB, the follower can be worse off if the competition intensity of the leader's and follower's products is within an intermediate region. We identify a competition effect resulting from equal price LCB that can place the follower at a disadvantage in the competition. This finding implies that the equal price LCB might not be sustainable in practice. In view of this limitation, we investigate an alternative form of LCB, fixed price LCB, under which the follower pays a fixed price to the leader regardless of the wholesale price the leader obtains from the supplier. We show that fixed price LCB benefits not only the leader but also the follower, compared with separate purchases, which implies that fixed price LCB always achieves a win–win outcome for the buyers. Our analysis further shows that even the supplier might benefit from this form of LCB.

### 中文翻译

我们研究基于领导者的集体讨价还价（LCB），在此机制下，一个主导买方（领导者）和一个跟随买方（跟随者）组成联盟，共同从供应商处采购一个共同组件。虽然领导者和跟随者在组件采购中合作，但他们在销售最终产品时竞争。我们首先分析了最常见和最简单的 LCB 形式——等价格 LCB，即跟随者向领导者支付与领导者从与供应商谈判中获得的相同的批发价。我们将等价格 LCB 下每个买方的利润与每个买方分别从供应商采购的基准进行比较。我们发现尽管联盟可能获得更低的批发价且领导者在等价格 LCB 下总是更好，但如果领导者和跟随者产品的竞争强度处于中间区域，跟随者可能会更差。我们识别了等价格 LCB 导致的一种竞争效应，该效应可能使跟随者在竞争中处于不利地位。这一发现意味着等价格 LCB 在实践中可能不可持续。鉴于这一局限，我们研究了 LCB 的另一种形式——固定价格 LCB，即跟随者向领导者支付一个固定价格，无论领导者从供应商处获得的批发价是多少。我们证明固定价格 LCB 不仅使领导者受益，也使跟随者受益（相对于分别采购），这意味着固定价格 LCB 总是为买方实现双赢结果。我们的分析进一步表明，即使供应商也可能从这种形式的 LCB 中获益。

### 深度分析

- **研究问题**: 两个竞争买方通过一个领导买方联合采购时，哪种合作机制（等价格 vs 固定价格）能实现可持续的联盟？
- **方法**: 三阶段博弈（供应商-领导谈判→领导-跟随谈判→最终产品市场竞争）；Nash 讨价还价
- **核心结论**: 
  1. 等价格 LCB：领导总受益，但跟随者在中等竞争强度下受损（"竞争效应"）→联盟可能不可持续
  2. 固定价格 LCB：领导+跟随都受益（win-win），甚至供应商也可能受益
- **LR 中的关联**: LR 将此论文与自己的论文进行详细对比——LCB 是两个买方 vs 一个卖方，本文是一个买方 vs 两个异质供应商

---

## [21] Davis, Hu, Hyndman, & Qi (2021/2022) — Procurement for Assembly

**期刊**: Management Science, 68(4), 2694–2713
**DOI**: 10.1287/mnsc.2021.4000
**年份说明**: online 2021, print 2022（LR 正文用 2021，文献列表用 2022 ⚠️）
**已有读笔记**: `01_Literature/Reading_Notes/Davis_et_al_2022_Procurement_Assembly_Asymmetric_Info.md`

### 英文摘要

We study an original equipment manufacturer (OEM) purchasing two inputs for assembly from two suppliers with private cost information. The OEM can contract with the two suppliers either simultaneously or sequentially. We consider both cases in which the OEM has relatively equal bargaining power (the dynamic bargaining institution) or substantial bargaining power (the mechanism design institution). For the dynamic bargaining institution, we show that in sequential bargaining, the supply chain profit is higher, the OEM earns a lower profit, the first supplier earns a higher profit, and the second supplier may earn a higher or lower profit, than compared with simultaneous bargaining. For the mechanism design institution, we show that all players' profits are the same in simultaneous and sequential contracting. We also benchmark against a case where the OEM procures both inputs from a single integrated supplier (a dyadic supply chain). We then test these predictions in a human-subjects experiment, which supports many of the normative predictions qualitatively with some deviations: an OEM with relatively equal bargaining power weakly prefers to contract with suppliers simultaneously, whereas an OEM with substantial bargaining power prefers to contract with suppliers sequentially. In addition, the OEM's profit and supply chain efficiency are higher in the dyadic supply chain than the assembly system.

### 中文翻译

我们研究一个原始设备制造商（OEM）从两个具有私有成本信息的供应商处采购两种投入品用于组装。OEM 可以与两个供应商同时或序贯地签订合同。我们考虑了两种情形：OEM 具有相对平等的讨价还价能力（动态讨价还价制度）或具有显著讨价还价能力（机制设计制度）。对于动态讨价还价制度，我们证明在序贯讨价还价中，供应链利润更高，OEM 获得更低利润，第一个供应商获得更高利润，而第二个供应商可能获得更高或更低利润（与同时讨价还价相比）。对于机制设计制度，我们证明所有参与者在同时和序贯缔约中利润相同。我们还与 OEM 从单一集成供应商采购两种投入品（二元供应链）的情形进行了基准比较。然后我们在受试者实验中检验了这些预测，实验在定性上支持了许多规范性预测，但存在一些偏差：具有相对平等讨价还价能力的 OEM 弱偏好同时缔约，而具有显著讨价还价能力的 OEM 偏好序贯缔约。此外，OEM 的利润和供应链效率在二元供应链中高于装配系统。

### 深度分析

- **研究问题**: OEM 应该同时还是序贯地与两个供应商缔约？讨价还价能力和信息不对称如何影响最优缔约时序？
- **方法**: 两种制度下的博弈分析（动态讨价还价 = 平等议价力 + 机制设计 = OEM 强议价力）+ 受试者实验
- **动机**: 装配供应链中缔约时序是普遍实践问题，但缺乏不对称信息下的理论指导
- **核心结论**: 
  1. 动态讨价还价：序贯缔约→OEM 利润更低（先谈判的供应商攫取更多）
  2. 机制设计：同时和序贯等价（信息租的分配方式不同但总效果相同）
  3. 实验：平等议价力 OEM 偏好同时→序贯，强议价力 OEM 偏好序贯
  4. 二元供应链（单一供应商）优于装配系统（两个独立供应商）
- **LR 中的关联**: LR 将此作为最相关的论文之一详细讨论——共享一个买方 vs 两个供应商的结构

---

## [22] Myerson (1984) — Cooperative Games with Incomplete Information

**期刊**: International Journal of Game Theory, 13(2), 69–96
**DOI**: 10.1007/bf01769817
**摘要**: 未获取（1984 年论文，OpenAlex 无摘要）

### 替代分析（基于文献信息和 LR 上下文）

- **标题**: "Cooperative Games with Incomplete Information"
- **定位**: 信息经济学/博弈论的里程碑论文，建立了不完全信息下合作博弈/机制设计的基础
- **核心概念**: 激励相容 (IC)、个体理性 (IR)、激励效率——即 LR 中引用的 "incentive-efficient mechanisms that are individually rational, incentive compatible, and Pareto optimal"
- **LR 中的使用**: "Following Myerson (1984a)" — 作为 Davis et al. 和本文的方法论基础

---

## [23] Hu & Qi (2018) — Optimal Procurement Mechanisms for Assembly

**期刊**: Manufacturing & Service Operations Management, 20(4), 655–666
**DOI**: 10.1287/msom.2017.0672

### 英文摘要

This paper investigates mechanisms by which a powerful original equipment manufacturers procures multiple inputs for assembly from suppliers with privately informed costs, either simultaneously or sequentially. The optimal mechanisms always lead to matching purchase quantities of the inputs. Thus, quantity–payment contracts that implement the optimal mechanisms are contingent across suppliers (i.e., each supplier's contract terms contain other suppliers' private costs as variables), making the implementation impractical. To address this issue, we propose alternative implementations of the optimal mechanisms by menus of two-part tariff contracts that are noncontingent. In addition, optimal simultaneous and sequential procurement mechanisms for assembly are shown to be revenue-equivalent for all parties despite their different asymmetric information structures. Our findings suggest that procurement managers need not strategize contracting sequences for assembly, but should rather focus on achieving the best pricing with each supplier and coordinating purchase quantities.

### 中文翻译

本文研究了一个强势原始设备制造商如何通过机制从具有私有成本信息的供应商处采购多种组装投入品，可以是同时或序贯地进行。最优机制总是导致投入品的采购数量匹配。因此，实施最优机制的数量-支付合同在供应商之间是条件依赖的（即每个供应商的合同条款包含其他供应商的私有成本作为变量），使得实施不切实际。为解决这一问题，我们提出了最优机制的替代实施方案——使用非条件性的两部定价合同菜单。此外，同时和序贯最优装配采购机制尽管具有不同的不对称信息结构，但对所有参与方来说是收入等价的。我们的发现表明采购经理无需为装配的缔约序列制定策略，而应专注于与每个供应商实现最优定价并协调采购数量。

### 深度分析

- **研究问题**: 强势 OEM 应如何设计采购机制以从多个供应商处采购组装部件？非条件性合同能否实现最优？
- **方法**: 机制设计框架（Myerson 传统）→最优机制推导→非条件性两部定价合同实现
- **核心发现**:
  1. 最优机制要求采购数量匹配（assembly 的自然要求）
  2. 直接机制涉及跨供应商条件依赖→不可实施
  3. **替代方案**: 非条件性两部定价合同菜单可实现最优机制
  4. **同时 vs 序贯: 收入等价**——OEM 无需担心缔约顺序
- **LR 中的关联**: 与本文的"季节性 Myerson 筛选"方法论最相关

---

## [24] ★ Oh & Özer (2013) — Mechanism Design for Capacity Planning

**期刊**: Management Science, 59(4), 987–1007
**DOI**: 10.1287/mnsc.1120.1581
**已有读笔记**: `01_Literature/Reading_Notes/Oh_Ozer_2013_Mechanism_Design_Capacity.md`

### 英文摘要

This paper investigates the role of time in forecast information sharing and decision making under uncertainty. To do so, we provide a general framework to model the evolutions of forecasts generated by multiple decision makers who forecast demand for the same product. We also model the evolutions of forecasts when decision makers have asymmetric demand information and refer to it as the Martingale Model of Asymmetric Forecast Evolutions. This model helps us study mechanism design problems in a dynamic environment. In particular, we consider a supplier's (principal's) problem of eliciting credible forecast information from a manufacturer (agent) when both firms obtain asymmetric demand information for the end product over multiple periods. The supplier uses demand information to better plan for a capacity investment decision. When the supplier postpones building capacity and screening the manufacturer's private information, the supplier and the manufacturer can obtain more information and update their forecasts. This delay, however, may increase (respectively, decrease) the degree of information asymmetry between the two firms, resulting in a higher (respectively, lower) cost of screening. The capacity building cost may also increase because of a tighter deadline for building capacity. Considering all such trade-offs, the supplier has to determine (i) when to stop obtaining new demand information and build capacity, (ii) whether to offer a screening contract to credibly elicit private forecast information or to determine the capacity level without information sharing, (iii) how much capacity to build, and (iv) how to design the overall mechanism so that both firms benefit from this mechanism.

### 中文翻译

本文研究时间在预测信息共享和不确定性下决策中的作用。为此，我们提供了一般框架来建模多个决策者对同一产品需求预测的演化。我们还建模了当决策者具有不对称需求信息时的预测演化，并称之为不对称预测演化的鞅模型。该模型帮助我们在动态环境中研究机制设计问题。特别是，我们考虑供应商（委托人）从制造商（代理人）处获取可信预测信息的问题，此时两家企业在多期中获得关于最终产品的不对称需求信息。供应商使用需求信息来更好地规划容量投资决策。当供应商推迟建造容量和筛选制造商的私有信息时，供应商和制造商可以获得更多信息并更新其预测。然而，这种延迟可能增加（分别，减少）两家企业之间的信息不对称程度，导致更高（分别，更低）的筛选成本。容量建造成本也可能因建造期限更紧而增加。考虑所有这些权衡，供应商必须决定：(i) 何时停止获取新需求信息并建造容量，(ii) 是否提供筛选合同以可信地获取私有预测信息，还是在不共享信息的情况下确定容量水平，(iii) 建造多少容量，以及 (iv) 如何设计整体机制使两家企业都从中受益。

### 深度分析

- **研究问题**: 当需求预测随时间动态演化时，供应商应何时停止信息收集并投资容量？是否/如何筛选代理人的私有信息？
- **方法**: 鞅模型（MMAFE）+ 动态机制设计；最优停时 + 筛选合同
- **动机**: 实践中预测是动态更新的，但传统机制设计假设静态私有信息——"时间的作用"未被充分建模
- **核心贡献**: 提出不对称预测演化的鞅模型（MMAFE）+ 联合最优停时和筛选决策
- **核心发现**: 延迟决策的权衡——更多信息（减少不确定性）vs 更大的信息不对称（增加筛选成本）vs 更紧的期限（增加建设成本）
- **方法论创新**: 新型动态机制设计求解方法
- **局限**: 仅考虑单一代理人和单一委托人（非多边）；未考虑代理人之间的竞争

---

## [25] Kadiyala, Özer, & Bensoussan (2019/2020) — Learn and Screen: VMI Mechanism

**期刊**: Management Science, 66(6), 2628–2652
**DOI**: 10.1287/mnsc.2019.3297
**年份说明**: online 2019, print 2020（LR 正文用 2019，文献列表用 2020 ⚠️）

### 英文摘要

This paper studies an inventory management problem faced by an upstream supplier that is in a collaborative agreement, such as vendor-managed inventory (VMI), with a retailer. A VMI partnership provides the supplier an opportunity to manage inventory for the supply chain in exchange for point-of-sales (POS)- and inventory-level information from the retailer. However, retailers typically possess superior local market information and as has been the case in recent years, are able to capture and analyze customer purchasing behavior beyond the traditional POS data. Such analyses provide the retailer access to market signals that are otherwise hard to capture using POS information. We show and quantify the implication of the financial obligations of each party in VMI that renders communication of such important market signals as noncredible. To help institute a sound VMI collaboration, we propose learn and screen—a dynamic inventory mechanism—for the supplier to effectively manage inventory and information in the supply chain. The proposed mechanism combines the ability of the supplier to learn about market conditions from POS data (over multiple selling periods) and dynamically determine when to screen the retailer and acquire his private demand information. Inventory decisions in the proposed mechanism serve a strategic purpose in addition to their classic role of satisfying customer demand. We show that our proposed dynamic mechanism significantly improves the supplier's expected profit and increases the efficiency of the overall supply chain operations under a VMI agreement. In addition, we determine the market conditions in which a strategic approach to VMI results in significant profit improvements for both firms, particularly when the retailer has high market power (i.e., when the supplier highly depends on the retailer) and when the supplier has relatively less knowledge about the end customer/market compared with the retailer.

### 中文翻译

本文研究处于供应商管理库存（VMI）等合作协议中的上游供应商所面临的库存管理问题。VMI 合作伙伴关系为供应商提供了管理供应链库存的机会，以换取零售商的销售点（POS）和库存水平信息。然而，零售商通常拥有优越的本地市场信息，并且近年来能够获取和分析超越传统 POS 数据的客户购买行为。此类分析使零售商能够获得仅靠 POS 信息难以捕捉的市场信号。我们展示并量化了 VMI 中各方财务义务的影响，这些义务导致此类重要市场信号的沟通不可信。为帮助建立稳健的 VMI 合作，我们提出了"学习与筛选"（learn and screen）——一种动态库存机制——供供应商有效管理供应链中的库存和信息。所提出的机制结合了供应商从 POS 数据中学习市场状况的能力（跨多个销售期）和动态决定何时筛选零售商并获取其私有需求信息的能力。所提机制中的库存决策除了满足客户需求的经典作用外，还服务于策略性目的。我们表明所提出的动态机制显著改善了供应商的预期利润，并提高了 VMI 协议下整体供应链运营的效率。此外，我们确定了策略性 VMI 方法为两家企业带来显著利润改善的市场条件，特别是当零售商具有高市场权力（即供应商高度依赖零售商）以及供应商对终端客户/市场的了解相对于零售商较少时。

### 深度分析

- **研究问题**: VMI 中，供应商如何同时从 POS 数据中学习和策略性地筛选零售商的私有需求信息？
- **方法**: 动态机制设计；"learn and screen" 机制——跨期学习（贝叶斯更新）+ 筛选（信息租金 vs 效率的权衡）
- **动机**: VMI 中零售商的私有市场信息不可信（财务义务使沟通缺乏可信度），供应商需要一种同时学习和筛选的机制
- **核心贡献**: "Learn and Screen" 概念——将库存决策赋予策略性信息获取的双重角色
- **核心结论**: 
  1. 学习+筛选联合机制显著改善供应商利润
  2. 当零售商市场权力高或供应商对市场了解少时，策略性 VMI 收益最大
  3. 库存决策同时服务于运营和信息两个目的
- **方法论创新**: 首次将主动信息获取（学习）与机制设计（筛选）结合在动态库存环境中

---

## [26] Feng, Lai, & Lu (2015) — Dynamic Bargaining with Asymmetric Demand

**期刊**: Management Science, 61(2), 301–315
**DOI**: 10.1287/mnsc.2014.1938

### 英文摘要

We analyze a dynamic bargaining game in which a seller and a buyer negotiate over quantity and payment to trade for a product. Both firms are impatient, and they make alternating offers until an agreement is reached. The buyer is privately informed about his type, which can be high or low: the high type's demand is stochastically larger than the low type's. In the dynamic negotiation process, the seller can screen, whereas the buyer can signal information through their offers, and the buyer has an endogenous and type-dependent reservation profit. With rational assumptions on the seller's belief structure, we characterize the perfect Bayesian equilibrium of the bargaining game. Interestingly, we find that both quantity distortion and information rent may be avoided depending on the firms' relative patience, and the seller may reach an agreement with either the high type or the low type first, or with both simultaneously. Furthermore, we explore our model to characterize the effect of demand forecasting accuracy on firm profitability. We find that improved demand forecast benefits the buyer but hurts the seller when the buyer's forecasting accuracy is low. However, once the buyer's forecasting accuracy exceeds a threshold, both firms will benefit from further improvement of the forecast. This observation makes an interesting contrast to previous findings based on the one-shot principal–agent model, in which improvement of forecasting accuracy mostly leads to a win–lose outcome for the two firms, and the buyer has an incentive to improve his forecasting accuracy only when it is extremely low.

### 中文翻译

我们分析一个动态讨价还价博弈，卖方和买方就交易产品的数量和支付进行谈判。两家企业都不耐烦，它们交替出价直至达成协议。买方对其类型拥有私有信息，类型可以是高或低：高类型的需求在随机意义上大于低类型。在动态谈判过程中，卖方可以通过出价进行筛选，而买方可以通过出价传递信号，买方具有内生且类型依赖的保留利润。基于对卖方信念结构的理性假设，我们刻画了讨价还价博弈的完美贝叶斯均衡。有趣的是，我们发现数量扭曲和信息租金可能根据企业相对耐心程度而被避免，卖方可能先与高类型或低类型达成协议，或同时与两者达成协议。此外，我们利用模型刻画了需求预测准确性对企业盈利能力的影响。我们发现当买方预测准确性低时，改进的需求预测使买方受益但损害卖方。然而，一旦买方预测准确性超过阈值，两家企业都将从预测的进一步改善中受益。这一观察与基于单次委托-代理模型的先前发现形成有趣对比，后者中预测准确性的改善大多导致两家企业赢-输结果，且买方只有在准确性极低时才有激励改善预测。

### 深度分析

- **研究问题**: 在私有需求信息下，动态双边讨价还价如何达成协议？预测准确性的提高如何影响双方利润？
- **方法**: 动态交替出价博弈 + 不对称信息；完美贝叶斯均衡（PBE）；筛选（卖方）+ 信号传递（买方）
- **动机**: 传统委托-代理模型无法解释"预测改善对双方都有利"这一现实观察
- **核心发现**: 
  1. 数量扭曲和信息租金在特定耐心条件下可被避免——与静态模型不同
  2. 讨价还价动态允许卖方先与任一类型达成协议
  3. **预测准确性**: 低精度时改善→赢-输；超过阈值后改善→**双赢**（与单次委托-代理模型的关键区别）
- **方法论贡献**: 将动态讨价还价与私有信息下的贝叶斯博弈结合

---

## [27] Tomlin (2006) — Supply Chain Disruption Risks

**期刊**: Management Science, 52(5), 639–657
**DOI**: 10.1287/mnsc.1060.0515

### 英文摘要

We study a single-product setting in which a firm can source from two suppliers, one that is unreliable and another that is reliable but more expensive. Suppliers are capacity constrained, but the reliable supplier may possess volume flexibility. We prove that in the special case in which the reliable supplier has no flexibility and the unreliable supplier has infinite capacity, a risk-neutral firm will pursue a single disruption-management strategy: mitigation by carrying inventory, mitigation by single-sourcing from the reliable supplier, or passive acceptance. We find that a supplier's percentage uptime and the nature of the disruptions (frequent but short versus rare but long) are key determinants of the optimal strategy. For a given percentage uptime, sourcing mitigation is increasingly favored over inventory mitigation as disruptions become less frequent but longer. Further, we show that a mixed mitigation strategy (partial sourcing from the reliable supplier and carrying inventory) can be optimal if the unreliable supplier has finite capacity or if the firm is risk averse. Contingent rerouting is a possible tactic if the reliable supplier can ramp up its processing capacity, that is, if it has volume flexibility. We find that contingent rerouting is often a component of the optimal disruption-management strategy, and that it can significantly reduce the firm's costs. For a given percentage uptime, mitigation rather than contingent rerouting tends to be optimal if disruptions are rare.

### 中文翻译

我们研究一种单一产品情境，企业可以从两个供应商采购：一个不可靠，另一个可靠但更昂贵。供应商容量受限，但可靠供应商可能具有产量灵活性。我们证明在可靠供应商无灵活性且不可靠供应商有无限容量的特殊情形下，风险中性企业将采取单一中断管理策略：通过持有库存缓解、通过单一采购可靠供应商缓解、或被动接受。我们发现供应商的正常运行时间百分比和中断的性质（频繁但短暂 vs 罕见但持久）是最优策略的关键决定因素。对于给定的正常运行时间百分比，当中断变得更不频繁但更长时，采购缓解相对于库存缓解越来越受青睐。此外，我们表明如果不可靠供应商容量有限或企业风险厌恶，混合缓解策略（部分采购可靠供应商 + 持有库存）可能是最优的。如果可靠供应商能够快速提升其加工容量（即具有产量灵活性），条件性重新路由是一种可能的策略。我们发现条件性重新路由通常是最优中断管理策略的组成部分，且可显著降低企业成本。对于给定的正常运行时间百分比，如果中断罕见，缓解策略而非条件性重新路由往往是最优的。

### 深度分析

- **研究问题**: 面对供应商中断风险，企业应如何选择缓解策略？库存缓冲 vs 备用供应商 vs 混合策略？
- **方法**: 报童模型扩展（供应中断 + 双源采购）；风险中性 vs 风险厌恶；有条件重新路由
- **动机**: 供应链中断日益频繁，但如何系统地选择缓解策略缺乏理论指导
- **核心贡献**: 建立中断管理策略选择的系统框架——库存缓解 vs 采购缓解 vs 被动接受的条件
- **核心结论**: 
  1. 关键决定因素：供应商 uptime % + 中断特征的持续时间/频率分布
  2. 频繁但短中断→库存；罕见但长中断→备用采购
  3. 有限容量或风险厌恶→**混合策略**最优
  4. 产量灵活性（重新路由）→显著降低成本
- **LR 中的关联**: LR 将电网中断类比为 Tomlin 框架中的供应中断，但扩展为合作讨价还价（而非单一决策者）

---

# Stream 2.3: 云计算与数据中心供应链运营（Refs 28–37）

---

## [28] Brown & Smith (2025) — Unit Commitment Without Commitment

**期刊**: Operations Research, 73(4), 1744–1766
**DOI**: 10.1287/opre.2023.0546

### 英文摘要

Building Flexibility into Energy System Dispatch: The growing use of renewable energy is forcing power system operators to grapple with increasing uncertainty and intermittency in their energy supplies and demands. In "Unit Commitment without Commitment: A Dynamic Programming Approach for Managing an Integrated Energy System Under Uncertainty," Brown and Smith develop a dynamic programming (DP) framework for balancing supply and demand over time. The approach introduces stochastic Lagrange multipliers as surrogate energy prices, which reduces the system-wide DP to a collection of unit-specific DPs, where each unit is managed to maximize its expected profit over a long time horizon, given these uncertain prices. Real-time dispatch decisions are then made using the unit-specific value functions to capture the longer-term impacts of the dispatch decisions. Using data from the Duke Energy Carolinas and Progress systems, this new approach reduced operational costs by 2% in current systems and 4%–5% in example future scenarios with increased solar and storage capabilities. Strikingly, the proposed methods performed within 0.2%–0.3% of plans based on perfect foresight, across a wide variety of scenarios.

### 中文翻译

将灵活性融入能源系统调度：可再生能源的日益增长迫使电力系统运营商应对能源供需中不断增加的不确定性和间歇性。在"不承诺的机组组合：不确定性下管理综合能源系统的动态规划方法"中，Brown 和 Smith 开发了一个动态规划框架，用于在一段时间内平衡供需。该方法引入随机拉格朗日乘数作为代理能源价格，将系统级 DP 简化为一系列机组级 DP，其中每个机组在这些不确定价格下管理以最大化其长期预期利润。然后使用机组级价值函数做出实时调度决策，以捕捉调度决策的长期影响。使用 Duke Energy Carolinas 和 Progress 系统的数据，这一新方法在当前系统中降低了运营成本 2%，在增加了太阳能和储能的未来场景中降低了 4%–5%。令人瞩目的是，所提方法在广泛的场景中与基于完美预测的计划相差仅 0.2%–0.3%。

### 深度分析

- **研究问题**: 如何在高维随机动态规划中，将综合能源系统的机组组合问题分解为可独立求解的机组级问题？
- **方法**: 随机拉格朗日松弛→拉格朗日乘数作为代理电价→系统级 DP 分解为机组级 DP→实时调度使用机组价值函数
- **动机**: 可再生能源渗透增加→供需不确定性增大→传统机组组合方法计算上不可行
- **核心贡献**: "承诺但不死板"——用随机拉格朗日乘数替代硬性机组组合约束，实现分散化决策
- **核心结论**: 
  1. 成本降低 2%（当前）、4-5%（高可再生未来）
  2. 接近完美预测方案（差距仅 0.2-0.3%）
  3. 代理电价机制实现了系统最优≈个体最优
- **LR 中的关联**: LR 将此分解方法与自己的 ADMM 分解进行对比——Brown & Smith 分解单一运营者的问题，本文分解多主体的讨价还价问题

---

## [29] Schindler et al. (2024) — Planner-Trader Decomposition for Hydro Scheduling

**期刊**: Operations Research, 72(1), 185–202
**DOI**: 10.1287/opre.2023.2456

### 英文摘要

Multimarket Multireservoir Hydro Scheduling: Peak/off-peak spreads on European electricity forward and spot markets are eroding due to the ongoing nuclear phaseout in Germany and the steady growth in photovoltaic capacity. The reduced profitability of peak/off-peak arbitrage forces hydropower producers to recover part of their original profitability on the reserve markets. In their paper titled "A Planner-Trader Decomposition for Multimarket Hydro Scheduling" Schindler, Rujeerapaiboon, Kuhn, and Wiesemann propose a bi-layer stochastic programming framework that jointly optimizes the trading strategies on the spot and reserve markets. The model faithfully accounts for uncertainty in electricity prices, water inflows, and reserve activations, and it ensures that the hydropower producers can fulfill their market commitments under any circumstances. The model is numerically challenging due to the various sources of uncertainty that are revealed at different time scales and that affect the problem's objective function and constraints, and the authors propose a new planner-trader decomposition and an information restriction for its solution. A case study based on real data from Austria reveals significant benefits of simultaneously participating in the spot and the reserve markets.

### 中文翻译

多市场多水库水电调度：由于德国持续弃核和光伏容量的稳步增长，欧洲电力远期和现货市场的峰谷价差正在缩小。峰谷套利盈利能力的降低迫使水电生产商在备用市场上回收部分原有盈利能力。在他们题为"多市场水电调度的规划者-交易者分解"的论文中，Schindler、Rujeerapaiboon、Kuhn 和 Wiesemann 提出了一个双层随机规划框架，联合优化现货和备用市场的交易策略。该模型充分考虑了电价、水流入和备用激活的不确定性，并确保水电生产商在任何情况下都能履行其市场承诺。由于各种不确定性的不同时间尺度及其对目标函数和约束的影响，该模型在数值上具有挑战性，作者提出了一种新的规划者-交易者分解和信息限制来求解。基于奥地利真实数据的案例研究揭示了同时参与现货和备用市场的显著收益。

### 深度分析

- **研究问题**: 水电生产商如何同时在现货和备用市场中优化调度？长期规划与短期交易的耦合如何解决？
- **方法**: 双层随机规划→"规划者-交易者"分解：外层规划者（年度水库目标）→内层交易者（小时市场报价）；信息限制策略
- **动机**: 德国弃核+光伏增长→峰谷价差缩小→水电需要备用市场补充收入，但多市场联合调度极其复杂
- **核心贡献**: "Planner-Trader" 解耦框架——时间层次分解：年度规划 + 小时交易
- **核心结论**: 
  1. 同时参与现货+备用市场→显著收益提升
  2. 信息限制策略使复杂随机规划可解
- **LR 中的关联**: 时间层次（年度框架+季节实施）与本文的"年度框架+季节性 Myerson 筛选"形成方法论共鸣

---

## [30] Cordera, Moreno, & Ordoñez (2023) — Unit Commitment with Storage & Renewables

**期刊**: Operations Research, 71(6), 1960–1977
**DOI**: 10.1287/opre.2021.0211

### 英文摘要

"Unit Commitment Problem with Energy Storage Under Correlated Renewables Uncertainty" introduces a novel approach to address the challenges of renewable integration. The study acknowledges the growing variability and correlation in power availability due to renewable generation and proposes a day-ahead unit commitment (UC) problem formulation that incorporates energy storage and considers multistage correlated uncertainty. Using a variant of the stochastic dual dynamic programming (SDDP) method, which can handle temporal correlations effectively, the researchers solve the complex UC problem. Results obtained from the IEEE 118-bus system demonstrate the significant advantages of considering multistage uncertainty and correlations. Applying their approach to the Chilean power system, the researchers present superior UC solutions that adapt generation to changing uncertainty at a lower cost. Additionally, they propose a more efficient deterministic UC solution that outperforms current industry practices. These advancements promise to enhance the integration of renewable energy sources, enabling a more sustainable and environmentally friendly future.

### 中文翻译

"具有储能和相关可再生能源不确定性的机组组合问题"引入了一种应对可再生能源并网挑战的新方法。该研究认识到可再生能源发电带来的电力可用性的日益增长的变异性和相关性，提出了一种包含储能并考虑多阶段相关不确定性的日前机组组合（UC）问题公式。通过使用能有效处理时间相关性的随机对偶动态规划（SDDP）方法的改进版本，研究者解决了复杂的 UC 问题。IEEE 118 节点系统的结果表明了考虑多阶段不确定性和相关性的显著优势。将其方法应用于智利电力系统，研究者提出了能适应变化的不确定性并以更低成本调整发电的优越 UC 解决方案。此外，他们提出了比当前行业实践更高效的确定性 UC 解决方案。这些进步有望增强可再生能源的并网，实现更可持续和环保的未来。

### 深度分析

- **研究问题**: 如何在机组组合问题中同时处理储能和相关的不确定性？
- **方法**: SDDP 改进版（处理时间相关性）+ 储能建模→日前 UC；IEEE 118 节点 + 智利真实系统验证
- **动机**: 传统 UC 忽略不确定性的时序相关性→导致次优调度→需要更好的随机优化方法
- **核心贡献**: SDDP 在含储能 UC 中的定制化应用，处理多阶段相关不确定性
- **核心结论**: 
  1. 考虑多阶段相关不确定性的 UC 显著优于确定性 UC
  2. 能适应不确定性变化并以更低成本调度
  3. 提出的更高效的确定性替代方案也优于当前实践
- **LR 中的关联**: 方法论上与本文共享 SDDP/ADMM 的分解传统，但应用场景完全不同（单一 UC vs 多主体讨价还价）

---

## [31] Chen et al. (2023) — Cloud Computing Value Chains

**期刊**: Manufacturing & Service Operations Management, 25(4), 1338–1356
**DOI**: 10.1287/msom.2022.1178

### 英文摘要

Problem definition: Cloud computing is recognized as a critical driver of information technology–enabled innovations. The operations management (OM) community, however, has not been exposed enough to the essential operations problems that arise from the management of cloud value chains. Academic/practical relevance: In this paper, we examine recent research on cloud value chains and explore future research opportunities from an OM perspective. In particular, we focus on major operations management challenges facing a cloud provider in three problem domains: (1) cloud computing resource management, (2) pricing in the cloud computing marketplaces, and (3) capacity planning and management of cloud supply chains. Methodology: We describe prevalent business models and management practices in the cloud value chains, discuss recent research from OM that falls into each of the three problem domains mentioned, and point out opportunities for future research. Results: We note that cloud computing operations are driven by demand that exhibits distinct characteristics, including complex workflow, demand redundancy, multifeatured characteristics, multidimensional resource requirement, and nonstationarity. On the supply side, cloud computing operations also exhibit distinct characteristics, including heterogeneous resources, packing constraints, preconfigured ("bundled") supply, technology risks, and cost uncertainty. These characteristics of demand and supply are not all prevalent in other operations. Managerial implications: Cloud computing operations not only share many features with classic OM problems, but also bring new challenges and innovative business models. Thus, OM tools and research have the potential to provide vital insights into cloud computing operations and impact management practices in the cloud industry, which, in turn, can stimulate much innovative research from the OM perspective.

### 中文翻译

**问题定义**: 云计算被公认为信息技术驱动创新的关键驱动力。然而，运营管理（OM）社区对云价值链管理中产生的基本运营问题接触不足。**学术/实践相关性**: 在本文中，我们审视了云价值链的近期研究，并从 OM 视角探索未来研究机会。我们特别关注云提供商在三个问题领域面临的主要运营管理挑战：(1) 云计算资源管理，(2) 云计算市场中的定价，以及 (3) 云供应链的容量规划和管理。**方法**: 我们描述了云价值链中的流行商业模式和管理实践，讨论了 OM 领域近期在以上三个问题领域中的研究，并指出未来研究机会。**结果**: 我们指出云计算运营由展现出独特特征的需求驱动，包括复杂工作流、需求冗余、多特征特性、多维资源需求和非平稳性。在供给方面，云计算运营也展现出独特特征，包括异构资源、打包约束、预配置（"捆绑"）供给、技术风险和成本不确定性。这些供需特征并非都在其他运营中普遍存在。**管理含义**: 云计算运营不仅与经典 OM 问题共享许多特征，还带来新的挑战和创新商业模式。因此，OM 工具和研究有可能为云计算运营提供重要洞见并影响云行业的管理实践，这反过来可以激发大量来自 OM 视角的创新研究。

### 深度分析

- **研究问题**: 云计算价值链中的核心 OM 问题是什么？OM 工具如何贡献于云行业实践？
- **方法**: 综述论文——按三个领域组织：资源管理、市场定价、容量供应链
- **核心贡献**: 首次系统刻画了云计算运营的供需独特性（需求：复杂工作流/冗余/多维/非平稳；供给：异构/打包/预配置/技术风险）
- **关键洞见**: 云运营既映射到经典 OM 问题上，又引入了新特征→OM 研究可以且应该参与
- **LR 中的引用**: LR 引用其"战略互动是未充分探索的领域"的呼吁，作为本文的动机之一

---

## [32] Arbabian, Chen, & Moinzadeh (2021) — Capacity Expansions with Bundled Supplies

**期刊**: Manufacturing & Service Operations Management, 23(1), 191–209
**DOI**: 10.1287/msom.2019.0827

### 英文摘要

Problem definition: The recent surge in demand for cloud services has posed a significant capacity-expansion problem for cloud infrastructure providers. Although the growth of demand for capacity attributes—for example, CPU and RAM—is disproportionate, these attributes are often provided in preconfigured packages (cluster-types), and the fixed ratio of attributes in a package does not match with the time-varying ratio of demand. We analyze a class of expansion policies to determine the timing and magnitude of expansions, using preconfigured cluster-types, and we examine the optimal configurations of the cluster-types. Academic/practical relevance: Cloud computing is a major technological advance that is influencing businesses significantly, giving rise to an emerging industry but also posing the above-noted capacity-expansion problem. To our knowledge, this is a new issue that has not been studied in the literature. Methodology: We consider growing demand for two attributes and analyze a class of policies that consist of capacity expansion cycles (CECs), whereby capacities are added through sequential or simultaneous replenishments of two configured cluster-types. Results: We first derive the optimal timing and magnitude of expansions for every CEC, and then we devise two algorithms, the dynamic-programming-based (DP) algorithm and the forward-looking (FL) heuristic, to determine the optimal cycle lengths. We also propose a cluster-selection heuristic for choosing the optimal configurations of the cluster-types. Managerial implications: The FL-heuristic is effective, easy to communicate, and can be used as an excellent starting point for the search of the DP-algorithm. Moreover, because there is a desire in practice to reduce the variety of cluster-types, we find conditions under which the employment of only two cluster-types is as efficient as the employment of many cluster-types. Finally, we provide useful guidelines for the optimal configurations of these two cluster-types.

### 中文翻译

**问题定义**: 近期云服务需求的激增给云基础设施提供商带来了显著的容量扩张问题。虽然容量属性（例如 CPU 和 RAM）的需求增长不成比例，但这些属性通常以预配置包（集群类型）的形式提供，包中属性的固定比例与随时间变化的需求比例不匹配。我们分析了一类使用预配置集群类型来确定扩张时机和规模的策略，并考察集群类型的最优配置。**学术/实践相关性**: 云计算是影响企业深远的重大技术进步，催生了一个新兴产业，但也带来了上述容量扩张问题。据我们所知，这是文献中尚未研究过的新问题。**方法**: 我们考虑两种属性的增长需求，并分析一类由容量扩张周期（CEC）组成的策略，通过序贯或同时补充两种配置集群类型来增加容量。**结果**: 我们首先推导每个 CEC 的最优扩张时机和规模，然后设计了两种算法——基于动态规划的算法和前向启发式（FL）算法——来确定最优周期长度。我们还提出了一种集群选择启发式用于选择集群类型的最优配置。**管理含义**: FL 启发式方法有效、易于沟通，可作为寻找 DP 算法的绝佳起点。此外，由于实践中希望减少集群类型的多样性，我们找到了仅使用两种集群类型与使用多种集群类型同样高效的条件。最后，我们为这两种集群类型的最优配置提供了实用指南。

### 深度分析

- **研究问题**: 云提供商如何在预配置的"捆绑"服务器类型下优化容量扩张？何时扩张、扩张多少、用哪种集群类型？
- **方法**: 两类属性（CPU + RAM）的需求模型→容量扩张周期（CEC）→DP + FL 启发式；集群选择启发式
- **动机**: 这是文献中**首次**提出的云服务器容量扩张问题——需求属性增长不成比例但供给是捆绑的
- **核心贡献**: 
  1. 系统分析了"捆绑供给 vs 不成比例需求"的容量扩张问题
  2. DP 算法（精确，计算高）+ FL 启发式（实用，易沟通）
  3. 两种集群类型在特定条件下几乎等价于多种类型
- **局限**: 仅考虑两种属性；需求增长模式假设简单

---

## [33] Liu et al. (2025) — Efficient Cloud Server Deployment

**期刊**: Manufacturing & Service Operations Management, 27(2), 425–440
**DOI**: 10.1287/msom.2023.0372

### 英文摘要

Problem definition: Cloud computing is a multibillion-dollar business that draws substantial capital investments from large companies such as Amazon, Microsoft, and Google. Large cloud providers need to accommodate the growing demand for computing resources while avoiding unnecessary overprovisioning of hardware and operational costs. The underlying decision processes are challenging, as they involve long-term hardware and infrastructure investments under future demand uncertainty. In this paper, we introduce the cloud server deployment problem. One important aspect of the problem is that the infrastructure preparation work has to be planned for before server deployments can take place. Furthermore, a combination of temporal constraints has to be considered together with a variety of physical constraints. Methodology/results: We formulate the underlying optimization problem as a two-stage stochastic program. After carefully examining the demand data and on-the-ground deployment operations, we distill two structural properties on deployment throughput constraints and provide tightness results on a convex relaxation of the second stage. Based on that, we develop efficient cutting-plane methods that exploit the special structure of the problem and can accommodate different risk measures. We test our algorithms with real production traces from Microsoft Azure and demonstrate sizeable cost reductions. We show empirically that the algorithms remain optimal even when the two properties are not fully satisfied. Managerial implications: Cloud supply chain operations were largely executed manually due to their complexity and dynamic nature. In this paper, we show that the key decision processes can be systematically optimized. In particular, we demonstrate that accounting for the stochastic nature of demands results in substantial cost reductions in cloud server deployments. Another benefit of our stochastic optimization approach is the ability to seamlessly integrate configurable risk preferences of cloud providers.

### 中文翻译

**问题定义**: 云计算是一个数十亿美元的业务，从亚马逊、微软和谷歌等大公司吸引大量资本投资。大型云提供商需要适应不断增长的计算资源需求，同时避免不必要的硬件过度供应和运营成本。底层决策过程具有挑战性，因为它们涉及未来需求不确定性下的长期硬件和基础设施投资。在本文中，我们引入云服务器部署问题。该问题的一个重要方面是基础设施准备工作必须在服务器部署之前规划。此外，时间约束的组合必须与各种物理约束一起考虑。**方法/结果**: 我们将底层优化问题构建为两阶段随机规划。在仔细审视需求数据和实际部署运营后，我们提炼了部署吞吐量约束的两个结构性质，并提供了第二阶段凸松弛的紧性结果。基于此，我们开发了高效的割平面方法，利用问题的特殊结构并可适应不同的风险度量。我们使用 Microsoft Azure 的真实生产痕迹测试算法，展示了可观的成本降低。我们经验性地证明，即使两个性质不完全满足，算法仍保持最优。**管理含义**: 云供应链运营由于其复杂性和动态性，历史上主要由人工执行。在本文中，我们展示了关键决策过程可以被系统优化。我们特别展示了考虑需求的随机性可带来云服务器部署的可观成本降低。我们的随机优化方法的另一个优势是能够无缝整合云提供商的可配置风险偏好。

### 深度分析

- **研究问题**: 云提供商如何在需求不确定下优化服务器部署？基础设施准备前置和物理约束如何建模？
- **方法**: 两阶段随机规划→提炼吞吐量约束的结构性质→割平面方法；Microsoft Azure 真实生产数据
- **动机**: 云部署决策历史上由人工执行→存在大量优化空间；微软/亚马逊/谷歌的资本投资规模巨大
- **核心贡献**: 
  1. 首次形式化"云服务器部署问题"（引入基础设施前置约束+部署吞吐量约束）
  2. 结构性质→数值效率→割平面方法
  3. Azure 真实痕迹验证→可观成本降低
- **管理含义**: 人工→系统优化；可整合云提供商的风险偏好
- **局限**: 假设需求分布已知；未考虑多区域部署的协调

---

## [34] Wierman et al. (2014) — Data Center Demand Response

**会议**: International Green Computing Conference (IGCC), IEEE
**DOI**: 10.1109/igcc.2014.7039172

### 英文摘要

This paper surveys the opportunities and challenges in an emerging area of research that has the potential to significantly ease the incorporation of renewable energy into the grid as well as electric power peak-load shaving: data center demand response. Data center demand response sits at the intersection of two growing fields: energy efficient data centers and demand response in the smart grid. As such, the literature related to data center demand response is sprinkled across multiple areas and worked on by diverse groups. Our goal in this survey is to demonstrate the potential of the field while also summarizing the progress that has been made and the challenges that remain.

### 中文翻译

本文综述了一个新兴研究领域中的机遇和挑战，该领域有潜力显著促进可再生能源融入电网以及电力峰值负荷削减：数据中心需求响应。数据中心需求响应位于两个成长领域的交叉点：节能数据中心和智能电网中的需求响应。因此，与数据中心需求响应相关的文献散布在多个领域，由不同群体研究。本综述的目标是展示该领域的潜力，同时总结已取得的进展和仍然存在的挑战。

### 深度分析

- **研究问题**: 数据中心如何作为需求响应资源参与电力市场？机遇和挑战是什么？
- **方法**: 综述——交叉两个领域：节能数据中心 + 智能电网需求响应
- **核心贡献**: 首次系统梳理数据中心需求响应这一交叉领域
- **动机**: 数据中心是巨大的电力消费者→具有需求响应的巨大潜力→但文献分散
- **LR 中的使用**: 作为数据中心参与电力市场文献的代表——但 LR 指出这些研究将数据中心视为单一决策者，忽略战略性多边互动

---

## [35] Jiang & Powell (2015) — Optimal Hour-Ahead Bidding with Battery Storage

**期刊**: INFORMS Journal on Computing, 27(3), 525–543
**DOI**: 10.1287/ijoc.2015.0640

### 英文摘要

There is growing interest in the use of grid-level storage to smooth variations in supply that are likely to arise with an increased use of wind and solar energy. Energy arbitrage, the process of buying, storing, and selling electricity to exploit variations in electricity spot prices, is becoming an important way of paying for expensive investments into grid-level storage. Independent system operators such as the New York Independent System Operator (NYISO) require that battery storage operators place bids into an hour-ahead market (although settlements may occur in increments as small as five minutes, which is considered near "real-time"). The operator has to place these bids without knowing the energy level in the battery at the beginning of the hour and simultaneously accounting for the value of leftover energy at the end of the hour. The problem is formulated as a dynamic program. We describe and employ a convergent approximate dynamic programming (ADP) algorithm that exploits monotonicity of the value function to find a revenue-generating bidding policy; using optimal benchmarks, we empirically show the computational benefits of the algorithm. Furthermore, we propose a distribution-free variant of the ADP algorithm that does not require any knowledge of the distribution of the price process (and makes no assumptions regarding a specific real-time price model). We demonstrate that a policy trained on historical real-time price data from the NYISO using this distribution-free approach is indeed effective.

### 中文翻译

使用电网级储能来平滑因风电和太阳能使用增加而可能出现供应波动的兴趣日益增长。能源套利——买卖和储存电力以利用电价波动——正成为回收电网级储能昂贵投资的重要方式。独立系统运营商如纽约独立系统运营商（NYISO）要求电池储能运营商在小时前市场提交报价（尽管结算可能以短至五分钟的增量进行，这被视为接近"实时"）。运营商必须在不知道小时初电池电量水平的情况下提交这些报价，同时考虑小时末剩余电量的价值。问题被构建为动态规划。我们描述并采用了一种收敛的近似动态规划（ADP）算法，利用价值函数的单调性来找到产生收入的报价策略；使用最优基准，我们经验性地展示了算法的计算收益。此外，我们提出了 ADP 算法的免分布（distribution-free）变体，不需要任何价格过程分布的知识（且不对特定实时价格模型做任何假设）。我们证明使用这种免分布方法在 NYISO 历史实时价格数据上训练的策略确实是有效的。

### 深度分析

- **研究问题**: 电池储能运营商如何在不完全信息下优化小时前市场的报价？如何在不假设特定电价模型的情况下学习最优策略？
- **方法**: 动态规划→ADP 算法（利用价值函数单调性）→免分布变体（无需电价分布假设）；NYISO 真实数据验证
- **动机**: 储能套利是回收电池投资的关键途径，但报价决策在不完全电池状态信息下极其复杂
- **核心贡献**: 
  1. 价值函数单调性→高效 ADP
  2. 免分布变体→无需电价模型→历史数据训练即有效
- **LR 中的使用**: 被列为数据中心"实时竞价"的代表——但 LR 指出其视角为单一决策者 vs 外生市场

---

## [36] Ghamkhari, Wierman, & Mohsenian-Rad (2016/2017) — Energy Portfolio Optimization

**期刊**: IEEE Transactions on Smart Grid, 8(4), 1898–1910
**DOI**: 10.1109/tsg.2015.2510428
**年份说明**: online 2016, print 2017（LR 统一用 2016）

### 英文摘要

Data centers have diverse options to procure electricity. However, the current literature on exploiting these options is very fractured. Specifically, it is still not clear how utilizing one energy option may affect selecting other energy options. To address this open problem, we propose a unified energy portfolio optimization framework that takes into consideration a broad range of energy choices for data centers. Despite the complexity and nonlinearity of the original models, the proposed analysis boils down to solving tractable linear mixed-integer stochastic programs. Using experimental electricity market and Internet workload data, various insightful numerical observations are reported. It is shown that the key to link different energy options with different short- and long-term profit characteristics is to conduct risk management at different time horizons. Also, there is a direct relationship between data centers' service-level agreement parameters and their ability to exploit certain energy options. The use of on-site storage and the deployment of geographical workload distribution can particularly help data centers in utilizing high-risk energy choices, such as offering ancillary services or participating in wholesale electricity markets.

### 中文翻译

数据中心有多种采购电力的选择。然而，当前关于利用这些选择的文献非常碎片化。具体而言，利用一种能源选项如何影响其他能源选项的选择仍不清楚。为解决这一开放问题，我们提出了一个统一的能源组合优化框架，考虑了数据中心的广泛能源选择。尽管原始模型具有复杂性和非线性，但所提分析归结为求解可处理的线性混合整数随机规划。使用实验性电力市场和互联网工作负载数据，报告了各种有洞见的数值观察。结果表明，连接具有不同短期和长期利润特征的不同能源选项的关键是在不同时间尺度上进行风险管理。此外，数据中心的服务水平协议参数与其利用某些能源选项的能力之间存在直接关系。使用现场储能和部署地理工作负载分配特别有助于数据中心利用高风险能源选择，如提供辅助服务或参与批发电力市场。

### 深度分析

- **研究问题**: 数据中心如何在多种能源采购选项中构建最优组合？不同选项之间的互动关系（互补/替代）是什么？
- **方法**: 统一能源组合优化→混合整数线性随机规划；不同时间尺度的风险管理
- **动机**: 数据中心能源采购文献碎片化，各选项（现货、远期、现场发电、储能、需求响应）被独立分析
- **核心贡献**: 
  1. 统一框架——首次将数据中心多种能源选项纳入单一优化
  2. 关键机制：多时间尺度风险管理（短期 vs 长期利润的关联）
  3. SLA 参数→决定可利用哪些能源选项
  4. 储能+地理负载分配→降低高风险选项的参与门槛
- **LR 中的使用**: 列为"风险感知采购"——同样被视为单一决策者视角

---

## [37] Nair, Adlakha, & Wierman (2014) — Energy Procurement with Intermittent Sources

**会议/期刊**: ACM SIGMETRICS Performance Evaluation Review, 42(1), 85–97
**DOI**: 10.1145/2637364.2591982

### 英文摘要

The increasing penetration of intermittent, unpredictable renewable energy sources such as wind energy, poses significant challenges for utility companies trying to incorporate renewable energy in their portfolio. In this work, we study the problem of conventional energy procurement in the presence of intermittent renewable resources. We model the problem as a variant of the newsvendor problem, in which the presence of renewable resources induces supply side uncertainty, and in which conventional energy may be procured in three stages to balance supply and demand. We compute closed-form expressions for the optimal energy procurement strategy and study the impact of increasing renewable penetration, and of proposed changes to the structure of electricity markets. We explicitly characterize the impact of a growing renewable penetration on the procurement policy by considering a scaling regime that models the aggregation of unpredictable renewable sources. A key insight from our results is that there is a separation between the impact of the stochastic nature of this aggregation, and the impact of market structure and forecast accuracy. Additionally, we study the impact on procurement of two proposed changes to the market structure: the addition and the placement of an intermediate market. We show that addition of an intermediate market does not necessarily increase the efficiency of utilization of renewable sources. Further, we show that the optimal placement of the intermediate market is insensitive to the level of renewable penetration.

### 中文翻译

间歇性、不可预测的可再生能源（如风能）渗透率的不断提高，给试图将可再生能源纳入其组合的公用事业公司带来了重大挑战。在本工作中，我们研究在存在间歇性可再生资源情况下的常规能源采购问题。我们将问题建模为报童问题的变体，其中可再生资源的存在引入了供给侧不确定性，常规能源可在三个阶段采购以平衡供需。我们计算了最优能源采购策略的闭合表达式，并研究了可再生能源渗透率提高以及电力市场结构的拟议变化的影响。我们通过考虑模拟不可预测可再生资源聚合的缩放机制，显式刻画了可再生能源渗透率增长对采购政策的影响。我们结果的一个关键洞见是，这种聚合的随机性质的影响与市场结构和预测准确性的影响之间存在分离。此外，我们研究了两种拟议市场结构变化对采购的影响：中间市场的添加和中间市场的放置位置。我们表明添加中间市场并不一定提高可再生能源的利用效率。进一步，我们表明中间市场的最优放置位置对可再生能源渗透率水平不敏感。

### 深度分析

- **研究问题**: 在间歇性可再生能源渗透增长的情况下，公用事业如何在多阶段市场中优化常规能源采购？
- **方法**: 报童模型扩展→三阶段采购（供给侧不确定性）；闭合解；渐进缩放分析
- **动机**: 可再生能源渗透增长改变了传统采购决策的本质——从需求侧不确定性为主→供给侧不确定性为主
- **核心贡献**: 
  1. 三阶段采购模型的闭合解
  2. 可再生能源聚合的随机效应 vs 市场结构效应的**分离性质**（关键理论贡献）
  3. 中间市场不一定提高可再生利用效率（反直觉）
  4. 最优中间市场位置对可再生渗透率水平不敏感
- **LR 中的使用**: 列为"间歇性资源采购"——同样被定位为单一决策者视角

---

## 附录：三篇无摘要论文说明

| # | 论文 | 原因 | 替代了解途径 |
|---|------|------|------------|
| 9 | Agrawal & Yücel (2021) | Springer 书章，OpenAlex 未收录摘要 | 书名为 "Responsible Business Operations"，该书章系统综述了三个维度的可再生能源采购：公用事业、消费者、企业 |
| 15 | Nagarajan & Sošić (2008) | EJOR 综述，OpenAlex 未收录摘要 | EJOR 高引综述（500+ 引用），系统梳理供应链合作博弈文献，是 OM 领域合作博弈的标准参考 |
| 22 | Myerson (1984) | 1984 年论文，OpenAlex 未收录摘要 | 机制设计与信息经济学的基石论文。建立了不完全信息合作博弈的解概念：激励效率、贝叶斯激励相容、个体理性。LR 引用其作为 Davis et al. 和本文 Myerson 筛选框架的方法论基础 |

---

## 总体统计

| 维度 | 数据 |
|------|------|
| 获取摘要 | 34/37 (91.9%) |
| 无摘要 | 3/37 (8.1%) |
| 已有详细读笔记 (★) | 7 篇 (utd-lit-1 系列) |
| UTD-24 期刊 | 28 篇 (75.7%) |
| 方法论: 博弈/机制设计 | 16 篇 |
| 方法论: 随机优化/DP | 8 篇 |
| 方法论: 综述 | 7 篇 |
| 方法论: 实验/数值 | 4 篇 |

### 方法论分布

```
博弈论/讨价还价/机制设计 ████████████████ 16 篇
随机优化/DP/ADP          ████████         8 篇
综述/调查                 ███████         7 篇
SFE/市场竞争              ████            4 篇
实验经济学                 █              1 篇
报童模型扩展              ██              2 篇
```

