import { GET_ALL_POSTS } from '../types'

import { getPosts } from '../api/Posts'

export const getAllPosts = () => async dispatch => {
  try {
    const { data } = await getPosts()
    dispatch({ type: GET_ALL_POSTS, payload: data })
  } catch (error) {
    throw new Error('Error... ', error)
  }
}
