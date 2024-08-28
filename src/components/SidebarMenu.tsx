import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SidebarMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 space-y-6 px-4 py-6 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="text-white focus:outline-none md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <nav className="space-y-2">
        <Link
          to="/account/overview"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Account Overview
        </Link>
        <Link
          to="/account/orders"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Order History
        </Link>
        <Link
          to="/account/settings"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Profile Settings
        </Link>
        <Link
          to="/account/addresses"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Address Book
        </Link>
        <Link
          to="/account/payment-methods"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Payment Methods
        </Link>
        <Link
          to="/account/wishlist"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Wishlist
        </Link>
        <Link
          to="/account/loyalty"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Loyalty Programs
        </Link>
        <Link
          to="/account/notifications"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Notifications
        </Link>
        <Link to="/logout" className="block p-2 rounded hover:bg-gray-700">
          Logout
        </Link>
      </nav>
    </div>
  );
};
