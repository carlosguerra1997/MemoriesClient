import { SIGN_UP } from '../constants/actionTypes'

import { signUpUser } from '../api/Auth'

export const signUp = (values) => async dispatch => {
  try {
    await signUpUser(values)
    dispatch({ type: SIGN_UP })
  } catch (error) {
    throw new Error(error)
  }
}
