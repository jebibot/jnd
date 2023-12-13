import Image from "next/image";
import { CHAMPIONS, PERKS, SPELLS } from "@/utils/lol";
import { getTierIcon } from "@/utils/lol-tier-icon";

export default function LolPage() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold">챔피언</h2>
      <div className="flex flex-wrap gap-1">
        {Object.values(CHAMPIONS).map((champion) => (
          <Image
            key={champion.name}
            className="rounded-full inline-block"
            width={32}
            height={32}
            src={champion.icon}
            title={champion.name}
            alt={champion.name}
          />
        ))}
      </div>
      <h2 className="text-lg font-semibold">주문</h2>
      <div className="flex flex-wrap gap-1">
        {Object.values(SPELLS).map((spell) => (
          <Image
            key={spell.name}
            className="rounded-full inline-block"
            width={16}
            height={16}
            src={spell.icon}
            title={spell.name}
            alt={spell.name}
          />
        ))}
      </div>
      <h2 className="text-lg font-semibold">룬</h2>
      <div className="flex flex-wrap gap-1">
        {Object.values(PERKS).map((perk) => (
          <Image
            key={perk.name}
            className="rounded-full inline-block"
            width={20}
            height={20}
            src={perk.icon}
            title={perk.name}
            alt={perk.name}
          />
        ))}
      </div>
      <h2 className="text-lg font-semibold">룬</h2>
      <div className="flex flex-wrap gap-1">
        {Object.values(PERKS).map((perk) => (
          <Image
            key={perk.name}
            className="rounded-full inline-block"
            width={16}
            height={16}
            src={perk.icon}
            title={perk.name}
            alt={perk.name}
          />
        ))}
      </div>
      <h2 className="text-lg font-semibold">티어</h2>
      <div className="flex flex-wrap gap-1">
        {["SILVER", "GOLD", "PLATINUM", "EMERALD", "DIAMOND"].map((tier) =>
          [1, 2, 3, 4, 5].map((pos) => (
            <Image
              key={tier + pos}
              className="inline-block"
              width={16}
              height={16}
              src={getTierIcon(tier, pos)}
              title={tier + pos}
              alt={tier + pos}
            />
          )),
        )}
      </div>
    </div>
  );
}
