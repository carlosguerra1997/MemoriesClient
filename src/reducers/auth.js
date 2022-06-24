import { CHECK_IF_SIGNED_IN, LOGOUT, SIGN_IN, SIGN_UP } from '../constants/actionTypes'

const initialState = {
  user: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_IF_SIGNED_IN:
      return {
        ...state,
        user: action.payload
      }
    case SIGN_IN:
    case SIGN_UP:
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }))
      return {
        ...state,
        user: action.payload.userInfo
      }
    case LOGOUT:
      localStorage.clear()
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}
