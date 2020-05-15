import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import BasketModal from './components/modal/BasketModal';
import LikeModal from './components/modal/LikeModal';
import ErrorPage from './components/errorPage/ErrorPage'
import Shop from './components/shop/Shop'
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import { script } from './assets/js/script'
//import $ from 'jquery';
import 'slick-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

class App extends Component {

  componentDidMount() {
      script();

  }

  render() {

      return (
        <Router>
          <div className="wrapper">
            <Header />
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route path="/products/:id" component={ Products }/>
              <Route path="/shop" component={ Shop }/>
              <Route path="/cart" component={ Cart }/>
              <Route  component={ ErrorPage }/>
            </Switch>
            <Footer />
            <BasketModal/>
            <LikeModal/>
          </div>
        </Router>
        
      );
    }
}

export default App;
