/*
 * API Endpoint constants.
 */
import config from '../config.json';

export const apiEndpoints = {
  attendees: {
    url: `${ config.apiURL }/attendees`,
    method: 'GET',
    timeout: 10000,
    schema: 'attendeesSchema.json'
  },
  attendee: {
    url: `${ config.apiURL }/attendee`,
    method: 'GET',
    timeout: 10000,
    schema: 'attendeeSchema.json'
  }
}
