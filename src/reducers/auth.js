import { LOGOUT } from '../constants/actionTypes'

const initialState = {
  user: {}
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      localStorage.clear()
      return {
        user: {},
        ...state
      }
    default:
      return state
  }
}
