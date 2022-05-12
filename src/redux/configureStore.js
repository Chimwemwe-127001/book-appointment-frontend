import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import doctorsReducer from './doctors/doctors';
import signUpReducer from './session/reducer/signUpReducer';
import reservationsReducer from './reservations/reservations';

const reducer = combineReducers({
  doctorsReducer,
  signUpReducer,
  reservationsReducer,
});

const store = createStore(
  reducer, applyMiddleware(logger, thunk),
);

export default store;
