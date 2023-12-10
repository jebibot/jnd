export function getChannelUrl(username: string) {
  return `https://www.twitch.tv/${username}`;
}

export function getThumbnailUrl(username: string, w: number) {
  return `https://static-cdn.jtvnw.net/previews-ttv/live_user_${username}-${w}x${Math.round(
    (w * 9) / 16,
  )}.jpg`;
}
