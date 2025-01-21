import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaBox,
  FaUser,
  FaCog,
  FaBell,
  FaStore,
  FaUsers,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isCollapsed: boolean;
  pathTo: string;
}

interface MenuItem {
  label: string;
  pathTo: string;
  icon: React.ReactNode;
}

const roleBasedMenu: Record<string, MenuItem[]> = {
  buyer: [
    { label: "Dashboard", pathTo: "/dashboard", icon: <FaHome /> },
    { label: "Orders", pathTo: "/orders", icon: <FaBox /> },
    { label: "Profile", pathTo: "/profile", icon: <FaUser /> },
    { label: "Notifications", pathTo: "/notifications", icon: <FaBell /> },
    { label: "Settings", pathTo: "/settings", icon: <FaCog /> },
  ],
  seller: [
    { label: "Dashboard", pathTo: "/dashboard", icon: <FaHome /> },
    { label: "Products", pathTo: "/products", icon: <FaBox /> },
    {
      label: "Store Management",
      pathTo: "/store-management",
      icon: <FaStore />,
    },
    { label: "Orders", pathTo: "/orders", icon: <FaBox /> },
    { label: "Profile", pathTo: "/profile", icon: <FaUser /> },
    { label: "Notifications", pathTo: "/notifications", icon: <FaBell /> },
    { label: "Settings", pathTo: "/settings", icon: <FaCog /> },
  ],
  storeOwner: [
    { label: "Dashboard", pathTo: "/dashboard", icon: <FaHome /> },
    { label: "Store Analytics", pathTo: "/analytics", icon: <FaChartBar /> },
    { label: "Products", pathTo: "/products", icon: <FaBox /> },
    { label: "Orders", pathTo: "/orders", icon: <FaBox /> },
    { label: "Staff Management", pathTo: "/staff", icon: <FaUsers /> },
    { label: "Notifications", pathTo: "/notifications", icon: <FaBell /> },
    { label: "Settings", pathTo: "/settings", icon: <FaCog /> },
  ],
  admin: [
    { label: "Admin Dashboard", pathTo: "/admin", icon: <FaHome /> },
    { label: "User Management", pathTo: "/users", icon: <FaUsers /> },
    { label: "Store Approvals", pathTo: "/store-approvals", icon: <FaStore /> },
    { label: "Reports", pathTo: "/reports", icon: <FaChartBar /> },
    { label: "Notifications", pathTo: "/notifications", icon: <FaBell /> },
    { label: "Settings", pathTo: "/settings", icon: <FaCog /> },
  ],
};

export const SidebarMenuSecond: React.FC<{ role: string }> = ({ role }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Handle resizing for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 768); // Collapse on small screens
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = roleBasedMenu[role] || [];

  return (
    <aside
      className={classNames(
        "bg-gray-800 text-white h-full flex flex-col transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className={classNames(
            "rounded-full transition-all duration-300",
            isCollapsed ? "w-8 h-8" : "w-12 h-12"
          )}
        />
        {!isCollapsed && (
          <span className="ml-4 text-lg font-bold">Welcome</span>
        )}
        <button
          onClick={toggleCollapse}
          className="ml-auto btn btn-square btn-sm"
        >
          {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 mt-4 space-y-2">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            isCollapsed={isCollapsed}
            pathTo={item.pathTo}
          />
        ))}
      </nav>

      {/* Logout */}
      <div className="p-2">
        <SidebarItem
          icon={<FaSignOutAlt />}
          label="Logout"
          isCollapsed={isCollapsed}
          pathTo="/logout"
        />
      </div>
    </aside>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  isCollapsed,
  pathTo,
}) => {
  return (
    <Link
      to={pathTo}
      className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-all"
    >
      <div className="text-lg">{icon}</div>
      {!isCollapsed && <span className="ml-4 font-medium">{label}</span>}
    </Link>
  );
};
