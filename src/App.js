import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'
import './App.css';
import { DISHES } from './shared/dishes';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color='primary'>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/> {/* this dishes variable will be used int MenuComponents.js line 45 in const menu = this.props.dishes.map()  */}
      </div>
    );
  }
}

export default App;
