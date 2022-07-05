import { START_LOADING, FINISH_LOADING } from '../constants/actionTypes'

const initialState = {
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
    default:
      return state
  }
}
