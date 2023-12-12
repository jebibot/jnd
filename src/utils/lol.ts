import "server-only";
import { StaticImageData } from "next/image";

import ChampionAatrox from "../../public/images/champion/Aatrox.png";
import ChampionAhri from "../../public/images/champion/Ahri.png";
import ChampionAkali from "../../public/images/champion/Akali.png";
import ChampionAkshan from "../../public/images/champion/Akshan.png";
import ChampionAlistar from "../../public/images/champion/Alistar.png";
import ChampionAmumu from "../../public/images/champion/Amumu.png";
import ChampionAnivia from "../../public/images/champion/Anivia.png";
import ChampionAnnie from "../../public/images/champion/Annie.png";
import ChampionAphelios from "../../public/images/champion/Aphelios.png";
import ChampionAshe from "../../public/images/champion/Ashe.png";
import ChampionAurelionSol from "../../public/images/champion/AurelionSol.png";
import ChampionAzir from "../../public/images/champion/Azir.png";
import ChampionBard from "../../public/images/champion/Bard.png";
import ChampionBelveth from "../../public/images/champion/Belveth.png";
import ChampionBlitzcrank from "../../public/images/champion/Blitzcrank.png";
import ChampionBrand from "../../public/images/champion/Brand.png";
import ChampionBraum from "../../public/images/champion/Braum.png";
import ChampionBriar from "../../public/images/champion/Briar.png";
import ChampionCaitlyn from "../../public/images/champion/Caitlyn.png";
import ChampionCamille from "../../public/images/champion/Camille.png";
import ChampionCassiopeia from "../../public/images/champion/Cassiopeia.png";
import ChampionChogath from "../../public/images/champion/Chogath.png";
import ChampionCorki from "../../public/images/champion/Corki.png";
import ChampionDarius from "../../public/images/champion/Darius.png";
import ChampionDiana from "../../public/images/champion/Diana.png";
import ChampionDraven from "../../public/images/champion/Draven.png";
import ChampionDrMundo from "../../public/images/champion/DrMundo.png";
import ChampionEkko from "../../public/images/champion/Ekko.png";
import ChampionElise from "../../public/images/champion/Elise.png";
import ChampionEvelynn from "../../public/images/champion/Evelynn.png";
import ChampionEzreal from "../../public/images/champion/Ezreal.png";
import ChampionFiddlesticks from "../../public/images/champion/Fiddlesticks.png";
import ChampionFiora from "../../public/images/champion/Fiora.png";
import ChampionFizz from "../../public/images/champion/Fizz.png";
import ChampionGalio from "../../public/images/champion/Galio.png";
import ChampionGangplank from "../../public/images/champion/Gangplank.png";
import ChampionGaren from "../../public/images/champion/Garen.png";
import ChampionGnar from "../../public/images/champion/Gnar.png";
import ChampionGragas from "../../public/images/champion/Gragas.png";
import ChampionGraves from "../../public/images/champion/Graves.png";
import ChampionGwen from "../../public/images/champion/Gwen.png";
import ChampionHecarim from "../../public/images/champion/Hecarim.png";
import ChampionHeimerdinger from "../../public/images/champion/Heimerdinger.png";
import ChampionHwei from "../../public/images/champion/Hwei.png";
import ChampionIllaoi from "../../public/images/champion/Illaoi.png";
import ChampionIrelia from "../../public/images/champion/Irelia.png";
import ChampionIvern from "../../public/images/champion/Ivern.png";
import ChampionJanna from "../../public/images/champion/Janna.png";
import ChampionJarvanIV from "../../public/images/champion/JarvanIV.png";
import ChampionJax from "../../public/images/champion/Jax.png";
import ChampionJayce from "../../public/images/champion/Jayce.png";
import ChampionJhin from "../../public/images/champion/Jhin.png";
import ChampionJinx from "../../public/images/champion/Jinx.png";
import ChampionKaisa from "../../public/images/champion/Kaisa.png";
import ChampionKalista from "../../public/images/champion/Kalista.png";
import ChampionKarma from "../../public/images/champion/Karma.png";
import ChampionKarthus from "../../public/images/champion/Karthus.png";
import ChampionKassadin from "../../public/images/champion/Kassadin.png";
import ChampionKatarina from "../../public/images/champion/Katarina.png";
import ChampionKayle from "../../public/images/champion/Kayle.png";
import ChampionKayn from "../../public/images/champion/Kayn.png";
import ChampionKennen from "../../public/images/champion/Kennen.png";
import ChampionKhazix from "../../public/images/champion/Khazix.png";
import ChampionKindred from "../../public/images/champion/Kindred.png";
import ChampionKled from "../../public/images/champion/Kled.png";
import ChampionKogMaw from "../../public/images/champion/KogMaw.png";
import ChampionKSante from "../../public/images/champion/KSante.png";
import ChampionLeblanc from "../../public/images/champion/Leblanc.png";
import ChampionLeeSin from "../../public/images/champion/LeeSin.png";
import ChampionLeona from "../../public/images/champion/Leona.png";
import ChampionLillia from "../../public/images/champion/Lillia.png";
import ChampionLissandra from "../../public/images/champion/Lissandra.png";
import ChampionLucian from "../../public/images/champion/Lucian.png";
import ChampionLulu from "../../public/images/champion/Lulu.png";
import ChampionLux from "../../public/images/champion/Lux.png";
import ChampionMalphite from "../../public/images/champion/Malphite.png";
import ChampionMalzahar from "../../public/images/champion/Malzahar.png";
import ChampionMaokai from "../../public/images/champion/Maokai.png";
import ChampionMasterYi from "../../public/images/champion/MasterYi.png";
import ChampionMilio from "../../public/images/champion/Milio.png";
import ChampionMissFortune from "../../public/images/champion/MissFortune.png";
import ChampionMonkeyKing from "../../public/images/champion/MonkeyKing.png";
import ChampionMordekaiser from "../../public/images/champion/Mordekaiser.png";
import ChampionMorgana from "../../public/images/champion/Morgana.png";
import ChampionNaafiri from "../../public/images/champion/Naafiri.png";
import ChampionNami from "../../public/images/champion/Nami.png";
import ChampionNasus from "../../public/images/champion/Nasus.png";
import ChampionNautilus from "../../public/images/champion/Nautilus.png";
import ChampionNeeko from "../../public/images/champion/Neeko.png";
import ChampionNidalee from "../../public/images/champion/Nidalee.png";
import ChampionNilah from "../../public/images/champion/Nilah.png";
import ChampionNocturne from "../../public/images/champion/Nocturne.png";
import ChampionNunu from "../../public/images/champion/Nunu.png";
import ChampionOlaf from "../../public/images/champion/Olaf.png";
import ChampionOrianna from "../../public/images/champion/Orianna.png";
import ChampionOrnn from "../../public/images/champion/Ornn.png";
import ChampionPantheon from "../../public/images/champion/Pantheon.png";
import ChampionPoppy from "../../public/images/champion/Poppy.png";
import ChampionPyke from "../../public/images/champion/Pyke.png";
import ChampionQiyana from "../../public/images/champion/Qiyana.png";
import ChampionQuinn from "../../public/images/champion/Quinn.png";
import ChampionRakan from "../../public/images/champion/Rakan.png";
import ChampionRammus from "../../public/images/champion/Rammus.png";
import ChampionRekSai from "../../public/images/champion/RekSai.png";
import ChampionRell from "../../public/images/champion/Rell.png";
import ChampionRenata from "../../public/images/champion/Renata.png";
import ChampionRenekton from "../../public/images/champion/Renekton.png";
import ChampionRengar from "../../public/images/champion/Rengar.png";
import ChampionRiven from "../../public/images/champion/Riven.png";
import ChampionRumble from "../../public/images/champion/Rumble.png";
import ChampionRyze from "../../public/images/champion/Ryze.png";
import ChampionSamira from "../../public/images/champion/Samira.png";
import ChampionSejuani from "../../public/images/champion/Sejuani.png";
import ChampionSenna from "../../public/images/champion/Senna.png";
import ChampionSeraphine from "../../public/images/champion/Seraphine.png";
import ChampionSett from "../../public/images/champion/Sett.png";
import ChampionShaco from "../../public/images/champion/Shaco.png";
import ChampionShen from "../../public/images/champion/Shen.png";
import ChampionShyvana from "../../public/images/champion/Shyvana.png";
import ChampionSinged from "../../public/images/champion/Singed.png";
import ChampionSion from "../../public/images/champion/Sion.png";
import ChampionSivir from "../../public/images/champion/Sivir.png";
import ChampionSkarner from "../../public/images/champion/Skarner.png";
import ChampionSona from "../../public/images/champion/Sona.png";
import ChampionSoraka from "../../public/images/champion/Soraka.png";
import ChampionSwain from "../../public/images/champion/Swain.png";
import ChampionSylas from "../../public/images/champion/Sylas.png";
import ChampionSyndra from "../../public/images/champion/Syndra.png";
import ChampionTahmKench from "../../public/images/champion/TahmKench.png";
import ChampionTaliyah from "../../public/images/champion/Taliyah.png";
import ChampionTalon from "../../public/images/champion/Talon.png";
import ChampionTaric from "../../public/images/champion/Taric.png";
import ChampionTeemo from "../../public/images/champion/Teemo.png";
import ChampionThresh from "../../public/images/champion/Thresh.png";
import ChampionTristana from "../../public/images/champion/Tristana.png";
import ChampionTrundle from "../../public/images/champion/Trundle.png";
import ChampionTryndamere from "../../public/images/champion/Tryndamere.png";
import ChampionTwistedFate from "../../public/images/champion/TwistedFate.png";
import ChampionTwitch from "../../public/images/champion/Twitch.png";
import ChampionUdyr from "../../public/images/champion/Udyr.png";
import ChampionUrgot from "../../public/images/champion/Urgot.png";
import ChampionVarus from "../../public/images/champion/Varus.png";
import ChampionVayne from "../../public/images/champion/Vayne.png";
import ChampionVeigar from "../../public/images/champion/Veigar.png";
import ChampionVelkoz from "../../public/images/champion/Velkoz.png";
import ChampionVex from "../../public/images/champion/Vex.png";
import ChampionVi from "../../public/images/champion/Vi.png";
import ChampionViego from "../../public/images/champion/Viego.png";
import ChampionViktor from "../../public/images/champion/Viktor.png";
import ChampionVladimir from "../../public/images/champion/Vladimir.png";
import ChampionVolibear from "../../public/images/champion/Volibear.png";
import ChampionWarwick from "../../public/images/champion/Warwick.png";
import ChampionXayah from "../../public/images/champion/Xayah.png";
import ChampionXerath from "../../public/images/champion/Xerath.png";
import ChampionXinZhao from "../../public/images/champion/XinZhao.png";
import ChampionYasuo from "../../public/images/champion/Yasuo.png";
import ChampionYone from "../../public/images/champion/Yone.png";
import ChampionYorick from "../../public/images/champion/Yorick.png";
import ChampionYuumi from "../../public/images/champion/Yuumi.png";
import ChampionZac from "../../public/images/champion/Zac.png";
import ChampionZed from "../../public/images/champion/Zed.png";
import ChampionZeri from "../../public/images/champion/Zeri.png";
import ChampionZiggs from "../../public/images/champion/Ziggs.png";
import ChampionZilean from "../../public/images/champion/Zilean.png";
import ChampionZoe from "../../public/images/champion/Zoe.png";
import ChampionZyra from "../../public/images/champion/Zyra.png";

