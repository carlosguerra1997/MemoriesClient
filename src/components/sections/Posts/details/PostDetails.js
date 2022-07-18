import styled from 'styled-components'
import React from 'react'
import { useSelector } from 'react-redux'

import { Comments } from './comment/Comments'

import { Dividers } from '../../../common/Divider'
import { Paper } from '@material-ui/core'
import { Text } from '../../../common/Text'

export const PostDetails = () => {
  const { activePost } = useSelector(state => state.posts)
  const { creatorName, post } = activePost[0]

  return (
    <StyledPaper elevation={3}>
      <StyledContainer>
        <StyledSection>
          <Text align='left' variant='h3'>{post.title}</Text>
          <Text align='left' color='textSecondary' variant='h6'>{post.tags}</Text>
          <Text align='left' gutterBottom variant='body1'>{post.message}</Text>
          <Text align='right' variant='h6'>Autor: {creatorName}</Text>
          <StyledDivider />
          <Comments post={post} />
        </StyledSection>
        <StyledImageContainer>
          <StyledImage src={post.file} />
        </StyledImageContainer>
      </StyledContainer>
    </StyledPaper>
  )
}

const StyledPaper = styled(Paper)`
  border-radius: 1rem;
`

const StyledContainer = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const StyledSection = styled.div`
  border-radius: 1rem;
  padding 2rem;
  width: 75%;

  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`

const StyledImage = styled.img`
  border-radius: 2rem;
  max-height: 400px;
  padding: 1rem;
  width: 100%;
`

const StyledDivider = styled(Dividers)`
  &&& {
    margin: 1rem 0;
  }
`
