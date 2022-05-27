import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { postsReducer } from '../reducers/posts'

const rootReducer = combineReducers({ postsReducer })

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
