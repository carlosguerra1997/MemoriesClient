import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Post } from './Post'
import { Text } from '../../common/Text'

export const Posts = () => {
  const dispatch = useDispatch()

  useEffect(() => {

  }, [])

  return (
    <div>
      <Text variant='h1'>Posts</Text>
      <Post />
      <Post />
    </div>
  )
}
