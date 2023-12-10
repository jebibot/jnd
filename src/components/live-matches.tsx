import {
  CHAMPIONS,
  PERKS,
  QUEUES,
  SPELLS,
  getChampionIcon,
  getPerkIcon,
  getSpellIcon,
} from "@/utils/lol";
import { getLiveMatches, getPlayers } from "@/utils/supabase";
import { classNames } from "@/utils/util";
import Nick from "./nick";
import PlayerLink from "./player-link";
import Timer from "./timer";

export default async function LiveMatches() {
  const [matches, players] = await Promise.all([
    getLiveMatches(),
    getPlayers(),
  ]);
  return matches.length > 0 ? (
    <div className="flex flex-col gap-4">
      {matches.map((match) => (
        <div
          className="p-4 mx-auto w-full max-w-[50rem] shadow-md dark:bg-slate-900 rounded-md"
          key={match.id}
        >
          <div className="mb-1">
            {QUEUES[match.game.gameQueueConfigId]} |{" "}
            {match.game.gameStartTime ? (
              <Timer start={match.game.gameStartTime} />
            ) : (
              ""
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[100, 200].map((teamId) => (
              <div
                key={teamId}
                className={classNames(
                  "flex flex-col gap-2 border-l-2 pl-2",
                  teamId === 100
                    ? "border-blue-500 dark:border-blue-600"
                    : "border-red-500 dark:border-red-600",
                )}
              >
                {match.game.participants
                  .filter((p) => p.teamId === teamId)
                  .map((p) => {
                    const player = players.find(
                      (player) =>
                        player.lol_nick === p.summonerName ||
                        player.lol_secondary_nick === p.summonerName,
                    );
                    const mainPerk = PERKS[p.perks.perkIds[0]];
                    const subPerk = PERKS[p.perks.perkSubStyle];
                    const champion = CHAMPIONS[p.championId];
                    const spell1 = SPELLS[p.spell1Id];
                    const spell2 = SPELLS[p.spell2Id];

                    return (
                      <div
                        key={p.summonerName}
                        className="flex items-center gap-0.5"
                      >
                        <div className="flex flex-col items-center">
                          <img
                            src={getPerkIcon(mainPerk)}
                            title={mainPerk.name}
                            alt={mainPerk.name}
                            className="w-6 h-6 inline-block mr-1"
                          />
                          <img
                            src={getPerkIcon(subPerk)}
                            title={subPerk.name}
                            alt={subPerk.name}
                            className="w-4 h-4 inline-block mr-1"
                          />
                        </div>
                        <img
                          src={getChampionIcon(p.championId)}
                          title={champion}
                          alt={champion}
                          className="w-8 h-8 rounded-full inline-block mr-1"
                        />
                        <div className="flex flex-col items-center gap-1">
                          <img
                            src={getSpellIcon(spell1)}
                            title={spell1.name}
                            alt={spell1.name}
                            className="w-4 h-4 rounded-full inline-block mr-1"
                          />
                          <img
                            src={getSpellIcon(spell2)}
                            title={spell2.name}
                            alt={spell2.name}
                            className="w-4 h-4 rounded-full inline-block mr-1"
                          />
                        </div>
                        <div className="ml-1 dark:text-gray-200">
                          {player && (
                            <PlayerLink
                              className="font-semibold hover:text-purple-600 dark:hover:text-purple-300"
                              twitch={player.twitch}
                            >
                              {player.name}{" "}
                              {player.stream_start && (
                                <span className="text-red-500 dark:text-red-600 text-xs">
                                  ●
                                </span>
                              )}
                            </PlayerLink>
                          )}
                          <Nick
                            className={classNames(
                              "font-semibold",
                              player && "text-xs",
                            )}
                            nick={p.summonerName}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="w-full p-12 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 text-center font-semibold text-gray-600 dark:text-gray-400">
      진행 중인 게임이 없습니다.
    </div>
  );
}
