import { clienteAxios } from '../config/axios'

export const signInUser = async (post) => {
  const data = await clienteAxios.post('/auth/signin', post)
  return data
}

export const signUpUser = async (post) => {
  const data = await clienteAxios.post('/auth/signup', post)
  return data
}
