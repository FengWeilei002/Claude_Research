import { identities } from "../data/identities";
import type { Ending, IdentityId, PlayerState } from "../types/game";

type BusinessOutcome = "success" | "failure" | "declined" | "none";

interface EndingContext {
  player: PlayerState;
  identityId: IdentityId;
  identityName: string;
  money: number;
  cognition: number;
  health: number;
  fateFracture: number;
  chosenVoices: string[];
  dominantVoice: string;
  businessOutcome: BusinessOutcome;
  whetherStartedBusiness: boolean;
  relationshipFlags: string[];
  trajectory: string[];
  hasRelationshipLink: boolean;
}

interface EndingTemplate {
  title: string;
  archetype: string;
  condition: (context: EndingContext) => boolean;
  poem: (context: EndingContext) => string[];
  monologue: string;
  direction: string;
}

const voiceFallback: Record<IdentityId, string> = {
  professor: "学院理性",
  executive: "资本嗅觉",
  student: "燃烧的火",
  cleaner: "生存本能",
};

export function collectGlobalEndingFlags(players: PlayerState[], unlockedLinks: string[] = []): string[] {
  return Array.from(
    new Set([
      ...unlockedLinks,
      ...players.flatMap((player) => player.flags),
      ...players.flatMap((player) => player.relationshipEffects.map((effect) => effect.id)),
    ]),
  );
}

function normalizeEnding(template: EndingTemplate, context: EndingContext): Ending {
  const poemLines = template.poem(context).slice(0, 8);
  return {
    title: template.title,
    archetype: template.archetype,
    poemLines,
    verdict: poemLines.join("\n"),
    monologue: template.monologue,
    direction: template.direction,
    trajectory: context.trajectory,
  };
}

function getBusinessOutcome(player: PlayerState): BusinessOutcome {
  if (player.flags.includes("startup_wind_survivor")) return "success";
  if (player.flags.includes("startup_meaningful_failure")) return "failure";
  if (player.flags.some((flag) => flag.startsWith("startup_declined_"))) return "declined";
  return "none";
}

function getChosenVoices(player: PlayerState): string[] {
  const fromHistory = player.historyLog
    .filter((entry) => entry.tags?.includes("voice"))
    .map((entry) => entry.title.replace(/^内心声音：/, ""));
  const fromState = player.voiceProfiles
    .filter((voice) => voice.strengthened || voice.weakened)
    .map((voice) => voice.name);
  return Array.from(new Set([...fromHistory, ...fromState]));
}

function getRelationshipFlags(player: PlayerState, globalFlags: string[]): string[] {
  return Array.from(
    new Set([
      ...globalFlags.filter((flag) => flag.startsWith("link_") || flag.includes("-link")),
      ...player.relationshipEffects.map((effect) => effect.id),
      ...player.flags.filter((flag) => flag.startsWith("link_")),
    ]),
  );
}

function summarizeTrajectory(context: EndingContext): string[] {
  const businessText: Record<BusinessOutcome, string> = {
    success: "创业：在风口中幸存",
    failure: "创业：失败，但留下理解",
    declined: "创业：退出上升叙事",
    none: "创业：未留下明确档案",
  };
  const relationshipText = context.hasRelationshipLink ? "关系：曾与他人的命运相连" : "关系：主要独自穿行";
  const voiceText = `声音：${context.chosenVoices.slice(0, 3).join(" / ") || context.dominantVoice}`;
  const fractureText = context.fateFracture >= 2 ? `裂痕：${context.fateFracture} 道仍在发光` : `裂痕：${context.fateFracture} 道，尚未吞没姓名`;
  return [voiceText, businessText[context.businessOutcome], relationshipText, fractureText];
}

function createContext(player: PlayerState, globalFlags: string[] = []): EndingContext {
  const identityId = player.identityId ?? "student";
  const identityName = identities[identityId].name;
  const chosenVoices = getChosenVoices(player);
  const relationshipFlags = getRelationshipFlags(player, globalFlags);
  const businessOutcome = getBusinessOutcome(player);
  const baseContext = {
    player,
    identityId,
    identityName,
    money: player.attributes.money,
    cognition: player.attributes.cognition,
    health: player.attributes.health,
    fateFracture: player.fateFractures,
    chosenVoices,
    dominantVoice: chosenVoices[0] ?? voiceFallback[identityId],
    businessOutcome,
    whetherStartedBusiness: businessOutcome === "success" || businessOutcome === "failure",
    relationshipFlags,
    hasRelationshipLink: relationshipFlags.length > 0,
    trajectory: [] as string[],
  };

  return {
    ...baseContext,
    trajectory: summarizeTrajectory(baseContext),
  };
}

