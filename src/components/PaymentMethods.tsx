// import React from "react";

// const paymentMethods = [
//   {
//     id: "1",
//     type: "Visa",
//     lastFour: "1234",
//   },
//   {
//     id: "2",
//     type: "MasterCard",
//     lastFour: "5678",
//   },
// ];

// export const PaymentMethods: React.FC = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
//       <div className="space-y-4">
//         {paymentMethods.map((method) => (
//           <div
//             key={method.id}
//             className="border p-4 rounded-lg shadow-sm flex items-center justify-between"
//           >
//             <div>
//               <p className="text-lg font-semibold">{method.type}</p>
//               <p className="text-gray-700">•••• •••• •••• {method.lastFour}</p>
//             </div>
//             <div>
//               <button className="btn btn-secondary mr-2">Edit</button>
//               <button className="btn btn-danger">Delete</button>
//             </div>
//           </div>
//         ))}
//         <button className="btn btn-primary mt-4">Add New Payment Method</button>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import {
  FaCreditCard,
  FaPaypal,
  FaEdit,
  FaTrash,
  FaCheckCircle,
} from "react-icons/fa";

interface PaymentMethod {
  id: string;
  type: "card" | "paypal";
  name: string;
  details: string;
  isDefault: boolean;
}

const initialMethods: PaymentMethod[] = [
  {
    id: "1",
    type: "card",
    name: "Visa **** 1234",
    details: "Expires 12/24",
    isDefault: true,
  },
  {
    id: "2",
    type: "paypal",
    name: "john.doe@gmail.com",
    details: "",
    isDefault: false,
  },
];

export const PaymentMethods: React.FC = () => {
  const [methods, setMethods] = useState<PaymentMethod[]>(initialMethods);
  const [editingMethod, setEditingMethod] = useState<PaymentMethod | null>(
    null
  );

  const handleSetDefault = (id: string) => {
    setMethods((prevMethods) =>
      prevMethods.map((method) =>
        method.id === id
          ? { ...method, isDefault: true }
          : { ...method, isDefault: false }
      )
    );
  };

  const handleDelete = (id: string) => {
    setMethods((prevMethods) =>
      prevMethods.filter((method) => method.id !== id)
    );
  };

  const handleEdit = (method: PaymentMethod) => {
    setEditingMethod(method);
  };

  const handleSave = () => {
    if (editingMethod) {
      setMethods((prevMethods) =>
        prevMethods.map((method) =>
          method.id === editingMethod.id ? editingMethod : method
        )
      );
      setEditingMethod(null);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Payment Methods</h2>

      {/* Payment Method List */}
      <section className="mb-8">
        <h3 className="text-xl font-medium mb-4">Saved Payment Methods</h3>
        <div className="space-y-4">
          {methods.map((method) => (
            <div
              key={method.id}
              className={`p-4 border rounded-lg flex justify-between items-start ${
                method.isDefault ? "border-indigo-600" : "border-gray-300"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-indigo-600">
                  {method.type === "card" ? (
                    <FaCreditCard size={24} />
                  ) : (
                    <FaPaypal size={24} />
                  )}
                </div>
                <div>
                  <p className="font-medium">{method.name}</p>
                  {method.details && (
                    <p className="text-sm text-gray-500">{method.details}</p>
                  )}
                  {method.isDefault && (
                    <span className="text-xs text-indigo-600 mt-2 inline-block">
                      <FaCheckCircle className="inline mr-1" /> Default Payment
                      Method
                    </span>
                  )}
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleEdit(method)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(method.id)}
                >
                  <FaTrash />
                </button>
                {!method.isDefault && (
                  <button
                    className="text-green-500 hover:text-green-700"
                    onClick={() => handleSetDefault(method.id)}
                  >
                    Set as Default
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Edit/Add Payment Method Form */}
      {editingMethod && (
        <section className="mb-8">
          <h3 className="text-xl font-medium mb-4">
            {editingMethod ? "Edit Payment Method" : "Add New Payment Method"}
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={editingMethod.name}
                onChange={(e) =>
                  setEditingMethod({ ...editingMethod, name: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {editingMethod.type === "card" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Card Details
                </label>
                <input
                  type="text"
                  value={editingMethod.details}
                  onChange={(e) =>
                    setEditingMethod({
                      ...editingMethod,
                      details: e.target.value,
                    })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            )}
          </form>
          <div className="text-right mt-6">
            <button
              className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition"
              onClick={handleSave}
            >
              Save Payment Method
            </button>
          </div>
        </section>
      )}

      {/* Add New Payment Method Button */}
      {!editingMethod && (
        <div className="text-right">
          <button
            className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition"
            onClick={() =>
              setEditingMethod({
                id: "",
                type: "card",
                name: "",
                details: "",
                isDefault: false,
              })
            }
          >
            Add New Payment Method
          </button>
        </div>
      )}
    </div>
  );
};

// export default PaymentMethods;
