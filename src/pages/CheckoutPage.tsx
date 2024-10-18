import { OrderSummary } from "../components/OrderSummary";
import { Link } from "react-router-dom";

export const CheckoutPage = () => {
  return (
    <div className="container  mx-auto my-responsive flex flex-col md:flex-row gap-3 md:gap-4">
      <div className="md:w-2/3 flex flex-col gap-3">
        {/* Delivery Address*/}

        <div className=" p-4 bg-white rounded-lg flex flex-col gap-2 shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="my-header-3">Delivery Address</h2>
            <Link
              to={"/checkout/shipping-address"}
              className="text-blue-700 text-end font-semibold"
            >
              Change
            </Link>
          </div>

          <div className="flex flex-col gap-1  ">
            <p className="my-body-2">
              Name: <span>Full Name Here</span>{" "}
            </p>
            <p className="my-body-2">
              Phone: <span>+123456789000</span>{" "}
            </p>
            <p className="my-body-2">
              Email: <span>user_mail@mail.com</span>{" "}
            </p>
            <p className="my-body-2">
              Address:{" "}
              <span>User Adress of listed and stated in more details</span>{" "}
            </p>
            <p className="my-body-2">
              Postal Code: <span>Users Postal Code</span>{" "}
            </p>
            <p className="my-body-2">
              City: <span>Users City</span>{" "}
            </p>
            <p className="my-body-2">
              State: <span>Users State</span>{" "}
            </p>
            <p className="my-body-2">
              Country: <span>Users Country if not Nigeris</span>{" "}
            </p>
          </div>
        </div>

        {/* Pay with Card */}

        <div className=" p-4 bg-white rounded-lg flex flex-col gap-2 shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="my-header-3">Payment Method</h2>
            <Link
              to={"/checkout/payment"}
              className="text-blue-700 text-end font-semibold"
            >
              Change
            </Link>
          </div>

          <div className="flex items-center justify-between cursor-pointer transition duration-300 ease-in-out">
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
              // type="text"
              type="text"
              name="payment-method"
              // className="radio radio-primary"
            />
          </div>
        </div>
      </div>

      {/* Order Summary*/}

      <div className="flex flex-col gap-4 md:w-1/3">
        <OrderSummary />

        <div className="">
          <button className="my-btn">Place Order</button>
        </div>
      </div>
    </div>
  );
};
