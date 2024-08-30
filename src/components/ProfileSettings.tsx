// import React from "react";

// export const ProfileSettings: React.FC = () => {
//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg mt-6">
//       <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
//       <form className="space-y-4">
//         <input
//           type="text"
//           placeholder="Full Name"
//           className="input input-bordered w-full"
//         />
//         <input
//           type="email"
//           placeholder="Email Address"
//           className="input input-bordered w-full"
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           className="input input-bordered w-full"
//         />
//         <button type="submit" className="btn btn-primary">
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

import React, { useState } from "react";

export const ProfileSettings: React.FC = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("+123456789");
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/100"
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Profile Settings</h2>

      {/* Personal Information Section */}
      <section className="mb-8">
        <h3 className="text-xl font-medium mb-4">Personal Information</h3>
        <div className="flex items-center space-x-6 mb-4">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </section>

      {/* Account Security Section */}
      <section className="mb-8">
        <h3 className="text-xl font-medium mb-4">Account Security</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-700">
              Enable Two-Factor Authentication
            </span>
          </label>
        </div>
      </section>

      {/* Notification Preferences Section */}
      <section className="mb-8">
        <h3 className="text-xl font-medium mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-700">
              Receive Email Notifications
            </span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-700">
              Receive SMS Notifications
            </span>
          </label>
        </div>
      </section>

      {/* Save Button */}
      <div className="text-right">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

// export default ProfileSettings;
