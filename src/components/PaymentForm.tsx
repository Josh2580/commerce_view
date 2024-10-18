import { useNavigate } from "react-router-dom";

export const PaymentForm = () => {
  const navigate = useNavigate();

  const SubmitHandler = () => {
    navigate("/checkout/confirm-order");
  };

  return (
    <div className="max-w-lg mx-auto space-y-4 p-4">
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
            <p className="font-semibold text-gray-800">Cryptocurrency (UUID)</p>
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
            <p className="font-semibold text-gray-800">Mobile Payment</p>
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

      <button onClick={SubmitHandler} className="my-btn">
        Submit
      </button>
    </div>
  );
};
