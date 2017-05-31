import axios from 'axios';

/**
 * App init action.
 */
export function init() {
  return (dispatch, getState) => {
    let state = getState();

    Promise.all([
      dispatch(getData1()),
      dispatch(getData2())
    ]).then(() => {
      dispatch(dataMerge());
    }).then(() => {
      dispatch(filterOptions());
    }).then(() => {
      dispatch(dataFilter());
    });
  }
}

export function deleteUser(id) {
  return function (dispatch, getState) {
    let state = getState();

    let datanew = state.data.data.reduce((acc, elem) => {
      if (elem.id !== id) acc.push(elem); return acc;
    }, []);

    dispatch(getDataSuccess(datanew));
  }
}

function getData1() {
 return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios({
            url: '/data1.json',
            method: 'GET',
            timeout: 5000
          }).then(response => {
            dispatch(getData1Success(response.data));
            resolve(true);
        });
      }, 2000);
    });
  }
}

function getData2() {
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios({
          url: '/data2.json',
          method: 'GET',
          timeout: 5000
        }).then(response => {
          dispatch(getData2Success(response.data));
          resolve(true);
        });
      }, 1000);
    });  
  }
}

function dataMerge() {
  return function (dispatch, getState) {
    const state = getState();

    let data = state.data.data1.reduce((acc, elem, index) => {
      let newObj = {...elem, ...state.data.data2[index]}; 
      acc.push(newObj); 
      return acc;
    }, []);
    
    dispatch(getDataSuccess(data));
  }
}

function getDataPending() {
  return {
    type: 'GET_DATA_PENDING'
  }
}

function getDataSuccess(data) {
  return {
    type: 'GET_DATA_SUCCESS',
    data
  }
}

function getData1Success(data) {
  return {
    type: 'GET_DATA1_SUCCESS',
    data
  }
}

function getData2Success(data) {
  return {
    type: 'GET_DATA2_SUCCESS',
    data
  }
}

function getDataFail(error) {
  return {
    type: 'GET_DATA_FAIL',
    error
  }
}

function filterOptions () {
  return function (dispatch, getState) {
    const state = getState();
    let filterOptions = {
      min: 99,
      max: 0
    };

    state.data.data.forEach(elem => {
      filterOptions.min = elem.age < filterOptions.min ? elem.age : filterOptions.min;
      filterOptions.max = elem.age > filterOptions.max ? elem.age : filterOptions.max;
    });
    
    dispatch({
      type: 'FILTER_AGE_OPTIONS',
      filterOptions
    });
  }
}

export function filterValue (values) {
  return function (dispatch, getState) {
    dispatch({
      type: 'FILTER_AGE_VALUES',
      values
    });

    dispatch(dataFilter());
  }
}

function dataFilter () {
  return function (dispatch, getState) {
    let state = getState();

    let data = state.data.data.filter(elem => elem.age >= state.filters.values.min && elem.age <= state.filters.values.max);

    dispatch({
      type: 'DATA_FILTERED',
      data
    });
  }
}

export function filterData (searchTerm) {
  return function (dispatch, getState) {
    let state = getState();


    let filteredData = state.data.data.filter((node) => {
        return ~node.title.toLowerCase().indexOf(searchTerm.toLowerCase());
      });

    dispatch({
      type: 'DATA_FILTERED',
      filteredData
    });
  }
}

