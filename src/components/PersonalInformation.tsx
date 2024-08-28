import React from "react";

export const PersonalInformation: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            value="John Doe"
            className="input input-bordered w-full mt-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            value="john.doe@example.com"
            className="input input-bordered w-full mt-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            value="+123 456 7890"
            className="input input-bordered w-full mt-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            value="1985-05-20"
            className="input input-bordered w-full mt-2"
          />
        </div>
      </div>
      <button className="btn btn-primary mt-6">Save Changes</button>
    </div>
  );
};
