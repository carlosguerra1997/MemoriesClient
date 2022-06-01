import { ADD_NEW_POST, GET_ALL_POSTS } from '../types'

const initialState = {
  posts: []
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
    default:
      return state
  }
}
