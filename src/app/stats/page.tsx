import ChampionStats from "@/components/lol/champions-stat";
import Callout from "@/components/match/callout";
import { getChampionStats } from "@/utils/supabase";

export default async function StatsPage() {
  const championStats = await getChampionStats();
  return (
    <div className="flex flex-col gap-4">
      <Callout />
      <h1 className="sr-only">통계</h1>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
        챔피언 통계
      </h2>
      <div className="mx-auto max-w-full overflow-x-auto">
        <ChampionStats championStats={championStats} />
      </div>
    </div>
  );
}
