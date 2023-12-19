"use client";

import { PropsWithChildren, useContext } from "react";
import { StreamContext } from "./provider";

export default function StreamPlayer({
  children,
  twitch,
}: PropsWithChildren<{ twitch: string }>) {
  const { selected, setSelected } = useContext(StreamContext);
  const isSelected = selected.has(twitch);

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
            newSet.add(twitch);
          } else {
            newSet.delete(twitch);
          }
          setSelected(newSet);
        }}
      />
      {children}
    </label>
  );
}
