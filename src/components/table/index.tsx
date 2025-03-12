'use client';
import { FC, useEffect, useState } from 'react';

import { Table } from 'nextmastery';
// import Table from "../../../nextMastery/dist/components/@cui/table";
import { ColumnFilterType, ColumnType, TableType } from 'nextmastery/props';

import TableHeaderAction from 'nextmastery/components/@cui/table/headerAction';

interface Props extends TableType {}

import { TableMainClassesType } from 'nextmastery/props';
const MyTable: FC<Props> = ({
  titleTable,
  data,
  columns,
  actionMenuList,
  newActionMenu,
  expandable,
  multiExpandable,
  expandingContent,
  tabs,
}) => {
  // **start STATES
  //table fullscreen state
  const [fullScreen, setFullScreen] = useState(false);
  const [paginationData, setPaginationData] = useState(data);
  //selectedRows
  const [selectedRows, setSelectedRows] = useState<Record<string, any>[] | []>(
    [],
  );
  // column Hide Show
  const [showOnlyColumns, setShowOnlyColumns] = useState(columns);

  // filter
  const [columnFilterField, setColumnFilterFields] = useState<ColumnType[]>([]);
  const [fromDate, setFromDate] = useState<Date | undefined>();
  const [toDate, setToDate] = useState<Date | undefined>(new Date());
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [columnFilter, setColumnFilter] = useState<ColumnFilterType[]>([]);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [dataLimit, setDataLimit] = useState(20);
  //active tab
  const [activeTab, setActiveTab] = useState(0);
  // **end STATES
  const total = data.length;

  // If tabs exist, use the selected tab's data
  if (tabs && tabs.length > 0) {
    const activeTabData = tabs[activeTab];
    titleTable = activeTabData.titleTable;
    data = activeTabData.data;
    columns = activeTabData.columns;
    actionMenuList = activeTabData.actionMenuList;
    newActionMenu = activeTabData.newActionMenu;
    expandable = activeTabData.expandable;
    multiExpandable = activeTabData.multiExpandable;
    expandingContent = activeTabData.expandingContent;
  }

  // handle rendering table on action
  useEffect(() => {
    const paginateData = (
      data: any[],
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

  // header action left side
  const headerAction = () => {
    return (
      <TableHeaderAction
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        actionMenuList={actionMenuList}
        newActionMenu={newActionMenu}
      />
    );
  };

  const tableClasses: TableMainClassesType = {
    tableWrapperClass: !fullScreen
      ? '!max-h-[calc(100vh-350px)] overflow-y-auto'
      : '',
    tableClass: '',
    tableInsideClass:
      'border border-border shadow-sm shadow-effect-lg text-left px-2 ',
    tHeadClass: '',
    trHeadClass: 'bg-accent',
    thHeadClass: '',
    tBodyClass: '',
    trBodyClass: '',
    tdBodyClass: '',
    striped: true,
    stripedClass: '',
  };
  return (
    <Table
      data={paginationData}
      total={total}
      tableClasses={tableClasses}
      columns={columns}
      rowId="id"
      selectedRows={selectedRows}
      setSelectedRows={setSelectedRows}
      expandable={expandable}
      multiExpandable={multiExpandable}
      expandingContent={expandingContent}
      //tab
      tab={{
        activeTab,
        setActiveTab,
        tabs,
      }}
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
          //these are filter to filterize data
          columnFilter,
          setColumnFilter,
        },
        globalFilters: {
          setGlobalFilter,
          globalFilter,
        },
        showColumnFilterFields: {
          //these are field that show
          columnFilterField,
          setColumnFilterFields,
        },
        showFullScreen: {
          setFullScreen,
          fullScreen,
        },
        showOnlyColumns,
        setShowOnlyColumns,
      }}
      //pagination
      showPagination={true}
      pagination={{
        currentPage,
        setCurrentPage,
        dataLimit,
        setDataLimit,
      }}
    />
  );
};

export default MyTable;
