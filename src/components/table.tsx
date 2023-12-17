"use client";

import {
  faSort,
  faSortDown,
  faSortUp,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ColumnDef,
  RowData,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { classNames } from "@/utils/util";

export default function Table<TData extends RowData>({
  className,
  headerClassName,
  cellClassName,
  data,
  columns,
  defaultSorting,
}: {
  className?: string;
  headerClassName?: string;
  cellClassName?: string;
  data: TData[];
  columns: ColumnDef<TData, any>[];
  defaultSorting: SortingState;
}) {
  const [sorting, setSorting] = useState<SortingState>(defaultSorting);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <table
      className={classNames(
        "table-auto rounded-md text-center whitespace-nowrap",
        className,
      )}
    >
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className="text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-800"
          >
            {headerGroup.headers.map((header, i) => (
              <th
                key={header.id}
                className={classNames(
                  headerClassName,
                  i === 0 && "sticky left-0 bg-inherit",
                )}
                aria-sort={
                  header.column.getIsSorted()
                    ? header.column.getIsSorted() === "asc"
                      ? "ascending"
                      : "descending"
                    : undefined
                }
              >
                {header.isPlaceholder ? null : (
                  <button
                    className={
                      header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : ""
                    }
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    <FontAwesomeIcon
                      className="ml-1"
                      icon={
                        header.column.getIsSorted()
                          ? header.column.getIsSorted() === "asc"
                            ? faSortUp
                            : faSortDown
                          : faSort
                      }
                    />
                  </button>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="odd:bg-gray-50 odd:dark:bg-slate-950 even:bg-gray-100 even:dark:bg-slate-900"
          >
            {row.getVisibleCells().map((cell, i) => (
              <td
                key={cell.id}
                className={classNames(
                  cellClassName,
                  i === 0 && "sticky left-0 bg-inherit",
                )}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
