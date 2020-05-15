import {combineReducers} from 'redux'
import basketReducer from './basketReducer'

const rootReducer = combineReducers({
    productsBasket: basketReducer
})

export default rootReducer;