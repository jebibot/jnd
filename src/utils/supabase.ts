import type { CurrentGameInfoDTO } from "twisted/dist/models-dto/spectator/current-game-info.dto";

export type Player = {
  id: number;
  name: string;
  pos: number;
  twitch: string;
  profile: string | null;
  title: string | null;
  game: string | null;
  stream_start: string | null;
  youtube: string | null;
  youtube_secondary: string | null;
  community: string | null;
  lol_nick: string | null;
  lol_rank: string | null;
  lol_secondary_nick: string | null;
  lol_secondary_rank: string | null;
};

type Match = {
  id: number;
  start: string;
  game: CurrentGameInfoDTO;
  players: Player[];
};

async function fetchSupabase(path: string, tags: string[], single = false) {
  const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      ...(single ? { Accept: "application/vnd.pgrst.object+json" } : {}),
      apikey: process.env.SUPABASE_ANON_KEY!,
    },
    next: { tags },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${tags[0]}: ${res.status}`);
  }
  return res.json();
}

export async function getPlayers(): Promise<Player[]> {
  return fetchSupabase(
    `players?select=id,name,pos,twitch,profile,title,game,stream_start,youtube,youtube_secondary,community,lol_nick,lol_rank,lol_secondary_nick,lol_secondary_rank&order=name.asc`,
    ["players"],
  );
}

export async function getPlayer(id: string | number): Promise<Player> {
  return fetchSupabase(
    `players?select=id,name,pos,twitch,profile,title,game,stream_start,youtube,youtube_secondary,community,lol_nick,lol_rank,lol_secondary_nick,lol_secondary_rank&id=eq.${id}`,
    ["players"],
    true,
  );
}

export async function getLiveMatches(): Promise<Match[]> {
  return fetchSupabase(
    `matches?select=id,start,game,players(name,twitch,stream_start,lol_nick,lol_secondary_nick)&stats=is.null&order=id.desc`,
    ["matches", "players"],
  );
}
