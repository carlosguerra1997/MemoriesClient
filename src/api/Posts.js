import { clienteAxios } from '../config/axios'

export const getPosts = () => {
  const posts = clienteAxios.get('/')
  return posts
}
