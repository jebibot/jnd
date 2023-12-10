type Item = { name: string; icon: string };

const RANK: Record<string, number> = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
};

// https://ddragon.leagueoflegends.com/cdn/13.24.1/data/ko_KR/champion.json
// Object.fromEntries(Object.values(champion.data).map(c => [c.key, c.name]))
export const CHAMPIONS: Record<number, string> = {
  "1": "애니",
  "2": "올라프",
  "3": "갈리오",
  "4": "트위스티드 페이트",
  "5": "신 짜오",
  "6": "우르곳",
  "7": "르블랑",
  "8": "블라디미르",
  "9": "피들스틱",
  "10": "케일",
  "11": "마스터 이",
  "12": "알리스타",
  "13": "라이즈",
  "14": "사이온",
  "15": "시비르",
  "16": "소라카",
  "17": "티모",
  "18": "트리스타나",
  "19": "워윅",
  "20": "누누와 윌럼프",
  "21": "미스 포츈",
  "22": "애쉬",
  "23": "트린다미어",
  "24": "잭스",
  "25": "모르가나",
  "26": "질리언",
  "27": "신지드",
  "28": "이블린",
  "29": "트위치",
  "30": "카서스",
  "31": "초가스",
  "32": "아무무",
  "33": "람머스",
  "34": "애니비아",
  "35": "샤코",
  "36": "문도 박사",
  "37": "소나",
  "38": "카사딘",
  "39": "이렐리아",
  "40": "잔나",
  "41": "갱플랭크",
  "42": "코르키",
  "43": "카르마",
  "44": "타릭",
  "45": "베이가",
  "48": "트런들",
  "50": "스웨인",
  "51": "케이틀린",
  "53": "블리츠크랭크",
  "54": "말파이트",
  "55": "카타리나",
  "56": "녹턴",
  "57": "마오카이",
  "58": "레넥톤",
  "59": "자르반 4세",
  "60": "엘리스",
  "61": "오리아나",
  "62": "오공",
  "63": "브랜드",
  "64": "리 신",
  "67": "베인",
  "68": "럼블",
  "69": "카시오페아",
  "72": "스카너",
  "74": "하이머딩거",
  "75": "나서스",
  "76": "니달리",
  "77": "우디르",
  "78": "뽀삐",
  "79": "그라가스",
  "80": "판테온",
  "81": "이즈리얼",
  "82": "모데카이저",
  "83": "요릭",
  "84": "아칼리",
  "85": "케넨",
  "86": "가렌",
  "89": "레오나",
  "90": "말자하",
  "91": "탈론",
  "92": "리븐",
  "96": "코그모",
  "98": "쉔",
  "99": "럭스",
  "101": "제라스",
  "102": "쉬바나",
  "103": "아리",
  "104": "그레이브즈",
  "105": "피즈",
  "106": "볼리베어",
  "107": "렝가",
  "110": "바루스",
  "111": "노틸러스",
  "112": "빅토르",
  "113": "세주아니",
  "114": "피오라",
  "115": "직스",
  "117": "룰루",
  "119": "드레이븐",
  "120": "헤카림",
  "121": "카직스",
  "122": "다리우스",
  "126": "제이스",
  "127": "리산드라",
  "131": "다이애나",
  "133": "퀸",
  "134": "신드라",
  "136": "아우렐리온 솔",
  "141": "케인",
  "142": "조이",
  "143": "자이라",
  "145": "카이사",
  "147": "세라핀",
  "150": "나르",
  "154": "자크",
  "157": "야스오",
  "161": "벨코즈",
  "163": "탈리야",
  "164": "카밀",
  "166": "아크샨",
  "200": "벨베스",
  "201": "브라움",
  "202": "진",
  "203": "킨드레드",
  "221": "제리",
  "222": "징크스",
  "223": "탐 켄치",
  "233": "브라이어",
  "234": "비에고",
  "235": "세나",
  "236": "루시안",
  "238": "제드",
  "240": "클레드",
  "245": "에코",
  "246": "키아나",
  "254": "바이",
  "266": "아트록스",
  "267": "나미",
  "268": "아지르",
  "350": "유미",
  "360": "사미라",
  "412": "쓰레쉬",
  "420": "일라오이",
  "421": "렉사이",
  "427": "아이번",
  "429": "칼리스타",
  "432": "바드",
  "497": "라칸",
  "498": "자야",
  "516": "오른",
  "517": "사일러스",
  "518": "니코",
  "523": "아펠리오스",
  "526": "렐",
  "555": "파이크",
  "711": "벡스",
  "777": "요네",
  "875": "세트",
  "876": "릴리아",
  "887": "그웬",
  "888": "레나타 글라스크",
  "895": "닐라",
  "897": "크산테",
  "902": "밀리오",
  "910": "흐웨이",
  "950": "나피리",
};

