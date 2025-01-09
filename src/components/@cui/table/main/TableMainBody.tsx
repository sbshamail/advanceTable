import React, { FC, useCallback, useState } from "react";
import { renderCell } from "../depends/renderCell";
import { toggleRowSelection } from "../depends/utility";
import Checkbox from "@/components/textField/Checkbox";
import { ColumnType } from "@/components/table/tableInterface";

type ClassNameType = React.ComponentProps<"div">["className"];

export interface TableMainBodyTypes {
  data: Record<string, any>[];
  columns: ColumnType[];
  selectedRows?: Record<string, any>[];
  setSelectedRows?: (rows: Record<string, any>[]) => void;
  rowId?: "id" | "_id" | string;
  tableClass?: ClassNameType;
  tHeadClass?: ClassNameType;
  trHeadClass?: ClassNameType;
  thHeadClass?: ClassNameType;
  tBodyClass?: ClassNameType;
  trBodyClass?: ClassNameType;
  tdBodyClass?: ClassNameType;
}
const TableMainBody: FC<TableMainBodyTypes> = ({
  data,
  columns,
  rowId = "id",
  selectedRows,
  setSelectedRows = () => {},
  tableClass,
  tHeadClass,
  trHeadClass,
  thHeadClass,
  tBodyClass,
  trBodyClass,
  tdBodyClass,
}) => {
  const [selectAll, setSelectAll] = useState(false);
  const toggle = useCallback(() => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data);
    }
    setSelectAll(!selectAll);
  }, [selectAll, setSelectedRows, data]);

  const TableHead = () => (
    <thead className={`text-[13px] ${tHeadClass} `}>
      <tr className={` z-10 sticky top-0 ${trHeadClass} `}>
        {selectedRows && (
          <th className={`border ${thHeadClass} text-center`}>
            <Checkbox onChange={toggle} checked={selectAll} />
          </th>
        )}
        {columns &&
          columns.length &&
          columns?.map((item: Record<string, any>, index) => {
            return (
              <th
                key={index}
                className={`relative first:pl-3 last:pr-3  border  whitespace-nowrap text-center ${thHeadClass}`}
              >
                <span className="font-bold">{item?.title}</span>
              </th>
            );
          })}
      </tr>
    </thead>
  );
  const TableBody = () => (
    <tbody className={`text-sm font-medium ${tBodyClass}`}>
      {data?.map((item: any, index: number) => {
        return (
          <React.Fragment key={index}>
            <tr
              key={index}
              className={`${trBodyClass}`}
              style={{
                background: item?.style?.color,
                color: item?.style?.textColor,
                fontWeight: item?.style?.fontWeight,
              }}
            >
              {/* for selection single td */}
              {selectedRows && setSelectedRows && (
                <td className={`border m-0 p-0 text-center ${tdBodyClass} `}>
                  {toggleRowSelection(
                    item,
                    rowId,
                    selectedRows,
                    setSelectedRows
                  )}
                </td>
              )}

              {columns &&
                columns.length &&
                columns?.map((column, idx) => (
                  <td
                    key={idx}
                    className={`relative p-0 m-0  overflow-hidden px-5 border  whitespace-nowrap ${tdBodyClass} ${column?.className} `}
                  >
                    {renderCell(item, column, index, data)}
                  </td>
                ))}
            </tr>
          </React.Fragment>
        );
      })}
    </tbody>
  );
  return (
    <div>
      <main className="htable-scrollbar flex flex-col !max-h-[calc(100vh-350px)] overflow-y-auto ">
        <div>
          <table
            className={`m-0 p-0 table-auto relative  border-collapse border-none w-full ${tableClass} `}
          >
            {TableHead()}

            {TableBody()}
          </table>
        </div>
      </main>
    </div>
  );
};

export default TableMainBody;
