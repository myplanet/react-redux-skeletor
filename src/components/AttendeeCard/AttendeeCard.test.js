import React from 'react';
import {shallow, render, mount} from 'enzyme';
import AttendeeCard from './AttendeeCard'

test('Attendee Card renders name', () => {
  let data = {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    bio: 'bio...'
  }

  const wrapper = render(
    <AttendeeCard
      {...data}
    />
  );

  expect(wrapper.find('h3').text()).toEqual('John Smith');
  expect(wrapper.find('.-bio').text()).toEqual('bio...');
});
