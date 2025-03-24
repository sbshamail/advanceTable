import React from 'react';
import {
  DashboardSidebar,
  DashboardSidebarContent,
  DashboardSidebarTitle,
} from 'nextmastery';
import Topbar from '../topbar';
import SidebarList, { SidebarContentType } from './SidebarList';

const sidebarContents: SidebarContentType[] = [
  {
    id: 1,
    title: 'Dashboard',
    icon: 'ic:baseline-dashboard',
    children: [
      {
        title: 'Home',
        // icon: "material-symbols:circle",
        link: '/home',
      },
    ],
  },
  {
    id: 2,
    title: 'Paragraph',

    link: '/#paragraph',
  },
  {
    id: 3,
    title: 'Button',
    link: '/#button',
  },
  {
    id: 4,
    title: 'Input',
    link: '/#input',
  },
  {
    id: 5,
    title: 'Textarea',
    link: '/#textarea',
  },
  {
    id: 6,
    title: 'popover',
    link: '/#popover',
  },
  {
    id: 7,
    title: 'modal',
    link: '/#modal',
  },
  {
    id: 8,
    title: 'Sidebar',
    link: '/#sidebar',
  },
];

const Layout = ({ children }: any) => {
  return (
    <div>
      <DashboardSidebar>
        <DashboardSidebarTitle>Title</DashboardSidebarTitle>
        <DashboardSidebarContent>
          <SidebarList data={sidebarContents} />
        </DashboardSidebarContent>
        <div className="mt-10 mx-10 flex flex-col gap-8">
          <Topbar />
          <main>{children}</main>
        </div>
      </DashboardSidebar>
    </div>
  );
};

export default Layout;
