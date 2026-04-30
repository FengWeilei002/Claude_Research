# paper-discipline-skills：面向中文科研写作的 Claude Code 纪律 Skill 集

## 基本信息

- **GitHub**: [ChenHaNing/paper-discipline-skills](https://github.com/ChenHaNing/paper-discipline-skills)
- **作者**: Chanw（管理学科方向研究者，小红书同名）
- **License**: MIT
- **发布时间**: 2026-04-29
- **安装位置**: `D:\research\paper-discipline-skills\`（软链接至 `~/.claude/skills/`）
- **Skill 数量**: 12 个
- **来源**: 《Claude Code 科研手记》一书（27 个项目、1000+ 次会话、12 万条对话）的真实踩坑教训

## 核心理念

> 科研写作翻车，不是因为不知道，是因为知道但累了、赶时间、觉得这次不一样而跳过。

把"踩过坑后才悟出来的动作"变成 AI 在动手前必须先执行的检查点。每条 Skill 都包含统一的六栏目结构：核心理念、触发条件、强制流程、标准回复模板、Rationalization Table、Red Flags。

三个设计特点：
1. **可操作**：强制流程图 + 标准回复模板，AI 不需要"理解"就能直接套用
2. **抗合理化**：Rationalization Table 封掉 AI 在赶时间/累了时会跳过流程的借口
3. **来自真实踩坑**：每条 Skill 对应书中一段具体翻车案例

## 12 个 Skill 清单

### 1. `paper-using-skills` — 入口与强制触发器
- **触发**: 任何科研写作开场
- **防护**: 建立"1% 可能适用就必须调用"的硬规则，列出各 skill 触发条件
- **定位**: 本系列的总入口，确保其他 11 个 skill 不被跳过

### 2. `paper-claude-md-bootstrap` — 新项目初始化
- **触发**: 新论文项目第一次开会话
- **防护**: AI 反复要你解释研究背景（每次新会话丢失上下文）
- **机制**: 引导用户在新项目首次会话时创建 CLAUDE.md，固化研究背景

### 3. `paper-confirm-before-doing` — 模糊任务先确认
- **触发**: "改一下"、"整理下"、"润色"、"重写"、"统一"、"清理" 等模糊指令
- **防护**: AI 自由发挥跑偏（改掉作者刻意保留的口语表达、导师要求保留的引文）
- **流程**: 先陈述方案 → 做一小段效果展示 → 用户确认 → 全量执行

### 4. `paper-one-session-one-task` — 一次会话一件事
- **触发**: 一次对话提多件事，或在做 A 时临时追加 B
- **防护**: 上下文污染、决策质量随会话长度劣化
- **原则**: 每多做一件事，前一件事的上下文就被稀释一分

### 5. `paper-protect-terminology` — 术语一致性保护
- **触发**: 跨多文件批改、术语统一操作
- **防护**: 专业术语被 AI 同义替换（如"运营柔性" → "运营灵活性"）
- **机制**: 改动前先提取术语清单，逐条确认是否可以替换

### 6. `paper-backup-before-word` — Word 文件操作前备份
- **触发**: 编辑 .docx / Word 文件
- **防护**: XML 损坏、误覆盖原文
- **流程**: 先 `cp` 创建带时间戳备份 → 再编辑 → 提醒验证完整性

### 7. `paper-pilot-before-batch` — 批量任务先试点
- **触发**: 处理 ≥ 30 条目的批量任务
- **防护**: 全量跑炸了改不回来
- **流程**: 先拿 2-3 个样本验证方案正确性 → 确认效果 → 全量执行

### 8. `paper-parallel-audit` — 大批量核查并行 Agent 模式
- **触发**: ≥ 30 条目的引用核查 / 术语一致性检查 / 格式统一
- **防护**: 串行慢 + 中间挂了从头来
- **模式**: 派多个 Agent 并行 + 每个输出 JSON + 主进程汇总 + 分批断点续跑
- **效率**: 156 篇引用串行 ≈ 5 小时；3 Agent 并行 ≈ 1 小时

### 9. `paper-translate-advisor-feedback` — 导师反馈翻译
- **触发**: 拿到导师录音、便条、口头反馈
- **防护**: AI 听不懂学术口语（导师的口语化批评 → AI 理解偏差）
- **流程**: 先转写原文 → 标注模糊处 → 列出待确认理解 → 用户确认后再执行

### 10. `paper-logical-consistency` — 论证一致性
- **触发**: 改动核心声明 / 研究问题 / 主要结论 / 假设 / 边界条件
- **防护**: 改一处忘记联动修改其他章节，论证穿帮
- **区分**: 语义级（论证一致性）vs 机械级（术语一致性），两者互不替代
- **流程**: 扫描该声明在全文出现位置 → 列出需要联动修改的章节 → 用户确认 → 执行

### 11. `paper-verify-before-handoff` — 交付前硬核查
- **触发**: 准备发给导师 / 提交
- **防护**: AI 写得太流畅让人放松警惕
- **清单**: 10 项硬核查——术语 / 引用 / 数据 / 图表 / 交叉引用 / 字数 / Todo 残留 / AIGC 痕迹 / 论证一致性 / 改动概要

### 12. `paper-writing-discipline` — 新坑变新 Skill
- **触发**: 用户说"以后...都要..."、"下次记得..."、"加一条新规则"
- **防护**: 踩坑教训不被系统化，下次再犯
- **流程**: 4 个判断题筛选新坑 → 按模板提炼 → 落盘为新的 paper-* skill

## 设计模式参考

设计模式来自 Anthropic 社区的 **superpowers** 项目，针对中文科研写作场景做了重写：

| 概念 | 说明 |
|------|------|
| **Iron Law** | 4 个判断题筛选新坑是否值得固化为 Skill |
| **Rationalization Table** | "念头 vs 现实"对照表，封掉合理化借口 |
| **Red Flags** | 自检停止信号——出现这些念头说明正在跳过流程 |
| **强制流程图** | 每个 Skill 配备的操作流程，AI 不需理解即可套用 |

触发词、举例、Rationalization Table 全部对应中国研究生与青年科研学者的工作习惯。

## 安装记录

```bash
# 克隆到 D 盘
git clone https://github.com/ChenHaNing/paper-discipline-skills.git D:\research\paper-discipline-skills

# 创建软链接到 Claude Code skills 目录
mkdir -p ~/.claude/skills
cd ~/.claude/skills
for dir in /d/research/paper-discipline-skills/paper-*/; do
    ln -sf "$dir" "$(basename "$dir")"
done
```

安装完成后，新会话中 12 个 Skill 会出现在 Claude Code 的系统提示里，按各自的 description 自动触发。

## 与 ResearchVault 的关联

- 本 vault 的科研场景（运筹学/理论经济学博士研究）与这组 Skill 高度匹配
- 当前 vault 已有 `paper-confirm-before-doing` 部分理念的实践（如文献核查流程模板在 [[90_Templates/文献核查工作流prompt模板]]）
- 建议后续在以下场景中重点依赖：
  - 论文章节起草 → `paper-confirm-before-doing` + `paper-logical-consistency`
  - 文献综述批量整理 → `paper-pilot-before-batch` + `paper-parallel-audit`
  - 引用核查 → `paper-parallel-audit`（30+ 条引用时）
  - 发给导师前 → `paper-verify-before-handoff`
- 如需针对运筹学/经济学特化（如公式推导一致性、优化模型符号统一等），可使用 `paper-writing-discipline` 创建新 Skill

## 安全声明（来自原仓库）

Skill 能让 AI agent 执行代码、修改文件。本仓库的 12 个 Skill 是纯 Markdown 文件，不包含可执行代码——但它们会让 AI 主动调用 Edit / Write / Bash 等工具改你的文件。安装前已自行阅读各 SKILL.md 确认行为。

## 使用方式

不需要主动调用。AI 按 Skill 的 description 自动判断触发。如果某次没按预期触发，可以显式说"按 paper-confirm-before-doing 走一遍"或用 `/<skill-name>` 强制调用。

## 相关资源

- 小红书搜索 **Chanw** — Claude Code 科研手记系列
- 《Claude Code 科研手记》PDF 版：小红书私信获取
- [[文献核查工作流prompt模板]] — vault 内已有的类似实践
- [[Claude Code 辅助科研详细操作指南]] — vault 内 Claude Code 科研配置指南
