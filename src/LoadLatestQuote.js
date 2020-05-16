import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import './LoadLatestQuote.css'
import { Table } from 'react-bootstrap'

//Loading the latest quote of the origanization
const LoadLatestQuote = ({
    open,
    high,
    low,
    close,
    volume,
    logo_img
}) => {
    //Used to set the state of the React Card
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="front" onClick={handleClick}>
                <div className="flex-item"> <p>Latest Quote of the Organization</p></div>
                <div className="flex-item"><img src={logo_img['url']} alt="company logo"></img></div>
                <div className="flex-item"><button className="button-front" role="button" onClick={handleClick}>Show</button></div>
            </div>
            <div className="back" onClick={handleClick}>
                <Table bsPrefix="table-css" size="sm">
                    <tbody>
                        <tr className="row11">
                            <td className="cell">Open</td>
                            <td className="cell open">$ {open}</td>
                        </tr>
                        <tr className="row22">
                            <td className="cell">High</td>
                            <td className="cell high">$ {high}</td>
                        </tr>
                        <tr className="row11">
                            <td className="cell">Low</td>
                            <td className="cell low">$ {low}</td>
                        </tr>
                        <tr className="row22">
                            <td className="cell">Close</td>
                            <td className="cell closing">$ {close}</td>
                        </tr>
                        <tr className="row11">
                            <td className="cell">Volume</td>
                            <td className="cell">{volume}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="flex-item-back">
                    <button className="button-back" role="button" onClick={handleClick}>Back</button>
                </div>
            </div>
        </ReactCardFlip>
    )
}

export default LoadLatestQuote