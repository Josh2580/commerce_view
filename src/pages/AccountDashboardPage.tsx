import React from "react";
import { SidebarMenu } from "../components/SidebarMenu";

import { Outlet } from "react-router-dom";

export const AccountDashboardPage: React.FC = () => {
  return (
    <div className="container flex">
      <SidebarMenu />

      <Outlet />
    </div>
  );
};
