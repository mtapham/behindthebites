import React, { Component } from 'react'; //import React Component
import Container from 'react-bootstrap/Container';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

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
export class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        
                        {/* { <img
                            src="data:image/jpeg;base64,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"
                            alt="eating"
                            className="eating-img"
                            /> } */}
                    </Cell>
                </Grid>
            </div>
        );
    }
}
// export class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {activeTab: 0};
//     }
    
//     toggleCategories() {
//         if(this.state.activeTab === 0) {
//             return (
//                 // <div><h1>Featured Stories</h1></div>
//                 // <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
//                 //     <CardTitle style={{color: '#fff', height: '176px', background: 
//                 //     'url(http://www.getmdl.io/assets/demos/dog.png) top / cover'}}>Story 1</CardTitle> 
//                 //         <CardText>
//                 //             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 //             Aenan convallis.
//                 //         </CardText>
//                 // </Card>
//                 <Card shadow={0} style={{width: '256px', height: '256px', background: 
//                 'url(http://www.getmdl.io/assets/demos/dog.png) center / cover', margin: 'auto'}}>
//                     <CardTitle expand />
//                     <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
//                         <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
//                             Image.jpg
//                         </span>
//                     </CardActions>
//                 </Card>
//             )
//         }
//     }
//     render() {
//         return(
//             <div className="home-grid">
//                 <section className="stories-grid">
//                     <Grid className="stories-grid">
//                         <Cell col={12}>
//                             <div className="content">
//                                 {this.toggleCategories()}
//                             </div>
//                         </Cell>
//                     </Grid>
//                 </section>
//             </div>
//         )
//     }
// }

export default Home;

