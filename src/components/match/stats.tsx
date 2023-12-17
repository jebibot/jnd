import { getCSPerMinute, getKDA } from "@/utils/stats";
import { PlayerDetailed } from "@/utils/supabase";
import { classNames } from "@/utils/util";
import Match from "./match";
import MatchHistory from "./match-history";
import PlayerChampionStats from "./player-champions-stat";
import DisclosureWrapper from "../disclosure";

export default function Stats({ player }: { player: PlayerDetailed }) {
  const matches = player.matches;
  const stats: Record<number, Record<string, number>> = {};
  for (const match of matches) {
    for (const p of match.game.participants) {
      p.player = match.participants.find(
        (s) =>
          p.summonerId === s.players.lol ||
          p.summonerId === s.players.lol_secondary,
      )?.players;
      if (p.player?.name === player.name) {
        match.player = p;
        stats[p.championId] ||= {
          championId: p.championId,
        };
        const stat = stats[p.championId];
        stat.games ||= 0;
        stat.games++;
        stat.gameLength ||= 0;
        stat.gameLength += match.game.gameLength;
        [
          "WIN",
          "LOSE",
          "CHAMPIONS_KILLED",
          "NUM_DEATHS",
          "ASSISTS",
          "MINIONS_KILLED",
          "NEUTRAL_MINIONS_KILLED",
          "GOLD_EARNED",
        ].forEach((s) => {
          stat[s] ||= 0;
          stat[s] += p.stats?.[s] || 0;
        });
      }
    }
  }
  const championStats = Object.values(stats).map((s) => ({
    champion_id: s.championId,
    games: s.games,
    kda: getKDA(s),
    win: s.WIN,
    kills: s.CHAMPIONS_KILLED / s.games,
    deaths: s.NUM_DEATHS / s.games,
    assists: s.ASSISTS / s.games,
    minions: (s.MINIONS_KILLED + s.NEUTRAL_MINIONS_KILLED) / s.games,
    cpm: getCSPerMinute(s, s.gameLength),
    gold: s.GOLD_EARNED / s.games,
  }));
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="text-center order-1 md:order-none">
          <h2 className="mb-1 text-lg font-semibold">자낳대</h2>
          <div className="w-full overflow-x-auto thin-scrollbar">
            <PlayerChampionStats championStats={championStats} sort={true} />
          </div>
        </div>
        <div className="text-center">
          <h2 className="mb-1 text-lg font-semibold">
            2023 S2 솔로랭크{" "}
            <span className="text-sm text-gray-500">
              MOST 7, 출전 포지션 기준
            </span>
          </h2>
          <div className="w-full overflow-x-auto thin-scrollbar">
            <PlayerChampionStats championStats={player.ranked_stats} />
          </div>
        </div>
      </div>
      {matches.map((match) => (
        <DisclosureWrapper
          key={match.game.gameId}
          buttonClassName={classNames(
            "rounded-lg",
            match.player?.stats?.WIN
              ? "bg-sky-50 dark:bg-sky-900/20"
              : "bg-red-50 dark:bg-red-900/20",
          )}
          button={<Match match={match} />}
        >
          <MatchHistory match={match} />
        </DisclosureWrapper>
      ))}
    </div>
  );
}
