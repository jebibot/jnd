import { PlayerWithMatches } from "@/utils/supabase";
import { classNames } from "@/utils/util";
import Match from "./match";
import MatchHistory from "./match-history";
import PlayerChampionsStat, {
  PlayerChampionsStatT,
} from "./player-champions-stat";
import DisclosureWrapper from "../disclosure";

export default function Stats({ player }: { player: PlayerWithMatches }) {
  const matches = player.matches;
  const championsStat: Record<number, Record<string, number>> = {};
  for (const match of matches) {
    for (const p of match.game.participants) {
      p.player = match.participants.find(
        (s) =>
          p.summonerId === s.players.lol ||
          p.summonerId === s.players.lol_secondary,
      )?.players;
      if (p.player?.name === player.name) {
        match.player = p;
        championsStat[p.championId] ||= {
          championId: p.championId,
        };
        const championStat = championsStat[p.championId];
        championStat.games ||= 0;
        championStat.games++;
        championStat.gameLength ||= 0;
        championStat.gameLength += match.game.gameLength;
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
          championStat[stat] += p.stats?.[stat] || 0;
        });
      }
    }
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto max-w-full overflow-x-auto">
        <PlayerChampionsStat
          championsStat={Object.values(championsStat) as PlayerChampionsStatT[]}
        />
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
