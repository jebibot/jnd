import { StaticImageData } from "next/image";

import SilverTop from "../../../public/images/ranked-positions/SILVER_TOP.png";
import SilverJug from "../../../public/images/ranked-positions/SILVER_JUG.png";
import SilverMid from "../../../public/images/ranked-positions/SILVER_MID.png";
import SilverAdc from "../../../public/images/ranked-positions/SILVER_ADC.png";
import SilverSup from "../../../public/images/ranked-positions/SILVER_SUP.png";
import GoldTop from "../../../public/images/ranked-positions/GOLD_TOP.png";
import GoldJug from "../../../public/images/ranked-positions/GOLD_JUG.png";
import GoldMid from "../../../public/images/ranked-positions/GOLD_MID.png";
import GoldAdc from "../../../public/images/ranked-positions/GOLD_ADC.png";
import GoldSup from "../../../public/images/ranked-positions/GOLD_SUP.png";
import PlatinumTop from "../../../public/images/ranked-positions/PLATINUM_TOP.png";
import PlatinumJug from "../../../public/images/ranked-positions/PLATINUM_JUG.png";
import PlatinumMid from "../../../public/images/ranked-positions/PLATINUM_MID.png";
import PlatinumAdc from "../../../public/images/ranked-positions/PLATINUM_ADC.png";
import PlatinumSup from "../../../public/images/ranked-positions/PLATINUM_SUP.png";
import EmeraldTop from "../../../public/images/ranked-positions/EMERALD_TOP.png";
import EmeraldJug from "../../../public/images/ranked-positions/EMERALD_JUG.png";
import EmeraldMid from "../../../public/images/ranked-positions/EMERALD_MID.png";
import EmeraldAdc from "../../../public/images/ranked-positions/EMERALD_ADC.png";
import EmeraldSup from "../../../public/images/ranked-positions/EMERALD_SUP.png";
import DiamondTop from "../../../public/images/ranked-positions/DIAMOND_TOP.png";
import DiamondJug from "../../../public/images/ranked-positions/DIAMOND_JUG.png";
import DiamondMid from "../../../public/images/ranked-positions/DIAMOND_MID.png";
import DiamondAdc from "../../../public/images/ranked-positions/DIAMOND_ADC.png";
import DiamondSup from "../../../public/images/ranked-positions/DIAMOND_SUP.png";

const TIER: Record<string, StaticImageData[]> = {
  SILVER: [SilverTop, SilverJug, SilverMid, SilverAdc, SilverSup],
  GOLD: [GoldTop, GoldJug, GoldMid, GoldAdc, GoldSup],
  PLATINUM: [PlatinumTop, PlatinumJug, PlatinumMid, PlatinumAdc, PlatinumSup],
  EMERALD: [EmeraldTop, EmeraldJug, EmeraldMid, EmeraldAdc, EmeraldSup],
  DIAMOND: [DiamondTop, DiamondJug, DiamondMid, DiamondAdc, DiamondSup],
};

export function getTierIcon(rank: string | null, pos: number) {
  let tier = "GOLD";
  if (rank) {
    tier = rank.split(",")[0];
  }
  return TIER[tier][pos - 1];
}
