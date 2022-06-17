import { ADD_NEW_POST, DELETE_POST, GET_ALL_POSTS, LIKE_POST, SET_ACTIVE_POST, UPDATE_POST } from '../types'

import { addNewPost, deletePost, getPosts, likePost, updatePost } from '../api/Posts'

export const addPost = (post) => async dispatch => {
  try {
    const { data } = await addNewPost(post)
    dispatch({ type: ADD_NEW_POST, payload: data })
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllPosts = () => async dispatch => {
  try {
    const { data } = await getPosts()
    dispatch({ type: GET_ALL_POSTS, payload: data })
  } catch (error) {
    throw new Error(error)
  }
}

export const updateAPost = (postId, post) => async dispatch => {
  try {
    const { data } = await updatePost(postId, post)
    dispatch({ type: UPDATE_POST, payload: data })
  } catch (error) {
    throw new Error(error)
  }
}

export const likeAPost = (postId) => async dispatch => {
  try {
    const { data } = await likePost(postId)
    dispatch({ type: LIKE_POST, payload: data })
  } catch (error) {
    throw new Error(error)
  }
}

export const setActivePost = (postId) => async dispatch => {
  try {
    dispatch({ type: SET_ACTIVE_POST, payload: postId })
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteAPost = (postId) => async dispatch => {
  try {
    await deletePost(postId)
    dispatch({ type: DELETE_POST, payload: postId })
  } catch (error) {
    throw new Error(error)
  }
}
