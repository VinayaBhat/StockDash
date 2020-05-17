import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';
import "./StockBarChart.css"
import { Row, Col, Container } from 'react-bootstrap';

class StockLineChart extends Component 
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
        <Container className="chart_container">
          <Row>
                <Col xs={12} className="chart">
                    <Line
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
                        position:'right'
                        }
                    }}
                    />
                </Col>
            </Row>
       </Container>
      );
  }
}

export default StockLineChart;