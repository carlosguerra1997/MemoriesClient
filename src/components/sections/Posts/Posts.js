import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllPosts } from '../../../actions/posts'

import { Post } from './Post'
import { Text } from '../../common/Text'

export const Posts = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getAllPosts())
  }, [])

  return (
    <div>
      <Text variant='h1'>Posts</Text>
      <Post />
      <Post />
    </div>
  )
}
