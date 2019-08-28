import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import order from "./reducers/order"
import goodsList from "./reducers/goodsList"
import home from "./reducers/home"

const reducer  = combineReducers({
    order,
    goodsList,
    home


})

const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store