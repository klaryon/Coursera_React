import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from "./DishdetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> {/* if we make click on one image, a dish is added .onDishSelect  */}
        <DishDetail 
        dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} /> {/* searches selected dish using filter by Id  */}
        <Footer />
      </div>
    );
  }
}

export default Main;
