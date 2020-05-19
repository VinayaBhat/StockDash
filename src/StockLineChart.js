import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';
import "./StockBarChart.css" 

class StockLineChart extends Component 
{
  render() 
  {
    var stockChartXValues=[];
    var stockChartYValues=[];
    
    this.props.sp.forEach(insertValues);

    function insertValues(item)
    {
      stockChartXValues.push(item.date);
      stockChartYValues.push(item.close);
    }    
       
    const state = {
        labels: stockChartXValues,
        datasets: [
          {
            label: 'Closing Price',
            fill: true,
            lineTension: 0.5,
            backgroundColor:'rgba(54, 128, 45, 0.76)',
            borderColor: 'rgba(0,0,0,0.5)',
            borderWidth: 2,
            data: stockChartYValues
          }
        ]
      }
    
      return (
        <div className="chart_container">
                    <Line
                    className="barChart"
                    data={state}
                    options={{
                        legend:{
                        display:true,
                        position:'bottom'
                        }
                    }}
                    />
                    </div>
      );
  }
}

export default StockLineChart;