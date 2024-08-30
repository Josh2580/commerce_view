import React, { useState } from "react";
import { FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";

interface Address {
  id: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  isDefault: boolean;
}

const initialAddresses: Address[] = [
  {
    id: "1",
    name: "John Doe",
    phone: "+123456789",
    address: "123 Main St",
    city: "Springfield",
    state: "IL",
    zip: "62704",
    isDefault: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    phone: "+987654321",
    address: "456 Oak St",
    city: "Metropolis",
    state: "NY",
    zip: "10001",
    isDefault: false,
  },
];

export const AddressBook: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  const handleSetDefault = (id: string) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((address) =>
        address.id === id
          ? { ...address, isDefault: true }
          : { ...address, isDefault: false }
      )
    );
  };

  const handleDelete = (id: string) => {
    setAddresses((prevAddresses) =>
      prevAddresses.filter((address) => address.id !== id)
    );
  };

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
  };

  const handleSave = () => {
    if (editingAddress) {
      setAddresses((prevAddresses) =>
        prevAddresses.map((address) =>
          address.id === editingAddress.id ? editingAddress : address
        )
      );
      setEditingAddress(null);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Address Book</h2>

      {/* Address List */}
      <section className="mb-8">
        <h3 className="text-xl font-medium mb-4">Saved Addresses</h3>
        <div className="space-y-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className={`p-4 border rounded-lg flex justify-between items-start ${
                address.isDefault ? "border-indigo-600" : "border-gray-300"
              }`}
            >
              <div>
                <p className="font-medium">{address.name}</p>
                <p className="text-sm text-gray-500">{address.phone}</p>
                <p className="text-sm text-gray-500">
                  {address.address}, {address.city}, {address.state}{" "}
                  {address.zip}
                </p>
                {address.isDefault && (
                  <span className="text-xs text-indigo-600 mt-2 inline-block">
                    <FaCheckCircle className="inline mr-1" /> Default Address
                  </span>
                )}
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleEdit(address)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(address.id)}
                >
                  <FaTrash />
                </button>
                {!address.isDefault && (
                  <button
                    className="text-green-500 hover:text-green-700"
                    onClick={() => handleSetDefault(address.id)}
                  >
                    Set as Default
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Edit/Add Address Form */}
      {editingAddress && (
        <section className="mb-8">
          <h3 className="text-xl font-medium mb-4">
            {editingAddress ? "Edit Address" : "Add New Address"}
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={editingAddress.name}
                onChange={(e) =>
                  setEditingAddress({ ...editingAddress, name: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                value={editingAddress.phone}
                onChange={(e) =>
                  setEditingAddress({
                    ...editingAddress,
                    phone: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                value={editingAddress.address}
                onChange={(e) =>
                  setEditingAddress({
                    ...editingAddress,
                    address: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                value={editingAddress.city}
                onChange={(e) =>
                  setEditingAddress({ ...editingAddress, city: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                value={editingAddress.state}
                onChange={(e) =>
                  setEditingAddress({
                    ...editingAddress,
                    state: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ZIP Code
              </label>
              <input
                type="text"
                value={editingAddress.zip}
                onChange={(e) =>
                  setEditingAddress({ ...editingAddress, zip: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </form>
          <div className="text-right mt-6">
            <button
              className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition"
              onClick={handleSave}
            >
              Save Address
            </button>
          </div>
        </section>
      )}

      {/* Add New Address Button */}
      {!editingAddress && (
        <div className="text-right">
          <button
            className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition"
            onClick={() =>
              setEditingAddress({
                id: "",
                name: "",
                phone: "",
                address: "",
                city: "",
                state: "",
                zip: "",
                isDefault: false,
              })
            }
          >
            Add New Address
          </button>
        </div>
      )}
    </div>
  );
};

// export default AddressBook;
