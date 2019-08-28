import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import order from "./reducers/order"
import home from "./reducers/home"

const reducer  = combineReducers({
    order,
    home
})

const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store