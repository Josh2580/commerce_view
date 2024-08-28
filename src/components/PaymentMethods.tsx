import React from "react";

const paymentMethods = [
  {
    id: "1",
    type: "Visa",
    lastFour: "1234",
  },
  {
    id: "2",
    type: "MasterCard",
    lastFour: "5678",
  },
];

export const PaymentMethods: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="border p-4 rounded-lg shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-lg font-semibold">{method.type}</p>
              <p className="text-gray-700">•••• •••• •••• {method.lastFour}</p>
            </div>
            <div>
              <button className="btn btn-secondary mr-2">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
        <button className="btn btn-primary mt-4">Add New Payment Method</button>
      </div>
    </div>
  );
};

// export default PaymentMethods;
