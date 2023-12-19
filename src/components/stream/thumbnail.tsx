import { HTMLAttributes } from "react";
import { getThumbnailUrl as getChzzkThumbnailUrl } from "@/utils/chzzk";
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
  let srcSet = "";
  let src = "";
  if (stream.chzzk_start != null) {
    srcSet = [1080, 720, 480, 360, 270, 144]
      .map((w) => `${getChzzkThumbnailUrl(stream.chzzk_thumb, 480)} ${w}w`)
      .join(", ");
    src = getChzzkThumbnailUrl(stream.chzzk_thumb, 480);
  } else {
    srcSet = [80, 276, 414, 552, 828, 1242, 1656]
      .map((w) => `${getThumbnailUrl(stream.twitch, w)} ${w}w`)
      .join(", ");
    src = getThumbnailUrl(stream.twitch, 440);
  }
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
        srcSet={srcSet}
        sizes={sizes}
        src={src}
        alt={`${stream.name}의 방송 썸네일`}
      />
      {(stream.chzzk_start != null || stream.stream_start != null) && (
        <div className="absolute top-0 right-0 m-2 p-1 text-white text-sm leading-none bg-gray-900/80">
          <Timer
            start={new Date(
              stream.chzzk_start || stream.stream_start!,
            ).getTime()}
          />
        </div>
      )}
    </div>
  );
}
