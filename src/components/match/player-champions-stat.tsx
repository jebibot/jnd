"use client";

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { PlayerChampionStat } from "@/utils/supabase";
import { championColumn, getIntegerCell, getNumberCell, getPercentCell } from "@/utils/table";
import Table from "../table";

const columnHelper = createColumnHelper<PlayerChampionStat>();

export default function PlayerChampionStats({
  championStats,
  sort,
}: {
  championStats: PlayerChampionStat[];
  sort?: boolean;
}) {
  return (
    <Table
      className="text-sm lg:text-base mx-auto"
      headerClassName="p-1"
      cellClassName="px-1 py-0.5 lg:px-2 lg:py-1"
      data={championStats}
      columns={[
        championColumn as ColumnDef<PlayerChampionStat>,
        columnHelper.accessor((row) => row.win / row.games, {
          header: "승률",
          cell: getPercentCell,
        }),
        columnHelper.accessor("games", {
          header: "게임",
        }),
        columnHelper.accessor("win", {
          header: "승리",
        }),
        columnHelper.accessor((row) => row.kda ?? Infinity, {
          header: "KDA",
          cell: getNumberCell,
        }),
        columnHelper.accessor("kills", {
          header: "킬",
          cell: getNumberCell,
        }),
        columnHelper.accessor("deaths", {
          header: "데스",
          cell: getNumberCell,
        }),
        columnHelper.accessor("assists", {
          header: "어시",
          cell: getNumberCell,
        }),
        columnHelper.accessor("minions", {
          header: "CS",
          cell: getIntegerCell,
        }),
        columnHelper.accessor("cpm", {
          header: "/m",
          cell: getNumberCell,
        }),
        columnHelper.accessor("gold", {
          header: "골드",
          cell: getIntegerCell,
        }),
      ]}
      defaultSorting={
        sort
          ? [
              {
                id: "games",
                desc: true,
              },
              {
                id: "win",
                desc: true,
              },
              {
                id: "KDA",
                desc: true,
              },
            ]
          : []
      }
    />
  );
}
