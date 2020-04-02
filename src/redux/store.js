import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import authReducer from './reducers/auth'
import searchReducer from './reducers/search'
import searchFormReducer from './reducers/searchForm'
import favouritesReducer from './reducers/favourites'

let rootReducer = combineReducers({
    auth: authReducer,
    search: searchReducer,
    searchForm: searchFormReducer,
    favourites: favouritesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store