"use client";

import { PropsWithChildren, createContext, useState } from "react";

export const SidebarContext = createContext({
  sidebarOpen: false,
  setSidebarOpen: (open: boolean | ((open: boolean) => boolean)) => {},
  detailed: false,
  setDetailed: (detailed: boolean | ((detailed: boolean) => boolean)) => {},
});

export default function SidebarProvider({ children }: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [detailed, setDetailed] = useState(false);
  return (
    <SidebarContext.Provider
      value={{ sidebarOpen, setSidebarOpen, detailed, setDetailed }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
