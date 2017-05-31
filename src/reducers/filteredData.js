const defaultState = {
  data: [],
}

function filteredData(state = defaultState, action) {
  switch(action.type) {
    case 'DATA_FILTERED' :
      return {
        ...state, // ES7 object spread
        data: action.filteredData,
      }
    case 'GET_DATA_SUCCESS' :
      return {
        ...state, // ES7 object spread
        data: action.data,
      }
    default:
      return state;
  }
}

export default filteredData;