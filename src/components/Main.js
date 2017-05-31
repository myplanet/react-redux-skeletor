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

    // All data loaded, so render it.
    return (
      <div>
          {this.props.data.data.map(function(item, index) {
              return (
                  <div key={index}>
                      <p>{item.title}</p>
                  </div>
              )
          })}
      </div>
    )
  }
});

export default Main;
