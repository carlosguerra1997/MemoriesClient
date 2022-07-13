import styled from 'styled-components'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getRecommendedPosts } from '../../../../actions/posts'
import { RecommendedPost } from './RecommendedPost'

import { Dividers } from '../../../common/Divider'
import { Text } from '../../../common/Text'

export const RecommendedPosts = () => {
  const dispatch = useDispatch()

  const { activePost } = useSelector(state => state.posts)
  const { recommendedPosts } = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getRecommendedPosts(activePost[0].post._id))
  }, [activePost])

  return (
    <div>
      <StyledText align='left' gutterBottom variant='h5'>También podría interesarte...</StyledText>
      <Dividers />
      {
        recommendedPosts.length && recommendedPosts.map(post => <RecommendedPost key={post.post._id} {...post} />)
      }
  </div>
  )
}

const StyledText = styled(Text)`
  margin: 1.5rem 0 0 1.5rem;
`
