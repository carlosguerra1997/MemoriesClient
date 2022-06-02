import React from 'react'
import styled from 'styled-components'

import memories from '../../../assets/memories.png'

import { AppBar, Container } from '@material-ui/core'
import { Image } from '../../common/Image'
import { PostsLayout } from '../Posts/PostsLayout'
import { Text } from '../../common/Text'

export const Home = () => {
  return (
    <Container maxWidth='lg'>
      <StyledAppBar color='inherit' position='static'>
        <Text variant='h2'>Recuerdos</Text>
        <Image alt='memories' height='60' src={memories} width='60' />
      </StyledAppBar>
      <PostsLayout />
    </Container>
  )
}

const StyledAppBar = styled(AppBar)`
  align-items: center;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0;
`
