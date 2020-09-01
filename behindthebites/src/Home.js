import React, { Component } from 'react'; //import React Component
import Container from 'react-bootstrap/Container';
import front from './img/EarlsFront.jpg';
import pool from './img/Pool.jpg';
import bar from './img/Bar.jpg';

import './css/App.css';


export class Home extends Component {
    render() {
        return(
            <Container>
                <div className="landing-pic">

                    <div className="title">Behind the Bites</div>
                    <div className="statement">Behind the Bites is a resource to learn about small Seattle restaurants.</div>
                    <div className="extra-space"></div>
                    </div>
                    <div className="story-title">Featured Story: Earl's on the Ave.</div>

                        
                    <div class = "piccontainer"> 

                        <img src = {pool} class ="img-rounded pics homepic" />

                        <img src = {front} class ="img-rounded pics homepic" />

                        <img src = {bar} class ="img-rounded pics homepic" />

                    </div>


                    
                    <div className="story-text">
                    Earls on the Ave opened its doors in 2006 to create a place for students, husky fans, and others in the Seattle UDistrict area to enjoy cheap drinks and tasty food. The owner, Robert, is a UW alum himself and enjoys seeing how the crowds who visit have changed over time. In the past 16 years, Earls on the Ave has seen Mackelmore, Ryan Lewis, Richard Sherman, Chelsey Lately, and a whole lot of UW football and baseball players. 
                    In the long-term, Earls on the Ave plans to expand and open another bar in the Udistrict. Perfect for bar hopping; the more bars the better!
                    <br></br>
                    <br></br>
                    Visit Earl's on the Ave and try their must-have wings.
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="more-stories">Interested in seeing more stories about Seattle restaurants?</div>
                    <a href="stories" className="link">Click Here!</a>
                    </div>

                
            </Container>
        );
    }
}
                        

export default Home;

