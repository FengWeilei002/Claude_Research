---
tags: [guide, prompt-engineering, diagram, gpt-image-2, nano-banana, scientific-visualization]
created: 2026-04-29
---

# 科研示意图 Prompt 设计指南

## 概述

本指南总结 GPT Image 2（代号 "duct-tape"）和 Nano Banana 在生成科研示意图方面的 prompt 设计方法论，并提供可直接使用的 prompt 模板。

**核心工具能力（GPT Image 2）：**
- 像素级中英文文字渲染，无错字/无字形扭曲
- 结构化布局精确控制（网格、分栏、标注线）
- 学术图表风格模拟（经济学折线图、信息图海报、考试题目布局等）
- 多图一致性（同一风格/配色在多张图间保持一致）

**适用场景：** 问题描述示意图、算法框架图、系统架构图、文献综述框架、时间线/流程图、对比表格、经济学/运筹学模型图

---

## 一、Prompt 结构模式

从 1123 个社区提示词中提炼出三种 prompt 结构模式，按复杂度递增排列：

### 模式 1：简洁自然语言（适合快速原型）

直接一句话描述图表类型和内容，GPT Image 2 对自然语言理解能力极强。

```
来自一份重要且权威的 {领域} 的折线图，展示了 {时间段} {变量1} 与 {变量2} 之间存在 {关系描述}
```

**示例（经济学散点图）：**
```
来自顶级经济学期刊的散点图，展示 2000-2024 年间可再生能源补贴与碳减排量之间的正相关关系，带回归线和 95% 置信区间
```

**优点：** 极简、快速迭代
**缺点：** 对复杂布局（多面板、标注线）控制力弱

### 模式 2：JSON 结构化（适合复杂学术图）

使用 JSON 定义每个区块的位置、内容和样式。这是社区验证最有效的复杂图表 prompt 格式。

```json
{
  "type": "图表类型",
  "style": "视觉风格描述",
  "subject": "图表主题",
  "canvas": {
    "orientation": "纵向/横向",
    "background": "背景描述",
    "border": "边框样式"
  },
  "headline": {
    "title": "主标题",
    "subtitle": "副标题"
  },
  "layout": {
    "sections": [
      {
        "title": "区块标题",
        "position": "位置（左上/右下/正中 等）",
        "count": 元素数量,
        "labels": ["标签1", "标签2", "..."]
      }
    ]
  },
  "visuals": {
    "color_palette": ["颜色1", "颜色2", "..."],
    "illustration_notes": "插图风格描述",
    "typography": "排版说明"
  },
  "composition": "整体构图描述，明确阅读流向（从左至右、从上至下）"
}
```

### 模式 3：Raycast 动态参数（适合可复用模板）

在自然语言或 JSON 中嵌入 `{argument name="参数名" default="默认值"}` 语法，使同一 prompt 可通过替换参数生成不同图表。

```
创建一个关于 {argument name="主题" default="可再生能源供应链"} 的学术框架图，
展示 {argument name="框架要素" default="发电商-电网-用户三层结构"}，
风格为 {argument name="风格" default="简洁学术信息图"}
```

---

## 二、科研图表核心设计原则

从社区成功案例中提炼的 8 条原则：

### 1. 明确 section 数量与位置
GPT Image 2 对数字精确敏感。指定每个区块的 `count` 和 `position`：
```
"sections": [
  {"title": "上游", "position": "左上", "count": 4, "labels": [...]},
  {"title": "中游", "position": "右上", "count": 3, "labels": [...]}
]
```

### 2. 用 objects 计数防止幻象
列出图中应出现的所有视觉元素及其数量，防止模型添加无关元素：
```
"objects": {"count": 12, "items": ["3个发电厂图标", "2条输电线路", "4个用户节点", ...]}
```

### 3. 色彩方案提前声明
使用具名颜色，学术风格推荐低饱和度配色：
```
"color_palette": ["深海军蓝", "铁锈橙", "灰青", "柔和灰", "暖米色"]
```