// https://ddragon.leagueoflegends.com/cdn/13.24.1/data/ko_KR/summoner.json
// Object.fromEntries(Object.values(summoner.data).map(s => [s.key, {name: s.name, icon: s.image.full}]))
export const SPELLS: Record<number, Item> = {
  "1": {
    name: "정화",
    icon: "SummonerBoost.png",
  },
  "3": {
    name: "탈진",
    icon: "SummonerExhaust.png",
  },
  "4": {
    name: "점멸",
    icon: "SummonerFlash.png",
  },
  "6": {
    name: "유체화",
    icon: "SummonerHaste.png",
  },
  "7": {
    name: "회복",
    icon: "SummonerHeal.png",
  },
  "11": {
    name: "강타",
    icon: "SummonerSmite.png",
  },
  "12": {
    name: "순간이동",
    icon: "SummonerTeleport.png",
  },
  "13": {
    name: "총명",
    icon: "SummonerMana.png",
  },
  "14": {
    name: "점화",
    icon: "SummonerDot.png",
  },
  "21": {
    name: "방어막",
    icon: "SummonerBarrier.png",
  },
  "30": {
    name: "왕을 향해!",
    icon: "SummonerPoroRecall.png",
  },
  "31": {
    name: "포로 던지기",
    icon: "SummonerPoroThrow.png",
  },
  "32": {
    name: "표식",
    icon: "SummonerSnowball.png",
  },
  "39": {
    name: "표식",
    icon: "SummonerSnowURFSnowball_Mark.png",
  },
  "54": {
    name: "게임 시작 후 결정",
    icon: "Summoner_UltBookPlaceholder.png",
  },
  "55": {
    name: "TBD 및 공격-강타",
    icon: "Summoner_UltBookSmitePlaceholder.png",
  },
  "2201": {
    name: "도주",
    icon: "SummonerCherryHold.png",
  },
  "2202": {
    name: "점멸",
    icon: "SummonerCherryFlash.png",
  },
};

