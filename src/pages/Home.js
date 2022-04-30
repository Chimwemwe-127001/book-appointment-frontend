import React from 'react';
import SideBar from '../components/SideBar';
import HamBurger from '../components/HamBurger';
import { useSelector } from 'react-redux';

const Home = () => {
  const doctors = useSelector((state) => state.doctorsReducer);
return (
  <div className="h-screen flex overflow-hidden bg-white">
    {/* Static sidebar for desktop */}
    <div className="hidden lg:flex lg:flex-shrink-0">
      <SideBar />
    </div>
    <div className="flex flex-col min-w-0 flex-1 overflow-hidden mt-32 md:mt-1">
      {/* Hamburger for mobile */}
      <HamBurger />
      <p>{doctors[0].name}</p>
    </div>
  </div>
)};

export default Home;
