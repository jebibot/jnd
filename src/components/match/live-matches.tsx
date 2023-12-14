import { QUEUES } from "@/utils/lol";
import { getLiveMatches } from "@/utils/supabase";
import MatchDetail from "./match-detail";
import Timer from "../timer";

export default async function LiveMatches() {
  const matches = await getLiveMatches();
  return matches.length > 0 ? (
    <div className="space-y-4">
      {matches.map((match) => (
        <div
          className="p-4 mx-auto w-full max-w-[50rem] shadow-md dark:bg-slate-900 rounded-md"
          key={match.id}
        >
          <div className="mb-1">
            {QUEUES[match.game.gameQueueConfigId]} |{" "}
            <Timer start={new Date(match.start).getTime()} />
          </div>
          <MatchDetail match={match} />
        </div>
      ))}
    </div>
  ) : (
    <div className="w-full p-12 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 text-center font-semibold text-gray-600 dark:text-gray-400">
      진행 중인 게임이 없습니다.
    </div>
  );
}
