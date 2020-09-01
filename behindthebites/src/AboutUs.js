import React, { Component } from 'react'; //import React Component
import Container from 'react-bootstrap/Container';
import pic1 from './img/Michelle.jpg';
import pic2 from './img/Larry.jpg';
import pic3 from './img/Lucinda.jpg';
import pic4 from './img/Nick.jpg';

import './css/App.css';

export class AboutUs extends Component {
    render() {
        return(
            <Container>
                <h1>About Us</h1>

                <div class = "piccontainer"> 
                    <div class = "picwords">
                        <img src = {pic1} class ="img-rounded pics" alt="Michelle"/>
                        <a href="https://www.linkedin.com/in/michelletapham/" class="name">Michelle Pham</a>
                        <span>Front-End Developer</span>
                    </div>
                    <div class = "picwords">
                        <img src = {pic2} class ="img-rounded pics" alt="Michelle"/>
                        <a href="https://www.linkedin.com/in/larryshan/" class="name">Larry Shan</a>
                        <span>Front-End Developer</span>
                    </div>
                    <div class = "picwords">
                        <img src = {pic3} class ="img-rounded pics" alt="Michelle"/>
                        <a href="https://www.linkedin.com/in/lucinda-zhang/" class="name">Lucinda Zhang</a>
                        <span>UI/UX Designer</span>
                        <span>Technical Writer</span>
                    </div>
                    <div class = "picwords">
                        <img src = {pic4} class ="img-rounded pics" alt="Michelle"/>
                        <a href="https://www.linkedin.com/in/nicknagari/" class="name">Nick Nagari</a>
                        <span>Front-End Developer</span>
                    </div>
                </div>

                <div align="left" class="multiline">
                    Local restaurants and businesses are the core of the city. They bring old friends
                    together for a night of catching up, families together for a holiday reunion, and
                    strangers together to connect and tell stories. But there is still one story yet to be told.
                    <br></br>
                    <br></br>
                    Hey! We’re students at the University of Washington and our goal with this project was
                    to create a resource that would highlight the authentic and inspiring stories behind local
                    restaurants in Seattle. Admist Covid-19 a lot has changed. Local restaurants were one
                    of the first to take the hit and many have been forced to shut down. With this resource
                    we hope to humanize the establishments that make up such an important part of our
                    city and provide resources on how we can help out.
                    <br></br>
                </div>

            </Container>
        );
    }
}

export default AboutUs;
