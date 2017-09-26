import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AttendeesCard extends Component {
  render() {
    let {firstName, lastName, dorgId, bio, presenter} = this.props

    return (
      <div className="attendee-card">
        {presenter &&
          <span className="-tag">Presenting</span>
        }
        <h3>{`${firstName} ${lastName}`}</h3>
        <p className="-bio">{bio}</p>
        <p className="-id">Drupal.org ID: {dorgId}</p>
      </div>
    )
  }
}

AttendeesCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  dorgId: PropTypes.string,
  bio: PropTypes.string,
  presenter: PropTypes.bool
};

export default AttendeesCard;
