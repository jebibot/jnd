"use client";

import { useContext, useMemo, useState } from "react";
import TierIcon from "@/components/lol/tier-icon";
import { POSITION } from "@/utils/lol/rank";
import { Player } from "@/utils/supabase";
import { getChannelUrl } from "@/utils/twitch";
import { classNames } from "@/utils/util";
import { StreamContext } from "./provider";
import Thumbnail from "./thumbnail";

export default function StreamList({ streams }: { streams: Player[] }) {
  const { selected, setSelected } = useContext(StreamContext);
  const [showOnlyLol, setShowOnlyLol] = useState(false);
  const [filter, setFilter] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const streamsList = useMemo(() => {
    let list = streams;
    if (showOnlyLol) {
      list = list.filter((s) => s.game === "League of Legends");
    }
    if (!filter.every((f) => !f)) {
      list = list.filter((s) => filter[s.pos - 1]);
    }
    return list;
  }, [streams, showOnlyLol, filter]);
  return (
    <div>
      <div className="flex flex-wrap gap-1 items-center mb-2">
        {POSITION.map((pos, i) => (
          <button
            key={pos}
            type="button"
            className={`inline-block px-3 py-1 rounded-full border border-orange-400 dark:border-orange-800 text-xs sm:text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 dark:focus-visible:outline-orange-800 ${
              filter[i]
                ? "text-white bg-orange-600 dark:bg-orange-800"
                : "dark:bg-gray-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white"
            }`}
            onClick={() => {
              const newFilter = [...filter];
              newFilter[i] = !newFilter[i];
              setFilter(newFilter);
            }}
          >
            {pos}
          </button>
        ))}
        <button
          type="button"
          className={`inline-block px-3 py-1 rounded-full border border-purple-400 dark:border-purple-800 text-xs sm:text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 dark:focus-visible:outline-purple-800 ${
            showOnlyLol
              ? "text-white bg-purple-600 dark:bg-purple-800"
              : "dark:bg-gray-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white"
          }`}
          onClick={() => {
            setShowOnlyLol(!showOnlyLol);
          }}
        >
          LoL
        </button>
        <div className="flex-1"></div>
        {["multitwitch.tv", "multistre.am"].map((site) => {
          const enabled =
            selected.size > 0 &&
            (selected.size < 9 || site === "multitwitch.tv");
          return (
            <a
              key={site}
              href={`https://${site}/${[...selected].join("/")}`}
              className={classNames(
                "ml-auto px-3 py-2 text-sm rounded-md shadow-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600",
                enabled
                  ? "bg-purple-600 dark:bg-purple-700 hover:bg-purple-500 dark:hover:bg-purple-600"
                  : "dark:text-gray-500 bg-purple-200 dark:bg-purple-950 pointer-events-none",
              )}
              target="_blank"
              aria-disabled={!enabled}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !enabled) {
                  e.preventDefault();
                }
              }}
            >
              {site}에서 같이 보기
            </a>
          );
        })}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {streamsList.map((s) => {
          const isSelected = selected.has(s.twitch);
          const toggleSelected = () => {
            const newSet = new Set(selected);
            if (isSelected) {
              newSet.delete(s.twitch);
            } else {
              newSet.add(s.twitch);
            }
            setSelected(newSet);
          };
          return (
            <div
              key={s.twitch}
              className={classNames(
                "flex flex-col items-center rounded-md overflow-hidden shadow-md border-2 dark:bg-slate-900",
                isSelected
                  ? "border-purple-400 dark:border-purple-700"
                  : "border-transparent",
              )}
            >
              <Thumbnail
                className="cursor-pointer"
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 31vw, (max-width: 1280px) 19vw, 16vw"
                stream={s}
                role="checkbox"
                tabIndex={0}
                aria-checked={isSelected}
                onClick={toggleSelected}
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    toggleSelected();
                  }
                }}
              />
              <a
                className="flex w-full items-center p-2"
                href={getChannelUrl(s.twitch)}
                target="_blank"
              >
                {s.profile && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="w-12 h-12 rounded-full mr-2"
                    src={s.profile.replace("300x300", "50x50")}
                    alt=""
                  />
                )}
                <div className="flex flex-col text-sm">
                  <div className="font-semibold line-clamp-2 hover:text-purple-600 dark:hover:text-purple-300">
                    {s.title}
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <TierIcon
                      className="inline align-middle"
                      rank={s.lol_rank}
                      pos={s.pos}
                      size={16}
                    />{" "}
                    {s.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {s.game}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
