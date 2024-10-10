import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

type Props = {};

export const SecondHeader = (props: Props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log(props);

  return (
    <header className="bg-white shadow-md container mx-auto p-3 flex justify-between items-center">
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
    </header>
  );
};
