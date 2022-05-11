/* eslint-disable eqeqeq */
import React from 'react';
import './Details.css';
import { BsFillGearFill, BsArrowRightCircle, BsFillCaretLeftFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const doctors = useSelector((state) => state.doctorsReducer);
  const { id } = useParams();
  const doctor = doctors.find((item) => item.id == id);
  return (
    <div
      className="container mt-5 align-self-center"
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
            src={doctor.photo}
            alt="Portrait of doctor Bruno Rodrigues"
          />
        </div>
        <div className="col-md-6 col-12 details-info">
          <div className="text-end">
            <h1 className="fw-bolder fs-4 text">{doctor.name}</h1>
            <p>
              {doctor.details}
            </p>
          </div>
          <table className="table table-striped mt-5">
            <tbody>
              <tr>
                <td>City</td>
                <td>{doctor.city}</td>
              </tr>
              <tr>
                <td>Specialization</td>
                <td>{doctor.specialization}</td>
              </tr>
              <tr>
                <td>Cost / Day</td>
                <td>
                  $
                  {doctor.cost}
                </td>
              </tr>
            </tbody>
          </table>

          <Link to="/reserve" state={doctor}>
            <div className="d-flex justify-content-end reserve-div">
              <div className="reserve p-2 d-flex">
                <BsFillGearFill className="mx-2" size={40} color="white" />
                <button className="btn btn-light reserve-btn" type="submit">Reserve</button>
                <BsArrowRightCircle className="mx-2" size={40} color="white" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Link to="/">
        <div className="main-page-handle-left d-flex justify-content-center align-items-center">
          <BsFillCaretLeftFill />
        </div>
      </Link>
    </div>
  );
};

export default Details;
