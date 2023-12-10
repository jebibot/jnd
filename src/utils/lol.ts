const RANK: Record<string, number> = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
};

export const POSITION = ["TOP", "JUG", "MID", "ADC", "SUP"];

export const STATS_SITE = {
  "op.gg": (nick: string) =>
    `https://www.op.gg/summoners/kr/${encodeURIComponent(
      nick.replace("#", "-"),
    )}`,
  "fow.kr": (nick: string) =>
    `https://fow.kr/find/${encodeURIComponent(nick.replace("#", "-"))}`,
  "lol.ps": (nick: string) =>
    `https://lol.ps/summoner/${encodeURIComponent(nick.replace("#", "_"))}`,
  "poro.gg": (nick: string) =>
    `https://poro.gg/summoner/kr/${encodeURIComponent(nick.replace("#", "-"))}`,
  "deeplol.gg": (nick: string) =>
    `https://www.deeplol.gg/summoner/kr/${encodeURIComponent(
      nick.replace("#", "-"),
    )}`,
  "your.gg": (nick: string) =>
    `https://your.gg/ko/kr/profile/${encodeURIComponent(nick)}`,
};

export function getShortRank(rank: string | null) {
  if (!rank) {
    return "U";
  }
  const parts = rank.split(",");
  return `${parts[0][0]}${RANK[parts[1]]}`;
}

export function getRank(rank: string | null) {
  if (!rank) {
    return "Unranked";
  }
  const parts = rank.split(",");
  return `${parts[0][0]}${parts[0].substring(1).toLowerCase()} ${parts[1]}`;
}

export function getPoint(rank: string | null) {
  if (!rank) {
    return "";
  }
  const parts = rank.split(",");
  return `${parts[2]} LP`;
}

export function getTierImage(rank: string | null, pos: number) {
  let tier = "GOLD";
  if (rank) {
    tier = rank.split(",")[0];
  }
  return `/images/${tier}_${POSITION[pos - 1]}.png`;
}
