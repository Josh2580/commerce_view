import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

export const GenHeader: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="navbar container mx-auto px-4">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img
              src="https://via.placeholder.com/150x40?text=Jumia+Clone"
              alt="Jumia Logo"
              className="h-10"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-none hidden md:block">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn btn-square">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        {/* User and Cart Icons */}
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <Link to="/account" className="btn btn-ghost btn-circle">
              <FaUser />
            </Link>
          </div>
          <div className="dropdown dropdown-end">
            <Link to="/cart" className="btn btn-ghost btn-circle">
              <FaShoppingCart />
              <span className="badge badge-sm indicator-item">2</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-4 py-2">
            <Link
              to="/category/electronics"
              className="text-gray-700 hover:text-gray-900"
            >
              Electronics
            </Link>
            <Link
              to="/category/fashion"
              className="text-gray-700 hover:text-gray-900"
            >
              Fashion
            </Link>
            <Link
              to="/category/home-appliances"
              className="text-gray-700 hover:text-gray-900"
            >
              Home & Appliances
            </Link>
            <Link
              to="/category/beauty"
              className="text-gray-700 hover:text-gray-900"
            >
              Beauty
            </Link>
            <Link
              to="/category/sports"
              className="text-gray-700 hover:text-gray-900"
            >
              Sports
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
