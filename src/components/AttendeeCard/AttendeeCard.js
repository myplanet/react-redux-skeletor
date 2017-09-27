import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AttendeeCard extends Component {
  render() {
    let {field_firstname, field_lastname, field_bio, field_presenter} = this.props.data

    return (
      <div className="attendee-card">
        {field_presenter[0]['value'] &&
          <span className="-tag">Presenting</span>
        }
        <div className="-icon">
          <img src="https://openclipart.org/image/2400px/svg_to_png/247324/abstract-user-flat-1.png"/>
        </div>
        <h3>{`${field_firstname[0]['value']} ${field_lastname[0]['value']}`}</h3>
        <p className="-bio">{field_bio[0]['value']}</p>
      </div>
    )
  }
}

AttendeeCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  dorgId: PropTypes.string,
  bio: PropTypes.string,
  presenter: PropTypes.bool
};

export default AttendeeCard;