const templates: Record<IdentityId, EndingTemplate[]> = {
  professor: [
    {
      title: "《隐士》",
      archetype: "professor-hermit",
      condition: (context) => context.businessOutcome === "declined" && context.cognition >= 10,
      poem: (context) => [
        "他把讲台搬回雾里，",
        "不再追问掌声从哪里来。",
        `${context.dominantVoice}守在书页边缘，`,
        "像一盏不向广场解释的灯。",
        "城市继续刷新，他继续校订沉默。",
      ],
      monologue: "退场不是消失，有时是把判断从噪声中救出来。",
      direction: "未来方向：公共教育、慢速写作、低欲望的知识共同体。",
    },
    {
      title: "《这座城市的另一种史》",
      archetype: "professor-public-history",
      condition: (context) => context.hasRelationshipLink && context.cognition >= 9,
      poem: () => [
        "他没有写胜利者的年表，",
        "只收集楼道、病历和无名电话。",
        "清洁工的脚步，学生的帖子，",
        "都被他放进同一页注释。",
        "雾城终于有了低处的史书。",
      ],
      monologue: "历史不是高处的钟声，也是低处互相确认的回音。",
      direction: "未来方向：城市记忆项目、社区档案、AI 辅助公共叙事。",
    },
    {
      title: "《风口幸存者》",
      archetype: "professor-venture-survivor",
      condition: (context) => context.businessOutcome === "success",
      poem: () => [
        "他的名字短暂站上电梯最高层，",
        "课程、机构或声望都换成现金流。",
        "可凌晨三点，屏幕仍问：",
        "知识被售出以后，",
        "还是否记得最初的疑问。",
      ],
      monologue: "成功不是答案，只是让问题变得更昂贵。",
      direction: "未来方向：知识创业治理、健康边界、非营利与市场之间的折返。",
    },
    {
      title: "《清醒的旁观者》",
      archetype: "professor-clear-witness",
      condition: (context) => context.cognition >= 10 && context.money < 7,
      poem: () => [
        "他看懂了风向，",
        "却没有因此拥有风。",
        "概念在手里发亮，",
        "钱包仍像一间背阴的房。",
        "清醒使他贫穷，也使他准确。",
      ],
      monologue: "看见结构的人，未必能从结构里获救。",
      direction: "未来方向：开源知识、公共评论、面向下一代的低成本教育。",
    },
    {
      title: "《被时代擦掉的名字》",
      archetype: "professor-erased",
      condition: (context) => context.health <= 2 || context.fateFracture >= 3,
      poem: () => [
        "档案里还有他的署名，",
        "身体却先从时代边缘褪色。",
        "白光、蓝光、金光依次经过，",
        "最后只剩一支笔，",
        "在雾里写得很慢。",
      ],
      monologue: "时代最轻易擦掉的，常是最认真注释它的人。",
      direction: "未来方向：慢病管理、口述史整理、把研究交给更年轻的同行。",
    },
  ],
  executive: [
    {
      title: "《玻璃塔上的失眠者》",
      archetype: "executive-insomniac",
      condition: (context) => context.money >= 10 && context.health <= 4,
      poem: (context) => [
        "他的办公室高过雨线，",
        "却低不过心电图的警报。",
        "利润在玻璃上反光，",
        `${context.dominantVoice}仍在深夜盘点失败。`,
        "城市睡去，他替增长醒着。",
      ],
      monologue: "上升不是抵达，常常只是换一个高度失眠。",
      direction: "未来方向：自动化管理、权力交接、重新学习不被报表定义。",
    },
    {
      title: "《风口幸存者》",
      archetype: "executive-venture-survivor",
      condition: (context) => context.businessOutcome === "success",
      poem: () => [
        "他把风险穿成西装，",
        "在融资灯下重新命名自己。",
        "风口没有爱他，",
        "只是暂时接住了他的判断。",
        "王座还在，只是底部变成服务器。",
      ],
      monologue: "资本从不承诺救赎，它只短暂承认可计算的勇气。",
      direction: "未来方向：平台治理、组织转型、把增长从器官里迁出。",
    },
    {
      title: "《雨夜归来者》",
      archetype: "executive-returned",
      condition: (context) => context.chosenVoices.includes("残余良知") || context.hasRelationshipLink,
      poem: () => [
        "他曾把人名折进表格，",
        "后来又在雨夜把表格摊开。",
        "一些道歉没有出口，",
        "一些救助终于抵达。",
        "良知回来得晚，但仍算回来。",
      ],
      monologue: "迟到的善意不能取消旧债，却能改变偿还的方向。",
      direction: "未来方向：社会企业、员工保障、透明而有限的权力。",
    },
    {
      title: "《隐士》",
      archetype: "executive-retired-keeper",
      condition: (context) => context.businessOutcome === "declined" && context.health >= 5,
      poem: () => [
        "他没有再造一座塔，",
        "只把旧船修到还能过河。",
        "电话少了，睡眠多了一点，",
        "野心在抽屉里合上，",
        "像一份未签的合同。",
      ],
      monologue: "不扩张有时不是衰退，而是从欲望里撤资。",
      direction: "未来方向：小规模经营、顾问角色、把时间还给身体。",
    },
    {
      title: "《被时代擦掉的名字》",
      archetype: "executive-erased",
      condition: (context) => context.businessOutcome === "failure" || context.money <= 3,
      poem: () => [
        "新闻稿很快换了主语，",
        "电梯不再记得他的楼层。",
        "可倒塌以后，他第一次听见：",
        "公司之外，",
        "自己的名字仍有余音。",
      ],
      monologue: "地位会被撤下，人的轮廓未必一同消失。",
      direction: "未来方向：债务修复、职业再定位、从控制转向协作。",
    },
  ],
  student: [
    {
      title: "《穿过雾的人》",
      archetype: "student-through-fog",
      condition: (context) => context.cognition >= 10 && context.health >= 4,
      poem: (context) => [
        "他从网课、帖子和简历间穿过，",
        "没有完全相信任何入口。",
        `${context.dominantVoice}仍在胸口发热，`,
        "但火学会了照明，",
        "不再只负责燃烧。",
      ],
      monologue: "成熟不是熄灭理想，而是让理想学会辨认道路。",
      direction: "未来方向：AI 协作、跨界学习、把表达变成稳固技能。",
    },
    {
      title: "《风口幸存者》",
      archetype: "student-venture-survivor",
      condition: (context) => context.businessOutcome === "success",
      poem: () => [
        "他的年轻被做成产品，",
        "又被他从产品里慢慢赎回。",
        "镜头、订单、团队和账单，",
        "在同一张桌上发亮。",
        "他活过了第一阵风。",
      ],
      monologue: "把自己卖给时代以后，还要学会一点点买回来。",
      direction: "未来方向：内容公司、教育服务、建立不耗尽自我的节奏。",
    },
    {
      title: "《清醒的旁观者》",
      archetype: "student-clear-witness",
      condition: (context) => context.cognition >= 9 && context.money < 6,
      poem: () => [
        "他看懂了排名的机关，",
        "也看懂了热搜的潮汐。",
        "但清醒不能付房租，",
        "只能在雨里递给他一把尺，",
        "量出自己没有弯下的部分。",
      ],
      monologue: "清醒若不能立刻改变命运，至少能改变屈服的姿势。",
      direction: "未来方向：公共写作、研究助理、用技术降低继续思考的成本。",
    },
    {
      title: "《雨夜归来者》",
      archetype: "student-returned",
      condition: (context) => context.businessOutcome === "failure" || context.fateFracture >= 2,
      poem: () => [
        "他曾把未来押在一个窗口，",
        "窗口关闭时，雨还在下。",
        "失败没有给他勋章，",
        "只给他一条回家的路，",
        "和重新开始的胃口。",
      ],
      monologue: "年轻的失败不是终点，是命运第一次要求你亲自改稿。",
      direction: "未来方向：重建技能栈、稳定收入、把失败经验转成判断力。",
    },
    {
      title: "《被时代擦掉的名字》",
      archetype: "student-erased",
      condition: (context) => context.health <= 2 || (context.money <= 3 && context.fateFracture >= 2),
      poem: () => [
        "平台曾短暂叫出他的名字，",
        "后来把它推给下一批年轻人。",
        "夜里还有未看完的课，",
        "和一只发烫的手机。",
        "他在雾里小声保存自己。",
      ],
      monologue: "被看见并不等于被记住，幸好人还能记住自己。",
      direction: "未来方向：身心修复、低压岗位、重新选择不被算法催促的生活。",
    },
  ],
  cleaner: [
    {
      title: "《这座城市的另一种史》",
      archetype: "cleaner-city-history",
      condition: (context) => context.cognition >= 7 || context.hasRelationshipLink,
      poem: () => [
        "他记得雨从哪条巷子先黑，",
        "记得谁在封控夜里递过药。",
        "高楼写城市的正史，",
        "他用脚步写另一种史，",
        "每一页都有灰，也有光。",
      ],
      monologue: "城市真正的档案，常由最早醒来的人保管。",
      direction: "未来方向：社区协调、本地服务网络、把街面经验转成公共知识。",
    },
    {
      title: "《雨夜归来者》",
      archetype: "cleaner-returned",
      condition: (context) => context.health >= 4 && context.fateFracture <= 2,
      poem: (context) => [
        "他从雨夜里回来，",
        "鞋底带着整座城的泥。",
        `${context.dominantVoice}没有大声说话，`,
        "只是把明天摆在门口，",
        "像一只干净的饭盒。",
      ],
      monologue: "尊严不是被赐予的，它常在重复劳动里自己站起来。",
      direction: "未来方向：稳定服务、家庭修复、社区互助中的小规模领导。",
    },
    {
      title: "《风口幸存者》",
      archetype: "cleaner-venture-survivor",
      condition: (context) => context.businessOutcome === "success",
      poem: () => [
        "他终于有了一块自己的招牌，",
        "虽然灯管仍会忽明忽暗。",
        "订单从手机里落下，",
        "街道经验被付了价，",
        "低处也吹过一次风。",
      ],
      monologue: "上升不必像传说，有时只是一盏小店的灯没有熄。",
      direction: "未来方向：本地服务品牌、平台谈判、把身体劳动分摊给组织。",
    },
    {
      title: "《穿过雾的人》",
      archetype: "cleaner-through-fog",
      condition: (context) => context.cognition >= 6 && context.businessOutcome !== "success",
      poem: () => [
        "他没站到楼顶，",
        "却学会读懂楼顶投下的影子。",
        "智能手机、地图和旧扫帚，",
        "一起放在清晨的车筐里。",
        "雾很厚，他仍穿过去。",
      ],
      monologue: "理解世界的人，不一定拥有世界，却不再完全受它摆布。",
      direction: "未来方向：职业培训、平台议价、城市基层服务的经验传承。",
    },
    {
      title: "《被时代擦掉的名字》",
      archetype: "cleaner-erased",
      condition: (context) => context.money <= 3 || context.health <= 2 || context.fateFracture >= 3,
      poem: () => [
        "清晨仍有人扫街，",
        "只是名单上未必有他的名字。",
        "雾城记得高楼的灯，",
        "不总记得擦亮灯下路面的人。",
        "他把自己留在一声咳嗽里。",
      ],
      monologue: "被时代忽略的人，往往承担了时代最具体的重量。",
      direction: "未来方向：公共保障、医疗修复、可持续的低强度工作。",
    },
  ],
};

const fallbackTemplate: EndingTemplate = {
  title: "《普通人的远岸》",
  archetype: "ordinary-shore",
  condition: () => true,
  poem: (context) => [
    "他没有成为神话，",
    "也没有被雾城完全吞没。",
    `${context.dominantVoice}仍在胸口回响，`,
    "像雨后路面的一点反光。",
    "四十年过去，生活仍可继续。",
  ],
  monologue: "命运不是直线，而是每一次迟疑留下的路面。",
  direction: "未来方向：用 AI 工具补足短板，在本地生活与全球机会之间保持弹性。",
};

export function buildEnding(player: PlayerState, globalFlags: string[] = []): Ending {
  const context = createContext(player, globalFlags);
  const template = templates[context.identityId].find((item) => item.condition(context)) ?? fallbackTemplate;
  return normalizeEnding(template, context);
}
