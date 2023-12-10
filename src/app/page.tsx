import StreamList from "@/components/stream-list";
import { getPlayers } from "@/utils/supabase";

export default async function Home() {
  const players = await getPlayers();
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="pb-3 text-lg font-semibold text-gray-900 dark:text-gray-200">
          진행 중인 게임
        </div>
        <div className="w-full p-12 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 text-center font-semibold text-gray-600 dark:text-gray-400">
          진행 중인 게임이 없습니다.
        </div>
      </div>
      <div>
        <div className="pb-3 text-lg font-semibold text-gray-900 dark:text-gray-200">
          방송
        </div>
        <StreamList streams={players.filter((p) => p.stream_start != null)} />
      </div>
    </div>
  );
}
