
import React, { Component } from 'react'; //import React Component

import Footer from './Footer.js';
import Header from './Header.js';
import {Home} from './Home.js';
import {Stories} from './Stories.js';
import {AboutUs} from './AboutUs.js';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <main>
        <Header/>
        <Router>    
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/stories" component={Stories}/>
              <Route path="/aboutus" component={AboutUs}/>
            </Switch> 
        </Router>
        <Footer/>
      </main>
    );
  }
}

export default App;
