type Item = { name: string; icon: string };

const LOL_VERSION = "13.24";

const RANK: Record<string, number> = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
};

// https://ddragon.leagueoflegends.com/cdn/13.24.1/data/ko_KR/champion.json
// Object.fromEntries(Object.values(champion.data).map(c => [c.key, {name: c.name, icon: c.id}]))
export const CHAMPIONS: Record<number, Item> = {
  "1": {
    name: "애니",
    icon: "Annie",
  },
  "2": {
    name: "올라프",
    icon: "Olaf",
  },
  "3": {
    name: "갈리오",
    icon: "Galio",
  },
  "4": {
    name: "트위스티드 페이트",
    icon: "TwistedFate",
  },
  "5": {
    name: "신 짜오",
    icon: "XinZhao",
  },
  "6": {
    name: "우르곳",
    icon: "Urgot",
  },
  "7": {
    name: "르블랑",
    icon: "Leblanc",
  },
  "8": {
    name: "블라디미르",
    icon: "Vladimir",
  },
  "9": {
    name: "피들스틱",
    icon: "Fiddlesticks",
  },
  "10": {
    name: "케일",
    icon: "Kayle",
  },
  "11": {
    name: "마스터 이",
    icon: "MasterYi",
  },
  "12": {
    name: "알리스타",
    icon: "Alistar",
  },
  "13": {
    name: "라이즈",
    icon: "Ryze",
  },
  "14": {
    name: "사이온",
    icon: "Sion",
  },
  "15": {
    name: "시비르",
    icon: "Sivir",
  },
  "16": {
    name: "소라카",
    icon: "Soraka",
  },
  "17": {
    name: "티모",
    icon: "Teemo",
  },
  "18": {
    name: "트리스타나",
    icon: "Tristana",
  },
  "19": {
    name: "워윅",
    icon: "Warwick",
  },
  "20": {
    name: "누누와 윌럼프",
    icon: "Nunu",
  },
  "21": {
    name: "미스 포츈",
    icon: "MissFortune",
  },
  "22": {
    name: "애쉬",
    icon: "Ashe",
  },
  "23": {
    name: "트린다미어",
    icon: "Tryndamere",
  },
  "24": {
    name: "잭스",
    icon: "Jax",
  },
  "25": {
    name: "모르가나",
    icon: "Morgana",
  },
  "26": {
    name: "질리언",
    icon: "Zilean",
  },
  "27": {
    name: "신지드",
    icon: "Singed",
  },
  "28": {
    name: "이블린",
    icon: "Evelynn",
  },
  "29": {
    name: "트위치",
    icon: "Twitch",
  },
  "30": {
    name: "카서스",
    icon: "Karthus",
  },
  "31": {
    name: "초가스",
    icon: "Chogath",
  },
  "32": {
    name: "아무무",
    icon: "Amumu",
  },
  "33": {
    name: "람머스",
    icon: "Rammus",
  },
  "34": {
    name: "애니비아",
    icon: "Anivia",
  },
  "35": {
    name: "샤코",
    icon: "Shaco",
  },
  "36": {
    name: "문도 박사",
    icon: "DrMundo",
  },
  "37": {
    name: "소나",
    icon: "Sona",
  },
  "38": {
    name: "카사딘",
    icon: "Kassadin",
  },
  "39": {
    name: "이렐리아",
    icon: "Irelia",
  },
  "40": {
    name: "잔나",
    icon: "Janna",
  },
  "41": {
    name: "갱플랭크",
    icon: "Gangplank",
  },
  "42": {
    name: "코르키",
    icon: "Corki",
  },
  "43": {
    name: "카르마",
    icon: "Karma",
  },
  "44": {
    name: "타릭",
    icon: "Taric",
  },
  "45": {
    name: "베이가",
    icon: "Veigar",
  },
  "48": {
    name: "트런들",
    icon: "Trundle",
  },
  "50": {
    name: "스웨인",
    icon: "Swain",
  },
  "51": {
    name: "케이틀린",
    icon: "Caitlyn",
  },
  "53": {
    name: "블리츠크랭크",
    icon: "Blitzcrank",
  },
  "54": {
    name: "말파이트",
    icon: "Malphite",
  },
  "55": {
    name: "카타리나",
    icon: "Katarina",
  },
  "56": {
    name: "녹턴",
    icon: "Nocturne",
  },
  "57": {
    name: "마오카이",
    icon: "Maokai",
  },
  "58": {
    name: "레넥톤",
    icon: "Renekton",
  },
  "59": {
    name: "자르반 4세",
    icon: "JarvanIV",
  },
  "60": {
    name: "엘리스",
    icon: "Elise",
  },
  "61": {
    name: "오리아나",
    icon: "Orianna",
  },
  "62": {
    name: "오공",
    icon: "MonkeyKing",
  },
  "63": {
    name: "브랜드",
    icon: "Brand",
  },
  "64": {
    name: "리 신",
    icon: "LeeSin",
  },
  "67": {
    name: "베인",
    icon: "Vayne",
  },
  "68": {
    name: "럼블",
    icon: "Rumble",
  },
  "69": {
    name: "카시오페아",
    icon: "Cassiopeia",
  },
  "72": {
    name: "스카너",
    icon: "Skarner",
  },
  "74": {
    name: "하이머딩거",
    icon: "Heimerdinger",
  },
  "75": {
    name: "나서스",
    icon: "Nasus",
  },
  "76": {
    name: "니달리",
    icon: "Nidalee",
  },
  "77": {
    name: "우디르",
    icon: "Udyr",
  },
  "78": {
    name: "뽀삐",
    icon: "Poppy",
  },
  "79": {
    name: "그라가스",
    icon: "Gragas",
  },
  "80": {
    name: "판테온",
    icon: "Pantheon",
  },
  "81": {
    name: "이즈리얼",
    icon: "Ezreal",
  },
  "82": {
    name: "모데카이저",
    icon: "Mordekaiser",
  },
  "83": {
    name: "요릭",
    icon: "Yorick",
  },
  "84": {
    name: "아칼리",
    icon: "Akali",
  },
  "85": {
    name: "케넨",
    icon: "Kennen",
  },
  "86": {
    name: "가렌",
    icon: "Garen",
  },
  "89": {
    name: "레오나",
    icon: "Leona",
  },
  "90": {
    name: "말자하",
    icon: "Malzahar",
  },
  "91": {
    name: "탈론",
    icon: "Talon",
  },
  "92": {
    name: "리븐",
    icon: "Riven",
  },
  "96": {
    name: "코그모",
    icon: "KogMaw",
  },
  "98": {
    name: "쉔",
    icon: "Shen",
  },
  "99": {
    name: "럭스",
    icon: "Lux",
  },
  "101": {
    name: "제라스",
    icon: "Xerath",
  },
  "102": {
    name: "쉬바나",
    icon: "Shyvana",
  },
  "103": {
    name: "아리",
    icon: "Ahri",
  },
  "104": {
    name: "그레이브즈",
    icon: "Graves",
  },
  "105": {
    name: "피즈",
    icon: "Fizz",
  },
  "106": {
    name: "볼리베어",
    icon: "Volibear",
  },
  "107": {
    name: "렝가",
    icon: "Rengar",
  },
  "110": {
    name: "바루스",
    icon: "Varus",
  },
  "111": {
    name: "노틸러스",
    icon: "Nautilus",
  },
  "112": {
    name: "빅토르",
    icon: "Viktor",
  },
  "113": {
    name: "세주아니",
    icon: "Sejuani",
  },
  "114": {
    name: "피오라",
    icon: "Fiora",
  },
  "115": {
    name: "직스",
    icon: "Ziggs",
  },
  "117": {
    name: "룰루",
    icon: "Lulu",
  },
  "119": {
    name: "드레이븐",
    icon: "Draven",
  },
  "120": {
    name: "헤카림",
    icon: "Hecarim",
  },
  "121": {
    name: "카직스",
    icon: "Khazix",
  },
  "122": {
    name: "다리우스",
    icon: "Darius",
  },
  "126": {
    name: "제이스",
    icon: "Jayce",
  },
  "127": {
    name: "리산드라",
    icon: "Lissandra",
  },
  "131": {
    name: "다이애나",
    icon: "Diana",
  },
  "133": {
    name: "퀸",
    icon: "Quinn",
  },
  "134": {
    name: "신드라",
    icon: "Syndra",
  },
  "136": {
    name: "아우렐리온 솔",
    icon: "AurelionSol",
  },
  "141": {
    name: "케인",
    icon: "Kayn",
  },
  "142": {
    name: "조이",
    icon: "Zoe",
  },
  "143": {
    name: "자이라",
    icon: "Zyra",
  },
  "145": {
    name: "카이사",
    icon: "Kaisa",
  },
  "147": {
    name: "세라핀",
    icon: "Seraphine",
  },
  "150": {
    name: "나르",
    icon: "Gnar",
  },
  "154": {
    name: "자크",
    icon: "Zac",
  },
  "157": {
    name: "야스오",
    icon: "Yasuo",
  },
  "161": {
    name: "벨코즈",
    icon: "Velkoz",
  },
  "163": {
    name: "탈리야",
    icon: "Taliyah",
  },
  "164": {
    name: "카밀",
    icon: "Camille",
  },
  "166": {
    name: "아크샨",
    icon: "Akshan",
  },
  "200": {
    name: "벨베스",
    icon: "Belveth",
  },
  "201": {
    name: "브라움",
    icon: "Braum",
  },
  "202": {
    name: "진",
    icon: "Jhin",
  },
  "203": {
    name: "킨드레드",
    icon: "Kindred",
  },
  "221": {
    name: "제리",
    icon: "Zeri",
  },
  "222": {
    name: "징크스",
    icon: "Jinx",
  },
  "223": {
    name: "탐 켄치",
    icon: "TahmKench",
  },
  "233": {
    name: "브라이어",
    icon: "Briar",
  },
  "234": {
    name: "비에고",
    icon: "Viego",
  },
  "235": {
    name: "세나",
    icon: "Senna",
  },
  "236": {
    name: "루시안",
    icon: "Lucian",
  },
  "238": {
    name: "제드",
    icon: "Zed",
  },
  "240": {
    name: "클레드",
    icon: "Kled",
  },
  "245": {
    name: "에코",
    icon: "Ekko",
  },
  "246": {
    name: "키아나",
    icon: "Qiyana",
  },
  "254": {
    name: "바이",
    icon: "Vi",
  },
  "266": {
    name: "아트록스",
    icon: "Aatrox",
  },
  "267": {
    name: "나미",
    icon: "Nami",
  },
  "268": {
    name: "아지르",
    icon: "Azir",
  },
  "350": {
    name: "유미",
    icon: "Yuumi",
  },
  "360": {
    name: "사미라",
    icon: "Samira",
  },
  "412": {
    name: "쓰레쉬",
    icon: "Thresh",
  },
  "420": {
    name: "일라오이",
    icon: "Illaoi",
  },
  "421": {
    name: "렉사이",
    icon: "RekSai",
  },
  "427": {
    name: "아이번",
    icon: "Ivern",
  },
  "429": {
    name: "칼리스타",
    icon: "Kalista",
  },
  "432": {
    name: "바드",
    icon: "Bard",
  },
  "497": {
    name: "라칸",
    icon: "Rakan",
  },
  "498": {
    name: "자야",
    icon: "Xayah",
  },
  "516": {
    name: "오른",
    icon: "Ornn",
  },
  "517": {
    name: "사일러스",
    icon: "Sylas",
  },
  "518": {
    name: "니코",
    icon: "Neeko",
  },
  "523": {
    name: "아펠리오스",
    icon: "Aphelios",
  },
  "526": {
    name: "렐",
    icon: "Rell",
  },
  "555": {
    name: "파이크",
    icon: "Pyke",
  },
  "711": {
    name: "벡스",
    icon: "Vex",
  },
  "777": {
    name: "요네",
    icon: "Yone",
  },
  "875": {
    name: "세트",
    icon: "Sett",
  },
  "876": {
    name: "릴리아",
    icon: "Lillia",
  },
  "887": {
    name: "그웬",
    icon: "Gwen",
  },
  "888": {
    name: "레나타 글라스크",
    icon: "Renata",
  },
  "895": {
    name: "닐라",
    icon: "Nilah",
  },
  "897": {
    name: "크산테",
    icon: "KSante",
  },
  "902": {
    name: "밀리오",
    icon: "Milio",
  },
  "910": {
    name: "흐웨이",
    icon: "Hwei",
  },
  "950": {
    name: "나피리",
    icon: "Naafiri",
  },
};

