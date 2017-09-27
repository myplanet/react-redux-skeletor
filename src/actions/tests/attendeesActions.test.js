import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actionCreators'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import config from '../../config.json';
import { apiEndpoints } from '../../constants/endpoints'
import mockedObject from './attendeeMock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Attendees actions', () => {
  it('creates GET_DATA_SUCCESS when fetching attendees has been done', () => {
    let endpointId = 'attendee'
    let endpoint = apiEndpoints[endpointId]

    var mock = new MockAdapter(axios);
    const data = mockedObject;

    mock.onGet(endpoint.url).reply(200, data);

    const expectedActions = [
      { type: 'GET_DATA_PENDING' },
      { type: 'GET_DATA_SUCCESS', data: mockedObject}
    ]
    const store = mockStore({ attendees: [] })

    return store.dispatch(actions.getData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});