import SpellSummonerBarrier from "../../public/images/spell/SummonerBarrier.png";
import SpellSummonerBoost from "../../public/images/spell/SummonerBoost.png";
import SpellSummonerCherryFlash from "../../public/images/spell/SummonerCherryFlash.png";
import SpellSummonerCherryHold from "../../public/images/spell/SummonerCherryHold.png";
import SpellSummonerDot from "../../public/images/spell/SummonerDot.png";
import SpellSummonerExhaust from "../../public/images/spell/SummonerExhaust.png";
import SpellSummonerFlash from "../../public/images/spell/SummonerFlash.png";
import SpellSummonerHaste from "../../public/images/spell/SummonerHaste.png";
import SpellSummonerHeal from "../../public/images/spell/SummonerHeal.png";
import SpellSummonerMana from "../../public/images/spell/SummonerMana.png";
import SpellSummonerPoroRecall from "../../public/images/spell/SummonerPoroRecall.png";
import SpellSummonerPoroThrow from "../../public/images/spell/SummonerPoroThrow.png";
import SpellSummonerSmite from "../../public/images/spell/SummonerSmite.png";
import SpellSummonerSnowURFSnowball_Mark from "../../public/images/spell/SummonerSnowURFSnowball_Mark.png";
import SpellSummonerSnowball from "../../public/images/spell/SummonerSnowball.png";
import SpellSummonerTeleport from "../../public/images/spell/SummonerTeleport.png";
import SpellSummoner_UltBookPlaceholder from "../../public/images/spell/Summoner_UltBookPlaceholder.png";
import SpellSummoner_UltBookSmitePlaceholder from "../../public/images/spell/Summoner_UltBookSmitePlaceholder.png";

