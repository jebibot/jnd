import {
  getCS,
  getCSPerMinute,
  getGoldPerMinute,
  getKDA,
  getKDAString,
  getKillParticipation,
} from "@/utils/stats";
import { PlayerMatch } from "@/utils/supabase";
import { classNames, formatNumber, formatTimestamp } from "@/utils/util";
import Champion from "./champion";
import Nick from "../nick";
import { Fragment } from "react";
import Item from "./item";

export default function MatchHistory({ match }: { match: PlayerMatch }) {
  const teamStats = match.game.teamStats;
  if (teamStats == null) {
    return null;
  }
  return (
    <table className="table-auto mx-auto rounded-md text-center text-sm md:text-base whitespace-nowrap overflow-hidden">
      <thead className="text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-800">
        <tr>
          <th className="px-2 py-1">플레이어</th>
          <th className="px-2 py-1">KDA</th>
          <th className="px-2 py-1">딜량</th>
          <th className="px-2 py-1">피해량</th>
          <th className="px-2 py-1">골드</th>
          <th className="px-2 py-1">CS</th>
          <th className="px-2 py-1">와드</th>
          <th className="px-2 py-1">VS</th>
          <th className="px-2 py-1">아이템</th>
          <th className="px-2 py-1">다시보기</th>
        </tr>
      </thead>
      <tbody>
        {(
          [
            [100, true],
            [100, false],
            [200, false],
            [200, true],
          ] as [number, boolean][]
        ).map(([teamId, playerStats]) =>
          playerStats ? (
            <Fragment key={teamId}>
              <tr className="sr-only">
                <td>{teamId === 100 ? "블루팀" : "레드팀"}</td>
              </tr>
              {match.game.participants
                .filter((p) => p.teamId === teamId)
                .map((p) => {
                  const nick = p.riotId || p.summonerName;
                  const participant = match.participants.find(
                    (player) =>
                      p.summonerId === player.players.lol ||
                      p.summonerId === player.players.lol_secondary,
                  );
                  const stats = p.stats;
                  if (stats == null) {
                    return null;
                  }
                  return (
                    <tr
                      key={nick}
                      className={classNames(
                        "space-y-2 border-l-2 pl-2",
                        teamId === 100
                          ? p === match.player
                            ? "border-blue-500"
                            : "border-blue-300 dark:border-blue-800"
                          : p === match.player
                            ? "border-red-500"
                            : "border-red-300 dark:border-red-800",
                      )}
                    >
                      <td className="px-2 py-1">
                        <div className="flex items-center w-max gap-2">
                          <Champion
                            player={p}
                            className="shrink-0"
                            largeSize={32}
                            mediumSize={20}
                            smallSize={16}
                          />
                          <div className="font-semibold dark:text-gray-200">
                            {participant?.players?.name || (
                              <Nick
                                className="text-gray-700 dark:text-gray-300"
                                nick={nick}
                              />
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-1">
                        <div>{getKDAString(stats)}</div>
                        <div className="text-xs md:text-sm">
                          {formatNumber(getKDA(stats))} (
                          {formatNumber(
                            getKillParticipation(stats, teamStats[teamId]),
                          )}
                          %)
                        </div>
                      </td>
                      <td className="px-2 py-1">
                        {formatNumber(stats.TOTAL_DAMAGE_DEALT_TO_CHAMPIONS)}
                        <div className="w-18 h-2 rounded-full bg-gray-200 dark:bg-gray-800">
                          <div
                            className="h-2 rounded-full bg-red-600 dark:bg-red-700"
                            style={{
                              width: `${(
                                (stats.TOTAL_DAMAGE_DEALT_TO_CHAMPIONS /
                                  teamStats[teamId]
                                    .TOTAL_DAMAGE_DEALT_TO_CHAMPIONS) *
                                100
                              ).toFixed(1)}%`,
                            }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-2 py-1">
                        {formatNumber(stats.TOTAL_DAMAGE_TAKEN)}
                        <div className="w-18 h-2 rounded-full bg-gray-200 dark:bg-gray-800">
                          <div
                            className="h-2 rounded-full bg-gray-600 dark:bg-gray-500"
                            style={{
                              width: `${(
                                (stats.TOTAL_DAMAGE_TAKEN /
                                  teamStats[teamId].TOTAL_DAMAGE_TAKEN) *
                                100
                              ).toFixed(1)}%`,
                            }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-2 py-1">
                        <div>{formatNumber(stats.GOLD_EARNED)}</div>
                        <div className="text-xs md:text-sm">
                          (
                          {formatNumber(
                            getGoldPerMinute(stats, match.game.gameLength),
                          )}
                          )
                        </div>
                      </td>
                      <td className="px-2 py-1">
                        <div>{getCS(stats)}</div>
                        <div className="text-xs md:text-sm">
                          (
                          {formatNumber(
                            getCSPerMinute(stats, match.game.gameLength),
                          )}
                          )
                        </div>
                      </td>
                      <td className="px-2 py-1">
                        {stats.WARD_PLACED} / {stats.WARD_KILLED}
                      </td>
                      <td className="px-2 py-1">{stats.VISION_SCORE}</td>
                      <td className="px-2 py-1">
                        <div className="flex items-center w-max gap-0.5">
                          <Item className="rounded-md" item={stats.ITEM0} />
                          <Item className="rounded-md" item={stats.ITEM1} />
                          <Item className="rounded-md" item={stats.ITEM2} />
                          <Item className="rounded-md" item={stats.ITEM3} />
                          <Item className="rounded-md" item={stats.ITEM4} />
                          <Item className="rounded-md" item={stats.ITEM5} />
                          <Item className="rounded-full" item={stats.ITEM6} />
                        </div>
                      </td>
                      <td className="px-2 py-1">
                        {participant?.uptime &&
                          formatTimestamp(participant.uptime * 1000)}
                      </td>
                    </tr>
                  );
                })}
            </Fragment>
          ) : (
            <tr
              key={`${teamId}-stats`}
              className="bg-gray-100 dark:bg-slate-900"
            >
              <td className="px-2 py-1">
                {match.game.participants.find((p) => p.teamId === teamId)?.stats
                  ?.WIN
                  ? "승리"
                  : "패배"}
              </td>
              <td className="px-2 py-1">{getKDAString(teamStats[teamId])}</td>
              <td className="px-2 py-1 text-xs md:text-sm" colSpan={2}>
                포탑: {teamStats[teamId].TURRETS_KILLED} / 억제기:{" "}
                {teamStats[teamId].BARRACKS_KILLED}
              </td>
              <td className="px-2 py-1">
                {formatNumber(teamStats[teamId].GOLD_EARNED)}
              </td>
              <td className="px-2 py-1" colSpan={5}></td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}
