// import { OrderSummary } from "../components/OrderSummary";
// import { Link } from "react-router-dom";
// import { ShippingForm } from "../components/ShippingForm";
// import { PaymentForm } from "../components/PaymentForm";

// export const CheckoutPage = () => {
//   return (
//     <div className="container  mx-auto my-responsive flex flex-col md:flex-row gap-3 md:gap-4">
//       <div className="md:w-2/3 flex flex-col gap-3">
//         <ShippingForm />
//         <PaymentForm />
//         {/* Delivery Address*/}

//         {/* <div className=" p-4 bg-white rounded-lg flex flex-col gap-2 shadow-md">
//           <div className="flex items-center justify-between">
//             <h2 className="my-header-3">Delivery Address</h2>
//             <Link
//               to={"/checkout/shipping-address"}
//               className="text-blue-700 text-end font-semibold"
//             >
//               Change
//             </Link>
//           </div>

//           <div className="flex flex-col gap-1  ">
//             <p className="my-body-2">
//               Name: <span>Full Name Here</span>{" "}
//             </p>
//             <p className="my-body-2">
//               Phone: <span>+123456789000</span>{" "}
//             </p>
//             <p className="my-body-2">
//               Email: <span>user_mail@mail.com</span>{" "}
//             </p>
//             <p className="my-body-2">
//               Address:{" "}
//               <span>User Adress of listed and stated in more details</span>{" "}
//             </p>
//             <p className="my-body-2">
//               Postal Code: <span>Users Postal Code</span>{" "}
//             </p>
//             <p className="my-body-2">
//               City: <span>Users City</span>{" "}
//             </p>
//             <p className="my-body-2">
//               State: <span>Users State</span>{" "}
//             </p>
//             <p className="my-body-2">
//               Country: <span>Users Country if not Nigeris</span>{" "}
//             </p>
//           </div>
//         </div> */}

//         {/* Pay with Card */}

//         {/* <div className=" p-4 bg-white rounded-lg flex flex-col gap-2 shadow-md">
//           <div className="flex items-center justify-between">
//             <h2 className="my-header-3">Payment Method</h2>
//             <Link
//               to={"/checkout/payment"}
//               className="text-blue-700 text-end font-semibold"
//             >
//               Change
//             </Link>
//           </div>

//           <div className="flex items-center justify-between cursor-pointer transition duration-300 ease-in-out">
//             <div className="flex items-center gap-4">
//               <img
//                 src="https://img.icons8.com/color/48/000000/visa.png"
//                 alt="Visa"
//                 className="w-10 h-10"
//               />
//               <div>
//                 <p className="font-semibold text-gray-800">Pay with Card</p>
//                 <p className="text-sm text-gray-500">
//                   Visa, MasterCard, and other major cards
//                 </p>
//               </div>
//             </div>
//             <input
//               // type="text"
//               type="text"
//               name="payment-method"
//               // className="radio radio-primary"
//             />
//           </div>
//         </div> */}
//       </div>

//       {/* Order Summary*/}

//       {/* <div className="flex flex-col gap-4 md:w-1/3">
//         <OrderSummary />

//         <div className="">
//           <button className="my-btn">Place Order</button>
//         </div>
//       </div> */}
//     </div>
//   );
// };

import React, { useState } from "react";

export const CheckoutPage = () => {
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order Submitted:", { shippingDetails, paymentMethod });
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl font-semibold text-center mb-8">Checkout</h1>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col md:flex-row gap-8"
        >
          {/* Shipping Details */}
          <div className="bg-white w-full md:w-2/3  p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
            {/* <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={shippingDetails.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={shippingDetails.address}
                  onChange={handleInputChange}
                  required
                  placeholder="123 Main St"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingDetails.city}
                    onChange={handleInputChange}
                    required
                    placeholder="New York"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={shippingDetails.state}
                    onChange={handleInputChange}
                    required
                    placeholder="NY"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={shippingDetails.zipCode}
                  onChange={handleInputChange}
                  required
                  placeholder="10001"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={shippingDetails.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="(123) 456-7890"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </form> */}

            <div className="  space-y-3">
              <div className="my-checkout-group">
                <input
                  type="text"
                  placeholder="First Name"
                  className="my-input"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="my-input"
                  required
                />
              </div>
              <div className="my-checkout-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="my-input"
                  required
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="my-input"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Address Line 1"
                className="my-input"
                required
              />
              <input
                type="text"
                placeholder="Address Line 2 (Optional)"
                className="my-input"
              />
              <div className="my-checkout-group">
                <input
                  type="text"
                  placeholder="City"
                  className="my-input"
                  required
                />
                <input
                  type="text"
                  placeholder="State/Province/Region"
                  className="my-input"
                  required
                />
              </div>
              <div className="my-checkout-group">
                <input
                  type="text"
                  placeholder="Country"
                  className="my-input"
                  required={false}
                />
                <input
                  type="text"
                  placeholder="Postal/Zip Code"
                  className="my-input"
                  required
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 w-full md:w-1/3 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

            <div className=" mx-auto space-y-4">
              {/* Pay with Card */}
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border hover:shadow-lg cursor-pointer transition duration-300 ease-in-out">
                <div className="flex items-center gap-4">
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="Visa"
                    className="w-10 h-10"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Pay with Card</p>
                    <p className="text-sm text-gray-500">
                      Visa, MasterCard, and other major cards
                    </p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="payment-method"
                  className="radio radio-primary"
                />
              </div>

              {/* Bank Transfer */}
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border hover:shadow-lg cursor-pointer transition duration-300 ease-in-out">
                <div className="flex items-center gap-4">
                  <img
                    src="https://img.icons8.com/fluency/48/000000/bank.png"
                    alt="Bank Transfer"
                    className="w-10 h-10"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Bank Transfer</p>
                    <p className="text-sm text-gray-500">
                      Direct transfer from your bank account
                    </p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="payment-method"
                  className="radio radio-primary"
                />
              </div>

              {/* PayPal */}
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border hover:shadow-lg cursor-pointer transition duration-300 ease-in-out">
                <div className="flex items-center gap-4">
                  <img
                    src="https://img.icons8.com/fluency/48/000000/paypal.png"
                    alt="PayPal"
                    className="w-10 h-10"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">PayPal</p>
                    <p className="text-sm text-gray-500">
                      Pay securely using your PayPal account
                    </p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="payment-method"
                  className="radio radio-primary"
                />
              </div>

              {/* Cryptocurrency (UUID) */}
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border hover:shadow-lg cursor-pointer transition duration-300 ease-in-out">
                <div className="flex items-center gap-4">
                  <img
                    src="https://img.icons8.com/color/48/000000/bitcoin--v1.png"
                    alt="Cryptocurrency"
                    className="w-10 h-10"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Cryptocurrency (UUID)
                    </p>
                    <p className="text-sm text-gray-500">
                      Pay with Bitcoin, Ethereum, and other cryptocurrencies
                    </p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="payment-method"
                  className="radio radio-primary"
                />
              </div>

              {/* Mobile Payment */}
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border hover:shadow-lg cursor-pointer transition duration-300 ease-in-out">
                <div className="flex items-center gap-4">
                  <img
                    src="https://img.icons8.com/fluency/48/000000/google-pay.png"
                    alt="Mobile Payment"
                    className="w-10 h-10"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Mobile Payment
                    </p>
                    <p className="text-sm text-gray-500">
                      Pay with Google Pay, Apple Pay, and more
                    </p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="payment-method"
                  className="radio radio-primary"
                />
              </div>
              <button className="my-btn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
