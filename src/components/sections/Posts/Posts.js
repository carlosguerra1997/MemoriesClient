import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getAllPosts } from '../../../actions/posts'

import { CircularProgress, Grid } from '@material-ui/core'
import { Post } from './Post'

export const Posts = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getAllPosts())
  }, [])

  return (
    !posts.length
      ? <CircularProgress />
      : <StyledContainer container spacing={3}>
        {
          posts.map(post => (
            <Grid item key={post._id} xs={12} sm={6}>
              <Post {...post} />
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
