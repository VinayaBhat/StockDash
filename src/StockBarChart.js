import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';
import "./StockBarChart.css"
import { Row, Col, Container } from 'react-bootstrap';

// defaults.global.maintainAspectRatio = false
class StockBarChart extends Component 
{
  render() 
  {
    var stockChartXValues=[];
    var stockChartYValues=[];

    this.props.sp.map(item=>
        {
            stockChartXValues.push(item.date);
            stockChartYValues.push(item.close);
        })
       
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
        <Container className="chart_container">
          <Row>
                <Col xs={12} className="chart">
                 
                {/* <div className="chart"> */}

                    <Bar
                    className="barChart"
                    data={state}
                    options={{
                        title:{
                        display:true,
                        text:'Stock Closing Price',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'bottom'
                        } 
                    }}
                    />
                    {/* </div> */}
                   
                   </Col>
            </Row>
       </Container> 
      );
  }
}

export default StockBarChart;