import React from 'react'
import styled from 'styled-components'

import { useHistory } from 'react-router-dom'
import { useGetPage } from '../../../hooks/useGetPage'

import { Container, Grid, Grow } from '@material-ui/core'

import { Paginate } from '../../common/Pagination'
import { Posts } from '../Posts/Posts'
import { PostsForm } from './form/PostsForm'

export const PostsLayout = () => {
  const page = useGetPage()
  const history = useHistory()

  return (
    <Grow in>
        <Container>
          <StyledGrid alignItems='stretch' container justifyContent='space-between' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PostsForm />
              <Paginate />
            </Grid>
          </StyledGrid>
        </Container>
      </Grow>
  )
}

const StyledGrid = styled(Grid)`
  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`
