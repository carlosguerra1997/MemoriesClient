import { ADD_NEW_POST, DELETE_POST, FINISH_LOADING, GET_ALL_POSTS, GET_RECOMMENDED_POSTS, GET_POSTS_BY_SEARCH, LIKE_POST, SET_ACTIVE_POST, START_LOADING, UPDATE_POST } from '../constants/actionTypes'

import { addNewPost, commentPost, deletePost, fetchPostsBySearch, getPosts, getPostsRecommended, likePost, updatePost } from '../api/Posts'

export const addPost = (post) => async dispatch => {
  try {
    const { data } = await addNewPost(post)
    dispatch({ type: ADD_NEW_POST, payload: data })
  } catch (error) {
    // IMPLEMENTAR MOSTRADO DE ALERTA.
    throw new Error(error)
  }
}

export const getAllPosts = (page) => async dispatch => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await getPosts(page)
    dispatch({ type: GET_ALL_POSTS, payload: data })
    dispatch({ type: FINISH_LOADING })
  } catch (error) {
    // IMPLEMENTAR MOSTRADO DE ALERTA.
    throw new Error(error)
  }
}

export const getRecommendedPosts = postId => async dispatch => {
  try {
    const { data } = await getPostsRecommended(postId)
    dispatch({ type: GET_RECOMMENDED_POSTS, payload: data })
  } catch (error) {
    // IMPLEMENTAR MOSTRADO DE ALERTA.
    throw new Error(error)
  }
}

export const getPostsBySearch = (searchQuery) => async dispatch => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await fetchPostsBySearch(searchQuery)
    dispatch({ type: GET_POSTS_BY_SEARCH, payload: data })
    dispatch({ type: FINISH_LOADING })
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

export const commentAPost = (postId, comment) => async dispatch => {
  try {
    console.log('Aqui entro... ', comment)
    const { data } = await commentPost(postId, comment)
    console.log('Data... ', data)
    // dispatch({ type: LIKE_POST, payload: data })
  } catch (error) {
    // IMPLEMENTAR MOSTRADO DE ALERTA.
    throw new Error(error)
  }
}

export const setActivePost = (postId) => async dispatch => {
  try {
    dispatch({ type: START_LOADING })
    dispatch({ type: SET_ACTIVE_POST, payload: postId })
    dispatch({ type: FINISH_LOADING })
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
