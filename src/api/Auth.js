import { API } from '../config/axios'

export const signInUser = async (authInfo) => await API.post('/auth/signin', authInfo)
export const signUpUser = async (authInfo) => await API.post('/auth/signup', authInfo)
