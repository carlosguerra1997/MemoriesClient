import { API } from '../config/axios'

export const addNewPost = async (post) => await API.post('/posts/', post)
export const getPosts = async () => await API.get('/posts/')
export const updatePost = async (postId, post) => await API.put(`/posts/${postId}`, post)
export const likePost = async (postId) => await API.put(`/posts/${postId}/like`)
export const deletePost = async (postId) => await API.delete(`/posts/${postId}`)
