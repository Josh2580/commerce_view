import React from "react";
import { Link } from "react-router-dom";

export const Breadcrumb: React.FC = () => {
  return (
    <nav className="bg-gray-100 rounded-md w-full">
      <ol className="list-reset flex">
        <li>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
        </li>
        <li>
          <span className="mx-2 text-gray-500">/</span>
        </li>
        <li>
          <Link
            to="/category/electronics"
            className="text-blue-600 hover:text-blue-800"
          >
            Electronics
          </Link>
        </li>
        <li>
          <span className="mx-2 text-gray-500">/</span>
        </li>
        <li className="text-gray-500">Mobile Phones</li>
      </ol>
    </nav>
  );
};
