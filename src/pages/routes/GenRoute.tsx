import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { FirstHeader } from "../../components/headers/FirstHeader";

export const GenRoute: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="fixed top-0 w-full z-40 ">
        <FirstHeader />
      </div>
      <div className="mt-24 ">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
