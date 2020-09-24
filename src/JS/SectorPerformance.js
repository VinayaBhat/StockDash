import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import "../CSS/SectorPerformance.css"
import { Bar } from 'react-chartjs-2';

//Sector Performance component to show the Daily Performance of different Sectors
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
    const chart_data = {
        labels: ['Basic Materials', 'Communication Services', 'Conglomerates',
            'Consumer Cyclical', 'Consumer Defensive', 'Energy', 'Financial', 'Financial Services', 'Healthcare',
            'Industrial Goods', 'Industrials', 'Real Estate', 'Services', 'Technology', 'Utilities'],
        datasets: [
            {
                label: 'Sectors',
                backgroundColor: function (context) {
                    var index = context.dataIndex;
                    var value = context.dataset.data[index];
                    return value < 0 ? '#8F0000' :
                        '#004D00';
                },
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: [parseFloat(basicMaterials),
                parseFloat(CommunicationServices),
                parseFloat(Conglomerates),
                parseFloat(ConsumerCyclical),
                parseFloat(ConsumerDefensive),
                parseFloat(Energy),
                parseFloat(Financial),
                parseFloat(FinancialServices),
                parseFloat(Healthcare),
                parseFloat(IndustrialGoods),
                parseFloat(Industrials),
                parseFloat(RealEstate),
                parseFloat(Services),
                parseFloat(Technology),
                parseFloat(Utilities)]
            }
        ]
    }

    function checkSign(value) {
        var num = value.replace('%', '');
        num = parseFloat(num);
        if (num < 0) {
            return true;
        }
        return false;
    }
    return (
        <Container className="sector_container">
            <Row className="sector_row_heading">
                <Col xs={12}> Daily Performance of Sectors:</Col>
            </Row>
            <Row>
                <Col xs={12} className="chart">
                    <Bar aria-label="bar chart for sector performance"
                        data={chart_data}
                        options={{
                            legend: {
                                display: false,
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        fontColor: "black",
                                    }
                                }],
                                xAxes: [{
                                    ticks: {
                                        fontColor: "black",
                                    }
                                }]
                            }

                        }
                        }
                    />
                </Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading" xs={12} sm={6}>Basic Materials: </Col>
                <Col className="sector_content" style={{ color: checkSign(basicMaterials) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{basicMaterials}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading" xs={12} sm={6}>Communication Services: </Col>
                <Col className="sector_content" style={{ color: checkSign(CommunicationServices) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{CommunicationServices}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading" xs={12} sm={6}>Conglomerates: </Col>
                <Col className="sector_content" style={{ color: checkSign(Conglomerates) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{Conglomerates}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading" xs={12} sm={6}>Consumer Cyclical: </Col>
                <Col className="sector_content" style={{ color: checkSign(ConsumerCyclical) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{ConsumerCyclical}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading" xs={12} sm={6}>ConsumerDefensive: </Col>
                <Col className="sector_content" style={{ color: checkSign(ConsumerDefensive) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{ConsumerDefensive}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading" xs={12} sm={6}>Energy: </Col>
                <Col className="sector_content" style={{ color: checkSign(Energy) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{Energy}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading" xs={12} sm={6}>Financial: </Col>
                <Col className="sector_content" style={{ color: checkSign(Financial) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{Financial}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading" xs={12} sm={6}>FinancialServices: </Col>
                <Col className="sector_content" style={{ color: checkSign(FinancialServices) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{FinancialServices}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading" xs={12} sm={6}>Healthcare: </Col>
                <Col className="sector_content" style={{ color: checkSign(Healthcare) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{Healthcare}</Col>
            </Row>
            <Row className="sector_row" >
                <Col className="sector_heading" xs={12} sm={6}>IndustrialGoods: </Col>
                <Col className="sector_content" style={{ color: checkSign(IndustrialGoods) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{IndustrialGoods}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading" xs={12} sm={6}>Industrials: </Col>
                <Col className="sector_content" style={{ color: checkSign(Industrials) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{Industrials}</Col>
            </Row>
            <Row className="sector_row" >
                <Col className="sector_heading" xs={12} sm={6}>RealEstate: </Col>
                <Col className="sector_content" style={{ color: checkSign(RealEstate) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{RealEstate}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading" xs={12} sm={6}>Services: </Col>
                <Col className="sector_content" style={{ color: checkSign(Services) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{Services}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading" xs={12} sm={6}>Technology: </Col>
                <Col className="sector_content" style={{ color: checkSign(Technology) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{Technology}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading" xs={12} sm={6}>Utilities: </Col>
                <Col className="sector_content" style={{ color: checkSign(Utilities) === true ? "#8F0000" : "#004D00" }} xs={12} sm={6}>{Utilities}</Col>
            </Row>
        </Container>
    )
}

export default SectorPerformance;