// https://ddragon.leagueoflegends.com/cdn/13.24.1/data/ko_KR/runesReforged.json
// Object.fromEntries(runesReforged.map(r => [r.id, {name: r.name, icon: r.icon}])
//   .concat(runesReforged.map(p => p.slots).flat().map(s => s.runes).flat()
//     .map(r => [r.id, {name: r.name, icon: r.icon}])))
export const PERKS: Record<number, Item> = {
  "8000": {
    name: "정밀",
    icon: "perk-images/Styles/7201_Precision.png",
  },
  "8005": {
    name: "집중 공격",
    icon: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png",
  },
  "8008": {
    name: "치명적 속도",
    icon: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png",
  },
  "8009": {
    name: "침착",
    icon: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png",
  },
  "8010": {
    name: "정복자",
    icon: "perk-images/Styles/Precision/Conqueror/Conqueror.png",
  },
  "8014": {
    name: "최후의 일격",
    icon: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png",
  },
  "8017": {
    name: "체력차 극복",
    icon: "perk-images/Styles/Precision/CutDown/CutDown.png",
  },
  "8021": {
    name: "기민한 발놀림",
    icon: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png",
  },
  "8100": {
    name: "지배",
    icon: "perk-images/Styles/7200_Domination.png",
  },
  "8105": {
    name: "끈질긴 사냥꾼",
    icon: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png",
  },
  "8106": {
    name: "궁극의 사냥꾼",
    icon: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png",
  },
  "8112": {
    name: "감전",
    icon: "perk-images/Styles/Domination/Electrocute/Electrocute.png",
  },
  "8120": {
    name: "유령 포로",
    icon: "perk-images/Styles/Domination/GhostPoro/GhostPoro.png",
  },
  "8124": {
    name: "포식자",
    icon: "perk-images/Styles/Domination/Predator/Predator.png",
  },
  "8126": {
    name: "비열한 한 방",
    icon: "perk-images/Styles/Domination/CheapShot/CheapShot.png",
  },
  "8128": {
    name: "어둠의 수확",
    icon: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png",
  },
  "8134": {
    name: "영리한 사냥꾼",
    icon: "perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png",
  },
  "8135": {
    name: "보물 사냥꾼",
    icon: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png",
  },
  "8136": {
    name: "좀비 와드",
    icon: "perk-images/Styles/Domination/ZombieWard/ZombieWard.png",
  },
  "8138": {
    name: "사냥의 증표",
    icon: "perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png",
  },
  "8139": {
    name: "피의 맛",
    icon: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png",
  },
  "8143": {
    name: "돌발 일격",
    icon: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png",
  },
  "8200": {
    name: "마법",
    icon: "perk-images/Styles/7202_Sorcery.png",
  },
  "8210": {
    name: "깨달음",
    icon: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png",
  },
  "8214": {
    name: "콩콩이 소환",
    icon: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png",
  },
  "8224": {
    name: "무효화 구체",
    icon: "perk-images/Styles/Sorcery/NullifyingOrb/Pokeshield.png",
  },
  "8226": {
    name: "마나순환 팔찌",
    icon: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png",
  },
  "8229": {
    name: "신비로운 유성",
    icon: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png",
  },
  "8230": {
    name: "난입",
    icon: "perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png",
  },
  "8232": {
    name: "물 위를 걷는 자",
    icon: "perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png",
  },
  "8233": {
    name: "절대 집중",
    icon: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png",
  },
  "8234": {
    name: "기민함",
    icon: "perk-images/Styles/Sorcery/Celerity/CelerityTemp.png",
  },
  "8236": {
    name: "폭풍의 결집",
    icon: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png",
  },
  "8237": {
    name: "주문 작열",
    icon: "perk-images/Styles/Sorcery/Scorch/Scorch.png",
  },
  "8242": {
    name: "불굴의 의지",
    icon: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png",
  },
  "8275": {
    name: "빛의 망토",
    icon: "perk-images/Styles/Sorcery/NimbusCloak/6361.png",
  },
  "8299": {
    name: "최후의 저항",
    icon: "perk-images/Styles/Sorcery/LastStand/LastStand.png",
  },
  "8300": {
    name: "영감",
    icon: "perk-images/Styles/7203_Whimsy.png",
  },
  "8304": {
    name: "마법의 신발",
    icon: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png",
  },
  "8306": {
    name: "마법공학 점멸기",
    icon: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png",
  },
  "8313": {
    name: "완벽한 타이밍",
    icon: "perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png",
  },
  "8316": {
    name: "미니언 해체분석기",
    icon: "perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png",
  },
  "8321": {
    name: "외상",
    icon: "perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png",
  },
  "8345": {
    name: "비스킷 배달",
    icon: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png",
  },
  "8347": {
    name: "우주적 통찰력",
    icon: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png",
  },
  "8351": {
    name: "빙결 강화",
    icon: "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png",
  },
  "8352": {
    name: "시간 왜곡 물약",
    icon: "perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png",
  },
  "8360": {
    name: "봉인 풀린 주문서",
    icon: "perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png",
  },
  "8369": {
    name: "선제공격",
    icon: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png",
  },
  "8400": {
    name: "결의",
    icon: "perk-images/Styles/7204_Resolve.png",
  },
  "8401": {
    name: "보호막 강타",
    icon: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png",
  },
  "8410": {
    name: "쾌속 접근",
    icon: "perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png",
  },
  "8429": {
    name: "사전 준비",
    icon: "perk-images/Styles/Resolve/Conditioning/Conditioning.png",
  },
  "8437": {
    name: "착취의 손아귀",
    icon: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png",
  },
  "8439": {
    name: "여진",
    icon: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png",
  },
  "8444": {
    name: "재생의 바람",
    icon: "perk-images/Styles/Resolve/SecondWind/SecondWind.png",
  },
  "8446": {
    name: "철거",
    icon: "perk-images/Styles/Resolve/Demolish/Demolish.png",
  },
  "8451": {
    name: "과잉성장",
    icon: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png",
  },
  "8453": {
    name: "소생",
    icon: "perk-images/Styles/Resolve/Revitalize/Revitalize.png",
  },
  "8463": {
    name: "생명의 샘",
    icon: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png",
  },
  "8465": {
    name: "수호자",
    icon: "perk-images/Styles/Resolve/Guardian/Guardian.png",
  },
  "8473": {
    name: "뼈 방패",
    icon: "perk-images/Styles/Resolve/BonePlating/BonePlating.png",
  },
  "9101": {
    name: "과다치유",
    icon: "perk-images/Styles/Precision/Overheal.png",
  },
  "9103": {
    name: "전설: 핏빛 길",
    icon: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png",
  },
  "9104": {
    name: "전설: 민첩함",
    icon: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png",
  },
  "9105": {
    name: "전설: 강인함",
    icon: "perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png",
  },
  "9111": {
    name: "승전보",
    icon: "perk-images/Styles/Precision/Triumph.png",
  },
  "9923": {
    name: "칼날비",
    icon: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png",
  },
};

