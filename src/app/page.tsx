'use client';
import React from 'react';
import MyTable from '@/components/table';
import { demoData, demoColumns, tabs } from '@/components/table/columns/demo';
import {
  demoActionMenuList,
  demoNewActionMenu,
} from '@/components/table/headerActionList/demo';
import TabTable from '@/components/table/TabTable';

const page = () => {
  const ExpandingTable = (props: any) => {
    return <div>{JSON.stringify(props?.row)}</div>;
  };
  return (
    <div className="">
      <div className=" flex flex-col gap-10">
        <MyTable
          data={demoData}
          columns={demoColumns}
          actionMenuList={demoActionMenuList}
          newActionMenu={demoNewActionMenu}
          expandable={true}
          multiExpandable={true}
          ExpandingContent={ExpandingTable}
          total={demoData.length}
          rowId={'id'}
          titleTable="Demo Table"
        />
        <TabTable tabs={tabs} />
      </div>
    </div>
  );
};

export default page;
