import Image from "next/image";
import { ITEMS } from "@/utils/lol";
import { classNames } from "@/utils/util";

export default function Item({
  item,
  className,
}: {
  item: number;
  className?: string;
}) {
  if (item === 0) {
    return (
      <div
        className={classNames(
          "w-5 h-5 bg-gray-300 dark:bg-gray-600",
          className,
        )}
      ></div>
    );
  }
  return (
    <Image
      src={ITEMS[item].icon}
      className={className}
      width={20}
      height={20}
      alt={ITEMS[item].name}
      title={ITEMS[item].name}
      loading="lazy"
    />
  );
}
