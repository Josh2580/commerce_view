// import { EachPaymentType } from "../types/PaymentType";

export const PaymentMethods = ({ PMData }: any) => {
  return (
    <div
      key={PMData.id}
      className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border hover:shadow-lg cursor-pointer transition duration-300 ease-in-out"
    >
      <label
        htmlFor={`${PMData.id} payment-method`}
        className="flex items-center gap-4"
      >
        <img src={PMData.image_url} alt={PMData.name} className="w-10 h-10" />
        <div>
          <p className="font-semibold text-gray-800">{PMData.name}</p>
          <p className="text-sm text-gray-500">{PMData.description}</p>
        </div>
      </label>
      <input
        type="radio"
        name="payment-method"
        className="radio radio-primary"
        required
        id={`${PMData.id} payment-method`}
      />
    </div>
  );
};
