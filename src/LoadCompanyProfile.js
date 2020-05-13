import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import './LoadCompanyProfile.css'
import {Row,Col,Container} from 'react-bootstrap';



const LoadCompanyProfile = ({
    beta,
    ceo,
    changes,
    changesPercentage,
    companyName,
    description,
    exchange,
    image,
    industry,
    lastDiv,
    mktCap,
    price,
    range,
    sector,
    volAvg,
    website
}) => {
    let percent=changesPercentage.replace(/[()]/g,'');
    const intpercent=parseInt(percent, 10);   
    const [isFlipped, setIsFlipped] = useState(false);    
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="front-profile" onClick={handleClick}>
                <div className="flex-item-profile">{companyName} Profile</div>
                <button className="button-front-profile" onClick={handleClick}>Show</button>
            </div>
            <div className="back-profile" onClick={handleClick}>
                <Container fluid>
                    <Row className="profile-pic">
                        <Col><img src={image}></img></Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>Company Name: </Col>
                        <Col className="profile-content">{companyName}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>Industry: </Col>
                        <Col className="profile-content">{industry}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>Sector: </Col>
                        <Col className="profile-content">{sector}</Col>
                    </Row>     
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>CEO: </Col>
                        <Col className="profile-content">{ceo}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>Description: </Col>
                        <Col className="profile-content description">{description}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>Price: </Col>
                        <Col className="profile-content"> $ {price}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>Range: </Col>
                        <Col className="profile-content"> $ {range}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>Exchange: </Col>
                        <Col className="profile-content">{exchange}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>Changes: </Col>
                        <Col className="profile-content changepercent" style={{color: changes<0?"red":"green"}}>{changes}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>Changes Percentage: </Col>
                        <Col className="profile-content" style={{color: Math.sign(intpercent)===-1?"red":"green"}} >{changesPercentage}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>Beta: </Col>
                        <Col className="profile-content">{beta}</Col>
                    </Row>                   
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>Market Capitalization: </Col>
                        <Col className="profile-content">{mktCap}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>Latest Dividend: </Col>
                        <Col className="profile-content">{lastDiv}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>Average Volume: </Col>
                        <Col className="profile-content">{volAvg}</Col>
                    </Row>                      
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={3}>Website: </Col>
                        <Col className="profile-content"><a href={website}>{website}</a></Col>
                    </Row>
                </Container>
                <button className="button-back-profile" onClick={handleClick}>Back</button>
            </div>
        </ReactCardFlip>
    )
}

export default LoadCompanyProfile;