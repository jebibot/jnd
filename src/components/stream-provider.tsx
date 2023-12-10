"use client";

import { PropsWithChildren, createContext, useState } from "react";

export const StreamContext = createContext({
  selected: [] as string[],
  setSelected: (selected: string[] | ((selected: string[]) => string[])) => {},
});

export default function StreamProvider({ children }: PropsWithChildren) {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <StreamContext.Provider value={{ selected, setSelected }}>
      {children}
    </StreamContext.Provider>
  );
}
