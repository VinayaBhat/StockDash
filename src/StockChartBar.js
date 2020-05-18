import React, { Component } from 'react';
import "./StockChartBar.css";
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import StockBarChart from "./StockBarChart";
import StockLineChart from "./StockLineChart";
import StockCandleStickChart from "./StockCandleStickChart";
import { Button } from 'react-bootstrap';

class StockChartBar extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      value:'lineChart',
      stockdata:[],
      series: [{data:[]}] ,
      oneDayChart:null
    };
    this.onSelectChange=this.onSelectChange.bind(this)
  }

  onSelectChange = (e) => {
    this.setState({value: e.target.value });
  }

  changeforFiveDays = () => {
    this.setState({stockdata:this.props.fiveDayPrice});
    var stock=[];
    this.props.fiveDayPrice.map(item=>
          {
              var stockdataArr = [];
              stockdataArr.push(item.date,item.open,item.high,item.low,item.close);
              stock.push(stockdataArr);
          });
      this.setState({ series: [{
          data: stock}]
      })
  }

  changeforOneMonth = () => {
    this.setState({stockdata:this.props.oneMonthPrice});
    var stock=[];
    this.props.oneMonthPrice.map(item=>
          {
              var stockdataArr = [];
              stockdataArr.push(item.date,item.open,item.high,item.low,item.close);
              stock.push(stockdataArr);
          });
      this.setState({ series: [{
          data: stock}]
      })
  }

  changeforSixMonths = () => {
    var date = new Date();
    var startdate = new Date(date.setMonth(date.getMonth()-6));
    var sixMonthData=this.props.stockprice.filter(function(obj){
      var temp = new Date(obj.date); 
      return temp>=startdate;
    }); 
    this.setState({stockdata:sixMonthData});
    var stock=[];
    sixMonthData.map(item=>
          {
              var stockdataArr = [];
              stockdataArr.push(item.date,item.open,item.high,item.low,item.close);
              stock.push(stockdataArr);
          });
      this.setState({ series: [{
          data: stock}]
      })
  }

  changeforYTD = () => { 
    var sdate = new Date(new Date().getFullYear(), 0, 1);
    var ytddata=this.props.stockprice.filter(function(obj){
      var temp = new Date(obj.date); 
      return temp>=sdate;
    }); 
    this.setState({stockdata:ytddata});
    var stock=[];
    ytddata.map(item=>
          {
              var stockdataArr = [];
              stockdataArr.push(item.date,item.open,item.high,item.low,item.close);
              stock.push(stockdataArr);
          });
      this.setState({ series: [{
          data: stock}]
      })
  }

  changeforOneYear = () =>{
    var sdate = new Date();
    sdate.setFullYear(sdate.getFullYear()-1);
    var oneyeardata=this.props.stockprice.filter(function(obj){
      var temp = new Date(obj.date); 
      return temp>=sdate;
    }); 
    this.setState({stockdata:oneyeardata});
    var stock=[];
    oneyeardata.map(item=>
          {
              var stockdataArr = [];
              stockdataArr.push(item.date,item.open,item.high,item.low,item.close);
              stock.push(stockdataArr);
          });
      this.setState({ series: [{
          data: stock}]
      })
  }

  chageforTwoYear = () =>{
   var sdate = new Date();
    sdate.setFullYear(sdate.getFullYear()-2);
    var twoyeardata=this.props.stockprice.filter(function(obj){
      var temp = new Date(obj.date); 
      return temp>=sdate;
    }); 
    this.setState({stockdata:twoyeardata});
    var stock=[];
    twoyeardata.map(item=>
          {
              var stockdataArr = [];
              stockdataArr.push(item.date,item.open,item.high,item.low,item.close);
              stock.push(stockdataArr);
          });
      this.setState({ series: [{
          data: stock}]
      })
  }

  changeforFiveYears = () => {
    this.setState({stockdata:this.props.stockprice});
    var stock=[];
    this.props.stockprice.map(item=>
          {
              var stockdataArr = [];
              stockdataArr.push(item.date,item.open,item.high,item.low,item.close);
              stock.push(stockdataArr);
          });
      this.setState({ series: [{
          data: stock}]
      })
  }

  onDatesChange = ({ startDate, endDate }) => {
    
    this.setState({ startDate, endDate });
    console.log(this.state.startDate);
          if(startDate!=null && endDate!=null)
      {
          var filteredData=this.props.stockprice.filter(function(obj){
          var temp = new Date(obj.date); 
          return temp>=startDate && temp<=endDate;
          }); 
          this.setState({stockdata:filteredData});
          var stock=[];
          filteredData.map(item=>
                {
                    var stockdataArr = [];
                    stockdataArr.push(item.date,item.open,item.high,item.low,item.close);
                    stock.push(stockdataArr);
                });
            this.setState({ series: [{
                data: stock}]
            })
      }
  }
 
  render() {
    return (
     <div className="mainContainer">
      <div className="searchBar">
        <div className="itemcontainer">
        <Button variant="5day" className="button" 
         onClick={this.changeforFiveDays}>5 day</Button>
        <Button variant="1month" className="button"
         onClick={this.changeforOneMonth}>1 month</Button>
        <Button variant="6months" className="button"
         onClick={this.changeforSixMonths}>6 months</Button>
        <Button variant="ytd" className="button"
        onClick={this.changeforYTD}>YTD</Button>
        <Button variant="1year" className="button"
        onClick={this.changeforOneYear}>1 year</Button>
        <Button variant="2years" className="button"
        onClick={this.chageforTwoYear}>2 years</Button>
          <Button variant="5y" className="button"
        onClick={this.changeforFiveYears}>5 years</Button>
          <select className="dropDown" onChange={this.onSelectChange}>
            <option selected value="lineChart">LineChart</option>
            <option value="candleStickChart">CandleStickChart</option>
            <option value="barChart">BarChart</option>
          </select>
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          isOutsideRange={day => (moment().diff(day) < 0)} 
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        />
        </div>
      </div>
     <div>
     {(() => {
         
        if(this.props.stockprice==null || this.props.stockprice.length==0 )
        {
            return <div className="null_condition"></div>;
        }
        else if(this.state.value=='barChart')
        {
          if(this.state.stockdata.length!=0)
          {
            return <StockBarChart sp={this.state.stockdata}/>;
          }
          else
          {
            return <StockBarChart sp={this.props.oneMonthPrice}/>;
          }
        }
        else if(this.state.value=='lineChart')
        {
          if(this.state.stockdata.length!=0)
            return <StockLineChart sp={this.state.stockdata}/>;
          else
            return <StockLineChart sp={this.props.oneMonthPrice}/>;
        }
        else if(this.state.value=='candleStickChart')
        {
           
          if(this.state.series.length!=0)
          {
            return <StockCandleStickChart sd={this.state.series}/>
          }
          else
          {
            return <StockCandleStickChart sd={this.props.series}/>
          }
        }
      })()}
   </div>
   </div>
    );
  }
}

export default StockChartBar;