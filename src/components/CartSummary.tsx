import { FirstCartCard } from "./FirstCartCard";
import { useGetCartQuery } from "../features/cart/cartApi";

export const CartSummary = () => {
  const { data } = useGetCartQuery();
  // console.log(data);

  return (
    <div className=" bg-white my-responsive card-space">
      <div className="flex justify-between">
        <h2 className="batch-head">Cart Summary</h2>
      </div>
      <div className="flex flex-col gap-3 h-full">
        {data?.items.map((product) => (
          <FirstCartCard
            key={product.id}
            cartId={product.id}
            productId={product.product}
            quantity={product.quantity}
            stock={product.product_data.stock}
            name={product.product_data.name}
            oldPrice={10000}
            price={product.product_data.price}
            imageUrl={product.product_data.image}
          />
        ))}
      </div>
    </div>
  );
};
