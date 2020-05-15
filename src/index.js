import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/index';
import {Provider} from 'react-redux';
//import 'materialize-css/dist/css/materialize.min.css'
//import 'materialize-css/dist/js/materialize.min.js'
//import '../node_modules/materialize-css/dist/js/materialize.min.js';
import * as serviceWorker from './serviceWorker';

//localStorage.setItem("productsInBasket", ["1","3"]);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
