import { HTMLAttributes } from "react";
import { Player } from "@/utils/supabase";
import { getThumbnailUrl } from "@/utils/twitch";
import { classNames } from "@/utils/util";
import Timer from "../timer";

export default function Thumbnail({
  stream,
  className,
  sizes,
  ...props
}: HTMLAttributes<HTMLDivElement> & { stream: Player; sizes?: string }) {
  return (
    <div
      className={classNames(
        "relative w-full aspect-video overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-full"
        srcSet={[80, 276, 414, 552, 828, 1242, 1656]
          .map((w) => `${getThumbnailUrl(stream.twitch, w)} ${w}w`)
          .join(", ")}
        sizes={sizes}
        src={getThumbnailUrl(stream.twitch, 440)}
        alt={`${stream.name}의 방송 썸네일`}
      />
      {stream.stream_start && (
        <div className="absolute top-0 right-0 m-2 p-1 text-white text-sm leading-none bg-gray-900/80">
          <Timer start={new Date(stream.stream_start).getTime()} />
        </div>
      )}
    </div>
  );
}
