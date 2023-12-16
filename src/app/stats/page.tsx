import ChampionsStat, { ChampionsStatT } from "@/components/lol/champions-stat";
import Callout from "@/components/match/callout";
import { getMatches } from "@/utils/supabase";

export default async function StatsPage() {
  const matches = await getMatches();
  const championsStat: Record<number, ChampionsStatT> = {};
  for (const m of matches) {
    for (const b of m.game.bannedChampions) {
      championsStat[b.championId] ||= {
        championId: b.championId,
      };
      championsStat[b.championId].banned ||= 0;
      championsStat[b.championId].banned!++;
    }
    for (const p of m.game.participants) {
      championsStat[p.championId] ||= {
        championId: p.championId,
      };
      championsStat[p.championId].picked ||= 0;
      championsStat[p.championId].picked!++;
      if (p.stats?.WIN) {
        championsStat[p.championId].win ||= 0;
        championsStat[p.championId].win!++;
      }
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Callout />
      <h1 className="sr-only">통계</h1>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
        챔피언 통계
      </h2>
      <div className="mx-auto max-w-full overflow-x-auto">
        <ChampionsStat
          championsStat={Object.values(championsStat)}
          numMatches={matches.length}
        />
      </div>
    </div>
  );
}
