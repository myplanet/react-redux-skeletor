import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AttendeeCard from '../AttendeeCard/AttendeeCard';

class AttendeesList extends Component {
  render() {
    // All data loaded, so render it.
    return (
      <div>
        <h1>Attendees List</h1>
        {this.props.data.map((elem, key) => {
          return (
            <AttendeeCard
              key={key}
              {...elem}
            />
          )
        })}
      </div>
    )
  }
}

AttendeesList.propTypes = {
  data: PropTypes.array
};

export default AttendeesList;
