import React, { Component } from 'react'; //import React Component

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Jumbotron from 'react-bootstrap/Jumbotron';

//  Material UI

// Card
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

// pop up tab
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Pop up
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';


// caraousel
import Carousel from 'react-bootstrap/Carousel'

// Icons
import Chip from '@material-ui/core/Chip';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';

// Drop Down
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

// Styling
import { makeStyles } from '@material-ui/core/styles';


// imgs
import helpingothers from './img/helpingothers.jpg';
import dinein from './img/dine-in.jpg'

//data
import stories from './data/stories.json';

//css
import './css/App.css';


const useAccordianCardStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      color: 'white',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));


const useAccordionStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const useCardStyles = makeStyles({
    root: {
    minWidth: 275,
    },
    bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    },
    title: {
    fontSize: 14,
    },
    pos: {
    marginBottom: 12,
    },
});


export class RestaurantRow extends Component {
    state = {
        show: false
    }

    handleClick = () => {
        this.setState({show:!this.state.show});
    }

    render() {
        let restaurant = this.props.restaurant;

        let carouselPhotoPreview = restaurant.galleryimgs.map((img) => {
            return (
                <Carousel.Item><img src={img} className="sliderimg restaurant-preview-imgs"/></Carousel.Item>
            );
        });

        let carouselPhoto = restaurant.galleryimgs.map((img) => {
            return (
                <Carousel.Item><img src={img} className="sliderimg restaurant-imgs"/></Carousel.Item>
            );
        });

        let tags = restaurant.tags.map((tag) => {
            return (
                <Chip label={tag} variant="outlined" className="tag"/>
            );
        });

        const classes = useCardStyles;

        return (
            <div>
                <Card className={classes.root, "restaurant-row"} >
                    <CardContent>
                        <Row>
                            <Col xs={12} md={4}>
                                <Carousel className="preview-carousel">
                                    {carouselPhotoPreview}
                                </Carousel>                        
                            </Col>
                            <Col xs={12} md={8} onClick={this.handleClick}>
                                <Typography variant="h5" component="h2" style={{fontFamily: "Lato", fontWeight:"700", fontSize: "1.3em", marginBottom: ".1em"}}>{restaurant.name}</Typography>
                                <Typography className={classes.pos} color="textSecondary" style={{fontFamily: "Lato", fontWeight:"400", fontSize: ".8em", marginBottom: ".7em"}}>Since {restaurant.year}</Typography>
                                <Chip label={restaurant.area} variant="outlined" className="tag"/>
                                {tags}
                            </Col>
                        </Row>
                    </CardContent>
                </Card>

                <Modal 
                    show={this.state.show}
                    onHide={this.handleClick}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col xs={12} md={5}>
                                    <Carousel autoPlay autoPlayInterval="3000" className="modal-carousel">
                                        {carouselPhoto}
                                    </Carousel>
                                </Col>
                                <Col xs={12} md={7}>
                                    <Card className="restaurant-contact-info" variant="outlined">
                                        <CardContent>
                                            <Container>
                                                <Row className="restaurant-name">
                                                    <Typography className="card-title" style={{fontFamily: "Lato", fontWeight:"700", fontSize: "1.3em", marginBottom: ".1em"}}>{restaurant.name}</Typography>
                                                </Row>
                                                <Row className="restaurant-year">
                                                    <Typography className={classes.pos} color="textSecondary" style={{fontFamily: "Lato", fontWeight:"400", fontSize: ".8em", marginBottom: ".7em"}}>Since {restaurant.year}</Typography>
                                                </Row>
                                                <Row className="restaurant-tags">
                                                    {tags}
                                                </Row>
                                                <Row className="restaurant-number">
                                                    <PhoneIcon className="icons"/>
                                                    {restaurant.phonenumber}
                                                </Row>
                                                <Row className="restaurant-address">
                                                    <BusinessIcon className="icons"/>
                                                    {restaurant.address}
                                                </Row>
                                                <Row className="restaurant-website">
                                                    <CardActions>
                                                        <Button href={restaurant.website} target={"_blank"} size="small">Official Website</Button>
                                                    </CardActions>
                                                </Row>
                                            </Container>
                                        </CardContent>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Container>
                                    <p className="story-credits">Story Credits: {restaurant.storycredits}</p>
                                    <div className="story-content">
                                        {restaurant.story1}
                                        <br/>
                                        <br/>
                                        {restaurant.story2}
                                        <br/>
                                        <br/>
                                        {restaurant.story3}
                                    </div>
                                </Container>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}


export class HowToHelp extends Component {
    render() {
        const accordianCardClasses = useAccordianCardStyles;
        const accordionClasses = useAccordionStyles;

        return(
            <Accordion style={{position:"fixed", bottom:"0", width:"20em"}} className="how-to-help">
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                    <Typography className={accordionClasses.heading} style={{fontFamily:'Karla'}}>How You Can Help</Typography>
                </AccordionSummary>
            <Card className={accordianCardClasses.root, "how-to-help-card"} >                          
                <CardContent>
                    <CardMedia
                    component="img"
                    alt="Supportive People"
                    width="50"
                    image={helpingothers}
                    title="Supportive People"
                    style={{height:"10em", width: "13em", marginLeft:"2em"}}
                    />
                    <Carousel autoPlay autoPlayInterval="3000" className="preview-carousel" style={{marginTop:"2em"}}>    
                        <Carousel.Item>
                            <CardActionArea>
                                <Typography gutterBottom component="h2" style={{fontFamily:'Karla'}}>
                                    Order Take Out
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:'Lato', fontWeight:"400"}}>
                                    Just because you can’t eat at your favorite restaurant doesn’t mean you can’t enjoy
                                    that restaurant’s food. One solution to mandatory closures is to order in, whether
                                    for pick-up or delivery.
                                </Typography>
                            </CardActionArea>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardActionArea>
                                <Typography gutterBottom omponent="h2" style={{fontFamily:'Karla'}}>
                                    Order restaurant-made meal kits
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:'Lato', fontWeight:"400"}}>
                                    Tons of restaurants are offering weekly, and sometimes daily, special-order meal kits
                                    for pick-up and delivery. These meal kits aren’t your standard containers of take-out;
                                    they’re thoughtfully-prepared packages that can feed whole families.
                                </Typography>
                            </CardActionArea>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardActionArea>
                                <Typography gutterBottom component="h2" style={{fontFamily:'Karla'}}>
                                    Buy gift cards
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:'Lato', fontWeight:"400"}}>
                                    Support restaurants now and dine at them later by buying a gift card.
                                    When you purchase one, those funds are immediately deposited into the restaurant,
                                    so stock up on holiday gifts and birthday presents for your loved ones.
                                </Typography>
                            </CardActionArea>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardActionArea>
                                <Typography gutterBottom component="h2" style={{fontFamily:'Karla'}}>
                                    Get your hands on some merch
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:'Lato', fontWeight:"400"}}>
                                Supporting restaurants, bars, breweries, coffee shops, cafés, bakeries, and other small businesses
                                in the hospitality world goes far beyond eating and drinking. Many of these places have awesome merch
                                (t-shirts! tote bags! really cozy sweatshirts!), and now’s the time to get shopping.
                                </Typography>
                            </CardActionArea>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardActionArea>
                                <Typography gutterBottom component="h2" style={{fontFamily:'Karla'}}>
                                    Tip 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:'Lato', fontWeight:"400"}}>
                                    Just because you're not dining in, doesn't mean you shouldn't leave a tip. Though you might
                                    otherwise not have left one for takeout under normal circumstances, today everything counts. 
                                </Typography>
                            </CardActionArea>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardActionArea>
                                <Typography gutterBottom component="h2" style={{fontFamily:'Karla'}}>
                                    Write positive reviews 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:'Lato', fontWeight:"400"}}>
                                    A quick, easy way to support restaurants right now—without spending any money—is by writing
                                    positive reviews on platforms such as Google and Yelp. 
                                </Typography>
                            </CardActionArea>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardActionArea>
                                <Typography gutterBottom component="h2" style={{fontFamily:'Karla'}}>
                                    Like, Comment, Share
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:'Lato', fontWeight:"400"}}>
                                    Liking, sharing, and posting on platforms like Twitter and Instagram takes minimal effort
                                    but have the potential to make an impact. If nothing else, it shows the restaurant community that you’ve got their back.
                                </Typography>
                            </CardActionArea>
                        </Carousel.Item>
                    </Carousel>    
                </CardContent>
            </Card>
        </Accordion>
        );

    }
}

