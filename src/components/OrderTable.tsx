import React, { useState, useEffect } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useGetOrderQuery } from "../features/orders/orderApi";

// Define TypeScript Types
type NestedData = {
  id: number;
  price: string;
  product: {
    name: string;
    image_url: string | null;
    price: number;
  };
  quantity: number;
};

type RowData = {
  id: string;
  order_id: string;
  name: string;
  address: string;
  items: NestedData[];
  latest_transaction: {
    status: string;
    created_at: string;
  };
  total: string;
  status: string;
};

// Component
export const OrderTable: React.FC = () => {
  const { data: myData, isSuccess } = useGetOrderQuery(undefined);
  const [data, setData] = useState<RowData[]>([]);
  const [expandedRow, setExpandedRow] = useState<RowData | null>(null);

  useEffect(() => {
    if (isSuccess && myData && myData.length > 0) {
      setData(myData);
    }
  }, [myData, isSuccess]);

  const columns: ColumnDef<RowData>[] = [
    {
      accessorKey: "id",
      header: "S/N",
      cell: ({ row }) => <span>{row.index + 1}</span>,
    },
    {
      accessorKey: "order_id",
      header: "Order ID",
      cell: ({ getValue, row }) => (
        <span
          className="cursor-pointer text-blue-500 hover:underline my-line-clamp-2"
          onClick={() => setExpandedRow(row.original)}
        >
          {getValue<string>()}
        </span>
      ),
    },
    {
      accessorKey: "latest_transaction.created_at",
      header: "Date",
      cell: ({ getValue }) => (
        <span>{new Date(getValue<string>()).toLocaleDateString()}</span>
      ),
    },
    {
      accessorKey: "status",
      header: "Order Status",
    },
    {
      accessorKey: "latest_transaction.status",
      header: "Payment Status",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="p-3 border-b border-gray-300 font-semibold text-gray-600"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50 transition"
                onClick={() => setExpandedRow(row.original)}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 border-b border-gray-300">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {expandedRow && (
        <div className="modal modal-open">
          <div className="modal-box max-w-4xl">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setExpandedRow(null)}
            >
              ✕
            </button>
            <h3 className="text-lg font-bold">Order Details</h3>
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold text-gray-700">Order Info</h4>
                <p>
                  <strong>Order ID:</strong> {expandedRow.order_id}
                </p>
                <p>
                  <strong>Status:</strong> {expandedRow.status}
                </p>
                <p>
                  <strong>Total:</strong> ${expandedRow.total}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Payment Details</h4>
                <p>
                  <strong>Payment Status:</strong>{" "}
                  {expandedRow.latest_transaction.status}
                </p>
                <p>
                  <strong>Payment Date:</strong>{" "}
                  {new Date(
                    expandedRow.latest_transaction.created_at
                  ).toLocaleDateString()}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">
                  Shipping Address
                </h4>
                <p>{expandedRow.address}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Items Purchased</h4>
                <ul className="divide-y divide-gray-200">
                  {expandedRow.items.map((item) => (
                    <li key={item.id} className="flex items-center py-2">
                      <img
                        src={item.product.image_url || "placeholder.png"}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="ml-4 w-full flex gap-12 justify-between">
                        <div className="sm:flex justify-between w-full">
                          <p className="font-semibold">{item.product.name}</p>
                          <p>
                            <strong>Price:</strong> ${item.product.price}
                          </p>
                        </div>
                        <div className="sm:flex justify-between w-full">
                          <p>
                            <strong>Quantity:</strong> {item.quantity}
                          </p>
                          <p>
                            <strong>Sub Total:</strong> $
                            {item.product.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="modal-backdrop backdrop-blur-sm bg-black/50"></div>
        </div>
      )}
    </div>
  );
};
