import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Links from "@/components/links";
import Stats from "@/components/match/stats";
import Nick from "@/components/nick";
import Thumbnail from "@/components/thumbnail";
import { STATS_SITE } from "@/utils/lol";
import { getPoint, getRank } from "@/utils/lol-rank";
import { getTierIcon } from "@/utils/lol-tier-icon";
import { getPlayer, getPlayers } from "@/utils/supabase";
import { getChannelUrl } from "@/utils/twitch";

export async function generateStaticParams() {
  const players = await getPlayers();
  return players.map((p) => ({ id: `${p.id}` }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const p = await getPlayer(params.id);
  return {
    title: p.name,
    alternates: {
      canonical: `/p/${params.id}`,
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const p = await getPlayer(params.id);
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
        {p.profile && (
          <a href={getChannelUrl(p.twitch)} target="_blank">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-36 sm:w-48 h-36 sm:h-48 rounded-full"
              src={p.profile}
              alt="프로필 사진"
            />
          </a>
        )}
        <div className="flex-1 p-2 space-y-3">
          <div className="flex flex-col md:flex-row flex-wrap gap-x-2 gap-y-1 md:items-baseline">
            <h1 className="text-4xl font-bold">{p.name}</h1>
            {p.lol_nick && (
              <Nick
                nick={p.lol_nick}
                className="text-xl font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap"
              />
            )}
            {p.lol_secondary_nick && (
              <Nick
                nick={p.lol_secondary_nick}
                className="text-xl font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap"
              />
            )}
          </div>
          <div className="flex flex-wrap gap-x-2 items-baseline">
            <Image
              className="self-center"
              width={20}
              height={20}
              src={getTierIcon(p.lol_rank, p.pos)}
              alt=""
            />
            <span className="font-semibold text-xl">{getRank(p.lol_rank)}</span>
            {getPoint(p.lol_rank)}
            {p.lol_nick &&
              Object.entries(STATS_SITE).map(([name, getLink]) => (
                <a
                  key={name}
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-600 text-sm"
                  href={getLink(p.lol_nick!)}
                  target="_blank"
                >
                  {name}
                </a>
              ))}
          </div>
          <Links player={p} className="text-2xl text-gray-500" />
        </div>
        <a
          className="w-56 mx-auto"
          href={getChannelUrl(p.twitch)}
          target="_blank"
          title="방송"
        >
          <Thumbnail className="rounded" sizes="14rem" stream={p} />
          <div className="p-1">
            <span
              className={
                p.stream_start != null
                  ? "text-red-500 dark:text-red-600"
                  : "text-gray-400 dark:text-gray-600"
              }
              aria-label={p.stream_start != null ? "방송 중" : "방송 종료"}
            >
              ●
            </span>{" "}
            <span className="text-gray-400">{p.game}</span> {p.title}
          </div>
        </a>
      </div>
      <div className="p-4 border-l-4 border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-950">
        <FontAwesomeIcon
          className="text-blue-400 dark:text-blue-600"
          icon={faCircleInfo}
        />
        <span className="ml-3 font-medium text-blue-800 dark:text-blue-200">
          팀 구성 전에는 관전이 전체 허용된 게임만 수집됩니다.
        </span>
      </div>
      <Stats player={p} />
    </div>
  );
}
