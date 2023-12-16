import "./globals.css";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { faBars } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import Link from "next/link";
import { PropsWithChildren } from "react";
import SidebarButton from "@/components/sidebar/button";
import SidebarContainer from "@/components/sidebar/container";
import SidebarMenu from "@/components/sidebar/menu";
import SidebarProvider from "@/components/sidebar/provider";
import Sidebar from "@/components/sidebar/sidebar";
import { getPlayers } from "@/utils/supabase";

export const preferredRegion = "icn1";

export const metadata: Metadata = {
  title: {
    default: "2023 자낳대 시즌 2 팬사이트",
    template: "%s | 2023 자낳대 시즌 2 팬사이트",
  },
  description: "2023 자낳대 시즌 2 방송, 유튜브, 스크림 전적 모아보기",
  keywords: [
    "트위치",
    "Twitch",
    "스트리머",
    "streamer",
    "멀티뷰",
    "관전",
    "인챈트",
    "YouTube",
    "게임",
    "match",
    "롤",
    "LoL",
    "리그 오브 레전드",
    "League of Legends",
  ],
  metadataBase: new URL("https://jnd.twitchgg.tv"),
  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const players = await getPlayers();
  return (
    <html lang="ko">
      <body className="bg-gray-50 dark:bg-slate-950 dark:text-gray-100">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:z-50"
        >
          내용으로 건너뛰기
        </a>
        <SidebarProvider>
          <Sidebar>
            <SidebarMenu players={players} />
          </Sidebar>
          <SidebarContainer>
            <SidebarMenu
              players={players}
              className="border-r border-gray-200 dark:border-gray-900"
            />
          </SidebarContainer>

          <div className="sticky top-0 z-30 flex items-center gap-x-6 px-4 py-4 sm:px-6 bg-white dark:bg-gray-900 shadow-sm lg:hidden">
            <SidebarButton
              className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-300 lg:hidden"
              open={true}
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </SidebarButton>
            <Link href="/" className="flex-1 text-sm font-semibold">
              2023 자낳대 시즌 2 팬사이트
            </Link>
          </div>
        </SidebarProvider>

        <div className="py-4 lg:pl-48">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <main className="py-4" id="content">
              {children}
            </main>
            <footer className="text-xs text-gray-400 dark:text-gray-500">
              <a href="https://github.com/jebibot/jnd" target="_blank">
                GitHub
              </a>{" "}
              • 본 사이트는 Twitch, YouTube, 자낳대, 인챈트 엔터테인먼트와
              관련이 없으며, 관련 상표는 각 소유자의 자산입니다. jnd.twitchgg.tv
              isn&apos;t endorsed by Riot Games and doesn&apos;t reflect the
              views or opinions of Riot Games or anyone officially involved in
              producing or managing Riot Games properties. Riot Games, and all
              associated properties are trademarks or registered trademarks of
              Riot Games, Inc.
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
