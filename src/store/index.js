import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import order from "./reducers/order"
import goodsList from "./reducers/goodsList"

const reducer  = combineReducers({
    order,
    goodsList
})

const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store