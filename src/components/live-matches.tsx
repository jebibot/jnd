import Image from "next/image";
import { CHAMPIONS, PERKS, QUEUES, SPELLS } from "@/utils/lol";
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
                    // @ts-expect-error
                    const nick = p.riotId || p.summonerName;
                    const player = match.players.find(
                      (player) =>
                        nick === player.lol_nick ||
                        nick === player.lol_secondary_nick,
                    );
                    const mainPerk = PERKS[p.perks.perkIds[0]];
                    const subPerk = PERKS[p.perks.perkSubStyle];
                    const champion = CHAMPIONS[p.championId];
                    const spell1 = SPELLS[p.spell1Id];
                    const spell2 = SPELLS[p.spell2Id];

                    return (
                      <div key={nick} className="flex items-center gap-1">
                        <Image
                          className="rounded-full inline-block"
                          width={32}
                          height={32}
                          src={champion.icon}
                          title={champion.name}
                          alt={champion.name}
                        />
                        <div className="flex flex-col items-center gap-1">
                          <Image
                            className="rounded-full inline-block"
                            width={16}
                            height={16}
                            src={spell1.icon}
                            title={spell1.name}
                            alt={spell1.name}
                            loading="lazy"
                          />
                          <Image
                            className="rounded-full inline-block"
                            width={16}
                            height={16}
                            src={spell2.icon}
                            title={spell2.name}
                            alt={spell2.name}
                            loading="lazy"
                          />
                        </div>
                        <div className="flex flex-col items-center">
                          <Image
                            className="inline-block"
                            width={20}
                            height={20}
                            src={mainPerk.icon}
                            title={mainPerk.name}
                            alt={mainPerk.name}
                            loading="lazy"
                          />
                          <Image
                            className="inline-block"
                            width={16}
                            height={16}
                            src={subPerk.icon}
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
                          <Nick className={player && "text-xs"} nick={nick} />
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
