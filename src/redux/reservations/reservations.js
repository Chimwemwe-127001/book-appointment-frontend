import Axios from 'axios';

// URLs
const BASE_URL = 'http://localhost:3000/api/v1';

// conts
const FETCH_RESERVATIONS = 'BOOK-APPOINTMENT/RESERVATIONS/FETCH_RESERVATIONS';

// actions
const fetchReservations = (payload) => ({
  type: FETCH_RESERVATIONS,
  payload,
});

// state
const reservationsState = [];

//   APIs-functions

export const fetchReservationsApi = (accessToken, doctors) => async (dispatch) => {
  const returnValue = await Axios.get(`${BASE_URL}/reservations`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const appointments = [];
  const { reservations } = returnValue.data.data;

  reservations.map((item) => {
    const data = { };
    data.city = item.city;
    data.date = item.date;
    data.doctor_id = item.doctor_id;
    doctors.map((item2) => {
      if (item.doctor_id === item2.id) {
        data.doctor = item2;
      }
    });
    appointments.push(data);
  });
  dispatch(fetchReservations(appointments));
};

// reducer
const reducer = (state = reservationsState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
