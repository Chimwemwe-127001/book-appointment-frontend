import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Paginate from './paginate';

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
    <div className="flex mt-20">
      {displayDoctors.map((item) => (
          <div className="flex flex-col items-center">
         <img src={item.image} alt="doctor" className="rounded-full w-60 h-60" />
         <h3 className="uppercase text-slate-900 text-lg mt-6 font-bold">{item.name}</h3>
         <hr class="border-t-2 border-dashed border-gray-500 w-32 mt-4"></hr>
         <p className="">{item.details}</p>
         </div>
            ))}
      <Paginate pageCount={pageCount} changePage={changePage} />
    </div>
  );
};

export default Doctors;
