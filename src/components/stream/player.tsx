"use client";

import { PropsWithChildren, useContext } from "react";
import { PlayerParticipant } from "@/utils/supabase";
import { StreamContext } from "./provider";

export default function StreamPlayer({
  children,
  player,
}: PropsWithChildren<{ player: PlayerParticipant }>) {
  const { selected, setSelected } = useContext(StreamContext);
  const isSelected =
    (player.chzzk != null && selected.has(player.chzzk)) ||
    selected.has(player.twitch);

  return (
    <label>
      <input
        type="checkbox"
        className="inline-block align-baseline h-3 w-3 mr-1 rounded border-gray-300 bg-transparent text-purple-600 focus:ring-1 focus:ring-purple-600 focus:ring-offset-white dark:focus:ring-offset-black"
        checked={isSelected}
        onChange={(e) => {
          const checked = e.target.checked;
          const newSet = new Set(selected);
          if (checked) {
            newSet.add(
              player.chzzk != null && player.chzzk_start != null
                ? player.chzzk
                : player.twitch,
            );
          } else {
            if (player.chzzk != null) {
              newSet.delete(player.chzzk);
            }
            newSet.delete(player.twitch);
          }
          setSelected(newSet);
        }}
      />
      {children}
    </label>
  );
}
