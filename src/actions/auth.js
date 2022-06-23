import { CHECK_IF_SIGNED_IN, LOGOUT, SIGN_IN, SIGN_UP } from '../constants/actionTypes'

import { signInUser, signUpUser } from '../api/Auth'

export const signIn = (authInfo) => async dispatch => {
  try {
    const { data } = await signInUser(authInfo)
    dispatch({ type: SIGN_IN, payload: data })
  } catch (error) {
    throw new Error(error)
  }
}

export const signUp = (authInfo) => async dispatch => {
  try {
    const { data } = await signUpUser(authInfo)
    dispatch({ type: SIGN_UP, payload: data })
  } catch (error) {
    throw new Error(error)
  }
}

export const checkIfSingedIn = () => async dispatch => {
  try {
    if (localStorage.getItem('profile')) {
      const { userInfo } = JSON.parse(localStorage.getItem('profile'))
      dispatch({ type: CHECK_IF_SIGNED_IN, payload: userInfo })
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const logout = () => async dispatch => {
  try {
    dispatch({ type: LOGOUT })
  } catch (error) {
    throw new Error(error)
  }
}
