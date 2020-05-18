import React, { Component } from "react";
import { Table } from 'react-bootstrap'
import "./LoadStockTable.css";
import ReactCardFlip from "react-card-flip";
class LoadStockTable extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
      }
 
    handleClick = () => {
        this.setState({isFlipped:!this.state.isFlipped});
    };

    render()
    {
            return (
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div className="front-profile" onClick={this.handleClick}>
                    <div className="flex-item-profile">Stock data table</div>
                    <button className="button-front-profile" role="button" onClick={this.handleClick}>Show</button>
                </div>
                <div className="main-container" onClick={this.handleClick}>
            <div className="table-container">
                <Table bsPrefix="table-css" size="sm">
                <thead>
                    <tr>
                                <th className="cell">Date</th>
                                <th className="cell">Open</th>
                                <th className="cell">High</th>
                                <th className="cell">Low</th>
                                <th className="cell">Close</th>
                                <th className="cell">Volume</th>
                            </tr>
                    </thead>
                    <tbody>
                            {
                                this.props.stockprice.map(item=>(
                                <tr key={item.date}>
                                    <td className="cell">{item.date}</td>
                                    <td className="cell">{item.open}</td>
                                    <td className="cell">{item.high}</td>
                                    <td className="cell">{item.low}</td>
                                    <td className="cell">{item.close}</td>
                                    <td className="cell">{item.volume}</td>
                                </tr>))
                            }
                        </tbody>
                        </Table>
            </div>
            <button className="button-back-profile" role="button" onClick={this.handleClick}>Back</button>
            </div>
            </ReactCardFlip>);
    }
}
 
export default LoadStockTable