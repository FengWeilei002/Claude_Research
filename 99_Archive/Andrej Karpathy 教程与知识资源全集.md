---
tags: [reference, deep-learning, neural-networks, GPT, LLM, karpathy, tutorial]
created: 2026-04-29
---

# Andrej Karpathy 教程与知识资源全集

## 人物简介

Andrej Karpathy，AI 领域最重要的教育者之一。曾任 Tesla AI 高级总监、OpenAI 创始团队成员，Stanford 博士（导师 Fei-Fei Li）。以"从零构建一切"的教学风格闻名——每一行代码都亲手写出并解释，拒绝黑箱。

**核心教学理念**："What I cannot create, I do not understand." — Richard Feynman

**主要平台：**
- GitHub: [github.com/karpathy](https://github.com/karpathy)
- YouTube: [@AndrejKarpathy](https://www.youtube.com/@AndrejKarpathy)
- Blog: [karpathy.github.io](https://karpathy.github.io)
- Discord: [Zero to Hero](https://discord.gg/3zy8kqD9Cp)

---

## 一、核心教程体系（从零到精通路线图）

### 入门路线：Neural Networks: Zero to Hero ⭐21,634

最推荐的神经网络入门系列，7 个 YouTube 视频 + Jupyter Notebook，从反向传播一路讲到 GPT。

| 讲次 | 内容 | YouTube | 配套代码 |
|------|------|---------|----------|
| **Lecture 1** | 神经网络与反向传播入门：构建 micrograd | [视频](https://www.youtube.com/watch?v=VMj-3S1tku0) | [micrograd](https://github.com/karpathy/micrograd) |
| **Lecture 2** | 语言模型入门：构建 makemore (bigram) | [视频](https://www.youtube.com/watch?v=PaCmpygFfXo) | [makemore](https://github.com/karpathy/makemore) |
| **Lecture 3** | makemore Part 2：多层感知机 (MLP) | [视频](https://youtu.be/TCH_1BHY58I) | makemore |
| **Lecture 4** | makemore Part 3：激活值、梯度、BatchNorm | [视频](https://youtu.be/P6sfmUTpUmc) | makemore |
| **Lecture 5** | makemore Part 4：成为反向传播忍者（手动反传） | [视频](https://youtu.be/q8SA3rM6ckI) | makemore + [Colab](https://colab.research.google.com/drive/1WV2oi2fh9XXyldh02wupFQX0wh5ZC-z-) |
| **Lecture 6** | makemore Part 5：构建 WaveNet (CNN) | [视频](https://youtu.be/t3YJ5hKiMQ0) | makemore |
| **Lecture 7** | 从零构建 GPT | [视频](https://www.youtube.com/watch?v=kCc8FmEb1nY) | [nanoGPT](https://github.com/karpathy/nanoGPT) |
| **Lecture 8** | 构建 GPT Tokenizer (BPE) | [视频](https://www.youtube.com/watch?v=zduSFxRajkE) | [minbpe](https://github.com/karpathy/minbpe) |

**学习建议**：按顺序观看，每讲配合代码实际运行。Lecture 5 是含金量最高的单讲——手动推导完整神经网络的反向传播。

### 进阶项目：从零复现 GPT-2 (124M)

**build-nanogpt** ⭐4,961

单独的视频讲座，从空文件开始，一步步复现 GPT-2 (124M) 模型。Git 提交历史清晰可追溯，每一步都有解释。

- [YouTube 视频](https://youtu.be/l8pRSuU81PU)
- [代码仓库](https://github.com/karpathy/build-nanogpt)
- 训练成本：~1 小时 + ~$10（2024 年，而 2019 年 GPT-2 训练成本约 $43,000）

---

## 二、全部代码项目（按星标排序）

### 顶级项目（10K+ 星标）

| 项目                  | 星标     | 说明                                                                  |
| ------------------- | ------ | ------------------------------------------------------------------- |
| **autoresearch**    | 77,686 | AI Agent 自动进行 nanochat 单 GPU 训练研究                                   |
| **nanoGPT**         | 57,316 | 最简、最快的 GPT 训练/微调代码                                                  |
| **nanochat**        | 52,670 | $100 能买到的最好的 ChatGPT——完整 LLM 训练流程（tokenization→预训练→微调→RL→推理→Web UI） |
| **LLM101n**         | 36,841 | 构建讲故事 AI 的完整课程（开发中，Eureka Labs）                                     |
| **llm.c**           | 29,753 | 纯 C/CUDA 实现 LLM 训练，无需 PyTorch                                       |
| **minGPT**          | 24,261 | OpenAI GPT 的最小 PyTorch 复现                                           |
| **nn-zero-to-hero** | 21,634 | 神经网络零基础到精通                                                          |
| **llama2.c**        | 19,454 | 纯 C 语言推理 Llama 2                                                    |
| **llm-council**     | 17,928 | LLM 委员会协同回答最难问题                                                     |
| **micrograd**       | 15,669 | 微型标量自动求导引擎 + 神经网络库                                                  |
| **char-rnn**        | 12,032 | 多层 RNN/LSTM/GRU 字符级语言模型                                             |
| **convnetjs**       | 11,153 | 浏览器中的深度学习（JavaScript）                                               |
| **minbpe**          | 10,459 | LLM 分词算法 BPE 的最小实现                                                  |

### 中高级项目（1K-10K 星标）

| 项目                            | 星标    | 说明                          |
| ----------------------------- | ----- | --------------------------- |
| **arxiv-sanity-preserver**    | 5,662 | arXiv 论文浏览/搜索/过滤 Web 界面     |
| **neuraltalk2**               | 5,581 | 高效图像描述生成 (Torch)            |
| **neuraltalk**                | 5,488 | 多模态 RNN 图像描述 (Python+numpy) |
| **build-nanogpt**             | 4,961 | 从零复现 nanoGPT 的视频+代码讲座       |
| **ng-video-lecture**          | 4,675 | nanoGPT 讲座配套代码              |
| **makemore**                  | 3,870 | 自回归字符级语言模型                  |
| **reader3**                   | 3,570 | 与 LLM 一起读书的示例               |
| **rendergit**                 | 2,243 | 将 git 仓库渲染为静态 HTML          |
| **cryptos**                   | 1,884 | 纯 Python 从零实现比特币（教育用途）      |
| **arxiv-sanity-lite**         | 1,570 | arXiv 论文推荐（SVM + tfidf）     |
| **jobs**                      | 1,553 | 美国劳工统计局职业数据可视化              |
| **reinforcejs**               | 1,458 | JavaScript 强化学习 Agent       |
| **karpathy.github.io**        | 1,385 | 个人博客源码                      |
| **randomfun**                 | 1,164 | 各种有趣的 Notebook              |
| **ulogme**                    | 1,151 | 自动收集和可视化电脑使用统计              |
| **recurrentjs**               | 983   | JavaScript 深度 RNN 和 LSTM    |
| **pytorch-normalizing-flows** | 915   | PyTorch 归一化流                |
| **tsnejs**                    | 909   | JavaScript t-SNE 可视化        |
| **lecun1989-repro**           | 753   | 复现 LeCun 1989 年手写邮编识别论文     |
| **paper-notes**               | 711   | 论文笔记                        |
| **svmjs**                     | 707   | JavaScript SVM              |
| **deep-vector-quantization**  | 642   | VQVAE 和 GumbelSoftmax       |
| **hn-time-capsule**           | 612   | 用 LLM 分析十年前的 Hacker News 讨论 |
| **pytorch-made**              | 593   | PyTorch MADE 实现             |

---

## 三、博客文章全集（按时间倒序）

| 日期 | 标题（英文原文） | 主题 |
|------|-----------------|------|
| 2026-02-12 | microgpt | 微型 GPT 相关 |
| 2022-03-14 | lecun1989 | 复现 LeCun 1989 反向传播论文 |
| 2021-06-21 | blockchain | 区块链 |
| 2021-03-27 | forward-pass | 前向传播 |
| 2020-06-11 | biohacking-lite | 生物黑客轻量版（自我量化） |
| 2019-04-25 | recipe | "训练神经网络的秘诀"（经典文章） |
| 2018-01-20 | medium | Medium 平台相关 |
| 2016-09-07 | phd | 博士生涯总结 |
| 2016-05-31 | rl | 强化学习 |
| 2015-11-20 | ai | AI 综述 |
| 2015-10-25 | selfie | 自拍相关 |
| 2015-05-21 | rnn-effectiveness | RNN 的有效性（经典文章） |
| 2015-03-30 | breaking-convnets | 攻破卷积网络 |
| 2014-09-02 | imagenet-compete | 与 ConvNet 在 ImageNet 上竞争的经验 |
| 2014-08-03 | quantifying-productivity | 量化生产力 |
| 2014-07-03 | feature-learning-escapades | 特征学习冒险 |
| 2014-07-02 | t-sne-visualization | 用 t-SNE 可视化 Twitter 顶级用户 |
| 2013-11-27 | quantifying-hacker-news | 量化 Hacker News |
| 2013-11-23 | chrome-extension | Chrome 扩展编程 |
| 2012-10-22 | state-of-computer-vision | 计算机视觉现状 |
| 2011-04-27 | classifying-cifar10 | 手动分类 CIFAR-10 |

**必读经典文章（社区公认最有价值的 3 篇）：**
1. **A Recipe for Training Neural Networks (2019)** — 训练神经网络的实操方法论，被引用无数
2. **The Unreasonable Effectiveness of Recurrent Neural Networks (2015)** — RNN 能做什么，启发了整整一代人
3. **Deep Reinforcement Learning: Pong from Pixels (2016)** — 用强化学习从像素玩 Pong

---

## 四、学习路线图推荐

### 路线 A：深度学习工程师（约 3-4 个月）

```
阶段 1: 基础
  ├── micrograd: 理解反向传播和自动求导
  └── makemore (Part 1-6): 语言模型全流程

阶段 2: Transformer
  ├── minGPT / nanoGPT: GPT 从零实现
  ├── minbpe: Tokenizer 原理
  └── build-nanogpt: GPT-2 完整复现

阶段 3: 高性能训练
  ├── llm.c: C/CUDA 级别优化
  └── nanochat: 完整训练流水线

阶段 4: 前沿
  ├── autoresearch: AI Agent 自动研究
  └── llm-council: 多模型协作
```

### 路线 B：研究者/快速上手（约 1-2 个月）

```
阶段 1: 核心理解
  ├── Zero to Hero Lecture 1, 2, 7: 反向传播 + 语言模型 + GPT
  └── 博客: "A Recipe for Training Neural Networks"

阶段 2: 动手实践
  ├── nanoGPT: 训练自己的 GPT
  ├── nanochat: 训练自己的 ChatGPT
  └── arxiv-sanity-lite: 文献管理工具
```

---

## 五、关键知识要点摘录

### 5.1 训练神经网络的秘诀（A Recipe for Training Neural Networks, 2019）

Karpathy 最经典的文章，核心观点：

1. **先让模型过拟合一个小数据集** — 如果模型连训练集都无法过拟合，说明有 bug
2. **从简单到复杂** — 先关掉正则化，确认裸模型能学习
3. **监控激活值和梯度** — 激活值不应饱和（全0 或 全1），梯度不应消失或爆炸
4. **学习率是最重要的超参数** — 先做 LR range test
5. **不要从头写一切** — 先用成熟的 baseline，再逐步替换组件

### 5.2 RNN 的惊人有效性（2015）

- 字符级 RNN 可以生成令人惊讶的连贯文本
- 同样的架构可以处理文本、LaTeX 代码、Linux 内核代码
- 关键洞察：RNN 学到了一个隐藏的"语义空间"，向量算术在此空间中有效

### 5.3 nanochat 设计哲学（2025-2026）

- **单一复杂度旋钮**：只需设置 `--depth` 参数，所有其他超参数自动计算为计算最优值
- **GPT-2 速度跑排行榜**：当前最快约 1.65 小时（8×H100），成本约 $40
- **完整流水线**：tokenization → pretraining → SFT → RL → inference → Web UI，全部在单一代码库
- **优化器**：AdamW + Muon 双优化器

### 5.4 llm.c 设计哲学

- 纯 C/CUDA，无 PyTorch 依赖
- 根目录代码保持简洁可读（教育优先）
- `dev/cuda/` 目录用于更复杂的优化内核
- 性能可与 PyTorch Nightly 竞争（快约 7%）

### 5.5 分词 (Tokenization) 核心洞察

来自 Lecture 8 和 minbpe：
- LLM 的许多奇怪行为（不会数数、不会拼写、对空格敏感）实际上源自分词
- BPE (Byte Pair Encoding) 是目前主流分词算法
- "理想情况下应该彻底删除分词这一阶段" — Karpathy

### 5.6 LLM101n 课程大纲（Eureka Labs 开发中）

完整的 17 章课程规划，涵盖从 bigram 语言模型到多模态的全部内容：
1. Bigram → 2. Micrograd → 3. N-gram/MLP → 4. Attention → 5. Transformer → 6. Tokenization → 7. Optimization → 8-10. 速度优化（Device/Precision/Distributed）→ 11. Datasets → 12-13. 推理优化（KV-Cache/Quantization）→ 14-15. 微调（SFT/RL）→ 16. Deployment → 17. Multimodal

---

## 六、常用工具与资源链接

### 社区
- **Discord (Zero to Hero)**: https://discord.gg/3zy8kqD9Cp
  - #nanoGPT 频道: nanoGPT 相关讨论
  - #nanochat 频道: nanochat 相关讨论
  - #llmc 频道: llm.c 相关讨论
- **GPU MODE Discord**: https://discord.gg/gpumode (#llmdotc 频道)

### GPU 云计算（Karpathy 推荐）
- Lambda Labs: https://lambda.ai/service/gpu-cloud
- 8×H100 节点约 $24/hr，可训练 GPT-2 级别模型

### 数据集
- TinyStories: 适合小模型训练的儿童故事数据集
- FineWeb (HuggingFace): 大规模预训练语料
- SmolTalk (HuggingFace): SFT 对话数据集

### 文献管理
- arxiv-sanity-lite: 论文推荐 + 浏览 + 搜索

---

## 七、对研究者的建议（综合 Karpathy 观点）

1. **"不要追逐 SOTA，先真正理解基础"** — 这也是他所有教程的设计哲学
2. **"bug 是你的朋友"** — 调试神经网络的过程才是最深刻的学习
3. **"先让它在小数据上工作"** — 过拟合 → 泛化 的迭代速度远快于直接调参
4. **"代码越少越好"** — nanoGPT 的核心只有 ~300 行，但包含了完整 GPT 训练
5. **"用 git commit 记录实验"** — build-nanogpt 的 git 历史就是最佳实践
6. **"论文笔记值得公开"** — paper-notes 仓库虽然简单，但体现了研究者的良好习惯
7. **"量化你自己"** — ulogme 项目体现了他对生产力数据化的重视

---

## 八、AI 编程工具与 Coding Agent（Karpathy 相关观点与资料）

> **说明**：Karpathy 没有专门的博客文章或 YouTube 视频讲解 Claude Code。他关于 AI 编程工具的内容主要发布在 **X/Twitter**（[@karpathy](https://x.com/karpathy)），形式为零散的推文线程和实践分享。以下整理了他的核心观点、可验证的使用证据，以及相关资源。

### 8.1 "Vibe Coding"——Karpathy 推广的核心概念

2025 年初，Karpathy 在 X 上提出了 "**vibe coding**"（氛围编程）这一术语，迅速成为 AI 辅助编程的文化符号。

**核心理念：**
- 开发者不再逐行编写代码，而是用自然语言描述需求，让 AI agent 生成代码
- 开发者角色转变为"需求描述者 + 代码审阅者"
- "I just vibe"——接受 AI 生成的代码，不完全理解每一行细节，而是靠测试和运行结果来判断

**适用场景：**
- 原型开发、一次性脚本、个人项目
- 不适用于：安全关键系统、需要深度理解每一行代码的场景

### 8.2 Claude Code 使用证据

Karpathy 在实际项目中使用 Claude Code：

- **nanochat 仓库**（2025-2026）：包含 `.claude/skills/read-arxiv-paper/` 目录，表明他配置了自定义 Claude Code skill 用于论文阅读辅助
- **Contributing 政策**：nanochat 要求 PR 提交时"声明任何有大量 LLM 贡献的部分"（"declare any parts that had substantial LLM contribution"），体现了对 AI 辅助编程的规范化管理

### 8.3 Karpathy 的 AI 编程工作流（综合 X/Twitter 分享）

基于他在社交媒体上的分享，Karpathy 的 AI 辅助编程工作流特征：

1. **多工具组合使用**：同时使用 Claude Code、Cursor、GitHub Copilot 等，根据不同任务选择最合适的工具
2. **Agent 模式优先**：偏好 agentic 模式（AI 自主执行多步骤任务），而非简单的代码补全
3. **迭代式交互**：先给高层指令 → 审查 AI 输出 → 逐步细化需求
4. **测试驱动**：让 AI 写测试，用测试验证 AI 生成的代码
5. **代码审查仍然关键**：AI 写的代码必须经过人工审查，尤其是涉及性能和安全的部分

### 8.4 相关资源链接

| 资源 | 说明 |
|------|------|
| [Karpathy X/Twitter](https://x.com/karpathy) | Claude Code / vibe coding 的主要讨论平台，搜索关键词 "claude code"、"vibe coding" |
| [nanochat .claude 配置](https://github.com/karpathy/nanochat/tree/master/.claude) | Karpathy 项目的 Claude Code skill 实例，可作为配置参考 |
| [Claude Code 官方文档](https://docs.anthropic.com/en/docs/claude-code) | Anthropic 官方 Claude Code 使用指南 |
| [Claude Code CLI GitHub](https://github.com/anthropics/claude-code) | Claude Code 开源仓库 |

### 8.5 Karpathy 对 AI 编程的态度总结

1. **"AI 编程工具是生产力的巨大飞跃"** — 他将 AI agent 编程比作从汇编语言到高级语言的范式转变
2. **"理解基础仍然重要"** — 即使使用 AI 工具，理解底层原理（如他的 Zero to Hero 系列所教）仍然不可或缺
3. **"工具在快速进化"** — 他建议保持关注但不要过度投入单一工具，生态系统变化很快
4. **"建立判断力"** — 使用 AI 编程的核心技能不是写 prompt，而是判断 AI 输出的正确性和质量

---

## 相关笔记

- [[Claude Code + Obsidian 使用指南]] — 日常研究工具使用
- [[Claude Code Harness 配置指南]] — CLI 自动化配置
- [[科研示意图Prompt设计指南]] — 学术图表生成
