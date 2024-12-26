import Product1 from "../assets/product-1.jpg";
// import Product2 from "../assets/product-2.jpg";
// import Product3 from "../assets/product-3.jpg";
// import Product4 from "../assets/product-4.jpg";
import { useGetCartQuery } from "../features/cart/cartApi";
import { CheckoutProductCard } from "./CheckoutProductCard";
// import { Link } from "react-router-dom";

export const CheckoutProducts = () => {
  const { data } = useGetCartQuery();
  // console.log(data);

  return (
    <div className=" bg-white my-responsive card-space max-w-3xl">
      <div className="flex flex-col gap-4 h-full">
        {data?.items.map((product) => (
          <CheckoutProductCard
            key={product.id}
            cartId={product.id}
            productId={product.product}
            quantity={product.quantity}
            stock={product.product_data.stock}
            name={product.product_data.name}
            oldPrice={10000}
            price={55555}
            // imageUrl={product.product_data.image}
            imageUrl={Product1}
          />
        ))}
      </div>
    </div>
  );
};
