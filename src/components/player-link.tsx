"use client";

import { ButtonHTMLAttributes, PropsWithChildren, useContext } from "react";
import { StreamContext } from "./stream-provider";
import { classNames } from "@/utils/util";

export default function PlayerLink({
  children,
  twitch,
  className,
  ...props
}: PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & { twitch: string }
>) {
  const { selected, setSelected } = useContext(StreamContext);
  const isSelected = selected.has(twitch);

  return (
    <button
      className={classNames(
        className,
        isSelected && "text-purple-700 dark:text-purple-400",
      )}
      onClick={() => {
        const newSet = new Set(selected);
        if (isSelected) {
          newSet.delete(twitch);
        } else {
          newSet.add(twitch);
        }
        setSelected(newSet);
      }}
      aria-label="방송 선택"
      {...props}
    >
      {children}
    </button>
  );
}
