import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import cakeReducer from './cake/cakeReducer'
import getReducer from './getRequest/getReducer'
import postReduce from './postRequest/postReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    user: getReducer,
    post: postReduce
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store