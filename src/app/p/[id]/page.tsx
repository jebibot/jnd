import Links from "@/components/links";
import Nick from "@/components/lol/nick";
import TierIcon from "@/components/lol/tier-icon";
import Callout from "@/components/match/callout";
import Stats from "@/components/match/stats";
import Thumbnail from "@/components/stream/thumbnail";
import { getLiveUrl } from "@/utils/chzzk";
import { STATS_SITE } from "@/utils/lol/lol";
import { getPoint, getRank } from "@/utils/lol/rank";
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
        <div className="flex-1 p-2 space-y-2">
          <div className="flex flex-col md:flex-row flex-wrap gap-x-2 gap-y-1 md:items-baseline">
            <h1 className="text-3xl md:text-4xl font-bold">{p.name}</h1>
            {p.teams && (
              <h2 className="text-xl font-semibold">{p.teams.name}</h2>
            )}
          </div>
          {p.lol_nick && (
            <>
              <div className="flex flex-wrap gap-x-2 items-baseline">
                <TierIcon
                  className="self-center"
                  rank={p.lol_rank}
                  pos={p.pos}
                  size={20}
                  alt=""
                />
                <span className="font-semibold text-xl">
                  {getRank(p.lol_rank)}
                </span>
                {getPoint(p.lol_rank)}
                <Nick
                  nick={p.lol_nick}
                  className="text-lg font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap"
                />
                {p.lol_secondary_nick && (
                  <Nick
                    nick={p.lol_secondary_nick}
                    className="text-lg font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap"
                  />
                )}
              </div>
              <div className="flex flex-wrap gap-x-2">
                {Object.entries(STATS_SITE).map(([name, getLink]) => (
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
            </>
          )}
          <Links player={p} className="text-2xl text-gray-500" />
        </div>
        <a
          className="w-56 mx-auto"
          href={
            p.chzzk != null && p.chzzk_start != null
              ? getLiveUrl(p.chzzk)
              : getChannelUrl(p.twitch)
          }
          target="_blank"
          title="방송"
        >
          <Thumbnail className="rounded" sizes="14rem" stream={p} />
          <div className="p-1 line-clamp-4">
            <span
              className={
                p.stream_start != null || p.chzzk_start != null
                  ? "text-red-500 dark:text-red-600"
                  : "text-gray-400 dark:text-gray-600"
              }
              aria-label={
                p.stream_start != null || p.chzzk_start != null
                  ? "방송 중"
                  : "방송 종료"
              }
            >
              ●
            </span>{" "}
            <span className="text-gray-400">{p.chzzk_game || p.game}</span>{" "}
            {p.chzzk_title || p.title}
          </div>
        </a>
      </div>
      {p.lol_nick && (
        <>
          <Callout />
          <Stats player={p} />
        </>
      )}
    </div>
  );
}
