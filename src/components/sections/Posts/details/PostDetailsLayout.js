import { Container } from '@material-ui/core'
import React from 'react'

import { Navbar } from '../../../common/navbar/Navbar'
import { PostDetails } from './PostDetails'

export const PostDetailsLayout = () => {
  return (
        <Container maxWidth='xl'>
            <Navbar />
            <PostDetails />
        </Container>
  )
}
