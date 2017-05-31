/**
 * @file Slider component.
 */

'use strict';

import React from 'react';
import ReactSlider from 'react-slider';

/**
 * React slider component.
 */
const Slider = React.createClass({
  getInitialState: function() {
    // Populate initial filter values.
    return {
      inputMin: this.props.filterValues.min,
      inputMax: this.props.filterValues.max,
      inputValueMin: this.props.filterValues.min,
      inputValueMax: this.props.filterValues.max
    }
  },
  getDefaultProps: function () {
    return {
      className: '',
      labelPrefix: '',
      labelSuffix: '',
      filterValues: {min: 0, max: 0},
      filterOptions: {min: 0, max: 0},
      onChange: () => {}
    };
  },
  componentWillReceiveProps: function (nextProps) {
    // Update component state (values visualized) when external state
    // has been updated.
    if (this.props.filterValues.min !== nextProps.filterValues.min || this.props.filterValues.max !== nextProps.filterValues.max) {
      this.setState({
        inputMin: nextProps.filterValues.min,
        inputMax: nextProps.filterValues.max,
        inputValueMin: nextProps.filterValues.min,
        inputValueMax: nextProps.filterValues.max
      });
    }
  },
  onChange: function (value) {
    // Component submits the value in percentage.
    // Recalculate percentage into the actual values and call onChange passed through props.
    var adjustedValue = {};
    adjustedValue['min'] = Math.round((this.props.filterOptions.max - this.props.filterOptions.min) * (value[0]/100) + this.props.filterOptions.min);
    adjustedValue['max'] = Math.round((this.props.filterOptions.max - this.props.filterOptions.min) * (value[1]/100) + this.props.filterOptions.min);

    this.setState({
      inputMin: adjustedValue['min'], 
      inputMax: adjustedValue['max'],
      inputValueMin: adjustedValue['min'], 
      inputValueMax: adjustedValue['max']
    });

    this.props.onChange(adjustedValue);
  },
  handleInputChange: function(value, type) {
    // Strip any non-numeric characters from input value.
    let inputValue = value.replace(/\D/g,'');

    // Update filter value.
    this.state[type] = inputValue;
    this.setState(this.state);
  },
  submitInputChange: function(value, type) {
    // If user picked Duration From to be larger than Duration To.
    if (parseInt(this.state.inputValueMin) > parseInt(this.state.inputValueMax)) {
      // If Duration From has been modified, reset value to default it.
      if (type == 'inputValueMin') {
        this.state[type] = this.props.filterOptions.min;
      }
      // If Duration To has been modified, reset value to default it.
      else if (type == 'inputValueMax') {
        this.state[type] = this.props.filterOptions.max;
      }
      this.setState(this.state);
    }

    // If Minimum set out of bounds, reset field to default.
    if (Number.isNaN(parseInt(this.state.inputValueMin)) || parseInt(this.state.inputValueMin) < parseInt(this.props.filterOptions.min)) {
      this.state[type] = this.props.filterOptions.min;
      this.setState({inputValueMin: this.props.filterOptions.min});
    }

    // If Maximum set out of bounds, reset field to default.
    if (Number.isNaN(parseInt(this.state.inputValueMax)) || parseInt(this.state.inputValueMax) > parseInt(this.props.filterOptions.max)) {
      this.state[type] = this.props.filterOptions.max;
      this.setState({inputValueMax: this.props.filterOptions.max});
    }

    // Apply input field values to the slider.
    this.setState({inputMin: this.state.inputValueMin, inputMax: this.state.inputValueMax});
    this.props.onChange({min: this.state.inputValueMin, max: this.state.inputValueMax});
  },
  render: function () {
    let initialValues = [], inputMin, inputMax;
    initialValues.push(((this.state.inputMin - this.props.filterOptions.min) / (this.props.filterOptions.max - this.props.filterOptions.min)) * 100);
    initialValues.push(((this.state.inputMax - this.props.filterOptions.min) / (this.props.filterOptions.max - this.props.filterOptions.min)) * 100);

    let inputValues = {...this.state};

    return (
      <div className="react-slider">
          {this.props.withInputControl &&
            <div className="slider-inputs clearfix">
              <input className="slider-input-min form-control" type="text" value={inputValues.inputValueMin} onChange={(e) => this.handleInputChange(e.target.value, "inputValueMin")} onBlur={(e) => this.submitInputChange(e.target.value, "inputValueMin")} disabled={this.props.readonly}/>
              <input className="slider-input-max form-control" type="text" value={inputValues.inputValueMax} onChange={(e) => this.handleInputChange(e.target.value, "inputValueMax")} onBlur={(e) => this.submitInputChange(e.target.value, "inputValueMax")} disabled={this.props.readonly}/>
            </div>
          }

          <ReactSlider withBars value={initialValues} onChange={this.onChange} disabled={this.props.readonly}>
            <div className="my-handle"></div>
            <div className="my-handle"></div>
          </ReactSlider>

          {!this.props.withInputControl &&
            <div className="slider-values clearfix">
              <div className="slider-value-min">{this.props.labelPrefix} {this.props.filterValues.min} {this.props.labelSuffix}</div>
              <div className="slider-value-max">{this.props.labelPrefix} {this.props.filterValues.max} {this.props.labelSuffix}</div>
            </div>
          }
      </div>
    );
  }
});

export default Slider;
