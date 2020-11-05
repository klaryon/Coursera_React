import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishdetailComponent from "./DishdetailComponent"

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log('Menu Component constructor is invoked')
    }

    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked')
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish}); /* establishes that a dish was selected */ 
    }
    
    renderDish(dish) { 
        if(dish != null) { /* if there is a selected dish, then it will render */ 
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } 
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        //this prints in browser repeated food images with overlayed text
        const menu = this.props.dishes.map((dish) => { {/* we change this.props, because dishes have been stated in App.js and delivered here with props */}
            return (
                <div>
                    <Card onClick={() => this.onDishSelect(dish)}> {/* if we make click on one image, a dish is added .onDishSelect  */}
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay body className="ml-5"> {/* this overlays text over an image */}
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log('Menu Component render is invoked')

        //when dish image is clicked, prints in browser all original menu and below the selected dish and it's description
        return(
            <div className="container">
                <div className="row">
                    {menu} {/* this shows dish images with overlayed text*/}
                </div>
                <div className="row col-12 col-md-5 m-1"> 
                    {this.renderDish(this.state.selectedDish)} {/* this shows in browser the image + description */}
                </div>
            </div>
        );
    }
}

export default Menu;