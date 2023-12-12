const RANK: Record<string, number> = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
};

export const POSITION = ["TOP", "JUG", "MID", "ADC", "SUP"];

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
  return `${parts[0][0]}${parts[0].slice(1).toLowerCase()} ${parts[1]}`;
}

export function getPoint(rank: string | null) {
  if (!rank) {
    return "";
  }
  const parts = rank.split(",");
  return `${parts[2]} LP`;
}