### 4. 中文优先 + 英文术语保留
GPT Image 2 对中文渲染达到 native 水准，学术术语可中英混排：
```
"title": "可再生能源供应链结构"
"labels": ["发电商 (Generator)", "电网运营商 (TSO)", "电力用户 (Consumer)"]
```

### 5. 布局流向显式说明
```
"composition": "从上至下的三层层级结构，每层从左到右排列，层间用箭头连接"
```

### 6. 风格锚定学术感
关键词：`学术信息图` `编辑插图质量` `干净的留白` `清晰的线条` `绘画般的阴影`

### 7. 文本框数量与位置精确
```
"text_blocks": {"count": 8, "items": ["主标题", "副标题", "3个区块标题", "3段说明文字"]}
```

### 8. 负向约束（拒绝不需要的风格）
在描述末尾添加排除项：
```
拒绝写实风格，拒绝照片质感，拒绝3D渲染，拒绝过于卡通化
```

---

## 三、Prompt 模板库

### 模板 1：问题描述示意图

适用于论文 Introduction 中的研究背景/问题场景图。

```
{
  "type": "学术问题描述示意图",
  "style": "简洁学术信息图风格，扁平矢量插图，清晰的细线条，柔和的学术配色，编辑插图质量",
  "subject": "{argument name=\"研究问题\" default=\"可再生能源发电的不确定性与电网调度矛盾\"}",
  "canvas": {
    "orientation": "横向",
    "background": "白色或极浅灰色背景，带有细微网格纹理",
    "border": "细灰色矩形边框"
  },
  "headline": {
    "title": "{argument name=\"主标题\" default=\"问题描述：可再生能源并网的核心矛盾\"}",
    "subtitle": "{argument name=\"副标题\" default=\"发电不确定性 vs. 电网调度可靠性\"}"
  },
  "layout": {
    "sections": [
      {
        "title": "供给侧挑战",
        "position": "左侧",
        "count": 3,
        "labels": [
          "风力发电：受风速波动影响，出力不稳定",
          "光伏发电：受云层/昼夜影响，预测困难",
          "水电：受季节性降水影响，年度波动大"
        ],
        "icon": "左侧三个图标：风扇、太阳板、水坝"
      },
      {
        "title": "核心矛盾",
        "position": "中心",
        "count": 1,
        "labels": ["供需失衡\n电网频率波动\n弃风弃光 vs. 供电不足"],
        "icon": "中心用一个红色闪电/不平衡图标标注"
      },
      {
        "title": "需求侧约束",
        "position": "右侧",
        "count": 3,
        "labels": [
          "电网调度：实时供需平衡要求",
          "电力市场：日前/实时市场价格信号",
          "用户需求：刚性电力消费，几乎无弹性"
        ],
        "icon": "右侧三个图标：电网塔、市场曲线图、用户建筑"
      }
    ],
    "connections": "从左侧到中心到右侧的粗箭头，箭头旁标注'不确定性传导'"
  },
  "visuals": {
    "color_palette": ["深蓝 #1a3a5c", "警示橙 #d4773a", "中性灰 #7a8a9a", "浅蓝 #d0dfee", "米白 #f5f2ed"],
    "illustration_notes": "扁平矢量形状，微妙的渐变阴影，圆角矩形区块",
    "typography": "标题使用粗体无衬线，正文使用紧凑易读字号，中文为主，术语保留英文"
  },
  "composition": "左-中-右三栏布局，从左至右的阅读流向，核心矛盾区块用醒目的橙色边框突出，箭头连接三部分",
  "quality": "高分辨率学术海报风格，适合论文配图或学术报告"
}
```

### 模板 2：算法/理论框架示意图

适用于方法论部分的模型框架、算法流程图。

