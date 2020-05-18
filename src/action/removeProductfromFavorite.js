import {REMOVE_FAVORITE} from '../actiontypes/index';


export const removeProductfromFavorite = (id) => {
    return {
        type:REMOVE_FAVORITE ,
        id: id
    }
}