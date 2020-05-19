import {ADD_FAVORITE, REMOVE_FAVORITE, CLEAN_FAVORITE} from '../actiontypes/index'

const initialState = JSON.parse(localStorage.getItem("favoriteProducts")) ? JSON.parse(localStorage.getItem("favoriteProducts")) : [];

const favoriteReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_FAVORITE : 
            return [...state, action.card];
        case REMOVE_FAVORITE :
            const filter = state.filter(item => item.id !== action.id);
            return filter;
        case CLEAN_FAVORITE:
            const box = [];
            return box;
        // case ADD_ALL:
        //     const prods = [action.products,...state]
        //     return prods;
        default:
            return state
    }
}

export default favoriteReducer;