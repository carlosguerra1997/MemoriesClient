import React from 'react'

import memories from '../../../assets/memories.png'

import { PostsLayout } from '../Posts/PostsLayout'

import { AppBar, Container } from '@material-ui/core'
import { Image } from '../../common/Image'
import { Text } from '../../common/Text'

export const Home = () => {
  return (
    <Container maxWidth='lg'>
      <AppBar color='inherit' position='static'>
        <Text variant='h2'>Memories</Text>
        <Image alt='memories' height='60' src={memories} width='60' />
      </AppBar>
      <PostsLayout />
    </Container>
  )
}
