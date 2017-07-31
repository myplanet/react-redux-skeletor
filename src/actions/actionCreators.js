const $ = jQuery // assuming this app is on a Drupal page with jQuery

/**
 * Get all data from API.
 */
export function getData() {
  return function (dispatch, getState) {
    dispatch(getDataPending())
    $.ajax({
        url: '/data.json',
        type: 'GET',
        timeout: 5000
      })
      .done(function(response) {
        dispatch(getDataSuccess(response))
      })
      .error(function(jqXHR, textStatus, errorThrown) {
        dispatch(getDataFail(textStatus))
      })
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

function getDataFail(error) {
  return {
    type: 'GET_DATA_FAIL',
    error
  }
}

