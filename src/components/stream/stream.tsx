import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getLiveUrl } from "@/utils/chzzk";
import { Player } from "@/utils/supabase";
import { getChannelUrl } from "@/utils/twitch";
import { classNames } from "@/utils/util";
import ChzzkIcon from "./chzzk";
import Thumbnail from "./thumbnail";
import TierIcon from "../lol/tier-icon";

export default function Stream({
  className,
  toggleSelected,
  stream,
}: {
  className?: string;
  toggleSelected: () => void;
  stream: Player;
}) {
  return (
    <div
      className={classNames(
        "flex flex-col items-center rounded-md overflow-hidden shadow-md border-2 dark:bg-slate-900",
        className || "border-transparent",
      )}
    >
      <Thumbnail
        className="cursor-pointer"
        sizes="(max-width: 640px) 46vw, (max-width: 1024px) 31vw, (max-width: 1280px) 19vw, 16vw"
        stream={stream}
        role="checkbox"
        tabIndex={0}
        aria-checked={className != null}
        onClick={toggleSelected}
        onKeyDown={(e) => {
          if (e.key === " ") {
            toggleSelected();
          }
        }}
      />
      <a
        className="flex w-full items-center p-2"
        href={
          stream.chzzk != null && stream.chzzk_start != null
            ? getLiveUrl(stream.chzzk)
            : getChannelUrl(stream.twitch)
        }
        target="_blank"
      >
        {stream.profile && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="w-12 h-12 rounded-full mr-2"
            src={stream.profile.replace("300x300", "50x50")}
            alt=""
          />
        )}
        <div className="flex flex-col text-sm">
          <div className="font-semibold line-clamp-2 hover:text-purple-600 dark:hover:text-purple-300">
            {stream.chzzk_title || stream.title}
          </div>
          <div className="text-gray-700 dark:text-gray-300">
            <TierIcon
              className="inline align-middle"
              rank={stream.lol_rank}
              pos={stream.pos}
              size={16}
            />{" "}
            {stream.name}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
            {stream.chzzk_start != null && (
              <ChzzkIcon className="mr-1" fill="#00FFA3" />
            )}
            {stream.stream_start != null && (
              <FontAwesomeIcon
                className="mr-1"
                color="#9146FF"
                icon={faTwitch}
                size="sm"
              />
            )}
            {stream.chzzk_game || stream.game}
          </div>
        </div>
      </a>
    </div>
  );
}
