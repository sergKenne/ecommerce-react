import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Showcase from './components/Showcase';
import Footer from './components/footer/Footer'
import $ from 'jquery';
import { scriptJs } from './assets/js/script';
scriptJs();


function App() {
  const h1 = $('h1');
  return (
    <div className="wrapper">
      <Header />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
