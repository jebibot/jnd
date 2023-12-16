"use client";

import { useEffect, useState } from "react";
import { formatTimestamp } from "@/utils/util";

export default function Timer({ start }: { start: number }) {
  const [seconds, setSeconds] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setSeconds(Math.floor((Date.now() - start) / 1000));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [start]);

  return seconds != null ? (
    <span role="timer" suppressHydrationWarning>
      {formatTimestamp(seconds)}
    </span>
  ) : (
    <div className="inline-block w-8 h-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
  );
}
