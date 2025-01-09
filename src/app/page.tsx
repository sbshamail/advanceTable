"use client";
import React, { Suspense } from "react";
import MyTable from "@/components/table";
import { demoData, demoColumns } from "@/components/table/columns/demo";
import { demoActionMenuList } from "@/components/table/headerActionList/demo";
const page = () => {
  return (
    <div className="m-20">
      <MyTable
        data={demoData}
        columns={demoColumns}
        actionMenuList={demoActionMenuList}
      />
    </div>
  );
};

export default page;
