import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelReservationApi } from '../../redux/reservations/reservations';

const ReserveItem = ({reservation, accessToken})=> {
  const dispatch = useDispatch();
  const cancelReservation = (id) => {
    dispatch(cancelReservationApi(accessToken, id));
  };

  return (
    <div className="flex justify-between mx-4">
            <img src={reservation.doctor.photo} alt="doctor" className="w-20 rounded-full" />
            <p className="mt-8 font-bold">{reservation.city}</p>
            <p className="mt-8 font-bold">{reservation.date}</p>
            <button type="button" 
            onClick={() => cancelReservation(reservation.id)}
            className="px-4 h-12 bg-lime-500 rounded text-slate-50 mt-4">Cancel</button>
          </div>
  )
}

export default ReserveItem;