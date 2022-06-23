import { clienteAxios } from '../config/axios'

export const signInUser = async (authInfo) => {
  const data = await clienteAxios.post('/auth/signin', authInfo)
  return data
}

export const signUpUser = async (authInfo) => {
  const data = await clienteAxios.post('/auth/signup', authInfo)
  return data
}
