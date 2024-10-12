import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";

export const FirstHeader: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto my-responisve flex justify-between items-center">
        <div className=" flex  flex-col w-full gap-3">
          <div className=" flex justify-between items-center w-full">
            {/* Left Side  */}
            <div className="flex justify-center gap-3">
              {/* Mobile Menu Button */}
              <button
                className="text-gray-400 hover:text-indigo-600"
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

            {/* Large Screen Search Bar */}

            <div className="relative  hover gap-3 items-center px-3  hidden bg-transparent w-full lg:max-w-lg lg:flex ">
              <input
                type="text"
                placeholder="Search Products, Stores, Categories..."
                className="w-full lg:max-w-2xl py-1 pl-3 pr-9 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <FaSearch className="absolute right-6  text-gray-500" />
            </div>

            {/* Right side */}
            <div className="flex gap-5 items-end md:gap-10">
              <Link
                to="/account"
                className=" text-gray-600 flex flex-col items-center "
              >
                <HiOutlineUser className=" my-icons" />
                <span className="hidden lg:flex body-3">Account</span>
              </Link>
              <Link
                to="/cart"
                className=" text-gray-600 flex flex-col items-center "
              >
                <BsCart3 className=" my-icons" size={20} />

                <span className="hidden lg:flex body-3">Cart</span>
              </Link>
              <Link
                to="/cart"
                className=" text-gray-600 flex flex-col items-center "
              >
                <IoHeartOutline className=" my-icons" size={20} />

                <span className="hidden lg:flex body-3">Saved</span>
              </Link>
            </div>
          </div>
          {/* Search Bar */}

          <div className="relative lg:hidden bg-transparent w-full flex justify-between items-center">
            <input
              type="text"
              placeholder="Search Products, Stores, Categories..."
              className="w-full  py-1 px-3 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="bg-white shadow-md">
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
