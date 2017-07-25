import React from 'react';
import Card from './Card'

class Main extends React.Component {
  componentWillMount() {
      this.props.getData()
  }

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
                  <Card key={index} {...item}/>
              )
          })}
      </div>
    )
  }
};

export default Main;
