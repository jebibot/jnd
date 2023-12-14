import Image from "next/image";
import { CHAMPIONS } from "@/utils/lol/champions";
import { getKDA, getKDAString, getKillParticipation } from "@/utils/stats";
import { PlayerMatch } from "@/utils/supabase";
import {
  formatDate,
  formatNumber,
  formatTime,
  formatTimestamp,
} from "@/utils/util";
import Champion from "./champion";
import Item from "./item";

const multiKill = [, , "더블킬", "트리플킬", "쿼드라킬", "펜타킬"];

export default function Match({ match }: { match: PlayerMatch }) {
  const p = match.player!;
  const stats = p.stats;
  const teamStats = match.game.teamStats?.[p.teamId];
  if (stats == null || teamStats == null) {
    return null;
  }
  return (
    <div className="flex px-2 sm:px-4 py-1.5 items-center gap-4">
      <div className="whitespace-nowrap">
        <div className="font-semibold text-sm sm:text-base">
          {stats.WIN ? "승리" : "패배"}
        </div>
        <div className="text-sm sm:text-base">
          {formatTimestamp(match.game.gameLength * 1000)}
        </div>
        <div className="mt-2 text-xs sm:text-sm">
          {formatDate(new Date(match.start))}
        </div>
        <div className="text-xs sm:text-sm">
          {formatTime(new Date(match.start))}
        </div>
      </div>
      <div className="shrink-0 space-y-2 mx-auto">
        <div className="flex items-center gap-4">
          <Champion player={p} largeSize={56} mediumSize={32} smallSize={24} />
          <div>
            <div className="sm:text-lg font-semibold leading-6">
              {getKDAString(stats)}
            </div>
            <div>
              {formatNumber(getKDA(stats))} (
              {formatNumber(getKillParticipation(stats, teamStats))}%)
            </div>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <Item className="rounded-md" item={stats.ITEM0} />
          <Item className="rounded-md" item={stats.ITEM1} />
          <Item className="rounded-md" item={stats.ITEM2} />
          <Item className="rounded-md" item={stats.ITEM3} />
          <Item className="rounded-md" item={stats.ITEM4} />
          <Item className="rounded-md" item={stats.ITEM5} />
          <Item className="rounded-full" item={stats.ITEM6} />
          {multiKill[stats.LARGEST_MULTI_KILL] && (
            <div className="px-2 py-1 ml-2 rounded-md bg-red-100 dark:bg-red-800 text-xs font-medium text-red-600 dark:text-red-200 leading-none">
              {multiKill[stats.LARGEST_MULTI_KILL]}
            </div>
          )}
        </div>
      </div>
      <div className="hidden sm:flex basis-64">
        {[100, 200].map((teamId) => (
          <div key={teamId} className="flex-1 space-y-0.5 w-8 text-sm">
            {match.game.participants
              .filter((p) => p.teamId === teamId)
              .map((p) => {
                return (
                  <div key={p.riotId} className="flex items-center gap-1">
                    <div className="w-5 h-5 shrink-0 rounded-md overflow-hidden">
                      <Image
                        className="scale-125"
                        width={20}
                        height={20}
                        src={CHAMPIONS[p.championId].icon}
                        title={CHAMPIONS[p.championId].name}
                        alt={CHAMPIONS[p.championId].name}
                      />
                    </div>
                    <div className="whitespace-nowrap text-ellipsis overflow-hidden">
                      {p.player?.name ? (
                        <span className="font-medium">{p.player.name}</span>
                      ) : (
                        p.riotId
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
}
