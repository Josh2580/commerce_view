import { FirstCartCard } from "./FirstCartCard";
import Product1 from "../assets/product-1.jpg";
import Product2 from "../assets/product-2.jpg";
import Product3 from "../assets/product-3.jpg";
import Product4 from "../assets/product-4.jpg";
// import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: 1,
    name: "Smartphone XYZ just to know that just know is that how to way a be little that how to way a be little ",
    price: "$499",
    image: Product1,
  },
  {
    id: 2,
    name: "Designer Handbag",
    price: "$199",
    image: Product2,
  },
  { id: 3, name: 'LED TV 55"', price: "$699", image: Product3 },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: "$99",
    image: Product4,
  },
];

export const CartSummary = () => {
  return (
    <div className=" bg-white my-responsive card-space">
      <div className="flex justify-between">
        <h2 className="batch-head">Cart Summary</h2>
      </div>
      <div className="flex flex-col gap-3 h-full">
        {featuredProducts.map((product) => (
          // <Link to={`/details/${product.name}/${product.id}`}>
          <FirstCartCard
            key={product.id}
            name={product.name}
            oldPrice={333.55}
            price={222.33}
            imageUrl={product.image}
          />
          // </Link>
        ))}
      </div>
    </div>
  );
};
