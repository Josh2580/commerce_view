import React from "react";
import {
  FaChartLine,
  FaShoppingCart,
  FaUsers,
  FaCog,
  FaBell,
} from "react-icons/fa";

export const DashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Overview Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="p-6 bg-white shadow-md rounded-lg flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Total Sales</h2>
            <p className="text-xl text-gray-700">$12,345</p>
          </div>
          <FaChartLine className="text-indigo-600 text-3xl" />
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Orders</h2>
            <p className="text-xl text-gray-700">567</p>
          </div>
          <FaShoppingCart className="text-green-600 text-3xl" />
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Users</h2>
            <p className="text-xl text-gray-700">1,234</p>
          </div>
          <FaUsers className="text-blue-600 text-3xl" />
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">System Status</h2>
            <p className="text-xl text-gray-700">All Systems Operational</p>
          </div>
          <FaCog className="text-red-600 text-3xl" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <button className="bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition flex items-center space-x-2">
            <FaChartLine />
            <span>View Reports</span>
          </button>
          <button className="bg-green-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700 transition flex items-center space-x-2">
            <FaShoppingCart />
            <span>Create Order</span>
          </button>
          <button className="bg-purple-600 text-white p-4 rounded-lg shadow-md hover:bg-purple-700 transition flex items-center space-x-2">
            <FaUsers />
            <span>Manage Users</span>
          </button>
          <button className="bg-gray-600 text-white p-4 rounded-lg shadow-md hover:bg-gray-700 transition flex items-center space-x-2">
            <FaCog />
            <span>Settings</span>
          </button>
          <button className="bg-yellow-600 text-white p-4 rounded-lg shadow-md hover:bg-yellow-700 transition flex items-center space-x-2">
            <FaBell />
            <span>Notifications</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
            <p className="font-medium">New Order Received</p>
            <p className="text-gray-500">
              You have received a new order from customer XYZ.
            </p>
            <p className="text-sm text-gray-400">1 hour ago</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
            <p className="font-medium">System Update</p>
            <p className="text-gray-500">
              The system has been updated to the latest version.
            </p>
            <p className="text-sm text-gray-400">2 hours ago</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
            <p className="font-medium">Maintenance Scheduled</p>
            <p className="text-gray-500">
              Scheduled maintenance will occur tomorrow at 2 AM.
            </p>
            <p className="text-sm text-gray-400">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};
