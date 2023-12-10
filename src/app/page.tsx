import { Suspense } from "react";
import LiveMatches from "@/components/live-matches";
import StreamList from "@/components/stream-list";
import StreamProvider from "@/components/stream-provider";
import { getPlayers } from "@/utils/supabase";

export default async function Home() {
  return (
    <div className="flex flex-col gap-6">
      <StreamProvider>
        <div>
          <div className="pb-3 text-lg font-semibold text-gray-900 dark:text-gray-200">
            방송
          </div>
          <StreamList
            streams={(await getPlayers()).filter((p) => p.stream_start != null)}
          />
        </div>
        <div>
          <div className="pb-3 text-lg font-semibold text-gray-900 dark:text-gray-200">
            진행 중인 게임
          </div>
          <Suspense fallback={<div>로딩 중...</div>}>
            <LiveMatches />
          </Suspense>
        </div>
      </StreamProvider>
    </div>
  );
}
