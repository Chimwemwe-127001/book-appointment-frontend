import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservationsApi } from '../../redux/reservations/reservations';

const Reservation = () =>{
  const user = useSelector((state) => state.signUpReducer);
  const { accessToken } = user;
  const doctors = useSelector((state) => state.doctorsReducer);
  const reservations = useSelector((state) => state.reservationsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (reservations.length === 0) {
      dispatch(fetchReservationsApi(accessToken, doctors));
    }
  }, [dispatch]);

  return (
    <p>Hello</p>
  )
};


export default Reservation;