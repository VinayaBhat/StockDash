import React,{Component} from 'react'; 
import { Row, Col, Container } from 'react-bootstrap';
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
        <Container className="chart_container">
        <Row>
              <Col xs={12} className="chart">
                    <ReactApexChart options={this.state.options} series={this.props.sd} type="candlestick" height={350} />
            </Col>
            </Row>
       </Container>
      );
    }
  } 
export default StockCandleStickChart;
