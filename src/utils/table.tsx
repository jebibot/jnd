import { CellContext, createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import { CHAMPIONS } from "./lol/champions";
import { formatInteger, formatNumber } from "./util";

const collator = new Intl.Collator("ko-KR");

export const championColumn = createColumnHelper<{
  champion_id: number;
}>().accessor("champion_id", {
  header: "챔피언",
  cell: (info) => {
    const champion = CHAMPIONS[info.getValue()];
    return (
      <div className="flex items-center font-semibold">
        <div className="w-8 h-8 mr-2 rounded-md overflow-hidden">
          <Image
            className="scale-125"
            width={32}
            height={32}
            src={champion.icon}
            title={champion.name}
            alt=""
          />
        </div>
        {champion.name}
      </div>
    );
  },
  sortingFn: (a, b, columnId) => {
    const championA = CHAMPIONS[a.getValue<number>(columnId)];
    const championB = CHAMPIONS[b.getValue<number>(columnId)];
    return collator.compare(championA.name, championB.name);
  },
  sortDescFirst: false,
});

export const getPercentCell = (info: CellContext<any, number>) =>
  `${formatInteger(info.getValue() * 100)}%`;
export const getNumberCell = (info: CellContext<any, number>) =>
  formatNumber(info.getValue());
export const getIntegerCell = (info: CellContext<any, number>) =>
  formatInteger(info.getValue());
