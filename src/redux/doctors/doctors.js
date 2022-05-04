import Axios from 'axios';

// conts
const FETCH_DOCTORS = 'BOOK-APPOINTMENT/DOCTORS/FETCH_DOCTORS';

// actions
const fetchRocket = (payload) => ({
  type: FETCH_DOCTORS,
  payload,
});

// state
const initialState = [];

//   APIs-functions

export const fetchRocketApi = () => async (dispatch) => {
  const returnValue = await Axios.get('https://api.spacexdata.com/v3/rockets');
  const { data } = returnValue;
  const rockets = [];
  for (let i = 0; i < data.length; i += 1) {
    const name = data[i].rocket_name;
    const { id } = data[i];
    const { description } = data[i];
    const image = data[i].flickr_images[0];
    const reserved = false;
    const object = {
      id, name, description, image, reserved,
    };
    rockets.push(object);
  }
  dispatch(fetchRocket(rockets));
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCTORS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
