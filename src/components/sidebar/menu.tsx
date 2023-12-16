"use client";

import {
  faChartSimple,
  faHouse,
  faMaximize,
  faMinimize,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useMemo } from "react";
import { POSITION, getPoint, getRank, getShortRank } from "@/utils/lol/rank";
import { Player } from "@/utils/supabase";
import { classNames } from "@/utils/util";
import Links from "../links";
import Nick from "../lol/nick";
import { SidebarContext } from "./provider";
import SimpleBarWrapper from "../simple-bar";
import SidebarItem from "./item";

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
    const list: Player[][] = [[], [], [], [], [], []];
    players.forEach((p) => {
      list[p.pos - 1].push(p);
    });
    return list;
  }, [players]);

  return (
    <SimpleBarWrapper className={classNames("grow max-h-full", className)}>
      <nav className="px-3 py-4 overflow-x-hidden bg-white dark:bg-gray-900">
        <ul role="list" className="space-y-4">
          <li>
            <ul role="list" className="space-y-2">
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
                  type="button"
                  className="p-1 rounded-md text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white"
                  title={detailed ? "간략히" : "자세히"}
                  aria-label={detailed ? "간략히" : "자세히"}
                  onClick={() => {
                    setDetailed(!detailed);
                  }}
                >
                  <FontAwesomeIcon
                    icon={detailed ? faMinimize : faMaximize}
                    size="lg"
                  />
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Link
                  href="/stats"
                  className={classNames(
                    pathname === "/stats"
                      ? "text-purple-600 dark:text-white bg-gray-50 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800",
                    "flex flex-1 items-center gap-x-3 p-1 rounded-md font-semibold",
                  )}
                >
                  <FontAwesomeIcon icon={faChartSimple} size="lg" fixedWidth />
                  통계
                </Link>
              </li>
            </ul>
          </li>
          {POSITION.map((p, i) => (
            <li key={p}>
              <div className="text-sm font-semibold text-gray-400">{p}</div>
              <ul role="list" className="space-y-0.5 mt-1">
                {playersList[i].map((p) => (
                  <li key={p.name} className="font-semibold">
                    {detailed ? (
                      <div className="flex items-center gap-x-2 p-1 text-gray-800 dark:text-gray-300">
                        <SidebarItem player={p} />
                        {p.lol_nick && (
                          <>
                            <Nick
                              className="text-sm text-gray-600 dark:text-gray-400"
                              nick={p.lol_nick}
                            />
                            <span
                              className="text-sm text-gray-600 dark:text-gray-400"
                              title={`${getRank(p.lol_rank)} ${getPoint(
                                p.lol_rank,
                              )}`}
                            >
                              {getShortRank(p.lol_rank)}
                            </span>
                          </>
                        )}
                        <Links
                          className="text-sm text-gray-400 dark:text-gray-600"
                          player={p}
                        />
                      </div>
                    ) : (
                      <SidebarItem
                        player={p}
                        activeClassName="p-1 rounded-md text-purple-600 dark:text-white bg-gray-50 dark:bg-gray-800"
                        inactiveClassName="p-1 rounded-md text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                      />
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
