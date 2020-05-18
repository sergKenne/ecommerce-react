import {LOWEST, HIGHEST} from '../actiontypes/index'
import db from '../assets/js/data/db';
const initialState = db.electronic;

const sortReducer = (state=initialState, action) => {

    switch(action.type) {
        case LOWEST:
            const lowest = state.sort((a, b) => a.price - b.price);
            return lowest;
        case HIGHEST:
            const highest =  state.sort((a, b) => b.price - a.price);
            return highest;
        default:
            return state;
    }
}

export default sortReducer