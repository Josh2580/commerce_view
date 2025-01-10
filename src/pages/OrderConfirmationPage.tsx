import React from "react";
// import { Breadcrumb } from "../components/Breadcrumb";
import { OrderConfirmationMessage } from "../components/OrderConfirmationMessage";
import { OrderSummary } from "../components/OrderSummary";
import { EstimatedDelivery } from "../components/EstimatedDelivery";
import { useVerifyPaymentQuery } from "../features/payment/paymentApi";
import { useParams } from "react-router-dom";

export const OrderConfirmationPage: React.FC = () => {
  const { status, tx_ref, transaction_id } = useParams();
  const { data } = useVerifyPaymentQuery({ status, tx_ref, transaction_id });
  console.log(data);
  return (
    <div className="container mx-auto py-6">
      {/* <Breadcrumb /> */}
      <OrderConfirmationMessage />
      <OrderSummary />
      <EstimatedDelivery />
      <div className="mt-10 text-center">
        <button className="btn btn-primary">Continue Shopping</button>
      </div>
    </div>
  );
};
