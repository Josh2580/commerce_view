import React from "react";

import { Outlet } from "react-router-dom";
import { GenHeader } from "../../components/headers/GenHeader";
import { Footer } from "../../components/Footer";

export const GenRoute: React.FC = () => {
  return (
    <div>
      <div className="sticky -top-0">
        <GenHeader />
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
