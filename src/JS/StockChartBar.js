import React, { Component } from 'react';
import "../CSS/StockChartBar.css";
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import StockBarChart from "./StockBarChart";
import StockLineChart from "./StockLineChart";
import StockCandleStickChart from "./StockCandleStickChart";
import { Button } from 'react-bootstrap';
import LoadStockTable from "./LoadStockTable";
import { Row, Col, Container } from 'react-bootstrap';
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
  //On select option from dropdown setting current selected value to value in state and on selecting 
  //candleStickChart if data is not set in state for candlestick chart then setting it.
  onSelectChange = (e) => {
    this.setState({value: e.target.value });
    if(e.target.value==="candleStickChart" && this.state.stockdata.length===0)
    {
      this.setState({stockdata:this.props.oneMonthPrice});
      var stock=[];
      for(let i=0;i<this.props.oneMonthPrice.length;i++)
      {
        var stockdataArr = [];
        stockdataArr.push(this.props.oneMonthPrice[i].date,this.props.oneMonthPrice[i].open,this.props.oneMonthPrice[i].high,this.props.oneMonthPrice[i].low,this.props.oneMonthPrice[i].close);
        stock.push(stockdataArr);
      }
        this.setState({ series: [{
            data: stock}]
        })
    }
  }
  
  //Below function is setting fivedays data to stockdata in state to display 5 days data in chart and in table when click on 5 days button
  //and also changing color of 5 days button to show it as active
  changeforFiveDays = () => {
    this.setState({stockdata:this.props.fiveDayPrice});
    var stock=[];
    for(let i=0;i<this.props.fiveDayPrice.length;i++)
    {
      var stockdataArr = [];
      stockdataArr.push(this.props.fiveDayPrice[i].date,this.props.fiveDayPrice[i].open,this.props.fiveDayPrice[i].high,this.props.fiveDayPrice[i].low,this.props.fiveDayPrice[i].close);
      stock.push(stockdataArr);
    }
      this.setState({ series: [{
          data: stock}]
      })
      this.setBtnColorOriginal();
      var btn =  document.getElementById('fived');
      btn.style.backgroundColor = "#D3D3D3";
  }

  //Below function is setting one month data to stockdata in state to display one month data in chart and in table when click on one month button
  //and also changing color of one month button to show it as active
  changeforOneMonth = () => { 
    this.setState({stockdata:this.props.oneMonthPrice});
    var stock=[];
    for(let i=0;i<this.props.oneMonthPrice.length;i++)
      {
        var stockdataArr = [];
        stockdataArr.push(this.props.oneMonthPrice[i].date,this.props.oneMonthPrice[i].open,this.props.oneMonthPrice[i].high,this.props.oneMonthPrice[i].low,this.props.oneMonthPrice[i].close);
        stock.push(stockdataArr);
      }
      this.setState({ series: [{
          data: stock}]
      })
     this.setBtnColorOriginal(); 
     var btn =  document.getElementById('onem');
     btn.style.backgroundColor = "#D3D3D3";
  }

  //Below function is setting all buttons color to original 
  setBtnColorOriginal()
  {
    var fivedbtn =  document.getElementById('fived');
    fivedbtn.style.backgroundColor = "#b3e6ff";
    var onembtn = document.getElementById('onem');
    onembtn.style.backgroundColor =  "#b3e6ff";
    var sixmbtn = document.getElementById('sixm');
    sixmbtn.style.backgroundColor = "#b3e6ff";
    var ytdbtn = document.getElementById('ytd');
    ytdbtn.style.backgroundColor = "#b3e6ff";
    var oneybtn = document.getElementById('oney');
    oneybtn.style.backgroundColor = "#b3e6ff";
    var twoybtn = document.getElementById('twoy');
    twoybtn.style.backgroundColor = "#b3e6ff";
    var fiveybtn = document.getElementById('fivey');
    fiveybtn.style.backgroundColor = "#b3e6ff";
  }

  //Below function is filtering past 6 month data from 5 years data and setting it to 
  //stockdata in state to display 6 month data in chart and in table when click on 6 month button
  //and also changing color of 6 month button to show it as active
  changeforSixMonths = () => {
    var date = new Date();
    var startdate = new Date(date.setMonth(date.getMonth()-6));
    var sixMonthData=this.props.stockprice.filter(function(obj){
      var temp = new Date(obj.date); 
      return temp>=startdate;
    }); 
    this.setState({stockdata:sixMonthData});
    var stock=[];
    for(let i=0;i<sixMonthData.length;i++)
      {
        var stockdataArr = [];
        stockdataArr.push(sixMonthData[i].date,sixMonthData[i].open,sixMonthData[i].high,sixMonthData[i].low,sixMonthData[i].close);
        stock.push(stockdataArr);
      }
      this.setState({ series: [{
          data: stock}]
      })
      this.setBtnColorOriginal(); 
      var btn =  document.getElementById('sixm');
      btn.style.backgroundColor = "#D3D3D3";
  }

  //Below function is filtering current year data from 5 years data and setting it to 
  //stockdata in state to display current year data in chart and in table when click on ytd button
  //and also changing color of ytd button to show it as active
  changeforYTD = () => { 
    var sdate = new Date(new Date().getFullYear(), 0, 1);
    var ytddata=this.props.stockprice.filter(function(obj){
      var temp = new Date(obj.date); 
      return temp>=sdate;
    }); 
    this.setState({stockdata:ytddata});
    var stock=[];
    for(let i=0;i<ytddata.length;i++)
      {
        var stockdataArr = [];
        stockdataArr.push(ytddata[i].date,ytddata[i].open,ytddata[i].high,ytddata[i].low,ytddata[i].close);
        stock.push(stockdataArr);
      }
      this.setState({ series: [{
          data: stock}]
      })
      this.setBtnColorOriginal(); 
      var btn =  document.getElementById('ytd');
      btn.style.backgroundColor = "#D3D3D3";
  }

  //Below function is filtering past 1 year data from 5 years data and setting it to 
  //stockdata in state to display past 1 year data in chart and in table when click on 1 year button
  //and also changing color of 1 year button to show it as active
  changeforOneYear = () =>{
    var sdate = new Date();
    sdate.setFullYear(sdate.getFullYear()-1);
    var oneyeardata=this.props.stockprice.filter(function(obj){
      var temp = new Date(obj.date); 
      return temp>=sdate;
    }); 
    this.setState({stockdata:oneyeardata});
    var stock=[];
    for(let i=0;i<oneyeardata.length;i++)
      {
        var stockdataArr = [];
        stockdataArr.push(oneyeardata[i].date,oneyeardata[i].open,oneyeardata[i].high,oneyeardata[i].low,oneyeardata[i].close);
        stock.push(stockdataArr);
      }
      this.setState({ series: [{
          data: stock}]
      })
      this.setBtnColorOriginal(); 
      var btn =  document.getElementById('oney');
      btn.style.backgroundColor = "#D3D3D3";
  }

  //Below function is filtering past 2 year data from 5 years data and setting it to 
  //stockdata in state to display past 2 year data in chart and in table when click on 2 year button
  //and also changing color of 2 year button to show it as active
  chageforTwoYear = () =>{
   var sdate = new Date();
    sdate.setFullYear(sdate.getFullYear()-2);
    var twoyeardata=this.props.stockprice.filter(function(obj){
      var temp = new Date(obj.date); 
      return temp>=sdate;
    }); 
    this.setState({stockdata:twoyeardata});
    var stock=[];
    for(let i=0;i<twoyeardata.length;i++)
      {
        var stockdataArr = [];
        stockdataArr.push(twoyeardata[i].date,twoyeardata[i].open,twoyeardata[i].high,twoyeardata[i].low,twoyeardata[i].close);
        stock.push(stockdataArr);
      }
      this.setState({ series: [{
          data: stock}]
      })
      this.setBtnColorOriginal(); 
      var btn =  document.getElementById('twoy');
      btn.style.backgroundColor = "#D3D3D3";
  }

    //Below function is setting 5 years data to stockdata in state to display past 5 year data in chart and in 
    //table when click on 5 year button and also changing color of 5 year button to show it as active
  changeforFiveYears = () => {
    this.setState({stockdata:this.props.stockprice});
    var stock=[];
    for(let i=0;i<this.props.stockprice.length;i++)
    {
      var stockdataArr = [];
      stockdataArr.push(this.props.stockprice[i].date,this.props.stockprice[i].open,this.props.stockprice[i].high,this.props.stockprice[i].low,this.props.stockprice[i].close);
      stock.push(stockdataArr);
    }
      this.setState({ series: [{
          data: stock}]
      })
      this.setBtnColorOriginal(); 
      var btn =  document.getElementById('fivey');
      btn.style.backgroundColor = "#D3D3D3";
  }

  //Below function is filtering data for input date range from 5 years data and setting it to 
  //stockdata in state to display filtered data in chart and in table when selecting date range from calender
  onDatesChange = ({ startDate, endDate }) => {
    
    this.setState({ startDate, endDate });
   
      if(startDate!=null && endDate!=null)
      {
          var filteredData=this.props.stockprice.filter(function(obj){
          var temp = new Date(obj.date); 
          return temp>=startDate && temp<=endDate;
          }); 
          this.setState({stockdata:filteredData});
          var stock=[];
          for(let i=0;i<filteredData.length;i++)
          {
            var stockdataArr = [];
            stockdataArr.push(filteredData[i].date,filteredData[i].open,filteredData[i].high,filteredData[i].low,filteredData[i].close);
            stock.push(stockdataArr);
          }
            this.setState({ series: [{
                data: stock}]
            })
      }
      this.setBtnColorOriginal();
  }
 
  render() {
    return (
     <div className="mainContainer">
      <div className="searchBar">
        <Container fluid>
          <Row className="row">
            <Col  md={1}>
                <Button aria-label="5d" variant="5day" className="button" onClick={this.changeforFiveDays} id="fived">5d</Button>
            </Col>
            <Col  md={1}>
                <Button aria-label="1m" variant="1month" className="button" onClick={this.changeforOneMonth} id="onem">1m</Button>
            </Col>
            <Col  md={1}> 
                <Button  aria-label="6m" variant="6months" className="button" onClick={this.changeforSixMonths} id="sixm">6m</Button>
            </Col>
            <Col  md={1}>
                <Button aria-label="ytd" variant="ytd" className="button" onClick={this.changeforYTD} id="ytd">ytd</Button>
            </Col>
            <Col  md={1}>
                <Button aria-label="1y" variant="1year" className="button" onClick={this.changeforOneYear} id="oney">1y</Button>
            </Col>
            <Col  md={1}>
                <Button aria-label="2y" variant="2years" className="button" onClick={this.chageforTwoYear} id="twoy">2y</Button>
            </Col>
            <Col  md={1}>
                <Button aria-label="5y" variant="5y" className="button" onClick={this.changeforFiveYears} id="fivey">5y</Button>
            </Col>
            <Col   md={1}>
              <select aria-label="charts" defaultValue={'lineChart'} className="dropDown" onChange={this.onSelectChange}>
                <option value="lineChart">Line</option>
                <option  value="candleStickChart">CandleStick</option>
                <option  value="barChart">Bar</option>
              </select>
            </Col>
            <Col  md={4}>
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
            </Col>
          
          </Row>
        </Container>
      </div>
     <div>
     {(() => {
        //If didn't get stock data for searched company from api then display none 
        if(this.props.stockprice===null || this.props.stockprice.length===0 )
        {
            return <div className="null_condition"></div>;
        }
        //If barchart is selected from dropdown then call barchar component
        else if(this.state.value==='barChart')
        {
          //load data for selected time
          if(this.state.stockdata.length!==0)
          {
            return <div className="StockChartTable">
              <StockBarChart sp={this.state.stockdata}/>
              <LoadStockTable stockprice={this.state.stockdata}/>
              </div>;
          }
          else
          {
            //by default load 1 month data
            return (this.props.oneMonthPrice===null)?<div className="null_condition"></div>:
            <div className="StockChartTable">
              <StockBarChart sp={this.props.oneMonthPrice}/>
              <LoadStockTable stockprice={this.props.oneMonthPrice}/>
            </div>
            ;
          }
        }
        //If lineChart is selected from dropdown then call lineChart component by default it will load line chart
        else if(this.state.value==='lineChart')
        {
          //load data for selected time
          if(this.state.stockdata.length!==0)
            return <div className="StockChartTable">
              <StockLineChart sp={this.state.stockdata}/>
              <LoadStockTable stockprice={this.state.stockdata}/>
              </div>;
          else
          {
            //by default load 1 month data
            return (this.props.oneMonthPrice===null)?<div className="null_condition"></div>:
            <div className="StockChartTable">
              <StockLineChart sp={this.props.oneMonthPrice}/>
              <LoadStockTable stockprice={this.props.oneMonthPrice}/>
              </div>;
          }
        }
        //If candleStickChart is selected from dropdown then call candleStickChart component
        else if(this.state.value==='candleStickChart')
        {
          return <div className="StockChartTable">
            <StockCandleStickChart sd={this.state.series}/>
            <LoadStockTable stockprice={this.state.stockdata}/>
            </div>
        }
        else
        {
          return <div className="null_condition"></div>
        }
      })()}
   </div>
   </div>
    );
  }
}

export default StockChartBar;