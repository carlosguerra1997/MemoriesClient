import { SIGN_UP } from '../constants/actionTypes'

import { signInUser, signUpUser } from '../api/Auth'

export const signIn = (authInfo) => async dispatch => {
  try {
    await signInUser(authInfo)
    dispatch({ type: SIGN_UP })
  } catch (error) {
    throw new Error(error)
  }
}

export const signUp = (authInfo) => async dispatch => {
  try {
    await signUpUser(authInfo)
    dispatch({ type: SIGN_UP })
  } catch (error) {
    throw new Error(error)
  }
}
