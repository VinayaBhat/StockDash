import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';
import "./StockBarChart.css" 

// defaults.global.maintainAspectRatio = false
class StockBarChart extends Component 
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
            backgroundColor:'rgba(54, 128, 45, 0.76)',
            borderColor: 'rgba(0,0,0,0.7)',
            borderWidth: 2,
            data: stockChartYValues
          }
        ]
      }
    
      return (
                  <div className="chart_container">
                    <Bar
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

export default StockBarChart;