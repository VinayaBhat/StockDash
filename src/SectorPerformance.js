import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import "./SectorPerformance.css"


const SectorPerformance = ({
basicMaterials,
CommunicationServices,
Conglomerates,
ConsumerCyclical,
ConsumerDefensive,
Energy,
Financial,
FinancialServices,
Healthcare,
IndustrialGoods,
Industrials,
RealEstate,
Services,
Technology,
Utilities
}) => {

    function checkSign(value){
        var num=value.replace('%','');
        num=parseFloat(num);
        if(num<0){
            return true;
        }
        return false;
    }
 return(
    <Container className="sector_container">
    <Row className="sector_row_heading">
        <Col xs={12}> Daily Performance of Sectors:</Col>
    </Row>
    <Row className="sector_row">
        <Col className="sector_heading" xs={12} sm={6}>Basic Materials: </Col>
        <Col className="sector_content" style={{color: checkSign(basicMaterials)===true?"red":"green"}} xs={12} sm={6}>{basicMaterials}</Col>
    </Row>
    <Row className="sector_row">
        <Col className="sector_heading" xs={12} sm={6}>Communication Services: </Col>
        <Col  className="sector_content"style={{color: checkSign(CommunicationServices)===true? "red":"green"}}  xs={12} sm={6}>{CommunicationServices}</Col>
    </Row>
    <Row className="sector_row">
        <Col className="sector_heading" xs={12} sm={6}>Conglomerates: </Col>
        <Col className="sector_content" style={{color: checkSign(Conglomerates)===true?"red":"green"}} xs={12} sm={6}>{Conglomerates}</Col>
    </Row>     
    <Row className="sector_row">
        <Col className="sector_heading" xs={12} sm={6}>Consumer Cyclical: </Col>
        <Col className="sector_content" style={{color: checkSign(ConsumerCyclical)===true?"red":"green"}} xs={12} sm={6}>{ConsumerCyclical}</Col>
    </Row>
    <Row className="sector_row">
        <Col className="sector_heading" xs={12} sm={6}>ConsumerDefensive: </Col>
        <Col className="sector_content" style={{color: checkSign(ConsumerDefensive)===true?"red":"green"}} xs={12} sm={6}>{ConsumerDefensive}</Col>
    </Row>
    <Row className="sector_row">
        <Col className="sector_heading"  xs={12} sm={6}>Energy: </Col>
        <Col className="sector_content" style={{color: checkSign(Energy)===true?"red":"green"}} xs={12} sm={6}>{Energy}</Col>
    </Row>
    <Row className="sector_row">
        <Col className="sector_heading"  xs={12} sm={6}>Financial: </Col>
        <Col className="sector_content"  style={{color: checkSign(Financial)===true?"red":"green"}} xs={12} sm={6}>{Financial}</Col>
    </Row>
    <Row className="sector_row">
        <Col className="sector_heading" xs={12} sm={6}>FinancialServices: </Col>
        <Col className="sector_content" style={{color: checkSign(FinancialServices)===true?"red":"green"}} xs={12} sm={6}>{FinancialServices}</Col>
    </Row>
    <Row className="sector_row">
        <Col className="sector_heading"  xs={12} sm={6}>Healthcare: </Col>
        <Col className="sector_content" style={{color: checkSign(Healthcare)===true?"red":"green"}} xs={12} sm={6}>{Healthcare}</Col>
    </Row>                   
    <Row className="sector_row" >
        <Col className="sector_heading" xs={12} sm={6}>IndustrialGoods: </Col>
        <Col className="sector_content" style={{color: checkSign(IndustrialGoods)===true?"red":"green"}} xs={12} sm={6}>{IndustrialGoods}</Col>
    </Row>
    <Row className="sector_row">
        <Col className="sector_heading" xs={12} sm={6}>Industrials: </Col>
        <Col className="sector_content" style={{color: checkSign(Industrials)===true?"red":"green"}} xs={12} sm={6}>{Industrials}</Col>
    </Row>
    <Row className="sector_row" >
        <Col className="sector_heading"  xs={12} sm={6}>RealEstate: </Col>
        <Col className="sector_content" style={{color: checkSign(RealEstate)===true?"red":"green"}} xs={12} sm={6}>{RealEstate}</Col>
    </Row>      
    <Row className="sector_row">
        <Col className="sector_heading" xs={12} sm={6}>Services: </Col>
        <Col className="sector_content" style={{color: checkSign(Services)===true?"red":"green"}} xs={12} sm={6}>{Services}</Col>
    </Row>
    <Row className="sector_row">
        <Col className="sector_heading" xs={12} sm={6}>Technology: </Col>
        <Col className="sector_content" style={{color: checkSign(Technology)===true?"red":"green"}} xs={12} sm={6}>{Technology}</Col>
    </Row>    
    <Row className="sector_row">
        <Col className="sector_heading" xs={12} sm={6}>Utilities: </Col>
        <Col className="sector_content" style={{color: checkSign(Utilities)===true?"red":"green"}} xs={12} sm={6}>{Utilities}</Col>
    </Row>                      
</Container>
 )
}

export default SectorPerformance;