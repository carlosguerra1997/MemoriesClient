import { clienteAxios } from '../config/axios'

export const addNewPost = async (post) => {
  const data = await clienteAxios.post('/posts/', post)
  return data
}

export const getPosts = async () => {
  const posts = await clienteAxios.get('/posts/')
  return posts
}

export const updatePost = async (postId, post) => {
  const updatedPost = await clienteAxios.put(`/posts/${postId}`, post)
  return updatedPost
}

export const deletePost = async (postId) => {
  const deletedPost = await clienteAxios.delete(`/posts/${postId}`)
  return deletedPost
}
