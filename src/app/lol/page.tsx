import Image from "next/image";
import { Fragment } from "react";
import TierIcon from "@/components/tier-icon";
import { CHAMPIONS } from "@/utils/lol/champions";
import { ITEMS, PERKS, SPELLS } from "@/utils/lol/lol";

export default function LolPage() {
  return (
    <div className="flex flex-col gap-2">
      {[56, 32, 20].map((size) => (
        <Fragment key={size}>
          <h2 className="text-lg font-semibold">챔피언</h2>
          <div className="flex flex-wrap gap-2">
            {Object.values(CHAMPIONS).map((champion) => (
              <Image
                key={champion.name}
                className={
                  size === 20 ? "rounded-md scale-125" : "rounded-full"
                }
                width={size}
                height={size}
                src={champion.icon}
                title={champion.name}
                alt={champion.name}
              />
            ))}
          </div>
        </Fragment>
      ))}
      {[24, 16].map((size) => (
        <Fragment key={size}>
          <h2 className="text-lg font-semibold">주문</h2>
          <div className="flex flex-wrap gap-1">
            {Object.entries(SPELLS).map(([id, spell]) => (
              <Image
                key={id}
                className="rounded-full"
                width={size}
                height={size}
                src={spell.icon}
                title={spell.name}
                alt={spell.name}
              />
            ))}
          </div>
        </Fragment>
      ))}
      {[32, 24, 20, 16].map((size) => (
        <Fragment key={size}>
          <h2 className="text-lg font-semibold">룬</h2>
          <div className="flex flex-wrap gap-1">
            {Object.values(PERKS).map((perk) => (
              <Image
                key={perk.name}
                className="rounded-full"
                width={size}
                height={size}
                src={perk.icon}
                title={perk.name}
                alt={perk.name}
              />
            ))}
          </div>
        </Fragment>
      ))}
      {[20, 16].map((size) => (
        <Fragment key={size}>
          <h2 className="text-lg font-semibold">티어</h2>
          <div className="flex flex-wrap gap-1">
            {["SILVER", "GOLD", "PLATINUM", "EMERALD", "DIAMOND"].map((tier) =>
              [1, 2, 3, 4, 5].map((pos) => (
                <TierIcon key={tier + pos} rank={tier} pos={pos} size={size} />
              )),
            )}
          </div>
        </Fragment>
      ))}
      <h2 className="text-lg font-semibold">아이템</h2>
      <div className="flex flex-wrap gap-1">
        {Object.entries(ITEMS).map(([id, item]) => (
          <Image
            key={id}
            className="rounded-md"
            width={20}
            height={20}
            src={item.icon}
            title={item.name}
            alt={item.name}
          />
        ))}
      </div>
    </div>
  );
}
