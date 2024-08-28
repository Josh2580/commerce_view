import React from "react";

export const ShippingForm: React.FC = () => {
  return (
    <form className="space-y-6">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="input input-bordered w-full"
          required
        />
      </div>
      <input
        type="text"
        placeholder="Address Line 1"
        className="input input-bordered w-full"
        required
      />
      <input
        type="text"
        placeholder="Address Line 2 (Optional)"
        className="input input-bordered w-full"
      />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="City"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          placeholder="State/Province/Region"
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Country"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          placeholder="Postal/Zip Code"
          className="input input-bordered w-full"
          required
        />
      </div>
    </form>
  );
};