// https://static.developer.riotgames.com/docs/lol/queues.json
export const QUEUES: Record<number, string> = {
  "0": "사용자 설정",
  "420": "솔로랭크",
  "440": "자유랭크",
};

export const POSITION = ["TOP", "JUG", "MID", "ADC", "SUP"];

export const STATS_SITE = {
  "op.gg": (nick: string) =>
    `https://www.op.gg/summoners/kr/${encodeURIComponent(
      nick.replace("#", "-"),
    )}`,
  "fow.kr": (nick: string) =>
    `https://fow.kr/find/${encodeURIComponent(nick.replace("#", "-"))}`,
  "lol.ps": (nick: string) =>
    `https://lol.ps/summoner/${encodeURIComponent(nick.replace("#", "_"))}`,
  "poro.gg": (nick: string) =>
    `https://poro.gg/summoner/kr/${encodeURIComponent(nick.replace("#", "-"))}`,
  "deeplol.gg": (nick: string) =>
    `https://www.deeplol.gg/summoner/kr/${encodeURIComponent(
      nick.replace("#", "-"),
    )}`,
  "your.gg": (nick: string) =>
    `https://your.gg/ko/kr/profile/${encodeURIComponent(nick)}`,
};

export function getShortRank(rank: string | null) {
  if (!rank) {
    return "U";
  }
  const parts = rank.split(",");
  return `${parts[0][0]}${RANK[parts[1]]}`;
}

export function getRank(rank: string | null) {
  if (!rank) {
    return "Unranked";
  }
  const parts = rank.split(",");
  return `${parts[0][0]}${parts[0].slice(1).toLowerCase()} ${parts[1]}`;
}

export function getPoint(rank: string | null) {
  if (!rank) {
    return "";
  }
  const parts = rank.split(",");
  return `${parts[2]} LP`;
}

export function getTierIcon(rank: string | null, pos: number) {
  let tier = "GOLD";
  if (rank) {
    tier = rank.split(",")[0];
  }
  return `/images/${tier}_${POSITION[pos - 1]}.png`;
}

export function getPerkIcon(perk: Item) {
  return `https://ddragon.leagueoflegends.com/cdn/img/${perk.icon}`;
}

export function getChampionIcon(id: number) {
  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${id}.png`;
}

export function getSpellIcon(spell: Item) {
  return `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/${spell.icon}`;
}
