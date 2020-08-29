import React, { Component } from 'react'; //import React Component
import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from 'react-bootstrap';
import './css/App.css';

export class Header extends Component {
    render() {
        return(
            <Navbar className="nav" sticky="top">
                <Container>
                    <Navbar.Brand href="/" className="nav-brand">Behind the Bites</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto nav-links">
                            <Nav.Link href="/stories">Stories</Nav.Link>
                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;