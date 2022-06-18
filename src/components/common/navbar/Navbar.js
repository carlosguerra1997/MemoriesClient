import React from 'react'
import styled from 'styled-components'

import memories from '../../../assets/memories.png'

import { AppBar, Toolbar } from '@material-ui/core'

import { Containers } from '../Container'
import { Image } from '../Image'
import { Text } from '../Text'

export const Navbar = () => {
  const user = null

  return (
    <StyledAppBar color='inherit' position='static'>
      <Containers align='center' display='flex'>
        <Text variant='h2'>Recuerdos</Text>
        <Image alt='memories' height='60' src={memories} width='60' />
      </Containers>
      <StyledToolbar>
        { !user && <Text variant='h6'>Implementar log in...</Text> }
      </StyledToolbar>
    </StyledAppBar>
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

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: flex-end;
  width: 400px;
`