import PerkDomination from "../../public/images/perk/Styles/7200_Domination.png";
import PerkInspiration from "../../public/images/perk/Styles/7203_Whimsy.png";
import PerkPrecision from "../../public/images/perk/Styles/7201_Precision.png";
import PerkResolve from "../../public/images/perk/Styles/7204_Resolve.png";
import PerkSorcery from "../../public/images/perk/Styles/7202_Sorcery.png";
import PerkElectrocute from "../../public/images/perk/Styles/Domination/Electrocute/Electrocute.png";
import PerkPredator from "../../public/images/perk/Styles/Domination/Predator/Predator.png";
import PerkDarkHarvest from "../../public/images/perk/Styles/Domination/DarkHarvest/DarkHarvest.png";
import PerkHailOfBlades from "../../public/images/perk/Styles/Domination/HailOfBlades/HailOfBlades.png";
import PerkCheapShot from "../../public/images/perk/Styles/Domination/CheapShot/CheapShot.png";
import PerkTasteOfBlood from "../../public/images/perk/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png";
import PerkSuddenImpact from "../../public/images/perk/Styles/Domination/SuddenImpact/SuddenImpact.png";
import PerkZombieWard from "../../public/images/perk/Styles/Domination/ZombieWard/ZombieWard.png";
import PerkGhostPoro from "../../public/images/perk/Styles/Domination/GhostPoro/GhostPoro.png";
import PerkEyeballCollection from "../../public/images/perk/Styles/Domination/EyeballCollection/EyeballCollection.png";
import PerkTreasureHunter from "../../public/images/perk/Styles/Domination/TreasureHunter/TreasureHunter.png";
import PerkIngeniousHunter from "../../public/images/perk/Styles/Domination/IngeniousHunter/IngeniousHunter.png";
import PerkRelentlessHunter from "../../public/images/perk/Styles/Domination/RelentlessHunter/RelentlessHunter.png";
import PerkUltimateHunter from "../../public/images/perk/Styles/Domination/UltimateHunter/UltimateHunter.png";
import PerkGlacialAugment from "../../public/images/perk/Styles/Inspiration/GlacialAugment/GlacialAugment.png";
import PerkUnsealedSpellbook from "../../public/images/perk/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png";
import PerkFirstStrike from "../../public/images/perk/Styles/Inspiration/FirstStrike/FirstStrike.png";
import PerkHextechFlashtraption from "../../public/images/perk/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png";
import PerkMagicalFootwear from "../../public/images/perk/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png";
import PerkPerfectTiming from "../../public/images/perk/Styles/Inspiration/PerfectTiming/PerfectTiming.png";
import PerkFuturesMarket from "../../public/images/perk/Styles/Inspiration/FuturesMarket/FuturesMarket.png";
import PerkMinionDematerializer from "../../public/images/perk/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png";
import PerkBiscuitDelivery from "../../public/images/perk/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png";
import PerkCosmicInsight from "../../public/images/perk/Styles/Inspiration/CosmicInsight/CosmicInsight.png";
import PerkApproachVelocity from "../../public/images/perk/Styles/Resolve/ApproachVelocity/ApproachVelocity.png";
import PerkTimeWarpTonic from "../../public/images/perk/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png";
import PerkPressTheAttack from "../../public/images/perk/Styles/Precision/PressTheAttack/PressTheAttack.png";
import PerkLethalTempo from "../../public/images/perk/Styles/Precision/LethalTempo/LethalTempoTemp.png";
import PerkFleetFootwork from "../../public/images/perk/Styles/Precision/FleetFootwork/FleetFootwork.png";
import PerkConqueror from "../../public/images/perk/Styles/Precision/Conqueror/Conqueror.png";
import PerkOverheal from "../../public/images/perk/Styles/Precision/Overheal.png";
import PerkTriumph from "../../public/images/perk/Styles/Precision/Triumph.png";
import PerkPresenceOfMind from "../../public/images/perk/Styles/Precision/PresenceOfMind/PresenceOfMind.png";
import PerkLegendAlacrity from "../../public/images/perk/Styles/Precision/LegendAlacrity/LegendAlacrity.png";
import PerkLegendTenacity from "../../public/images/perk/Styles/Precision/LegendTenacity/LegendTenacity.png";
import PerkLegendBloodline from "../../public/images/perk/Styles/Precision/LegendBloodline/LegendBloodline.png";
import PerkCoupDeGrace from "../../public/images/perk/Styles/Precision/CoupDeGrace/CoupDeGrace.png";
import PerkCutDown from "../../public/images/perk/Styles/Precision/CutDown/CutDown.png";
import PerkLastStand from "../../public/images/perk/Styles/Sorcery/LastStand/LastStand.png";
import PerkGraspOfTheUndying from "../../public/images/perk/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png";
import PerkAftershock from "../../public/images/perk/Styles/Resolve/VeteranAftershock/VeteranAftershock.png";
import PerkGuardian from "../../public/images/perk/Styles/Resolve/Guardian/Guardian.png";
import PerkDemolish from "../../public/images/perk/Styles/Resolve/Demolish/Demolish.png";
import PerkFontOfLife from "../../public/images/perk/Styles/Resolve/FontOfLife/FontOfLife.png";
import PerkShieldBash from "../../public/images/perk/Styles/Resolve/MirrorShell/MirrorShell.png";
import PerkConditioning from "../../public/images/perk/Styles/Resolve/Conditioning/Conditioning.png";
import PerkSecondWind from "../../public/images/perk/Styles/Resolve/SecondWind/SecondWind.png";
import PerkBonePlating from "../../public/images/perk/Styles/Resolve/BonePlating/BonePlating.png";
import PerkOvergrowth from "../../public/images/perk/Styles/Resolve/Overgrowth/Overgrowth.png";
import PerkRevitalize from "../../public/images/perk/Styles/Resolve/Revitalize/Revitalize.png";
import PerkUnflinching from "../../public/images/perk/Styles/Sorcery/Unflinching/Unflinching.png";
import PerkSummonAery from "../../public/images/perk/Styles/Sorcery/SummonAery/SummonAery.png";
import PerkArcaneComet from "../../public/images/perk/Styles/Sorcery/ArcaneComet/ArcaneComet.png";
import PerkPhaseRush from "../../public/images/perk/Styles/Sorcery/PhaseRush/PhaseRush.png";
import PerkNullifyingOrb from "../../public/images/perk/Styles/Sorcery/NullifyingOrb/Pokeshield.png";
import PerkManaflowBand from "../../public/images/perk/Styles/Sorcery/ManaflowBand/ManaflowBand.png";
import PerkNimbusCloak from "../../public/images/perk/Styles/Sorcery/NimbusCloak/6361.png";
import PerkTranscendence from "../../public/images/perk/Styles/Sorcery/Transcendence/Transcendence.png";
import PerkCelerity from "../../public/images/perk/Styles/Sorcery/Celerity/CelerityTemp.png";
import PerkAbsoluteFocus from "../../public/images/perk/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png";
import PerkScorch from "../../public/images/perk/Styles/Sorcery/Scorch/Scorch.png";
import PerkWaterwalking from "../../public/images/perk/Styles/Sorcery/Waterwalking/Waterwalking.png";
import PerkGatheringStorm from "../../public/images/perk/Styles/Sorcery/GatheringStorm/GatheringStorm.png";

