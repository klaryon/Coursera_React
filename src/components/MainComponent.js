import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent'
import DishDetail from "./DishdetailComponent"
import { DISHES } from '../shared/dishes';

class Main extends Component { /* Main becomes COMPONENT AS A CONTAINER */

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId}); /* establishes that a dish was selected */ 
}

  render() {
    return (
      <div>
        <Navbar dark color='primary'>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> {/* if we make click on one image, a dish is added .onDishSelect  */}

        <DishDetail 
        dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} /> {/* searches selected dish using filter by Id  */}
      </div>
    );
  }
}

export default Main;
