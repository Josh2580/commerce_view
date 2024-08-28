import React from "react";

export const QuickActions: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <button className="btn btn-primary w-full">Order History</button>
      <button className="btn btn-primary w-full">Manage Addresses</button>
      <button className="btn btn-primary w-full">Payment Methods</button>
      <button className="btn btn-primary w-full">Account Security</button>
    </div>
  );
};
