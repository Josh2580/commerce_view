import React from "react";

export const ProductInfo: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
      <h1 className="text-3xl font-semibold mb-4">iPhone 12</h1>
      <div className="flex items-center mb-4">
        <div className="flex items-center space-x-1">
          {[...Array(4)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.39 2.82 1.03-6-4.37-4.26 6.05-.88L10 0l2.68 5.68 6.05.88-4.37 4.26 1.03 6z" />
            </svg>
          ))}
          <svg
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.39 2.82 1.03-6-4.37-4.26 6.05-.88L10 0l2.68 5.68 6.05.88-4.37 4.26 1.03 6z" />
          </svg>
        </div>
        <span className="ml-2 text-gray-500">(120 reviews)</span>
      </div>
      <div className="text-3xl font-semibold text-green-600 mb-4">$899</div>
      <p className="text-sm text-gray-500 mb-4">
        Available: <span className="text-green-500">In Stock</span>
      </p>

      <div className="flex items-center space-x-4 mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          min="1"
          className="w-20 px-2 py-1 border border-gray-300 rounded-lg"
          defaultValue="1"
        />
      </div>

      <div className="flex space-x-4">
        <button className="btn btn-primary w-full md:w-auto">
          Add to Cart
        </button>
        <button className="btn btn-secondary w-full md:w-auto">Buy Now</button>
      </div>

      <div className="mt-4">
        <button className="text-blue-600 hover:underline">
          Add to Wishlist
        </button>
        <button className="ml-4 text-blue-600 hover:underline">Compare</button>
      </div>
    </div>
  );
};
