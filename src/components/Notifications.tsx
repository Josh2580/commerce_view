import React from "react";

const notifications = [
  {
    id: "1",
    date: "2024-08-25",
    message: "Your order #123456 has been shipped.",
  },
  {
    id: "2",
    date: "2024-08-20",
    message: "You have a new message from customer support.",
  },
];

export const Notifications: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="border p-4 rounded-lg shadow-sm"
          >
            <p className="text-gray-500 text-sm">{notification.date}</p>
            <p className="text-gray-700">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
