import React from "react";

interface CartItemProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: string;
    quantity: number;
  };
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  product,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <div className="flex items-center py-4 border-b">
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <div className="mt-2 flex items-center space-x-4">
          <input
            type="number"
            value={product.quantity}
            onChange={(e) =>
              onQuantityChange(product.id, Number(e.target.value))
            }
            className="w-16 p-1 border rounded-lg"
          />
          <span className="text-lg font-semibold">{product.price}</span>
        </div>
      </div>
      <button
        onClick={() => onRemove(product.id)}
        className="ml-4 text-red-500"
      >
        Remove
      </button>
    </div>
  );
};
