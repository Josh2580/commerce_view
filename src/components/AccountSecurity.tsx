import React from "react";

export const AccountSecurity: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h3 className="text-xl font-semibold mb-4">Account Security</h3>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-gray-700">Current Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="input input-bordered w-full mt-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="input input-bordered w-full mt-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Confirm New Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="input input-bordered w-full mt-2"
          />
        </div>
      </div>
      <button className="btn btn-primary mt-6">Update Password</button>
    </div>
  );
};
