import React from 'react'

import { Container } from '@material-ui/core'

import { Navbar } from '../../common/navbar/Navbar'
import { PostsLayout } from '../Posts/PostsLayout'

export const Home = () => {
  return (
    <Container maxWidth='lg'>
      <Navbar />
      <PostsLayout />
    </Container>
  )
}
