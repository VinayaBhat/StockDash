import React, { Component } from 'react';
import "./StockChartBar.css";

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates';
import StockBarChart from "./StockBarChart";
import StockLineChart from "./StockLineChart";
class StockChartBar extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      value:'barChart'
    };
    this.onSelectChange=this.onSelectChange.bind(this)
  }

  onSelectChange = (e) => {
    this.setState({value: e.target.value });
  }

  render() {
    return (
     <div className="mainContainer">
      <div className="searchBar">
        <div className="itemcontainer">
          <select className="dropDown" onChange={this.onSelectChange}>
            <option selected value="barChart">BarChart</option>
            <option value="lineChart">LineChart</option>
          </select>
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        />
        </div>
      </div>
     <div>
     {this.props.stockprice == null || this.props.stockprice.length==0 ? <div className="null_condition"></div> : (this.state.value=='barChart'? <StockBarChart sp={this.props.stockprice}/>:(this.state.value=='lineChart'? <StockLineChart sp={this.props.stockprice}/>:<div className="null_condition"></div>))}
   </div>
   </div>
    );
  }
}

export default StockChartBar;