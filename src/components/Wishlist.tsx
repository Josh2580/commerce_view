import React from "react";

const wishlistItems = [
  {
    id: "1",
    name: "Smartphone XYZ",
    price: "$699.00",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Laptop ABC",
    price: "$1,299.00",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export const Wishlist: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow-sm flex items-center"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-lg mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-700">{item.price}</p>
              <button className="btn btn-primary mt-2">Add to Cart</button>
              <button className="btn btn-secondary mt-2 ml-2">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// export default Wishlist;
