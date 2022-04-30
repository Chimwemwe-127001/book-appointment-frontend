import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Paginate from './paginate';
import insta from '../../assets/images/insta-icon-home.png';
import twitter from '../../assets/images/twitter-icon-home.png';
import facebook from '../../assets/images/fb-icon-home.png';

const social = [
  { icon: facebook },
  { icon: twitter },
  { icon: insta },
];

const Doctors = () => {
  const doctors = useSelector((state) => state.doctorsReducer);
  const [pageNumber, setPageNumber] = useState(0);

  const doctorsPerPage = 3;
  const pageVisited = pageNumber * doctorsPerPage;
  const displayDoctors = doctors.slice(pageVisited, pageVisited + doctorsPerPage);

  const pageCount = Math.ceil(doctors.length / doctorsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex gap-4 mt-16">
      {displayDoctors.map((item) => (
        <div className="flex flex-col items-center w-80" key={item.name}>
          <img src={item.image} alt="doctor" className="rounded-full w-60 h-60" />
          <h3 className="uppercase text-slate-900 text-lg mt-6 font-bold">{item.name}</h3>
          <hr className="border-t-2 border-dashed border-gray-500 w-32 mt-4" />
          <p className="text-gray-400 text-center font-semibold mt-4">{item.details}</p>
          <div className="flex gap-4 mt-4">
            {social.map((item) => (
              <a href="/" key={item.key}><img src={item.icon} alt="social" className="w-8" /></a>
            ))}
          </div>
        </div>
      ))}
      <Paginate pageCount={pageCount} changePage={changePage} />
    </div>
  );
};

export default Doctors;
