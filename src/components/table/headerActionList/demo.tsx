'use client';
import { JSX, useState } from 'react';
import { ActionMenuList, NewActionMenu } from 'nextmastery/props';
import { Iconify, SimpleModal } from 'nextmastery';
import { TableType } from 'nextmastery/props';

export const demoActionMenuList = ({}: Record<
  string,
  any
>): ActionMenuList[] => [
  {
    title: 'Edit',
    icon: 'tabler:edit',
    Component: ({}) => <p className="text-center">This is Edit Content</p>,
    visible: 'selected',
  },
  {
    title: 'Create',
    icon: 'tabler:plus',
    Component: <p className="text-center">This is Create Content</p>,
    visible: 'unselected',
  },
  {
    title: 'Delete',
    icon: 'tabler:minus',
    deleted: ({}) => {},
    visible: 'selected',
    multiSelected: true,
  },
];
const StatusModal = ({ icon }: any): JSX.Element => {
  const [open, setOpen] = useState(false);
  const toggle = (action: boolean) => setOpen(action);
  return (
    <>
      <Iconify
        icon={icon}
        onClick={() => toggle(true)}
        className="iconPrimary"
      />
      <SimpleModal close={toggle} open={open}></SimpleModal>
    </>
  );
};

export const demoNewActionMenu = ({}: Record<string, any>): NewActionMenu[] => [
  // {
  //   dropdownMenu: [
  //     {
  //       icon: 'lets-icons:import-duotone-line',
  //       contents: ({}: Record<string, any>) => [
  //         {
  //           title: 'Export All',
  //           icon: 'solar:file-download-bold',
  //           Component: <></>,
  //         },
  //         {
  //           title: ' Export Selected',
  //           icon: 'solar:file-download-bold',
  //           Component: <></>,
  //           visible: 'selected',
  //           multiSelected: true,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    icon: 'solar:file-download-bold',
    action: StatusModal,
  },
];
