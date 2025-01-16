import React, { useState, useEffect } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useGetProductsQuery } from "../features/products/productApi";
import { ProductTypeFull } from "../types/ProductTypes";
import ProductImg from "../assets/product-1.jpg";

// Component
export const ProductTable: React.FC = () => {
  const { data: productsData, isSuccess } = useGetProductsQuery(undefined);
  isSuccess && console.log(productsData?.results);

  const [data, setData] = useState<ProductTypeFull[]>([]);
  const [expandedRow, setExpandedRow] = useState<ProductTypeFull | null>(null);

  useEffect(() => {
    if (isSuccess && productsData && productsData.count > 0) {
      setData(productsData.results);
    }
  }, [productsData, isSuccess]);

  const columns: ColumnDef<ProductTypeFull>[] = [
    {
      accessorKey: "id",
      header: "S/N",
      cell: ({ row }) => <span>{row.index + 1}</span>,
    },
    {
      accessorKey: "name",
      header: "Name",
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
      accessorKey: "price",
      header: "Price",
    },
    {
      accessorKey: "created_at",
      header: "Date Added",
      cell: ({ getValue }) => (
        <span>{new Date(getValue<string>()).toLocaleDateString()}</span>
      ),
    },
    {
      accessorKey: "views",
      header: "No of Views",
    },
    {
      accessorKey: "total_sales",
      header: "No of Sales",
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
                <div className="flex flex-col sm:flex-row gap-5">
                  <p className="max-w-lg">
                    <img
                      src={ProductImg}
                      alt={expandedRow.name}
                      className="my-square-image rounded"
                    />
                  </p>

                  <div className=" flex flex-col gap-2">
                    <p>
                      <strong>Product ID:</strong> {expandedRow.product_id}
                    </p>
                    <p>
                      <strong>Name:</strong> {expandedRow.name}
                    </p>
                    <p>
                      <strong>Total Views:</strong> {expandedRow.views}
                    </p>
                    <p>
                      <strong>Total Sales:</strong> ${expandedRow.total_sales}
                    </p>
                    <p>
                      <strong>Old Price:</strong> {expandedRow.old_price}
                    </p>

                    <p>
                      <strong>Price:</strong> {expandedRow.price}
                    </p>
                    <p>
                      <strong>Payment Date:</strong>{" "}
                      {new Date(expandedRow.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">Payment Details</h4>
                <p>
                  <strong>Description:</strong> {expandedRow.description}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">Items Purchased</h4>
                <ul className="divide-y divide-gray-200">
                  {expandedRow.categories.map((item) => (
                    <li key={item} className="flex items-center py-2">
                      {/* <img
                        src={item || "placeholder.png"}
                        alt={item}
                        className="w-16 h-16 object-cover rounded"
                      /> */}
                      <div className="ml-4 w-full flex gap-12 justify-between">
                        <div className="sm:flex justify-between w-full">
                          <p className="font-semibold">{item}</p>
                          <p>
                            <strong>Price:</strong> ${item}
                          </p>
                        </div>
                        <div className="sm:flex justify-between w-full">
                          <p>
                            <strong>Quantity:</strong> {item}
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
