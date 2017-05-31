const defaultState = {
  data: null,
  data1: null,
  data2: null,
  isFetching: false,
  isLoaded: false,
  error: null,
}

function data(state = defaultState, action) {
  switch(action.type) {
    case 'GET_DATA_SUCCESS' :
      return {
        ...state, // ES7 object spread
        data: action.data,
        isLoaded: true,
        isFetching: false
      }
    case 'GET_DATA1_SUCCESS' :
      return {
        ...state, // ES7 object spread
        data1: action.data,
      }
    case 'GET_DATA2_SUCCESS' :
      return {
        ...state, // ES7 object spread
        data2: action.data,
      }
    case 'GET_DATA_PENDING' :
      return {
        ...state,
        isFetching: true
      }
    case 'GET_DATA_FAIL' :
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state;
  }
}

export default data;
