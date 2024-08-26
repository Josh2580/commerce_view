import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: string;
    discountPrice?: string;
    rating: number;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <div className="mt-2">
          {product.discountPrice && (
            <span className="text-red-500 mr-2 line-through">
              {product.price}
            </span>
          )}
          <span className="text-green-600 font-semibold">
            {product.discountPrice || product.price}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < product.rating ? "text-yellow-500" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.39 2.82 1.03-6-4.37-4.26 6.05-.88L10 0l2.68 5.68 6.05.88-4.37 4.26 1.03 6z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
