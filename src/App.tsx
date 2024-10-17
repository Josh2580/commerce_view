import React from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./App.css";
import { Homepage } from "./pages/Homepage";
import { CategoryProductPage } from "./pages/CategoryProductPage";
import { GenRoute } from "./pages/routes/GenRoute";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { AccountDashboardPage } from "./pages/AccountDashboardPage";
import { AccountOverview } from "./components/AccountOverview";

import { OrderHistory } from "./components/OrderHistory";
import { ProfileSettings } from "./components/ProfileSettings";
import { AddressBook } from "./components/AddressBook";
import { PaymentMethods } from "./components/PaymentMethods";
import { WishList } from "./components/Wishlist";
import { LoyaltyPrograms } from "./components/LoyaltyPrograms";
import { Notifications } from "./components/Notifications";
import { SecurityPage } from "./pages/SecurityPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ShippingForm } from "./components/ShippingForm";
import { CheckoutRoute } from "./pages/routes/CheckoutRoute";
import { PaymentForm } from "./components/PaymentForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GenRoute />,
    // errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Homepage /> },
      // {
      //   path: "details/:blogId",
      //   element: <DetailsPage />,
      // },
      /* the rest of the routes */
      {
        path: "/category/:title/:id",
        element: <CategoryProductPage />,
      },
      {
        path: "/details/:title/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/cart",
        element: <ShoppingCartPage />,
      },
    ],
  },

  {
    path: "/checkout",
    element: <CheckoutRoute />,
    children: [
      {
        path: "shipping-address",
        element: <ShippingForm />,
      },
      {
        path: "payment",
        element: <PaymentForm />,
      },
      {
        path: "confirm-order",
        element: <CheckoutPage />,
      },
    ],
  },

  {
    path: "/account",
    element: <AccountDashboardPage />,
    children: [
      { index: true, element: <AccountOverview /> },
      { path: "orders", element: <OrderHistory /> },
      { path: "settings", element: <ProfileSettings /> },
      { path: "addresses", element: <AddressBook /> },
      { path: "payment-methods", element: <PaymentMethods /> },
      { path: "wishlist", element: <WishList /> },
      { path: "loyalty", element: <LoyaltyPrograms /> },
      { path: "notifications", element: <Notifications /> },
      { path: "security", element: <SecurityPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

const App: React.FC = () => {
  return (
    <>
      <div className="bg-white">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
