import Links from "@/components/links";
import Nick from "@/components/nick";
import Thumbnail from "@/components/thumbnail";
import { STATS_SITE, getPoint, getRank } from "@/utils/lol";
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
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
        {p.profile && (
          <a href={getChannelUrl(p.twitch)} target="_blank">
            <img
              className="w-48 h-48 rounded-full"
              src={p.profile}
              alt={p.name}
            />
          </a>
        )}
        <div className="flex flex-col flex-1 min-w-[16rem] p-2 gap-3">
          <div className="flex flex-col md:flex-row flex-wrap gap-x-2 gap-y-1 md:items-baseline">
            <div className="text-4xl font-bold">{p.name}</div>
            {p.lol_nick && (
              <Nick
                nick={p.lol_nick}
                className="text-xl font-semibold text-gray-700 dark:text-gray-300"
              />
            )}
            {p.lol_secondary_nick && (
              <Nick
                nick={p.lol_secondary_nick}
                className="text-xl font-semibold text-gray-700 dark:text-gray-300"
              />
            )}
          </div>
          <div className="flex flex-wrap gap-x-2 items-baseline">
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
          className="flex flex-col w-56 mx-auto"
          href={getChannelUrl(p.twitch)}
          target="_blank"
          title="방송"
        >
          <Thumbnail className="rounded" stream={p} />
          <div className="p-1">
            <span
              className={
                p.stream_start != null
                  ? "text-red-500 dark:text-red-600"
                  : "text-gray-400 dark:text-gray-600"
              }
            >
              ●
            </span>{" "}
            <span className="text-gray-400">{p.game}</span> {p.title}
          </div>
        </a>
      </div>
      <div className="w-full p-12 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 text-center font-semibold text-gray-600 dark:text-gray-400">
        기록된 전적이 없습니다.
      </div>
    </div>
  );
}
