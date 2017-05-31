const defaultState = {
  options: [],
  values: [],
}

function filters(state = defaultState, action) {
  switch(action.type) {
    case 'FILTER_AGE_OPTIONS' :
      return {
        ...state,
        options: action.filterOptions,
        values: action.filterOptions
      }
    case 'FILTER_AGE_VALUES' :
      return {
        ...state,
        values: action.values
      }
    default:
      return state;
  }
}

export default filters;