import React from 'react'
import styled from 'styled-components'

import { CardContent } from '@material-ui/core'
import { PostActions } from './PostActions'
import { Text } from '../../common/Text'

export const PostDetails = ({ message, tags }) => {
  return (
    <>
      <StyledContainer>
        <Text variant='body2' color='textSecondary'>
          {tags.map(tag => tag)}
        </Text>
      </StyledContainer>
      <CardContent>
        <Text variant='h5' gutterBottom>{message}</Text>
      </CardContent>
      <PostActions />
    </>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`
