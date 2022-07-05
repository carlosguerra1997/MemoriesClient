import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/auth'
import { loadingReducer } from '../reducers/loading'
import { postsReducer } from '../reducers/posts'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  posts: postsReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
