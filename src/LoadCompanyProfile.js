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
    percent=percent.replace('%','');
    
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
                        <Col><img src={image} alt="company logo"></img></Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>Company Name: </Col>
                        <Col className="profile-content" xs={12} sm={9}>{companyName}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>Industry: </Col>
                        <Col className="profile-content" xs={12} sm={9}>{industry}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>Sector: </Col>
                        <Col className="profile-content" xs={12} sm={9}>{sector}</Col>
                    </Row>     
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>CEO: </Col>
                        <Col className="profile-content" xs={12} sm={9}>{ceo}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>Description: </Col>
                        <Col className="profile-content description" xs={12} sm={9}>{description}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>Price: </Col>
                        <Col className="profile-content" xs={12} sm={9}> $ {price}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>Range: </Col>
                        <Col className="profile-content" xs={12} sm={9}> $ {range}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>Exchange: </Col>
                        <Col className="profile-content" xs={12} sm={9}>{exchange}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>Changes: </Col>
                        <Col className="profile-content changepercent" style={{color: changes<0?"red":"green"}} xs={12} sm={9}>{changes}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>Changes Percentage: </Col>
                        <Col className="profile-content" style={{color: (parseFloat(percent)<0)?"red":"green"}} xs={12} sm={9}>{changesPercentage}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>Beta: </Col>
                        <Col className="profile-content" xs={12} sm={9}>{beta}</Col>
                    </Row>                   
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>Market Capitalization: </Col>
                        <Col className="profile-content" xs={12} sm={9}>{mktCap}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>Latest Dividend: </Col>
                        <Col className="profile-content" xs={12} sm={9}>{lastDiv}</Col>
                    </Row>
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>Average Volume: </Col>
                        <Col className="profile-content" xs={12} sm={9}>{volAvg}</Col>
                    </Row>                      
                    <Row className="row-profile">
                        <Col className="profile-heading" xs={12} sm={3}>Website: </Col>
                        <Col className="profile-content" xs={12} sm={9}><a href={website} rel="noopener noreferrer" target="_blank">{website}</a></Col>
                    </Row>
                </Container>
                <button className="button-back-profile" onClick={handleClick}>Back</button>
            </div>
        </ReactCardFlip>
    )
}

export default LoadCompanyProfile;