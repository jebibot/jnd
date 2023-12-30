"use client";

import { Player } from "@/utils/supabase";
import { classNames } from "@/utils/util";

const TIER_BORDER: Record<string, string> = {
  SILVER: "border-gray-300 dark:border-gray-800",
  GOLD: "border-yellow-300 dark:border-yellow-800",
  PLATINUM: "border-blue-300 dark:border-blue-800",
  EMERALD: "border-emerald-300 dark:border-emerald-800",
  DIAMOND: "border-purple-300 dark:border-purple-800",
};

export function getTierBorder(rank: string | null) {
  if (!rank) {
    return "border-transparent";
  }
  const parts = rank.split(",");
  return TIER_BORDER[parts[0]];
}

export default function PlayerItem({ player }: { player: Player }) {
  return (
    <>
      {player.profile && (
        <div className="relative h-8 w-8 mr-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={classNames(
              "h-8 w-8 rounded-full border-2",
              getTierBorder(player.lol_rank),
            )}
            src={player.profile.replace("300x300", "50x50")}
            alt=""
          />
        </div>
      )}
      <span className="whitespace-nowrap">{player.name}</span>
    </>
  );
}
