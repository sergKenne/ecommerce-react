import {REMOVE_PRODUCT_BASKET} from '../actiontypes/index';


export const removeProductFromBasket = (id) => {
    return {
        type:REMOVE_PRODUCT_BASKET ,
        id: id
    }
}