type Item = { name: string; icon: StaticImageData };

// https://ddragon.leagueoflegends.com/cdn/13.24.1/data/ko_KR/champion.json
// Object.values(champion.data).map(c => `import Champion${c.id} from "../../public/images/champion/${c.id}.png";`).join("\n")
// Object.values(champion.data).map(c => `  "${c.key}": { name: "${c.name}", icon: Champion${c.id} },`).join("\n")
export const CHAMPIONS: Record<number, Item> = {
  "266": { name: "아트록스", icon: ChampionAatrox },
  "103": { name: "아리", icon: ChampionAhri },
  "84": { name: "아칼리", icon: ChampionAkali },
  "166": { name: "아크샨", icon: ChampionAkshan },
  "12": { name: "알리스타", icon: ChampionAlistar },
  "32": { name: "아무무", icon: ChampionAmumu },
  "34": { name: "애니비아", icon: ChampionAnivia },
  "1": { name: "애니", icon: ChampionAnnie },
  "523": { name: "아펠리오스", icon: ChampionAphelios },
  "22": { name: "애쉬", icon: ChampionAshe },
  "136": { name: "아우렐리온 솔", icon: ChampionAurelionSol },
  "268": { name: "아지르", icon: ChampionAzir },
  "432": { name: "바드", icon: ChampionBard },
  "200": { name: "벨베스", icon: ChampionBelveth },
  "53": { name: "블리츠크랭크", icon: ChampionBlitzcrank },
  "63": { name: "브랜드", icon: ChampionBrand },
  "201": { name: "브라움", icon: ChampionBraum },
  "233": { name: "브라이어", icon: ChampionBriar },
  "51": { name: "케이틀린", icon: ChampionCaitlyn },
  "164": { name: "카밀", icon: ChampionCamille },
  "69": { name: "카시오페아", icon: ChampionCassiopeia },
  "31": { name: "초가스", icon: ChampionChogath },
  "42": { name: "코르키", icon: ChampionCorki },
  "122": { name: "다리우스", icon: ChampionDarius },
  "131": { name: "다이애나", icon: ChampionDiana },
  "119": { name: "드레이븐", icon: ChampionDraven },
  "36": { name: "문도 박사", icon: ChampionDrMundo },
  "245": { name: "에코", icon: ChampionEkko },
  "60": { name: "엘리스", icon: ChampionElise },
  "28": { name: "이블린", icon: ChampionEvelynn },
  "81": { name: "이즈리얼", icon: ChampionEzreal },
  "9": { name: "피들스틱", icon: ChampionFiddlesticks },
  "114": { name: "피오라", icon: ChampionFiora },
  "105": { name: "피즈", icon: ChampionFizz },
  "3": { name: "갈리오", icon: ChampionGalio },
  "41": { name: "갱플랭크", icon: ChampionGangplank },
  "86": { name: "가렌", icon: ChampionGaren },
  "150": { name: "나르", icon: ChampionGnar },
  "79": { name: "그라가스", icon: ChampionGragas },
  "104": { name: "그레이브즈", icon: ChampionGraves },
  "887": { name: "그웬", icon: ChampionGwen },
  "120": { name: "헤카림", icon: ChampionHecarim },
  "74": { name: "하이머딩거", icon: ChampionHeimerdinger },
  "910": { name: "흐웨이", icon: ChampionHwei },
  "420": { name: "일라오이", icon: ChampionIllaoi },
  "39": { name: "이렐리아", icon: ChampionIrelia },
  "427": { name: "아이번", icon: ChampionIvern },
  "40": { name: "잔나", icon: ChampionJanna },
  "59": { name: "자르반 4세", icon: ChampionJarvanIV },
  "24": { name: "잭스", icon: ChampionJax },
  "126": { name: "제이스", icon: ChampionJayce },
  "202": { name: "진", icon: ChampionJhin },
  "222": { name: "징크스", icon: ChampionJinx },
  "145": { name: "카이사", icon: ChampionKaisa },
  "429": { name: "칼리스타", icon: ChampionKalista },
  "43": { name: "카르마", icon: ChampionKarma },
  "30": { name: "카서스", icon: ChampionKarthus },
  "38": { name: "카사딘", icon: ChampionKassadin },
  "55": { name: "카타리나", icon: ChampionKatarina },
  "10": { name: "케일", icon: ChampionKayle },
  "141": { name: "케인", icon: ChampionKayn },
  "85": { name: "케넨", icon: ChampionKennen },
  "121": { name: "카직스", icon: ChampionKhazix },
  "203": { name: "킨드레드", icon: ChampionKindred },
  "240": { name: "클레드", icon: ChampionKled },
  "96": { name: "코그모", icon: ChampionKogMaw },
  "897": { name: "크산테", icon: ChampionKSante },
  "7": { name: "르블랑", icon: ChampionLeblanc },
  "64": { name: "리 신", icon: ChampionLeeSin },
  "89": { name: "레오나", icon: ChampionLeona },
  "876": { name: "릴리아", icon: ChampionLillia },
  "127": { name: "리산드라", icon: ChampionLissandra },
  "236": { name: "루시안", icon: ChampionLucian },
  "117": { name: "룰루", icon: ChampionLulu },
  "99": { name: "럭스", icon: ChampionLux },
  "54": { name: "말파이트", icon: ChampionMalphite },
  "90": { name: "말자하", icon: ChampionMalzahar },
  "57": { name: "마오카이", icon: ChampionMaokai },
  "11": { name: "마스터 이", icon: ChampionMasterYi },
  "902": { name: "밀리오", icon: ChampionMilio },
  "21": { name: "미스 포츈", icon: ChampionMissFortune },
  "62": { name: "오공", icon: ChampionMonkeyKing },
  "82": { name: "모데카이저", icon: ChampionMordekaiser },
  "25": { name: "모르가나", icon: ChampionMorgana },
  "950": { name: "나피리", icon: ChampionNaafiri },
  "267": { name: "나미", icon: ChampionNami },
  "75": { name: "나서스", icon: ChampionNasus },
  "111": { name: "노틸러스", icon: ChampionNautilus },
  "518": { name: "니코", icon: ChampionNeeko },
  "76": { name: "니달리", icon: ChampionNidalee },
  "895": { name: "닐라", icon: ChampionNilah },
  "56": { name: "녹턴", icon: ChampionNocturne },
  "20": { name: "누누와 윌럼프", icon: ChampionNunu },
  "2": { name: "올라프", icon: ChampionOlaf },
  "61": { name: "오리아나", icon: ChampionOrianna },
  "516": { name: "오른", icon: ChampionOrnn },
  "80": { name: "판테온", icon: ChampionPantheon },
  "78": { name: "뽀삐", icon: ChampionPoppy },
  "555": { name: "파이크", icon: ChampionPyke },
  "246": { name: "키아나", icon: ChampionQiyana },
  "133": { name: "퀸", icon: ChampionQuinn },
  "497": { name: "라칸", icon: ChampionRakan },
  "33": { name: "람머스", icon: ChampionRammus },
  "421": { name: "렉사이", icon: ChampionRekSai },
  "526": { name: "렐", icon: ChampionRell },
  "888": { name: "레나타 글라스크", icon: ChampionRenata },
  "58": { name: "레넥톤", icon: ChampionRenekton },
  "107": { name: "렝가", icon: ChampionRengar },
  "92": { name: "리븐", icon: ChampionRiven },
  "68": { name: "럼블", icon: ChampionRumble },
  "13": { name: "라이즈", icon: ChampionRyze },
  "360": { name: "사미라", icon: ChampionSamira },
  "113": { name: "세주아니", icon: ChampionSejuani },
  "235": { name: "세나", icon: ChampionSenna },
  "147": { name: "세라핀", icon: ChampionSeraphine },
  "875": { name: "세트", icon: ChampionSett },
  "35": { name: "샤코", icon: ChampionShaco },
  "98": { name: "쉔", icon: ChampionShen },
  "102": { name: "쉬바나", icon: ChampionShyvana },
  "27": { name: "신지드", icon: ChampionSinged },
  "14": { name: "사이온", icon: ChampionSion },
  "15": { name: "시비르", icon: ChampionSivir },
  "72": { name: "스카너", icon: ChampionSkarner },
  "37": { name: "소나", icon: ChampionSona },
  "16": { name: "소라카", icon: ChampionSoraka },
  "50": { name: "스웨인", icon: ChampionSwain },
  "517": { name: "사일러스", icon: ChampionSylas },
  "134": { name: "신드라", icon: ChampionSyndra },
  "223": { name: "탐 켄치", icon: ChampionTahmKench },
  "163": { name: "탈리야", icon: ChampionTaliyah },
  "91": { name: "탈론", icon: ChampionTalon },
  "44": { name: "타릭", icon: ChampionTaric },
  "17": { name: "티모", icon: ChampionTeemo },
  "412": { name: "쓰레쉬", icon: ChampionThresh },
  "18": { name: "트리스타나", icon: ChampionTristana },
  "48": { name: "트런들", icon: ChampionTrundle },
  "23": { name: "트린다미어", icon: ChampionTryndamere },
  "4": { name: "트위스티드 페이트", icon: ChampionTwistedFate },
  "29": { name: "트위치", icon: ChampionTwitch },
  "77": { name: "우디르", icon: ChampionUdyr },
  "6": { name: "우르곳", icon: ChampionUrgot },
  "110": { name: "바루스", icon: ChampionVarus },
  "67": { name: "베인", icon: ChampionVayne },
  "45": { name: "베이가", icon: ChampionVeigar },
  "161": { name: "벨코즈", icon: ChampionVelkoz },
  "711": { name: "벡스", icon: ChampionVex },
  "254": { name: "바이", icon: ChampionVi },
  "234": { name: "비에고", icon: ChampionViego },
  "112": { name: "빅토르", icon: ChampionViktor },
  "8": { name: "블라디미르", icon: ChampionVladimir },
  "106": { name: "볼리베어", icon: ChampionVolibear },
  "19": { name: "워윅", icon: ChampionWarwick },
  "498": { name: "자야", icon: ChampionXayah },
  "101": { name: "제라스", icon: ChampionXerath },
  "5": { name: "신 짜오", icon: ChampionXinZhao },
  "157": { name: "야스오", icon: ChampionYasuo },
  "777": { name: "요네", icon: ChampionYone },
  "83": { name: "요릭", icon: ChampionYorick },
  "350": { name: "유미", icon: ChampionYuumi },
  "154": { name: "자크", icon: ChampionZac },
  "238": { name: "제드", icon: ChampionZed },
  "221": { name: "제리", icon: ChampionZeri },
  "115": { name: "직스", icon: ChampionZiggs },
  "26": { name: "질리언", icon: ChampionZilean },
  "142": { name: "조이", icon: ChampionZoe },
  "143": { name: "자이라", icon: ChampionZyra },
};