```
{
  "type": "学术算法框架图",
  "style": "结构化框线图，清晰的层级布局，学术书籍插图风格，精细线框，柔和的灰蓝配色",
  "subject": "{argument name=\"算法/框架名\" default=\"基于机制设计的可再生能源采购模型\"}",
  "canvas": {
    "orientation": "纵向",
    "background": "白色，带浅灰色点状网格线",
    "border": "无"
  },
  "layout": {
    "structure": "从上至下的四层递进结构，每层包含一个主框和若干子框",
    "layers": [
      {
        "level": 1,
        "title": "输入层 / 前提假设",
        "position": "顶部",
        "count": 4,
        "sub_boxes": [
          "供应商私有信息（成本、可靠性）",
          "买方需求特征（弹性、时间偏好）",
          "市场结构（竞争/垄断/寡头）",
          "制度约束（补贴、碳税、配额）"
        ]
      },
      {
        "level": 2,
        "title": "机制设计层",
        "position": "中上部",
        "count": 3,
        "sub_boxes": [
          "合同菜单设计\n（甄别供应商类型）",
          "拍卖/竞价机制\n（价格发现与分配）",
          "信息披露策略\n（缓解信息不对称）"
        ]
      },
      {
        "level": 3,
        "title": "决策与均衡层",
        "position": "中下部",
        "count": 3,
        "sub_boxes": [
          "供应商：最优报价/投资决策",
          "买方：最优采购策略",
          "均衡分析：纳什均衡/贝叶斯纳什均衡"
        ]
      },
      {
        "level": 4,
        "title": "输出层 / 绩效评估",
        "position": "底部",
        "count": 4,
        "sub_boxes": [
          "供应链效率（社会福利）",
          "可再生能源消纳率",
          "各方利润分配",
          "碳排放减少量"
        ]
      }
    ],
    "connections": "层与层之间用向下箭头连接，箭头旁标注关键关系（如'激励相容约束'、'个体理性约束'）"
  },
  "visuals": {
    "color_palette": ["深蓝灰 #2c3e50", "钢蓝 #4a6fa5", "浅蓝灰 #b0c4de", "白色 #ffffff", "深灰 #555555"],
    "illustration_notes": "清爽的框线图风格，圆角矩形，统一粗细的边框，层标题用深色填充，子框用浅色填充",
    "typography": "层标题：粗体无衬线 14pt；子框内容：常规无衬线 10pt；箭头标签：斜体小字"
  },
  "composition": "垂直四层结构，层间用粗箭头连接，每层内子框水平排列（2-4个），整体呈对称的树状/层级结构",
  "quality": "高对比度框线图，适合学术论文内嵌，黑白打印也可辨识"
}
```

### 模板 3：系统架构图

适用于描述系统组件间交互关系、数据流、信息流。

```
{
  "type": "系统架构示意图",
  "style": "现代技术图表风格，极简扁平设计，清晰的组件连接线，IT架构图美学",
  "subject": "{argument name=\"系统名\" default=\"可再生能源电力市场交易系统架构\"}",
  "canvas": {
    "orientation": "横向",
    "background": "淡蓝灰色技术背景，带有极淡的网格",
    "border": "无"
  },
  "layout": {
    "zones": [
      {
        "zone": "物理层",
        "position": "底部",
        "count": 4,
        "components": [
          {"name": "风电场", "icon": "风力发电机图标"},
          {"name": "光伏电站", "icon": "太阳板图标"},
          {"name": "储能系统", "icon": "电池图标"},
          {"name": "传统电厂", "icon": "火电厂图标"}
        ]
      },
      {
        "zone": "信息与通信层",
        "position": "中部",
        "count": 3,
        "components": [
          {"name": "SCADA 数据采集", "icon": "传感器图标"},
          {"name": "气象预测系统", "icon": "云+预报图标"},
          {"name": "智能电表网络", "icon": "电表图标"}
        ]
      },
      {
        "zone": "市场与调度层",
        "position": "中上部",
        "count": 4,
        "components": [
          {"name": "日前市场\n(Day-Ahead Market)", "icon": "日历图标"},
          {"name": "实时市场\n(Real-Time Market)", "icon": "时钟图标"},
          {"name": "辅助服务市场", "icon": "盾牌图标"},
          {"name": "输电调度中心", "icon": "控制台图标"}
        ]
      },
      {
        "zone": "用户层",
        "position": "顶部",
        "count": 3,
        "components": [
          {"name": "大工业用户", "icon": "工厂图标"},
          {"name": "售电公司", "icon": "办公楼图标"},
          {"name": "居民用户", "icon": "房屋图标"}
        ]
      }
    ],
    "connections": {
      "upward": "从物理层→信息层→市场层→用户层 的纵向实线箭头，标注'电力流'",
      "downward": "从用户层→市场层→信息层→物理层 的纵向虚线箭头，标注'信息流/价格信号'",
      "horizontal": "同层组件间用细线连接，标注交互关系"
    }
  },
  "visuals": {
    "color_palette": ["技术蓝 #2563eb", "深灰 #374151", "浅蓝灰 #e5e7eb", "绿色 #059669", "橙色 #ea580c"],
    "illustration_notes": "统一大小的圆角矩形组件，层用浅色半透明背景区分，箭头用不同线型区分电力流(实线)和信息流(虚线)",
    "typography": "组件名：粗体；层名：大号粗体置于每层左侧标签"
  },
  "composition": "底部到顶部四层堆叠架构，电力流自下而上（实线粗箭头），信息流自上而下（虚线细箭头），每层内部组件水平等距排列",
  "quality": "高分辨率架构图，适合论文学术发表"
}
```

