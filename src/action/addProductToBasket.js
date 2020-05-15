import {ADD_PRODUCT_BASKET} from '../actiontypes/index';

export const addProductToBasket = (card) => {
    return {
        type: ADD_PRODUCT_BASKET,
        card: card

    }
}
