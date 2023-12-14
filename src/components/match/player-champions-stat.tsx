"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { getCSPerMinute, getKDA } from "@/utils/stats";
import { ChampionsColumn, getNumberCell, getPercentCell } from "@/utils/table";
import Table from "../table";

export type PlayerChampionsStatT = { championId: number } & Record<
  string,
  number
>;

const columnHelper = createColumnHelper<PlayerChampionsStatT>();

export default function PlayerChampionsStat({
  championsStat,
}: {
  championsStat: PlayerChampionsStatT[];
}) {
  return (
    <Table
      data={championsStat}
      columns={[
        ChampionsColumn,
        columnHelper.accessor((row) => row.WIN / row.games, {
          header: "승률",
          cell: getPercentCell,
        }),
        columnHelper.accessor("games", {
          header: "게임",
        }),
        columnHelper.accessor("WIN", {
          header: "승리",
        }),
        columnHelper.accessor("LOSE", {
          header: "패배",
        }),
        columnHelper.accessor(getKDA, {
          header: "KDA",
          cell: getNumberCell,
        }),
        columnHelper.accessor((row) => row.CHAMPIONS_KILLED / row.games, {
          header: "킬",
          cell: getNumberCell,
        }),
        columnHelper.accessor((row) => row.NUM_DEATHS / row.games, {
          header: "데스",
          cell: getNumberCell,
        }),
        columnHelper.accessor((row) => row.ASSISTS / row.games, {
          header: "어시",
          cell: getNumberCell,
        }),
        columnHelper.accessor(
          (row) =>
            (row.MINIONS_KILLED + row.NEUTRAL_MINIONS_KILLED) / row.games,
          {
            header: "CS",
            cell: getNumberCell,
          },
        ),
        columnHelper.accessor((row) => getCSPerMinute(row, row.gameLength), {
          header: "분당",
          cell: getNumberCell,
        }),
        columnHelper.accessor((row) => row.GOLD_EARNED / row.games, {
          header: "골드",
          cell: getNumberCell,
        }),
      ]}
      defaultSorting={[
        {
          id: "games",
          desc: true,
        },
        {
          id: "WIN",
          desc: true,
        },
        {
          id: "KDA",
          desc: true,
        },
      ]}
    />
  );
}
