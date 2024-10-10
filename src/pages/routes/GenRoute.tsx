import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { FirstHeader } from "../../components/headers/FirstHeader";
// import { SecondHeader } from "../../components/headers/SecondHeader";
// import { ThirdHeader } from "../../components/headers/ThirdHeader";

export const GenRoute: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="fixed top-0 w-full z-40">
        <FirstHeader />
        {/* <SecondHeader />
        <ThirdHeader /> */}
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
