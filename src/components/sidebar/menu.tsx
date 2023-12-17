"use client";

import {
  faChartSimple,
  faHouse,
  faMaximize,
  faMinimize,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useMemo } from "react";
import { POSITION, getPoint, getRank, getShortRank } from "@/utils/lol/rank";
import { Player } from "@/utils/supabase";
import SidebarItem from "./item";
import PlayerItem from "./player-item";
import { SidebarContext } from "./provider";
import Links from "../links";
import Nick from "../lol/nick";

export default function SidebarMenu({
  players,
  className,
}: {
  players: Player[];
  className?: string;
}) {
  const { detailed, setDetailed } = useContext(SidebarContext);

  const playersList = useMemo(() => {
    const list: Player[][] = [[], [], [], [], [], []];
    players.forEach((p) => {
      list[p.pos - 1].push(p);
    });
    return list;
  }, [players]);
  return (
    <nav className="grow px-3 py-4 bg-white dark:bg-gray-900 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-thumb-rounded-full">
      <ul role="list" className="space-y-4">
        <li>
          <ul role="list" className="space-y-2">
            <li className="flex items-center gap-2">
              <SidebarItem className="flex-1" href="/">
                <FontAwesomeIcon icon={faHouse} size="lg" fixedWidth />홈
              </SidebarItem>
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
            <li>
              <SidebarItem href="/stats">
                <FontAwesomeIcon icon={faChartSimple} size="lg" fixedWidth />
                통계
              </SidebarItem>
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
                      <PlayerItem player={p} />
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
                    <SidebarItem href={`/p/${p.id}`}>
                      <PlayerItem player={p} />
                    </SidebarItem>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
