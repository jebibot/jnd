import { Suspense } from "react";
import LiveMatches from "@/components/match/live-matches";
import StreamList from "@/components/stream-list";
import StreamProvider from "@/components/stream-provider";
import { getPlayers } from "@/utils/supabase";

export default async function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="sr-only">홈</h1>
      <StreamProvider>
        <div>
          <h2 className="pb-3 text-lg font-semibold text-gray-900 dark:text-gray-200">
            방송
          </h2>
          <StreamList
            streams={(await getPlayers()).filter((p) => p.stream_start != null)}
          />
        </div>
        <div>
          <h2 className="pb-3 text-gray-900 dark:text-gray-200">
            <span className="text-lg font-semibold">진행 중인 게임</span>{" "}
            <span className="text-sm">
              사용자 설정 게임은 관전이 전체 허용된 게임만 표시됩니다.
            </span>
          </h2>
          <Suspense fallback={<div>로딩 중...</div>}>
            <LiveMatches />
          </Suspense>
        </div>
      </StreamProvider>
    </div>
  );
}
