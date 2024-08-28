import React from "react";

const addresses = [
  {
    id: "1",
    name: "Home Address",
    address: "123 Main Street, Apt 4B, City, Country",
    phone: "+123 456 7890",
  },
  {
    id: "2",
    name: "Office Address",
    address: "456 Office Road, Suite 800, City, Country",
    phone: "+123 987 6543",
  },
];

export const AddressBook: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Address Book</h2>
      <div className="space-y-4">
        {addresses.map((address) => (
          <div key={address.id} className="border p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">{address.name}</h3>
            <p className="text-gray-700">{address.address}</p>
            <p className="text-gray-700">Phone: {address.phone}</p>
            <div className="mt-4">
              <button className="btn btn-secondary mr-2">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
        <button className="btn btn-primary mt-4">Add New Address</button>
      </div>
    </div>
  );
};
