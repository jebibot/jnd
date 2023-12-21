"use client";

import { useContext, useMemo, useState } from "react";
import { Player } from "@/utils/supabase";
import { classNames } from "@/utils/util";
import { StreamContext } from "./provider";
import Stream from "./stream";

export default function StreamList({ streams }: { streams: Player[] }) {
  const { selected, setSelected } = useContext(StreamContext);
  const [showOnlyLol, setShowOnlyLol] = useState(false);
  const [filter, setFilter] = useState(new Set<string | undefined>());

  const teamList = useMemo(
    () => [...new Set(streams.map((s) => s.teams?.name))],
    [streams],
  );

  const streamsList = useMemo(() => {
    let list = streams;
    if (showOnlyLol) {
      list = list.filter((s) =>
        s.chzzk_start != null
          ? s.game === "League of Legends"
          : s.chzzk_game === "리그 오브 레전드",
      );
    }
    if (filter.size > 0) {
      list = list.filter((s) => filter.has(s.teams?.name));
    }
    return list;
  }, [streams, showOnlyLol, filter]);
  return (
    <div>
      <div className="flex flex-wrap gap-1 items-center mb-2">
        {teamList.map((team) => (
          <button
            key={team}
            type="button"
            className={classNames(
              "inline-block px-3 py-1 rounded-full border border-orange-400 dark:border-orange-800 text-xs sm:text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 dark:focus-visible:outline-orange-800",
              filter.has(team)
                ? "text-white bg-orange-600 dark:bg-orange-800"
                : "dark:bg-gray-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white",
            )}
            onClick={() => {
              const newFilter = new Set(filter);
              if (filter.has(team)) {
                newFilter.delete(team);
              } else {
                newFilter.add(team);
              }
              setFilter(newFilter);
            }}
          >
            {team || "무소속"}
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
        {["multichzzk.tv", "multitwitch.tv", "multistre.am"].map((site) => {
          const streams = [...selected];
          const hasChzzk = streams.some((s) => s.match(/^[0-9a-f]{32}$/));
          const enabled =
            selected.size > 0 &&
            (hasChzzk
              ? site === "multichzzk.tv"
              : selected.size < 9 || site !== "multistre.am");
          return (
            <a
              key={site}
              href={`https://${site}/${streams.join("/")}`}
              className={classNames(
                "ml-auto px-3 py-2 text-sm rounded-md shadow-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                site === "multichzzk.tv"
                  ? "focus-visible:outline-emerald-400"
                  : "focus-visible:outline-purple-600",
                enabled
                  ? site === "multichzzk.tv"
                    ? "bg-emerald-400 dark:bg-emerald-500 hover:bg-emerald-300 dark:hover:bg-emerald-400"
                    : "bg-purple-600 dark:bg-purple-700 hover:bg-purple-500 dark:hover:bg-purple-600"
                  : site === "multichzzk.tv"
                    ? "bg-emerald-100 dark:bg-emerald-900"
                    : "bg-purple-200 dark:bg-purple-950",
                !enabled && "dark:text-gray-500 pointer-events-none",
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
        {streamsList.map((s) => (
          <Stream
            key={s.twitch}
            className={
              s.chzzk != null && selected.has(s.chzzk)
                ? "border-emerald-400 dark:border-emerald-700"
                : selected.has(s.twitch)
                  ? "border-purple-400 dark:border-purple-700"
                  : undefined
            }
            toggleSelected={() => {
              const newSet = new Set(selected);
              if (s.chzzk != null && selected.has(s.chzzk)) {
                newSet.delete(s.chzzk);
                if (s.stream_start != null) {
                  newSet.add(s.twitch);
                }
              } else if (selected.has(s.twitch)) {
                newSet.delete(s.twitch);
              } else if (s.chzzk != null && s.chzzk_start != null) {
                newSet.add(s.chzzk);
              } else {
                newSet.add(s.twitch);
              }
              setSelected(newSet);
            }}
            stream={s}
          />
        ))}
      </div>
    </div>
  );
}
