import React, { Component } from 'react'; //import React Component
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './App.css';

export class Stories extends Component {
    render() {
        return(
            <Row className="stories-content">
                <Col md="7" className="search-restaurants-bg">
                    <Jumbotron fluid className="bg-dark bg-text search-restaurants-banner">
                        <Container>
                            <h1>Select a Neighborhood</h1>
                            <p>
                                Learn more about the unique local restaurants that make up Seattle rich food scene!
                            </p>
                        </Container>
                    </Jumbotron>
                </Col>

                <Col md="5" className="seattle-map"/>
            </Row>


        );
    }
}

export default Stories;