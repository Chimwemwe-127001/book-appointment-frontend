import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservationsApi } from '../../redux/reservations/reservations';

const Reservation = () => {
  const doctors = useSelector((state) => state.doctorsReducer);
  const user = useSelector((state) => state.signUpReducer);
  const { accessToken } = user;

  const reservations = useSelector((state) => state.reservationsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(fetchReservationsApi(accessToken, doctors));
  }, [dispatch]);

  return (
    <p>Hello</p>
  );
};

export default Reservation;
