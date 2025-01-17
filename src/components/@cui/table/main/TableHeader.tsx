import React, { FC, JSX } from "react";
import { hasObjectValues } from "@/utils/helpers";
import { ColumnType } from "@/components/table/tableInterface";
// component
import FromToDateFilter, {
  FromToDateFilterTypes,
} from "../filters/FromToDateFilter";
import GlobalFilter, { GlobalFilterType } from "../filters/GlobalFilter";
import ShowColumnFilter, {
  ColumnFilterFieldsType,
} from "../component/ShowColumnFilter";

import HeaderFilterList, {
  HeaderColumnFilter,
} from "../filters/HeaderFilterList";
export interface HeaderType {
  headerAction?: () => JSX.Element;
  dates: FromToDateFilterTypes;

  globalFilters?: GlobalFilterType;
  columnsFilter?: HeaderColumnFilter;
  showColumnFilterFields?: ColumnFilterFieldsType;
}

interface Props extends HeaderType {
  columns: ColumnType[];
}
const TableHeader: FC<Props> = ({
  dates,
  headerAction,
  globalFilters,
  columns,
  columnsFilter,
  showColumnFilterFields,
}) => {
  const { fromDate, setFromDate, toDate, setToDate } = dates || {};
  const { columnFilter, setColumnFilter } = columnsFilter || {};
  const { setGlobalFilter, globalFilter } = globalFilters || {};
  const { columnFilterField, setColumnFilterFields } =
    showColumnFilterFields || {};

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
            <div className="flex items-center space-x-2">
              <GlobalFilter
                setGlobalFilter={setGlobalFilter}
                globalFilter={globalFilter}
              />
              <ShowColumnFilter
                columns={columns}
                columnFilterField={columnFilterField}
                setColumnFilterFields={setColumnFilterFields}
              />
            </div>
          </div>
          {headerAction && <div className="">{headerAction()}</div>}

          <HeaderFilterList
            columnFilterField={columnFilterField}
            columnFilter={columnFilter}
            setColumnFilter={setColumnFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
