import React, { FC, JSX } from "react";
import FromToDateFilter from "../filters/FromToDateFilter";
import { FromToDateFilterTypes } from "../filters/FromToDateFilter";
import { hasObjectValues } from "@/utils/helpers";

export interface HeaderType {
  headerAction?: () => JSX.Element; // Function to render additional content in header row.
  dates: FromToDateFilterTypes;
}
const TableHeader: FC<HeaderType> = ({ dates, headerAction }) => {
  const { fromDate, setFromDate, toDate, setToDate } = dates || {};
  console.log(dates);
  return (
    <div>
      <div className="flex justify-between items-start ">
        <div className="flex flex-col font-semibold">
          {hasObjectValues(dates) && setFromDate && setToDate && (
            <div className="flex">
              <FromToDateFilter
                fromDate={fromDate}
                setFromDate={setFromDate}
                toDate={toDate}
                setToDate={setToDate}
              />
            </div>
          )}
          {headerAction && <div className="z-50">{headerAction()}</div>}
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
