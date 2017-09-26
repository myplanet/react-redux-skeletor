import attendees from '../attendees'

test('Attendees Reduser test', () => {
  let initialState = attendees(undefined, {type: null});

  let actionDataSuccess = {
    type: 'GET_DATA_SUCCESS',
    data: { test: "test" }
  };

  let attendeesSuccessUpdate = {
    isLoaded: true,
    isFetching: false
  };

  expect(attendees(initialState, actionDataSuccess)).toEqual({
    ...initialState,
    ...attendeesSuccessUpdate,
    data: actionDataSuccess.data
  });

  let actionDataPending = {
    type: 'GET_DATA_PENDING'
  }

  let attendeesPendingUpdate = {
    isLoaded: false,
    isFetching: true
  };

  expect(attendees(initialState, actionDataPending)).toEqual({
    ...initialState,
    ...attendeesPendingUpdate
  });

  let actionDataFail = {
    type: 'GET_DATA_FAIL',
    error: "error"
  }

  let attendeesFailUpdate = {
    error: "error"
  };

  expect(attendees(initialState, actionDataFail)).toEqual({
    ...initialState,
    ...attendeesFailUpdate
  });
});
