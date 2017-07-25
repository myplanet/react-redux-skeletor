import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    // All data loaded, so render it.
    return (
      <div>
          <h1>{this.props.title}</h1>
          <p>{this.props.featured ? 'featured' : ''}</p>
          <p>{this.props.description}</p>
          <hr/>
      </div>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

Card.defaultProps = {
  title: 'default title',
  subtitle: 'default subtitle'
};

export default Card;