### 模板 4：文献综述框架图

适用于论文 Literature Review 或理论框架部分的文献分类/演进图。

```
{
  "type": "学术文献综述框架图",
  "style": "学术期刊风格文献分类图，博物馆海报级别的编辑插图，清晰的分类层级与演进箭头",
  "subject": "{argument name=\"研究主题\" default=\"可再生能源供应链运营管理\"}",
  "canvas": {
    "orientation": "横向",
    "background": "暖白色学术海报纹理，细微颗粒感",
    "border": "页面四周纤细的深灰色矩形边框"
  },
  "headline": {
    "title": "{argument name=\"主标题\" default=\"文献分类框架：可再生能源供应链运营管理\"}",
    "subtitle": "{argument name=\"副标题\" default=\"三个研究流派的演进与交叉\"}"
  },
  "layout": {
    "streams": [
      {
        "stream": "流派 1：可再生能源投资与运营",
        "position": "左侧栏",
        "count": 5,
        "papers": [
          "Aflaki & Netessine (2017)\n战略性可再生能源投资",
          "Kaps et al. (2020)\n储能投资与运营",
          "Kök et al. (2020)\n运营灵活性价值",
          "Sunar & Birge (2019)\n日前市场策略承诺",
          "Wu & Kapuscinski (2013)\n间歇性发电削减"
        ],
        "color_tag": "蓝色系"
      },
      {
        "stream": "流派 2：采购机制与合同设计",
        "position": "中间栏",
        "count": 5,
        "papers": [
          "Agrawal & Yücel (2021)\n可再生能源采购",
          "Cachon & Lariviere (2005)\n收入共享合同",
          "Davis et al. (2022)\n信息不对称采购",
          "Hsu et al. (2017)\n领导者集体议价",
          "Oh & Özer (2013)\n产能规划机制设计"
        ],
        "color_tag": "橙色系"
      },
      {
        "stream": "流派 3：数据驱动与实证",
        "position": "右侧栏",
        "count": 5,
        "papers": [
          "Hu & Wang (2015)\n数据粒度与预测",
          "数据驱动需求预测",
          "可再生能源出力预测",
          "实时定价实证分析",
          "碳市场政策评估"
        ],
        "color_tag": "绿色系"
      }
    ],
    "cross_connections": "三栏之间的虚线交叉箭头，标注'机制设计方法'、'实证验证'等跨流派的联系",
    "research_gap": {
      "position": "底部居中",
      "label": "研究缺口：机制设计视角下的可再生能源供应链协调，整合投资决策与运营灵活性",
      "style": "虚线框 + 浅色填充"
    }
  },
  "visuals": {
    "color_palette": ["深蓝 #1e3a5f", "铁锈橙 #c2692d", "森林绿 #3d6b4f", "暖米色 #f5f0e8", "深灰 #4a4a4a"],
    "illustration_notes": "学术信息图风格，清晰的分类边框，文献条目用小号字体，每条前面加项目符号",
    "typography": "流派标题：粗体大号；文献条目：常规小号，作者+年份加粗；交叉连接标注：斜体小号"
  },
  "composition": "三栏并排分类，顶部放置总标题，底部放置研究缺口框，交叉箭头连接三栏，阅读流向：从左至右，再汇聚到底部",
  "quality": "高分辨率学术海报，适合论文汇报或开题报告"
}
```

