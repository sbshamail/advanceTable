'use client';
import { FC, useEffect, useState } from 'react';
import { Table } from 'nextmastery';
// import Table from "../../../nextMastery/dist/components/@cui/table";
import { ColumnFilterType, TableType } from 'nextmastery/props';

import TableHeaderAction from 'nextmastery/components/@cui/table/headerAction';

interface Props extends TableType {}

import { TableMainClassesType } from 'nextmastery/props';
const MyTable: FC<Props> = ({
  data,
  columns,
  actionMenuList,
  newActionMenu,
  total,
  rowId,
  expandable,
  multiExpandable,
  ExpandingContent,
  titleTable,
}) => {
  // **start STATES
  const [paginationData, setPaginationData] = useState(data);
  // console.log(ExpandingContent);
  //table fullscreen state
  const [fullScreen, setFullScreen] = useState(false);

  //selectedRows
  const [selectedRows, setSelectedRows] = useState<Record<string, any>[] | []>(
    [],
  );

  // filter

  const [fromDate, setFromDate] = useState<Date | undefined>();
  const [toDate, setToDate] = useState<Date | undefined>(new Date());
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [columnFilter, setColumnFilter] = useState<ColumnFilterType[]>([]);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [dataLimit, setDataLimit] = useState(20);

  // **end STATES

  // handle rendering table on action
  useEffect(() => {
    const paginateData = (
      data: Record<string, unknown>[],
      currentPage: number,
      dataLimit: number,
    ) => {
      const skip = (currentPage - 1) * dataLimit;
      return data.slice(skip, skip + dataLimit);
    };

    setPaginationData(paginateData(data, currentPage, dataLimit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, dataLimit]);
  //<-pagination

  const removeSelection = () => {
    setSelectedRows([]);
  };

  // header action left side
  const headerAction = () => {
    return (
      <TableHeaderAction
        data={data}
        columns={columns}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        actionMenuList={actionMenuList}
        newActionMenu={newActionMenu}
        removeSelection={removeSelection}
      />
    );
  };

  const tableClasses: TableMainClassesType = {};

  return (
    <Table
      tableClasses={tableClasses}
      total={total}
      data={paginationData}
      columns={columns}
      rowId={rowId}
      titleTable={titleTable}
      selectedRows={selectedRows}
      setSelectedRows={setSelectedRows}
      expandable={expandable}
      multiExpandable={multiExpandable}
      ExpandingContent={ExpandingContent}
      showColumnFilter={true}
      //header
      header={{
        headerAction,
        dates: {
          fromDate,
          setFromDate,
          toDate,
          setToDate,
        },
        columnsFilter: {
          columnFilter,
          setColumnFilter,
        },
        globalFilters: {
          setGlobalFilter,
          globalFilter,
        },

        showFullScreen: {
          setFullScreen,
          fullScreen,
        },
      }}
      //pagination
      showPagination={true}
      pagination={{
        currentPage,
        setCurrentPage,
        dataLimit,
        setDataLimit,
      }}
      striped={true}
      tableWrapperClass={
        !fullScreen ? '!max-h-[calc(100vh-350px)] overflow-y-auto' : ''
      }
    />
  );
};

export default MyTable;
