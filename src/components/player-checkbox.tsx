"use client";

import { faArrowUpRightFromSquare } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsWithChildren, useContext } from "react";
import { StreamContext } from "./stream-provider";
import { getChannelUrl } from "@/utils/twitch";

export default function PlayerCheckbox({
  children,
  twitch,
}: PropsWithChildren<{ twitch: string }>) {
  const { selected, setSelected } = useContext(StreamContext);
  const isSelected = selected.has(twitch);

  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="h-3 w-3 rounded border-gray-300 text-purple-600 focus:ring-1 focus:ring-purple-600"
        checked={isSelected}
        onChange={(e) => {
          const checked = e.target.checked;
          const newSet = new Set(selected);
          if (checked) {
            newSet.add(twitch);
          } else {
            newSet.delete(twitch);
          }
          setSelected(newSet);
        }}
      />
      <div className="ml-1">{children}</div>
      <a
        className="ml-2 text-sm text-gray-500"
        href={getChannelUrl(twitch)}
        target="_blank"
        title="방송 보기"
      >
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" />
        <span className="sr-only">방송 보기</span>
      </a>
    </label>
  );
}