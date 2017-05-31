import { combineReducers } from 'redux';
import data from './data';

const rootReducer = combineReducers({
  data: data,
});

export default rootReducer;
