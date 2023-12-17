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
        "table-auto rounded-md text-center whitespace-nowrap overflow-hidden",
        className,
      )}
    >
      <thead className="text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-800">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className={headerClassName}
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
          <tr key={row.id} className="even:bg-gray-100 even:dark:bg-slate-900">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={cellClassName}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
