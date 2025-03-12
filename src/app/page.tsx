'use client';
import React from 'react';
import MyTable from '@/components/table';
import { demoData, demoColumns, tabs } from '@/components/table/columns/demo';
import {
  demoActionMenuList,
  demoNewActionMenu,
} from '@/components/table/headerActionList/demo';
import Topbar from '@/components/topbar';

const page = () => {
  const ExpandingTable = ({ row, index, data }: any) => {
    return <div>{JSON.stringify(row)}</div>;
  };
  return (
    <div className="m-20">
      <Topbar />
      <MyTable
        data={demoData}
        columns={demoColumns}
        // actionMenuList={demoActionMenuList}
        // newActionMenu={demoNewActionMenu}
        tabs={tabs}
        expandable={true}
        multiExpandable={true}
        expandingContent={ExpandingTable}
      />
    </div>
  );
};

export default page;