export class Stories extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            restaurants: stories,
            neighborhood: null,
            filter: null,
            reset: false
        };
    }

    selectNeighborhood = (event) => {
        this.setState({neighborhood: event.target.value});
    };

    selectTag = (event) => {
        this.setState({filter: event.target.value});
    };

    handleReset = (event) => {
        this.setState(
            {
                neighborhood: null,
                filter: null
            }
        );
    }

    render() {
        const classes = useAccordianCardStyles;

        let filteredRestaurants = this.state.restaurants;

        // filters seattle restaurants by area
        if (this.state.neighborhood !== null) { 
            filteredRestaurants = filteredRestaurants.filter((restaurant) => {
                return(restaurant.area === this.state.neighborhood);
            })
        }

        // filters seattle restaurants by tag
        if (this.state.filter !== null) { 
            filteredRestaurants = filteredRestaurants.filter((restaurant) => {
                return(restaurant.tags.includes(this.state.filter));
            })
        }

        let restaurantRows = filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantRow restaurant={restaurant} key={restaurant.name}/>
            );
        });
        
        return(
            <div className="bg-img">
                <Row>
                    <Col className="search-restaurants-banner-contents">
                        <Jumbotron fluid className="bg-text" style={{background: "none"}}>
                            <h1>Select a Neighborhood</h1>
                            <p>Learn more about the unique local restaurants that make up Seattle rich food scene!</p>
                            <div>
                                <FormControl variant="filled" className={classes.formControl} style={{minWidth: 200, marginRight: '1em'}}>
                                    <InputLabel id="demo-simple-select-filled-label" style={{color: "white"}} >Seattle Neighborhood</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={this.state.neighborhood}
                                        onChange={this.selectNeighborhood}
                                        style={{color: "white"}}
                                    >
                                        <MenuItem value="University District">University District</MenuItem>
                                        <MenuItem value="Capital Hill">Capital Hill</MenuItem>
                                        <MenuItem value="International District">International District</MenuItem>
                                    </Select>
                                </FormControl>
                                
                                <FormControl variant="filled" className={classes.formControl} style={{minWidth: 200, marginRight: '1em'}}>
                                    <InputLabel id="demo-simple-select-filled-label" style={{color: "white"}}>Tags</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={this.state.filter}
                                        onChange={this.selectTag}
                                        style={{color: "white"}}
                                    >
                                        <MenuItem value="Women-Owned">Women-Owned</MenuItem>
                                        <MenuItem value="Black-Owned">Black-Owned</MenuItem>
                                        <MenuItem value="Minority-Owned">Minority-Owned</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button size="medium" className={classes.margin} onClick={this.handleReset}>Reset</Button>
                            </div>
                        </Jumbotron>
                    </Col>
                    <Col>
                        <img src={dinein} className="dine-in-img"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={9}>
                        <Container>
                            {restaurantRows}  
                        </Container>   
                    </Col>    
                    <Col xs={12} md={3}>
                        <HowToHelp/>
                    </Col>             
                </Row>
            </div>
        );
    }
}

export default Stories;