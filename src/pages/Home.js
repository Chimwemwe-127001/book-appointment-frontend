import React, {useState} from 'react';
// import { useSelector } from 'react-redux';
import SideBar from '../components/navigation/SideBar';
import HamBurger from '../components/navigation/HamBurger';
import Paginate  from 'react-paginate';

const Home = () => {
  const doctors = useSelector((state) => state.doctorsReducer);
  const [pageNumber, setPageNumber] = useState(0);

  const doctorsPerPage = 3;
  const pageVisited = pageNumber* doctorsPerPage;
  const displayDoctors = doctors.slice(pageVisited, pageVisited+doctorsPerPage);

  const pageCount = Math.ceil(doctors.length / doctorsPerPage)

  const changePage = ({selected}) =>{
    setPageNumber(selected)
  }

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <SideBar />
      </div>
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden mt-32 lg:mt-1">
        {/* Hamburger for mobile */}
        <HamBurger />
        <div className="flex flex-col items-center w-screen lg:mt-32 lg:pr-44">
          <h1 className="text-3xl text-slate-900 uppercase font-bold">Available Doctors</h1>
          <p className="text-gray-500 mt-1 text-lg">Please select a doctor</p>
        </div>
        <div>
          {
            displayDoctors.map((item) => (
              <p>item.name</p>
            ))
          }
        </div>

      </div>
    </div>
  )
};
export default Home;