// https://ddragon.leagueoflegends.com/cdn/13.24.1/data/ko_KR/summoner.json
// Object.values(summoner.data).map(c => `import Spell${c.id} from "../../public/images/spell/${c.id}.png";`).join("\n")
// Object.values(summoner.data).map(c => `  "${c.key}": { name: "${c.name}", icon: Spell${c.id} },`).join("\n")
export const SPELLS: Record<number, Item> = {
  "21": { name: "방어막", icon: SpellSummonerBarrier },
  "1": { name: "정화", icon: SpellSummonerBoost },
  "2202": { name: "점멸", icon: SpellSummonerCherryFlash },
  "2201": { name: "도주", icon: SpellSummonerCherryHold },
  "14": { name: "점화", icon: SpellSummonerDot },
  "3": { name: "탈진", icon: SpellSummonerExhaust },
  "4": { name: "점멸", icon: SpellSummonerFlash },
  "6": { name: "유체화", icon: SpellSummonerHaste },
  "7": { name: "회복", icon: SpellSummonerHeal },
  "13": { name: "총명", icon: SpellSummonerMana },
  "30": { name: "왕을 향해!", icon: SpellSummonerPoroRecall },
  "31": { name: "포로 던지기", icon: SpellSummonerPoroThrow },
  "11": { name: "강타", icon: SpellSummonerSmite },
  "39": { name: "표식", icon: SpellSummonerSnowURFSnowball_Mark },
  "32": { name: "표식", icon: SpellSummonerSnowball },
  "12": { name: "순간이동", icon: SpellSummonerTeleport },
  "54": { name: "게임 시작 후 결정", icon: SpellSummoner_UltBookPlaceholder },
  "55": {
    name: "TBD 및 공격-강타",
    icon: SpellSummoner_UltBookSmitePlaceholder,
  },
};

