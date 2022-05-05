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
  const { doctors } = returnValue.data.data;
  dispatch(fetchReservations(doctors));
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
