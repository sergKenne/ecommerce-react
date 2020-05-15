import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe( () => {
   // console.log("Store:", store.getState());
    localStorage.setItem("productsInBasket", JSON.stringify(store.getState().productsBasket));
    //console.log("productsInBasket:", JSON.parse(localStorage.getItem("productsInBasket")))
})

export default store;