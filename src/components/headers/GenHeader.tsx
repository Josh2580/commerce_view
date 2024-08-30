// import React from "react";
// import { Link } from "react-router-dom";
// import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

// export const GenHeader: React.FC = () => {
//   return (
//     <header className="bg-white shadow">
//       <div className="navbar container mx-auto px-4">
//         {/* Logo */}
//         <div className="flex-1">
//           <Link to="/" className="btn btn-ghost normal-case text-xl">
//             <img
//               src="https://via.placeholder.com/150x40?text=Jumia+Clone"
//               alt="Jumia Logo"
//               className="h-10"
//             />
//           </Link>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-none hidden md:block">
//           <div className="form-control">
//             <div className="input-group">
//               <input
//                 type="text"
//                 placeholder="Search…"
//                 className="input input-bordered"
//               />
//               <button className="btn btn-square">
//                 <FaSearch />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* User and Cart Icons */}
//         <div className="flex-none">
//           <div className="dropdown dropdown-end">
//             <Link to="/account" className="btn btn-ghost btn-circle">
//               <FaUser />
//             </Link>
//           </div>
//           <div className="dropdown dropdown-end">
//             <Link to="/cart" className="btn btn-ghost btn-circle">
//               <FaShoppingCart />
//               <span className="badge badge-sm indicator-item">2</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div className="bg-gray-100">
//         <div className="container mx-auto px-4">
//           <nav className="flex justify-center space-x-4 py-2">
//             <Link
//               to="/category/electronics"
//               className="text-gray-700 hover:text-gray-900"
//             >
//               Electronics
//             </Link>
//             <Link
//               to="/category/fashion"
//               className="text-gray-700 hover:text-gray-900"
//             >
//               Fashion
//             </Link>
//             <Link
//               to="/category/home-appliances"
//               className="text-gray-700 hover:text-gray-900"
//             >
//               Home & Appliances
//             </Link>
//             <Link
//               to="/category/beauty"
//               className="text-gray-700 hover:text-gray-900"
//             >
//               Beauty
//             </Link>
//             <Link
//               to="/category/sports"
//               className="text-gray-700 hover:text-gray-900"
//             >
//               Sports
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const GenHeader: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          YourStore
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/categories"
            className="text-gray-700 hover:text-indigo-600"
          >
            Categories
          </Link>
          <Link to="/deals" className="text-gray-700 hover:text-indigo-600">
            Deals
          </Link>
          <Link to="/offers" className="text-gray-700 hover:text-indigo-600">
            Offers
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500" />
          </div>
        </div>

        {/* User Icons */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/account"
            className="text-gray-700 hover:text-indigo-600 flex items-center"
          >
            <FaUserCircle className="text-2xl" />
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-indigo-600 flex items-center"
          >
            <FaShoppingCart className="text-2xl" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-indigo-600"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="p-4 space-y-2">
            <Link
              to="/categories"
              className="block text-gray-700 hover:text-indigo-600"
            >
              Categories
            </Link>
            <Link
              to="/deals"
              className="block text-gray-700 hover:text-indigo-600"
            >
              Deals
            </Link>
            <Link
              to="/offers"
              className="block text-gray-700 hover:text-indigo-600"
            >
              Offers
            </Link>
          </div>
          <div className="p-4 space-y-2 border-t border-gray-200">
            <Link
              to="/account"
              className="block text-gray-700 hover:text-indigo-600"
            >
              Account
            </Link>
            <Link
              to="/cart"
              className="block text-gray-700 hover:text-indigo-600"
            >
              Cart
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
