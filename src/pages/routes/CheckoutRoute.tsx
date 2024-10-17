import { Outlet } from "react-router-dom";
import { CheckoutHeader } from "../../components/headers/CheckoutHeader";

export const CheckoutRoute = () => {
  return (
    <div>
      <div className=" ">
        <CheckoutHeader />
      </div>
      <div className=" ">
        <Outlet />
      </div>
    </div>
  );
};
