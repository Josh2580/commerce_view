import React from "react";

export const ProfileSettings: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};
