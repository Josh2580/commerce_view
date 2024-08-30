// import React from "react";
// import { ProfileOverview } from "./ProfileOverview";
// import { QuickActions } from "./QuickActions";
// import { PersonalInformation } from "./PersonalInformation";
// import { PaymentMethods } from "./PaymentMethods";
// import { AddressBook } from "./AddressBook";
// import { AccountSecurity } from "./AccountSecurity";

// export const AccountOverview: React.FC = () => {
//   return (
//     // <div className="container mx-auto p-6">
//     <div className="max-w-full mx-auto p-6">
//       <ProfileOverview />
//       <QuickActions />
//       <PersonalInformation />
//       <PaymentMethods />
//       <AddressBook />
//       <AccountSecurity />
//     </div>
//   );
// };

//////////

// import React from "react";
// import {
//   FaUserCircle,
//   FaShoppingBag,
//   FaWallet,
//   FaStar,
//   FaArrowRight,
// } from "react-icons/fa";

// export const AccountOverview: React.FC = () => {
//   const recentOrders = [
//     { id: "1", date: "2024-08-28", total: "$123.45", status: "Delivered" },
//     { id: "2", date: "2024-08-25", total: "$98.76", status: "In Transit" },
//   ];

//   return (
//     <div className="container mx-auto p-6 bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6">Account Overview</h1>

//       {/* User Profile Information */}
//       <div className="bg-white p-6 shadow-md rounded-lg flex items-center mb-6">
//         <FaUserCircle className="text-6xl text-indigo-600 mr-4" />
//         <div>
//           <h2 className="text-2xl font-semibold">John Doe</h2>
//           <p className="text-gray-600">johndoe@example.com</p>
//         </div>
//       </div>

//       {/* Account Summary */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//         <div className="p-6 bg-white shadow-md rounded-lg flex items-center justify-between">
//           <div>
//             <h3 className="text-xl font-medium">Account Balance</h3>
//             <p className="text-2xl text-gray-700">$1,234.56</p>
//           </div>
//           <FaWallet className="text-green-600 text-3xl" />
//         </div>
//         <div className="p-6 bg-white shadow-md rounded-lg flex items-center justify-between">
//           <div>
//             <h3 className="text-xl font-medium">Loyalty Points</h3>
//             <p className="text-2xl text-gray-700">567</p>
//           </div>
//           <FaStar className="text-yellow-500 text-3xl" />
//         </div>
//       </div>

//       {/* Recent Orders */}
//       <div className="bg-white p-6 shadow-md rounded-lg mb-6">
//         <h3 className="text-2xl font-semibold mb-4">Recent Orders</h3>
//         <div className="space-y-4">
//           {recentOrders.map((order) => (
//             <div
//               key={order.id}
//               className="p-4 border border-gray-200 rounded-lg shadow-sm flex justify-between items-center"
//             >
//               <div>
//                 <p className="font-medium">Order #{order.id}</p>
//                 <p className="text-gray-500">
//                   {order.date} - {order.total}
//                 </p>
//                 <p
//                   className={`text-sm ${
//                     order.status === "Delivered"
//                       ? "text-green-600"
//                       : "text-yellow-600"
//                   }`}
//                 >
//                   {order.status}
//                 </p>
//               </div>
//               <FaArrowRight className="text-gray-400" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Quick Links */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <button className="bg-indigo-600 text-white p-4 rounded-lg shadow-md hover:bg-indigo-700 transition flex items-center justify-between">
//           <span>Manage Orders</span>
//           <FaShoppingBag />
//         </button>
//         <button className="bg-green-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700 transition flex items-center justify-between">
//           <span>Account Settings</span>
//           <FaUserCircle />
//         </button>
//         <button className="bg-yellow-600 text-white p-4 rounded-lg shadow-md hover:bg-yellow-700 transition flex items-center justify-between">
//           <span>View Loyalty Points</span>
//           <FaStar />
//         </button>
//         <button className="bg-red-600 text-white p-4 rounded-lg shadow-md hover:bg-red-700 transition flex items-center justify-between">
//           <span>Payment Methods</span>
//           <FaWallet />
//         </button>
//       </div>
//     </div>
//   );
// };

//////////

import React from "react";
import {
  FaUserCircle,
  FaShoppingBag,
  FaWallet,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

export const AccountOverview: React.FC = () => {
  const recentOrders = [
    { id: "1", date: "2024-08-28", total: "$123.45", status: "Delivered" },
    { id: "2", date: "2024-08-25", total: "$98.76", status: "In Transit" },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Account Overview</h1>

      {/* User Profile Information */}
      <div className="bg-white p-6 shadow-md rounded-lg flex items-center mb-6">
        <FaUserCircle className="text-6xl text-indigo-600 mr-4" />
        <div>
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>
      </div>

      {/* Account Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="p-6 bg-white shadow-md rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-xl font-medium">Account Balance</h3>
            <p className="text-2xl text-gray-700">$1,234.56</p>
          </div>
          <FaWallet className="text-green-600 text-3xl" />
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-xl font-medium">Loyalty Points</h3>
            <p className="text-2xl text-gray-700">567</p>
          </div>
          <FaStar className="text-yellow-500 text-3xl" />
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h3 className="text-2xl font-semibold mb-4">Recent Orders</h3>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="p-4 border border-gray-200 rounded-lg shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="font-medium">Order #{order.id}</p>
                <p className="text-gray-500">
                  {order.date} - {order.total}
                </p>
                <p
                  className={`text-sm ${
                    order.status === "Delivered"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {order.status}
                </p>
              </div>
              <FaArrowRight className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <button className="bg-indigo-600 text-white p-4 rounded-lg shadow-md hover:bg-indigo-700 transition flex items-center justify-between">
          <span>Manage Orders</span>
          <FaShoppingBag />
        </button>
        <button className="bg-green-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700 transition flex items-center justify-between">
          <span>Account Settings</span>
          <FaUserCircle />
        </button>
        <button className="bg-yellow-600 text-white p-4 rounded-lg shadow-md hover:bg-yellow-700 transition flex items-center justify-between">
          <span>View Loyalty Points</span>
          <FaStar />
        </button>
        <button className="bg-red-600 text-white p-4 rounded-lg shadow-md hover:bg-red-700 transition flex items-center justify-between">
          <span>Payment Methods</span>
          <FaWallet />
        </button>
      </div>
    </div>
  );
};
