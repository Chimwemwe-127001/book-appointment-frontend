import React from 'react';
import './Details.css';
import { BsFillGearFill, BsArrowRightCircle, BsFillCaretLeftFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const doctors = useSelector((state) => state.doctorsReducer);
  const { name } = useParams();
  const ActualDoctor = doctors.find((item) => item.name === name);
  return (
    <div
      className="container mt-5"
      style={
    {
      margin: '0 auto',
    }
  }
    >
      <div className="row details-pg">
        <div className="col-md-6 col-12">
          <img
            height="450px"
            width="450px"
            src={ActualDoctor.image}
            alt="Portrait of doctor Bruno Rodrigues"
          />
        </div>
        <div className="col-md-6 col-12 details-info">
          <div className="text-end">
            <h1 className="fw-bolder fs-4 text">{ ActualDoctor.name }</h1>
            <p>
              {ActualDoctor.details}
            </p>
          </div>
          <table className="table table-striped mt-5">
            <tbody>
              <tr>
                <td>City</td>
                <td>{ActualDoctor.city}</td>
              </tr>
              <tr>
                <td>Specialization</td>
                <td>{ActualDoctor.specialization}</td>
              </tr>
              <tr>
                <td>Cost / Day</td>
                <td>
                  $
                  {ActualDoctor.cost}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="d-flex justify-content-end reserve-div">
            <div className="reserve p-2 d-flex">
              <BsFillGearFill className="mx-2" size={40} color="white" />
              <button className="btn btn-light reserve-btn" type="submit">Reserve</button>
              <BsArrowRightCircle className="mx-2" size={40} color="white" />
            </div>
          </div>
        </div>
      </div>
      <Link to="/home">
        <div className="main-page-handle-left d-flex justify-content-center align-items-center">
          <BsFillCaretLeftFill />
        </div>
      </Link>
    </div>
  );
};

export default Details;
