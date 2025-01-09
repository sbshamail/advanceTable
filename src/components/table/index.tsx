"use client";
import React, { FC, useEffect, useState } from "react";
import Table from "../@cui/table";
import { ActionMenuListType } from "./tableInterface";
import TableHeaderAction from "./action/HeaderAction";
interface Props {
  data: any[];
  columns: any[];
  actionMenuList: ActionMenuListType; // function to generate action menu items based on row data.
}
import { demoNewActionMenu } from "./headerActionList/demo";
const MyTable: FC<Props> = ({ data, columns, actionMenuList }) => {
  const [paginationData, setPaginationData] = useState(data);
  //selectedRows
  const [selectedRows, setSelectedRows] = useState<Record<string, any>[] | []>(
    []
  );

  const [fromDate, setFromDate] = useState<Date | undefined>();
  const [toDate, setToDate] = useState<Date | undefined>(new Date());
  //pagination
  const showPagination = true;
  const [currentPage, setCurrentPage] = useState(1);
  const [dataLimit, setDataLimit] = useState(20);
  const total = data.length;

  useEffect(() => {
    const paginateData = (
      data: any[],
      currentPage: number,
      dataLimit: number
    ) => {
      const skip = (currentPage - 1) * dataLimit;
      return data.slice(skip, skip + dataLimit);
    };

    setPaginationData(paginateData(data, currentPage, dataLimit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, dataLimit]);
  //<-pagination

  const headerAction = () => {
    return (
      <TableHeaderAction
        actionMenuList={actionMenuList}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        newActionMenu={demoNewActionMenu}
      />
    );
  };
  return (
    <Table
      data={paginationData}
      total={total}
      columns={columns}
      rowId="id"
      selectedRows={selectedRows}
      setSelectedRows={setSelectedRows}
      //header
      header={{
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        headerAction,
      }}
      //pagination
      showPagination={false}
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