### 模板 5：时间线/演进图

适用于展示理论发展脉络、政策演变、技术路线演进。

```
{
  "type": "学术时间线信息图",
  "style": "羊皮纸质感学术时间轴海报，轻微做旧纹理，手绘插图感与精确年代标签的结合",
  "subject": "{argument name=\"时间线主题\" default=\"可再生能源政策与市场机制演进\"}",
  "canvas": {
    "orientation": "横向",
    "background": "暖米色羊皮纸纹理，带有细微颗粒感和不规则边缘褪色效果",
    "border": "深棕色细边框，带有角落装饰花纹"
  },
  "headline": {
    "title": "{argument name=\"标题\" default=\"可再生能源政策与市场机制：1990-2030\"}",
    "subtitle": "{argument name=\"副标题\" default=\"从固定电价到市场化竞争的四十年演进\"}"
  },
  "timeline": {
    "axis": "横向时间轴，位于画面中部，左端标注'1990'，右端标注'2030'，中间按年代标注关键节点",
    "phases": [
      {
        "era": "政策驱动期 (1990-2005)",
        "color": "暖黄褐色",
        "count": 4,
        "events": [
          {"year": "1991", "event": "德国《电力上网法》\n首次引入固定电价制度"},
          {"year": "2000", "event": "德国《可再生能源法》(EEG)\n确立长期固定电价"},
          {"year": "2003", "event": "EU 碳排放交易体系 (EU ETS)\n全球首个跨境碳市场"},
          {"year": "2005", "event": "中国《可再生能源法》\n确立可再生能源发展框架"}
        ]
      },
      {
        "era": "市场转型期 (2006-2015)",
        "color": "过渡橙色",
        "count": 4,
        "events": [
          {"year": "2008", "event": "EU 2030 气候与能源框架\n设定可再生能源占比目标"},
          {"year": "2010", "event": "美国加州 AB32 碳交易\n州级碳市场启动"},
          {"year": "2012", "event": "中国启动碳交易试点\n七省市先行探索"},
          {"year": "2015", "event": "《巴黎协定》签署\n全球气候治理里程碑"}
        ]
      },
      {
        "era": "市场化深化期 (2016-2025)",
        "color": "深蓝色调",
        "count": 4,
        "events": [
          {"year": "2017", "event": "德国可再生能源拍卖制\n从固定电价转向竞争性拍卖"},
          {"year": "2019", "event": "欧洲日内电力市场整合\n跨国电力交易扩展"},
          {"year": "2021", "event": "中国全国碳市场启动\n全球最大碳市场"},
          {"year": "2023", "event": "EU 碳边境调节机制 (CBAM)\n碳关税正式实施"}
        ]
      }
    ]
  },
  "visuals": {
    "color_palette": ["暖黄褐 #d4a76a", "过渡橙 #e07b4c", "深蓝 #2b4c7e", "羊皮纸米色 #f0e6d3", "墨水棕 #3d2b1f"],
    "illustration_notes": "时间轴上方放置事件卡片，按年代从左到右排列，每个事件用小圆形标记连接到时间轴；阶段用不同底色区分",
    "typography": "年代数字：大号粗体；事件标题：中号粗体；事件描述：小号常规"
  },
  "composition": "横向时间轴为骨架，上方分布事件卡片，每个阶段用不同底色标识，卡片数量精确列出，从左至右的阅读流向",
  "quality": "博物馆级别编辑插图质量，适合学术报告和政策分析文档"
}
```

### 模板 6：对比表格/图表

适用于多方案对比、理论框架对比、方法优劣比较。

