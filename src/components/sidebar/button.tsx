"use client";

import { ButtonHTMLAttributes, PropsWithChildren, useContext } from "react";
import { SidebarContext } from "./provider";

export default function SidebarButton({
  open,
  children,
  ...props
}: PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & { open: boolean }
>) {
  const { setSidebarOpen } = useContext(SidebarContext);
  return (
    <button type="button" onClick={() => setSidebarOpen(open)} {...props}>
      {children}
    </button>
  );
}
