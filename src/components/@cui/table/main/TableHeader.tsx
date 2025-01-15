import React, { FC, JSX } from "react";
import FromToDateFilter from "../filters/FromToDateFilter";
import { FromToDateFilterTypes } from "../filters/FromToDateFilter";
import { hasObjectValues } from "@/utils/helpers";
import { ColumnType } from "@/components/table/tableInterface";
import GlobalFilter, { GlobalFilterType } from "../filters/GlobalFilter";
import HeaderFilterList from "../filters/HeaderFilterList";
export interface HeaderType {
  headerAction?: () => JSX.Element;
  dates: FromToDateFilterTypes;
  columns: ColumnType[];
  globalFilter?: GlobalFilterType;
}
const TableHeader: FC<HeaderType> = ({
  dates,
  headerAction,
  globalFilter,
  columns,
}) => {
  const { fromDate, setFromDate, toDate, setToDate } = dates || {};

  const { setGlobalFilter } = globalFilter || {};
  return (
    <div>
      <div className="">
        <div className="flex flex-col font-semibold">
          <div className="flex items-center justify-between">
            {hasObjectValues(dates) && setFromDate && setToDate && (
              <FromToDateFilter
                fromDate={fromDate}
                setFromDate={setFromDate}
                toDate={toDate}
                setToDate={setToDate}
              />
            )}
            <GlobalFilter setGlobalFilter={setGlobalFilter} />
          </div>
          {headerAction && <div className="z-50">{headerAction()}</div>}
          <HeaderFilterList columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
