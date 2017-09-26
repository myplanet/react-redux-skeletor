import React from 'react';
import AttendeesList from '../components/AttendeesList/AttendeesList'

const Main = React.createClass({
  componentWillMount: function() {
      this.props.getData()
  },

  render() {
    // App is busy loading Data from API
    if (this.props.attendees.isLoaded === false) {
      return (
        <div>Loading...</div>
      )
    }

    // All data loaded, so render it.
    return (
      <div>
        <AttendeesList
          data={this.props.attendees.data}
        />
      </div>
    )
  }
});

export default Main;
