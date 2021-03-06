import React from 'react';
import SideBar from '../components/navigation/SideBar';
import HamBurger from '../components/navigation/HamBurger';
import AddDoctor from '../components/doctorform/AddDoctor';

const DoctorForm = () => (
  <div className="homepage">
    <div className="h-screen flex lg:overflow-hidden bg-white">
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <SideBar />
      </div>
      <div className="flex flex-col min-w-0 flex-1 lg:overflow-hidden mt-20 lg:mt-1">
        {/* Hamburger for mobile */}
        <HamBurger />

        <div className="flex flex-col items-center doc">
          <AddDoctor />
        </div>
      </div>
    </div>
  </div>
);
export default DoctorForm;
