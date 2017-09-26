import { combineReducers } from 'redux';
import attendees from './attendees';

const rootReducer = combineReducers({
  attendees: attendees,
});

export default rootReducer;
