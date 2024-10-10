import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { LiaFilterSolid } from "react-icons/lia";
import { BiSort } from "react-icons/bi";

export const ThirdHeader: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md container mx-auto p-3 gap-3 flex flex-col justify-between items-center">
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
          <Link to="#" className=" text-gray-700 ">
            <span className="hidden">Search</span>

            <FaSearch size={20} />
          </Link>
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
      <div className=" flex justify-between items-center w-full">
        {/* Left Side  */}

        <div className=" w-fit py-1 px-3 gap-3 cursor-pointer flex rounded-full border border-gray-400 items-center">
          <span className="">Sort</span>
          <BiSort size={20} />
        </div>

        {/* Right side */}
        <div className=" w-fit py-1 px-3 gap-3 cursor-pointer flex rounded-full border border-gray-400 items-center">
          <span className="">Filter</span>
          <LiaFilterSolid size={20} />
        </div>
      </div>
    </header>
  );
};
