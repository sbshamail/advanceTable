'use client';
import React from 'react';
import MyTable from '@/components/table';
import { demoData, demoColumns } from '@/components/table/columns/demo';
import { demoActionMenuList } from '@/components/table/headerActionList/demo';
import Topbar from '@/components/topbar';
const page = () => {
  const ExpandingTable = ({ row, index, data }: any) => {
    return <div>sasasdasd</div>;
  };
  return (
    <div className="m-20">
      <Topbar />
      <MyTable
        data={demoData}
        columns={demoColumns}
        actionMenuList={demoActionMenuList}
        expandable={true}
        multiExpandable={true}
        expandingContent={ExpandingTable}
      />
    </div>
  );
};

export default page;
