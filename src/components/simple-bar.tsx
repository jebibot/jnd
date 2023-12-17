"use client";

import { PropsWithChildren } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function SimpleBarWrapper({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return <SimpleBar className={className}>{children}</SimpleBar>;
}
