import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import SideBar from '../components/navigation/SideBar';
import HamBurger from '../components/navigation/HamBurger';
import Doctors from '../components/homepage/doctors';
import Transition from '../components/Transition';

const Home = () => {
  const home = gsap.timeline();
  const homedoc = useRef(null);

  useEffect(() => {
    gsap.from(homedoc.current, {
      y: 1000,
      delay: 1,
    });
    gsap.to(homedoc.current, {
      y: 0,
      delay: 1,
      ease: 'power4.out',
      duration: 3,
    });
  }, []);

  return (
    <div className="homepage">
      <Transition timeline={home} />
      <div className="h-screen flex lg:overflow-hidden bg-white" ref={homedoc}>
        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <SideBar />
        </div>
        <div className="flex flex-col min-w-0 flex-1 lg:overflow-hidden mt-32 lg:mt-1">
          {/* Hamburger for mobile */}
          <HamBurger />
          <div className="flex flex-col items-center w-screen lg:mt-24 lg:pr-44">
            <h1 className="text-3xl text-slate-900 uppercase font-bold">Available Doctors</h1>
            <p className="text-gray-500 mt-1 text-lg">Please select a doctor</p>
            <Link to="/reserve">
              test
            </Link>
            <Link to="/reservations">
              test2
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Doctors />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
