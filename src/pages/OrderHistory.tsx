import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { Admin, ListGuesser, Resource } from "react-admin";
// import { usePaymentTransactionsQuery } from "../features/payment/paymentApi";
// import dataProvider from "../components/dashboard/dataProvider";
import { CustomCellRendererProps } from "ag-grid-react";
import AgGridTable from "../components/AgGridTable";
import { useGetOrderQuery } from "../features/orders/orderApi";

interface OrderInterface {
  id: string;
  status: string;
  total: string;
  order_id: string;
  updated_at: string;
  items: {
    name: string;
    price: string;
    quantity: number;
    imageUrl: string;
  }[];
}

const orders: OrderInterface[] = [
  {
    id: "123456789",
    order_id: "rderalkjl alksgkalgjkla g",
    updated_at: "2023-08-10",
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
    order_id: "rderal1212kkjlkmkjl alksgkalgjkla g",

    updated_at: "2023-07-15",
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
  const [orderData, setOrderData] = useState<[]>([]);

  const { data, isSuccess } = useGetOrderQuery(undefined);
  console.log(data);

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  useEffect(() => {
    {
      isSuccess && setOrderData(data);
    }
  }, [data]);

  const MyDateHandler = (myDate: string) => {
    // console.log(myDate);

    const iDate = new Date(myDate);

    const FullDate = `${iDate.getDate()} ${"-"} ${iDate.getMonth()} ${"-"} ${iDate.getFullYear()}`;
    // console.log(FullDate);
    return FullDate;
  };

  const [colDefs2, setColDefs2] = useState([
    { field: "order_id" },

    {
      headerName: "Payment Status",
      valueGetter: (p: any) => p.data.latest_transaction.status,
    },
    { field: "total" },
    {
      headerName: "Date",
      valueGetter: (p: any) => MyDateHandler(p.data.updated_at),
    },
    {
      headerName: "Delivery Status",
      valueGetter: (p: any) => p.data.status,
    },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Order History</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-medium">Order #{order.id}</p>
                <p className="text-sm text-gray-500">{order.updated_at}</p>
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

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border-gray-300">
              <th>S/N</th>
              <th>Order ID</th>
              <th>Payment Status</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivery Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {orderData.map((order: any, index: any) => (
              <tr key={index} className="border-gray-200">
                <th className="text-blue-700 hover:underline hover:text-blue-600 ">
                  {index + 1}
                </th>
                <td className="truncate">{order.order_id}</td>
                <td>{order.status}</td>
                <td>{MyDateHandler(String(order.updated_at))}</td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        // define a height because the Data Grid will fill the size of the parent container
        style={{ height: 300 }}
      >
        <AgGridTable
          rowData={orders as OrderInterface[]}
          columnDefs={[
            {
              field: "order_id",
              headerName: "Order Id",
            },
            {
              field: "total",
              headerName: "Total",
            },
            {
              field: "status",
              headerName: "Status",
              cellRenderer: StatusCellRenderer,
            },
            {
              field: "items",
              headerName: "Status",
              cellRenderer: StatusCellRenderer,
            },
          ]}
        />
      </div>
    </div>
  );
};

const StatusCellRenderer = ({
  node,
}: CustomCellRendererProps<OrderInterface>) => {
  if (!node.data) return null;

  if (!node.data) return null;

  const variant = () => {
    if (!node.data) return "text-gray-500";
    switch (node.data.status.toLowerCase()) {
      case "shipped":
        return "text-orange-400";
      case "delivered":
        return "text-green-500";
      case "declined":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex items-center h-full">
      <p className={`truncate text-sm font-medium capitalize ${variant()}`}>
        {node.data.status}
      </p>
    </div>
  );
};

// export default OrderHistory;
