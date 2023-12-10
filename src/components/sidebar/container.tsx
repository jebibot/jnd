"use client";

import { PropsWithChildren, useContext } from "react";
import { classNames } from "@/utils/util";
import { SidebarContext } from "./provider";

export default function SidebarContainer({ children }: PropsWithChildren) {
  const { detailed } = useContext(SidebarContext);
  return (
    <div
      className={classNames(
        "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col",
        detailed ? "lg:w-[28rem]" : "lg:w-48",
      )}
    >
      {children}
    </div>
  );
}
