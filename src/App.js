import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import Showcase from './components/Showcase';
import Footer from './components/footer/Footer'
import $ from 'jquery';
import { scriptJs } from './assets/js/script';
scriptJs();


function App() {
  const h1 = $('h1');
  return (
    <Router>
      <div className="wrapper">
        <Header />
          <Switch>
            <Route exact path="/" component={Showcase}/>
          </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
