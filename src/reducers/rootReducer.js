import {combineReducers} from 'redux'
import basketReducer from './basketReducer'
import sortReducer from "./sortReducer"
import favoriteReducer from './favoriteReducer'

const rootReducer = combineReducers({
    productsBasket: basketReducer,
    dataSort: sortReducer,
    favoriteProducts: favoriteReducer
})

export default rootReducer;