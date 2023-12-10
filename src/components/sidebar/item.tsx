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

export default function SidebarItem({ player }: { player: Player }) {
  return (
    <>
      {player.profile && (
        <div className="relative h-8 w-8 mr-1">
          <img
            className={classNames(
              "h-8 w-8 rounded-full border-2",
              getTierBorder(player.lol_rank),
            )}
            src={player.profile.replace("300x300", "50x50")}
            alt={player.name}
          />
          {player.stream_start && (
            <span
              className="flex absolute bottom-0 right-0 h-2 w-2 -mt-0.5 -mr-0.5"
              aria-label="방송 중"
            >
              <span className="absolute h-full w-full rounded-full bg-red-400 dark:bg-red-500 opacity-75 animate-ping"></span>
              <span className="relative h-2 w-2 rounded-full bg-red-500 dark:bg-red-600"></span>
            </span>
          )}
        </div>
      )}
      <span className="break-keep">{player.name}</span>
    </>
  );
}
