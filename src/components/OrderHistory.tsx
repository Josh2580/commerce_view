import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Order {
  id: string;
  date: string;
  status: string;
  total: string;
  items: {
    name: string;
    price: string;
    quantity: number;
    imageUrl: string;
  }[];
}

const orders: Order[] = [
  {
    id: "123456789",
    date: "2023-08-10",
    status: "Delivered",
    total: "$150.00",
    items: [
      {
        name: "Wireless Headphones",
        price: "$50.00",
        quantity: 2,
        imageUrl: "https://via.placeholder.com/50",
      },
      {
        name: "Smart Watch",
        price: "$50.00",
        quantity: 1,
        imageUrl: "https://via.placeholder.com/50",
      },
    ],
  },
  {
    id: "987654321",
    date: "2023-07-15",
    status: "Shipped",
    total: "$200.00",
    items: [
      {
        name: "Laptop",
        price: "$200.00",
        quantity: 1,
        imageUrl: "https://via.placeholder.com/50",
      },
    ],
  },
];

export const OrderHistory: React.FC = () => {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Order History</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-medium">Order #{order.id}</p>
                <p className="text-sm text-gray-500">{order.date}</p>
                <p
                  className={`text-sm font-semibold mt-2 ${
                    order.status === "Delivered"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {order.status}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">{order.total}</p>
                <button
                  className="text-blue-500 hover:underline mt-2 flex items-center"
                  onClick={() => toggleOrderDetails(order.id)}
                >
                  {expandedOrderId === order.id
                    ? "Hide Details"
                    : "View Details"}
                  {expandedOrderId === order.id ? (
                    <FaChevronUp className="ml-1" />
                  ) : (
                    <FaChevronDown className="ml-1" />
                  )}
                </button>
              </div>
            </div>

            {/* Expanded Order Details */}
            {expandedOrderId === order.id && (
              <div className="mt-4 border-t pt-4">
                <h3 className="text-lg font-semibold">Items Purchased</h3>
                <div className="space-y-2 mt-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover mr-4"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          {item.quantity} x {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    <strong>Shipping Address:</strong> 123 Main St, Springfield,
                    USA
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    <strong>Payment Method:</strong> Credit Card ending in 1234
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// export default OrderHistory;
