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

export async function getPlayers(): Promise<Player[]> {
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/players?select=id,name,pos,twitch,profile,title,game,stream_start,youtube,youtube_secondary,community,lol_nick,lol_rank,lol_secondary_nick,lol_secondary_rank&order=name.asc`,
    {
      headers: {
        apikey: process.env.SUPABASE_ANON_KEY!,
      },
      next: { tags: ["players"] },
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch players");
  }
  return res.json();
}

export async function getPlayer(id: string | number): Promise<Player> {
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/players?select=id,name,pos,twitch,profile,title,game,stream_start,youtube,youtube_secondary,community,lol_nick,lol_rank,lol_secondary_nick,lol_secondary_rank&id=eq.${id}`,
    {
      headers: {
        Accept: "application/vnd.pgrst.object+json",
        apikey: process.env.SUPABASE_ANON_KEY!,
      },
      next: { tags: ["players"] },
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch player");
  }
  return res.json();
}
