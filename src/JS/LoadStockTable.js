import React, { Component } from "react";
import { Table } from 'react-bootstrap'
import "../CSS/LoadStockTable.css";
import ReactCardFlip from "react-card-flip";
class LoadStockTable extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
      }
    //set flip status  
    handleClick = () => {
        this.setState({isFlipped:!this.state.isFlipped});
    };

    render()
    {
            return (
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div className="front-table" onClick={this.handleClick}>
                    <div className="flex-table-item">Stock data table</div>
                    <button className="button-table-front" onClick={this.handleClick}>Show</button>
                </div>
                <div className="main-container" onClick={this.handleClick}>
                    <div tabIndex="0" className="table-container">
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
                                        //used stockprice data which is passed in props from component which called load stock table component
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
                    <button className="button-table-back" onClick={this.handleClick}>Back</button>
                </div>
                </ReactCardFlip>);
    }
}
 
export default LoadStockTable