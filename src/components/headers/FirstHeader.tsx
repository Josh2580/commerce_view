import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

export const FirstHeader: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-3 flex justify-between items-center">
        <div className=" flex  flex-col w-full gap-3">
          <div className=" flex justify-between items-center w-full">
            {/* Left Side  */}
            <div className="flex justify-center gap-3">
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-700 hover:text-indigo-600"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-lg" />
                ) : (
                  <FaBars className="text-lg" />
                )}
              </button>
              {/* Brand Logo */}
              <Link to="/" className="text-lg font-semibold text-gray-400">
                Company
              </Link>
            </div>
            {/* Right side */}
            <div className="flex gap-5">
              <Link to="/account" className=" text-gray-700 ">
                <span className="hidden">Account</span>

                <HiOutlineUser size={20} />
              </Link>
              <Link to="/cart" className=" text-gray-700 ">
                <span className="hidden">Cart</span>
                <BsCart3 size={20} />
              </Link>
            </div>
          </div>
          {/* Search Bar */}

          <div className="bg-transparent w-full flex justify-between items-center">
            <input
              type="text"
              placeholder="Search Products, Stores, Categories.."
              className="w-full  py-1 px-3 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500" />
          </div>
        </div>

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
            <HiOutlineUser className="text-2xl" />
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-indigo-600 flex items-center"
          >
            <BsCart3 className="text-2xl" />
          </Link>
        </div>
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
