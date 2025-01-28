import React, { FC, useCallback, useState } from "react";
import { renderCell } from "../depends/renderCell";
import { toggleRowSelection } from "../depends/utility";
import Checkbox from "@/components/@cui/textField/Checkbox";
import { ColumnType } from "@/components/table/tableInterface";
import { twMerge } from "tailwind-merge";
import Iconify from "@/@core/common/icon";
import { ExtentableContent } from "../component/Expendable";

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
  const [expendableWidth, setExpendableWidth] = useState(0);
  const [openExpendableRow, setOpenExpendableRow] = useState<number>();

  const handleExpandRow = (index: number) => {
    setSelectAll(false);
    setSelectedRows([]);
    if (index === expendableWidth) {
      setOpenExpendableRow(-1);
      return;
    }
    setOpenExpendableRow(index);
  };

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

              {expandable && (
                <td className="relative h-0 cursor-pointer">
                  <span className="" onClick={() => handleExpandRow(index)}>
                    {openExpendableRow === index ? (
                      <Iconify icon="mingcute:down-fill" />
                    ) : (
                      <Iconify icon="mingcute:right-fill" />
                    )}
                  </span>
                </td>
              )}

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
            {expandable && openExpendableRow === index && (
              <ExtentableContent
                item={item}
                columns={columns}
                openExpendableRow={openExpendableRow}
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
        <div>
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
