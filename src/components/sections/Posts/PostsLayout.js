import React from 'react'
import styled from 'styled-components'

import { Container, Grid, Grow } from '@material-ui/core'

import { AppBars } from '../../common/AppBar'
import { Paginate } from '../../common/Pagination'
import { Posts } from '../Posts/Posts'
import { PostsForm } from './form/PostsForm'

export const PostsLayout = () => {
  return (
    <Grow in>
        <StyledContainer>
          <StyledGrid alignItems='stretch' container justifyContent='space-between' spacing={3}>
            <Grid item xs={12} sm={6} md={9}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBars />
              <PostsForm />
              <Paginate />
            </Grid>
          </StyledGrid>
        </StyledContainer>
      </Grow>
  )
}

const StyledContainer = styled(Container)`
  max-width: 100%;
`

const StyledGrid = styled(Grid)`
  @media screen and (max-width: 599px) {
    flex-direction: column-reverse;
  }
`
