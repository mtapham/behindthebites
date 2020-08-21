import React, { Component } from 'react'; //import React Component
import Container from 'react-bootstrap/Container';
import pic from './group.PNG';

import './App.css';

export class AboutUs extends Component {
    render() {
        return(
            <Container>
                <h1>Hello this is the About Us Page Content</h1>

                <div class = "container">
                    <img src = {pic}
                     class ="img-rounded" 
                     alt="team picture"/>
                </div>

                <div align="left" class="multiline">
                    Local restaurants and businesses are the core of the city. They bring old friends
                    together for a night of catching up, families together for a holiday reunion, and
                    strangers together to connect and tell stories. But there is still one story yet to be told.

                    Hey! We’re students at the University of Washington and our goal with this project was
                    to create a resource that would highlight the authentic and inspiring stores behind local
                    restaurants in Seattle. Admist Covid-19 a lot has changed. Local restaurants were one
                    of the first to take the hit and many have been forced to shut down. With this resource
                    we hope to humanize the establishments that make up such an important part of our
                    city and provide resources on how we can help out.
                </div>

            </Container>
        );
    }
}

export default AboutUs;

