import {ADD_PRODUCT_BASKET, REMOVE_PRODUCT_BASKET, UPDATE_QUANTITY, ADD_ALL} from '../actiontypes/index'

const initialState = JSON.parse(localStorage.getItem("productsInBasket")) ? JSON.parse(localStorage.getItem("productsInBasket")) :  [];

const basketReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_PRODUCT_BASKET : 
            return [...state, action.card];
        case REMOVE_PRODUCT_BASKET :
            const filter = state.filter(item => item.id !== action.id);
            return filter;
        case UPDATE_QUANTITY :
            const basket = action.basket;
            return basket;
        case ADD_ALL: 
            const prods = action.products
            return prods;
        default:
             return state
    }
}

export default basketReducer;