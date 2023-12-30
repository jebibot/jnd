import Image from "next/image";
import { CHAMPIONS } from "@/utils/lol/champions";
import { PlayerMatch } from "@/utils/supabase";
import { classNames } from "@/utils/util";

export default function RealMatch({ match }: { match: PlayerMatch }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="basis-24 font-medium">{match.name}</div>
      <div className="flex basis-48">
        {[100, 200].map((teamId) => (
          <div key={teamId} className="flex-1 space-y-1 w-8">
            <div
              className={classNames(
                match.win === teamId
                  ? "font-bold text-blue-400"
                  : "font-medium text-red-400",
              )}
            >
              {teamId === 100 ? match.team1?.name : match.team2?.name}
            </div>
            {match.game.participants
              .filter((p) => p.teamId === teamId)
              .map((p) => {
                return (
                  <div key={p.riotId} className="flex items-center gap-1">
                    <div className="w-5 h-5 shrink-0 rounded-md overflow-hidden">
                      <Image
                        className="scale-125"
                        width={20}
                        height={20}
                        src={CHAMPIONS[p.championId].icon}
                        title={CHAMPIONS[p.championId].name}
                        alt={CHAMPIONS[p.championId].name}
                      />
                    </div>
                    <div className="text-sm whitespace-nowrap text-ellipsis overflow-hidden">
                      {p.player?.name || p.riotId}
                    </div>
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
}
