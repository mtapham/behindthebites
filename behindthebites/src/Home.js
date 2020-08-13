import React, { Component } from 'react'; //import React Component
import Container from 'react-bootstrap/Container';

import './App.css';

export class Home extends Component {
    render() {
        return(
            <Container>
                <h1>Hello this is the Home Page Content</h1>
            </Container>
        );
    }
}

export default Home;

