import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import './LoadLatestQuote.css'
import { Table } from 'react-bootstrap'


const LoadLatestQuote = ({
    open,
    high,
    low,
    close,
    volume
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="front">
                <p className="flex-item">Latest Quote of the Organization</p>
                <button className="flex-item button-front" onClick={handleClick}>Show</button>
            </div>
            <div className="back">
                <Table bsPrefix="table-css" size="sm">
                    <tbody>
                        <tr className="row1">
                            <td className="cell">Open</td>
                            <td className="cell">${open}</td>
                        </tr>
                        <tr className="row2">
                            <td className="cell">High</td>
                            <td className="cell">${high}</td>
                        </tr>
                        <tr className="row1">
                            <td className="cell">Low</td>
                            <td className="cell">${low}</td>
                        </tr>
                        <tr className="row2">
                            <td className="cell">Close</td>
                            <td className="cell">${close}</td>
                        </tr>
                        <tr className="row1">
                            <td className="cell">Volume</td>
                            <td className="cell">{volume}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </ReactCardFlip>
    )
}

export default LoadLatestQuote