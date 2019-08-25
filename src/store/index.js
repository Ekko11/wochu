import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import order from "./reducers/order"

const reducer  = combineReducers({
    order
})

const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store