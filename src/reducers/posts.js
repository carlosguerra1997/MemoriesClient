import { ADD_NEW_POST, COMMENT_POST, DELETE_POST, GET_ALL_POSTS, GET_RECOMMENDED_POSTS, GET_POSTS_BY_SEARCH, LIKE_POST, SET_ACTIVE_POST, UPDATE_POST } from '../constants/actionTypes'

const initialState = {
  activePost: {},
  currentPage: 1,
  numberOfPages: '',
  posts: [],
  recommendedPosts: []
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
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
        posts: action.payload.allPosts
      }
    case GET_RECOMMENDED_POSTS:
      return {
        ...state,
        recommendedPosts: action.payload
      }
    case GET_POSTS_BY_SEARCH:
      return {
        ...state,
        posts: action.payload
      }
    case UPDATE_POST:
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map(post => post.post._id === action.payload.updatedPostLikes._id
          ? { post: action.payload.updatedPostLikes, creatorName: action.payload.name }
          : post
        )
      }
    case COMMENT_POST:
      return {
        ...state,
        posts: state.posts.map(post => post._id === action.payload.postUpdated._id
          ? action.payload
          : post
        )
      }
    case SET_ACTIVE_POST:
      return {
        ...state,
        activePost: state.posts.filter(post => post.post._id === action.payload)
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.post._id !== action.payload)
      }
    default:
      return state
  }
}
