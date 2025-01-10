import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddressID } from "../features/address/addressSlice";
import { setPaymentID } from "../features/payment/paymentSlice";
import { AddressCard } from "../components/AddressCard";
import {
  useGetAddressQuery,
  useCreateAddressMutation,
} from "../features/address/addressApi";
import {
  useGetPaymentMethodsQuery,
  useCreatePaymentInitializerMutation,
} from "../features/payment/paymentApi";
import { PaymentMethods } from "../components/PaymentMethods";
import { CheckoutProducts } from "../components/CheckoutProducts";
import {
  useCreateOrderMutation,
  useCreateOrderItemsMutation,
} from "../features/orders/orderApi";

export const CheckoutPage = () => {
  const dispatch = useDispatch();
  const [createAddressApi] = useCreateAddressMutation();
  const [createPayInitApi] = useCreatePaymentInitializerMutation();
  const [createOrderApi] = useCreateOrderMutation();
  const [createOrderItemApi] = useCreateOrderItemsMutation();
  const { data } = useGetAddressQuery(undefined);
  const { data: paymentMethodsData, isSuccess: paymentMethodsSuccess } =
    useGetPaymentMethodsQuery(undefined);

  const [IdCheck, SetIdCheck] = useState("");
  const [FullName, SetFullName] = useState("");
  const [AddressLine1, SetAddressLine1] = useState("");
  const [AddressLine2, SetAddressLine2] = useState("");
  const [Email, SetEmail] = useState("");
  const [PaymentMethod, SetPaymentMethod] = useState("");
  const [City, SetCity] = useState("");
  const [State, SetState] = useState("");
  const [Country, SetCountry] = useState("");
  const [PostalCode, SetPostalCode] = useState("");
  const [Phone, SetPhone] = useState("");

  const addressFunction = async () => {
    let addressForm = new FormData();
    addressForm.append("full_name", FullName);
    addressForm.append("email", Email);
    addressForm.append("phone", Phone);
    addressForm.append("address_line1", AddressLine1);
    addressForm.append("address_line2", AddressLine2);
    addressForm.append("city", City);
    addressForm.append("state", State);
    addressForm.append("postal_code", PostalCode);
    addressForm.append("country", Country);
    if (!IdCheck) {
      const addressResult: any = await createAddressApi(addressForm);
      if (addressResult.data) {
        dispatch(setAddressID(addressResult.data.id));
        SetIdCheck(addressResult.data.id);
        return addressResult.data.id;
      }
    } else {
      dispatch(setAddressID(IdCheck));
      return IdCheck;
    }
  };

  const orderFunction = async (addressId: number) => {
    const orderForm = new FormData();
    orderForm.append("payment_method", PaymentMethod);
    orderForm.append("address", addressId.toString());
    const orderResult = await createOrderApi(orderForm);
    if (orderResult) {
      // console.log(orderResult);
      return orderResult.data;
    }
  };

  const orderItemFunction = async () => {
    const orderItemResult = await createOrderItemApi("null");
    if (orderItemResult) {
      // console.log(orderResult);
      return orderItemResult;
    }
  };

  const initializePaymentFunction = async (amount: string) => {
    if (amount) {
      const payInitForm = new FormData();
      payInitForm.append("amount", amount);
      const payInitResult = await createPayInitApi(payInitForm);
      if (payInitResult) {
        // console.log(payInitResult);
        return payInitResult.data;
      }
    }
  };

  const openLinkFunction = async (link: string) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const addressId = await addressFunction();
    console.log("addressId: ", addressId);
    const orderInfo = await orderFunction(addressId);
    console.log("orderInfo: ", orderInfo);
    const orderItem = await orderItemFunction();
    // orderItem && console.log("orderItem: ", orderItem.data.data);
    const amount = orderItem && orderItem.data.data.total;
    const initPay = await initializePaymentFunction(amount);
    console.log("initPay: ", initPay);
    const payResult = await openLinkFunction(initPay.call_rsp.data.link);
    console.log(payResult);
  };

  const SelectAddressHandler = (address: any) => {
    // console.log("address: ", address);
    SetFullName(
      address.full_name
        ? address.full_name
        : address.owner_info.first_name + " " + address.owner_info.last_name
    );
    SetEmail(address.email ? address.email : address.owner_info.email);
    SetAddressLine1(address.address_line1);
    SetAddressLine2(address.address_line2);
    SetCity(address.city);
    SetState(address.state);
    SetCountry(address.country);
    SetPostalCode(address.postal_code);
    SetPhone(address.phone);
    SetIdCheck(address.id);
  };

  const PaymentMethodHandler = (paymentMethod: any) => {
    SetPaymentMethod(paymentMethod.id);
    dispatch(setPaymentID(PaymentMethod ? PaymentMethod : paymentMethod.id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className=" container mx-auto max-w-6xl  flex flex-col  gap-8">
        <h1 className="text-3xl font-semibold text-center mb-8">Checkout</h1>
        {data && data.length >= 1 && (
          <div className=" bg-white mb-8 w-full p-6 rounded-lg">
            <h3 className=" text-xl font-semibold mb-4">List of Address</h3>
            <div className="grid gap-4 max-w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              {data &&
                data.map((address: any) => (
                  <div
                    key={address.id}
                    onClick={() => SelectAddressHandler(address)}
                    className="cursor-pointer"
                  >
                    <AddressCard address={address} />
                  </div>
                ))}
            </div>
          </div>
        )}
        <form
          onSubmit={handleFormSubmit}
          className="flex  flex-col md:flex-row gap-8"
        >
          {/* Shipping Details */}
          <div className="bg-white w-full md:w-2/3  p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>

            <div className="  space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="my-input"
                required
                id="full_name"
                name="full_name"
                value={FullName}
                onChange={(e) => SetFullName(e.target.value)}
              />

              <div className="my-checkout-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="my-input"
                  required
                  id="email"
                  name="email"
                  value={Email}
                  onChange={(e) => SetEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="my-input"
                  required
                  id="phone"
                  name="phone"
                  value={Phone}
                  onChange={(e) => SetPhone(e.target.value)}
                />
              </div>

              <input
                type="text"
                placeholder="Address Line 1"
                className="my-input"
                required
                id="address_line1"
                name="address_line1"
                value={AddressLine1}
                onChange={(e) => SetAddressLine1(e.target.value)}
              />
              <input
                type="text"
                placeholder="Address Line 2 (Optional)"
                className="my-input"
                id="address_line2"
                name="address_line2"
                value={AddressLine2}
                onChange={(e) => SetAddressLine2(e.target.value)}
              />
              <div className="my-checkout-group">
                <input
                  type="text"
                  placeholder="City"
                  className="my-input"
                  required
                  id="city"
                  name="city"
                  value={City}
                  onChange={(e) => SetCity(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="State/Province/Region"
                  className="my-input"
                  required
                  id="state"
                  name="state"
                  value={State}
                  onChange={(e) => SetState(e.target.value)}
                />
              </div>
              <div className="my-checkout-group">
                <input
                  type="text"
                  placeholder="Country"
                  className="my-input"
                  required={false}
                  id="country"
                  name="country"
                  value={Country}
                  onChange={(e) => SetCountry(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Postal/Zip Code"
                  className="my-input"
                  required
                  id="postal_code"
                  name="postal_code"
                  value={PostalCode}
                  onChange={(e) => SetPostalCode(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 w-full md:w-1/3 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

            <div className=" mx-auto space-y-4">
              {/* Pay with Card */}
              {paymentMethodsSuccess &&
                paymentMethodsData.map((PMData: any) => (
                  <div
                    key={PMData.id}
                    onClick={() => PaymentMethodHandler(PMData)}
                    // onClick={() => SetPaymentMethod(PMData.id)}
                    className="cursor-pointer"
                  >
                    <PaymentMethods PMData={PMData} />
                  </div>
                ))}

              <button className="my-btn">Submit</button>
            </div>
          </div>
        </form>
        <div className=" w-full md:w-2/3">
          <CheckoutProducts />
        </div>
      </div>
    </div>
  );
};
