'use client';
import React, { useState } from 'react';
import MyTable from '@/components/table';
import { demoData, demoColumns, tabs } from '@/components/table/columns/demo';
import {
  demoActionMenuList,
  demoNewActionMenu,
} from '@/components/table/headerActionList/demo';
import TabTable from '@/components/table/TabTable';
import SelectDropdown from '@/components/select/SelectDropdown';
const Page = () => {
  const ExpandingTable = (props: any) => {
    return <div>{JSON.stringify(props?.row)}</div>;
  };
  const [value, setValue] = useState();
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

        <SelectDropdown value={value} setValue={setValue} label="Label" />
      </div>
    </div>
  );
};

export default Page;
