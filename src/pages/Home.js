import React, { useState } from "react";
import SideBar from "../components/SideBar";

const Home = () => {

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <SideBar />
      </div>
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        hello there
      </div>
    </div>
  );
};

export default Home;
