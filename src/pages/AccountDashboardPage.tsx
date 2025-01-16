// import React from "react";
// import { SidebarMenu } from "../components/SidebarMenu";

// import { Outlet } from "react-router-dom";

// export const AccountDashboardPage: React.FC = () => {
//   return (
//     <div className="container flex ">
//       <SidebarMenu />

//       <Outlet />
//     </div>
//   );
// };

// AccountDashboardPage.tsx
import React from "react";
import { SidebarMenu } from "../components/SidebarMenu";
import { Outlet } from "react-router-dom";

export const AccountDashboardPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SidebarMenu />

      {/* Main Content */}
      <div className="flex-1 overflow-auto md:p-6 ">
        <Outlet />
      </div>
    </div>
  );
};
