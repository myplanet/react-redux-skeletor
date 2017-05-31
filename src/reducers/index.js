import { combineReducers } from 'redux';
import data from './data';
import filteredData from './filteredData';

const rootReducer = combineReducers({
  data: data,
  filteredData: filteredData,
});

export default rootReducer;
