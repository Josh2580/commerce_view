import React from "react";

export const EstimatedDelivery: React.FC = () => {
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5); // Example: 5 days delivery

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Estimated Delivery Date</h2>
      <p className="text-gray-700">{deliveryDate.toDateString()}</p>
    </div>
  );
};
