import React from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./App.css";
import { Homepage } from "./pages/Homepage";
import ProductListingPage from "./pages/ProductListingPage";
import { GenRoute } from "./pages/routes/GenRoute";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GenRoute />,
    // errorElement: <ErrorPage />,
    children: [
      {
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
        ],
      },
    ],
  },
  // {
  //   path: "/list",
  //   element: <ProductListingPage />,
  // },
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
