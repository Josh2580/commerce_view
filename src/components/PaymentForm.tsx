import React from "react";

export const PaymentForm: React.FC = () => {
  return (
    <form className="space-y-6">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Credit/Debit Card</span>
          <input type="radio" name="payment-method" className="radio" checked />
        </label>
        <input
          type="text"
          placeholder="Card Number"
          className="input input-bordered w-full"
          required
        />
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="CVV"
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Mobile Money</span>
          <input type="radio" name="payment-method" className="radio" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Bank Transfer</span>
          <input type="radio" name="payment-method" className="radio" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Pay on Delivery</span>
          <input type="radio" name="payment-method" className="radio" />
        </label>
      </div>
    </form>
  );
};
