import { ADD_NEW_POST, DELETE_POST, GET_ALL_POSTS, GET_POSTS_BY_SEARCH, LIKE_POST, SET_ACTIVE_POST, UPDATE_POST } from '../constants/actionTypes'

import { addNewPost, deletePost, fetchPostsBySearch, getPosts, likePost, updatePost } from '../api/Posts'

export const addPost = (post) => async dispatch => {
  try {
    const { data } = await addNewPost(post)
    dispatch({ type: ADD_NEW_POST, payload: data })
  } catch (error) {
    // IMPLEMENTAR MOSTRADO DE ALERTA.
    throw new Error(error)
  }
}

export const getAllPosts = () => async dispatch => {
  try {
    const { data } = await getPosts()
    dispatch({ type: GET_ALL_POSTS, payload: data })
  } catch (error) {
    // IMPLEMENTAR MOSTRADO DE ALERTA.
    throw new Error(error)
  }
}

export const getPostsBySearch = searchQuery => async dispatch => {
  try {
    const { data } = await fetchPostsBySearch(searchQuery)
    dispatch({ type: GET_POSTS_BY_SEARCH, payload: data })
  } catch (error) {
    // IMPLEMENTAR MOSTRADO DE ALERTA.
    throw new Error(error)
  }
}

export const updateAPost = (postId, post) => async dispatch => {
  try {
    const { data } = await updatePost(postId, post)
    dispatch({ type: UPDATE_POST, payload: data })
  } catch (error) {
    // IMPLEMENTAR MOSTRADO DE ALERTA.
    throw new Error(error)
  }
}

export const likeAPost = (postId) => async dispatch => {
  try {
    const { data } = await likePost(postId)
    dispatch({ type: LIKE_POST, payload: data })
  } catch (error) {
    // IMPLEMENTAR MOSTRADO DE ALERTA.
    throw new Error(error)
  }
}

export const setActivePost = (postId) => async dispatch => {
  try {
    dispatch({ type: SET_ACTIVE_POST, payload: postId })
  } catch (error) {
    // IMPLEMENTAR MOSTRADO DE ALERTA.
    throw new Error(error)
  }
}

export const deleteAPost = (postId) => async dispatch => {
  try {
    await deletePost(postId)
    dispatch({ type: DELETE_POST, payload: postId })
  } catch (error) {
    // IMPLEMENTAR MOSTRADO DE ALERTA.
    throw new Error(error)
  }
}
