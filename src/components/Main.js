import React from 'react';

const Main = React.createClass({
  componentWillMount: function() {
    this.props.init();
  },

  filterData: function (e) {
    this.props.filterData(e.target.value);
  },

  onButtonClick: function(id) {
    this.props.deleteUser(id);
  },

  render() {
    // App is busy loading Data from API
    if (this.props.data.isLoaded === false) {
      return (
        <div>Loading...</div>
      )
    }

    let app = this;

    // All data loaded, so render it.
    return (
      <div>
          Search: <input type="text" onKeyUp={this.filterData}/>
          {this.props.data.data.map(function(item, index) {
              return (
                  <div key={index}>
                      <p>{item.name}</p>
                      <p>{item.sname}</p>
                      <button onClick={(e) => { console.log(item); app.onButtonClick(item.id) }}>x</button>
                      <hr/>
                  </div>
              )
          })}
      </div>
    )
  }
});

export default Main;
