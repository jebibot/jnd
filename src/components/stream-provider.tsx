"use client";

import { PropsWithChildren, createContext, useState } from "react";

export const StreamContext = createContext({
  selected: new Set<string>(),
  setSelected: (
    selected: Set<string> | ((selected: Set<string>) => Set<string>),
  ) => {},
});

export default function StreamProvider({ children }: PropsWithChildren) {
  const [selected, setSelected] = useState(new Set<string>());
  return (
    <StreamContext.Provider value={{ selected, setSelected }}>
      {children}
    </StreamContext.Provider>
  );
}
