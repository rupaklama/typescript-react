// redux library
import { combineReducers } from 'redux';

import { eventsReducer } from './eventsReducer';
import { recorderReducer } from './recorderReducer';

export default combineReducers({
  // passing each of our Reducers as key/value properties to create State Object in Redux Store
  events: eventsReducer,
  recorder: recorderReducer
});
