import Product1 from "../assets/product-1.jpg";
import Product2 from "../assets/product-2.jpg";
import Product3 from "../assets/product-3.jpg";

export const OrderSummary = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 12",
      image: Product1,
      price: "$899",
      quantity: 1,
    },
    {
      id: 2,
      name: "iPhone 22",
      image: Product2,
      price: "$899",
      quantity: 2,
    },
    {
      id: 3,
      name: "iPhone 32",
      image: Product3,
      price: "$899",
      quantity: 3,
    },
  ];

  const subtotal = 899; // Example value
  const shipping = 10; // Example value
  const discount = 50; // Example value
  const total = subtotal + shipping - discount;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="my-header-3">Order Summary</h2>
      {products.map((product) => (
        <div key={product.id} className="flex justify-between mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div className="flex-1 ml-4">
            <h3 className="font-medium">{product.name}</h3>
            <p>Quantity: {product.quantity}</p>
          </div>
          <span className="text-lg font-semibold">{product.price}</span>
        </div>
      ))}
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Discount</span>
        <span>-${discount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-semibold text-lg mt-4">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};
