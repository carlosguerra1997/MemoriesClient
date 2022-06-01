import { clienteAxios } from '../config/axios'

export const addNewPost = async (post) => {
  const data = await clienteAxios.post('/posts/', post)
  return data
}

export const getPosts = async () => {
  const posts = await clienteAxios.get('/posts/')
  return posts
}
