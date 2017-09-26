const defaultState = {
  data: null,
  isFetching: false,
  isLoaded: false,
  error: null,
}

function attendees(state = defaultState, action) {
  switch(action.type) {
    case 'GET_DATA_SUCCESS' :
      return {
        ...state,
        data: action.data,
        isLoaded: true,
        isFetching: false
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

export default attendees;
