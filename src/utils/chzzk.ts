export function getChannelUrl(uid: string) {
  return `https://chzzk.naver.com/${uid}`;
}

export function getLiveUrl(uid: string) {
  return `https://chzzk.naver.com/live/${uid}`;
}

export function getThumbnailUrl(thumb: string | null, width: number) {
  return (thumb || "").replace("{type}", `${width}`);
}
