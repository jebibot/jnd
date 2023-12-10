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

  return (
    <button
      className={classNames(
        className,
        selected.includes(twitch) && "text-purple-700 dark:text-purple-400",
      )}
      onClick={() => {
        if (selected.includes(twitch)) {
          setSelected((selected) => selected.filter((t) => t != twitch));
        } else {
          setSelected((selected) => [...selected, twitch]);
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
