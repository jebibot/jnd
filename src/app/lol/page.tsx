import Image from "next/image";
import { CHAMPIONS, PERKS, SPELLS } from "@/utils/lol";

export default function LolPage() {
  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold">챔피언</h2>
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
      <div>
        <h2 className="text-lg font-semibold">주문</h2>
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
      <div>
        <h2 className="text-lg font-semibold">룬</h2>
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
      <div>
        <h2 className="text-lg font-semibold">룬</h2>
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
    </div>
  );
}
