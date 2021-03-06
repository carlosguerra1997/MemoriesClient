import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { CircularProgress, Grid } from '@material-ui/core'
import { Post } from './Post'

export const Posts = () => {
  const { posts } = useSelector(state => state.posts)
  const { isLoading } = useSelector(state => state.loading)

  if (!posts?.length && !isLoading) return <p>No posts available</p>

  return (
    isLoading
      ? <StyledLoader><CircularProgress /></StyledLoader>
      : <StyledContainer container spacing={3}>
        {
          posts.map(post => (
            <Grid item key={post.post._id} xs={12} sm={12} md={6} lg={4}>
              <Post name={post.creatorName} {...post.post} />
            </Grid>
          ))
        }
      </StyledContainer>
  )
}

const StyledContainer = styled(Grid)`
  align-items: center;  
  display: flex;
`

const StyledLoader = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`
