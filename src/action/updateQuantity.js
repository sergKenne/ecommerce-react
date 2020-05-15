import {UPDATE_QUANTITY} from '../actiontypes/index';

export const updateQuantity = (basket) => {
    return {
        type: UPDATE_QUANTITY,
        basket: basket
    }
}