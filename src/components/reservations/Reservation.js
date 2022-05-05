import React, { useEffect } from 'react';
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
    <div className="w-full my-16 flex flex-col gap-10">
      {
        reservations.map((item) =>(
          <div key={item.doctor_id} className="flex justify-between mx-4">
            <img src={item.doctor.photo} alt="doctor" className="w-20 rounded-full"/>
            <p className="mt-8 font-bold">{item.city}</p>
            <p className="mt-8 font-bold">{item.date}</p>
            <button className="px-4 h-12 bg-lime-500 rounded text-slate-50 mt-4">Cancel</button>
          </div>
        ))
      }
    </div>
  );
};

export default Reservation;
