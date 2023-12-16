"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { ChampionColumn, getPercentCell } from "@/utils/table";
import Table from "../table";

export type ChampionsStatT = {
  championId: number;
  banned?: number;
  picked?: number;
  win?: number;
};

const columnHelper = createColumnHelper<ChampionsStatT>();

export default function ChampionsStat({
  championsStat,
  numMatches,
}: {
  championsStat: ChampionsStatT[];
  numMatches: number;
}) {
  return (
    <Table
      data={championsStat}
      columns={[
        ChampionColumn,
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
      defaultSorting={[
        {
          id: "게임 수",
          desc: true,
        },
        {
          id: "승률",
          desc: true,
        },
        {
          id: "밴율",
          desc: true,
        },
      ]}
    />
  );
}
