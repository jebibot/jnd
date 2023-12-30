"use client";

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { ChampionStat } from "@/utils/supabase";
import { championColumn, getPercentCell } from "@/utils/table";
import Table from "../table";

const columnHelper = createColumnHelper<ChampionStat>();

export default function ChampionStats({
  championStats,
}: {
  championStats: ChampionStat[];
}) {
  const numMatches =
    championStats.reduce((acc, row) => acc + (row.picked || 0), 0) / 10;
  return (
    <Table
      className="text-sm md:text-base"
      headerClassName="p-1"
      cellClassName="px-1 py-0.5 md:px-2 md:py-1"
      data={championStats}
      columns={[
        championColumn as ColumnDef<ChampionStat>,
        columnHelper.accessor((row) => row.picked || 0, {
          header: "게임 수",
        }),
        columnHelper.accessor((row) => (row.picked || 0) / numMatches, {
          header: "픽률",
          cell: getPercentCell,
        }),
        columnHelper.accessor(
          (row) => (row.picked ? (row.win || 0) / row.picked : 0),
          {
            header: "승률",
            cell: getPercentCell,
          },
        ),
        columnHelper.accessor((row) => (row.banned || 0) / numMatches, {
          header: "밴율",
          cell: getPercentCell,
        }),
        columnHelper.accessor(
          (row) => ((row.picked || 0) + (row.banned || 0)) / numMatches,
          {
            header: "밴픽률",
            cell: getPercentCell,
          },
        ),
      ]}
      defaultSorting={[]}
    />
  );
}
