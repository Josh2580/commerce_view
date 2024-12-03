import { FirstCartCard } from "./FirstCartCard";
// import Product1 from "../assets/product-1.jpg";
// import Product2 from "../assets/product-2.jpg";
// import Product3 from "../assets/product-3.jpg";
// import Product4 from "../assets/product-4.jpg";
import { useGetCartQuery } from "../features/cart/cartApi";
// import { Link } from "react-router-dom";

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
          // <Link to={`/details/${product.name}/${product.id}`}>
          <FirstCartCard
            key={product.id}
            cartId={product.id}
            productId={product.product}
            quantity={product.quantity}
            stock={product.product_data.stock}
            name={product.product_data.name}
            // oldPrice={product.product_data.old_price}
            oldPrice={10000}
            // price={product.product_data.price}
            price={55555}
            imageUrl={product.product_data.image}
          />
          // </Link>
        ))}
      </div>
    </div>
  );
};
