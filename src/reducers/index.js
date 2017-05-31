import { combineReducers } from 'redux';
import data from './data';
import filters from './filters';

const rootReducer = combineReducers({
  data: data,
  filters: filters,
});

export default rootReducer;