// https://ddragon.leagueoflegends.com/cdn/13.24.1/data/ko_KR/summoner.json
// Object.fromEntries(Object.values(summoner.data).map(s => [s.key, {name: s.name, icon: s.image.full.replace(/\.png$/, "")}]))
export const SPELLS: Record<number, Item> = {
  "1": {
    name: "정화",
    icon: "SummonerBoost",
  },
  "3": {
    name: "탈진",
    icon: "SummonerExhaust",
  },
  "4": {
    name: "점멸",
    icon: "SummonerFlash",
  },
  "6": {
    name: "유체화",
    icon: "SummonerHaste",
  },
  "7": {
    name: "회복",
    icon: "SummonerHeal",
  },
  "11": {
    name: "강타",
    icon: "SummonerSmite",
  },
  "12": {
    name: "순간이동",
    icon: "SummonerTeleport",
  },
  "13": {
    name: "총명",
    icon: "SummonerMana",
  },
  "14": {
    name: "점화",
    icon: "SummonerDot",
  },
  "21": {
    name: "방어막",
    icon: "SummonerBarrier",
  },
  "30": {
    name: "왕을 향해!",
    icon: "SummonerPoroRecall",
  },
  "31": {
    name: "포로 던지기",
    icon: "SummonerPoroThrow",
  },
  "32": {
    name: "표식",
    icon: "SummonerSnowball",
  },
  "39": {
    name: "표식",
    icon: "SummonerSnowURFSnowball_Mark",
  },
  "54": {
    name: "게임 시작 후 결정",
    icon: "Summoner_UltBookPlaceholder",
  },
  "55": {
    name: "TBD 및 공격-강타",
    icon: "Summoner_UltBookSmitePlaceholder",
  },
  "2201": {
    name: "도주",
    icon: "SummonerCherryHold",
  },
  "2202": {
    name: "점멸",
    icon: "SummonerCherryFlash",
  },
};

