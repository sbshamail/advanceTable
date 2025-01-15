import React, { FC } from "react";
import TableMainBody from "./main/TableMainBody";
import { TableMainBodyTypes } from "./main/TableMainBody";
import { FromToDateFilterTypes } from "./filters/FromToDateFilter";
import Pagination, { PaginationType } from "./main/Pagination";
import TableHeader from "./main/TableHeader";
import { GlobalFilterType } from "./filters/GlobalFilter";

type ClassNameType = React.ComponentProps<"div">["className"];

interface Header extends FromToDateFilterTypes, GlobalFilterType {
  headerAction?: () => React.JSX.Element;
}
interface TableProps extends TableMainBodyTypes {
  layoutClass?: ClassNameType;
  showPagination?: boolean;
  total: number;
  pagination?: PaginationType;
  header?: Header;
}
const Table: FC<TableProps> = ({
  data,
  total,
  columns,
  rowId,
  selectedRows,
  setSelectedRows,
  tableClasses,
  layoutClass = "p-4 py-10 shadow-2xl shadow-border border border-border rounded-[20px] space-y-2",
  header,

  pagination,
  showPagination = false,
}) => {
  const {
    currentPage = 1,
    setCurrentPage = () => {},
    dataLimit = total,
    setDataLimit = () => {},
  } = pagination || {};

  const { fromDate, setFromDate, toDate, setToDate, headerAction } =
    header || {};

  const tableMain = () => (
    <TableMainBody
      data={data}
      rowId={rowId}
      columns={columns}
      selectedRows={selectedRows}
      setSelectedRows={setSelectedRows}
      tableClasses={tableClasses}
    />
  );

  return (
    <div className={`${layoutClass}`}>
      <TableHeader
        dates={{
          fromDate,
          setFromDate,
          toDate,
          setToDate,
        }}
        headerAction={headerAction}
        columns={columns}
      />
      {tableMain()}
      {showPagination && pagination && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          dataLimit={dataLimit}
          setDataLimit={setDataLimit}
          total={total}
        />
      )}
    </div>
  );
};

export default Table;
