import { ADD_NEW_POST, GET_ALL_POSTS } from '../types'

import { addNewPost, getPosts } from '../api/Posts'

export const addPost = (post) => async dispatch => {
  try {
    const { data } = await addNewPost(post)
    dispatch({ type: ADD_NEW_POST, payload: data })
  } catch (error) {
    throw new Error('Error... ', error)
  }
}

export const getAllPosts = () => async dispatch => {
  try {
    const { data } = await getPosts()
    dispatch({ type: GET_ALL_POSTS, payload: data })
  } catch (error) {
    throw new Error('Error... ', error)
  }
}
