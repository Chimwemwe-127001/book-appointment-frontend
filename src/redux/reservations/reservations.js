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

    for(let i=0; i<reservations.length; i++ ){
    const data = { };
    data.city = reservations[i].city;
    data.date = reservations[i].date;
    data.doctor_id = reservations[i].doctor_id;
      for(let j=0; j<doctors.length; j++ ){
      if (reservations[i].doctor_id === doctors[j].id) {
        data.doctor = doctors[j];
      }
    };
    appointments.push(data);
  };
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
