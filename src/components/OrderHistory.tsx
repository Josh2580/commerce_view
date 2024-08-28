import React from "react";

const orders = [
  {
    orderId: "123456",
    date: "2024-08-20",
    status: "Delivered",
    total: "$150.00",
  },
  {
    orderId: "123457",
    date: "2024-08-15",
    status: "Shipped",
    total: "$250.00",
  },
  // More orders...
];

export const OrderHistory: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      <div>
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="border-b py-4 flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">Order #{order.orderId}</h3>
              <p className="text-gray-700">Date: {order.date}</p>
              <p className="text-gray-700">Status: {order.status}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">{order.total}</p>
              <button className="btn btn-link text-blue-500">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
