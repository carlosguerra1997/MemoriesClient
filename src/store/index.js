import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { postsReducer } from '../reducers/posts'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const rootReducer = combineReducers({
  posts: postsReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
