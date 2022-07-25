import { FINISH_LOADING, HIDE_ERROR, SHOW_ERROR, START_LOADING } from '../constants/actionTypes'

const initialState = {
  error: '',
  hasError: false,
  isLoading: false
}

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case FINISH_LOADING:
      return {
        ...state,
        isLoading: false
      }
    case SHOW_ERROR:
      return {
        ...state,
        error: action.payload.message,
        hasError: true
      }
    case HIDE_ERROR:
      return {
        ...state,
        error: '',
        hasError: false
      }
    default:
      return state
  }
}
