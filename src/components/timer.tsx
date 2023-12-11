"use client";

import { useEffect, useState } from "react";
import { formatTimestamp } from "@/utils/util";

export default function Timer({ start }: { start: number }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const update = () => setSeconds(Math.floor((Date.now() - start) / 1000));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [start]);

  return (
    <span role="timer" suppressHydrationWarning>
      {formatTimestamp(seconds * 1000)}
    </span>
  );
}
