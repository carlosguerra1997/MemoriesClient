import { clienteAxios } from '../config/axios'

export const getPosts = async () => {
  const posts = await clienteAxios.get('/posts/')
  return posts
}
