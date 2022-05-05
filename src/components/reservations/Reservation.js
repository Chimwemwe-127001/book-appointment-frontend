import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

const Reservation = () =>{
  const user = useSelector((state) => state.signUpReducer);
  const { accessToken } = user;
  const doctors = useSelector((state) => state.doctorsReducer);

  return (
    <p>Hello</p>
  )
};


export default Reservation;