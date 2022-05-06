import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservationsApi } from '../../redux/reservations/reservations';
import ReserveItem from './ReserveItem';

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
    <div className="w-full my-16 flex flex-col gap-10">
      {
        reservations.map((reservation) => (
          <ReserveItem key={reservation.id} reservation={reservation} accessToken={accessToken}/>
        ))
      }
    </div>
  );
};

export default Reservation;
