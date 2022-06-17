import { ADD_NEW_POST, DELETE_POST, GET_ALL_POSTS, LIKE_POST, SET_ACTIVE_POST, UPDATE_POST } from '../types'

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
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post)
      }
    case SET_ACTIVE_POST:
      return {
        ...state,
        activePost: action.payload
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      }
    default:
      return state
  }
}
