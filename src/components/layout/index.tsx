import React from 'react';
import {
  DashboardSidebar,
  DashboardSidebarContent,
  Title,
} from 'nextmastery/components/@cui/sidebar/DashboardSidebar';
const Layout = ({ children }: any) => {
  return (
    <div>
      <DashboardSidebar>
        <Title>Title</Title>
        <DashboardSidebarContent>Content Here</DashboardSidebarContent>

        {children}
      </DashboardSidebar>
    </div>
  );
};

export default Layout;
