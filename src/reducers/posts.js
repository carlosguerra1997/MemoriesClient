import { ADD_NEW_POST, GET_ALL_POSTS, SET_ACTIVE_POST, UPDATE_POST } from '../types'

const initialState = {
  posts: [],
  activePost: {}
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id === action.payload._id ? action.payload : post)
      }
    case SET_ACTIVE_POST:
      return {
        ...state,
        activePost: action.payload
      }
    default:
      return state
  }
}
