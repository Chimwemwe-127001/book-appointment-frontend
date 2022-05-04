import Axios from 'axios';
import { initialState } from '../session/reducer/signUpReducer';

// URLs
const BASE_URL = 'http://localhost:3000/api/v1';

// conts
const FETCH_DOCTORS = 'BOOK-APPOINTMENT/DOCTORS/FETCH_DOCTORS';

// actions
const fetchDoctors = (payload) => ({
  type: FETCH_DOCTORS,
  payload,
});

// state
const doctorsState = [];

//   APIs-functions

export const fetchDoctorsApi = (accessToken) => async (dispatch) => {
  const returnValue = await Axios.get(`${BASE_URL}/doctors`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const { doctors } = returnValue.data.data;
  dispatch(fetchDoctors(doctors));
};

// reducer
const reducer = (state = doctorsState, action) => {
  switch (action.type) {
    case FETCH_DOCTORS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
