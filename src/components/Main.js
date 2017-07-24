import React from 'react';

const Main = React.createClass({
  componentWillMount: function() {
      this.props.getData()
  },

  render() {
    // App is busy loading Data from API
    if (this.props.data.isLoaded === false) {
      return (
        <div>Loading...</div>
      )
    }

    // App is busy loading Data from API
    if (this.props.data.error) {
      return (
        <div>Error: {this.props.data.error}</div>
      )
    }

    // All data loaded, so render it.
    return (
      <div>
          {this.props.data.data.map(function(item, index) {
              return (
                  <div key={index}>
                      <h2>{item.title}</h2>
                      <p>{item.featured ? 'featured' : ''}</p>
                      <p>{item.description}</p>
                      <hr/>
                  </div>
              )
          })}
      </div>
    )
  }
});

export default Main;
