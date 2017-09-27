import React from 'react';
import {shallow, render, mount} from 'enzyme';
import AttendeeCard from './AttendeeCard'

test('Attendee Card renders name', () => {
  let data = {
    field_presenter: [{"value" : true}],
    field_firstname: [{"value" : "John"}],
    field_lastname: [{"value" : "Smith"}],
    field_bio: [{"value" : "bio..."}]
  }

  const wrapper = render(
    <AttendeeCard
      data={data}
    />
  );

  expect(wrapper.find('h3').text()).toEqual('John Smith');
  expect(wrapper.find('.-bio').text()).toEqual('bio...');
});
