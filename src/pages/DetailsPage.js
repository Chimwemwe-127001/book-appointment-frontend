import React from 'react';
import Details from '../components/detailspage/Details';
import HamBurger from '../components/navigation/HamBurger';
import SideBar from '../components/navigation/SideBar';

function DetailsPage() {
  return (
    <div className="h-screen flex lg:overflow-hidden bg-white">
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <SideBar />
      </div>
      <div className="flex flex-col min-w-0 flex-1 lg:overflow-hidden mt-32 lg:mt-1">
        {/* Hamburger for mobile */}
        <HamBurger />
        <div className="flex flex-col items-center">
          <Details />
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
