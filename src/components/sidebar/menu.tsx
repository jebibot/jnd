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
import { POSITION, getPoint, getRank, getShortRank } from "@/utils/lol";
import { Player } from "@/utils/supabase";
import { classNames } from "@/utils/util";
import Links from "../links";
import Nick from "../nick";
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
              prefetch={false}
            >
              <FontAwesomeIcon icon={faHouse} size="lg" fixedWidth />홈
            </Link>
            <button
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
          {POSITION.map((p, i) => (
            <li key={p}>
              <div className="text-sm font-semibold text-gray-400">{p}</div>
              <ul role="list" className="space-y-0.5 mt-1">
                {playersList[i].map((p) => (
                  <li key={p.name}>
                    {detailed ? (
                      <div className="flex items-center gap-x-2 p-1 font-semibold text-gray-800 dark:text-gray-300">
                        <Link
                          href={`/p/${p.id}`}
                          className="flex items-center gap-x-2"
                          prefetch={false}
                        >
                          <SidebarItem player={p} />
                        </Link>
                        {p.lol_nick && (
                          <Nick
                            nick={p.lol_nick}
                            className="text-sm text-gray-600 dark:text-gray-400"
                          />
                        )}
                        <span
                          className="text-sm text-gray-600 dark:text-gray-400"
                          title={`${getRank(p.lol_rank)} ${getPoint(
                            p.lol_rank,
                          )}`}
                        >
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
                        prefetch={false}
                      >
                        <SidebarItem player={p} />
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
