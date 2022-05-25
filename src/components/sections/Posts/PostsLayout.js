import React from 'react'

import { Container, Grid, Grow } from '@material-ui/core'

import { Posts } from '../Posts/Posts'
import { PostsForm } from './form/PostsForm'

export const PostsLayout = () => {
  return (
    <Grow in>
        <Container>
          <Grid alignItems='stretch' container justifyContent='space-between' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PostsForm />
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}