```
{
  "type": "学术对比表",
  "style": "简洁学术表格风格，清爽的白底黑线表格，柔和的配色标注，适合论文内嵌",
  "subject": "{argument name=\"对比主题\" default=\"可再生能源采购机制对比\"}",
  "canvas": {
    "orientation": "横向",
    "background": "纯白色",
    "border": "无"
  },
  "headline": {
    "title": "{argument name=\"表名\" default=\"表1：三种可再生能源采购机制比较\"}"
  },
  "layout": {
    "table_type": "对比矩阵",
    "columns": 5,
    "rows": 5,
    "headers": ["维度", "固定电价 (FIT)", "拍卖制 (Auction)", "绿色证书 (REC)"],
    "row_labels": ["价格形成机制", "政府补贴强度", "市场竞争程度", "适用阶段"],
    "cells": [
      {"row": 1, "col": 2, "text": "政府设定\n固定收购价", "highlight": false},
      {"row": 1, "col": 3, "text": "竞标产生\n市场出清价", "highlight": false},
      {"row": 1, "col": 4, "text": "市场交易\n供需定价", "highlight": false},
      {"row": 2, "col": 2, "text": "高", "highlight": true, "highlight_color": "红色"},
      {"row": 2, "col": 3, "text": "中", "highlight": true, "highlight_color": "橙色"},
      {"row": 2, "col": 4, "text": "低", "highlight": true, "highlight_color": "绿色"},
      {"row": 3, "col": 2, "text": "低", "highlight": false},
      {"row": 3, "col": 3, "text": "高", "highlight": false},
      {"row": 3, "col": 4, "text": "高", "highlight": false},
      {"row": 4, "col": 2, "text": "技术早期", "highlight": false},
      {"row": 4, "col": 3, "text": "技术成熟期", "highlight": false},
      {"row": 4, "col": 4, "text": "全阶段", "highlight": false}
    ],
    "notes": {
      "position": "表格下方",
      "text": "注：表中对比基于典型市场设计，具体效果受政策和市场环境影响。"
    }
  },
  "visuals": {
    "color_palette": ["白色 #ffffff", "浅灰 #f0f0f0", "深灰 #333333", "红 #c0392b", "橙 #e67e22", "绿 #27ae60"],
    "illustration_notes": "清晰的黑线表格，交替行使用浅灰色底色，高亮单元格使用淡色填充+粗体文字",
    "typography": "表头：粗体居中；行标签：粗体左对齐；单元格内容：常规居中；注释：小号斜体"
  },
  "composition": "标准三线表学术格式，清晰可读，可直接用于论文",
  "quality": "学术出版级别表格渲染"
}
```

### 模板 7：经济学/运筹学模型图

适用于博弈时序、决策树、事件树、优化模型结构。

```
{
  "type": "经济学模型时序图",
  "style": "理论经济学论文风格，清晰的事件时序与决策节点，博弈树/扩展式表达",
  "subject": "{argument name=\"模型名\" default=\"可再生能源投资的 Stackelberg 博弈时序\"}",
  "canvas": {
    "orientation": "横向",
    "background": "纯白色",
    "border": "无"
  },
  "headline": {
    "title": "{argument name=\"标题\" default=\"模型时序：政府-发电商-电网三阶段博弈\"}"
  },
  "layout": {
    "stages": [
      {
        "stage": "Stage 1",
        "agent": "政府/监管机构",
        "position": "左侧",
        "action": "设定政策参数\n（补贴 s、碳价 p_c、配额 Q）",
        "info_set": "已知：社会成本函数、减排目标",
        "node_style": "方形决策节点"
      },
      {
        "stage": "Stage 2",
        "agent": "可再生能源发电商",
        "position": "中部偏左",
        "action": "投资决策\n（装机容量 K、技术类型 θ）",
        "info_set": "已知：政策参数、自身成本类型 c_i（私有信息）",
        "node_style": "圆形信息节点，虚线表示私有信息"
      },
      {
        "stage": "Stage 3",
        "agent": "电力市场",
        "position": "中部偏右",
        "action": "市场出清\n（日前/实时电价 P、调度量 Q）",
        "info_set": "已知：装机容量、需求预测、天气预测",
        "node_style": "菱形市场节点"
      },
      {
        "stage": "Payoffs",
        "agent": "各方收益",
        "position": "右侧",
        "action": "社会福利 SW = CS + PS + 环境外部性\n发电商利润 π_i = P·q_i - c_i(K_i)\n电网收益 = 输电费 - 平衡成本",
        "node_style": "圆角矩形收益节点"
      }
    ],
    "connections": "Stage 1→2→3→Payoffs 的横向实线箭头，箭头标注决策变量传递",
    "feedback": "从 Payoffs 回到 Stage 1 的虚线反馈箭头，标注'均衡：子博弈完美纳什均衡 (SPNE)'"
  },
  "visuals": {
    "color_palette": ["理论黑 #1a1a1a", "博弈蓝 #2c5f8a", "信息橙 #c9783a", "收益绿 #3d7a5c", "白色 #ffffff"],
    "illustration_notes": "不同形状的节点区分参与者类型，实线箭头表示顺序决策，虚线表示信息/反馈",
    "typography": "阶段号：大号粗体；参与者名：中号粗体；决策描述：常规；信息集：小号斜体；数学符号用 LaTeX 风格"
  },
  "composition": "从左至右的横向时序，决策节点依次排列，反馈箭头在下方从右回到左形成闭环",
  "quality": "适用于理论经济学/运筹学期刊论文的模型图质量"
}
```

