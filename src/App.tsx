import React from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./App.css";
import { Homepage } from "./pages/Homepage";
import ProductListingPage from "./pages/ProductListingPage";
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
import { Wishlist } from "./components/Wishlist";
import { LoyaltyPrograms } from "./components/LoyaltyPrograms";
import { Notifications } from "./components/Notifications";
// import { AccountView } from "./components/AccountOverview";

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
        path: "/list",
        element: <ProductListingPage />,
      },
      {
        path: "/details",
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
    element: <CheckoutPage />,
  },
  {
    path: "/account",
    element: <AccountDashboardPage />,
    children: [
      { path: "overview", element: <AccountOverview /> },
      { path: "orders", element: <OrderHistory /> },
      { path: "settings", element: <ProfileSettings /> },
      { path: "addresses", element: <AddressBook /> },
      { path: "payment-methods", element: <PaymentMethods /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "loyalty", element: <LoyaltyPrograms /> },
      { path: "notifications", element: <Notifications /> },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <>
      <div className="bg-slate-100">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
