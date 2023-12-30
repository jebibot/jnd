import { getRealMatches } from "@/utils/supabase";
import MatchHistory from "./match-history";
import RealMatch from "./real-match";
import DisclosureWrapper from "../disclosure";

export default async function RealMatches() {
  const matches = await getRealMatches();
  for (const match of matches) {
    for (const p of match.game.participants) {
      p.player = match.participants.find(
        (s) =>
          p.summonerId === s.players.lol ||
          p.summonerId === s.players.lol_secondary,
      )?.players;
    }
  }
  return (
    <div className="flex flex-col gap-4">
      {matches.map((match) => (
        <DisclosureWrapper
          key={match.game.gameId}
          buttonClassName={"p-2 rounded-lg bg-gray-200 dark:bg-gray-800"}
          button={<RealMatch match={match} />}
        >
          <MatchHistory match={match} />
        </DisclosureWrapper>
      ))}
    </div>
  );
}
