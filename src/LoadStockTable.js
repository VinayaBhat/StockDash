import React, { Component } from "react";
import { Table } from 'react-bootstrap'
import "./LoadStockTable.css"
class LoadStockTable extends Component{
    render()
    {
            return (
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
                            };
                        </tbody>
                        </Table>
            </div>);
    }
}
 
export default LoadStockTable