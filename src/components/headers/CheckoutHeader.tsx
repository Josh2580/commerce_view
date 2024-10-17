import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";

export const CheckoutHeader = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto my-responsive flex justify-between items-end">
        <div className=" flex justify-between items-center w-full">
          {/* Left Side  */}
          <div className="flex justify-center gap-3">
            {/* Brand Logo */}
            <Link to="/" className="text-lg font-semibold text-gray-400">
              Company
            </Link>
          </div>

          {/* Right side */}
          <div className="flex gap-5 items-end md:gap-10">
            <Link
              to="/account"
              className=" text-gray-600 flex flex-col items-center "
            >
              <HiOutlineUser className=" my-icons" />
              <span className="hidden lg:flex my-header-4">Account</span>
            </Link>

            <Link to="#" className=" text-gray-600 flex flex-col items-center ">
              <IoHeartOutline className=" my-icons" size={20} />

              <span className="hidden lg:flex my-header-4">Saved</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
