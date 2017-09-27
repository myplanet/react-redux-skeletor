import axios from 'axios'
import Ajv from 'ajv'
import { apiEndpoints } from '../constants/endpoints'

import attendeeSchema from '../../schemas/attendeeSchema'
import attendeesSchema from '../../schemas/attendeesSchema'

let ajv = new Ajv({allErrors: true});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));

/**
 * Get all data from API.
 */
export function getData() {
  return function (dispatch, getState) {
    let endpointId = 'attendee'
    let endpoint = apiEndpoints[endpointId]
    dispatch(getDataPending())

    return axios({
      url: endpoint.url,
      method: endpoint.method,
      timeout: endpoint.timeout
    })
    .then(res => {
      // AJV
      let validate = ajv.compile(attendeeSchema);
      let valid = validate(res.data)

      if (!valid) {
        dispatch(getDataFail('Error fetching the data', validate.errors))
      }
      else {
        dispatch(getDataSuccess(res.data))
      }
    })
    .catch(err => {
      getDataFail('Error fetching the data')
    });
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

function getDataFail(error, errorLog) {
  return {
    type: 'GET_DATA_FAIL',
    error
  }
}

