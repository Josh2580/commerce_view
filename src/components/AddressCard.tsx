// import React from 'react'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
// import { AdressType } from "../types/AddressType";

let product = {
  id: 1,
  user: 1,
  store: null,
  order: null,
  phone: 123456789900,
  address_line1:
    "chrome address 1 chrome address 1 chrome address 1 chrome address 1",
  address_line2:
    "chrome address 2 chrome address 2 chrome address 2 chrome address 2",
  email: "email@mail.com",
  city: "chrome_city",
  state: "chrome_state",
  postal_code: "chrome_code",
  country: "chrome_country",
  created_at: "2024-12-10T19:15:21.864904Z",
  updated_at: "2024-12-10T19:15:21.864904Z",
};
export interface EachAdressType {
  id: number;
  user: number;
  store: number | null;
  order: number | null;
  phone: number | null;
  address_line1: string;
  address_line2: string | null;
  email: "";
  city: string;
  state: string;
  postal_code: string;
  country: string;
  created_at: string;
  updated_at: string;
}

// export const AddressCard = (product: Props) => {
export const AddressCard = ({ address }: any) => {
  return (
    <div key={address.id} className="container w-full bg-white shadow-lg">
      <div className="bg-white shadow flex p-3 gap-3 rounded overflow-hidden">
        <input
          type="radio"
          name="address-type-id"
          className=" radio radio-primary"
          id={`${address.id} address`}
        />
        <label
          htmlFor={`${address.id} address`}
          className="flex flex-col gap-1"
        >
          <h3 className="product-name truncate">{address.address_line1}</h3>
          <h3 className="product-name truncate">{address.address_line2}</h3>
          <h3 className="product-name">{address.phone}</h3>
          <h3 className="product-name">{address.email}</h3>
        </label>
      </div>
    </div>
  );
};
