export function getKDAString(stats: Record<string, number>) {
  return `${stats.CHAMPIONS_KILLED} / ${stats.NUM_DEATHS} / ${stats.ASSISTS}`;
}

export function getKDA(stats: Record<string, number>) {
  return (stats.CHAMPIONS_KILLED + stats.ASSISTS) / stats.NUM_DEATHS;
}

export function getKillParticipation(
  stats: Record<string, number>,
  teamStats: Record<string, number>,
) {
  return (
    ((stats.CHAMPIONS_KILLED + stats.ASSISTS) / teamStats.CHAMPIONS_KILLED) *
    100
  );
}

export function getCS(stats: Record<string, number>) {
  return stats.MINIONS_KILLED + stats.NEUTRAL_MINIONS_KILLED;
}

export function getCSPerMinute(
  stats: Record<string, number>,
  duration: number,
) {
  return (getCS(stats) / duration) * 60;
}

export function getGoldPerMinute(
  stats: Record<string, number>,
  duration: number,
) {
  return (stats.GOLD_EARNED / duration) * 60;
}
