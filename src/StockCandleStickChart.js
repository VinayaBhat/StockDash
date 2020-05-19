import React,{Component} from 'react'; 
import ReactApexChart from "react-apexcharts";
import "./StockBarChart.css"

class StockCandleStickChart extends Component 
{
    constructor(props) 
    {
      super(props);
      this.state = {
        options: {
          chart: {
            type: 'candlestick',
            height: 350
          },
          title: {
            text: 'CandleStick Stock Chart',
            align: 'left'
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        },
      };
     
    }
  
    render() 
    {  
      return (
          <div className="chart_container">
                    <ReactApexChart options={this.state.options} series={this.props.sd} type="candlestick" height={350} />
          </div>
      );
    }
  } 
export default StockCandleStickChart;
