import "server-only";

import {
  CurrentGameInfoDTO,
  CurrentGameParticipantDTO,
} from "twisted/dist/models-dto";

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
};

export type PlayerParticipant = {
  name: string;
  twitch: string;
  stream_start?: string | null;
  lol: string | null;
  lol_secondary: string | null;
};

export type PlayerWithMatches = Player & { matches: PlayerMatch[] };

export type Participant = CurrentGameParticipantDTO & {
  riotId: string;
  stats?: Record<string, number>;
  player?: PlayerParticipant;
};

export type PlayerMatch = {
  id: number;
  start: string;
  game: Omit<CurrentGameInfoDTO, "participants"> & {
    teamStats?: Record<number, Record<string, number>>;
    participants: Participant[];
  };
  status: number;
  participants: {
    uptime: number;
    players: PlayerParticipant;
  }[];
  player?: Participant;
};

export type Match = {
  id: number;
  start: string;
  game: Omit<CurrentGameInfoDTO, "participants"> & {
    participants: Participant[];
  };
  players: PlayerParticipant[];
};

export type ChampionStat = {
  champion_id: number;
  banned: number;
  picked: number;
  win: number;
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
    `players?select=id,name,pos,twitch,profile,title,game,stream_start,youtube,youtube_secondary,community,lol_nick,lol_rank&order=name.asc`,
    ["players"],
  );
}

export async function getPlayer(
  id: string | number,
): Promise<PlayerWithMatches> {
  return fetchSupabase(
    `players?select=id,name,pos,twitch,profile,title,game,stream_start,youtube,youtube_secondary,community,lol_nick,lol_rank,lol_secondary_nick,matches(id,start,game,status,participants(uptime,players(name,twitch,lol,lol_secondary)))&id=eq.${id}&matches.status=eq.1&matches.order=id.desc`,
    ["players"],
    true,
  );
}

export async function getLiveMatches(): Promise<Match[]> {
  return fetchSupabase(
    `matches?select=id,start,game,players(name,twitch,stream_start,lol,lol_secondary)&status=eq.0&order=id.desc`,
    ["matches", "players"],
  );
}

export async function getChampionsStat(): Promise<ChampionStat[]> {
  return fetchSupabase(`champions_stat?select=*`, ["matches"]);
}