// https://ddragon.leagueoflegends.com/cdn/13.24.1/data/ko_KR/runesReforged.json
// Object.fromEntries(runesReforged.map(r => [r.id, {name: r.name, icon: r.icon}])
//   .concat(runesReforged.map(p => p.slots).flat().map(s => s.runes).flat()
//     .map(r => [r.id, {name: r.name, icon: r.icon.replace(/perk-images\/(.*)\.png$/, "$1")}])))
export const PERKS: Record<number, Item> = {
  "8000": {
    name: "정밀",
    icon: "Styles/7201_Precision",
  },
  "8005": {
    name: "집중 공격",
    icon: "Styles/Precision/PressTheAttack/PressTheAttack",
  },
  "8008": {
    name: "치명적 속도",
    icon: "Styles/Precision/LethalTempo/LethalTempoTemp",
  },
  "8009": {
    name: "침착",
    icon: "Styles/Precision/PresenceOfMind/PresenceOfMind",
  },
  "8010": {
    name: "정복자",
    icon: "Styles/Precision/Conqueror/Conqueror",
  },
  "8014": {
    name: "최후의 일격",
    icon: "Styles/Precision/CoupDeGrace/CoupDeGrace",
  },
  "8017": {
    name: "체력차 극복",
    icon: "Styles/Precision/CutDown/CutDown",
  },
  "8021": {
    name: "기민한 발놀림",
    icon: "Styles/Precision/FleetFootwork/FleetFootwork",
  },
  "8100": {
    name: "지배",
    icon: "Styles/7200_Domination",
  },
  "8105": {
    name: "끈질긴 사냥꾼",
    icon: "Styles/Domination/RelentlessHunter/RelentlessHunter",
  },
  "8106": {
    name: "궁극의 사냥꾼",
    icon: "Styles/Domination/UltimateHunter/UltimateHunter",
  },
  "8112": {
    name: "감전",
    icon: "Styles/Domination/Electrocute/Electrocute",
  },
  "8120": {
    name: "유령 포로",
    icon: "Styles/Domination/GhostPoro/GhostPoro",
  },
  "8124": {
    name: "포식자",
    icon: "Styles/Domination/Predator/Predator",
  },
  "8126": {
    name: "비열한 한 방",
    icon: "Styles/Domination/CheapShot/CheapShot",
  },
  "8128": {
    name: "어둠의 수확",
    icon: "Styles/Domination/DarkHarvest/DarkHarvest",
  },
  "8134": {
    name: "영리한 사냥꾼",
    icon: "Styles/Domination/IngeniousHunter/IngeniousHunter",
  },
  "8135": {
    name: "보물 사냥꾼",
    icon: "Styles/Domination/TreasureHunter/TreasureHunter",
  },
  "8136": {
    name: "좀비 와드",
    icon: "Styles/Domination/ZombieWard/ZombieWard",
  },
  "8138": {
    name: "사냥의 증표",
    icon: "Styles/Domination/EyeballCollection/EyeballCollection",
  },
  "8139": {
    name: "피의 맛",
    icon: "Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood",
  },
  "8143": {
    name: "돌발 일격",
    icon: "Styles/Domination/SuddenImpact/SuddenImpact",
  },
  "8200": {
    name: "마법",
    icon: "Styles/7202_Sorcery",
  },
  "8210": {
    name: "깨달음",
    icon: "Styles/Sorcery/Transcendence/Transcendence",
  },
  "8214": {
    name: "콩콩이 소환",
    icon: "Styles/Sorcery/SummonAery/SummonAery",
  },
  "8224": {
    name: "무효화 구체",
    icon: "Styles/Sorcery/NullifyingOrb/Pokeshield",
  },
  "8226": {
    name: "마나순환 팔찌",
    icon: "Styles/Sorcery/ManaflowBand/ManaflowBand",
  },
  "8229": {
    name: "신비로운 유성",
    icon: "Styles/Sorcery/ArcaneComet/ArcaneComet",
  },
  "8230": {
    name: "난입",
    icon: "Styles/Sorcery/PhaseRush/PhaseRush",
  },
  "8232": {
    name: "물 위를 걷는 자",
    icon: "Styles/Sorcery/Waterwalking/Waterwalking",
  },
  "8233": {
    name: "절대 집중",
    icon: "Styles/Sorcery/AbsoluteFocus/AbsoluteFocus",
  },
  "8234": {
    name: "기민함",
    icon: "Styles/Sorcery/Celerity/CelerityTemp",
  },
  "8236": {
    name: "폭풍의 결집",
    icon: "Styles/Sorcery/GatheringStorm/GatheringStorm",
  },
  "8237": {
    name: "주문 작열",
    icon: "Styles/Sorcery/Scorch/Scorch",
  },
  "8242": {
    name: "불굴의 의지",
    icon: "Styles/Sorcery/Unflinching/Unflinching",
  },
  "8275": {
    name: "빛의 망토",
    icon: "Styles/Sorcery/NimbusCloak/6361",
  },
  "8299": {
    name: "최후의 저항",
    icon: "Styles/Sorcery/LastStand/LastStand",
  },
  "8300": {
    name: "영감",
    icon: "Styles/7203_Whimsy",
  },
  "8304": {
    name: "마법의 신발",
    icon: "Styles/Inspiration/MagicalFootwear/MagicalFootwear",
  },
  "8306": {
    name: "마법공학 점멸기",
    icon: "Styles/Inspiration/HextechFlashtraption/HextechFlashtraption",
  },
  "8313": {
    name: "완벽한 타이밍",
    icon: "Styles/Inspiration/PerfectTiming/PerfectTiming",
  },
  "8316": {
    name: "미니언 해체분석기",
    icon: "Styles/Inspiration/MinionDematerializer/MinionDematerializer",
  },
  "8321": {
    name: "외상",
    icon: "Styles/Inspiration/FuturesMarket/FuturesMarket",
  },
  "8345": {
    name: "비스킷 배달",
    icon: "Styles/Inspiration/BiscuitDelivery/BiscuitDelivery",
  },
  "8347": {
    name: "우주적 통찰력",
    icon: "Styles/Inspiration/CosmicInsight/CosmicInsight",
  },
  "8351": {
    name: "빙결 강화",
    icon: "Styles/Inspiration/GlacialAugment/GlacialAugment",
  },
  "8352": {
    name: "시간 왜곡 물약",
    icon: "Styles/Inspiration/TimeWarpTonic/TimeWarpTonic",
  },
  "8360": {
    name: "봉인 풀린 주문서",
    icon: "Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook",
  },
  "8369": {
    name: "선제공격",
    icon: "Styles/Inspiration/FirstStrike/FirstStrike",
  },
  "8400": {
    name: "결의",
    icon: "Styles/7204_Resolve",
  },
  "8401": {
    name: "보호막 강타",
    icon: "Styles/Resolve/MirrorShell/MirrorShell",
  },
  "8410": {
    name: "쾌속 접근",
    icon: "Styles/Resolve/ApproachVelocity/ApproachVelocity",
  },
  "8429": {
    name: "사전 준비",
    icon: "Styles/Resolve/Conditioning/Conditioning",
  },
  "8437": {
    name: "착취의 손아귀",
    icon: "Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying",
  },
  "8439": {
    name: "여진",
    icon: "Styles/Resolve/VeteranAftershock/VeteranAftershock",
  },
  "8444": {
    name: "재생의 바람",
    icon: "Styles/Resolve/SecondWind/SecondWind",
  },
  "8446": {
    name: "철거",
    icon: "Styles/Resolve/Demolish/Demolish",
  },
  "8451": {
    name: "과잉성장",
    icon: "Styles/Resolve/Overgrowth/Overgrowth",
  },
  "8453": {
    name: "소생",
    icon: "Styles/Resolve/Revitalize/Revitalize",
  },
  "8463": {
    name: "생명의 샘",
    icon: "Styles/Resolve/FontOfLife/FontOfLife",
  },
  "8465": {
    name: "수호자",
    icon: "Styles/Resolve/Guardian/Guardian",
  },
  "8473": {
    name: "뼈 방패",
    icon: "Styles/Resolve/BonePlating/BonePlating",
  },
  "9101": {
    name: "과다치유",
    icon: "Styles/Precision/Overheal",
  },
  "9103": {
    name: "전설: 핏빛 길",
    icon: "Styles/Precision/LegendBloodline/LegendBloodline",
  },
  "9104": {
    name: "전설: 민첩함",
    icon: "Styles/Precision/LegendAlacrity/LegendAlacrity",
  },
  "9105": {
    name: "전설: 강인함",
    icon: "Styles/Precision/LegendTenacity/LegendTenacity",
  },
  "9111": {
    name: "승전보",
    icon: "Styles/Precision/Triumph",
  },
  "9923": {
    name: "칼날비",
    icon: "Styles/Domination/HailOfBlades/HailOfBlades",
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
  return `/images/${LOL_VERSION}/ranked-positions/${tier}_${POSITION[pos - 1]}.png`;
}

export function getIcon(type: string, item: Item) {
  return `/images/${LOL_VERSION}/${type}/${item.icon}.png`;
}
