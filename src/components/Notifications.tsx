import React, { useState } from "react";
import { FaBell, FaTrash, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface Notification {
  id: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: "1",
    message: "Your order #12345 has been shipped.",
    timestamp: "2024-08-29T10:00:00Z",
    isRead: false,
  },
  {
    id: "2",
    message: "New promotion: 20% off on your next purchase!",
    timestamp: "2024-08-28T14:00:00Z",
    isRead: true,
  },
  {
    id: "3",
    message: "Reminder: Your subscription is about to expire.",
    timestamp: "2024-08-27T09:00:00Z",
    isRead: false,
  },
];

export const Notifications: React.FC = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  const handleMarkAsRead = (id: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <FaBell className="mr-2 text-indigo-600" />
        Notifications
      </h2>

      {/* Notification List */}
      <div className="space-y-4">
        {notifications.length === 0 && (
          <p className="text-gray-500">No notifications available.</p>
        )}
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border rounded-lg shadow-md flex justify-between items-start ${
              notification.isRead
                ? "border-gray-300 bg-gray-100"
                : "border-indigo-600 bg-indigo-50"
            }`}
          >
            <div>
              <p className="font-medium">{notification.message}</p>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(notification.timestamp).toLocaleString()}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {!notification.isRead && (
                <button
                  className="text-green-500 hover:text-green-700"
                  onClick={() => handleMarkAsRead(notification.id)}
                >
                  <FaCheckCircle />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Clear All Notifications Button */}
      {notifications.length > 0 && (
        <div className="text-right mt-6">
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition"
            onClick={handleClearAll}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};
