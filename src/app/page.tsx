"use client";
import React, { Suspense } from "react";
import MyTable from "@/components/table";
import { demoData, demoColumns } from "@/components/table/columns/demo";
import { demoActionMenuList } from "@/components/table/headerActionList/demo";
import { ExpandingTableType } from "@/components/table/tableInterface";
const page = () => {
  const ExpandingTable = ({ row, index, data }: any) => {
    return <div></div>;
  };
  return (
    <div className="m-20">
      <MyTable
        data={demoData}
        columns={demoColumns}
        actionMenuList={demoActionMenuList}
        multiExpandable={true}
        expandingContent={ExpandingTable}
      />
    </div>
  );
};

export default page;
