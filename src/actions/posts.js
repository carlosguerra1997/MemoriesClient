import { useDispatch } from 'react-redux'
import { GET_ALL_POSTS } from '../types'

const getAllPosts = () => {
  const dispatch = useDispatch()
  dispatch({ type: GET_ALL_POSTS, payload: [] })
}
