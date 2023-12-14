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

import Item1001 from "../../public/images/item/1001.png";
import Item1004 from "../../public/images/item/1004.png";
import Item1006 from "../../public/images/item/1006.png";
import Item1011 from "../../public/images/item/1011.png";
import Item1018 from "../../public/images/item/1018.png";
import Item1026 from "../../public/images/item/1026.png";
import Item1027 from "../../public/images/item/1027.png";
import Item1028 from "../../public/images/item/1028.png";
import Item1029 from "../../public/images/item/1029.png";
import Item1031 from "../../public/images/item/1031.png";
import Item1033 from "../../public/images/item/1033.png";
import Item1035 from "../../public/images/item/1035.png";
import Item1036 from "../../public/images/item/1036.png";
import Item1037 from "../../public/images/item/1037.png";
import Item1038 from "../../public/images/item/1038.png";
import Item1039 from "../../public/images/item/1039.png";
import Item1040 from "../../public/images/item/1040.png";
import Item1042 from "../../public/images/item/1042.png";
import Item1043 from "../../public/images/item/1043.png";
import Item1052 from "../../public/images/item/1052.png";
import Item1053 from "../../public/images/item/1053.png";
import Item1054 from "../../public/images/item/1054.png";
import Item1055 from "../../public/images/item/1055.png";
import Item1056 from "../../public/images/item/1056.png";
import Item1057 from "../../public/images/item/1057.png";
import Item1058 from "../../public/images/item/1058.png";
import Item1082 from "../../public/images/item/1082.png";
import Item1083 from "../../public/images/item/1083.png";
import Item1101 from "../../public/images/item/1101.png";
import Item1102 from "../../public/images/item/1102.png";
import Item1103 from "../../public/images/item/1103.png";
import Item1104 from "../../public/images/item/1104.png";
import Item1500 from "../../public/images/item/1500.png";
import Item1501 from "../../public/images/item/1501.png";
import Item1502 from "../../public/images/item/1502.png";
import Item1503 from "../../public/images/item/1503.png";
import Item1504 from "../../public/images/item/1504.png";
import Item1506 from "../../public/images/item/1506.png";
import Item1507 from "../../public/images/item/1507.png";
import Item1508 from "../../public/images/item/1508.png";
import Item1509 from "../../public/images/item/1509.png";
import Item1510 from "../../public/images/item/1510.png";
import Item1511 from "../../public/images/item/1511.png";
import Item1512 from "../../public/images/item/1512.png";
import Item1515 from "../../public/images/item/1515.png";
import Item1516 from "../../public/images/item/1516.png";
import Item1517 from "../../public/images/item/1517.png";
import Item1518 from "../../public/images/item/1518.png";
import Item1519 from "../../public/images/item/1519.png";
import Item1520 from "../../public/images/item/1520.png";
import Item1521 from "../../public/images/item/1521.png";
import Item1522 from "../../public/images/item/1522.png";
import Item2003 from "../../public/images/item/2003.png";
import Item2010 from "../../public/images/item/2010.png";
import Item2015 from "../../public/images/item/2015.png";
import Item2019 from "../../public/images/item/2019.png";
import Item2031 from "../../public/images/item/2031.png";
import Item2033 from "../../public/images/item/2033.png";
import Item2049 from "../../public/images/item/2049.png";
import Item2050 from "../../public/images/item/2050.png";
import Item2051 from "../../public/images/item/2051.png";
import Item2052 from "../../public/images/item/2052.png";
import Item2055 from "../../public/images/item/2055.png";
import Item2065 from "../../public/images/item/2065.png";
import Item2138 from "../../public/images/item/2138.png";
import Item2139 from "../../public/images/item/2139.png";
import Item2140 from "../../public/images/item/2140.png";
import Item2141 from "../../public/images/item/2141.png";
import Item2142 from "../../public/images/item/2142.png";
import Item2143 from "../../public/images/item/2143.png";
import Item2144 from "../../public/images/item/2144.png";
import Item2403 from "../../public/images/item/2403.png";
import Item2419 from "../../public/images/item/2419.png";
import Item2420 from "../../public/images/item/2420.png";
import Item2421 from "../../public/images/item/2421.png";
import Item2422 from "../../public/images/item/2422.png";
import Item2423 from "../../public/images/item/2423.png";
import Item2424 from "../../public/images/item/2424.png";
import Item3001 from "../../public/images/item/3001.png";
import Item3003 from "../../public/images/item/3003.png";
import Item3004 from "../../public/images/item/3004.png";
import Item3005 from "../../public/images/item/3005.png";
import Item3006 from "../../public/images/item/3006.png";
import Item3009 from "../../public/images/item/3009.png";
import Item3011 from "../../public/images/item/3011.png";
import Item3012 from "../../public/images/item/3012.png";
import Item3020 from "../../public/images/item/3020.png";
import Item3023 from "../../public/images/item/3023.png";
import Item3024 from "../../public/images/item/3024.png";
import Item3026 from "../../public/images/item/3026.png";
import Item3031 from "../../public/images/item/3031.png";
import Item3033 from "../../public/images/item/3033.png";
import Item3035 from "../../public/images/item/3035.png";
import Item3036 from "../../public/images/item/3036.png";
import Item3039 from "../../public/images/item/3039.png";
import Item3040 from "../../public/images/item/3040.png";
import Item3041 from "../../public/images/item/3041.png";
import Item3042 from "../../public/images/item/3042.png";
import Item3044 from "../../public/images/item/3044.png";
import Item3046 from "../../public/images/item/3046.png";
import Item3047 from "../../public/images/item/3047.png";
import Item3050 from "../../public/images/item/3050.png";
import Item3051 from "../../public/images/item/3051.png";
import Item3053 from "../../public/images/item/3053.png";
import Item3057 from "../../public/images/item/3057.png";
import Item3065 from "../../public/images/item/3065.png";
import Item3066 from "../../public/images/item/3066.png";
import Item3067 from "../../public/images/item/3067.png";
import Item3068 from "../../public/images/item/3068.png";
import Item3070 from "../../public/images/item/3070.png";
import Item3071 from "../../public/images/item/3071.png";
import Item3072 from "../../public/images/item/3072.png";
import Item3074 from "../../public/images/item/3074.png";
import Item3075 from "../../public/images/item/3075.png";
import Item3076 from "../../public/images/item/3076.png";
import Item3077 from "../../public/images/item/3077.png";
import Item3078 from "../../public/images/item/3078.png";
import Item3082 from "../../public/images/item/3082.png";
import Item3083 from "../../public/images/item/3083.png";
import Item3084 from "../../public/images/item/3084.png";
import Item3085 from "../../public/images/item/3085.png";
import Item3086 from "../../public/images/item/3086.png";
import Item3087 from "../../public/images/item/3087.png";
import Item3089 from "../../public/images/item/3089.png";
import Item3091 from "../../public/images/item/3091.png";
import Item3094 from "../../public/images/item/3094.png";
import Item3095 from "../../public/images/item/3095.png";
import Item3100 from "../../public/images/item/3100.png";
import Item3102 from "../../public/images/item/3102.png";
import Item3105 from "../../public/images/item/3105.png";
import Item3107 from "../../public/images/item/3107.png";
import Item3108 from "../../public/images/item/3108.png";
import Item3109 from "../../public/images/item/3109.png";
import Item3110 from "../../public/images/item/3110.png";
import Item3111 from "../../public/images/item/3111.png";
import Item3112 from "../../public/images/item/3112.png";
import Item3113 from "../../public/images/item/3113.png";
import Item3114 from "../../public/images/item/3114.png";
import Item3115 from "../../public/images/item/3115.png";
import Item3116 from "../../public/images/item/3116.png";
import Item3117 from "../../public/images/item/3117.png";
import Item3119 from "../../public/images/item/3119.png";
import Item3121 from "../../public/images/item/3121.png";
import Item3123 from "../../public/images/item/3123.png";
import Item3124 from "../../public/images/item/3124.png";
import Item3128 from "../../public/images/item/3128.png";
import Item3131 from "../../public/images/item/3131.png";
import Item3133 from "../../public/images/item/3133.png";
import Item3134 from "../../public/images/item/3134.png";
import Item3135 from "../../public/images/item/3135.png";
import Item3139 from "../../public/images/item/3139.png";
import Item3140 from "../../public/images/item/3140.png";
import Item3142 from "../../public/images/item/3142.png";
import Item3143 from "../../public/images/item/3143.png";
import Item3145 from "../../public/images/item/3145.png";
import Item3146 from "../../public/images/item/3146.png";
import Item3152 from "../../public/images/item/3152.png";
import Item3153 from "../../public/images/item/3153.png";
import Item3155 from "../../public/images/item/3155.png";
import Item3156 from "../../public/images/item/3156.png";
import Item3157 from "../../public/images/item/3157.png";
import Item3158 from "../../public/images/item/3158.png";
import Item3161 from "../../public/images/item/3161.png";
import Item3165 from "../../public/images/item/3165.png";
import Item3172 from "../../public/images/item/3172.png";
import Item3177 from "../../public/images/item/3177.png";
import Item3179 from "../../public/images/item/3179.png";
import Item3181 from "../../public/images/item/3181.png";
import Item3184 from "../../public/images/item/3184.png";
import Item3190 from "../../public/images/item/3190.png";
import Item3191 from "../../public/images/item/3191.png";
import Item3193 from "../../public/images/item/3193.png";
import Item3211 from "../../public/images/item/3211.png";
import Item3222 from "../../public/images/item/3222.png";
import Item3330 from "../../public/images/item/3330.png";
import Item3340 from "../../public/images/item/3340.png";
import Item3348 from "../../public/images/item/3348.png";
import Item3349 from "../../public/images/item/3349.png";
import Item3363 from "../../public/images/item/3363.png";
import Item3364 from "../../public/images/item/3364.png";
import Item3400 from "../../public/images/item/3400.png";
import Item3430 from "../../public/images/item/3430.png";
import Item3504 from "../../public/images/item/3504.png";
import Item3508 from "../../public/images/item/3508.png";
import Item3513 from "../../public/images/item/3513.png";
import Item3599 from "../../public/images/item/3599.png";
import Item3600 from "../../public/images/item/3600.png";
import Item3742 from "../../public/images/item/3742.png";
import Item3748 from "../../public/images/item/3748.png";
import Item3801 from "../../public/images/item/3801.png";
import Item3802 from "../../public/images/item/3802.png";
import Item3803 from "../../public/images/item/3803.png";
import Item3814 from "../../public/images/item/3814.png";
import Item3850 from "../../public/images/item/3850.png";
import Item3851 from "../../public/images/item/3851.png";
import Item3853 from "../../public/images/item/3853.png";
import Item3854 from "../../public/images/item/3854.png";
import Item3855 from "../../public/images/item/3855.png";
import Item3857 from "../../public/images/item/3857.png";
import Item3858 from "../../public/images/item/3858.png";
import Item3859 from "../../public/images/item/3859.png";
import Item3860 from "../../public/images/item/3860.png";
import Item3862 from "../../public/images/item/3862.png";
import Item3863 from "../../public/images/item/3863.png";
import Item3864 from "../../public/images/item/3864.png";
import Item3901 from "../../public/images/item/3901.png";
import Item3902 from "../../public/images/item/3902.png";
import Item3903 from "../../public/images/item/3903.png";
import Item3916 from "../../public/images/item/3916.png";
import Item4003 from "../../public/images/item/4003.png";
import Item4004 from "../../public/images/item/4004.png";
import Item4005 from "../../public/images/item/4005.png";
import Item4010 from "../../public/images/item/4010.png";
import Item4011 from "../../public/images/item/4011.png";
import Item4012 from "../../public/images/item/4012.png";
import Item4013 from "../../public/images/item/4013.png";
import Item4014 from "../../public/images/item/4014.png";
import Item4015 from "../../public/images/item/4015.png";
import Item4016 from "../../public/images/item/4016.png";
import Item4017 from "../../public/images/item/4017.png";
import Item4401 from "../../public/images/item/4401.png";
import Item4402 from "../../public/images/item/4402.png";
import Item4403 from "../../public/images/item/4403.png";
import Item4628 from "../../public/images/item/4628.png";
import Item4629 from "../../public/images/item/4629.png";
import Item4630 from "../../public/images/item/4630.png";
import Item4632 from "../../public/images/item/4632.png";
import Item4633 from "../../public/images/item/4633.png";
import Item4635 from "../../public/images/item/4635.png";
import Item4636 from "../../public/images/item/4636.png";
import Item4637 from "../../public/images/item/4637.png";
import Item4638 from "../../public/images/item/4638.png";
import Item4641 from "../../public/images/item/4641.png";
import Item4642 from "../../public/images/item/4642.png";
import Item4643 from "../../public/images/item/4643.png";
import Item4644 from "../../public/images/item/4644.png";
import Item4645 from "../../public/images/item/4645.png";
import Item6029 from "../../public/images/item/6029.png";
import Item6035 from "../../public/images/item/6035.png";
import Item6333 from "../../public/images/item/6333.png";
import Item6609 from "../../public/images/item/6609.png";
import Item6616 from "../../public/images/item/6616.png";
import Item6617 from "../../public/images/item/6617.png";
import Item6620 from "../../public/images/item/6620.png";
import Item6630 from "../../public/images/item/6630.png";
import Item6631 from "../../public/images/item/6631.png";
import Item6632 from "../../public/images/item/6632.png";
import Item6653 from "../../public/images/item/6653.png";
import Item6655 from "../../public/images/item/6655.png";
import Item6656 from "../../public/images/item/6656.png";
import Item6657 from "../../public/images/item/6657.png";
import Item6660 from "../../public/images/item/6660.png";
import Item6662 from "../../public/images/item/6662.png";
import Item6664 from "../../public/images/item/6664.png";
import Item6665 from "../../public/images/item/6665.png";
import Item6667 from "../../public/images/item/6667.png";
import Item6670 from "../../public/images/item/6670.png";
import Item6671 from "../../public/images/item/6671.png";
import Item6672 from "../../public/images/item/6672.png";
import Item6673 from "../../public/images/item/6673.png";
import Item6675 from "../../public/images/item/6675.png";
import Item6676 from "../../public/images/item/6676.png";
import Item6677 from "../../public/images/item/6677.png";
import Item6691 from "../../public/images/item/6691.png";
import Item6692 from "../../public/images/item/6692.png";
import Item6693 from "../../public/images/item/6693.png";
import Item6694 from "../../public/images/item/6694.png";
import Item6695 from "../../public/images/item/6695.png";
import Item6696 from "../../public/images/item/6696.png";
import Item7000 from "../../public/images/item/7000.png";
import Item7001 from "../../public/images/item/7001.png";
import Item7002 from "../../public/images/item/7002.png";
import Item7005 from "../../public/images/item/7005.png";
import Item7006 from "../../public/images/item/7006.png";
import Item7009 from "../../public/images/item/7009.png";
import Item7010 from "../../public/images/item/7010.png";
import Item7011 from "../../public/images/item/7011.png";
import Item7012 from "../../public/images/item/7012.png";
import Item7013 from "../../public/images/item/7013.png";
import Item7014 from "../../public/images/item/7014.png";
import Item7015 from "../../public/images/item/7015.png";
import Item7016 from "../../public/images/item/7016.png";
import Item7017 from "../../public/images/item/7017.png";
import Item7018 from "../../public/images/item/7018.png";
import Item7019 from "../../public/images/item/7019.png";
import Item7020 from "../../public/images/item/7020.png";
import Item7021 from "../../public/images/item/7021.png";
import Item7023 from "../../public/images/item/7023.png";
import Item7024 from "../../public/images/item/7024.png";
import Item7025 from "../../public/images/item/7025.png";
import Item7026 from "../../public/images/item/7026.png";
import Item7027 from "../../public/images/item/7027.png";
import Item7028 from "../../public/images/item/7028.png";
import Item7029 from "../../public/images/item/7029.png";
import Item7030 from "../../public/images/item/7030.png";
import Item7031 from "../../public/images/item/7031.png";
import Item7032 from "../../public/images/item/7032.png";
import Item7033 from "../../public/images/item/7033.png";
import Item7050 from "../../public/images/item/7050.png";
import Item8001 from "../../public/images/item/8001.png";
import Item8020 from "../../public/images/item/8020.png";
import Item221038 from "../../public/images/item/221038.png";
import Item221053 from "../../public/images/item/221053.png";
import Item221058 from "../../public/images/item/221058.png";
import Item222051 from "../../public/images/item/222051.png";
import Item222065 from "../../public/images/item/222065.png";
import Item223001 from "../../public/images/item/223001.png";
import Item223003 from "../../public/images/item/223003.png";
import Item223004 from "../../public/images/item/223004.png";
import Item223005 from "../../public/images/item/223005.png";
import Item223006 from "../../public/images/item/223006.png";
import Item223009 from "../../public/images/item/223009.png";
import Item223011 from "../../public/images/item/223011.png";
import Item223020 from "../../public/images/item/223020.png";
import Item223026 from "../../public/images/item/223026.png";
import Item223031 from "../../public/images/item/223031.png";
import Item223033 from "../../public/images/item/223033.png";
import Item223036 from "../../public/images/item/223036.png";
import Item223039 from "../../public/images/item/223039.png";
import Item223040 from "../../public/images/item/223040.png";
import Item223042 from "../../public/images/item/223042.png";
import Item223046 from "../../public/images/item/223046.png";
import Item223047 from "../../public/images/item/223047.png";
import Item223050 from "../../public/images/item/223050.png";
import Item223053 from "../../public/images/item/223053.png";
import Item223057 from "../../public/images/item/223057.png";
import Item223065 from "../../public/images/item/223065.png";
import Item223067 from "../../public/images/item/223067.png";
import Item223068 from "../../public/images/item/223068.png";
import Item223071 from "../../public/images/item/223071.png";
import Item223072 from "../../public/images/item/223072.png";
import Item223074 from "../../public/images/item/223074.png";
import Item223075 from "../../public/images/item/223075.png";
import Item223078 from "../../public/images/item/223078.png";
import Item223084 from "../../public/images/item/223084.png";
import Item223085 from "../../public/images/item/223085.png";
import Item223087 from "../../public/images/item/223087.png";
import Item223089 from "../../public/images/item/223089.png";
import Item223091 from "../../public/images/item/223091.png";
import Item223094 from "../../public/images/item/223094.png";
import Item223095 from "../../public/images/item/223095.png";
import Item223100 from "../../public/images/item/223100.png";
import Item223102 from "../../public/images/item/223102.png";
import Item223105 from "../../public/images/item/223105.png";
import Item223107 from "../../public/images/item/223107.png";
import Item223109 from "../../public/images/item/223109.png";
import Item223110 from "../../public/images/item/223110.png";
import Item223111 from "../../public/images/item/223111.png";
import Item223112 from "../../public/images/item/223112.png";
import Item223115 from "../../public/images/item/223115.png";
import Item223116 from "../../public/images/item/223116.png";
import Item223119 from "../../public/images/item/223119.png";
import Item223121 from "../../public/images/item/223121.png";
import Item223124 from "../../public/images/item/223124.png";
import Item223135 from "../../public/images/item/223135.png";
import Item223139 from "../../public/images/item/223139.png";
import Item223142 from "../../public/images/item/223142.png";
import Item223143 from "../../public/images/item/223143.png";
import Item223146 from "../../public/images/item/223146.png";
import Item223152 from "../../public/images/item/223152.png";
import Item223153 from "../../public/images/item/223153.png";
import Item223156 from "../../public/images/item/223156.png";
import Item223157 from "../../public/images/item/223157.png";
import Item223158 from "../../public/images/item/223158.png";
import Item223161 from "../../public/images/item/223161.png";
import Item223165 from "../../public/images/item/223165.png";
import Item223172 from "../../public/images/item/223172.png";
import Item223177 from "../../public/images/item/223177.png";
import Item223181 from "../../public/images/item/223181.png";
import Item223184 from "../../public/images/item/223184.png";
import Item223185 from "../../public/images/item/223185.png";
import Item223190 from "../../public/images/item/223190.png";
import Item223193 from "../../public/images/item/223193.png";
import Item223222 from "../../public/images/item/223222.png";
import Item223504 from "../../public/images/item/223504.png";
import Item223508 from "../../public/images/item/223508.png";
import Item223742 from "../../public/images/item/223742.png";
import Item223748 from "../../public/images/item/223748.png";
import Item223814 from "../../public/images/item/223814.png";
import Item224004 from "../../public/images/item/224004.png";
import Item224005 from "../../public/images/item/224005.png";
import Item224401 from "../../public/images/item/224401.png";
import Item224403 from "../../public/images/item/224403.png";
import Item224628 from "../../public/images/item/224628.png";
import Item224629 from "../../public/images/item/224629.png";
import Item224633 from "../../public/images/item/224633.png";
import Item224636 from "../../public/images/item/224636.png";
import Item224637 from "../../public/images/item/224637.png";
import Item224644 from "../../public/images/item/224644.png";
import Item224645 from "../../public/images/item/224645.png";
import Item226035 from "../../public/images/item/226035.png";
import Item226333 from "../../public/images/item/226333.png";
import Item226609 from "../../public/images/item/226609.png";
import Item226616 from "../../public/images/item/226616.png";
import Item226617 from "../../public/images/item/226617.png";
import Item226620 from "../../public/images/item/226620.png";
import Item226630 from "../../public/images/item/226630.png";
import Item226631 from "../../public/images/item/226631.png";
import Item226632 from "../../public/images/item/226632.png";
import Item226653 from "../../public/images/item/226653.png";
import Item226655 from "../../public/images/item/226655.png";
import Item226656 from "../../public/images/item/226656.png";
import Item226657 from "../../public/images/item/226657.png";
import Item226662 from "../../public/images/item/226662.png";
import Item226664 from "../../public/images/item/226664.png";
import Item226665 from "../../public/images/item/226665.png";
import Item226667 from "../../public/images/item/226667.png";
import Item226671 from "../../public/images/item/226671.png";
import Item226672 from "../../public/images/item/226672.png";
import Item226673 from "../../public/images/item/226673.png";
import Item226675 from "../../public/images/item/226675.png";
import Item226676 from "../../public/images/item/226676.png";
import Item226691 from "../../public/images/item/226691.png";
import Item226692 from "../../public/images/item/226692.png";
import Item226693 from "../../public/images/item/226693.png";
import Item226694 from "../../public/images/item/226694.png";
import Item226695 from "../../public/images/item/226695.png";
import Item226696 from "../../public/images/item/226696.png";
import Item227001 from "../../public/images/item/227001.png";
import Item227002 from "../../public/images/item/227002.png";
import Item227005 from "../../public/images/item/227005.png";
import Item227006 from "../../public/images/item/227006.png";
import Item227009 from "../../public/images/item/227009.png";
import Item227010 from "../../public/images/item/227010.png";
import Item227011 from "../../public/images/item/227011.png";
import Item227012 from "../../public/images/item/227012.png";
import Item227013 from "../../public/images/item/227013.png";
import Item227014 from "../../public/images/item/227014.png";
import Item227015 from "../../public/images/item/227015.png";
import Item227016 from "../../public/images/item/227016.png";
import Item227017 from "../../public/images/item/227017.png";
import Item227018 from "../../public/images/item/227018.png";
import Item227019 from "../../public/images/item/227019.png";
import Item227020 from "../../public/images/item/227020.png";
import Item227021 from "../../public/images/item/227021.png";
import Item227023 from "../../public/images/item/227023.png";
import Item227024 from "../../public/images/item/227024.png";
import Item227025 from "../../public/images/item/227025.png";
import Item227026 from "../../public/images/item/227026.png";
import Item227027 from "../../public/images/item/227027.png";
import Item227028 from "../../public/images/item/227028.png";
import Item227029 from "../../public/images/item/227029.png";
import Item227030 from "../../public/images/item/227030.png";
import Item227031 from "../../public/images/item/227031.png";
import Item227032 from "../../public/images/item/227032.png";
import Item227033 from "../../public/images/item/227033.png";
import Item228001 from "../../public/images/item/228001.png";
import Item228002 from "../../public/images/item/228002.png";
import Item228003 from "../../public/images/item/228003.png";
import Item228004 from "../../public/images/item/228004.png";
import Item228005 from "../../public/images/item/228005.png";
import Item228006 from "../../public/images/item/228006.png";
import Item228008 from "../../public/images/item/228008.png";
import Item228020 from "../../public/images/item/228020.png";

