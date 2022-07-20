import { API } from '../config/axios'

export const addNewPost = async post => await API.post('/posts/', post)
export const commentPost = async (postId, comment) => await API.post(`/posts/${postId}/commentPost`, comment)
export const getPosts = async page => await API.get(`/posts?page=${page}`)
export const getPostsRecommended = async postId => await API.get(`/posts/${postId}`)
export const fetchPostsBySearch = async searchQuery => await API.get(`/posts/search?searchQuery=${searchQuery.searchMemories}`)
export const updatePost = async (postId, post) => await API.put(`/posts/${postId}`, post)
export const likePost = async postId => await API.put(`/posts/${postId}/like`)
export const deletePost = async postId => await API.delete(`/posts/${postId}`)
