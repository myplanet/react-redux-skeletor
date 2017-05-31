import React from 'react';
import Slider from './Slider'

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

  getInitialState: function() {
    // Populate initial component value from props.
    return {
      readonly: false
    }
  },

  toggleReadOnly: function() {
    this.setState({
      readonly: !this.state.readonly
    });
  },

  render() {
    let {readonly} = this.state;

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
        <input type="checkbox" onChange={this.toggleReadOnly} checked={readonly}/>

        <Slider
          withInputControl 
          labelPrefix="" 
          labelSuffix="" 
          readonly={readonly}
          filterOptions={this.props.filters.options} 
          filterValues={this.props.filters.values} 
          onChange={this.props.filterValue}
        />

        {this.props.data.dataFiltered.map(function(item, index) {
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
