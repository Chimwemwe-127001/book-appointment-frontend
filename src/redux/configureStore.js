import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import doctorsReducer from './doctors/doctors';

const reducer = combineReducers({
  greetingsReducer,
});

const store = createStore(
  reducer, applyMiddleware(logger, thunk),
);

export default store;