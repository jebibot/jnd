import Image from "next/image";
import { CHAMPIONS } from "@/utils/lol";
import { Player } from "@/utils/supabase";
import { classNames, formatNumber } from "@/utils/util";
import Match from "./match";
import MatchDetail from "./match-detail";
import DisclosureWrapper from "../disclosure";

export default function Stats({
  player,
}: {
  player: Player & { participants: any[] };
}) {
  const participants = player.participants.filter(
    (p) => p.matches.stats != null,
  );
  const championStats: Record<number, any> = {};
  for (const participant of participants) {
    const match = participant.matches;
    const stats = match.stats.teamPlayerParticipantStats.concat(
      match.stats.otherTeamPlayerParticipantStats,
    );
    match.stats.teamStats = { 100: {}, 200: {} };
    for (const p of match.game.participants) {
      const stat = stats.find((s: any) => s.summonerName === p.summonerName);
      if (stat == null) {
        continue;
      }
      p.statistics = Object.fromEntries(
        stat.statistics.map((s: any) => [s.statTypeName, s.value]),
      );
      [
        "CHAMPIONS_KILLED",
        "NUM_DEATHS",
        "ASSISTS",
        "GOLD_EARNED",
        "BARRACKS_KILLED",
        "TURRETS_KILLED",
      ].forEach((stat) => {
        match.stats.teamStats[p.teamId][stat] ||= 0;
        match.stats.teamStats[p.teamId][stat] += p.statistics[stat] || 0;
      });
      ["TOTAL_DAMAGE_DEALT_TO_CHAMPIONS", "TOTAL_DAMAGE_TAKEN"].forEach(
        (stat) => {
          match.stats.teamStats[p.teamId][stat] ||= 0;
          match.stats.teamStats[p.teamId][stat] = Math.max(
            match.stats.teamStats[p.teamId][stat],
            p.statistics[stat] || 0,
          );
        },
      );
      p.player = match.players.find(
        (s: any) => p.summonerId === s.lol || p.summonerId === s.lol_secondary,
      );
      if (p.player?.name === player.name) {
        participant.player = p;
        championStats[p.championId] ||= {};
        const championStat = championStats[p.championId];
        championStat.games ||= 0;
        championStat.games++;
        championStat.gameLength ||= 0;
        championStat.gameLength += match.stats.gameLength;
        [
          "WIN",
          "LOSE",
          "CHAMPIONS_KILLED",
          "NUM_DEATHS",
          "ASSISTS",
          "MINIONS_KILLED",
          "NEUTRAL_MINIONS_KILLED",
          "GOLD_EARNED",
        ].forEach((stat) => {
          championStat[stat] ||= 0;
          championStat[stat] += p.statistics[stat] || 0;
        });
      }
    }
  }
  const championStatsList = Object.entries(championStats).sort((a, b) => {
    if (b[1].games !== a[1].games) {
      return b[1].games - a[1].games;
    }
    if (b[1].WIN !== a[1].WIN) {
      return b[1].WIN - a[1].WIN;
    }
    return b[1].CHAMPIONS_KILLED - a[1].CHAMPIONS_KILLED;
  });
  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto max-w-full overflow-x-auto">
        <table className="table-auto rounded-md text-center text-sm md:text-base whitespace-nowrap overflow-hidden">
          <thead className="text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-slate-800">
            <tr>
              <th className="px-2 py-1">챔피언</th>
              <th className="px-2 py-1">승률</th>
              <th className="px-2 py-1">게임</th>
              <th className="px-2 py-1">승리</th>
              <th className="px-2 py-1">패배</th>
              <th className="px-2 py-1">KDA</th>
              <th className="px-2 py-1">킬</th>
              <th className="px-2 py-1">데스</th>
              <th className="px-2 py-1">어시</th>
              <th className="px-2 py-1">CS</th>
              <th className="px-2 py-1">골드</th>
            </tr>
          </thead>
          <tbody>
            {championStatsList.map(([championId, stats]) => (
              <tr
                key={championId}
                className="even:bg-gray-100 even:dark:bg-slate-900 border-b dark:border-slate-800"
              >
                <td className="flex items-center px-2 py-1">
                  <div className="w-8 h-8 mr-2 rounded-md overflow-hidden">
                    <Image
                      className="scale-125"
                      width={32}
                      height={32}
                      src={CHAMPIONS[championId].icon}
                      title={CHAMPIONS[championId].name}
                      alt={CHAMPIONS[championId].name}
                    />
                  </div>
                  {CHAMPIONS[championId].name}
                </td>
                <td className="px-2 py-1">
                  {formatNumber((stats.WIN / stats.games) * 100)}%
                </td>
                <td className="px-2 py-1">{stats.games}</td>
                <td className="px-2 py-1">{stats.WIN}</td>
                <td className="px-2 py-1">{stats.LOSE}</td>
                <td className="px-2 py-1">
                  {formatNumber(
                    (stats.CHAMPIONS_KILLED + stats.ASSISTS) / stats.NUM_DEATHS,
                  )}
                </td>
                <td className="px-2 py-1">
                  {formatNumber(stats.CHAMPIONS_KILLED / stats.games)}
                </td>
                <td className="px-2 py-1">
                  {formatNumber(stats.NUM_DEATHS / stats.games)}
                </td>
                <td className="px-2 py-1">
                  {formatNumber(stats.ASSISTS / stats.games)}
                </td>
                <td className="px-2 py-1">
                  {formatNumber(
                    (stats.MINIONS_KILLED + stats.NEUTRAL_MINIONS_KILLED) /
                      stats.games,
                  )}{" "}
                  (
                  {formatNumber(
                    ((stats.MINIONS_KILLED + stats.NEUTRAL_MINIONS_KILLED) *
                      60) /
                      stats.gameLength,
                  )}
                  )
                </td>
                <td className="px-2 py-1">
                  {formatNumber(stats.GOLD_EARNED / stats.games)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {participants.map((participant) => (
        <DisclosureWrapper
          key={participant.matches.game.gameId}
          buttonClassName={classNames(
            "rounded-md",
            participant.player.statistics.WIN
              ? "bg-sky-50 dark:bg-sky-900"
              : "bg-red-50 dark:bg-red-900",
          )}
          button={<Match participant={participant} />}
        >
          <MatchDetail match={participant.matches} />
        </DisclosureWrapper>
      ))}
    </div>
  );
}
