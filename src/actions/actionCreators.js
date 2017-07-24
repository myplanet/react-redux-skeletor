const $ = jQuery // assuming this app is on a Drupal page with jQuery

import dataSchema from "../schema/dataSchema";
import {Validator} from "jsonschema";
let v = new Validator();

//v.addSchema(dataSchema, '/data');

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
        let validationData = v.validate(response, dataSchema);
        if (validationData.errors.length > 0) {
          let errors = validationData.errors.reduce((acc, error) => {
            acc.push(error.stack);
            return acc;
          }, []).join(', ');
          console.log(errors);
          dispatch(getDataFail(errors));
        }
        else {
          dispatch(getDataSuccess(response))
        }
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