---

## 四、Nano Banana 与 GPT Image 2 的差异适配

| 维度 | GPT Image 2 | Nano Banana |
|------|-------------|-------------|
| 文字渲染 | 极强（中英文原生） | 中等（需在 prompt 中强调文字要求） |
| 结构化布局 | JSON 驱动精确控制 | 需要更详细的自然语言描述 |
| 学术风格 | 多种风格均支持 | 插画风格更强，学术风格需明确引导 |
| 参数化 | 支持 Raycast 语法 | 无原生参数化，需手动替换 |

**Nano Banana 适配建议：**
- 将 JSON 结构转为详细自然语言描述
- 在 prompt 中反复强调文字准确性和位置
- 增加负向约束（"不要生成错误文字" "不要出现乱码"）
- 使用更强的风格锚定词（"学术论文插图风格" "Nature/Science 期刊配图风格"）

---

## 五、Prompt 工程最佳实践 Checklist

### 写 Prompt 前
- [ ] 确定图表类型（框架图/流程图/对比表/时序图/架构图）
- [ ] 列出所有必须出现的文字标签
- [ ] 确定配色方案（3-5个学术配色）
- [ ] 确定阅读流向（左→右 / 上→下 / 中心辐射）

### Prompt 结构中
- [ ] 用 `type` 声明图表类型
- [ ] 用 `sections` / `layers` / `zones` 定义空间结构
- [ ] 每个区块精确声明 `count` + `labels`
- [ ] 声明 `color_palette`
- [ ] 添加 `composition` 描述整体布局
- [ ] 用 `objects.count` 防止元素遗漏或多余

### 迭代优化
- [ ] 第一版用简洁 prompt 快速验证构图
- [ ] 第二版添加 JSON 结构细化位置
- [ ] 第三版微调颜色、字体、间距
- [ ] 如果有文字错误，单独强调文字准确性

### 负向约束参考
```
拒绝照片级写实风格
拒绝 3D 渲染效果
拒绝过于卡通的风格
拒绝杂乱背景
拒绝多余装饰元素
确保所有文字拼写正确
确保中文字符清晰可读、无乱码
```

---

## 六、参考资源

- GPT Image 2 社区提示词合集 (1123 prompts): `00_Inbox/GPT-Image2.md`
- 社区测试 FAQ: [YouMind-OpenLab/awesome-gpt-image-2](https://github.com/YouMind-OpenLab/awesome-gpt-image-2)
- 典型学术图参考案例：No. 41 (黑洞物理信息图)、No. 42 (经济学图表)、No. 49 (历史时间轴网格)

---

## 相关笔记

- [[Claude Code Harness 配置指南]] — 自动化工作流配置
- [[Claude Code + Obsidian 使用指南]] — 日常使用流程
- [[文献综述逐句写作分析]] — 学术写作分析
