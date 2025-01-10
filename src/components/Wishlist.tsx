import React from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

interface WishListItem {
  id: string;
  name: string;
  image: string;
  price: number;
  link: string;
}

const initialWishlist: WishListItem[] = [
  {
    id: "1",
    name: "Smartphone XYZ",
    image: "/images/smartphone.jpg",
    price: 299.99,
    link: "/product/1",
  },
  {
    id: "2",
    name: "Wireless Headphones ABC",
    image: "/images/headphones.jpg",
    price: 199.99,
    link: "/product/2",
  },
];

export const WishList: React.FC = () => {
  const [wishlist, setWishlist] =
    React.useState<WishListItem[]>(initialWishlist);

  const handleRemove = (id: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };

  const handleAddToCart = (id: string) => {
    // Logic to add item to cart
    console.log(`Item with id ${id} added to cart`);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">My Wishlist</h2>

      {/* Wishlist Item List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md">
            <a href={item.link} className="block">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-medium">{item.name}</h3>
            </a>
            <p className="text-indigo-600 font-semibold mt-2 mb-4">
              ${item.price.toFixed(2)}
            </p>
            <div className="flex justify-between items-center">
              <button
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
                onClick={() => handleAddToCart(item.id)}
              >
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleRemove(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// export default WishList;
