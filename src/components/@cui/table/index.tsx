import React, { FC } from "react";
import TableMainBody from "./main/TableMainBody";
import { TableMainBodyTypes } from "./main/TableMainBody";
import { HeaderType } from "./main/TableHeader";
import { FromToDateFilterTypes } from "./filters/FromToDateFilter";
import Pagination, { PaginationType } from "./main/Pagination";
import TableHeader from "./main/TableHeader";

interface Header extends FromToDateFilterTypes {
  headerAction?: () => React.JSX.Element;
}
interface TableProps extends TableMainBodyTypes {
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
      tableClass="shadow shadow-border"
      tHeadClass="bg-card text-card-foreground "
      trBodyClass="hover:bg-effect-xl hover:text-primary-foreground "
    />
  );

  return (
    <div>
      <TableHeader
        dates={{
          fromDate,
          setFromDate,
          toDate,
          setToDate,
        }}
        headerAction={headerAction}
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
