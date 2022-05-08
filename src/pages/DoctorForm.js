import React, { useRef, useEffect } from 'react';
import SideBar from '../components/navigation/SideBar';
import HamBurger from '../components/navigation/HamBurger';
import AddDoctor from '../components/DoctorForm/AddDoctor';

const DoctorForm = () => {

  return (
    <div className="homepage">
      <div className="h-screen flex lg:overflow-hidden bg-white">
        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <SideBar />
        </div>
        <div className="flex flex-col min-w-0 flex-1 lg:overflow-hidden mt-32 lg:mt-1">
          {/* Hamburger for mobile */}
          <HamBurger />
          <div className="flex flex-col items-center w-screen lg:mt-24 lg:pr-44">
            <h1 className="text-3xl text-slate-900 uppercase font-bold">Add a doctor</h1>
          </div>
          <div className="flex flex-col items-center">
            <AddDoctor />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorForm;