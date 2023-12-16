import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { classNames } from "@/utils/util";

export default function SidebarItem({
  className,
  href,
  children,
}: PropsWithChildren<{ className?: string; href: string }>) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={classNames(
        pathname === href
          ? "text-purple-600 dark:text-white bg-gray-50 dark:bg-gray-800"
          : "text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800",
        "flex items-center gap-x-2 p-1 rounded-md font-semibold",
        className,
      )}
    >
      {children}
    </Link>
  );
}
