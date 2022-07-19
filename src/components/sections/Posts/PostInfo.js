import React from 'react'
import styled from 'styled-components'

import { CardContent } from '@material-ui/core'
import { PostActions } from './PostActions'
import { Text } from '../../common/Text'

export const PostInfo = ({ creator, id, likes, message, tags, title }) => {
  return (
    <>
      <StyledContainer>
        <StyledTags align='left' variant='body2' color='textSecondary'>
          {tags.join(' ')}
        </StyledTags>
      </StyledContainer>
      <StyledCardContent>
        <StyledText align='left' variant='h5' gutterBottom>{title}</StyledText>
        <StyledText align='left' color='textSecondary' variant='body1'>{message}</StyledText>
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
  padding: 0;
  width: 100%;
`

const StyledText = styled(Text)`
  display: -webkit-box;
  padding: 0 1rem;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

const StyledTags = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`
