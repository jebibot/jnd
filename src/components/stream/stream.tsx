import { Player } from "@/utils/supabase";
import { getChannelUrl } from "@/utils/twitch";
import { classNames } from "@/utils/util";
import Thumbnail from "./thumbnail";
import TierIcon from "../lol/tier-icon";

export default function Stream({
  isSelected,
  toggleSelected,
  stream,
}: {
  isSelected: boolean;
  toggleSelected: () => void;
  stream: Player;
}) {
  return (
    <div
      className={classNames(
        "flex flex-col items-center rounded-md overflow-hidden shadow-md border-2 dark:bg-slate-900",
        isSelected
          ? "border-purple-400 dark:border-purple-700"
          : "border-transparent",
      )}
    >
      <Thumbnail
        className="cursor-pointer"
        sizes="(max-width: 640px) 46vw, (max-width: 1024px) 31vw, (max-width: 1280px) 19vw, 16vw"
        stream={stream}
        role="checkbox"
        tabIndex={0}
        aria-checked={isSelected}
        onClick={toggleSelected}
        onKeyDown={(e) => {
          if (e.key === " ") {
            toggleSelected();
          }
        }}
      />
      <a
        className="flex w-full items-center p-2"
        href={getChannelUrl(stream.twitch)}
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
            {stream.title}
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
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {stream.game}
          </div>
        </div>
      </a>
    </div>
  );
}