type Item = { name: string; icon: StaticImageData };

// https://ddragon.leagueoflegends.com/cdn/13.24.1/data/ko_KR/champion.json
// Object.values(champion.data).map(c => `import Champion${c.id} from "../../public/images/champion/${c.id}.png";`).join("\n")
// Object.values(champion.data).map(c => `  "${c.key}": { name: "${c.name}", icon: Champion${c.id} },`).join("\n")
export const CHAMPIONS: Record<string | number, Item> = {
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

// https://ddragon.leagueoflegends.com/cdn/13.24.1/data/ko_KR/item.json
// Object.entries(item.data).map(i => `import Item${i[0]} from "../../public/images/item/${i[1].image.full}";`).join("\n")
// Object.entries(item.data).map(i => `  "${i[0]}": { name: "${i[1].name}", icon: Item${i[0]} },`).join("\n")
export const ITEMS: Record<number, Item> = {
  "1001": { name: "장화", icon: Item1001 },
  "1004": { name: "요정의 부적", icon: Item1004 },
  "1006": { name: "원기 회복의 구슬", icon: Item1006 },
  "1011": { name: "거인의 허리띠", icon: Item1011 },
  "1018": { name: "민첩성의 망토", icon: Item1018 },
  "1026": { name: "방출의 마법봉", icon: Item1026 },
  "1027": { name: "사파이어 수정", icon: Item1027 },
  "1028": { name: "루비 수정", icon: Item1028 },
  "1029": { name: "천 갑옷", icon: Item1029 },
  "1031": { name: "쇠사슬 조끼", icon: Item1031 },
  "1033": { name: "마법무효화의 망토", icon: Item1033 },
  "1035": { name: "잉걸불 칼", icon: Item1035 },
  "1036": { name: "롱소드", icon: Item1036 },
  "1037": { name: "곡괭이", icon: Item1037 },
  "1038": { name: "B.F. 대검", icon: Item1038 },
  "1039": { name: "빗발칼날", icon: Item1039 },
  "1040": { name: "흑요석 검", icon: Item1040 },
  "1042": { name: "단검", icon: Item1042 },
  "1043": { name: "곡궁", icon: Item1043 },
  "1052": { name: "증폭의 고서", icon: Item1052 },
  "1053": { name: "흡혈의 낫", icon: Item1053 },
  "1054": { name: "도란의 방패", icon: Item1054 },
  "1055": { name: "도란의 검", icon: Item1055 },
  "1056": { name: "도란의 반지", icon: Item1056 },
  "1057": { name: "음전자 망토", icon: Item1057 },
  "1058": { name: "쓸데없이 큰 지팡이", icon: Item1058 },
  "1082": { name: "암흑의 인장", icon: Item1082 },
  "1083": { name: "수확의 낫", icon: Item1083 },
  "1101": { name: "새끼 화염발톱", icon: Item1101 },
  "1102": { name: "새끼 바람돌이", icon: Item1102 },
  "1103": { name: "새끼 이끼쿵쿵이", icon: Item1103 },
  "1104": { name: "전령의 눈", icon: Item1104 },
  "1500": { name: "관통 탄환", icon: Item1500 },
  "1501": { name: "요새화", icon: Item1501 },
  "1502": { name: "이중 갑옷", icon: Item1502 },
  "1503": { name: "파수꾼의 눈", icon: Item1503 },
  "1504": { name: "수호자", icon: Item1504 },
  "1506": { name: "이중 갑옷", icon: Item1506 },
  "1507": { name: "과충전", icon: Item1507 },
  "1508": { name: "방탄 양말", icon: Item1508 },
  "1509": { name: "체질", icon: Item1509 },
  "1510": { name: "특이 체질", icon: Item1510 },
  "1511": { name: "슈퍼 메크 방어구", icon: Item1511 },
  "1512": { name: "슈퍼 메크 전력장", icon: Item1512 },
  "1515": { name: "포탑 방패", icon: Item1515 },
  "1516": { name: "구조물 현상금", icon: Item1516 },
  "1517": { name: "구조물 현상금", icon: Item1517 },
  "1518": { name: "구조물 현상금", icon: Item1518 },
  "1519": { name: "구조물 현상금", icon: Item1519 },
  "1520": { name: "과충전HA", icon: Item1520 },
  "1521": { name: "요새화", icon: Item1521 },
  "1522": { name: "포탑 강화", icon: Item1522 },
  "2003": { name: "체력 물약", icon: Item2003 },
  "2010": { name: "굳건한 의지의 완전한 비스킷", icon: Item2010 },
  "2015": { name: "키르히아이스의 파편", icon: Item2015 },
  "2019": { name: "강철 인장", icon: Item2019 },
  "2031": { name: "충전형 물약", icon: Item2031 },
  "2033": { name: "부패 물약", icon: Item2033 },
  "2049": { name: "수호자의 부적", icon: Item2049 },
  "2050": { name: "수호자의 장막", icon: Item2050 },
  "2051": { name: "수호자의 뿔피리", icon: Item2051 },
  "2052": { name: "포로 간식", icon: Item2052 },
  "2055": { name: "제어 와드", icon: Item2055 },
  "2065": { name: "슈렐리아의 군가", icon: Item2065 },
  "2138": { name: "강철의 영약", icon: Item2138 },
  "2139": { name: "마법의 영약", icon: Item2139 },
  "2140": { name: "분노의 영약", icon: Item2140 },
  "2141": { name: "카파 주스", icon: Item2141 },
  "2142": { name: "힘의 주스", icon: Item2142 },
  "2143": { name: "활력의 주스", icon: Item2143 },
  "2144": { name: "가속의 주스", icon: Item2144 },
  "2403": { name: "미니언 해체분석기", icon: Item2403 },
  "2419": { name: "초시계 키트", icon: Item2419 },
  "2420": { name: "초시계", icon: Item2420 },
  "2421": { name: "망가진 초시계", icon: Item2421 },
  "2422": { name: "약간 신비한 신발", icon: Item2422 },
  "2423": { name: "완벽한 초시계", icon: Item2423 },
  "2424": { name: "망가진 초시계", icon: Item2424 },
  "3001": { name: "저녁갑주", icon: Item3001 },
  "3003": { name: "대천사의 지팡이", icon: Item3003 },
  "3004": { name: "마나무네", icon: Item3004 },
  "3005": { name: "유령 배회자", icon: Item3005 },
  "3006": { name: "광전사의 군화", icon: Item3006 },
  "3009": { name: "신속의 장화", icon: Item3009 },
  "3011": { name: "화학공학 부패기", icon: Item3011 },
  "3012": { name: "축복의 성배", icon: Item3012 },
  "3020": { name: "마법사의 신발", icon: Item3020 },
  "3023": { name: "생명의 샘 펜던트", icon: Item3023 },
  "3024": { name: "얼음 방패", icon: Item3024 },
  "3026": { name: "수호 천사", icon: Item3026 },
  "3031": { name: "무한의 대검", icon: Item3031 },
  "3033": { name: "필멸자의 운명", icon: Item3033 },
  "3035": { name: "최후의 속삭임", icon: Item3035 },
  "3036": { name: "도미닉 경의 인사", icon: Item3036 },
  "3039": { name: "아트마의 심판", icon: Item3039 },
  "3040": { name: "대천사의 포옹", icon: Item3040 },
  "3041": { name: "메자이의 영혼약탈자", icon: Item3041 },
  "3042": { name: "무라마나", icon: Item3042 },
  "3044": { name: "탐식의 망치", icon: Item3044 },
  "3046": { name: "유령 무희", icon: Item3046 },
  "3047": { name: "판금 장화", icon: Item3047 },
  "3050": { name: "지크의 융합", icon: Item3050 },
  "3051": { name: "온기가 필요한 자의 도끼", icon: Item3051 },
  "3053": { name: "스테락의 도전", icon: Item3053 },
  "3057": { name: "광휘의 검", icon: Item3057 },
  "3065": { name: "정령의 형상", icon: Item3065 },
  "3066": { name: "비상의 월갑", icon: Item3066 },
  "3067": { name: "점화석", icon: Item3067 },
  "3068": { name: "태양불꽃 방패", icon: Item3068 },
  "3070": { name: "여신의 눈물", icon: Item3070 },
  "3071": { name: "칠흑의 양날 도끼", icon: Item3071 },
  "3072": { name: "피바라기", icon: Item3072 },
  "3074": { name: "굶주린 히드라", icon: Item3074 },
  "3075": { name: "가시 갑옷", icon: Item3075 },
  "3076": { name: "덤불 조끼", icon: Item3076 },
  "3077": { name: "티아맷", icon: Item3077 },
  "3078": { name: "삼위일체", icon: Item3078 },
  "3082": { name: "파수꾼의 갑옷", icon: Item3082 },
  "3083": { name: "워모그의 갑옷", icon: Item3083 },
  "3084": { name: "강철심장", icon: Item3084 },
  "3085": { name: "루난의 허리케인", icon: Item3085 },
  "3086": { name: "열정의 검", icon: Item3086 },
  "3087": { name: "스태틱의 단검", icon: Item3087 },
  "3089": { name: "라바돈의 죽음모자", icon: Item3089 },
  "3091": { name: "마법사의 최후", icon: Item3091 },
  "3094": { name: "고속 연사포", icon: Item3094 },
  "3095": { name: "폭풍갈퀴", icon: Item3095 },
  "3100": { name: "리치베인", icon: Item3100 },
  "3102": { name: "밴시의 장막", icon: Item3102 },
  "3105": { name: "군단의 방패", icon: Item3105 },
  "3107": { name: "구원", icon: Item3107 },
  "3108": { name: "악마의 마법서", icon: Item3108 },
  "3109": { name: "기사의 맹세", icon: Item3109 },
  "3110": { name: "얼어붙은 심장", icon: Item3110 },
  "3111": { name: "헤르메스의 발걸음", icon: Item3111 },
  "3112": { name: "수호자의 보주", icon: Item3112 },
  "3113": { name: "에테르 환영", icon: Item3113 },
  "3114": { name: "금지된 우상", icon: Item3114 },
  "3115": { name: "내셔의 이빨", icon: Item3115 },
  "3116": { name: "라일라이의 수정홀", icon: Item3116 },
  "3117": { name: "기동력의 장화", icon: Item3117 },
  "3119": { name: "혹한의 손길", icon: Item3119 },
  "3121": { name: "종말의 겨울", icon: Item3121 },
  "3123": { name: "처형인의 대검", icon: Item3123 },
  "3124": { name: "구인수의 격노검", icon: Item3124 },
  "3128": { name: "죽음불꽃 손아귀", icon: Item3128 },
  "3131": { name: "신성의 검", icon: Item3131 },
  "3133": { name: "콜필드의 전투 망치", icon: Item3133 },
  "3134": { name: "톱날 단검", icon: Item3134 },
  "3135": { name: "공허의 지팡이", icon: Item3135 },
  "3139": { name: "헤르메스의 시미터", icon: Item3139 },
  "3140": { name: "수은 장식띠", icon: Item3140 },
  "3142": { name: "요우무의 유령검", icon: Item3142 },
  "3143": { name: "란두인의 예언", icon: Item3143 },
  "3145": { name: "마법공학 교류 발전기", icon: Item3145 },
  "3146": { name: "마법공학 총검", icon: Item3146 },
  "3152": { name: "마법공학 로켓 벨트", icon: Item3152 },
  "3153": { name: "몰락한 왕의 검", icon: Item3153 },
  "3155": { name: "주문포식자", icon: Item3155 },
  "3156": { name: "맬모셔스의 아귀", icon: Item3156 },
  "3157": { name: "존야의 모래시계", icon: Item3157 },
  "3158": { name: "명석함의 아이오니아 장화", icon: Item3158 },
  "3161": { name: "쇼진의 창", icon: Item3161 },
  "3165": { name: "모렐로노미콘", icon: Item3165 },
  "3172": { name: "서풍", icon: Item3172 },
  "3177": { name: "수호자의 검", icon: Item3177 },
  "3179": { name: "그림자 검", icon: Item3179 },
  "3181": { name: "선체파괴자", icon: Item3181 },
  "3184": { name: "수호자의 망치", icon: Item3184 },
  "3190": { name: "강철의 솔라리 펜던트", icon: Item3190 },
  "3191": { name: "추적자의 팔목 보호대", icon: Item3191 },
  "3193": { name: "가고일 돌갑옷", icon: Item3193 },
  "3211": { name: "망령의 두건", icon: Item3211 },
  "3222": { name: "미카엘의 축복", icon: Item3222 },
  "3330": { name: "허수아비", icon: Item3330 },
  "3340": { name: "투명 와드", icon: Item3340 },
  "3348": { name: "비전 탐지기", icon: Item3348 },
  "3349": { name: "광휘의 특이점", icon: Item3349 },
  "3363": { name: "망원형 개조", icon: Item3363 },
  "3364": { name: "예언자의 렌즈", icon: Item3364 },
  "3400": { name: "수당", icon: Item3400 },
  "3430": { name: "파멸의식 고서", icon: Item3430 },
  "3504": { name: "불타는 향로", icon: Item3504 },
  "3508": { name: "정수 약탈자", icon: Item3508 },
  "3513": { name: "전령의 눈", icon: Item3513 },
  "3599": { name: "칼리스타의 칠흑의 창", icon: Item3599 },
  "3600": { name: "칼리스타의 칠흑의 창", icon: Item3600 },
  "3742": { name: "망자의 갑옷", icon: Item3742 },
  "3748": { name: "거대한 히드라", icon: Item3748 },
  "3801": { name: "수정 팔 보호구", icon: Item3801 },
  "3802": { name: "사라진 양피지", icon: Item3802 },
  "3803": { name: "억겁의 카탈리스트", icon: Item3803 },
  "3814": { name: "밤의 끝자락", icon: Item3814 },
  "3850": { name: "주문도둑의 검", icon: Item3850 },
  "3851": { name: "얼음 송곳니", icon: Item3851 },
  "3853": { name: "얼음 정수의 파편", icon: Item3853 },
  "3854": { name: "강철 어깨 보호대", icon: Item3854 },
  "3855": { name: "룬 강철 어깨 갑옷", icon: Item3855 },
  "3857": { name: "화이트록의 갑옷", icon: Item3857 },
  "3858": { name: "고대유물 방패", icon: Item3858 },
  "3859": { name: "타곤 산의 방패", icon: Item3859 },
  "3860": { name: "타곤 산의 방벽", icon: Item3860 },
  "3862": { name: "영혼의 낫", icon: Item3862 },
  "3863": { name: "해로윙 초승달낫", icon: Item3863 },
  "3864": { name: "검은 안개 낫", icon: Item3864 },
  "3901": { name: "가차없는 포격", icon: Item3901 },
  "3902": { name: "죽음의 여신", icon: Item3902 },
  "3903": { name: "사기진작", icon: Item3903 },
  "3916": { name: "망각의 구", icon: Item3916 },
  "4003": { name: "생명선", icon: Item4003 },
  "4004": { name: "망령 해적검", icon: Item4004 },
  "4005": { name: "제국의 명령", icon: Item4005 },
  "4010": { name: "핏빛 저주", icon: Item4010 },
  "4011": { name: "꽃피는 새벽의 검", icon: Item4011 },
  "4012": { name: "죄악 포식자", icon: Item4012 },
  "4013": { name: "번개 끈", icon: Item4013 },
  "4014": { name: "얼어붙은 망치", icon: Item4014 },
  "4015": { name: "당혹", icon: Item4015 },
  "4016": { name: "무언의 약속", icon: Item4016 },
  "4017": { name: "지옥불 손도끼", icon: Item4017 },
  "4401": { name: "대자연의 힘", icon: Item4401 },
  "4402": { name: "활력증진의 보석함", icon: Item4402 },
  "4403": { name: "황금 뒤집개", icon: Item4403 },
  "4628": { name: "지평선의 초점", icon: Item4628 },
  "4629": { name: "우주의 추진력", icon: Item4629 },
  "4630": { name: "역병의 보석", icon: Item4630 },
  "4632": { name: "신록의 장벽", icon: Item4632 },
  "4633": { name: "균열 생성기", icon: Item4633 },
  "4635": { name: "흡수의 시선", icon: Item4635 },
  "4636": { name: "밤의 수확자", icon: Item4636 },
  "4637": { name: "악마의 포옹", icon: Item4637 },
  "4638": { name: "감시하는 와드석", icon: Item4638 },
  "4641": { name: "고무의 와드석", icon: Item4641 },
  "4642": { name: "밴들유리 거울", icon: Item4642 },
  "4643": { name: "경계의 와드석", icon: Item4643 },
  "4644": { name: "부서진 여왕의 왕관", icon: Item4644 },
  "4645": { name: "그림자불꽃", icon: Item4645 },
  "6029": { name: "강철가시 채찍", icon: Item6029 },
  "6035": { name: "은빛 여명", icon: Item6035 },
  "6333": { name: "죽음의 무도", icon: Item6333 },
  "6609": { name: "화공 펑크 사슬검", icon: Item6609 },
  "6616": { name: "흐르는 물의 지팡이", icon: Item6616 },
  "6617": { name: "월석 재생기", icon: Item6617 },
  "6620": { name: "헬리아의 메아리", icon: Item6620 },
  "6630": { name: "선혈포식자", icon: Item6630 },
  "6631": { name: "발걸음 분쇄기", icon: Item6631 },
  "6632": { name: "신성한 파괴자", icon: Item6632 },
  "6653": { name: "리안드리의 고뇌", icon: Item6653 },
  "6655": { name: "루덴의 폭풍", icon: Item6655 },
  "6656": { name: "만년서리", icon: Item6656 },
  "6657": { name: "영겁의 지팡이", icon: Item6657 },
  "6660": { name: "바미의 불씨", icon: Item6660 },
  "6662": { name: "얼어붙은 건틀릿", icon: Item6662 },
  "6664": { name: "터보 화공 탱크", icon: Item6664 },
  "6665": { name: "해신 작쇼", icon: Item6665 },
  "6667": { name: "광휘의 미덕", icon: Item6667 },
  "6670": { name: "절정의 화살", icon: Item6670 },
  "6671": { name: "돌풍", icon: Item6671 },
  "6672": { name: "크라켄 학살자", icon: Item6672 },
  "6673": { name: "불멸의 철갑궁", icon: Item6673 },
  "6675": { name: "나보리 신속검", icon: Item6675 },
  "6676": { name: "징수의 총", icon: Item6676 },
  "6677": { name: "분노의 칼", icon: Item6677 },
  "6691": { name: "드락사르의 황혼검", icon: Item6691 },
  "6692": { name: "월식", icon: Item6692 },
  "6693": { name: "자객의 발톱", icon: Item6693 },
  "6694": { name: "세릴다의 원한", icon: Item6694 },
  "6695": { name: "독사의 송곳니", icon: Item6695 },
  "6696": { name: "원칙의 원형낫", icon: Item6696 },
  "7000": { name: "암살자의 발톱", icon: Item7000 },
  "7001": { name: "천체 정렬", icon: Item7001 },
  "7002": { name: "드락사르의 암흑검", icon: Item7002 },
  "7005": { name: "얼어붙은 주먹", icon: Item7005 },
  "7006": { name: "태풍", icon: Item7006 },
  "7009": { name: "이케시아의 저주", icon: Item7009 },
  "7010": { name: "어스름의 기원", icon: Item7010 },
  "7011": { name: "업그레이드 비행팩", icon: Item7011 },
  "7012": { name: "리안드리의 슬픔", icon: Item7012 },
  "7013": { name: "루덴의 눈", icon: Item7013 },
  "7014": { name: "영원한 겨울", icon: Item7014 },
  "7015": { name: "무한한 허기", icon: Item7015 },
  "7016": { name: "몽상파쇄자", icon: Item7016 },
  "7017": { name: "신성시해자", icon: Item7017 },
  "7018": { name: "무한한 삼위일체", icon: Item7018 },
  "7019": { name: "황금 새벽의 유물함", icon: Item7019 },
  "7020": { name: "슈렐리아의 진혼곡", icon: Item7020 },
  "7021": { name: "성운 투척기", icon: Item7021 },
  "7023": { name: "별의 균형", icon: Item7023 },
  "7024": { name: "중단", icon: Item7024 },
  "7025": { name: "레비아탄", icon: Item7025 },
  "7026": { name: "무언의 기생갑", icon: Item7026 },
  "7027": { name: "태고의 새벽", icon: Item7027 },
  "7028": { name: "무한 융합", icon: Item7028 },
  "7029": { name: "요우무의 각성", icon: Item7029 },
  "7030": { name: "들끓는 슬픔", icon: Item7030 },
  "7031": { name: "궁극의 검", icon: Item7031 },
  "7032": { name: "명멸", icon: Item7032 },
  "7033": { name: "비명을 지르는 도시의 외침", icon: Item7033 },
  "7050": { name: "갱플랭크 Placeholder", icon: Item7050 },
  "8001": { name: "증오의 사슬", icon: Item8001 },
  "8020": { name: "심연의 가면", icon: Item8020 },
  "221038": { name: "B.F. 대검", icon: Item221038 },
  "221053": { name: "흡혈의 낫", icon: Item221053 },
  "221058": { name: "쓸데없이 큰 지팡이", icon: Item221058 },
  "222051": { name: "수호자의 뿔피리", icon: Item222051 },
  "222065": { name: "슈렐리아의 군가", icon: Item222065 },
  "223001": { name: "저녁갑주", icon: Item223001 },
  "223003": { name: "대천사의 지팡이", icon: Item223003 },
  "223004": { name: "마나무네", icon: Item223004 },
  "223005": { name: "유령 배회자", icon: Item223005 },
  "223006": { name: "광전사의 군화", icon: Item223006 },
  "223009": { name: "신속의 장화", icon: Item223009 },
  "223011": { name: "화학공학 부패기", icon: Item223011 },
  "223020": { name: "마법사의 신발", icon: Item223020 },
  "223026": { name: "수호 천사", icon: Item223026 },
  "223031": { name: "무한의 대검", icon: Item223031 },
  "223033": { name: "필멸자의 운명", icon: Item223033 },
  "223036": { name: "도미닉 경의 인사", icon: Item223036 },
  "223039": { name: "아트마의 심판", icon: Item223039 },
  "223040": { name: "대천사의 포옹", icon: Item223040 },
  "223042": { name: "무라마나", icon: Item223042 },
  "223046": { name: "유령 무희", icon: Item223046 },
  "223047": { name: "판금 장화", icon: Item223047 },
  "223050": { name: "지크의 융합", icon: Item223050 },
  "223053": { name: "스테락의 도전", icon: Item223053 },
  "223057": { name: "광휘의 검", icon: Item223057 },
  "223065": { name: "정령의 형상", icon: Item223065 },
  "223067": { name: "점화석", icon: Item223067 },
  "223068": { name: "태양불꽃 방패", icon: Item223068 },
  "223071": { name: "칠흑의 양날 도끼", icon: Item223071 },
  "223072": { name: "피바라기", icon: Item223072 },
  "223074": { name: "굶주린 히드라", icon: Item223074 },
  "223075": { name: "가시 갑옷", icon: Item223075 },
  "223078": { name: "삼위일체", icon: Item223078 },
  "223084": { name: "강철심장", icon: Item223084 },
  "223085": { name: "루난의 허리케인", icon: Item223085 },
  "223087": { name: "스태틱의 단검", icon: Item223087 },
  "223089": { name: "라바돈의 죽음모자", icon: Item223089 },
  "223091": { name: "마법사의 최후", icon: Item223091 },
  "223094": { name: "고속 연사포", icon: Item223094 },
  "223095": { name: "폭풍갈퀴", icon: Item223095 },
  "223100": { name: "리치베인", icon: Item223100 },
  "223102": { name: "밴시의 장막", icon: Item223102 },
  "223105": { name: "군단의 방패", icon: Item223105 },
  "223107": { name: "구원", icon: Item223107 },
  "223109": { name: "기사의 맹세", icon: Item223109 },
  "223110": { name: "얼어붙은 심장", icon: Item223110 },
  "223111": { name: "헤르메스의 발걸음", icon: Item223111 },
  "223112": { name: "수호자의 보주", icon: Item223112 },
  "223115": { name: "내셔의 이빨", icon: Item223115 },
  "223116": { name: "라일라이의 수정홀", icon: Item223116 },
  "223119": { name: "혹한의 손길", icon: Item223119 },
  "223121": { name: "종말의 겨울", icon: Item223121 },
  "223124": { name: "구인수의 격노검", icon: Item223124 },
  "223135": { name: "공허의 지팡이", icon: Item223135 },
  "223139": { name: "헤르메스의 시미터", icon: Item223139 },
  "223142": { name: "요우무의 유령검", icon: Item223142 },
  "223143": { name: "란두인의 예언", icon: Item223143 },
  "223146": { name: "마법공학 총검", icon: Item223146 },
  "223152": { name: "마법공학 로켓 벨트", icon: Item223152 },
  "223153": { name: "몰락한 왕의 검", icon: Item223153 },
  "223156": { name: "맬모셔스의 아귀", icon: Item223156 },
  "223157": { name: "존야의 모래시계", icon: Item223157 },
  "223158": { name: "명석함의 아이오니아 장화", icon: Item223158 },
  "223161": { name: "쇼진의 창", icon: Item223161 },
  "223165": { name: "모렐로노미콘", icon: Item223165 },
  "223172": { name: "서풍", icon: Item223172 },
  "223177": { name: "수호자의 검", icon: Item223177 },
  "223181": { name: "선체파괴자", icon: Item223181 },
  "223184": { name: "수호자의 망치", icon: Item223184 },
  "223185": { name: "수호자의 단검", icon: Item223185 },
  "223190": { name: "강철의 솔라리 펜던트", icon: Item223190 },
  "223193": { name: "가고일 돌갑옷", icon: Item223193 },
  "223222": { name: "미카엘의 축복", icon: Item223222 },
  "223504": { name: "불타는 향로", icon: Item223504 },
  "223508": { name: "정수 약탈자", icon: Item223508 },
  "223742": { name: "망자의 갑옷", icon: Item223742 },
  "223748": { name: "거대한 히드라", icon: Item223748 },
  "223814": { name: "밤의 끝자락", icon: Item223814 },
  "224004": { name: "망령 해적검", icon: Item224004 },
  "224005": { name: "제국의 명령", icon: Item224005 },
  "224401": { name: "대자연의 힘", icon: Item224401 },
  "224403": { name: "황금 뒤집개", icon: Item224403 },
  "224628": { name: "지평선의 초점", icon: Item224628 },
  "224629": { name: "우주의 추진력", icon: Item224629 },
  "224633": { name: "균열 생성기", icon: Item224633 },
  "224636": { name: "밤의 수확자", icon: Item224636 },
  "224637": { name: "악마의 포옹", icon: Item224637 },
  "224644": { name: "부서진 여왕의 왕관", icon: Item224644 },
  "224645": { name: "그림자불꽃", icon: Item224645 },
  "226035": { name: "은빛 여명", icon: Item226035 },
  "226333": { name: "죽음의 무도", icon: Item226333 },
  "226609": { name: "화공 펑크 사슬검", icon: Item226609 },
  "226616": { name: "흐르는 물의 지팡이", icon: Item226616 },
  "226617": { name: "월석 재생기", icon: Item226617 },
  "226620": { name: "헬리아의 메아리", icon: Item226620 },
  "226630": { name: "선혈포식자", icon: Item226630 },
  "226631": { name: "발걸음 분쇄기", icon: Item226631 },
  "226632": { name: "신성한 파괴자", icon: Item226632 },
  "226653": { name: "리안드리의 고뇌", icon: Item226653 },
  "226655": { name: "루덴의 폭풍", icon: Item226655 },
  "226656": { name: "만년서리", icon: Item226656 },
  "226657": { name: "영겁의 지팡이", icon: Item226657 },
  "226662": { name: "얼어붙은 건틀릿", icon: Item226662 },
  "226664": { name: "터보 화공 탱크", icon: Item226664 },
  "226665": { name: "해신 작쇼", icon: Item226665 },
  "226667": { name: "광휘의 미덕", icon: Item226667 },
  "226671": { name: "돌풍", icon: Item226671 },
  "226672": { name: "크라켄 학살자", icon: Item226672 },
  "226673": { name: "불멸의 철갑궁", icon: Item226673 },
  "226675": { name: "나보리 신속검", icon: Item226675 },
  "226676": { name: "징수의 총", icon: Item226676 },
  "226691": { name: "드락사르의 황혼검", icon: Item226691 },
  "226692": { name: "월식", icon: Item226692 },
  "226693": { name: "자객의 발톱", icon: Item226693 },
  "226694": { name: "세릴다의 원한", icon: Item226694 },
  "226695": { name: "독사의 송곳니", icon: Item226695 },
  "226696": { name: "원칙의 원형낫", icon: Item226696 },
  "227001": { name: "천체 정렬", icon: Item227001 },
  "227002": { name: "드락사르의 암흑검", icon: Item227002 },
  "227005": { name: "얼어붙은 주먹", icon: Item227005 },
  "227006": { name: "태풍", icon: Item227006 },
  "227009": { name: "이케시아의 저주", icon: Item227009 },
  "227010": { name: "어스름의 기원", icon: Item227010 },
  "227011": { name: "업그레이드 비행팩", icon: Item227011 },
  "227012": { name: "리안드리의 슬픔", icon: Item227012 },
  "227013": { name: "루덴의 눈", icon: Item227013 },
  "227014": { name: "영원한 겨울", icon: Item227014 },
  "227015": { name: "무한한 허기", icon: Item227015 },
  "227016": { name: "몽상파쇄자", icon: Item227016 },
  "227017": { name: "신성시해자", icon: Item227017 },
  "227018": { name: "무한한 삼위일체", icon: Item227018 },
  "227019": { name: "황금 새벽의 유물함", icon: Item227019 },
  "227020": { name: "슈렐리아의 진혼곡", icon: Item227020 },
  "227021": { name: "성운 투척기", icon: Item227021 },
  "227023": { name: "별의 균형", icon: Item227023 },
  "227024": { name: "중단", icon: Item227024 },
  "227025": { name: "레비아탄", icon: Item227025 },
  "227026": { name: "무언의 기생갑", icon: Item227026 },
  "227027": { name: "태고의 새벽", icon: Item227027 },
  "227028": { name: "무한 융합", icon: Item227028 },
  "227029": { name: "요우무의 각성", icon: Item227029 },
  "227030": { name: "들끓는 슬픔", icon: Item227030 },
  "227031": { name: "궁극의 검", icon: Item227031 },
  "227032": { name: "명멸", icon: Item227032 },
  "227033": { name: "비명을 지르는 도시의 외침", icon: Item227033 },
  "228001": { name: "증오의 사슬", icon: Item228001 },
  "228002": { name: "우글렛의 마녀 모자", icon: Item228002 },
  "228003": { name: "죽음의 검", icon: Item228003 },
  "228004": { name: "적응형 투구", icon: Item228004 },
  "228005": { name: "흑요석 양날 도끼", icon: Item228005 },
  "228006": { name: "핏빛 칼날", icon: Item228006 },
  "228008": { name: "룬 글레이브", icon: Item228008 },
  "228020": { name: "심연의 가면", icon: Item228020 },
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
