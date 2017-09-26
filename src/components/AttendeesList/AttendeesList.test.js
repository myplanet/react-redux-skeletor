import React from 'react';
import {shallow, render, mount} from 'enzyme';
import AttendeesList from './AttendeesList'


test('Attendees list rendered', () => {
  let data = [{
    id: 1,
    name: 'John Smith'
  }, {
    id: 2,
    name: 'Peter Noname'
  }]

  const wrapper = mount(
    <AttendeesList
      data={data}
    />
  );

  expect(wrapper.find('.attendee-card')).toHaveLength(2);
});
