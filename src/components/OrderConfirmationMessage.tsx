import React from "react";

export const OrderConfirmationMessage: React.FC = () => {
  return (
    <div className="text-center py-6">
      <h1 className="text-3xl font-semibold">Thank you for your order!</h1>
      <p className="text-gray-700 mt-2">
        Your order has been successfully placed. A confirmation email has been
        sent to you.
      </p>
    </div>
  );
};
