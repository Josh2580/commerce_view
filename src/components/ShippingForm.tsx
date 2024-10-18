import { useNavigate } from "react-router-dom";

export const ShippingForm = () => {
  const navigate = useNavigate();

  const SubmitHandler = () => {
    navigate("/checkout/payment");
  };

  return (
    <div
      className="
   container my-responsive gap-3 mx-auto flex flex-col bg-white"
    >
      <form onSubmit={SubmitHandler} className="  space-y-3">
        <div className="flex flex-col  lg:flex-row space-y-3 md:space-y-0 lg:space-x-3">
          <input
            type="text"
            placeholder="Full Name"
            className="my-input "
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
          type="email"
          placeholder="Email Address"
          className="my-input"
          required
        />
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
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <input type="text" placeholder="City" className="my-input" required />
          <input
            type="text"
            placeholder="State/Province/Region"
            className="my-input"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
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
        <button className="my-btn">Submit</button>
      </form>
    </div>
  );
};
