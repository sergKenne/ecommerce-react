import {ADD_FAVORITE} from '../actiontypes/index';

export const addProductToFavorite = (card) => {
    return {
        type: ADD_FAVORITE,
        card: card
    }
}