// https://ddragon.leagueoflegends.com/cdn/13.24.1/data/ko_KR/runesReforged.json
// perks = runesReforged.concat(runesReforged.map(p => p.slots).flat().map(s => s.runes).flat())
// perks.map(c => `import Perk${c.key} from "../../public/images/${c.icon.replace("perk-images", "perk")}";`).join("\n")
export const PERKS: Record<number, Item> = {
  "8100": { name: "지배", icon: PerkDomination },
  "8300": { name: "영감", icon: PerkInspiration },
  "8000": { name: "정밀", icon: PerkPrecision },
  "8400": { name: "결의", icon: PerkResolve },
  "8200": { name: "마법", icon: PerkSorcery },
  "8112": { name: "감전", icon: PerkElectrocute },
  "8124": { name: "포식자", icon: PerkPredator },
  "8128": { name: "어둠의 수확", icon: PerkDarkHarvest },
  "9923": { name: "칼날비", icon: PerkHailOfBlades },
  "8126": { name: "비열한 한 방", icon: PerkCheapShot },
  "8139": { name: "피의 맛", icon: PerkTasteOfBlood },
  "8143": { name: "돌발 일격", icon: PerkSuddenImpact },
  "8136": { name: "좀비 와드", icon: PerkZombieWard },
  "8120": { name: "유령 포로", icon: PerkGhostPoro },
  "8138": { name: "사냥의 증표", icon: PerkEyeballCollection },
  "8135": { name: "보물 사냥꾼", icon: PerkTreasureHunter },
  "8134": { name: "영리한 사냥꾼", icon: PerkIngeniousHunter },
  "8105": { name: "끈질긴 사냥꾼", icon: PerkRelentlessHunter },
  "8106": { name: "궁극의 사냥꾼", icon: PerkUltimateHunter },
  "8351": { name: "빙결 강화", icon: PerkGlacialAugment },
  "8360": { name: "봉인 풀린 주문서", icon: PerkUnsealedSpellbook },
  "8369": { name: "선제공격", icon: PerkFirstStrike },
  "8306": { name: "마법공학 점멸기", icon: PerkHextechFlashtraption },
  "8304": { name: "마법의 신발", icon: PerkMagicalFootwear },
  "8313": { name: "완벽한 타이밍", icon: PerkPerfectTiming },
  "8321": { name: "외상", icon: PerkFuturesMarket },
  "8316": { name: "미니언 해체분석기", icon: PerkMinionDematerializer },
  "8345": { name: "비스킷 배달", icon: PerkBiscuitDelivery },
  "8347": { name: "우주적 통찰력", icon: PerkCosmicInsight },
  "8410": { name: "쾌속 접근", icon: PerkApproachVelocity },
  "8352": { name: "시간 왜곡 물약", icon: PerkTimeWarpTonic },
  "8005": { name: "집중 공격", icon: PerkPressTheAttack },
  "8008": { name: "치명적 속도", icon: PerkLethalTempo },
  "8021": { name: "기민한 발놀림", icon: PerkFleetFootwork },
  "8010": { name: "정복자", icon: PerkConqueror },
  "9101": { name: "과다치유", icon: PerkOverheal },
  "9111": { name: "승전보", icon: PerkTriumph },
  "8009": { name: "침착", icon: PerkPresenceOfMind },
  "9104": { name: "전설: 민첩함", icon: PerkLegendAlacrity },
  "9105": { name: "전설: 강인함", icon: PerkLegendTenacity },
  "9103": { name: "전설: 핏빛 길", icon: PerkLegendBloodline },
  "8014": { name: "최후의 일격", icon: PerkCoupDeGrace },
  "8017": { name: "체력차 극복", icon: PerkCutDown },
  "8299": { name: "최후의 저항", icon: PerkLastStand },
  "8437": { name: "착취의 손아귀", icon: PerkGraspOfTheUndying },
  "8439": { name: "여진", icon: PerkAftershock },
  "8465": { name: "수호자", icon: PerkGuardian },
  "8446": { name: "철거", icon: PerkDemolish },
  "8463": { name: "생명의 샘", icon: PerkFontOfLife },
  "8401": { name: "보호막 강타", icon: PerkShieldBash },
  "8429": { name: "사전 준비", icon: PerkConditioning },
  "8444": { name: "재생의 바람", icon: PerkSecondWind },
  "8473": { name: "뼈 방패", icon: PerkBonePlating },
  "8451": { name: "과잉성장", icon: PerkOvergrowth },
  "8453": { name: "소생", icon: PerkRevitalize },
  "8242": { name: "불굴의 의지", icon: PerkUnflinching },
  "8214": { name: "콩콩이 소환", icon: PerkSummonAery },
  "8229": { name: "신비로운 유성", icon: PerkArcaneComet },
  "8230": { name: "난입", icon: PerkPhaseRush },
  "8224": { name: "무효화 구체", icon: PerkNullifyingOrb },
  "8226": { name: "마나순환 팔찌", icon: PerkManaflowBand },
  "8275": { name: "빛의 망토", icon: PerkNimbusCloak },
  "8210": { name: "깨달음", icon: PerkTranscendence },
  "8234": { name: "기민함", icon: PerkCelerity },
  "8233": { name: "절대 집중", icon: PerkAbsoluteFocus },
  "8237": { name: "주문 작열", icon: PerkScorch },
  "8232": { name: "물 위를 걷는 자", icon: PerkWaterwalking },
  "8236": { name: "폭풍의 결집", icon: PerkGatheringStorm },
};

// https://static.developer.riotgames.com/docs/lol/queues.json
export const QUEUES: Record<number, string> = {
  "0": "사용자 설정",
  "420": "솔로랭크",
  "440": "자유랭크",
};

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
