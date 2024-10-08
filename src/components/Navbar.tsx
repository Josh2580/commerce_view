import React from "react";
import { Link } from "react-router-dom";
// import { useAppSelector, useAppDispatch } from "../app/store";
// import { logout } from "../features/auth/authSlice";

const Navbar: React.FC = () => {
  //   const dispatch = useAppDispatch();
  //   const user = useAppSelector((state) => state.auth.user);

  //   const handleLogout = () => {
  //     dispatch(logout());
  //   };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg">
          E-Commerce
        </Link>
        <div>
          <Link to="/login" className="text-white">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
