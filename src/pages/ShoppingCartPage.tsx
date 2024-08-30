import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { CartSummary } from "../components/CartSummary";
import { PriceSummary } from "../components/PriceSummary";

export const ShoppingCartPage: React.FC = () => {
  return (
    <div className="container mx-auto py-6">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row mt-6">
        <CartSummary />
        <PriceSummary />
      </div>
    </div>
  );
};

// import React from "react";
// import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { CartItem } from "./types"; // Assuming you have a CartItem type defined somewhere

// const Cart: React.FC<{
//   items: CartItem[];
//   onUpdateQuantity: (id: string, quantity: number) => void;
//   onRemoveItem: (id: string) => void;
// }> = ({ items, onUpdateQuantity, onRemoveItem }) => {
//   const calculateTotal = () => {
//     return items
//       .reduce((total, item) => total + item.price * item.quantity, 0)
//       .toFixed(2);
//   };

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

//       {/* Cart Items */}
//       <div className="flex flex-col space-y-4">
//         {items.map((item) => (
//           <div
//             key={item.id}
//             className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg p-4"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full sm:w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
//             />
//             <div className="flex-1">
//               <h3 className="text-xl font-semibold">{item.name}</h3>
//               <p className="text-lg font-medium text-gray-700">
//                 ${item.price.toFixed(2)}
//               </p>
//               <div className="flex items-center mt-4">
//                 <button
//                   className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
//                   onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
//                   disabled={item.quantity === 1}
//                 >
//                   <FaMinus />
//                 </button>
//                 <span className="mx-4 text-lg">{item.quantity}</span>
//                 <button
//                   className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
//                   onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
//                 >
//                   <FaPlus />
//                 </button>
//                 <button
//                   className="ml-4 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//                   onClick={() => onRemoveItem(item.id)}
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             </div>
//             <div className="mt-4 sm:mt-0 sm:ml-4">
//               <p className="text-lg font-semibold text-gray-900">
//                 ${(item.price * item.quantity).toFixed(2)}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Order Summary */}
//       <div className="mt-8 bg-white shadow-md rounded-lg p-4">
//         <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-lg font-medium">Subtotal</span>
//           <span className="text-lg font-medium">${calculateTotal()}</span>
//         </div>
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-lg font-medium">Shipping</span>
//           <span className="text-lg font-medium">$5.00</span>
//         </div>
//         <div className="flex justify-between items-center border-t pt-4">
//           <span className="text-xl font-bold">Total</span>
//           <span className="text-xl font-bold">
//             ${(parseFloat(calculateTotal()) + 5).toFixed(2)}
//           </span>
//         </div>
//         <Link
//           to="/checkout"
//           className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition block text-center"
//         >
//           Proceed to Checkout
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Cart;
