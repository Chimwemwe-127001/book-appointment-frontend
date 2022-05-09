import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservationsApi, cancelReservationApi } from '../../redux/reservations/reservations';

const Reservation = () => {
  const user = useSelector((state) => state.signUpReducer);
  const { accessToken } = user;
  const [successNotice, setSuccessNotice] = useState(false);

  const reservations = useSelector((state) => state.reservationsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservationsApi(accessToken));
  }, [dispatch]);

  const cancelReservation = (id) => {
    dispatch(cancelReservationApi(accessToken, id));
    setSuccessNotice(true);
  };

  return (
    <div className="w-full my-16 flex flex-col gap-10">
      {reservations.length === 0 && (
        <h3 className="text-lg text-center mt-4">No reservations available!</h3>
      )}
      {
        reservations.map((item) => (
          <div key={item.id} className="flex justify-between mx-4">
            <img src={item.doctor.photo} alt="doctor" className="w-20 rounded-full" />
            <p className="mt-8 font-bold">{item.city}</p>
            <p className="mt-8 font-bold">{item.date}</p>
            <button
              type="button"
              onClick={() => cancelReservation(item.id)}
              className="px-4 h-12 bg-lime-500 rounded text-slate-50 mt-4"
            >
              Cancel
            </button>
          </div>
        ))
      }
      {successNotice && (
        <p className="text-center text-sky-500 text-lg mt-4">Reservation canceled succesfully!</p>
      )}
    </div>
  );
};

export default Reservation;
