import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { BiSort } from "react-icons/bi";
import { LiaFilterSolid } from "react-icons/lia";
import { isFilter, isSort } from "../../features/header/headerSlice";

export const FirstHeader = () => {
  const dispatch = useDispatch();

  const searchIcon = useSelector((state: any) => state.header.searchIcon);
  const searchBar = useSelector((state: any) => state.header.searchBar);
  const sortFilterIcon = useSelector(
    (state: any) => state.header.sortFilterIcon
  );
  const isCurrentFilter = useSelector((state: any) => state.header.isFilter);
  const isCurrentSort = useSelector((state: any) => state.header.isSort);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const FilterHandler = () => {
    dispatch(isFilter(!isCurrentFilter));
  };

  const SortHandler = () => {
    dispatch(isSort(!isCurrentSort));
  };

  useEffect(() => {
    dispatch(isFilter(false));
    dispatch(isSort(false));
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto my-responsive flex justify-between items-center">
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
              <IoIosSearch className="absolute right-6  text-gray-500" />
            </div>

            {/* Right side */}
            <div className="flex gap-5 items-end md:gap-10">
              {searchIcon && (
                <Link
                  to="/account"
                  className="lg:hidden text-gray-600 flex flex-col items-center "
                >
                  <IoIosSearch className=" my-icons" />
                  <span className="hidden lg:flex my-header-4">Search</span>
                </Link>
              )}

              <Link
                to="/account"
                className=" text-gray-600 flex flex-col items-center "
              >
                <HiOutlineUser className=" my-icons" />
                <span className="hidden lg:flex my-header-4">Account</span>
              </Link>
              <Link
                to="/cart"
                className=" text-gray-600 flex flex-col items-center "
              >
                <BsCart3 className=" my-icons" size={20} />

                <span className="hidden lg:flex my-header-4">Cart</span>
              </Link>
              <Link
                to="/cart"
                className=" text-gray-600 flex flex-col items-center "
              >
                <IoHeartOutline className=" my-icons" size={20} />

                <span className="hidden lg:flex my-header-4">Saved</span>
              </Link>
            </div>
          </div>
          {/* Search Bar */}

          {searchBar && (
            <div className="relative lg:hidden bg-transparent w-full flex justify-between items-center">
              <input
                type="text"
                placeholder="Search Products, Stores, Categories... now now"
                className="w-full  py-1 px-3 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <IoIosSearch className="absolute right-3 top-3 text-gray-500" />
            </div>
          )}

          {/* Sort Filter Icon */}
          {sortFilterIcon && (
            <div className="lg:hidden flex justify-between items-center w-full">
              {/* Left Side  */}

              <div
                onClick={() => SortHandler()}
                className=" w-fit py-1 px-3 gap-3 cursor-pointer flex rounded-full border border-gray-400 items-center"
              >
                <span className="">Sort</span>
                <BiSort size={20} />
              </div>

              {/* Right side */}
              <div
                onClick={() => FilterHandler()}
                className=" w-fit py-1 px-3 gap-3 cursor-pointer flex rounded-full border border-gray-400 items-center"
              >
                <span className="">Filter</span>
                <LiaFilterSolid size={20} />
              </div>
            </div>
          )}
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
