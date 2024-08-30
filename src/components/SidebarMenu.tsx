import React, { useState } from "react";
import {
  FaHome,
  FaBell,
  FaBox,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const SidebarMenu: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-gray-800 text-white h-full p-4 flex flex-col justify-between transition-width duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className={`rounded-full object-cover transition-all duration-300 ${
              isCollapsed ? "w-10 h-10" : "w-12 h-12"
            }`}
          />
          {!isCollapsed && (
            <span className="ml-4 text-lg font-semibold">John Doe</span>
          )}
          <button
            onClick={toggleCollapse}
            className="ml-auto text-gray-400 hover:text-white transition-colors"
          >
            {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
          </button>
        </div>
        {/* Navigation */}
        <nav className="mt-10">
          <SidebarItem
            icon={<FaHome />}
            label="Dashboard"
            isCollapsed={isCollapsed}
            pathTo="overview"
          />
          <SidebarItem
            icon={<FaBox />}
            label="Orders"
            isCollapsed={isCollapsed}
            pathTo="orders"
          />
          <SidebarItem
            icon={<FaUser />}
            label="Account"
            isCollapsed={isCollapsed}
            subMenuItems={[
              { subLabel: "Profile", subPath: "" },
              { subLabel: "Address Book", subPath: "addresses" },
              { subLabel: "Payment Methods", subPath: "payment-methods" },
              { subLabel: "Security", subPath: "security" },
            ]}
          />
          <SidebarItem
            icon={<FaCog />}
            label="Settings"
            isCollapsed={isCollapsed}
            pathTo="settings"
          />
          <SidebarItem
            icon={<FaBell />}
            label="Notifications"
            isCollapsed={isCollapsed}
            pathTo="notifications"
          />
        </nav>
      </div>
      {/* Logout */}
      <div className="mt-auto">
        <SidebarItem
          icon={<FaSignOutAlt />}
          label="Logout"
          isCollapsed={isCollapsed}
          pathTo=""
        />
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isCollapsed: boolean;
  subMenuItems?: {}[];
  pathTo?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  isCollapsed,
  subMenuItems,
  pathTo,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div
        className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors ${
          isOpen && "bg-gray-700"
        }`}
        onClick={() => subMenuItems && setIsOpen(!isOpen)}
      >
        {/* <Link to={pathTo}>{icon}</Link> */}
        {pathTo ? <Link to={pathTo}>{icon}</Link> : icon}

        {!isCollapsed && (
          <span className="ml-4 font-medium">
            {" "}
            {/* <Link to={pathTo}> {label}</Link> */}
            {pathTo ? <Link to={pathTo}>{label}</Link> : label}
          </span>
        )}
        {subMenuItems && (
          <span className="ml-auto">
            {isOpen ? (
              <FiChevronRight className="transform rotate-90 transition-transform" />
            ) : (
              <FiChevronRight />
            )}
          </span>
        )}
      </div>
      {!isCollapsed && isOpen && subMenuItems && (
        <div className="ml-8 mt-2">
          {subMenuItems.map((item: any, idx) => (
            <div
              key={idx}
              className="text-gray-400 py-1 pl-2 hover:text-white cursor-pointer transition-colors"
            >
              <Link to={item.subPath}>{item.subLabel}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
