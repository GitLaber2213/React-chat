import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk as thunkMiddleWare } from "redux-thunk"
import chatsReducer from './chatsReducer'
import menuReducer from './menuReducer'
import profileReducer from "./profileReducer"

let redusers = combineReducers({
    chatsPage: chatsReducer,
    siteBarMenu: menuReducer,
    authUser: profileReducer
})


let store = createStore(redusers, applyMiddleware(thunkMiddleWare))

export default store