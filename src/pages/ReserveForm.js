/* eslint-disable eqeqeq */

import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { createReservationApi } from '../redux/reservations/reservations';
import { fetchDoctorsApi } from '../redux/doctors/doctors';
import SideBar from '../components/navigation/SideBar';

const ReserveForm = () => {
  const location = useLocation();
  const { state } = location;
  const doctors = useSelector((state) => state.doctorsReducer);
  const user = useSelector((state) => state.signUpReducer);
  const { accessToken } = user;

  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [doctorId, setDoctorId] = useState(-1);
  const [successNotice, setSuccessNotice] = useState(false);
  const [errorNotice, setErrorNotice] = useState(false);

  useEffect(() => {
    dispatch(fetchDoctorsApi(accessToken));
  }, [dispatch]);

  const flashNotices = (type) => {
    if (type === 'error') {
      setErrorNotice(true);
      setSuccessNotice(false);
    }

    if (type === 'success') {
      setErrorNotice(false);
      setSuccessNotice(true);
    }
  };

  useEffect(() => {
    if (state) {
      setCity(state.city);
      setDoctorId(state.id);
    }
  }, [state]);
  const createReservation = (e) => {
    e.preventDefault();
    if (city === '' || date === '' || doctorId === -1) {
      flashNotices('error');
      return;
    }
    const doctor = doctors.find((item) => item.id == doctorId);
    const data = {
      city,
      date,
      doctor,
    };
    dispatch(createReservationApi(accessToken, data));
    setCity('');
    setDate('');
    flashNotices('success');
  };

  return (
    <div className="h-screen reserveContainer text-white">
      <div className="p-3 flex justify-start">
        <button type="button" className="text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <FaBars />
        </button>
        <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-body pt-0 pb-0">
            <SideBar />
          </div>
        </div>
      </div>

      <div className="res-form">
        <div className="flex justify-center">
          <h4 className="text-4xl tracking-widest reserveFormHeading">
            Book Appointment
          </h4>
        </div>
        <div className="flex justify-center">
          <p className="text-md text-white text-center mt-4 ml-2">
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
              {state && <option value={state.id} defaultValue>{state.name}</option>}
              {!state && <option value="" defaultValue>Choose a Doctor</option>}
              {!state && doctors.map((item) => (
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
                className="mt-4 text-lime-500 p-3 rounded-lg outline outline-offset-2 outline-3 reserve-bttn"
              />
            </div>
          </div>
        </div>
      </div>
      {successNotice && (
        <p className="text-center text-slate-50 text-lg mt-4">Reservation created succesfully!</p>
      )}
      {errorNotice && (
        <p className="text-center text-slate-50 text-lg mt-4">Please complete all fields!</p>
      )}
    </div>
  );
};

export default ReserveForm;
