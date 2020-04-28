import React, { useEffect } from 'react';

import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import BasketModal from './components/modal/BasketModal';
import LikeModal from './components/modal/LikeModal';
//import $ from 'jquery';
//import 'materialize-css';
import 'slick-carousel';
import { script } from './assets/js/script'



function App() {
  useEffect( function() {
    script();
  }, []) ;

  return (
    <Router>
      <div className="wrapper">
        <Header />
          <Switch>
            <Route exact path="/" component={ Home }/>
          </Switch>
        <Footer />
        <BasketModal/>
        <LikeModal/>
      </div>
    </Router>
    
  );
}

export default App;
