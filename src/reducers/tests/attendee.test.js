import attendee from '../attendee'

test('Attendee Reduser test', () => {
  let initialState = attendee(undefined, {type: null});

  let actionDataSuccess = {
    type: 'GET_DATA_SUCCESS',
    data: { test: "test" }
  };

  let attendeeSuccessUpdate = {
    isLoaded: true,
    isFetching: false
  };

  expect(attendee(initialState, actionDataSuccess)).toEqual({
    ...initialState,
    ...attendeeSuccessUpdate,
    data: actionDataSuccess.data
  });

  let actionDataPending = {
    type: 'GET_DATA_PENDING'
  }

  let attendeePendingUpdate = {
    isLoaded: false,
    isFetching: true
  };

  expect(attendee(initialState, actionDataPending)).toEqual({
    ...initialState,
    ...attendeePendingUpdate
  });

  let actionDataFail = {
    type: 'GET_DATA_FAIL',
    error: "error"
  }

  let attendeeFailUpdate = {
    error: "error"
  };

  expect(attendee(initialState, actionDataFail)).toEqual({
    ...initialState,
    ...attendeeFailUpdate
  });
});
