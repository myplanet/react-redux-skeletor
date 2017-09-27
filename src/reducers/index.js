import { combineReducers } from 'redux';
import attendee from './attendee';

const rootReducer = combineReducers({
  attendee: attendee,
});

export default rootReducer;
