/* eslint-disable eqeqeq */

import React, { useState } from 'react';
import { FaBars, FaSistrix } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { createReservationApi } from '../redux/reservations/reservations';

const ReserveForm = () => {
  const doctors = useSelector((state) => state.doctorsReducer);
  const user = useSelector((state) => state.signUpReducer);
  const { accessToken } = user;

  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [doctorId, setDoctorId] = useState(-1);

  const createReservation = (e) => {
    e.preventDefault();
    if (city === '' || date === '' || doctorId === -1) return;
    const doctor = doctors.find((item) => item.id == doctorId);
    const data = {
      city,
      date,
      doctor,
    };
    dispatch(createReservationApi(accessToken, data));
    setCity('');
    setDate('');
  };

  return (
    <div className="h-screen reserveContainer text-white">
      <div className="p-3 flex justify-between">
        <button type="button" className="text-white">
          <FaBars />
        </button>
        <button type="button" className="text-white">
          <FaSistrix />
        </button>
      </div>

      <div>
        <div className="flex justify-center">
          <h4 className="text-4xl tracking-widest reserveFormHeading">
            Book Appointment
          </h4>
        </div>
        <div className="flex justify-center">
          <p className="text-sm text-white text-center mt-4 ml-2">
            We have different doctors from different parts of the world.
            <br />
            If you wish to find out if we have a doctor who is available
            in your city, please use the selector below
          </p>
        </div>
        <div className="mt-5 flex justify-center">
          <div className="flex flex-col lg:block">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="lg:mr-5 mb-4 p-3 bg-lime-500 rounded-lg outline outline-offset-2 outline-3"
            />

            <select
              name="availableDoctors"
              onChange={(e) => setDoctorId(e.target.value)}
              className="lg:ml-3 lg:mr-5 p-3 bg-lime-500 rounded-lg outline outline-offset-2 outline-3"
            >
              <option value="" selected disabled hidden>Choose here</option>
              {doctors.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-white mt-6 lg:mt-0 lg:mr-10 p-3 bg-lime-500 rounded-lg outline outline-offset-2 outline-3"
            />
            <br />
            <div className="flex flex-col items-center lg:grow">
              <input
                type="submit"
                value="Book Now"
                onClick={createReservation}
                className="mt-4 text-lime-500 bg-white p-3 rounded-lg outline outline-offset-2 outline-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveForm;
