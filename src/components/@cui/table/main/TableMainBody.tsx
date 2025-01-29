import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { renderCell } from "../depends/renderCell";
import { toggleRowSelection } from "../depends/utility";
import Checkbox from "@/components/@cui/textField/Checkbox";
import { ColumnType } from "@/components/table/tableInterface";
import { twMerge } from "tailwind-merge";

import {
  ExtendableArrow,
  ExtentableContent,
  isExpandable,
} from "../component/Expandable";

type ClassNameType = React.ComponentProps<"div">["className"];

export interface TableClassesType {
  tableWrapperClass?: ClassNameType;
  tableClass?: ClassNameType;
  tHeadClass?: ClassNameType;
  tableInsideClass?: ClassNameType;
  trHeadClass?: ClassNameType;
  thHeadClass?: ClassNameType;
  tBodyClass?: ClassNameType;
  trBodyClass?: ClassNameType;
  striped?: boolean;
  stripedClass?: ClassNameType;
  tdBodyClass?: ClassNameType;
}

export interface TableMainBodyTypes {
  data: Record<string, any>[];
  columns: ColumnType[];
  selectedRows?: Record<string, any>[];
  setSelectedRows?: (rows: Record<string, any>[]) => void;
  rowId?: "id" | "_id" | string;
  tableClasses?: TableClassesType;
  expandable?: boolean;
  multiExpandable?: boolean;
  expandingContent?: () => React.JSX.Element;
}
const TableMainBody: FC<TableMainBodyTypes> = ({
  data,
  columns,
  rowId = "id",
  selectedRows,
  setSelectedRows = () => {},
  tableClasses,
  expandable = true,
  multiExpandable = true,
  expandingContent,
}) => {
  const {
    tableWrapperClass,
    tableClass,
    trHeadClass,
    tHeadClass,
    thHeadClass,
    tableInsideClass,
    tBodyClass,
    trBodyClass,
    tdBodyClass,
    striped,
    stripedClass,
  } = tableClasses || {};
  const [selectAll, setSelectAll] = useState(false);
  // expendable states

  const [expandableWidth, setExpandableWidth] = useState(0);
  const [openExpandableRow, setOpenExpandableRow] = useState<number | number[]>(
    [-1]
  );
  // ref width , this tableWidth is use for nested table width
  const tableRef = useRef(null);
  useEffect(() => {
    if (tableRef.current) {
      const width = tableRef?.current?.offsetWidth;
      setExpandableWidth(width); // Subtract the specific pixels
    }
  }, [data]); // Dependency on data if the table size changes when data changes
  const toggle = useCallback(() => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data);
    }
    setSelectAll(!selectAll);
  }, [selectAll, setSelectedRows, data]);

  const TableHead = () => (
    <thead className={twMerge(`border-none `, `${tHeadClass} `)}>
      <tr className={twMerge(`z-10  sticky top-0`, ` ${trHeadClass} `)}>
        {expandable && <th></th>}
        {selectedRows && (
          <th
            className={twMerge(`   ${tableInsideClass} `, ` ${thHeadClass} `)}
          >
            <Checkbox onChange={toggle} checked={selectAll} />
          </th>
        )}
        {columns &&
          columns.length &&
          columns?.map((item, index) => {
            return (
              <th
                key={index}
                className={twMerge(
                  `   px-5 ${tableInsideClass} whitespace-nowrap`,
                  `  ${thHeadClass}`
                )}
              >
                <span className="font-bold">{item?.title}</span>
              </th>
            );
          })}
      </tr>
    </thead>
  );
  const TableBody = () => (
    <tbody className={twMerge(`text-sm font-medium`, ` ${tBodyClass}`)}>
      {data?.map((item, index: number) => {
        return (
          <React.Fragment key={index}>
            <tr
              key={index}
              className={twMerge(
                `border-none  ${striped && index % 2 !== 0 && stripedClass}`,
                `${trBodyClass}`
              )}
            >
              {/* for expenadle td arrow show*/}

              {(expandable || multiExpandable) &&
                ExtendableArrow({
                  setOpenExpandableRow,
                  index,
                  openExpandableRow,
                  setSelectAll,
                  setSelectedRows,
                  multiExpandable,
                })}

              {/* for selection single td */}
              {selectedRows && setSelectedRows && (
                <td
                  className={twMerge(
                    `${tableInsideClass} `,
                    `  ${tdBodyClass} `
                  )}
                >
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
                    className={twMerge(
                      `relative p-0 m-0 px-5 overflow-hidden ${tableInsideClass}  whitespace-nowrap`,
                      ` ${tdBodyClass} ${column?.className} `
                    )}
                  >
                    {renderCell(item, column, index, data)}
                  </td>
                ))}
            </tr>
            {isExpandable(openExpandableRow, index, multiExpandable) && (
              <ExtentableContent
                index={index}
                item={item}
                columns={columns}
                expandableWidth={expandableWidth}
              />
            )}
          </React.Fragment>
        );
      })}
    </tbody>
  );
  return (
    <div>
      <main className={`relative ${tableWrapperClass}`}>
        <div ref={tableRef}>
          <table
            className={twMerge(
              `m-0 p-0 table-auto relative border-spacing-0  border-separate  min-w-full `,
              ` ${tableClass} `
            )}
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
