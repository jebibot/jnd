import { MetadataRoute } from "next";
import { getPlayers } from "@/utils/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const players = await getPlayers();
  return [
    {
      url: "https://jnd.twitchgg.tv/",
    },
    ...players.map((player) => ({
      url: `https://jnd.twitchgg.tv/p/${player.id}`,
    })),
  ];
}
