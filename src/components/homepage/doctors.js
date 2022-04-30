import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Paginate from './paginate';

const Doctors =()=>{
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
    <div>
          {
            displayDoctors.map((item) => (
              <p>{item.name}</p>
            ))
          }
          <Paginate pageCount={pageCount} changePage={changePage} />
        </div>
  )
}

export default Doctors;