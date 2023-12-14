import Image from "next/image";
import { CHAMPIONS } from "@/utils/lol/champions";
import { PERKS, SPELLS } from "@/utils/lol/lol";
import { Participant } from "@/utils/supabase";
import { classNames } from "@/utils/util";

export default function Champion({
  player,
  className,
  largeSize,
  mediumSize,
  smallSize,
}: {
  player: Participant;
  className?: string;
  largeSize: number;
  mediumSize: number;
  smallSize: number;
}) {
  const mainPerk = PERKS[player.perks?.perkIds[0]];
  const subPerk = PERKS[player.perks?.perkSubStyle];
  const champion = CHAMPIONS[player.championId];
  const spell1 = SPELLS[player.spell1Id];
  const spell2 = SPELLS[player.spell2Id];
  return (
    <div className={classNames("flex items-center gap-1", className)}>
      <div className="relative">
        <Image
          className="rounded-full"
          width={largeSize}
          height={largeSize}
          src={champion.icon}
          title={champion.name}
          alt={champion.name}
        />
        {player.stats && (
          <div
            className={classNames(
              "absolute rounded-full bg-gray-800 font-medium text-white leading-none",
              largeSize < 48
                ? "-bottom-0.5 -right-0.5 p-0.5 text-xs"
                : "bottom-0 right-0 p-1 text-sm",
            )}
          >
            {player.stats.LEVEL}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-1">
        <Image
          className="rounded-full"
          width={smallSize}
          height={smallSize}
          src={spell1.icon}
          title={spell1.name}
          alt={spell1.name}
          loading="lazy"
        />
        <Image
          className="rounded-full"
          width={smallSize}
          height={smallSize}
          src={spell2.icon}
          title={spell2.name}
          alt={spell2.name}
          loading="lazy"
        />
      </div>
      {player.perks != null && (
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full"
            width={mediumSize}
            height={mediumSize}
            src={mainPerk.icon}
            title={mainPerk.name}
            alt={mainPerk.name}
            loading="lazy"
          />
          <Image
            className="rounded-full"
            width={smallSize}
            height={smallSize}
            src={subPerk.icon}
            title={subPerk.name}
            alt={subPerk.name}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
