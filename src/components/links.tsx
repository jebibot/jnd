import { faTwitch, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMessages } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Player } from "@/utils/supabase";
import { getChannelUrl } from "@/utils/twitch";
import { classNames } from "@/utils/util";

export default function Links({
  player,
  className,
}: {
  player: Player;
  className?: string;
}) {
  return (
    <div className={classNames("flex gap-1", className)}>
      {player.twitch && (
        <a
          href={getChannelUrl(player.twitch)}
          target="_blank"
          title="트위치 채널"
        >
          <FontAwesomeIcon icon={faTwitch} />
          <span className="sr-only">트위치 채널</span>
        </a>
      )}
      {player.youtube && (
        <a
          href={`https://www.youtube.com/channel/${player.youtube}`}
          target="_blank"
          title="유튜브 채널"
        >
          <FontAwesomeIcon icon={faYoutube} />
          <span className="sr-only">유튜브 채널</span>
        </a>
      )}
      {player.youtube_secondary && (
        <a
          href={
            player.youtube_secondary.startsWith("http")
              ? player.youtube_secondary
              : `https://www.youtube.com/channel/${player.youtube_secondary}`
          }
          target="_blank"
          title="다시보기 채널"
        >
          <FontAwesomeIcon icon={faYoutube} />
          <span className="sr-only">다시보기 채널</span>
        </a>
      )}
      {player.community && (
        <a href={player.community} target="_blank" title="커뮤니티">
          <FontAwesomeIcon icon={faMessages} />
          <span className="sr-only">커뮤니티</span>
        </a>
      )}
    </div>
  );
}
