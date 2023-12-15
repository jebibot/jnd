"use client";

import { Switch } from "@headlessui/react";
import { useContext, useMemo, useState } from "react";
import TierIcon from "@/components/tier-icon";
import { Player } from "@/utils/supabase";
import { getChannelUrl } from "@/utils/twitch";
import { classNames } from "@/utils/util";
import { StreamContext } from "./stream-provider";
import Thumbnail from "./thumbnail";

export default function StreamList({ streams }: { streams: Player[] }) {
  const { selected, setSelected } = useContext(StreamContext);
  const [showOnlyLol, setShowOnlyLol] = useState(false);

  const streamsList = useMemo(
    () =>
      showOnlyLol
        ? streams.filter((s) => s.game === "League of Legends")
        : streams,
    [streams, showOnlyLol],
  );
  return (
    <div>
      <div className="flex gap-2 items-center mb-2">
        <div className="flex flex-1 flex-wrap gap-2">
          {["multitwitch.tv", "multistre.am"].map((site) => {
            const enabled =
              selected.size > 0 &&
              (selected.size < 9 || site === "multitwitch.tv");
            return (
              <a
                key={site}
                href={`https://${site}/${[...selected].join("/")}`}
                className={classNames(
                  "px-3 py-2 text-sm rounded-md shadow-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600",
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
        <Switch.Group as="div">
          <Switch
            checked={showOnlyLol}
            onChange={setShowOnlyLol}
            className={classNames(
              showOnlyLol ? "bg-purple-600" : "bg-gray-200 dark:bg-gray-700",
              "inline-block h-6 w-11 cursor-pointer rounded-full border-2 border-transparent align-middle transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black",
            )}
          >
            <div
              aria-hidden="true"
              className={classNames(
                showOnlyLol ? "translate-x-5" : "translate-x-0",
                "pointer-events-none h-5 w-5 transform rounded-full bg-white dark:bg-gray-500 shadow ring-0 transition duration-200 ease-in-out",
              )}
            />
          </Switch>
          <Switch.Label
            as="span"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-200"
          >
            롤 방송만 보기
          </Switch.Label>
        </Switch.Group>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
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
                sizes="(max-width: 768px) 46vw, (max-width: 1024px) 30vw, (max-width: 1280px) 26vw, 22vw"
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
                <div className="flex flex-col">
                  <div className="font-semibold line-clamp-2 md:line-clamp-3 hover:text-purple-600 dark:hover:text-purple-300">
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
