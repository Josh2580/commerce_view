import React, { useState } from "react";
import {
  FaLock,
  FaKey,
  FaShieldAlt,
  FaEye,
  FaEyeSlash,
  FaTrash,
} from "react-icons/fa";

export const SecurityPage: React.FC = () => {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [recentActivity] = useState([
    {
      id: "1",
      date: "2024-08-29",
      location: "New York, USA",
      device: "Windows PC",
    },
    {
      id: "2",
      date: "2024-08-28",
      location: "San Francisco, USA",
      device: "MacBook Pro",
    },
  ]);

  const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChangePassword = () => {
    // Logic to change password
    console.log("Password changed");
  };

  const handleToggle2FA = () => {
    setIs2FAEnabled(!is2FAEnabled);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <FaShieldAlt className="mr-2 text-indigo-600" />
        Security
      </h2>

      {/* Password Management */}
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-4 flex items-center">
          <FaLock className="mr-2 text-gray-600" />
          Password Management
        </h3>
        {isChangingPassword ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <button
                className="absolute right-0 top-0 mt-2 mr-2"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
              onClick={handleChangePassword}
            >
              <FaKey className="inline mr-2" /> Change Password
            </button>
          </div>
        ) : (
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded-md shadow-md hover:bg-gray-700 transition"
            onClick={() => setIsChangingPassword(true)}
          >
            Change Password
          </button>
        )}
      </div>

      {/* Two-Factor Authentication (2FA) */}
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-4 flex items-center">
          <FaShieldAlt className="mr-2 text-gray-600" />
          Two-Factor Authentication
        </h3>
        <div className="flex items-center space-x-4">
          <p className="text-gray-700">
            {is2FAEnabled ? "2FA is enabled" : "2FA is not enabled"}
          </p>
          <button
            className={`px-4 py-2 rounded-md shadow-md ${
              is2FAEnabled
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-green-600 text-white hover:bg-green-700"
            } transition`}
            onClick={handleToggle2FA}
          >
            {is2FAEnabled ? "Disable 2FA" : "Enable 2FA"}
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-xl font-medium mb-4 flex items-center">
          <FaLock className="mr-2 text-gray-600" />
          Recent Activity
        </h3>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="p-4 border rounded-lg shadow-md">
              <p className="text-sm text-gray-500">{activity.date}</p>
              <p className="font-medium">{activity.location}</p>
              <p className="text-gray-500">{activity.device}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
