import React from "react";

export const ProfileOverview: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover"
      />
      <div>
        <h2 className="text-2xl font-semibold">John Doe</h2>
        <p className="text-gray-500">Gold Member</p>
        <button className="btn btn-sm btn-outline mt-2">Edit Profile</button>
      </div>
    </div>
  );
};
