import { CHAMPIONS, PERKS, QUEUES, SPELLS, getIcon } from "@/utils/lol";
import { getLiveMatches } from "@/utils/supabase";
import { classNames } from "@/utils/util";
import Nick from "./nick";
import PlayerCheckbox from "./player-checkbox";
import Timer from "./timer";

export default async function LiveMatches() {
  const matches = await getLiveMatches();
  return matches.length > 0 ? (
    <div className="flex flex-col gap-4">
      {matches.map((match) => (
        <div
          className="p-4 mx-auto w-full max-w-[50rem] shadow-md dark:bg-slate-900 rounded-md"
          key={match.id}
        >
          <div className="mb-1">
            {QUEUES[match.game.gameQueueConfigId]} |{" "}
            <Timer start={new Date(match.start).getTime()} />
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
                <div className="sr-only">
                  {teamId === 100 ? "블루팀" : "레드팀"}
                </div>
                {match.game.participants
                  .filter((p) => p.teamId === teamId)
                  .map((p) => {
                    const player = match.players.find(
                      (player) =>
                        p.summonerName === player.lol_nick ||
                        p.summonerName === player.lol_secondary_nick,
                    );
                    const mainPerk = PERKS[p.perks.perkIds[0]];
                    const subPerk = PERKS[p.perks.perkSubStyle];
                    const champion = CHAMPIONS[p.championId];
                    const spell1 = SPELLS[p.spell1Id];
                    const spell2 = SPELLS[p.spell2Id];

                    return (
                      <div key={p.summonerName} className="flex items-center">
                        <img
                          className="w-8 h-8 rounded-full inline-block mr-1"
                          src={getIcon("champion", champion)}
                          title={champion.name}
                          alt={champion.name}
                        />
                        <div className="flex flex-col items-center gap-1">
                          <img
                            className="w-4 h-4 rounded-full inline-block mr-1"
                            src={getIcon("spell", spell1)}
                            title={spell1.name}
                            alt={spell1.name}
                            loading="lazy"
                          />
                          <img
                            className="w-4 h-4 rounded-full inline-block mr-1"
                            src={getIcon("spell", spell2)}
                            title={spell2.name}
                            alt={spell2.name}
                            loading="lazy"
                          />
                        </div>
                        <div className="flex flex-col items-center">
                          <img
                            className="w-6 h-6 inline-block mr-1"
                            src={getIcon("perk", mainPerk)}
                            title={mainPerk.name}
                            alt={mainPerk.name}
                            loading="lazy"
                          />
                          <img
                            className="w-4 h-4 inline-block mr-1"
                            src={getIcon("perk", subPerk)}
                            title={subPerk.name}
                            alt={subPerk.name}
                            loading="lazy"
                          />
                        </div>
                        <div className="ml-1 font-semibold dark:text-gray-200">
                          {player &&
                            (player.stream_start ? (
                              <PlayerCheckbox twitch={player.twitch}>
                                {player.name}
                              </PlayerCheckbox>
                            ) : (
                              <>{player.name}</>
                            ))}
                          <Nick
                            className={player && "text-xs"}
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
