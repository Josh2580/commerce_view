import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import {
  useUpdateCartItemMutation,
  useRemoveCartItemMutation,
} from "../features/cart/cartApi";
import { Link } from "react-router-dom";

type Props = {
  cartId: number;
  productId: number;
  name: string;
  price: number;
  oldPrice?: number;
  quantity: number;
  stock: number;
  size?: string;
  color?: string;
  imageUrl: string;
  // key: number;
};

export const FirstCartCard = (product: Props) => {
  const [updateCartItemApi] = useUpdateCartItemMutation();
  const [removeCartItemApi] = useRemoveCartItemMutation();
  // console.log(product);

  const [CartId, SetCartId] = useState<number>(product.cartId);
  const [ProductId, SetProductId] = useState<number>(product.productId);

  const UpdateCartItemHandler = async (value: number) => {
    if (!CartId) {
      console.error("CartId is not defined!");
      return;
    }

    const formData = new FormData();
    formData.append("quantity", value.toString());
    formData.append("product", ProductId.toString());

    try {
      await updateCartItemApi({
        cartItem: formData,
        cartItemId: CartId, // Ensure this value is valid
      });

      // console.log("Update cart result: ", result);
    } catch (error) {
      console.error("Failed to update cart item");
    }
  };

  const RemoveCartItemHandler = async () => {
    if (!CartId) {
      console.error("CartId is not defined!");
      return;
    }
    try {
      await removeCartItemApi({
        cartItemId: CartId, // Ensure this value is valid
      });
    } catch (error) {
      console.error("Failed to update cart item");
    }
  };

  useEffect(() => {
    SetCartId(product.cartId);
    SetProductId(product.productId);
  }, []);

  return (
    // <div className="container h-full bg-white">
    <div className=" h-full p-3 shadow flex gap-3 rounded overflow-hidden">
      <div className="w-24 flex flex-col gap-2 ">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-40 object-cover aspect-square"
        />

        <p
          onClick={RemoveCartItemHandler}
          className="product-name-2 font-medium text-red-600 hover:cursor-pointer"
        >
          Remove
        </p>
      </div>
      <div className="h-full w-full flex flex-col gap-2">
        <div className="flex flex-col items-start justify-between h-20 w-full">
          <h3 className="product-name-2 ">{product.name}</h3>
          <span className="product-price">{product.price}</span>{" "}
          {product.size && (
            <span className="product-name text-gray-400">
              Size {product.price} Color
            </span>
          )}
        </div>
        {/* Quantity */}
        <div className="w-full flex justify-between">
          <div className="w-1/2 flex items-center gap-4">
            <label
              className="text-xl text-gray-600 font-medium"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <select
              id="quantity"
              value={product.quantity}
              onChange={(e) => UpdateCartItemHandler(Number(e.target.value))} // Update state with the selected value
              className=" w-full bg-transparent border my-body-2 focus:outline-none focus:border-blue-800"
            >
              {/* <option>Select Quantity</option> */}

              {[...Array(product.stock)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {" "}
                  {/* Set the value of each option */}
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <p className="flex gap-2">
            {" "}
            <span className=" product-name-2">Save Item </span>{" "}
            <IoHeartOutline />
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};
