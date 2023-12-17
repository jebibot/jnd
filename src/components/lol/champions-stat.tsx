"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { ChampionStat } from "@/utils/supabase";
import { getChampionColumn, getPercentCell } from "@/utils/table";
import Table from "../table";

const columnHelper = createColumnHelper<ChampionStat>();

export default function ChampionsStat({
  championsStat,
}: {
  championsStat: ChampionStat[];
}) {
  const numMatches =
    championsStat.reduce((acc, row) => acc + (row.picked || 0), 0) / 10;
  return (
    <Table
      data={championsStat}
      columns={[
        getChampionColumn<ChampionStat>("champion_id"),
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
      ]}
      defaultSorting={[]}
    />
  );
}
