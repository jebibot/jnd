"use client";

import {
  faHouse,
  faMaximize,
  faMinimize,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useMemo } from "react";
import { POSITION, getShortRank } from "@/utils/lol";
import { Player } from "@/utils/supabase";
import { classNames } from "@/utils/util";
import Links from "../links";
import Nick from "../nick";
import { SidebarContext } from "./provider";
import SimpleBarWrapper from "../simple-bar";

const TIER_BORDER: Record<string, string> = {
  SILVER: "border-gray-300 dark:border-gray-800",
  GOLD: "border-yellow-300 dark:border-yellow-800",
  PLATINUM: "border-blue-300 dark:border-blue-800",
  EMERALD: "border-emerald-300 dark:border-emerald-800",
  DIAMOND: "border-purple-300 dark:border-purple-800",
};

export function getTierBorder(rank: string | null) {
  if (!rank) {
    return "border-transparent";
  }
  const parts = rank.split(",");
  return TIER_BORDER[parts[0]];
}

export default function SidebarMenu({
  players,
  className,
}: {
  players: Player[];
  className?: string;
}) {
  const pathname = usePathname();
  const { detailed, setDetailed } = useContext(SidebarContext);

  const playersList = useMemo(() => {
    const list: Player[][] = [[], [], [], [], []];
    players.forEach((p) => {
      list[p.pos - 1].push(p);
    });
    return list;
  }, [players]);

  return (
    <SimpleBarWrapper className={classNames("grow max-h-full", className)}>
      <nav className="px-3 py-4 overflow-x-hidden bg-white dark:bg-gray-900">
        <ul role="list" className="flex flex-col gap-y-4">
          <li className="flex items-center gap-2">
            <Link
              href="/"
              className={classNames(
                pathname === "/"
                  ? "text-purple-600 dark:text-white bg-gray-50 dark:bg-gray-800"
                  : "text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800",
                "flex flex-1 items-center gap-x-3 p-1 rounded-md font-semibold",
              )}
            >
              <FontAwesomeIcon icon={faHouse} size="lg" fixedWidth />홈
            </Link>
            <button
              className="p-1 rounded-md text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white"
              title="자세히 보기"
              onClick={() => {
                setDetailed((detailed) => !detailed);
              }}
            >
              <FontAwesomeIcon
                icon={detailed ? faMinimize : faMaximize}
                size="lg"
              />
            </button>
          </li>
          {POSITION.map((p, i) => (
            <li key={p}>
              <div className="text-sm font-semibold text-gray-400">{p}</div>
              <ul role="list" className="space-y-0.5 mt-1">
                {playersList[i].map((p) => (
                  <li key={p.name}>
                    {detailed ? (
                      <div className="flex items-center gap-x-2 p-1 font-semibold text-gray-800 dark:text-gray-300">
                        {p.profile && (
                          <img
                            className={classNames(
                              "h-8 w-8 rounded-full mr-1 border-2",
                              getTierBorder(p.lol_rank),
                            )}
                            src={p.profile.replace("300x300", "50x50")}
                            alt={p.name}
                          />
                        )}
                        {p.stream_start && (
                          <span className="text-red-500 dark:text-red-600 text-xs">
                            ●
                          </span>
                        )}
                        <span className="break-keep">{p.name}</span>
                        {p.lol_nick && (
                          <Nick
                            nick={p.lol_nick}
                            className="text-sm text-gray-600 dark:text-gray-400"
                          />
                        )}
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {getShortRank(p.lol_rank)}
                        </span>
                        <Links
                          player={p}
                          className="text-sm text-gray-400 dark:text-gray-600"
                        />
                      </div>
                    ) : (
                      <Link
                        href={`/p/${p.id}`}
                        className={classNames(
                          pathname === `/p/${p.id}`
                            ? "text-purple-600 dark:text-white bg-gray-50 dark:bg-gray-800"
                            : "text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800",
                          "flex items-center gap-x-2 p-1 rounded-md font-semibold",
                        )}
                      >
                        {p.profile && (
                          <img
                            className={classNames(
                              "h-8 w-8 rounded-full mr-1 border-2",
                              getTierBorder(p.lol_rank),
                            )}
                            src={p.profile.replace("300x300", "50x50")}
                            alt={p.name}
                          />
                        )}
                        <span className="break-keep">{p.name}</span>
                        {p.stream_start && (
                          <span className="text-red-500 dark:text-red-600 text-xs">
                            ●
                          </span>
                        )}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </SimpleBarWrapper>
  );
}
