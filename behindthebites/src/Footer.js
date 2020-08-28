import React, { Component } from 'react'; //import React Component
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class Footer extends Component {
    render() {
        return(
            <footer>
                <hr className="footer-content-divider"/>
                <div className="footer-content">
                    <Container className="footer-background">
                        <Row className="main-footer mt-4">
                            <Col xs={12} md={5}  className="footer-links"> 
                                <Row>
                                    <h5 className="footer-title">Behind the Bites</h5>
                                </Row>
                                <Row>
                                    <ul className="links">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/stories">Stories</a></li>
                                        <li><a href="/aboutus">About Us</a></li>
                                        <li><a href="https://github.com/mtapham/behindthebites" target="_blank" rel="noopener noreferrer">Github</a></li>
                                    </ul>
                                </Row>
                            </Col>
                        </Row>
                        <hr className="footer-credits-divider"/>
                        <Row className="footer-credits">
                            <Container>
                                <p>Behind the Bites ·&nbsp;
                                    <span>&copy; 2020 Nick Nagari, Michelle Pham, Larry Shan, Lucinda Zhang</span>
                                </p>
                            </Container>
                        </Row>
                    </Container>
                </div>
            </footer>
        );
    }
}

export default Footer;