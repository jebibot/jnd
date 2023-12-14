import {
  formatDate,
  formatNumber,
  formatTime,
  formatTimestamp,
} from "@/utils/util";
import Champion from "./champion";
import Item from "./item";
import Image from "next/image";
import { CHAMPIONS } from "@/utils/lol";

const multiKill = [, , "더블킬", "트리플킬", "쿼드라킬", "펜타킬"];

export default function Match({ participant }: { participant: any }) {
  const match = participant.matches;
  const p = participant.player;
  return (
    <div className="flex px-2 sm:px-4 py-1.5 items-center gap-4">
      <div>
        <div className="font-semibold text-sm sm:text-base">
          {p.statistics.WIN ? "승리" : "패배"}
        </div>
        <div className="text-sm sm:text-base">
          {formatTimestamp(match.stats.gameLength * 1000)}
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
            <div className="text-lg font-semibold leading-6">
              {p.statistics.CHAMPIONS_KILLED} / {p.statistics.NUM_DEATHS} /{" "}
              {p.statistics.ASSISTS}
            </div>
            <div>
              {formatNumber(
                (p.statistics.CHAMPIONS_KILLED + p.statistics.ASSISTS) /
                  p.statistics.NUM_DEATHS,
              )}{" "}
              (
              {formatNumber(
                ((p.statistics.CHAMPIONS_KILLED + p.statistics.ASSISTS) /
                  match.stats.teamStats[p.teamId].CHAMPIONS_KILLED) *
                  100,
              )}
              %)
            </div>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <Item className="rounded-md" item={p.statistics.ITEM0} />
          <Item className="rounded-md" item={p.statistics.ITEM1} />
          <Item className="rounded-md" item={p.statistics.ITEM2} />
          <Item className="rounded-md" item={p.statistics.ITEM3} />
          <Item className="rounded-md" item={p.statistics.ITEM4} />
          <Item className="rounded-md" item={p.statistics.ITEM5} />
          <Item className="rounded-full" item={p.statistics.ITEM6} />
          {multiKill[p.statistics.LARGEST_MULTI_KILL] && (
            <div className="px-2 py-1 ml-2 rounded-md bg-red-100 dark:bg-red-800 text-xs font-medium text-red-600 dark:text-red-200 leading-none">
              {multiKill[p.statistics.LARGEST_MULTI_KILL]}
            </div>
          )}
        </div>
      </div>
      <div className="hidden sm:flex basis-64">
        {[100, 200].map((teamId) => (
          <div key={teamId} className="flex-1 space-y-0.5 w-8 text-sm">
            {match.game.participants
              .filter((p: any) => p.teamId === teamId)
              .map((p: any) => {
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
