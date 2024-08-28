import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between md:hidden">
      <Link to="/" className="text-2xl font-bold">
        Logo
      </Link>
      <div className="flex items-center space-x-4">
        <button className="btn btn-primary">Notifications</button>
        <button className="btn btn-primary">Profile</button>
      </div>
    </header>
  );
};
