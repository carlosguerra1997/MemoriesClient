import React from 'react'
import styled from 'styled-components'

import { CardContent } from '@material-ui/core'
import { PostActions } from './PostActions'
import { Text } from '../../common/Text'

export const PostDetails = ({ creator, id, likes, message, tags, title }) => {
  return (
    <>
      <StyledContainer>
        <Text variant='body2' color='textSecondary'>
          {tags.map(tag => tag)}
        </Text>
      </StyledContainer>
      <StyledCardContent>
        <Text align='left' variant='h5' gutterBottom>{title}</Text>
        <Text align='left' color='textSecondary' variant='body1'>{message}</Text>
      </StyledCardContent>
      <PostActions creator={creator} id={id} likes={likes} />
    </>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`

const StyledCardContent = styled(CardContent)`
  margin: 15px;
  padding: 0;
`
