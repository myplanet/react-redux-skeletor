const $ = jQuery // assuming this app is on a Drupal page with jQuery

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
    });
  }
}

export function deleteUser(id) {
  return function (dispatch, getState) {
    let state = getState();

    let datanew = state.data.data.reduce((acc, elem) => {
      if (elem.id !== id) acc.push(elem); return acc;
    }, []);

    console.log(datanew);

    dispatch(getDataSuccess(datanew));
  }
}

function getData1() {
 return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        $.ajax({
            url: '/data1.json',
            type: 'GET',
            timeout: 5000
          }).then(data => {
            dispatch(getData1Success(data));
            resolve(true);
        });
      }, 5000);
    });
  }
}

function getData2() {
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        $.ajax({
          url: '/data2.json',
          type: 'GET',
          timeout: 5000
        }).then(data => {
          dispatch(getData2Success(data));
          resolve(true);
        });
      }, 3000);
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

export function filterData(searchTerm) {
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

