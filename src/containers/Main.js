import React from 'react';
import AttendeeCard from '../components/AttendeeCard/AttendeeCard'

const Main = React.createClass({
  componentWillMount: function() {
      this.props.getData()
  },

  render() {
    // App is busy loading Data from API
    if (this.props.attendee.isLoaded === false) {
      return (
        <div>Loading...</div>
      )
    }

    console.log(AttendeeCard);

    // All data loaded, so render it.
    return (
      <div>
        <AttendeeCard
          data={this.props.attendee.data}
        />
      </div>
    )
  }
});

export default Main;
