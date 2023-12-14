import { Match } from "@/utils/supabase";
import { classNames } from "@/utils/util";
import Champion from "./champion";
import Nick from "../nick";
import PlayerCheckbox from "../player-checkbox";

export default function MatchDetail({ match }: { match: Match }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[100, 200].map((teamId) => (
        <div
          key={teamId}
          className={classNames(
            "space-y-2 border-l-2 pl-2",
            teamId === 100
              ? "border-blue-500 dark:border-blue-600"
              : "border-red-500 dark:border-red-600",
          )}
        >
          <div className="sr-only">{teamId === 100 ? "블루팀" : "레드팀"}</div>
          {match.game.participants
            .filter((p) => p.teamId === teamId)
            .map((p) => {
              const nick = p.riotId || p.summonerName;
              const player = match.players.find(
                (player) =>
                  p.summonerId === player.lol ||
                  p.summonerId === player.lol_secondary,
              );
              return (
                <div key={nick} className="flex items-center gap-2">
                  <Champion
                    player={p}
                    className="shrink-0"
                    largeSize={32}
                    mediumSize={20}
                    smallSize={16}
                  />
                  <div className="font-semibold dark:text-gray-200">
                    {player &&
                      (player.stream_start ? (
                        <PlayerCheckbox twitch={player.twitch}>
                          <span className="underline decoration-4 underline-offset-2 decoration-purple-300 dark:decoration-purple-900">
                            {player.name}
                          </span>
                        </PlayerCheckbox>
                      ) : (
                        <span className="underline decoration-4 underline-offset-2 decoration-purple-300 dark:decoration-purple-900">
                          {player.name}
                        </span>
                      ))}
                    <Nick
                      className={classNames(
                        "text-gray-700 dark:text-gray-300",
                        player && "text-xs",
                      )}
                      nick={nick}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
}
