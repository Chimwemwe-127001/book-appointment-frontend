import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDoctorApi } from '../../redux/doctors/doctors';

const DeleteDoctor=() =>{
    const doctors = useSelector((state) => state.doctorsReducer);
    const user = useSelector((state) => state.signUpReducer);
    const { accessToken } = user;
  
    const dispatch = useDispatch();
    const deleteDoctor = (id) => {
      dispatch(deleteDoctorApi(accessToken, id));
    };