import React from 'react'

import { Navbar } from '../../common/navbar/Navbar'

import { Container } from '@material-ui/core'

import { PostsLayout } from '../Posts/PostsLayout'

export const Home = () => {
  return (
    <Container maxWidth='lg'>
      <Navbar />
      <PostsLayout />
    </Container>
  )
}
